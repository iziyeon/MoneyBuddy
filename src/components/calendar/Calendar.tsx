import type { JSX } from 'react';
import CalendarHeader from './CalendarHeader';
import CalendarGrid from './CalendarGrid';

export default function Calendar(): JSX.Element {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  console.log(today, year, month + 1);

  console.log(today);
  return (
    <div>
      <div className="text-h3 my-4 mx-2">상담 일자 선택</div>
      <CalendarHeader thisYear={year} thisMonth={month} />
      <CalendarGrid year={year} month={month} />
    </div>
  );
}
