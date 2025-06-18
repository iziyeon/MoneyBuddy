import type { ConsultationHistory } from '../../../types/consultation';
import { consultationHistoryStyles } from '../../../styles/consultationHistory.styles';

interface ConsultationCardProps {
  consultation: ConsultationHistory;
  onDetailClick: () => void;
  onChatClick: () => void;
  onCancelClick: () => void;
  onReviewClick: () => void;
}

export default function ConsultationCard({
  consultation,
  onDetailClick,
  onChatClick,
  onCancelClick,
  onReviewClick,
}: ConsultationCardProps) {
  const { consultationCard, statusStyles } = consultationHistoryStyles;

  const getButtonsByStatus = () => {
    switch (consultation.status) {
      case '예약완료':
        return (
          <>
            <button
              onClick={onChatClick}
              className={consultationCard.secondaryButton}
            >
              채팅하기
            </button>
            <button
              onClick={onCancelClick}
              className={consultationCard.outlineButton}
            >
              취소하기
            </button>
          </>
        );
      case '상담중':
        return (
          <button
            onClick={onChatClick}
            className={consultationCard.primaryButton}
          >
            상담 참여하기
          </button>
        );
      case '상담완료':
        return consultation.reviewStatus === 'available' ? (
          <button
            onClick={onReviewClick}
            className={consultationCard.primaryButton}
          >
            리뷰 작성하기
          </button>
        ) : (
          <button className={consultationCard.disabledButton} disabled>
            리뷰 작성 완료
          </button>
        );
      case '취소중':
        return (
          <button className={consultationCard.disabledButton} disabled>
            취소 처리중
          </button>
        );
      case '취소완료':
        return (
          <button className={consultationCard.disabledButton} disabled>
            취소 완료
          </button>
        );
      default:
        return null;
    }
  };

  // statusStyles에서 해당 상태의 스타일 가져오기
  const statusClass =
    statusStyles[consultation.status as keyof typeof statusStyles] ||
    statusStyles['예약완료'];

  return (
    <div className={consultationCard.container}>
      {/* 헤더 */}
      <div className={consultationCard.header}>
        <span className={consultationCard.date}>{consultation.date}</span>
        <button onClick={onDetailClick} className={consultationCard.detailLink}>
          상세내역 &gt;
        </button>
      </div>

      {/* 콘텐츠 */}
      <div className={consultationCard.content}>
        {/* 전문가 섹션 */}
        <div className={consultationCard.expertSection}>
          <div className={consultationCard.profileImage}></div>
          <div className={consultationCard.expertInfo}>
            <div className={consultationCard.expertHeader}>
              <span className={consultationCard.expertName}>
                {consultation.expertName}
              </span>
              {/* 여기서 statusStyles 적용 */}
              <span
                className={`${consultationCard.statusBadge} ${statusClass}`}
              >
                {consultation.status}
              </span>
            </div>
            <p className={consultationCard.timeText}>{consultation.time}</p>
            <div className={consultationCard.consultationDetails}>
              <span>{consultation.type}</span>
              <div className={consultationCard.dot}></div>
              <span>{consultation.consultationArea}</span>
            </div>
          </div>
        </div>

        {/* 버튼 섹션 */}
        <div className={consultationCard.buttonSection}>
          {getButtonsByStatus()}
        </div>
      </div>
    </div>
  );
}
