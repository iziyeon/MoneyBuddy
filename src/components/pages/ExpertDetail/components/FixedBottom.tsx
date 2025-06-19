import { useNavigate } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useReservationStore } from '../../../../stores/useReservationStore';
import type { Expert } from '../../../../types';

export default function FixedBottom({
  localBookmarkState,
  handleLikeClick,
  expert,
}: {
  localBookmarkState: boolean;
  handleLikeClick: (e: React.MouseEvent) => void;
  expert: Expert;
}) {
  const navigate = useNavigate();
  const { setExpert } = useReservationStore();

  const handleConsultClick = () => {
    setExpert(expert);
    navigate('/reservation/step1');
  };

  console.log(expert);

  return (
    <div className="w-full bg-white border-t border-gray-200 py-4 px-5 flex items-center justify-between">
      <button
        onClick={handleLikeClick}
        className="flex flex-col items-center justify-center"
      >
        <Heart
          size={24}
          className={
            localBookmarkState ? 'fill-red-500 text-red-500' : 'text-gray-500'
          }
        />
      </button>
      <button
        onClick={handleConsultClick}
        className="flex-1 ml-4 bg-primary text-white py-3 rounded font-medium"
      >
        지금 상담하기
      </button>
    </div>
  );
}
