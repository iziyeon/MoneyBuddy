import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import {
  getConsultationsApi,
  getConsultationDetailApi,
  cancelConsultationApi,
  createConsultationApi,
} from '../services/consultation/consultationApi';

// 상담 목록 조회
export const useConsultations = () => {
  return useQuery({
    queryKey: ['consultations'],
    queryFn: getConsultationsApi,
  });
};

// 상담 상세 조회
export const useConsultation = (roomId: number | undefined) => {
  return useQuery({
    queryKey: ['consultation', roomId],
    queryFn: () => (roomId ? getConsultationDetailApi(roomId) : null),
    enabled: !!roomId,
  });
};

// 상담 예약
export const useCreateConsultation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createConsultationApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['consultations'] });
    },
  });
};

// 상담 취소
export const useCancelConsultation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cancelConsultationApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['consultations'] });
    },
  });
};
