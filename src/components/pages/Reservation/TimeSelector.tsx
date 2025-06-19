import type { JSX } from 'react';
import TimeUnitButton from './TimeUnitButton';

export default function TimeSelector(): JSX.Element {
  const morningTimes = ['10:00', '11:00', '12:00'];
  const afternoonTimes = ['02:00', '03:00', '04:00', '05:00', '06:00', '07:00'];

  return (
    <div className="mx-2 my-4">
      <div className="text-h3 my-2">상담 시간 선택</div>
      <div className="space-y-4 mb-6">
        <div>
          <p className="text-b2 mb-2">오전</p>
          <div className="grid grid-cols-3 gap-2">
            {morningTimes.map(time => (
              <TimeUnitButton key={time} time={time} />
            ))}
          </div>
        </div>
        <div>
          <p className="text-b2 mb-2">오후</p>
          <div className="grid grid-cols-3 gap-2">
            {afternoonTimes.map(time => (
              <TimeUnitButton key={time} time={time} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
