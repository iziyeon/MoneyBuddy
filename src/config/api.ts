export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

export const API_ENDPOINTS = {
  login: '/api/v1/users/login',
  signup: '/api/v1/users/signup',
  findId: '/api/v1/users/find-id', // 이 경로가 mock handler의 경로와 일치하는지 확인
};
