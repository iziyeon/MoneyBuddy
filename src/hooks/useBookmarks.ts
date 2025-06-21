import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getBookmarksApi,
  toggleBookmarkApi,
  removeBookmarkApi,
} from '../services/bookmarks/bookmarkApi';

// 북마크 목록 조회
export const useBookmarksQuery = () => {
  return useQuery({
    queryKey: ['bookmarks'],
    queryFn: getBookmarksApi,
  });
};

// 북마크 토글 (추가/제거)
export const useToggleBookmark = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: toggleBookmarkApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookmarks'] });
      queryClient.invalidateQueries({ queryKey: ['experts'] });
    },
  });
};

// 북마크 제거
export const useRemoveBookmark = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeBookmarkApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['bookmarks'] });
    },
  });
};
