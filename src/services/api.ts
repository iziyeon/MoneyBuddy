import axios, {
  AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
  AxiosHeaders,
} from 'axios';
import { useAuthStore } from '../stores/useAuthStore';
import { API_BASE_URL } from '../config/api';

// axios 인스턴스 생성
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터 — zustand에서 토큰 자동 삽입
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (!config.headers) {
      config.headers = new AxiosHeaders();
    }

    const accessToken = useAuthStore.getState().accessToken;
    if (accessToken) {
      (config.headers as AxiosHeaders).set(
        'Authorization',
        `Bearer ${accessToken}`,
      );
    }

    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

// 응답 인터셉터 (에러처리 확장 가능)
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error: AxiosError) => Promise.reject(error),
);

// fetchCall 공통 API 호출 래퍼
export async function fetchCall<T>(
  url: string,
  method: 'get' | 'post' | 'put' | 'patch' | 'delete',
  data?: unknown,
): Promise<T> {
  const config: AxiosRequestConfig = {
    url,
    method,
    ...(data ? { data } : {}),
  };
  return axiosInstance(config);
}
