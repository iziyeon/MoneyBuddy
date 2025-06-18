import { CalendarIcon } from 'lucide-react';
import type { Expert } from '../../../types/expert';
import { paymentStyles } from '../../../styles/payment.styles';

interface PaymentExpertInfoProps {
  expert: Expert;
  consultationDate: string;
  consultationTime: string;
}

export default function PaymentExpertInfo({
  expert,
  consultationDate,
  consultationTime,
}: PaymentExpertInfoProps) {
  return (
    <div className={paymentStyles.pageSection}>
      {/* 전문가 기본 정보 - 디자인 명세에 맞게 업데이트 */}
      <div className={paymentStyles.expertContainer}>
        <img
          src={expert.profile_image}
          alt={expert.nickname}
          className={paymentStyles.expertImage}
        />

        <div className={paymentStyles.expertInfo}>
          {/* 이름과 뱃지 */}
          <div className={paymentStyles.expertNameContainer}>
            <h2 className={paymentStyles.expertName}>{expert.nickname}</h2>
            <div className={paymentStyles.expertBadge}>
              <span className={paymentStyles.expertBadgeText}>엑스퍼트</span>
            </div>
          </div>

          {/* 상담 형태 정보 */}
          <div className={paymentStyles.expertServices}>
            <span className={paymentStyles.expertServiceText}>전화 상담</span>
            <div className={paymentStyles.expertDot}></div>
            <span className={paymentStyles.expertServiceText}>채팅 상담</span>
            <div className={paymentStyles.expertDot}></div>
            <span className={paymentStyles.expertServiceText}>
              15분 ~ 1시간 소요
            </span>
          </div>
        </div>
      </div>

      {/* 예약 정보 - 그라데이션 테두리 적용 */}
      <div
        className={`${paymentStyles.dateContainer} ${paymentStyles.dateGradientBorder}`}
      >
        <CalendarIcon className={paymentStyles.dateIcon} />
        <span className={paymentStyles.dateText}>{consultationDate}</span>
        <span className={paymentStyles.dateText}>{consultationTime}</span>
      </div>
    </div>
  );
}
