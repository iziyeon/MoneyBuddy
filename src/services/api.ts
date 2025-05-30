import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const API_BASE_URL = "https://example.com/api"; // 👉 실제 API 서버 주소
const API_TOKEN = "your_api_token"; // 👉 추후 zustand 등에서 관리

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    config.headers.Authorization = `Bearer ${API_TOKEN}`;
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  (error: AxiosError) => Promise.reject(error)
);

export async function fetchCall<T, D = unknown>(
  url: string,
  method: "get" | "post" | "put" | "delete",
  data?: D
): Promise<T> {
  const config: AxiosRequestConfig = {
    method,
    url,
    ...(data && { data }),
  };
  return axiosInstance(config);
}
