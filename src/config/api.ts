// 환경변수에서 API 베이스 URL 가져오기
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:3000';

export const API_ENDPOINTS = {
  // 인증 관련
  login: '/api/v1/auth/login',
  signup: '/api/v1/auth/register',
  findId: '/api/v1/auth/find-email',

  // 전문가 관련 - 일관성 확보
  getMonthlyExperts: '/api/v1/experts/monthly',
  advisors: '/api/v1/experts', // MSW와 실제 API 모두 호환
  categories: '/api/v1/categories',
  bookmarks: '/api/v1/users/bookmarks',

  // 예약 관련
  reservations: '/api/v1/consultations',

  // 결제 관련
  payments: '/api/v1/payments',

  // 사용자 관련
  userProfile: '/api/v1/users/profile',
  userPoints: '/api/v1/users/points',
  userConsultations: '/api/v1/users/consultations',
} as const;

// MSW 디버깅 설정 개선
export const MSW_CONFIG = {
  enabled: import.meta.env.VITE_USE_MSW === 'true',
  debug: import.meta.env.VITE_API_DEBUG === 'true',
  logRequests: true,
  logResponses: true,
} as const;
