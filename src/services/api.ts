import axios from 'axios';
import type { InternalAxiosRequestConfig } from 'axios';
import { useAuthStore } from '../stores/useAuthStore';
import { API_BASE_URL, MSW_CONFIG, API_CONFIG } from '../config/api';

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: API_CONFIG.timeout,
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // MSW 디버깅이 활성화된 경우에만 로깅
    if (MSW_CONFIG.debug && MSW_CONFIG.logRequests) {
      console.log('🔍 API 요청:', {
        method: config.method?.toUpperCase(),
        url: `${config.baseURL}${config.url}`,
        data: config.data,
        params: config.params,
        headers: config.headers,
      });
    }

    // 인증 토큰 추가
    const token = useAuthStore.getState().accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    console.error('❌ 요청 인터셉터 오류:', error);
    return Promise.reject(error);
  },
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  response => {
    if (MSW_CONFIG.debug && MSW_CONFIG.logResponses) {
      console.log('✅ API 응답:', {
        status: response.status,
        url: response.config.url,
        data: response.data,
      });
    }

    return response;
  },
  error => {
    if (MSW_CONFIG.debug) {
      console.error('❌ API 에러:', {
        status: error.response?.status,
        url: error.config?.url,
        data: error.response?.data,
        message: error.message,
      });
    }

    // 401 에러 처리 (토큰 만료)
    if (error.response?.status === 401 && !MSW_CONFIG.enabled) {
      useAuthStore.getState().clearAuth();
      if (typeof window !== 'undefined') {
        window.location.href = '/login';
      }
    }

    return Promise.reject(error);
  },
);
