// src/services/auth/resetPasswordApi.ts
import { axiosInstance } from '../api';
import type {
  RequestResetPasswordRequest,
  ResetPasswordRequest,
  VerifyResetCodeRequest,
} from '../../types/auth';

export const requestResetPasswordApi = async (
  data: RequestResetPasswordRequest,
) => {
  console.log('📧 비밀번호 재설정 요청 API 호출');
  const response = await axiosInstance.post(
    '/api/v1/users/reset-password/request',
    data,
  );
  console.log('✅ 비밀번호 재설정 요청 성공');
  return response.data;
};

export const verifyResetCodeApi = async (data: VerifyResetCodeRequest) => {
  console.log('🔢 인증 코드 확인 API 호출');
  const response = await axiosInstance.post(
    '/api/v1/users/reset-password/verify',
    data,
  );
  console.log('✅ 인증 코드 확인 성공');
  return response.data;
};

export const resetPasswordApi = async (data: ResetPasswordRequest) => {
  console.log('🔒 비밀번호 재설정 API 호출');
  const response = await axiosInstance.post(
    '/api/v1/users/reset-password',
    data,
  );
  console.log('✅ 비밀번호 재설정 성공');
  return response.data;
};
