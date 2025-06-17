import axios from 'axios';
import type { InternalAxiosRequestConfig } from 'axios';
import { useAuthStore } from '../stores/useAuthStore';
import { API_BASE_URL } from '../config/api';

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL, // 환경변수에서 자동으로 설정
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // API 디버깅이 활성화된 경우에만 로깅
    if (import.meta.env.VITE_API_DEBUG === 'true') {
      console.log('🔍 API 요청:', {
        method: config.method?.toUpperCase(),
        url: (config.baseURL ?? '') + config.url,
        fullURL: `${config.baseURL}${config.url}`, // 전체 URL 표시
        data: config.data,
        headers: config.headers,
      });
    }

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
    if (import.meta.env.VITE_API_DEBUG === 'true') {
      console.log('✅ API 응답:', {
        status: response.status,
        url: response.config.url,
        data: response.data,
      });
    }

    // 실제 API가 { success: true, data: {...} } 형식이라면
    if (response.data && response.data.data !== undefined) {
      return { ...response, data: response.data.data };
    }

    // 또는 실제 API가 { result: {...} } 형식이라면
    if (response.data && response.data.result !== undefined) {
      return { ...response, data: response.data.result };
    }

    return response;
  },
  error => {
    // if (import.meta.env.VITE_API_DEBUG === 'true') {
    //   console.error('❌ API 에러:', {
    //     status: error.response?.status,
    //     url: error.config?.url,
    //     data: error.response?.data,
    //   });
    // }

    // // 실제 API 에러 처리
    // if (error.response?.status === 401) {
    //   useAuthStore.getState().clearAuth();
    //   window.location.href = '/login';
    // }

    // // 실제 API 에러 메시지 처리
    // if (error.response?.data?.message) {
    //   error.message = error.response.data.message;
    // }

    return Promise.reject(error);
  },
);
