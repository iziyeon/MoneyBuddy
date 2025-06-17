import { useQuery } from '@tanstack/react-query';
import { getExpertById } from '../services/experts/expertApi';
import type { Expert } from '../types/expert';

export const useExpert = (id: number | undefined) => {
  return useQuery<Expert>({
    queryKey: ['expert', id],
    queryFn: async () => {
      if (!id) {
        throw new Error('전문가 ID가 필요합니다');
      }

      try {
        // API 호출을 통한 전문가 정보 가져오기
        const expert = await getExpertById(id);

        const enhancedExpert = {
          ...expert,
          skills: ['디지털 소비 분석', '예산 관리', '재정 계획'],
          education: ['서울대학교 경영학과', 'CFA Level 3'],
          career: ['금융투자협회 10년', '재무상담사 5년'],
          contact_hours: '평일 10:00 - 19:00',
          response_time: '평균 2시간 이내',
          consultation_formats: ['채팅', '화상', '이메일'],
        };

        return enhancedExpert as Expert;
      } catch (error) {
        throw new Error('전문가를 찾을 수 없습니다');
      }
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 5, // 5분
  });
};
