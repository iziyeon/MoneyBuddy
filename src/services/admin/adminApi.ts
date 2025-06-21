import { axiosInstance } from '../api';
import { API_ENDPOINTS } from '../../config/api';

// 공지사항 관련 타입 정의
export interface NoticeData {
  title: string;
  content: string;
}

export interface NoticeResponse {
  id: number;
  title: string;
  content?: string;
  createdAt: string;
  updatedAt?: string;
}

// FAQ 관련 타입 정의
export interface FaqData {
  question: string;
  answer: string;
}

export interface FaqResponse {
  id: number;
  question: string;
  answer?: string;
  createdAt: string;
  updatedAt?: string;
}

// CS 문의 관련 타입 정의
export interface CsInquiryData {
  title: string;
  content: string;
}

export interface CsInquiryResponse {
  id: number;
  title: string;
  content: string;
  status: 'PENDING' | 'IN_PROGRESS' | 'DONE';
  isRead: boolean;
  createdAt: string;
  userId: number;
  responderId?: number;
  respondedAt?: string;
}

export interface CsInquiryStatusUpdate {
  responderId: number;
  status: 'PENDING' | 'IN_PROGRESS' | 'DONE';
  respondedAt: string;
}

// Webhook 관련 타입 정의
export interface WebhookData {
  type: 'SLACK' | 'DISCORD' | 'TEAMS';
  url: string;
  enabled: boolean;
}

export interface WebhookResponse {
  id: number;
  type: 'SLACK' | 'DISCORD' | 'TEAMS';
  url: string;
  enabled: boolean;
  createdAt: string;
}

// =============== 공지사항 API (Public) ===============

// 공지사항 목록 조회 - 명세서: GET /api/v1/notices
export const getNotices = async (): Promise<NoticeResponse[]> => {
  console.log('📢 API 호출: 공지사항 목록 조회');
  const response = await axiosInstance.get(API_ENDPOINTS.notices);
  console.log('✅ API 응답: 공지사항 목록 조회 성공');
  return response.data;
};

// 공지사항 상세 조회 - 명세서: GET /api/v1/notices/{id}
export const getNoticeById = async (
  noticeId: number,
): Promise<NoticeResponse> => {
  console.log(`📢 API 호출: 공지사항 상세 조회 - ID: ${noticeId}`);
  const response = await axiosInstance.get(
    API_ENDPOINTS.noticeDetail(noticeId),
  );
  console.log('✅ API 응답: 공지사항 상세 조회 성공');
  return response.data;
};

// =============== 공지사항 API (Admin) ===============

// 공지사항 생성 - 명세서: POST /api/v1/admin/notices
export const createNotice = async (
  noticeData: NoticeData,
): Promise<NoticeResponse> => {
  console.log('📢 API 호출: 공지사항 생성 (관리자)');
  const response = await axiosInstance.post(
    API_ENDPOINTS.adminNotices,
    noticeData,
  );
  console.log('✅ API 응답: 공지사항 생성 성공');
  return response.data;
};

// 공지사항 수정 - 명세서: PUT /api/v1/admin/notices/{id}
export const updateNotice = async (
  noticeId: number,
  noticeData: NoticeData,
): Promise<NoticeResponse> => {
  console.log(`📢 API 호출: 공지사항 수정 (관리자) - ID: ${noticeId}`);
  const response = await axiosInstance.put(
    API_ENDPOINTS.adminNoticeDetail(noticeId),
    noticeData,
  );
  console.log('✅ API 응답: 공지사항 수정 성공');
  return response.data;
};

// 공지사항 삭제 - 명세서: DELETE /api/v1/admin/notices/{id}
export const deleteNotice = async (noticeId: number): Promise<void> => {
  console.log(`📢 API 호출: 공지사항 삭제 (관리자) - ID: ${noticeId}`);
  await axiosInstance.delete(API_ENDPOINTS.adminNoticeDetail(noticeId));
  console.log('✅ API 응답: 공지사항 삭제 성공');
};

// =============== FAQ API (Public) ===============

// FAQ 목록 조회 - 명세서: GET /api/v1/faqs
export const getFaqs = async (): Promise<FaqResponse[]> => {
  console.log('❔ API 호출: FAQ 목록 조회');
  const response = await axiosInstance.get(API_ENDPOINTS.faqs);
  console.log('✅ API 응답: FAQ 목록 조회 성공');
  return response.data;
};

// FAQ 상세 조회 - 명세서: GET /api/v1/faqs/{id}
export const getFaqById = async (faqId: number): Promise<FaqResponse> => {
  console.log(`❔ API 호출: FAQ 상세 조회 - ID: ${faqId}`);
  const response = await axiosInstance.get(API_ENDPOINTS.faqDetail(faqId));
  console.log('✅ API 응답: FAQ 상세 조회 성공');
  return response.data;
};

// =============== FAQ API (Admin) ===============

// FAQ 생성 - 명세서: POST /api/v1/admin/faqs
export const createFaq = async (faqData: FaqData): Promise<FaqResponse> => {
  console.log('❔ API 호출: FAQ 생성 (관리자)');
  const response = await axiosInstance.post(API_ENDPOINTS.adminFaqs, faqData);
  console.log('✅ API 응답: FAQ 생성 성공');
  return response.data;
};

// FAQ 수정 - 명세서: PUT /api/v1/admin/faqs/{id}
export const updateFaq = async (
  faqId: number,
  faqData: FaqData,
): Promise<FaqResponse> => {
  console.log(`❔ API 호출: FAQ 수정 (관리자) - ID: ${faqId}`);
  const response = await axiosInstance.put(
    API_ENDPOINTS.adminFaqDetail(faqId),
    faqData,
  );
  console.log('✅ API 응답: FAQ 수정 성공');
  return response.data;
};

// FAQ 삭제 - 명세서: DELETE /api/v1/admin/faqs/{id}
export const deleteFaq = async (faqId: number): Promise<void> => {
  console.log(`❔ API 호출: FAQ 삭제 (관리자) - ID: ${faqId}`);
  await axiosInstance.delete(API_ENDPOINTS.adminFaqDetail(faqId));
  console.log('✅ API 응답: FAQ 삭제 성공');
};

// =============== CS 문의 API ===============

// 1:1 문의 생성 - 명세서: POST /api/v1/cs-inquiries
export const createCsInquiry = async (
  inquiryData: CsInquiryData,
): Promise<CsInquiryResponse> => {
  console.log('🛎️ API 호출: 1:1 문의 생성');
  const response = await axiosInstance.post(
    API_ENDPOINTS.csInquiries,
    inquiryData,
  );
  console.log('✅ API 응답: 1:1 문의 생성 성공');
  return response.data;
};

// 사용자 문의 목록 조회 - 명세서: GET /api/v1/users/{userId}/cs-inquiries
export const getUserCsInquiries = async (
  userId: number,
): Promise<CsInquiryResponse[]> => {
  console.log(`🛎️ API 호출: 사용자 문의 목록 조회 - User ID: ${userId}`);
  const response = await axiosInstance.get(
    API_ENDPOINTS.userCsInquiries(userId),
  );
  console.log('✅ API 응답: 사용자 문의 목록 조회 성공');
  return response.data;
};

// 문의 상세 조회 - 명세서: GET /api/v1/cs-inquiries/{id}
export const getCsInquiryById = async (
  inquiryId: number,
): Promise<CsInquiryResponse> => {
  console.log(`🛎️ API 호출: 문의 상세 조회 - ID: ${inquiryId}`);
  const response = await axiosInstance.get(
    API_ENDPOINTS.csInquiryDetail(inquiryId),
  );
  console.log('✅ API 응답: 문의 상세 조회 성공');
  return response.data;
};

// 전체 문의 목록 조회 (ADMIN 전용) - 명세서: GET /api/v1/admin/cs-inquiries
export const getAdminCsInquiries = async (params?: {
  status?: 'PENDING' | 'IN_PROGRESS' | 'DONE';
  isRead?: boolean;
}): Promise<CsInquiryResponse[]> => {
  console.log('🛎️ API 호출: 전체 문의 목록 조회 (관리자)');
  const response = await axiosInstance.get(API_ENDPOINTS.adminCsInquiries, {
    params,
  });
  console.log('✅ API 응답: 전체 문의 목록 조회 성공');
  return response.data;
};

// 문의 상태 변경 (ADMIN 전용) - 명세서: PATCH /api/v1/admin/cs-inquiries/{id}/status
export const updateCsInquiryStatus = async (
  inquiryId: number,
  statusUpdate: CsInquiryStatusUpdate,
): Promise<void> => {
  console.log(`🛎️ API 호출: 문의 상태 변경 (관리자) - ID: ${inquiryId}`);
  await axiosInstance.patch(
    API_ENDPOINTS.csInquiryStatus(inquiryId),
    statusUpdate,
  );
  console.log('✅ API 응답: 문의 상태 변경 성공');
};

// =============== Webhook API (Admin) ===============

// Webhook 설정 생성 - 명세서: POST /api/v1/admin/webhooks
export const createWebhook = async (
  webhookData: WebhookData,
): Promise<WebhookResponse> => {
  console.log('🔔 API 호출: Webhook 설정 생성 (관리자)');
  const response = await axiosInstance.post(
    API_ENDPOINTS.webhooks,
    webhookData,
  );
  console.log('✅ API 응답: Webhook 설정 생성 성공');
  return response.data;
};

// Webhook 목록 조회 - 명세서: GET /api/v1/admin/webhooks
export const getWebhooks = async (): Promise<WebhookResponse[]> => {
  console.log('🔔 API 호출: Webhook 목록 조회 (관리자)');
  const response = await axiosInstance.get(API_ENDPOINTS.webhooks);
  console.log('✅ API 응답: Webhook 목록 조회 성공');
  return response.data;
};

// Webhook 수정 - 명세서: PUT /api/v1/admin/webhooks/{id}
export const updateWebhook = async (
  webhookId: number,
  webhookData: WebhookData,
): Promise<WebhookResponse> => {
  console.log(`🔔 API 호출: Webhook 수정 (관리자) - ID: ${webhookId}`);
  const response = await axiosInstance.put(
    API_ENDPOINTS.webhookDetail(webhookId),
    webhookData,
  );
  console.log('✅ API 응답: Webhook 수정 성공');
  return response.data;
};

// Webhook 삭제 - 명세서: DELETE /api/v1/admin/webhooks/{id}
export const deleteWebhook = async (webhookId: number): Promise<void> => {
  console.log(`🔔 API 호출: Webhook 삭제 (관리자) - ID: ${webhookId}`);
  await axiosInstance.delete(API_ENDPOINTS.webhookDetail(webhookId));
  console.log('✅ API 응답: Webhook 삭제 성공');
};
