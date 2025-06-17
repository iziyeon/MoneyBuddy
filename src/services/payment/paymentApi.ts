import { axiosInstance } from '../api';

export interface PaymentRequest {
  expertId: number;
  amount: number;
  method: string;
  consultationDate: string;
  consultationTime: string;
  request?: string;
  usedPoints?: number;
}

export interface PaymentResponse {
  success: boolean;
  paymentId: string;
  transactionId: string;
  message: string;
}

export interface PaymentStatus {
  paymentId: string;
  status: 'pending' | 'completed' | 'failed' | 'cancelled';
  amount: number;
  method: string;
  paidAt?: string;
}

// 결제 처리
export const processPayment = async (
  data: PaymentRequest,
): Promise<PaymentResponse> => {
  const response = await axiosInstance.post('/api/v1/payments', data);
  return response.data;
};

// 결제 상태 확인
export const getPaymentStatus = async (
  paymentId: string,
): Promise<PaymentStatus> => {
  const response = await axiosInstance.get(`/api/v1/payments/${paymentId}`);
  return response.data;
};

// 결제 취소
export const cancelPayment = async (
  paymentId: string,
): Promise<{ message: string }> => {
  const response = await axiosInstance.post(
    `/api/v1/payments/${paymentId}/cancel`,
  );
  return response.data;
};
