import { axiosInstance } from '../api';
import { API_ENDPOINTS } from '../../config/api';
import type {
  Expert,
  ExpertFilterParams,
  ExpertListResponse,
} from '../../types/expert';
import type { MonthlyExpert } from '../../types/api/expert/expert';
import type { CategoryResponse } from '../../types/expert';

// 월간 전문가 조회
export const getMonthlyExperts = async (): Promise<MonthlyExpert[]> => {
  const response = await axiosInstance.get(API_ENDPOINTS.getMonthlyExperts);
  return response.data;
};

// 전문가 목록 조회 (필터링, 정렬, 검색 포함)
export const getExperts = async (
  params?: ExpertFilterParams,
): Promise<ExpertListResponse> => {
  const response = await axiosInstance.get(API_ENDPOINTS.advisors, { params });
  return response.data;
};

// 전문가 상세 조회
export const getExpertById = async (id: number): Promise<Expert> => {
  console.log(`🔍 API 호출: 전문가 상세 조회 - ID: ${id}`);
  const response = await axiosInstance.get(`${API_ENDPOINTS.advisors}/${id}`);
  console.log(`✅ API 응답: 전문가 상세 조회 성공`);
  return response.data;
};

// 카테고리 목록 조회
export const getCategories = async (): Promise<CategoryResponse[]> => {
  const response = await axiosInstance.get(API_ENDPOINTS.categories);
  return response.data;
};

// 북마크 목록 조회
export const getBookmarks = async (): Promise<Expert[]> => {
  const response = await axiosInstance.get(API_ENDPOINTS.bookmarks);
  return response.data;
};

// 북마크 토글
export const toggleBookmark = async (
  expertId: number,
): Promise<{
  bookmarked: boolean;
  message: string;
}> => {
  console.log(`🔖 북마크 토글 API 호출 - 전문가 ID: ${expertId}`);
  const response = await axiosInstance.post(
    `${API_ENDPOINTS.bookmarks}/${expertId}`,
  );
  console.log(`✅ 북마크 토글 성공`);
  return response.data;
};
