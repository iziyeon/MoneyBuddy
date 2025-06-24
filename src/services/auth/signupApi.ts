import { axiosInstance } from '../api';
import { API_ENDPOINTS } from '../../config/api';
import type { SignupRequest, SignupResponse } from '../../types/auth';

export const signupApi = async (
  data: SignupRequest,
): Promise<SignupResponse> => {
  console.log('📝 회원가입 API 호출');
  const response = await axiosInstance.post(API_ENDPOINTS.signup, data);
  console.log('✅ 회원가입 성공');
  return response.data;
};
