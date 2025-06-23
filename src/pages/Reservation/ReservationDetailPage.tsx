import { useParams, useNavigate } from 'react-router-dom';
import {
  useReservationDetail,
  useCancelReservation,
} from '../../hooks/useReservation';
import { ArrowLeft } from 'lucide-react';
import PageWrapper from '../../components/layout/PageWrapper';
import PageHeader from '../../components/layout/PageHeader';

export default function ReservationDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const reservationId = id ? parseInt(id) : undefined;

  const {
    data: reservation,
    isLoading,
    error,
  } = useReservationDetail(reservationId);
  const cancelReservationMutation = useCancelReservation();

  const handleCancel = async () => {
    if (!reservationId) return;

    if (window.confirm('예약을 취소하시겠습니까?')) {
      try {
        await cancelReservationMutation.mutateAsync(reservationId);
        alert('예약이 취소되었습니다.');
        navigate('/reservations');
      } catch (error) {
        console.error('예약 취소 실패:', error);
        alert('예약 취소에 실패했습니다.');
      }
    }
  };

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="flex items-center mb-6">
          <button onClick={() => navigate(-1)} className="mr-4">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-semibold">예약 상세</h1>
        </div>
        <div className="text-center py-8">
          <div className="text-gray-500">로딩 중...</div>
        </div>
      </div>
    );
  }

  if (error || !reservation) {
    return (
      <div className="p-6">
        <div className="flex items-center mb-6">
          <button onClick={() => navigate(-1)} className="mr-4">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-semibold">예약 상세</h1>
        </div>
        <div className="text-center py-8">
          <div className="text-red-500">
            예약 정보를 불러오는데 실패했습니다.
          </div>
        </div>
      </div>
    );
  }

  return (
    <PageWrapper>
      <PageHeader title="예약 상세" showBackButton />
      <div className="px-5 py-6">
        <div className="bg-white rounded-lg p-4 mb-4">
          <h2 className="text-xl font-semibold mb-2">예약 정보</h2>
          <p>예약 ID: {reservation.id}</p>
          <p>상태: {reservation.status}</p>
        </div>

        <div className="bg-white rounded-lg p-4 mb-4">
          <h2 className="text-lg font-semibold mb-2">전문가 정보</h2>
          <p>전문가: {reservation.expert.name}</p>
          <p>분야: {reservation.expert.field}</p>
        </div>

        <div className="bg-white rounded-lg p-4 mb-4">
          <h2 className="text-lg font-semibold mb-2">상담 일정</h2>
          <p>날짜: {new Date(reservation.date).toLocaleDateString()}</p>
          <p>
            시간:{' '}
            {new Date(reservation.date).toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </p>
        </div>

        <div className="bg-white rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">결제 정보</h2>
          <p>결제 금액: {reservation.amount.toLocaleString()}원</p>
          <p>결제 수단: {reservation.paymentMethod}</p>
          <p>
            결제일: {new Date(reservation.paymentDate).toLocaleDateString()}
          </p>
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={handleCancel}
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            예약 취소
          </button>
        </div>
      </div>
    </PageWrapper>
  );
}
