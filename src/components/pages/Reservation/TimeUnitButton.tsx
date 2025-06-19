import type { JSX } from 'react';
import { useReservationStore } from '../../../stores/useReservationStore';
import Button from '../../common/Button';

interface Props {
  time: string;
}

export default function TimeUnitButton({ time }: Props): JSX.Element {
  const { selectedTime, setSelectedTime } = useReservationStore();
  const isSelected = selectedTime === time;

  return (
    <Button
      onClick={() => setSelectedTime(time)}
      variant={isSelected ? 'primary' : 'text2'}
      className={`border ${
        isSelected
          ? 'bg-transparent border-[#6488FF] text-[#6790FF]'
          : 'border-gray-300'
      } rounded px-2 py-3 text-sm w-full`}
    >
      {time}
    </Button>
  );
}
