import { fetchCall } from '../api';
import { API_ENDPOINTS } from '../../config/api';
import type { LoginRequest, LoginResponse } from '../../types/api/auth/login';

export async function loginApi(data: LoginRequest): Promise<LoginResponse> {
  return fetchCall<LoginResponse>(API_ENDPOINTS.login, 'post', data);
}
