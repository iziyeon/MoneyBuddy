export interface ConsultationHistory {
  id: number;
  expertId: number;
  expertName: string;
  field: string;
  date: string;
  time: string;
  type: '화상상담' | '전화상담' | '채팅상담' | '이메일상담';
  status: '예약완료' | '상담완료' | '취소됨' | '노쇼';
  amount: number;
  paymentMethod: string;
  paymentDate: string;
  consultationArea: string;
  consultationNotes: string;
  reviewStatus?: 'available' | 'completed';
  expertProfileImage?: string;
}

export interface ConsultationListResponse {
  consultations: ConsultationHistory[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}
