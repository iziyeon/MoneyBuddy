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
  status: ConsultationStatus;
  amount: number;
  paymentMethod: string;
  paymentDate: string;
  consultationArea: string;
  consultationNotes: string;
  reviewStatus?: 'available' | 'completed';
}

export interface ConsultationListResponse {
  consultations: ConsultationHistory[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}
