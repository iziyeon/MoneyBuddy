import { axiosInstance } from '../api';

// 리포트 관련 타입 정의
export interface ReportData {
  userId: number;
  challengeId: number;
  summary: string;
  chartUrl: string;
}

export interface ReportResponse {
  id: number;
  userId: number;
  challengeId: number;
  challengeTitle: string;
  summary: string;
  chartUrl: string;
  generatedAt: string;
}

// 리포트 생성 (명세서: POST /api/v1/reports)
export const createReport = async (
  reportData: ReportData,
): Promise<ReportResponse> => {
  console.log('📊 API 호출: 리포트 생성');
  const response = await axiosInstance.post('/api/v1/reports', reportData);
  console.log('✅ API 응답: 리포트 생성 성공');
  return response.data;
};

// 단일 리포트 조회 (명세서: GET /api/v1/reports/{id})
export const getReportById = async (
  reportId: number,
): Promise<ReportResponse> => {
  console.log(`📊 API 호출: 리포트 상세 조회 - ID: ${reportId}`);
  const response = await axiosInstance.get(`/api/v1/reports/${reportId}`);
  console.log('✅ API 응답: 리포트 상세 조회 성공');
  return response.data;
};

// 사용자별 리포트 전체 조회 (명세서: GET /api/v1/reports/users/{userId})
export const getUserReports = async (
  userId: number,
): Promise<ReportResponse[]> => {
  console.log(`📊 API 호출: 사용자별 리포트 조회 - User ID: ${userId}`);
  const response = await axiosInstance.get(`/api/v1/reports/users/${userId}`);
  console.log('✅ API 응답: 사용자별 리포트 조회 성공');
  return response.data;
};
