import { EXPERT_FIELDS, SORT_OPTIONS } from '../config/constants';

export type ExpertField = (typeof EXPERT_FIELDS)[number];
export type SortType = (typeof SORT_OPTIONS)[number];

export type Field = ExpertField;

export interface Expert {
  id: number;
  nickname: string;
  field: ExpertField;
  category: ExpertField;
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
}

export interface ExpertFilterParams {
  category?: ExpertField;
  is_online?: boolean;
  sort?: SortType;
  page?: number;
  limit?: number;
}
