import axios from 'axios';
import type { LoginRequest, LoginResponse } from '../../types/api/auth/login';

export async function loginApi(data: LoginRequest): Promise<LoginResponse> {
  const response = await axios.post<LoginResponse>('/api/v1/users/login', data);
  return response.data;
}
