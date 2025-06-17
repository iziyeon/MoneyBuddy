import { axiosInstance } from '../api';
import type { SignupRequest, SignupResponse } from '../../types/auth';

export const signupApi = async (
  data: SignupRequest,
): Promise<SignupResponse> => {
  console.log('📝 회원가입 API 호출');
  const response = await axiosInstance.post('/api/v1/auth/register', data);
  console.log('✅ 회원가입 성공');
  return response.data;
};
