import { axiosInstance } from '../api';
import type {
  User,
  UpdateUserRequest,
  UpdateUserResponse,
} from '../../types/auth';

// 현재 사용자 정보 조회 - 명세서 준수 (GET /api/v1/users/me)
export const getCurrentUser = async (): Promise<User> => {
  const response = await axiosInstance.get('/api/v1/users/me');
  return response.data;
};

// 사용자 정보 수정 - 명세서 준수 (PUT /api/v1/users/{id})
export const updateUser = async (
  id: number,
  data: UpdateUserRequest,
): Promise<UpdateUserResponse> => {
  const response = await axiosInstance.put(`/api/v1/users/${id}`, data);
  return response.data;
};

// 사용자 정보 조회 (ID로) - 명세서 준수 (GET /api/v1/users/{id})
export const getUserById = async (id: number): Promise<User> => {
  const response = await axiosInstance.get(`/api/v1/users/${id}`);
  return response.data;
};

// 사용자 설정 조회 API - 명세서 준수 (GET /api/v1/users/{user_id}/settings)
export const getUserSettings = async (userId: number) => {
  const response = await axiosInstance.get(`/api/v1/users/${userId}/settings`);
  return response.data;
};

// 사용자 설정 수정 API - 명세서 준수 (PUT /api/v1/users/{user_id}/settings)
export const updateUserSettings = async (userId: number, settings: any) => {
  const response = await axiosInstance.put(
    `/api/v1/users/${userId}/settings`,
    settings,
  );
  return response.data;
};

// 비밀번호 확인 API (명세서에 맞춰 추가)
export const verifyPasswordApi = async (password: string) => {
  console.log('🔐 비밀번호 확인 API 호출');
  const response = await axiosInstance.post('/api/v1/auth/verify-password', {
    password,
  });
  console.log('✅ 비밀번호 확인 성공');
  return response.data;
};
