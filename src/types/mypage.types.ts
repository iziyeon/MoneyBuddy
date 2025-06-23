// 마이페이지 상태 타입 정의
export type MyPageState =
  | 'basic'
  | 'consultation-only'
  | 'challenge-only'
  | 'both';

// 사용자 상태를 판단하는 인터페이스
export interface UserActivityStatus {
  hasConsultation: boolean;
  hasChallenge: boolean;
  nextConsultation?: any;
  challenges?: any[];
}

// 마이페이지 상태를 결정하는 유틸리티 함수
export function determineMyPageState(status: UserActivityStatus): MyPageState {
  const { hasConsultation, hasChallenge } = status;

  if (hasConsultation && hasChallenge) {
    return 'both';
  } else if (hasConsultation) {
    return 'consultation-only';
  } else if (hasChallenge) {
    return 'challenge-only';
  } else {
    return 'basic';
  }
}

// 챌린지 상태별 데이터 타입
export interface ChallengeData {
  id: number;
  title: string;
  deadline: string;
  progress: number;
  status: 'active' | 'urgent' | 'completed' | 'expired';
  daysLeft: number;
}

// 모의 챌린지 데이터
export const mockChallengeData: ChallengeData[] = [
  {
    id: 1,
    title: '챌린지를 수행해주세요!',
    deadline: '2025.12.25 까지 (D-00)',
    progress: 20,
    status: 'active',
    daysLeft: 0,
  },
  {
    id: 2,
    title: '곧 챌린지 마감, 지금 수행해요!',
    deadline: '2025.12.25 까지 (D-00)',
    progress: 20,
    status: 'urgent',
    daysLeft: 0,
  },
  {
    id: 3,
    title: '챌린지 완료, 축하드려요 🙌',
    deadline: '2025.12.25 까지 (D-00)',
    progress: 100,
    status: 'completed',
    daysLeft: 0,
  },
];
