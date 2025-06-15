// C:\project\FE\src\components\pages\ExpertDetail\components\tabs\review\ReviewSummary.tsx
import { Star } from 'lucide-react';

export default function ReviewSummary() {
  return (
    <div className="bg-gray-100 rounded-lg p-4 flex justify-between items-center mb-3 gap-8">
      <div className="text-center">
        <div className="font-semibold text-2xl">4.0</div>
        <div className="flex">
          {[1, 2, 3, 4].map(star => (
            <Star
              key={star}
              size={16}
              className="fill-[#FF7497] text-[#FF7497]"
            />
          ))}
          <Star size={16} className="text-gray-300" />
        </div>
      </div>
      <div className="h-[108px] w-[0.5px] bg-gray-200 "></div>
      <div className="flex-1 space-y-2">
        {[5, 4, 3, 2, 1].map(rating => (
          <div key={rating} className="flex items-center text-xs">
            <span
              className={`w-5 ${
                rating === 5 ? 'text-[#FF7497] font-semibold' : 'text-gray-500'
              }`}
            >
              {rating}점
            </span>
            <div className="w-24 h-2 bg-white rounded-full mx-1 relative">
              <div
                className={`absolute left-0 h-2 rounded-full ${
                  rating === 5 ? 'bg-[#FF7497] w-5/6' : 'bg-gray-500'
                } ${rating === 4 ? 'w-1/2' : ''} ${
                  rating === 3 ? 'w-1/4' : ''
                } ${rating === 2 ? 'w-1/6' : ''} ${
                  rating === 1 ? 'w-[8px]' : ''
                }`}
              ></div>
            </div>
            <span
              className={`${
                rating === 5 ? 'text-[#FF7497] font-semibold' : 'text-gray-500'
              }`}
            >
              {rating === 5
                ? '6,000'
                : rating === 4
                  ? '1,200'
                  : rating === 3
                    ? '400'
                    : rating === 2
                      ? '200'
                      : '100'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
