import type { JSX } from 'react';

interface CalendarGridProps {
  year?: number;
  month?: number;
}

export default function CalendarGrid({
  year,
  month,
}: CalendarGridProps): JSX.Element {
  const days = ['일', '월', '화', '수', '목', '금', '토'];
  // const daysInMonth = new Date(year, month + 1, 0).getDate();

  return (
    <div className="grid grid-cols-7 text-center text-b1 my-3">
      {days.map(day => (
        <div key={day}>{day}</div>
      ))}
      {/* {daysInMonth} */}
      {year}
      {month}
      {/* {Array.from()} */}
    </div>
  );
}
