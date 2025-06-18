import { useState, useMemo, useRef, type ReactNode } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import PageWrapper from '../../components/layout/PageWrapper';
import PageHeader from '../../components/layout/PageHeader';
import { cancelConsultation } from '../../services/consultation/consultationApi';
import type { ConsultationHistory } from '../../types/consultation';
import { expertData } from '../../data/expertData';
import { paymentDetailStyles } from '../../styles/paymentdetail.styles';

// 스크롤 컨테이너 컴포넌트 추출
const ScrollContainer = ({
  children,
  title = '상세내역',
}: {
  children: ReactNode;
  title?: string;
}) => {
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
      <div className="sticky top-0 bg-white z-20">
        <PageHeader title={title} showBackButton />
      </div>
      {children}
    </div>
  );
};

export default function ConsultationDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const consultationId = id ? parseInt(id) : 0;

  const [showCancelConfirm, setShowCancelConfirm] = useState(false);

  // expertData를 활용한 상담 상세 데이터 생성
  const consultation = useMemo<ConsultationHistory | null>(() => {
    if (consultationId <= 0 || consultationId > expertData.length) return null;

    const expert = expertData[consultationId - 1];
    const consultationIndex = consultationId - 1;

    return {
      id: consultationId,
      expertId: expert.id,
      expertName: expert.nickname,
      field: expert.field,
      date:
        consultationIndex === 0
          ? '2025년 1월 25일 월요일'
          : consultationIndex === 1
            ? '2025년 1월 20일 토요일'
            : '2025년 1월 15일 월요일',
      time:
        consultationIndex === 0
          ? '오전 10:00~오전 10:30'
          : consultationIndex === 1
            ? '오후 2:00~오후 2:30'
            : '오후 4:00~오후 4:30',
      type:
        consultationIndex === 0
          ? '전화상담'
          : consultationIndex === 1
            ? '화상상담'
            : '채팅상담',
      status:
        consultationIndex === 0
          ? '예약완료'
          : consultationIndex === 1
            ? '예약완료'
            : '상담완료',
      amount: 30000,
      paymentMethod:
        consultationIndex === 0
          ? '네이버페이먼츠'
          : consultationIndex === 1
            ? '카카오페이'
            : '토스페이',
      paymentDate:
        consultationIndex === 0
          ? '2024.01.20'
          : consultationIndex === 1
            ? '2024.01.18'
            : '2024.01.10',
      consultationArea: '금융 문제 고민',
      consultationNotes: `더미 텍스트 최근 경제 상황의 불확실성이 커지면서 자산 포트폴리오 재조정에 대한 고민이 많습니다. 현재 주식, 예금, 펀드 등으로 나뉘어 있는데, 인플레이션과 금리 변동에 대비하여 안정적인 수익을 창출할 수 있는 방법이 궁금합니다. 특히 은퇴 후를 위한 노후 자금 마련과 연금 설계는 어떻게 해야 할지 막막합니다. 또한, 예상치 못한 상황에 대비한 비상 자금 확보와 보험의 필요성에 대해서도 상담받고 싶습니다. 전체적인 재무 목표를 설정하고 효율적인 자산 관리 전략을 세우는 데 전문가의 도움이 절실합니다.`,
      reviewStatus:
        consultationIndex === 0
          ? 'available'
          : consultationIndex === 2
            ? 'completed'
            : undefined,
    };
  }, [consultationId]);

  const cancelConsultationMutation = useMutation({
    mutationFn: (id: number) => cancelConsultation(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['consultation', consultationId],
      });
      queryClient.invalidateQueries({ queryKey: ['consultations'] });
      setShowCancelConfirm(false);
      alert('상담이 취소되었습니다.');
    },
    onError: error => {
      console.error('상담 취소 실패:', error);
      alert('상담 취소에 실패했습니다.');
    },
  });

  function handleCancelConsultation() {
    if (consultation) {
      cancelConsultationMutation.mutate(consultation.id);
    }
  }

  // 하단에 고정될 버튼 컴포넌트
  const BottomButtons = (
    <div className="bg-white border-t border-gray-200 p-4 w-full">
      <div className={paymentDetailStyles.buttonSection.buttonGroup}>
        <button
          onClick={() => navigate(`/experts/${consultation?.expertId || 1}`)}
          className={paymentDetailStyles.buttonSection.profileButton}
        >
          전문가 상세보기
        </button>
        <button
          onClick={() => setShowCancelConfirm(true)}
          className={paymentDetailStyles.buttonSection.cancelButton}
        >
          취소하기
        </button>
      </div>
    </div>
  );

  return (
    <PageWrapper bottomElement={BottomButtons}>
      <ScrollContainer title="상담 예약 상세">
        <div className="w-[390px] mx-auto bg-white pb-24">
          <div className="p-5">
            {/* 상담 내역 카드 */}
            <div className={paymentDetailStyles.consultationSection.container}>
              <div className={paymentDetailStyles.consultationSection.content}>
                {/* 헤더 */}
                <div className={paymentDetailStyles.consultationSection.header}>
                  <span
                    className={
                      paymentDetailStyles.consultationSection.expertName
                    }
                  >
                    {consultation?.expertName || '박재현'}
                  </span>
                  <div
                    className={
                      paymentDetailStyles.consultationSection.statusBadge
                    }
                  >
                    <span
                      className={
                        paymentDetailStyles.consultationSection.statusText
                      }
                    >
                      {consultation?.status || '예약완료'}
                    </span>
                  </div>
                </div>

                <div
                  className={paymentDetailStyles.consultationSection.divider}
                ></div>
                {/* 상담 정보 */}
                <div
                  className={paymentDetailStyles.consultationSection.infoRow}
                >
                  <span
                    className={paymentDetailStyles.consultationSection.label}
                  >
                    상담 일자
                  </span>
                  <span
                    className={paymentDetailStyles.consultationSection.value}
                  >
                    {consultation?.date || '2025년 1월 25일 월요일'}
                  </span>
                </div>

                <div
                  className={paymentDetailStyles.consultationSection.infoRow}
                >
                  <span
                    className={paymentDetailStyles.consultationSection.label}
                  >
                    상담 시간
                  </span>
                  <span
                    className={paymentDetailStyles.consultationSection.value}
                  >
                    {consultation?.time || '오전 10:00~오전 10:30'}
                  </span>
                </div>

                <div
                  className={paymentDetailStyles.consultationSection.infoRow}
                >
                  <span
                    className={paymentDetailStyles.consultationSection.label}
                  >
                    상담 방법
                  </span>
                  <span
                    className={paymentDetailStyles.consultationSection.value}
                  >
                    {consultation?.type || '전화상담'}
                  </span>
                </div>

                <div
                  className={paymentDetailStyles.consultationSection.infoRow}
                >
                  <span
                    className={paymentDetailStyles.consultationSection.label}
                  >
                    상담 영역
                  </span>
                  <span
                    className={paymentDetailStyles.consultationSection.value}
                  >
                    {consultation?.consultationArea || '금융 문제 고민'}
                  </span>
                </div>

                <div
                  className={paymentDetailStyles.consultationSection.infoRow}
                >
                  <span
                    className={paymentDetailStyles.consultationSection.label}
                  >
                    결제 방식
                  </span>
                  <span
                    className={paymentDetailStyles.consultationSection.value}
                  >
                    {consultation?.paymentMethod || '네이버페이먼츠'}
                  </span>
                </div>

                {/* 구분선 */}
                <div
                  className={paymentDetailStyles.consultationSection.divider}
                ></div>

                {/* 결제 금액 */}
                <div
                  className={paymentDetailStyles.consultationSection.amountRow}
                >
                  <span
                    className={
                      paymentDetailStyles.consultationSection.amountLabel
                    }
                  >
                    결제 금액
                  </span>
                  <span
                    className={
                      paymentDetailStyles.consultationSection.amountValue
                    }
                  >
                    30,000원
                  </span>
                </div>
              </div>
            </div>

            {/* 상담 고민 등록 */}
            <div
              className={`${
                paymentDetailStyles.consultationConcernSection.container
              } mt-8`}
            >
              <span
                className={paymentDetailStyles.consultationConcernSection.title}
              >
                상담 고민 등록
              </span>

              <div
                className={
                  paymentDetailStyles.consultationConcernSection.contentBox
                }
              >
                <p
                  className={
                    paymentDetailStyles.consultationConcernSection.contentText
                  }
                >
                  {consultation?.consultationNotes ||
                    '더미 텍스트 최근 경제 상황의 불확실성이 커지면서 자산 포트폴리오 재조정에 대한 고민이 많습니다. 현재 주식, 예금, 펀드 등으로 나뉘어 있는데, 인플레이션과 금리 변동에 대비하여 안정적인 수익을 창출할 수 있는 방법이 궁금합니다. 특히 은퇴 후를 위한 노후 자금 마련과 연금 설계는 어떻게 해야 할지 막막합니다. 또한, 예상치 못한 상황에 대비한 비상 자금 확보와 보험의 필요성에 대해서도 상담받고 싶습니다. 전체적인 재무 목표를 설정하고 효율적인 자산 관리 전략을 세우는 데 전문가의 도움이 절실합니다.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </ScrollContainer>

      {/* 취소 확인 모달 */}
      {showCancelConfirm && (
        <div className={paymentDetailStyles.modal.backdrop}>
          <div className={paymentDetailStyles.modal.container}>
            <h4 className={paymentDetailStyles.modal.title}>상담 취소</h4>
            <p className={paymentDetailStyles.modal.content}>
              정말로 상담을 취소하시겠습니까?
            </p>
            <div className={paymentDetailStyles.modal.buttonGroup}>
              <button
                onClick={() => setShowCancelConfirm(false)}
                className={paymentDetailStyles.modal.cancelModalButton}
              >
                아니오
              </button>
              <button
                onClick={handleCancelConsultation}
                disabled={cancelConsultationMutation.isPending}
                className={paymentDetailStyles.modal.confirmButton}
              >
                {cancelConsultationMutation.isPending ? '취소 중...' : '예'}
              </button>
            </div>
          </div>
        </div>
      )}
    </PageWrapper>
  );
}
