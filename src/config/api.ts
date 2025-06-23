import axios from 'axios';

// API 기본 설정
export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || 'http://localhost:5173';

export const MSW_CONFIG = {
  enabled: import.meta.env.VITE_USE_MSW === 'true',
  debug: import.meta.env.VITE_MSW_DEBUG === 'true',
  logRequests: import.meta.env.VITE_MSW_LOG_REQUESTS === 'true',
  logResponses: import.meta.env.VITE_MSW_LOG_RESPONSES === 'true',
};

export const API_CONFIG = {
  timeout: 10000,
  retryCount: 3,
  retryDelay: 1000,
};

// API 엔드포인트 정의 (명세서 준수)
export const API_ENDPOINTS = {
  // 유저 기능 (User)
  signup: '/api/v1/users',
  login: '/api/v1/users/login',
  logout: '/api/v1/auth/logout',
  userProfile: '/api/v1/users/me',
  updateUser: (id: number) => `/api/v1/users/${id}`,
  deleteUser: (id: number) => `/api/v1/users/${id}`,
  getUserById: (id: number) => `/api/v1/users/${id}`,
  publicProfile: (id: number) => `/api/v1/users/${id}/profile`,
  userSettings: (userId: number) => `/api/v1/users/${userId}/settings`,
  recoverUser: '/api/v1/users/recover',

  // 인증 기능 (Auth)
  refresh: '/api/v1/auth/refresh',
  unlinkSocial: '/api/v1/auth/unlink',
  changePassword: '/api/v1/auth/change-password',
  verifyPasswordWithdraw: '/api/v1/auth/verify-password-withdraw',

  // 전문가 기능 (Advisor) - 명세서 준수
  advisors: '/api/v1/advisors',
  advisorDetail: (id: number) => `/api/v1/advisors/${id}`,
  advisorByUserId: (userId: number) => `/api/v1/advisors/user/${userId}`,
  advisorOnlineStatus: (id: number) => `/api/v1/advisors/${id}/online-status`,
  advisorAvailability: (id: number) => `/api/v1/advisors/${id}/availability`,
  advisorExists: (userId: number) => `/api/v1/advisors/exists/user/${userId}`,

  // 카테고리 기능 (Category)
  categories: '/api/v1/categories',
  categoriesByType: (type: string) => `/api/v1/categories/type/${type}`,
  categoryDetail: (id: number) => `/api/v1/categories/${id}`,

  // 상담 기능 (Consultation) - 명세서 준수
  consultations: '/api/v1/consultation/rooms',
  consultationDetail: (roomId: number) =>
    `/api/v1/consultation/rooms/${roomId}/detail`,
  consultationMessages: (roomId: number) =>
    `/api/v1/consultation/rooms/${roomId}/messages`,
  consultationRead: (roomId: number) =>
    `/api/v1/consultation/rooms/${roomId}/read`,
  consultationLeave: (roomId: number) =>
    `/api/v1/consultation/rooms/${roomId}/leave`,
  consultationStatus: (roomId: number) =>
    `/api/v1/consultation/rooms/${roomId}/status`,
  consultationImage: (roomId: number) => `/api/v1/consultation/${roomId}/image`,

  // 챌린지 기능 (Challenge)
  challenges: '/api/v1/challenges',
  challengeDetail: (id: number) => `/api/v1/challenges/${id}`,
  challengeParticipate: (id: number) => `/api/v1/challenges/${id}/participate`,
  userChallengeParticipations: (userId: number) =>
    `/api/v1/users/${userId}/challenge-participations`,
  challengeParticipationDetail: (id: number) =>
    `/api/v1/challenge-participations/${id}`,

  // 미션 기능 (Mission)
  createMission: (participationId: number) =>
    `/api/v1/admin/challenge-participations/${participationId}/missions`,
  missionsByParticipation: (participationId: number) =>
    `/api/v1/challenge-participations/${participationId}/missions`,
  missionDetail: (id: number) => `/api/v1/missions/${id}`,
  missionStatus: (id: number) => `/api/v1/missions/${id}/status`,
  missionFeedbacks: (id: number) => `/api/v1/missions/${id}/feedbacks`,
  missionUploads: (id: number) => `/api/v1/missions/${id}/uploads`,

  // 리포트 기능 (Report)
  reports: '/api/v1/reports',
  reportDetail: (id: number) => `/api/v1/reports/${id}`,
  userReports: (userId: number) => `/api/v1/reports/users/${userId}`,

  // CS 기능 (Customer Service)
  csInquiries: '/api/v1/cs-inquiries',
  userCsInquiries: (userId: number) => `/api/v1/users/${userId}/cs-inquiries`,
  csInquiryDetail: (id: number) => `/api/v1/cs-inquiries/${id}`,
  adminCsInquiries: '/api/v1/admin/cs-inquiries',
  csInquiryStatus: (id: number) => `/api/v1/admin/cs-inquiries/${id}/status`,

  // 관리자 기능 (Admin)
  notices: '/api/v1/notices',
  noticeDetail: (id: number) => `/api/v1/notices/${id}`,
  adminNotices: '/api/v1/admin/notices',
  adminNoticeDetail: (id: number) => `/api/v1/admin/notices/${id}`,
  faqs: '/api/v1/faqs',
  faqDetail: (id: number) => `/api/v1/faqs/${id}`,
  adminFaqs: '/api/v1/admin/faqs',
  adminFaqDetail: (id: number) => `/api/v1/admin/faqs/${id}`,

  // Webhook 기능 (Webhook)
  webhooks: '/api/v1/admin/webhooks',
  webhookDetail: (id: number) => `/api/v1/admin/webhooks/${id}`,

  // 소셜 로그인
  kakaoLogin: '/api/v1/auth/kakao',
  googleLogin: '/api/v1/auth/google',
  naverLogin: '/api/v1/auth/naver',

  // 프로젝트 전용 기능 (명세서에 없음)
  getMonthlyExperts: '/api/v1/experts/monthly',
  bookmarks: '/api/v1/bookmarks',
  bookmarkToggle: (expertId: number) => `/api/v1/bookmarks/toggle/${expertId}`,
  reservations: '/api/v1/reservations',
  reservationDetail: (id: number) => `/api/v1/reservations/${id}`,
  reservationCancel: (id: number) => `/api/v1/reservations/${id}/cancel`,
  payments: '/api/v1/payments',
  paymentDetail: (id: number) => `/api/v1/payments/${id}`,
};

// API 응답 타입 정의
export interface ApiResponse<T = any> {
  data: T;
  message?: string;
  success?: boolean;
}

export interface ApiError {
  message: string;
  code?: string;
  status?: number;
}

// 페이징 관련 타입
export interface PaginationParams {
  page?: number;
  size?: number;
  sort?: string;
}

export interface PaginatedResponse<T> {
  content: T[];
  pageable: {
    pageNumber: number;
    pageSize: number;
  };
  totalPages: number;
  totalElements: number;
}

// Axios 인스턴스 기본 설정
export const createApiInstance = () => {
  const instance = axios.create({
    baseURL: API_BASE_URL,
    timeout: API_CONFIG.timeout,
    withCredentials: true, // 쿠키 기반 인증을 위해 추가
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return instance;
};
