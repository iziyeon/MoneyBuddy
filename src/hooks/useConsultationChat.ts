import { useEffect } from 'react';
import axios from 'axios';
import {
  connectStomp,
  disconnectStomp,
  sendMessage,
} from '../utils/stompClient';
import { useChatStore } from '../stores/useChatStore';
import type { ConsultationMessage } from '../types';
export const useConsultationChat = (roomId: string | undefined) => {
  const { addMessage, replyTarget, setReplyTarget } = useChatStore();

  const senderId = Number(localStorage.getItem('userId'));
  const senderNickname = localStorage.getItem('nickname') || '알 수 없음';

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
  }, [roomId]);

  const handleSend = async (text: string, imageFile?: File) => {
    if (!roomId) return;
    const now = new Date().toISOString();

    if (imageFile) {
      const formData = new FormData();
      formData.append('image', imageFile);
      formData.append('content', text);
      formData.append('roomId', roomId);
      formData.append('senderId', String(senderId));
      formData.append('senderNickname', senderNickname);
      if (replyTarget)
        formData.append('replyTo', String(replyTarget.messageId));

      await axios.post('/api/v1/consultation/messages/image', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        withCredentials: true,
      });
      setReplyTarget(null);
      return;
    }

    sendMessage({
      roomId,
      message: {
        senderId,
        senderNickname,
        content: text,
        contentType: 'TEXT',
        sentAt: now,
        imageUrl: null,
        replyTo: replyTarget?.messageId || null,
      },
    });

    const localMessage: ConsultationMessage = {
      consultationRoomId: Number(roomId),
      senderId,
      senderNickname,
      message: text,
      type: 'TEXT',
      imageUrl: null,
      sentAt: now,
      isReadByReceiver: false,
      messageId: Date.now(),
      replyToMessage: replyTarget || undefined,
    };

    addMessage(localMessage);
    setReplyTarget(null);
  };

  return { handleSend };
};
