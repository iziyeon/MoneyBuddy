import { AlertTriangle } from 'lucide-react';
import { consultationHistoryStyles } from '../../../styles/consultationHistory.styles';

export default function WarningSection() {
  const { warningSection } = consultationHistoryStyles;

  return (
    <div className={warningSection.container}>
      <div className={warningSection.warningItem}>
        <AlertTriangle className={warningSection.icon} />
        <span>
          예약 당일은 예약을 변경/취소 할 수 없으며, 노쇼 시 환불이 불가합니다.
        </span>
      </div>
      <div className={warningSection.warningItem}>
        <AlertTriangle className={warningSection.icon} />
        <span>
          예약 시간에 늦을 경우, 경과한 시간만큼 이용 시간이 줄어듭니다.
        </span>
      </div>
    </div>
  );
}
