import type { JSX } from 'react';
import Button from '../../common/Button';

export default function MonthlyExpertList(): JSX.Element {
  return (
    <div>
      <div className="flex justify-between p-2">
        <div className="text-h3">이 달의 엑스퍼트</div>
        <Button variant="text">더보기</Button>
      </div>
    </div>
  );
}
