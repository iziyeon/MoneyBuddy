import { useEffect, type JSX } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomButtons from '../../components/common/BottomButtons';
import MethodSelector from '../../components/pages/Reservation/MethodSelector';
import Calendar from '../../components/calendar/Calendar';
import { useReservationStore } from '../../stores/useReservationStore';
import ReserveExpertInfo from '../../components/pages/Reservation/ReserveExpertInfo';

export default function SelectSchedulePage(): JSX.Element {
  const navigate = useNavigate();
  const { consultMethod, selectedDate, expert } = useReservationStore();

  const isComplete = consultMethod && selectedDate;

  useEffect(() => {
    if (!expert) {
      navigate(-1);
    }
  }, [expert, navigate]);

  return (
    <div>
      <ReserveExpertInfo />
      <div className="h-[8px] bg-[#F5F5F5]" />
      <MethodSelector />
      <div className="h-[8px] bg-[#F5F5F5]" />
      <Calendar />
      <BottomButtons
        leftLabel="이전"
        rightLabel="선택 완료"
        rightVariant={isComplete ? 'primary' : 'disabled'}
        rightDisabled={!isComplete}
        onLeftClick={() => navigate(-1)}
        onRightClick={() => {
          if (isComplete) {
            navigate('/reservation/step4');
          }
        }}
        leftVariant="secondary"
      />
    </div>
  );
}
