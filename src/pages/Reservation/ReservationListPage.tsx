import { useNavigate } from 'react-router-dom';
import { useReservations } from '../../hooks/useReservation';
import { ArrowLeft } from 'lucide-react';
import PageWrapper from '../../components/layout/PageWrapper';
import PageHeader from '../../components/layout/PageHeader';

export default function ReservationListPage() {
  const navigate = useNavigate();
  const { data: reservations = [], isLoading, error } = useReservations();

  if (isLoading) {
    return (
      <div className="p-6">
        <div className="flex items-center mb-6">
          <button onClick={() => navigate(-1)} className="mr-4">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-semibold">예약 목록</h1>
        </div>
        <div className="text-center py-8">
          <div className="text-gray-500">로딩 중...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <div className="flex items-center mb-6">
          <button onClick={() => navigate(-1)} className="mr-4">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-xl font-semibold">예약 목록</h1>
        </div>
        <div className="text-center py-8">
          <div className="text-red-500">
            예약 목록을 불러오는데 실패했습니다.
          </div>
        </div>
      </div>
    );
  }

  return (
    <PageWrapper>
      <PageHeader title="예약 내역" showBackButton />
      <div className="px-5 py-6">
        <h1 className="text-xl font-bold mb-4">내 상담 예약</h1>

        <div className="space-y-4">
          {reservations.map((reservation: any) => (
            <div
              key={reservation.id}
              className="bg-white border border-gray-200 rounded-lg p-4 cursor-pointer"
              onClick={() => navigate(`/reserve/detail/${reservation.id}`)}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">
                  {reservation.expertName} 전문가
                </span>
                <span className="text-primary font-medium">
                  {reservation.status}
                </span>
              </div>
              <div className="text-gray-600">
                <p>날짜: {reservation.date}</p>
                <p>시간: {reservation.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
