import Text from '../../common/Text';
import MonthlyExpertCard from './MonthlyExpertCard';
import ScrollContainer from 'react-indiana-drag-scroll';
import type { Expert } from '../../../types/expert';

interface MonthlyExpertsProps {
  experts: Expert[];
}

export default function MonthlyExperts({ experts }: MonthlyExpertsProps) {
  return (
    <section className="w-[390px] h-[361px] px-5 py-[30px]">
      <Text type="H2">이달의 엑스퍼트</Text>
      <ScrollContainer className="scroll-container">
        <div className="flex gap-[10px] min-w-max">
          {experts.slice(0, 5).map(expert => (
            <div key={expert.id} className="w-[148px]">
              <MonthlyExpertCard expert={expert} />
            </div>
          ))}
        </div>
      </ScrollContainer>
    </section>
  );
}
