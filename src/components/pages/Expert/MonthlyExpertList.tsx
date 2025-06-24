import { useEffect, type JSX } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../common/Button';
import ExpertCard from './ExpertCard';
import { useExpertStore } from '../../../stores/useExpertStore';

export default function MonthlyExpertList(): JSX.Element {
  const navigate = useNavigate();
  const { experts, fetchExperts } = useExpertStore();

  useEffect(() => {
    fetchExperts();
  }, [fetchExperts]);

  return (
    <div className="my-2">
      <div className="flex justify-between p-4">
        <div className="text-h3">이 달의 엑스퍼트</div>
        <Button variant="text" onClick={() => navigate('/experts-list')}>
          더보기
        </Button>
      </div>
      {experts.map(item => (
        <ExpertCard key={item.id} expert={item} />
      ))}
    </div>
  );
}
