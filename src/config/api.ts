export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';

export const API_ENDPOINTS = {
  login: '/api/v1/users/login',
  register: '/api/v1/users/register',
  findId: '/api/v1/users/find-id',
  signup: '/api/v1/users/signup',
};
