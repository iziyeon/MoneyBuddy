// src/services/auth/findIdApi.ts
import { axiosInstance } from '../api';
import type { FindIdRequest, FindIdResponse } from '../../types/auth';

export const findIdApi = async (
  data: FindIdRequest,
): Promise<FindIdResponse> => {
  console.log('🔍 아이디 찾기 API 호출');
  const response = await axiosInstance.post('/api/v1/users/find-id', data);
  console.log('✅ 아이디 찾기 성공');
  return response.data;
};
