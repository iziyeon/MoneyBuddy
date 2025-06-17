import { axiosInstance } from '../api';
import type {
  User,
  UpdateUserRequest,
  UpdateUserResponse,
} from '../../types/auth';

// 현재 사용자 정보 조회
export const getCurrentUser = async (): Promise<User> => {
  const response = await axiosInstance.get('/api/v1/users/me');
  return response.data;
};

// 사용자 정보 수정
export const updateUser = async (
  id: number,
  data: UpdateUserRequest,
): Promise<UpdateUserResponse> => {
  const response = await axiosInstance.patch(`/api/v1/users/${id}`, data);
  return response.data;
};

// 사용자 정보 조회 (ID로)
export const getUserById = async (id: number): Promise<User> => {
  const response = await axiosInstance.get(`/api/v1/users/${id}`);
  return response.data;
};
