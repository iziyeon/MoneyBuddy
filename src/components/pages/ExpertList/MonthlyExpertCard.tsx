import { COMMA_NUMBER_FORMAT } from '../../../utils';
import type { Expert } from '../../../types/expert';
import Text from '../../common/Text';
import { Star, Heart } from 'lucide-react';
import { useState } from 'react';

interface MonthlyExpertCardProps {
  expert: Expert;
}

export default function MonthlyExpertCard({ expert }: MonthlyExpertCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="w-[148px] flex-shrink-0">
      <div className="h-[267px] rounded-lg p-3">
        <div className="relative">
          <img
            src={expert.profile_image}
            alt={expert.nickname}
            className="w-full h-[148px] rounded-lg object-cover"
          />
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center"
          >
            <Heart
              size={16}
              className={isLiked ? 'fill-red-500 text-red-500' : 'stroke-white'}
            />
          </button>
        </div>

        <div className="mt-3">
          <div className="flex items-center gap-1">
            <Text
              type="B2"
              className="font-semibold text-[14px] leading-[130%] tracking-[0%] align-middle"
            >
              {expert.nickname}
            </Text>
            <div className="flex items-center gap-1">
              <Star size={10} className="text-[#FF7497] fill-[#FF7497]" />
              <span className="font-semibold text-[12px] leading-[100%] tracking-[0%] text-center align-middle text-[#111111] w-[19px] h-[14px]">
                {expert.rating}
              </span>
              <span className="font-normal text-[12px] leading-[100%] tracking-[0%] text-center align-middle text-[#9C9C9C]">
                ({expert.review_count})
              </span>
            </div>
          </div>
          <Text
            type="B3"
            className="mt-1 font-normal text-[13px] leading-[130%] tracking-[-2%] align-middle text-[#777777] line-clamp-1"
          >
            {expert.bio}
          </Text>
          <div className="mt-2 flex items-center">
            <span className="font-semibold text-[14px] leading-[130%] tracking-[0%] align-middle text-[#000000]">
              {COMMA_NUMBER_FORMAT(expert.price)}원
            </span>
            <span className="font-normal text-[12px] leading-[130%] tracking-[0%] align-middle text-[#777777]">
              /1회
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
