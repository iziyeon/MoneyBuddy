import { useQuery } from '@tanstack/react-query';
import { getExpertById } from '../services/experts/expertApi';
import type { Expert } from '../types/expert';

// 전문가 상세 정보 조회 - MSW/실제 API 모두 지원
export const useExpert = (id: number | undefined) => {
  return useQuery<Expert>({
    queryKey: ['expert', id],
    queryFn: async () => {
      if (!id) {
        throw new Error('전문가 ID가 필요합니다');
      }

      try {
        console.log(`🔍 useExpert: 전문가 정보 조회 시작 - ID: ${id}`);
        const expert = await getExpertById(id);
        console.log(`✅ useExpert: 전문가 정보 조회 성공 - ${expert.nickname}`);
        return expert;
      } catch (error) {
        console.error(`❌ useExpert: 전문가 정보 조회 실패 - ID: ${id}`, error);

        // 네트워크 에러인 경우 더 구체적인 에러 메시지
        if (error instanceof Error && error.message === 'Network Error') {
          throw new Error('네트워크 연결을 확인해주세요');
        }

        throw new Error('전문가를 찾을 수 없습니다');
      }
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 5, // 5분
    retry: (failureCount, error) => {
      console.log(`🔄 useExpert: 재시도 ${failureCount}번째`, error);
      return failureCount < 2; // 최대 2번까지 재시도
    },
  });
};
