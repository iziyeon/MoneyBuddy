import { useNavigate } from 'react-router-dom';
import type { JSX } from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/ko';

import { useReservationStore } from '../../stores/useReservationStore';
import BottomButtons from '../../components/common/BottomButtons';
import ReserveExpertInfo from '../../components/pages/Reservation/ReserveExpertInfo';
import TimeSelector from '../../components/pages/Reservation/TimeSelector';
import ExtendTimeController from '../../components/pages/Reservation/ExtendTimeController';
import ReservationSummary from './ReservationSummary';

dayjs.locale('ko');

export default function SelectTimePage(): JSX.Element {
  const navigate = useNavigate();

  const { selectedDate, selectedTime, needExtend, extendMinutes } =
    useReservationStore();

  const rightDisabled = !selectedTime || (needExtend && !selectedTime);

  const start =
    selectedDate && selectedTime
      ? dayjs(`${selectedDate} ${selectedTime}`)
      : null;

  const end = start
    ? start.add(needExtend ? extendMinutes : 15, 'minute')
    : null;

  const consultationDate = start?.format('M월 D일 dddd') ?? '';
  const consultationTime =
    start && end ? `${start.format('A h:mm')} ~ ${end.format('A h:mm')}` : '';

  return (
    <div>
      <ReserveExpertInfo />

      {selectedDate && selectedTime && (
        <div className="px-4">
          <ReservationSummary
            consultationDate={consultationDate}
            consultationTime={consultationTime}
          />
        </div>
      )}
      <div className="h-[8px] bg-[#F5F5F5] my-5" />
      <TimeSelector />
      <div className="h-[8px] bg-[#F5F5F5] my-5" />
      <ExtendTimeController />
      <BottomButtons
        leftLabel="이전"
        rightLabel="결제하기"
        leftVariant="secondary"
        rightVariant="primary"
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
