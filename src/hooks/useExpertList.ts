import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import {
  getExperts,
  getCategories,
  getChallenges,
  getChallengeById,
  getCategoriesByType,
  getCategoryById,
  getConsultationMessages,
} from '../services/experts/expertApi';
import type { ExpertFilterParams, ExpertListResponse } from '../types/expert';

// 전문가 목록 조회
export const useExpertList = (params?: ExpertFilterParams) => {
  return useQuery<ExpertListResponse>({
    queryKey: ['experts', params],
    queryFn: () => getExperts(params),
    staleTime: 1000 * 60 * 5,
  });
};

// 무한 스크롤용 전문가 목록 조회
export const useInfiniteExpertList = (
  params?: Omit<ExpertFilterParams, 'page'>,
) => {
  return useInfiniteQuery<ExpertListResponse>({
    queryKey: ['experts', 'infinite', params],
    queryFn: ({ pageParam = 0 }) =>
      getExperts({ ...params, page: pageParam as number }),
    initialPageParam: 0,
    getNextPageParam: lastPage =>
      lastPage.hasMore ? (lastPage.page || 0) + 1 : undefined,
    staleTime: 1000 * 60 * 5,
  });
};

// 카테고리 목록 조회
export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
    staleTime: 1000 * 60 * 30,
  });
};

// 챌린지 API 훅 추가
export const useChallenges = () => {
  return useQuery({
    queryKey: ['challenges'],
    queryFn: getChallenges,
    staleTime: 1000 * 60 * 5,
  });
};

export const useChallenge = (challengeId: number | undefined) => {
  return useQuery({
    queryKey: ['challenge', challengeId],
    queryFn: () => (challengeId ? getChallengeById(challengeId) : null),
    enabled: !!challengeId,
    staleTime: 1000 * 60 * 5,
  });
};

// 카테고리 관련 훅 추가
export const useCategoriesByType = (type: string | undefined) => {
  return useQuery({
    queryKey: ['categories', 'type', type],
    queryFn: () => (type ? getCategoriesByType(type) : null),
    enabled: !!type,
    staleTime: 1000 * 60 * 30,
  });
};

export const useCategory = (categoryId: number | undefined) => {
  return useQuery({
    queryKey: ['category', categoryId],
    queryFn: () => (categoryId ? getCategoryById(categoryId) : null),
    enabled: !!categoryId,
    staleTime: 1000 * 60 * 30,
  });
};

// 상담 메시지 훅 추가
export const useConsultationMessages = (
  roomId: number | undefined,
  page: number = 0,
  size: number = 20,
) => {
  return useQuery({
    queryKey: ['consultationMessages', roomId, page, size],
    queryFn: () =>
      roomId ? getConsultationMessages(roomId, page, size) : null,
    enabled: !!roomId,
    staleTime: 1000 * 60 * 2,
  });
};
