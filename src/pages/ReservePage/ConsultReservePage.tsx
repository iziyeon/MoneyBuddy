import { useNavigate } from 'react-router-dom';
import BottomButtons from '../../components/common/BottomButtons';
import MethodSelector from '../../components/pages/Reservation/MethodSelector';
import Calendar from '../../components/calendar/Calendar';

export default function ConsultReservePage() {
  const navigate = useNavigate();

  return (
    <div>
      <MethodSelector />
      <Calendar />
      <BottomButtons
        leftLabel="이전"
        rightLabel="선택 완료"
        onLeftClick={() => navigate(-1)}
        leftVariant="secondary"
      />
    </div>
  );
}
