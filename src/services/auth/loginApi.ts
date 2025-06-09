// src/services/auth/loginApi.ts
import { axiosInstance } from '../api';
import type { LoginRequest, LoginResponse } from '../../types/api/auth/login';

export async function loginApi(data: LoginRequest): Promise<LoginResponse> {
  const response = await axiosInstance.post('/api/v1/users/login', data);
  return response.data;
}
