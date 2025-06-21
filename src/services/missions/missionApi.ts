import { axiosInstance } from '../api';
import { API_ENDPOINTS } from '../../config/api';

// 미션 관련 타입 정의
export interface MissionData {
  title: string;
  content: string;
  advisorId: number;
}

export interface MissionResponse {
  id: number;
  title: string;
  content: string;
  status: 'PENDING' | 'SUBMITTED' | 'COMPLETED';
  participationId: number;
  advisorId: number;
  createdAt: string;
}

export interface MissionFeedbackData {
  feedback: string;
}

export interface MissionFeedbackResponse {
  id: number;
  feedback: string;
  reviewedAt: string;
}

export interface MissionUploadData {
  fileUrl: string;
}

export interface MissionUploadResponse {
  id: number;
  fileUrl: string;
  uploadedAt: string;
}

// 미션 생성 (ADMIN/ADVISOR 전용) - 명세서: POST /api/v1/admin/challenge-participations/{participationId}/missions
export const createMission = async (
  participationId: number,
  missionData: MissionData,
): Promise<MissionResponse> => {
  console.log(`🎯 API 호출: 미션 생성 - Participation ID: ${participationId}`);
  const response = await axiosInstance.post(
    API_ENDPOINTS.createMission(participationId),
    missionData,
  );
  console.log('✅ API 응답: 미션 생성 성공');
  return response.data;
};

// 미션 목록 조회 - 명세서: GET /api/v1/challenge-participations/{participationId}/missions
export const getMissionsByParticipation = async (
  participationId: number,
): Promise<MissionResponse[]> => {
  console.log(
    `📋 API 호출: 미션 목록 조회 - Participation ID: ${participationId}`,
  );
  const response = await axiosInstance.get(
    API_ENDPOINTS.missionsByParticipation(participationId),
  );
  console.log('✅ API 응답: 미션 목록 조회 성공');
  return response.data;
};

// 미션 상세 조회 - 명세서: GET /api/v1/missions/{id}
export const getMissionDetail = async (
  missionId: number,
): Promise<MissionResponse> => {
  console.log(`🔍 API 호출: 미션 상세 조회 - ID: ${missionId}`);
  const response = await axiosInstance.get(
    API_ENDPOINTS.missionDetail(missionId),
  );
  console.log('✅ API 응답: 미션 상세 조회 성공');
  return response.data;
};

// 미션 상태 변경 - 명세서: PATCH /api/v1/missions/{id}/status
export const updateMissionStatus = async (
  missionId: number,
  status: 'PENDING' | 'SUBMITTED' | 'COMPLETED',
): Promise<void> => {
  console.log(
    `🔄 API 호출: 미션 상태 변경 - ID: ${missionId}, Status: ${status}`,
  );
  await axiosInstance.patch(API_ENDPOINTS.missionStatus(missionId), { status });
  console.log('✅ API 응답: 미션 상태 변경 성공');
};

// 미션 피드백 작성 (ADVISOR 전용) - 명세서: POST /api/v1/missions/{missionId}/feedbacks
export const createMissionFeedback = async (
  missionId: number,
  feedbackData: MissionFeedbackData,
): Promise<MissionFeedbackResponse> => {
  console.log(`💬 API 호출: 미션 피드백 작성 - Mission ID: ${missionId}`);
  const response = await axiosInstance.post(
    API_ENDPOINTS.missionFeedbacks(missionId),
    feedbackData,
  );
  console.log('✅ API 응답: 미션 피드백 작성 성공');
  return response.data;
};

// 미션 피드백 목록 조회 - 명세서: GET /api/v1/missions/{missionId}/feedbacks
export const getMissionFeedbacks = async (
  missionId: number,
): Promise<MissionFeedbackResponse[]> => {
  console.log(`📝 API 호출: 미션 피드백 목록 조회 - Mission ID: ${missionId}`);
  const response = await axiosInstance.get(
    API_ENDPOINTS.missionFeedbacks(missionId),
  );
  console.log('✅ API 응답: 미션 피드백 목록 조회 성공');
  return response.data;
};

// 미션 인증 업로드 - 명세서: POST /api/v1/missions/{missionId}/uploads
export const uploadMissionProof = async (
  missionId: number,
  uploadData: MissionUploadData,
): Promise<MissionUploadResponse> => {
  console.log(`📤 API 호출: 미션 인증 업로드 - Mission ID: ${missionId}`);
  const response = await axiosInstance.post(
    API_ENDPOINTS.missionUploads(missionId),
    uploadData,
  );
  console.log('✅ API 응답: 미션 인증 업로드 성공');
  return response.data;
};

// 미션 인증 업로드 목록 조회 - 명세서: GET /api/v1/missions/{missionId}/uploads
export const getMissionUploads = async (
  missionId: number,
): Promise<MissionUploadResponse[]> => {
  console.log(
    `📁 API 호출: 미션 인증 업로드 목록 조회 - Mission ID: ${missionId}`,
  );
  const response = await axiosInstance.get(
    API_ENDPOINTS.missionUploads(missionId),
  );
  console.log('✅ API 응답: 미션 인증 업로드 목록 조회 성공');
  return response.data;
};
