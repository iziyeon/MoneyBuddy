import { useEffect, type JSX } from 'react';
import Button from '../../common/Button';
import ExpertCard from './ExpertCard';
import { useExpertStore } from '../../../stores/useExpertStore';

export default function MonthlyExpertList(): JSX.Element {
  const { experts, fetchExperts } = useExpertStore();

  useEffect(() => {
    fetchExperts();
  }, [fetchExperts]);

  return (
    <div className="my-2">
      <div className="flex justify-between p-4">
        <div className="text-h3">이 달의 엑스퍼트</div>
        <Button variant="text">더보기</Button>
      </div>
      {experts.map(item => (
        <ExpertCard expert={item} />
      ))}
    </div>
  );
}
