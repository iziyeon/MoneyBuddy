import axios, {
  AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
  AxiosHeaders,
} from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? '';
let API_TOKEN = '';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (!config.headers) {
      config.headers = new AxiosHeaders();
    }
    if (API_TOKEN) {
      (config.headers as AxiosHeaders).set(
        'Authorization',
        `Bearer ${API_TOKEN}`,
      );
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error: AxiosError) => Promise.reject(error),
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

export function setApiToken(token: string) {
  API_TOKEN = token;
}
