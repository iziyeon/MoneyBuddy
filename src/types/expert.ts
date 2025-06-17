import { EXPERT_FIELDS, SORT_OPTIONS } from '../config/constants';

export type ExpertField = (typeof EXPERT_FIELDS)[number];
export type SortType = (typeof SORT_OPTIONS)[number];

export type Field = ExpertField;

// 전문가 필터링 파라미터 타입
export interface ExpertFilterParams {
  category_id?: number;
  is_online?: boolean;
  sort?: string;
  page?: number;
  limit?: number;
  search?: string;
}

// 전문가 목록 응답 타입
export interface ExpertListResponse {
  advisors: Expert[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

// 카테고리 응답 타입
export interface CategoryResponse {
  id: number;
  name: string;
  description: string;
}

// 정렬 옵션 타입
export type SortOptionType =
  | '평점순'
  | '리뷰많은순'
  | '낮은가격순'
  | '높은가격순'
  | string;

// 전문가 타입
export interface Expert {
  id: number;
  nickname: string;
  field: string;
  category: string;
  rating: number;
  price: number;
  experience: number;
  consultation_count: number;
  review_count: number;
  bookmarks: number;
  profile_image: string;
  description: string;
  bio: string;
  is_online: boolean;
  hashtags: string[];
  skills?: string[];
  education?: string[];
  career?: string[];
  contact_hours?: string;
  response_time?: string;
  consultation_formats?: string[];
}
