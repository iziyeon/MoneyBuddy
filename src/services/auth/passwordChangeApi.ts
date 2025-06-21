import { axiosInstance } from '../api';
import { API_ENDPOINTS } from '../../config/api';

interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

interface ChangePasswordResponse {
  message: string;
}

export const changePasswordApi = async (
  data: ChangePasswordRequest,
): Promise<ChangePasswordResponse> => {
  console.log('🔒 비밀번호 변경 API 호출');
  const response = await axiosInstance.patch(
    API_ENDPOINTS.changePassword,
    data,
  );
  console.log('✅ 비밀번호 변경 성공');
  return response.data;
};

// OAuth2 소셜 연동 해제 API - 명세서 준수 (DELETE /api/v1/auth/unlink)
export const unlinkSocialApi = async (): Promise<void> => {
  console.log('🔗 소셜 연동 해제 API 호출');
  await axiosInstance.delete(API_ENDPOINTS.unlinkSocial);
  console.log('✅ 소셜 연동 해제 성공');
};
