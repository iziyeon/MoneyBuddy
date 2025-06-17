import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { getExperts, getCategories } from '../services/experts/expertApi';
import type {
  Expert,
  ExpertFilterParams,
  ExpertListResponse,
} from '../types/expert';

// 전문가 목록 조회 (기본)
export const useExpertList = (params?: ExpertFilterParams) => {
  return useQuery<ExpertListResponse>({
    queryKey: ['experts', params],
    queryFn: () => getExperts(params),
    staleTime: 1000 * 60 * 5, // 5분
  });
};

// 무한 스크롤용 전문가 목록 조회
export const useInfiniteExpertList = (
  params?: Omit<ExpertFilterParams, 'page'>,
) => {
  return useInfiniteQuery<ExpertListResponse>({
    queryKey: ['experts', 'infinite', params],
    queryFn: ({ pageParam = 1 }) =>
      getExperts({ ...params, page: pageParam as number }),
    initialPageParam: 1,
    getNextPageParam: lastPage =>
      lastPage.hasMore ? lastPage.page + 1 : undefined,
    staleTime: 1000 * 60 * 5,
  });
};

// 카테고리 목록 조회
export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
    staleTime: 1000 * 60 * 30, // 30분
  });
};
