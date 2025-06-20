import { useState, useRef, useMemo, type ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { Settings } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import ProfileSection from '../components/pages/MyPage/ProfileSection';
import ConsultationCard from '../components/pages/MyPage/ConsultationCard';
import ChallengeCard from '../components/pages/MyPage/ChallengeCard';
import QuickMenu from '../components/pages/MyPage/QuickMenu';
import CustomerSupportSection from '../components/pages/MyPage/CustomerSupportSection';
import { useAuthStore } from '../stores/useAuthStore';
import { expertData } from '../data/expertData';
import {
  generateConsultationData,
  getNextConsultation,
} from '../data/consultationData';
import { mypageStyles } from '../styles/mypage.styles';

const ScrollContainer = ({ children }: { children: ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="h-[844px] overflow-y-scroll select-none"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch',
        scrollbarColor: 'transparent transparent',
      }}
    >
      {children}
    </div>
  );
};

export default function MyPage() {
  const navigate = useNavigate();
  const user = useAuthStore(state => state.user);

  // 로그인하지 않은 경우 로그인 페이지로 리다이렉트
  if (!user) {
    navigate('/login');
    return null;
  }

  // 실제 상담 데이터에서 가장 빠른 예약완료/상담중 상담 찾기
  const allConsultations = useMemo(() => generateConsultationData(), []);
  const nextConsultation = useMemo(
    () => getNextConsultation(allConsultations),
    [allConsultations],
  );

  // 상담이 있는지 확인 (예약완료 또는 상담중 상태)
  const hasConsultation = !!nextConsultation;
  const hasChallenge = true; // 챌린지 있음

  // 상담 데이터를 마이페이지 형식에 맞게 변환
  const mockConsultation = useMemo(() => {
    if (!nextConsultation) return null;

    const expert =
      expertData.find(e => e.id === nextConsultation.expertId) || expertData[0];
    return {
      id: nextConsultation.id,
      expertName: nextConsultation.expertName,
      expertImage: expert.profile_image,
      date: nextConsultation.date,
      time: nextConsultation.time,
      type: nextConsultation.type,
      status: nextConsultation.status === '예약완료' ? '예약 완료' : '상담 중',
      duration: '30분', // 기본값
    };
  }, [nextConsultation]);

  const handleSettingsClick = () => navigate('/settings');
  const handleProfileEditClick = () => console.log('프로필 수정');
  const handleConsultationDetailClick = () => navigate('/consultation/history');
  const handleConsultationActionClick = () => console.log('상담 제출');
  const handleChallengeClick = () => navigate('/challenge/status');
  const handleConsultationHistoryClick = () =>
    navigate('/consultation/history');
  const handleExpertClick = () => navigate('/bookmarked/experts');
  const handleClassClick = () => console.log('마이클래스');
  const handleCustomerCenterClick = () => console.log('고객센터');
  const handleInquiryClick = () => console.log('1:1 문의');
  const handleNoticeClick = () => console.log('공지사항');

  return (
    <PageWrapper>
      <ScrollContainer>
        <div className="w-[390px] mx-auto bg-white">
          {/* 헤더 */}
          <div className={mypageStyles.header.container}>
            <h1 className={mypageStyles.header.title}>마이페이지</h1>
            <button onClick={handleSettingsClick}>
              <Settings className={mypageStyles.header.settingsIcon} />
            </button>
          </div>

          {/* 메인 콘텐츠 */}
          <div className="flex flex-col gap-5 p-5">
            {/* 프로필 섹션 */}
            <ProfileSection
              nickname={user.nickname}
              profileImage="/jpg/experts/expert1.png"
              onEditClick={handleProfileEditClick}
            />

            {/* 배너 (상담이 없을 때만 표시) */}
            {!hasConsultation && (
              <div className={mypageStyles.banner.container}>
                <div className={mypageStyles.banner.text}>
                  지금 바로 금융 전문가와 상담해보세요
                </div>
                <img
                  src="/jpg/icon/consultation-banner.png"
                  alt="상담 배너"
                  className={mypageStyles.banner.image}
                />
              </div>
            )}

            {/* 상담 내역 (있을 때만 표시) */}
            {hasConsultation && mockConsultation && (
              <ConsultationCard
                consultation={mockConsultation}
                onDetailClick={handleConsultationDetailClick}
                onActionClick={handleConsultationActionClick}
              />
            )}

            {/* 챌린지 카드들 - 다양한 상태 테스트 */}
            {hasChallenge && (
              <div className="space-y-4">
                {/* 기본 진행중 */}
                <ChallengeCard
                  title="챌린지를 수행해주세요!"
                  deadline="2025.12.25 까지 (D-00)"
                  percentage={20}
                  status="active"
                  onClick={handleChallengeClick}
                />

                {/* 마감 임박 */}
                <ChallengeCard
                  title="곧 챌린지 마감, 지금 수행해요!"
                  deadline="2025.12.25 까지 (D-00)"
                  percentage={20}
                  status="urgent"
                  onClick={handleChallengeClick}
                />

                {/* 완료 */}
                <ChallengeCard
                  title="챌린지 완료, 축하드려요 🙌"
                  deadline="2025.12.25 까지 (D-00)"
                  percentage={100}
                  status="completed"
                  onClick={handleChallengeClick}
                />
              </div>
            )}

            {/* 퀵 메뉴 */}
            <QuickMenu
              onChallengeClick={handleChallengeClick}
              onConsultationClick={handleConsultationHistoryClick}
              onExpertClick={handleExpertClick}
              onClassClick={handleClassClick}
            />
          </div>

          {/* 고객지원 섹션 */}
          <div className="p-5">
            <CustomerSupportSection
              onCustomerCenterClick={handleCustomerCenterClick}
              onInquiryClick={handleInquiryClick}
              onNoticeClick={handleNoticeClick}
            />
          </div>
        </div>
      </ScrollContainer>
    </PageWrapper>
  );
}
