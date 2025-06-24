import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  processPaymentApi,
  getPaymentHistoryApi,
  getPaymentStatusApi,
  cancelPaymentApi,
} from '../services/payment/paymentApi';

// 결제 처리
export const useProcessPayment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: processPaymentApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['payments'] });
    },
  });
};

// 결제 상태 조회
export const usePaymentStatus = (paymentId: string | undefined) => {
  return useQuery({
    queryKey: ['payment', paymentId],
    queryFn: () => (paymentId ? getPaymentStatusApi(paymentId) : null),
    enabled: !!paymentId,
  });
};

// 결제 취소
export const useCancelPayment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cancelPaymentApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['payments'] });
    },
  });
};

// 결제 내역 조회
export const usePaymentHistory = () => {
  return useQuery({
    queryKey: ['payments'],
    queryFn: getPaymentHistoryApi,
  });
};
