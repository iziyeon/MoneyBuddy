import { withdrawStyles } from '../../../styles/withdraw.styles';

interface WithdrawReasonSectionProps {
  selectedReason: string;
  onReasonSelect: (reason: string) => void;
}

const withdrawReasons = [
  '서비스 이용 빈도 감소',
  '상담 가격이 부담스러움',
  '개인정보 유출 우려',
  '타 서비스 사용',
  '기타',
];

export default function WithdrawReasonSection({
  selectedReason,
  onReasonSelect,
}: WithdrawReasonSectionProps) {
  return (
    <div className={withdrawStyles.reasonSection.container}>
      <div className={withdrawStyles.reasonSection.optionsContainer}>
        {withdrawReasons.map(reason => (
          <button
            key={reason}
            onClick={() => onReasonSelect(reason)}
            className={`${withdrawStyles.reasonSection.option} ${
              selectedReason === reason
                ? withdrawStyles.reasonSection.optionSelected
                : ''
            }`}
          >
            <span className={withdrawStyles.reasonSection.optionText}>
              {reason}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
