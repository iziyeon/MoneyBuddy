import ExpertCard from './ExpertCard';
import type { Expert } from '../../../types/expert';
import { expertListStyles } from '../../../styles/expertList.styles';

type Props = {
  experts: Expert[];
};

export default function ExpertList({ experts }: Props) {
  return (
    <div className={expertListStyles.list}>
      {experts.map(expert => (
        <ExpertCard key={expert.id} expert={expert} />
      ))}
    </div>
  );
}
