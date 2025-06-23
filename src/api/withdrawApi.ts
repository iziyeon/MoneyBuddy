import axios from 'axios';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

// 비밀번호 확인 API
export const verifyPasswordForWithdraw = async (password: string) => {
  const response = await axios.post(
    `${BASE_URL}/api/v1/auth/verify-password-withdraw`,
    {
      password,
    },
  );
  return response.data;
};

// 회원탈퇴 API (명세서 준수 - DELETE 방식)
export const withdrawUser = async (userId: number) => {
  const response = await axios.delete(`${BASE_URL}/api/v1/users/${userId}`);
  return response.data;
};
