import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getBookmarks, toggleBookmark } from '../services/experts/expertApi';
import type { Expert } from '../types/expert';

// 북마크 목록 조회
export const useBookmarksQuery = () => {
  return useQuery<Expert[]>({
    queryKey: ['bookmarks'],
    queryFn: getBookmarks,
    staleTime: 1000 * 60 * 5, // 5분
  });
};

// 북마크 토글 - MSW/실제 API 모두 지원
export const useToggleBookmark = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleBookmark,
    onSuccess: (data, expertId) => {
      // 북마크 목록 캐시 업데이트
      queryClient.invalidateQueries({ queryKey: ['bookmarks'] });

      // 전문가 목록 캐시 업데이트
      queryClient.invalidateQueries({ queryKey: ['experts'] });

      // 전문가 상세 캐시 업데이트
      queryClient.invalidateQueries({ queryKey: ['expert', expertId] });

      console.log('북마크 상태 변경:', data);
    },
    onError: error => {
      console.error('북마크 토글 실패:', error);
    },
  });
};
