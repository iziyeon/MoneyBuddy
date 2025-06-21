import { axiosInstance } from '../api';
import { API_ENDPOINTS } from '../../config/api';

// 북마크 목록 조회 (프로젝트에서 사용하는 경로)
export const getBookmarksApi = async () => {
  const response = await axiosInstance.get(API_ENDPOINTS.bookmarks);
  return response.data;
};

// 북마크 추가/제거 토글 (프로젝트에서 사용하는 경로)
export const toggleBookmarkApi = async (advisorId: number) => {
  const response = await axiosInstance.post(
    API_ENDPOINTS.bookmarkToggle(advisorId),
  );
  return response.data;
};

// 북마크 제거 (명세서에 없음 - 프로젝트 전용)
export const removeBookmarkApi = async (bookmarkId: number) => {
  const response = await axiosInstance.delete(
    `/api/v1/bookmarks/${bookmarkId}`,
  );
  return response.data;
};
