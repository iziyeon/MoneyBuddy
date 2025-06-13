import { useState } from 'react';
import Text from '../../common/Text';
import { categories } from '../../../data/expertData';
import type { SortType } from '../../../types/expert';

type Props = {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  sortBy: SortType;
  onSortChange: (sort: SortType) => void;
};

const SORT_OPTIONS: SortType[] = [
  '평점순',
  '리뷰많은순',
  '낮은가격순',
  '높은가격순',
];

export default function ExpertFilters({
  selectedCategory,
  onCategoryChange,
  sortBy,
  onSortChange,
}: Props) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="sticky top-0 bg-white z-10 px-5 py-4">
      {/* 카테고리 선택 */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar mb-4">
        <button
          onClick={() => onCategoryChange('전체')}
          className={`px-4 py-2 rounded-full shrink-0 border ${
            selectedCategory === '전체'
              ? 'bg-primary text-white border-primary'
              : 'border-gray-300'
          }`}
        >
          전체
        </button>
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.name)}
            className={`px-4 py-2 rounded-full shrink-0 border whitespace-nowrap ${
              selectedCategory === category.name
                ? 'bg-primary text-white border-primary'
                : 'border-gray-300'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* 정렬 옵션 */}
      <div className="flex justify-end gap-2">
        {SORT_OPTIONS.map(sort => (
          <button
            key={sort}
            onClick={() => onSortChange(sort)}
            className={`px-3 py-1 rounded-full text-sm ${
              sortBy === sort
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            {sort}
          </button>
        ))}
      </div>
    </div>
  );
}
