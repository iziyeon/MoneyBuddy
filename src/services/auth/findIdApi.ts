// src/services/auth/findIdApi.ts
import { axiosInstance } from '../api';
import type { FindIdRequest, FindIdResponse } from '../../types/auth';

// 아이디 찾기 API (명세서에 맞춰 /api/v1/auth/find-id로 수정)
export const findIdApi = async (
  data: FindIdRequest,
): Promise<FindIdResponse> => {
  const response = await axiosInstance.post('/api/v1/auth/find-id', data);
  return response.data;
};
