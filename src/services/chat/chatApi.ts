import axios from 'axios';
import type { ConsultationMessage } from '../../types';

/** 가상 메시지 목록 검색 **/
export const fetchMessages = async (
  roomId: string | number,
  page: number = 0,
  size: number = 20,
): Promise<{ content: ConsultationMessage[]; last: boolean }> => {
  const res = await axios.get(`/api/v1/consultation/rooms/${roomId}/messages`, {
    params: { page, size, sort: 'sentAt,desc' },
    withCredentials: true,
  });
  return res.data;
};

/** 메시지 발송 (TEXT) **/
export const sendTextMessage = async ({
  roomId,
  payload,
}: {
  roomId: string;
  payload: {
    senderId: number;
    senderNickname: string;
    content: string;
    replyTo?: number | null;
  };
}): Promise<void> => {
  const now = new Date().toISOString();

  await axios.post(
    '/api/v1/consultation/messages/text',
    {
      consultationRoomId: Number(roomId),
      senderId: payload.senderId,
      senderNickname: payload.senderNickname,
      message: payload.content,
      type: 'TEXT',
      sentAt: now,
      replyTo: payload.replyTo || null,
    },
    { withCredentials: true },
  );
};

/** 이미지 메시지 발송 **/
export const sendImageMessage = async ({
  roomId,
  payload,
}: {
  roomId: string;
  payload: {
    senderId: number;
    senderNickname: string;
    content: string;
    imageFile: File;
    replyTo?: number | null;
  };
}): Promise<void> => {
  const formData = new FormData();
  formData.append('image', payload.imageFile);
  formData.append('content', payload.content);
  formData.append('roomId', roomId);
  formData.append('senderId', String(payload.senderId));
  formData.append('senderNickname', payload.senderNickname);
  if (payload.replyTo) {
    formData.append('replyTo', String(payload.replyTo));
  }

  await axios.post('/api/v1/consultation/messages/image', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
    withCredentials: true,
  });
};

/** 뒤에서 발송된 목록을 읽은 것으로 표시 **/
export const markAsRead = async ({
  roomId,
  messageId,
}: {
  roomId: string;
  messageId: number;
}) => {
  await axios.patch(
    `/api/v1/consultation/rooms/${roomId}/read`,
    { messageId },
    { withCredentials: true },
  );
};
