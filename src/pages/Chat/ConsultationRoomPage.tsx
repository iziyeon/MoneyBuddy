import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ChatBox from '../../components/pages/Chat/ChatBox';
import ChatInput from '../../components/pages/Chat/ChatInput';
import ChatHeader from '../../components/pages/Chat/ChatHeader';
import ChatNotice from '../../components/pages/Chat/ChatNotice';
import { connectStomp, disconnectStomp } from '../../utils/stompClient';
import { useChatStore } from '../../stores/useChatStore';
import { useSendTextMessage, useSendImageMessage } from '../../hooks/useChat';
import type { ConsultationMessage } from '../../types';
import ChatSearchBar from '../../components/pages/Chat/ChatSearchBar';

export default function ConsultationRoomPage() {
  const { roomId } = useParams<{ roomId: string }>();
  const senderId = Number(localStorage.getItem('userId'));
  const senderNickname = localStorage.getItem('nickname') || '알 수 없음';

  const { showSearchInput, addMessage, replyTarget, setReplyTarget } =
    useChatStore();

  const sendTextMutation = useSendTextMessage();
  const sendImageMutation = useSendImageMessage();

  useEffect(() => {
    if (!roomId) return;

    connectStomp({
      roomId,
      token: '',
      onMessage: (msg: ConsultationMessage) => {
        addMessage(msg);
      },
    });

    return () => disconnectStomp();
  }, [roomId, addMessage]);

  const handleSend = async (text: string, imageFile?: File) => {
    if (!roomId) return;

    if (imageFile) {
      sendImageMutation.mutate({
        roomId,
        payload: {
          senderId,
          senderNickname,
          content: text,
          imageFile,
          replyTo: replyTarget?.messageId,
        },
      });
      setReplyTarget(null);
      return;
    }

    sendTextMutation.mutate({
      roomId,
      payload: {
        senderId,
        senderNickname,
        content: text,
        replyTo: replyTarget?.messageId,
      },
    });

    const localMessage: ConsultationMessage = {
      consultationRoomId: Number(roomId),
      senderId,
      senderNickname,
      message: text,
      type: 'TEXT',
      imageUrl: null,
      sentAt: new Date().toISOString(),
      isReadByReceiver: false,
      messageId: Date.now(),
      replyToMessage: replyTarget || undefined,
    };

    addMessage(localMessage);
    setReplyTarget(null);
  };

  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto">
      <ChatHeader />
      {showSearchInput && <ChatSearchBar />}
      <ChatNotice />
      <div className="flex-1 overflow-y-auto">
        {roomId && <ChatBox roomId={roomId} myId={senderId} />}
      </div>

      <ChatInput onSend={handleSend} />
    </div>
  );
}
