import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getBookmarks, toggleBookmark } from '../services/experts/expertApi';
import type { Expert } from '../types/expert';

export const useBookmarksQuery = () => {
  return useQuery<Expert[]>({
    queryKey: ['bookmarks'],
    queryFn: getBookmarks,
    staleTime: 1000 * 60 * 5, // 5분
  });
};

export const useToggleBookmark = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleBookmark,
    onSuccess: () => {
      // 북마크 목록과 전문가 목록을 무효화하여 다시 불러오도록 함
      queryClient.invalidateQueries({ queryKey: ['bookmarks'] });
      queryClient.invalidateQueries({ queryKey: ['experts'] });
    },
  });
};
