// src/services/auth/resetPasswordApi.ts
import { axiosInstance } from '../api';
import type {
  RequestResetPasswordRequest,
  ResetPasswordRequest,
  VerifyResetCodeRequest,
} from '../../types/api/auth/resetPassword';

export const requestResetPasswordApi = async (
  data: RequestResetPasswordRequest,
): Promise<void> => {
  await axiosInstance.post('/api/v1/users/reset-password/request', data);
};

export const verifyResetCodeApi = async (
  data: VerifyResetCodeRequest,
): Promise<{ token: string }> => {
  const response = await axiosInstance.post(
    '/api/v1/users/reset-password/verify',
    data,
  );
  return response.data;
};

export const resetPasswordApi = async (
  data: ResetPasswordRequest,
): Promise<void> => {
  await axiosInstance.post('/api/v1/users/reset-password', data);
};
