export interface BaseResponse {
  message: string;
}

export interface ErrorResponse extends BaseResponse {}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Record<string, string>;
}

export interface InfiniteQueryData<T> {
  items: T[];
  nextPage: number | undefined;
}
