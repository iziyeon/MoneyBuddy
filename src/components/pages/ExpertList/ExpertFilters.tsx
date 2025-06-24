import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { SortType } from '../../../types/expert';

interface ExpertFiltersProps {
  selectedSort: SortType;
  onSortChange: (sort: SortType) => void;
  totalCount: number;
}

const SORT_OPTIONS: SortType[] = [
  '최신순',
  '북마크순',
  '평점순',
  '상담건순',
  '낮은가격순',
  '높은가격순',
  '이름순',
  '리뷰많은순',
];

export default function ExpertFilters({
  selectedSort,
  onSortChange,
  totalCount,
}: ExpertFiltersProps) {
  const [showSortDropdown, setShowSortDropdown] = useState(false);

  const handleSortSelect = (sort: SortType) => {
    onSortChange(sort);
    setShowSortDropdown(false);
  };

  return (
    <div className="flex justify-between items-center px-5 mb-4 sticky top-[50px] bg-white z-10">
      <span className="text-sm font-medium text-gray-700">
        총 {totalCount}명의 전문가가 있어요
      </span>

      <div className="relative">
        <button
          onClick={() => setShowSortDropdown(!showSortDropdown)}
          className="flex items-center justify-between text-xs text-primary border border-primary rounded-full w-[95px] h-[32px] px-3"
        >
          <span>{selectedSort}</span>
          <ChevronDown
            size={16}
            className={`transition-transform ${
              showSortDropdown ? 'rotate-180' : ''
            }`}
          />
        </button>

        {showSortDropdown && (
          <div className="absolute right-0 bg-white border rounded-lg shadow-lg z-10 w-[95px] p-2 top-[36px]">
            {SORT_OPTIONS.map((option, index) => (
              <button
                key={option}
                onClick={() => handleSortSelect(option)}
                className={`w-full text-left text-xs leading-none hover:text-primary transition-colors ${
                  index !== SORT_OPTIONS.length - 1 ? 'mb-2' : ''
                }`}
                style={{
                  color: selectedSort === option ? '#6488FF' : '#777777',
                }}
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
