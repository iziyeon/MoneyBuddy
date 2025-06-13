import axios from 'axios';
import type { InternalAxiosRequestConfig } from 'axios';
import { useAuthStore } from '../stores/useAuthStore';
import { API_BASE_URL } from '../config/api';

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // 프로덕션 환경이 아닐 때만 로깅
    if (import.meta.env.DEV) {
      console.debug(
        `🔍 API 요청: ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`,
      );
    }

    const token = useAuthStore.getState().accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    // 오류 로깅은 유지
    console.error('❌ 요청 인터셉터 오류:', error);
    return Promise.reject(error);
  },
);

// 응답 인터셉터 수정
axiosInstance.interceptors.response.use(
  response => {
    // 프로덕션 환경이 아닐 때만 로깅
    if (import.meta.env.DEV) {
      console.debug(`✅ API 응답: ${response.status} ${response.config.url}`);
    }
    return response;
  },
  error => {
    // API 오류 로깅 제거(캡처는 하되 콘솔 출력 안함)
    return Promise.reject(error);
  },
);
