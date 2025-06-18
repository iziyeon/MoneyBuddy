import { useParams } from 'react-router-dom';
import PageWrapper from '../../components/layout/PageWrapper';
import PageHeader from '../../components/layout/PageHeader';

export default function ReservationDetailPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <PageWrapper>
      <PageHeader title="예약 상세" showBackButton />
      <div className="px-5 py-6">
        <div className="bg-white rounded-lg p-4 mb-4">
          <h2 className="text-xl font-semibold mb-2">예약 정보</h2>
          <p>예약 ID: {id}</p>
          <p>상태: 예약 확정</p>
        </div>

        <div className="bg-white rounded-lg p-4 mb-4">
          <h2 className="text-lg font-semibold mb-2">전문가 정보</h2>
          <p>전문가: 김소비</p>
          <p>분야: 소비 관리</p>
        </div>

        <div className="bg-white rounded-lg p-4 mb-4">
          <h2 className="text-lg font-semibold mb-2">상담 일정</h2>
          <p>날짜: 2024.01.25</p>
          <p>시간: 오전 10:00</p>
        </div>

        <div className="bg-white rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">결제 정보</h2>
          <p>결제 금액: 30,000원</p>
          <p>결제 수단: 신용카드</p>
          <p>결제일: 2024.01.20</p>
        </div>
      </div>
    </PageWrapper>
  );
}
