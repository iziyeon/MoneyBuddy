import type { JSX } from 'react';
import { useReservationStore } from '../../../stores/useReservationStore';

interface Props {
  time: string;
}

export default function TimeUnitButton({ time }: Props): JSX.Element {
  const { selectedTime, setSelectedTime } = useReservationStore();
  const isSelected = selectedTime === time;

  return (
    <button
      onClick={() => setSelectedTime(time)}
      className={`w-full text-sm px-2 py-3 border rounded
        ${
          isSelected
            ? 'border-[#6488FF] text-[#6488FF] font-semibold'
            : 'border-gray-300 text-gray-800'
        }
      `}
    >
      {time}
    </button>
  );
}
