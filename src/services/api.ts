import axios, {
  AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
  AxiosHeaders,
} from 'axios';

const API_BASE_URL = 'https://example.com/api';
const API_TOKEN = 'your_api_token'; // 나중에 Zustand 등에서 관리 예정

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // headers가 없을 경우, AxiosHeaders 인스턴스 생성
    if (!config.headers) {
      config.headers = new AxiosHeaders();
    }
    // Authorization 헤더 설정
    (config.headers as AxiosHeaders).set(
      'Authorization',
      `Bearer ${API_TOKEN}`,
    );
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (error: AxiosError) => {
    // 에러 처리 확장 가능
    return Promise.reject(error);
  },
);

export async function fetchCall<T>(
  url: string,
  method: 'get' | 'post' | 'put' | 'delete',
  data?: unknown,
): Promise<T> {
  const config: AxiosRequestConfig = {
    url,
    method,
    ...(data ? { data } : {}),
  };
  return axiosInstance(config);
}
