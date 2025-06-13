import { axiosInstance } from '../api';
import { API_ENDPOINTS } from '../../config/api';
import type { Expert, ExpertFilterParams } from '../../types/expert';

export interface ExpertListResponse {
  advisors: Expert[];
  total: number;
  page?: number;
  limit?: number;
  hasMore?: boolean;
}

export interface CategoryResponse {
  id: number;
  name: string;
  description?: string;
}

export const getExperts = async (
  params?: ExpertFilterParams,
): Promise<ExpertListResponse> => {
  const queryParams = new URLSearchParams();

  if (params?.category) {
    // 카테고리명을 ID로 변환
    const categoryMap: Record<string, string> = {
      소비: '1',
      지역: '2',
      투자: '3',
      부채: '4',
      기타: '5',
    };
    queryParams.append('category_id', categoryMap[params.category] || '1');
  }

  if (params?.is_online !== undefined) {
    queryParams.append('is_online', String(params.is_online));
  }

  if (params?.sort) {
    // 정렬 옵션을 API 형식으로 변환
    const sortMap: Record<string, string> = {
      최신순: 'created_at,desc',
      평점순: 'rating,desc',
      리뷰많은순: 'review_count,desc',
      상담건순: 'consultation_count,desc',
      낮은가격순: 'price,asc',
      높은가격순: 'price,desc',
      북마크순: 'bookmarks,desc',
      이름순: 'nickname,asc',
    };
    queryParams.append('sort', sortMap[params.sort] || 'created_at,desc');
  }

  if (params?.page) {
    queryParams.append('page', String(params.page));
  }

  if (params?.limit) {
    queryParams.append('limit', String(params.limit));
  }

  const response = await axiosInstance.get(
    `${API_ENDPOINTS.advisors}?${queryParams.toString()}`,
  );
  return response.data;
};

export const getExpertById = async (id: number): Promise<Expert> => {
  const response = await axiosInstance.get(API_ENDPOINTS.advisor(id));
  return response.data;
};

export const getCategories = async (): Promise<CategoryResponse[]> => {
  const response = await axiosInstance.get(API_ENDPOINTS.categories);
  return response.data;
};

export const toggleBookmark = async (
  advisorId: number,
): Promise<{ bookmarked: boolean }> => {
  const response = await axiosInstance.post(API_ENDPOINTS.bookmark(advisorId));
  return response.data;
};

export const getBookmarks = async (): Promise<Expert[]> => {
  const response = await axiosInstance.get(API_ENDPOINTS.bookmarks);
  return response.data;
};
