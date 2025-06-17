import { axiosInstance } from '../api';
import { API_ENDPOINTS } from '../../config/api';
import type {
  Expert,
  ExpertFilterParams,
  ExpertListResponse,
  CategoryResponse,
} from '../../types/expert';

export type {
  Expert,
  ExpertFilterParams,
  ExpertListResponse,
  CategoryResponse,
};

export const getExperts = async (
  params?: ExpertFilterParams,
): Promise<ExpertListResponse> => {
  const queryParams = new URLSearchParams();

  if (params) {
    if (params.category_id)
      queryParams.append('category_id', params.category_id.toString());
    if (params.is_online !== undefined)
      queryParams.append('is_online', params.is_online.toString());
    if (params.sort) queryParams.append('sort', params.sort);
    if (params.page) queryParams.append('page', params.page.toString());
    if (params.limit) queryParams.append('limit', params.limit.toString());
    if (params.search) queryParams.append('search', params.search);
  }

  const response = await axiosInstance.get(
    `${API_ENDPOINTS.advisors}?${queryParams.toString()}`,
  );
  return response.data;
};

// 전문가 상세 정보 조회
export const getExpertById = async (id: number): Promise<Expert> => {
  const response = await axiosInstance.get(`${API_ENDPOINTS.advisors}/${id}`);
  return response.data;
};

export const getCategories = async (): Promise<CategoryResponse[]> => {
  const response = await axiosInstance.get(API_ENDPOINTS.categories);
  return response.data;
};

// 북마크 토글
export const toggleBookmark = async (
  expertId: number,
): Promise<{ bookmarked: boolean }> => {
  const response = await axiosInstance.post(
    `${API_ENDPOINTS.bookmarks}/${expertId}`,
  );
  return response.data;
};

// 북마크 목록 조회
export const getBookmarks = async (): Promise<Expert[]> => {
  try {
    console.log(`📡 API 호출: GET ${API_ENDPOINTS.bookmarks}`);
    const response = await axiosInstance.get(API_ENDPOINTS.bookmarks);
    return response.data;
  } catch (error) {
    console.error('❌ 북마크 목록 조회 오류:', error);
    throw error;
  }
};
