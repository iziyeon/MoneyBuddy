import { useNavigate } from 'react-router-dom';
import PageWrapper from '../../components/layout/PageWrapper';
import PageHeader from '../../components/layout/PageHeader';

export default function ReservationListPage() {
  const navigate = useNavigate();

  const reservations = [
    {
      id: 1,
      expertName: '김소비',
      date: '2024.01.25',
      time: '오전 10:00',
      status: '예약 확정',
    },
    {
      id: 2,
      expertName: '이지선',
      date: '2024.02.01',
      time: '오후 2:00',
      status: '예약 확정',
    },
  ];

  return (
    <PageWrapper>
      <PageHeader title="예약 내역" showBackButton />
      <div className="px-5 py-6">
        <h1 className="text-xl font-bold mb-4">내 상담 예약</h1>

        <div className="space-y-4">
          {reservations.map(reservation => (
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
