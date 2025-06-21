// src/services/auth/resetPasswordApi.ts
import { axiosInstance } from '../api';
import type {
  RequestResetPasswordRequest,
  VerifyResetCodeRequest,
  ResetPasswordRequest,
} from '../../types/auth';

// 비밀번호 재설정 요청 (명세서에 맞춰 수정)
export const requestResetPasswordApi = async (
  data: RequestResetPasswordRequest,
) => {
  const response = await axiosInstance.post(
    '/api/v1/auth/request-reset-password',
    data,
  );
  return response.data;
};

// 비밀번호 재설정 코드 확인 (명세서에 맞춰 수정)
export const verifyResetCodeApi = async (data: VerifyResetCodeRequest) => {
  const response = await axiosInstance.post(
    '/api/v1/auth/verify-reset-code',
    data,
  );
  return response.data;
};

// 비밀번호 재설정 (명세서에 맞춰 수정)
export const resetPasswordApi = async (data: ResetPasswordRequest) => {
  const response = await axiosInstance.post(
    '/api/v1/auth/reset-password',
    data,
  );
  return response.data;
};
