export type ConsultationStatus =
  | '예약완료'
  | '상담중'
  | '상담완료'
  | '취소중'
  | '취소완료';

export interface ConsultationHistory {
  id: number;
  expertId: number;
  expertName: string;
  field: string;
  date: string;
  time: string;
  type: string;
  status: string;
  amount: number;
  paymentMethod: string;
  paymentDate: string;
  consultationArea: string;
  consultationNotes: string;
  reviewStatus?: 'available' | 'completed';
  dateObject?: Date; // 정렬을 위한 날짜 객체 추가
}

export interface ConsultationListResponse {
  consultations: ConsultationHistory[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}
