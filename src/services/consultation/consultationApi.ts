import { axiosInstance } from '../api';
import { API_ENDPOINTS } from '../../config/api';

// 상담 내역 조회 (명세서: GET /api/v1/consultation/rooms)
export const getConsultationsApi = async () => {
  const response = await axiosInstance.get(API_ENDPOINTS.consultations);
  return response.data;
};

// 상담 상세 조회 (명세서: GET /api/v1/consultation/rooms/{room_id}/detail)
export const getConsultationDetailApi = async (roomId: number) => {
  const response = await axiosInstance.get(
    API_ENDPOINTS.consultationDetail(roomId),
  );
  return response.data;
};

// 상담 채팅방 생성 (명세서: POST /api/v1/consultation/rooms)
export const createConsultationApi = async (consultationData: {
  consultantId: number;
  topic: string;
  durationMinutes: number;
  amount: number;
  paymentMethod: string;
}) => {
  const response = await axiosInstance.post(
    API_ENDPOINTS.consultations,
    consultationData,
  );
  return response.data;
};

// 상담방 나가기 (명세서: DELETE /api/v1/consultation/rooms/{room_id}/leave)
export const cancelConsultationApi = async (roomId: number) => {
  const response = await axiosInstance.delete(
    API_ENDPOINTS.consultationLeave(roomId),
  );
  return response.data;
};

// 메시지 목록 조회 (명세서: GET /api/v1/consultation/rooms/{room_id}/messages)
export const getConsultationMessagesApi = async (roomId: number) => {
  const response = await axiosInstance.get(
    API_ENDPOINTS.consultationMessages(roomId),
  );
  return response.data;
};

// 메시지 읽음 처리 (명세서: PATCH /api/v1/consultation/rooms/{room_id}/read)
export const markMessagesAsReadApi = async (roomId: number) => {
  const response = await axiosInstance.patch(
    API_ENDPOINTS.consultationRead(roomId),
  );
  return response.data;
};

// 상담 상태 변경 (명세서: PATCH /api/v1/consultation/rooms/{id}/status)
export const updateConsultationStatusApi = async (
  roomId: number,
  userId: number,
  newStatus: 'REQUESTED' | 'SCHEDULED' | 'COMPLETED',
) => {
  const response = await axiosInstance.patch(
    API_ENDPOINTS.consultationStatus(roomId),
    { userId, newStatus },
  );
  return response.data;
};

// 이미지 업로드 (명세서: POST /api/v1/consultation/{consultation_room_id}/image)
export const uploadConsultationImageApi = async (
  roomId: number,
  imageFile: File,
) => {
  const formData = new FormData();
  formData.append('image', imageFile);

  const response = await axiosInstance.post(
    API_ENDPOINTS.consultationImage(roomId),
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
  return response.data;
};

// 호환성을 위한 별칭
export const cancelConsultation = cancelConsultationApi;
