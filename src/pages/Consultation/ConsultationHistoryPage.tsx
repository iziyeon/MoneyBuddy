import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import PageWrapper from '../../components/layout/PageWrapper';
import PageHeader from '../../components/layout/PageHeader';
import ConsultationHistoryCard from '../../components/pages/Consultation/ConsultationHistoryCard';
import type { ConsultationHistory } from '../../types/consultation';
import { expertData } from '../../data/expertData';

export default function ConsultationHistoryPage() {
  const navigate = useNavigate();

  // expertData를 활용한 모의 상담 내역 생성
  const consultations = useMemo<ConsultationHistory[]>(() => {
    return expertData.slice(0, 3).map((expert, index) => ({
      id: index + 1,
      expertId: expert.id,
      expertName: expert.nickname,
      field: expert.field,
      date:
        index === 0
          ? '2025년 1월 25일 월요일'
          : index === 1
            ? '2025년 1월 20일 토요일'
            : '2025년 1월 15일 월요일',
      time:
        index === 0
          ? '오전 10:00~오전 10:30'
          : index === 1
            ? '오후 2:00~오후 2:30'
            : '오후 4:00~오후 4:30',
      type: index === 0 ? '전화상담' : index === 1 ? '화상상담' : '채팅상담',
      status: index === 0 ? '상담완료' : index === 1 ? '예약완료' : '상담완료',
      amount: expert.price,
      paymentMethod:
        index === 0
          ? '네이버페이먼츠'
          : index === 1
            ? '카카오페이'
            : '토스페이',
      paymentDate:
        index === 0 ? '2024.01.20' : index === 1 ? '2024.01.18' : '2024.01.10',
      consultationArea: `${expert.field} 관련 상담`,
      consultationNotes: `${expert.description}에 대한 상세한 상담을 받고 싶습니다. ${expert.hashtags.join(
        ', ',
      )} 관련하여 전문적인 조언을 구하고 있습니다.`,
      reviewStatus:
        index === 0 ? 'available' : index === 2 ? 'completed' : undefined,
    }));
  }, []);

  const handleConsultationClick = (consultation: ConsultationHistory) => {
    navigate(`/consultation/detail/${consultation.id}`);
  };

  return (
    <PageWrapper>
      <PageHeader title="상담 내역" showBackButton />
      <div className="px-5 py-6">
        <h1 className="text-xl font-bold mb-4">나의 상담 내역</h1>

        {consultations.length > 0 ? (
          <div className="flex flex-col gap-4">
            {consultations.map(consultation => (
              <ConsultationHistoryCard
                key={consultation.id}
                consultation={consultation}
                onClick={() => handleConsultationClick(consultation)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-500 mb-4">상담 내역이 없습니다.</p>
            <button
              onClick={() => navigate('/expert')}
              className="px-6 py-3 bg-primary text-white rounded-lg"
            >
              전문가 찾아보기
            </button>
          </div>
        )}
      </div>
    </PageWrapper>
  );
}
