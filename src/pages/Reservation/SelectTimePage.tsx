import type { JSX } from 'react';
import { useReservationStore } from '../../stores/useReservationStore';
import BottomButtons from '../../components/common/BottomButtons';
import ReserveExpertInfo from '../../components/pages/Reservation/ReserveExpertInfo';
import TimeSelector from '../../components/pages/Reservation/TimeSelector';
import ExtendTimeController from '../../components/pages/Reservation/ExtendTimeController';
import { useNavigate } from 'react-router-dom';

export default function SelectTimePage(): JSX.Element {
  const navigate = useNavigate();
  const { selectedTime, needExtend } = useReservationStore();

  const rightDisabled = !selectedTime || (needExtend && !selectedTime);

  return (
    <div>
      <ReserveExpertInfo />
      <TimeSelector />
      <ExtendTimeController />
      <BottomButtons
        leftLabel="이전"
        rightLabel="결제하기"
        leftVariant="secondary"
        onLeftClick={() => navigate(-1)}
        onRightClick={() => {
          if (!rightDisabled) {
            navigate('/payment');
          }
        }}
        rightDisabled={rightDisabled}
      />
    </div>
  );
}
