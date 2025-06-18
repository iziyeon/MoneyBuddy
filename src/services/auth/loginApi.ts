// src/services/auth/loginApi.ts
import { axiosInstance } from '../api';
import type { LoginRequest, LoginResponse } from '../../types/auth';

export const loginApi = async (data: LoginRequest): Promise<LoginResponse> => {
  console.log('🔐 로그인 API 호출');
  const response = await axiosInstance.post('/api/v1/users/login', data);
  console.log('✅ 로그인 성공');
  return response.data;
};
