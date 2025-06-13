import type { JSX } from 'react';
import Button from '../../common/Button';
import type { MonthlyExpert } from '../../../types/api/expert/expert';
import HeartIcon from '../../../assets/icons/common/heart.png';
import HeartEmptyIcon from '../../../assets/icons/common/heartEmpty.png';
import { useExpertStore } from '../../../stores/useExpertStore';

export default function ExpertCard({
  id,
  rank,
  name,
  tags,
  description,
  rating,
  reviewCount,
  imgUrl,
  isLiked = false,
}: MonthlyExpert): JSX.Element {
  const toggleLike = useExpertStore(state => state.toggleLike);
  const rankColors: Record<number, string> = {
    1: 'bg-yellow-400',
    2: 'bg-gray-400',
    3: 'bg-[#CD7F32]',
  };
  const rankColor = rankColors[rank] ?? 'bg-gray-300';

  return (
    <div className="flex justify-between items-start p-3 border rounded-xl bg-white">
      <div className="flex gap-3">
        <div className="relative w-12 h-12">
          <img
            src={imgUrl}
            alt={`${name}의 프로필`}
            className="w-12 h-12 rounded-full object-cover"
          />

          <div
            className={`absolute -top-2 -left-2 w-6 h-6 flex items-center justify-center rounded-full text-white text-xs font-bold ${rankColor}`}
          >
            {rank}
          </div>
        </div>
        <div>
          <div className="flex gap-2 items-center">
            <p className="text-b1 font-semibold">{name}</p>
            <div className="flex gap-1 text-xs text-gray-500">
              {tags.map(tag => (
                <p key={tag}>#{tag}</p>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-800">{description}</p>
          <div className="text-xs mt-1 flex gap-1">
            <p className="font-semibold">⭐ {rating.toFixed(1)}</p>
            <p>({reviewCount})</p>
          </div>
        </div>
      </div>
      <Button
        variant="text"
        onClick={() => toggleLike(id)}
        className="w-fit h-fit p-1"
      >
        <img
          src={isLiked ? HeartIcon : HeartEmptyIcon}
          alt="하트 아이콘"
          className="w-5 h-5"
        />
      </Button>
    </div>
  );
}
