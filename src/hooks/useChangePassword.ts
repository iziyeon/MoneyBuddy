import { useMutation } from '@tanstack/react-query';
import { changePasswordApi } from '../services/auth/passwordChangeApi';
import { unlinkSocial } from '../services/auth/loginApi';

interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

export const useChangePassword = () => {
  return useMutation<any, Error, ChangePasswordRequest>({
    mutationFn: changePasswordApi,
    onSuccess: data => {
      console.log('비밀번호 변경 성공:', data);
    },
  });
};

// OAuth2 소셜 연동 해제 hook
export const useUnlinkSocial = () => {
  return useMutation<{ message: string }, Error>({
    mutationFn: unlinkSocial,
    onSuccess: data => {
      console.log('✅ 소셜 연동 해제 성공:', data.message);
    },
    onError: error => {
      console.error('❌ 소셜 연동 해제 실패:', error);
    },
  });
};
