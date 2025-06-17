import { useMutation, useQuery } from '@tanstack/react-query';
import {
  processPayment,
  getPaymentStatus,
  cancelPayment,
  type PaymentRequest,
  type PaymentResponse,
  type PaymentStatus,
} from '../services/payment/paymentApi';

// 결제 처리
export const useProcessPayment = () => {
  return useMutation<PaymentResponse, Error, PaymentRequest>({
    mutationFn: processPayment,
  });
};

// 결제 상태 조회
export const usePaymentStatus = (paymentId: string | undefined) => {
  return useQuery<PaymentStatus>({
    queryKey: ['payment', paymentId],
    queryFn: () => getPaymentStatus(paymentId!),
    enabled: !!paymentId,
    refetchInterval: 1000, // 1초마다 상태 확인
  });
};

// 결제 취소
export const useCancelPayment = () => {
  return useMutation({
    mutationFn: cancelPayment,
  });
};
