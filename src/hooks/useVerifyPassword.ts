import { useMutation } from '@tanstack/react-query';
import { verifyPasswordApi } from '../services/auth/userApi';

// 비밀번호 확인 훅 (명세서에 맞춘 새로운 API)
export const useVerifyPassword = () => {
  return useMutation({
    mutationFn: verifyPasswordApi,
    onSuccess: () => {
      console.log('✅ 비밀번호 확인 성공');
    },
    onError: error => {
      console.error('❌ 비밀번호 확인 실패:', error);
    },
  });
};
