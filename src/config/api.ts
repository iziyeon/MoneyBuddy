// 환경변수에서 API 베이스 URL 가져오기
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:5173';

export const API_ENDPOINTS = {
  // 인증 관련
  login: '/api/v1/auth/login',
  signup: '/api/v1/auth/register',
  findId: '/api/v1/auth/find-email',
  resetPassword: '/api/v1/auth/reset-password',

  // 전문가 관련
  getMonthlyExperts: '/api/v1/experts/monthly',
  advisors: '/api/v1/experts',
  categories: '/api/v1/categories',
  bookmarks: '/api/v1/users/bookmarks',

  // 예약/상담 관련
  reservations: '/api/v1/reservations',
  consultations: '/api/v1/consultations',

  // 결제 관련
  payments: '/api/v1/payments',

  // 사용자 관련
  userProfile: '/api/v1/users/profile',
  userPoints: '/api/v1/users/points',
  users: '/api/v1/users',
} as const;

// MSW 설정
export const MSW_CONFIG = {
  enabled: import.meta.env.VITE_USE_MSW === 'true',
  debug: import.meta.env.VITE_API_DEBUG === 'true',
  logRequests: import.meta.env.DEV,
  logResponses: import.meta.env.DEV,
} as const;

// API 환경별 설정
export const API_CONFIG = {
  timeout: 10000,
  retries: 2,
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
} as const;
