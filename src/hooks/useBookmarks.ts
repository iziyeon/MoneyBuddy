import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getBookmarks, toggleBookmark } from '../services/experts/expertApi';

export const useBookmarks = () => {
  return useQuery({
    queryKey: ['bookmarks'],
    queryFn: getBookmarks,
  });
};

export const useToggleBookmark = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleBookmark,
    onSuccess: () => {
      // 북마크 목록과 전문가 목록 캐시 무효화
      queryClient.invalidateQueries({ queryKey: ['bookmarks'] });
      queryClient.invalidateQueries({ queryKey: ['experts'] });
    },
  });
};
