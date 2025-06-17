import { axiosInstance } from '../api';
import type { ConsultationHistory } from '../../types/consultation';

// 상담 목록 조회
export const getConsultations = async (): Promise<ConsultationHistory[]> => {
  const response = await axiosInstance.get('/api/v1/consultations');
  return response.data;
};

// 상담 상세 조회
export const getConsultationById = async (
  id: number,
): Promise<ConsultationHistory> => {
  const response = await axiosInstance.get(`/api/v1/consultations/${id}`);
  return response.data;
};

// 상담 취소
export const cancelConsultation = async (
  id: number,
): Promise<{ message: string }> => {
  const response = await axiosInstance.patch(
    `/api/v1/consultations/${id}/cancel`,
  );
  return response.data;
};
