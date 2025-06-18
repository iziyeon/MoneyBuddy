import type { JSX } from 'react';
import Button from '../../components/common/Button';
import ConcernCard from '../../components/pages/Reservation/ConcernCard';
import { concernOptions } from '../../data/concernOptionData';
import { useReservationStore } from '../../stores/useReservationStore';
import { useNavigate } from 'react-router-dom';

export default function ConcernSelectPage(): JSX.Element {
  const { selectedConcern, setSelectedConcern } = useReservationStore();
  const navigate = useNavigate();

  return (
    <div>
      <div className="text-h3 text-center mb-6">
        현재 가지고 있는 고민을 선택해주세요.
      </div>
      {concernOptions.map(option => (
        <ConcernCard
          key={option.key}
          title={option.title}
          description={option.description}
          isSelected={selectedConcern === option.key}
          onClick={() => setSelectedConcern(option.key)}
        />
      ))}
      <div className="flex justify-center items-center my-5">
        <Button
          variant={selectedConcern ? 'primary' : 'disabled'}
          onClick={() => {
            if (selectedConcern) {
              console.log('다음 단계로 이동', selectedConcern);
            }
            navigate('/reservation/step2');
          }}
        >
          다음
        </Button>
      </div>
    </div>
  );
}
