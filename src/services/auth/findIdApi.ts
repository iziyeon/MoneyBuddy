// src/services/auth/findIdApi.ts
import { axiosInstance } from '../api';
import { API_ENDPOINTS } from '../../config/api';
import type {
  FindIdRequest,
  FindIdResponse,
} from '../../types/api/auth/findId';

export async function findIdApi(data: FindIdRequest): Promise<FindIdResponse> {
  const response = await axiosInstance.post(API_ENDPOINTS.findId, data);
  return response.data;
}
