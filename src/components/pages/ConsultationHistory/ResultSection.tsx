import FilterDropdown from './FilterDropdown';

interface ResultSectionProps {
  totalCount: number;
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
  filterOptions: readonly string[];
}

export default function ResultSection({
  totalCount,
  selectedFilter,
  onFilterChange,
  filterOptions,
}: ResultSectionProps) {
  return (
    <div className="flex justify-between items-center px-5 py-5">
      <span className="text-sm font-medium text-gray-700">
        총 {totalCount}건
      </span>
      <FilterDropdown
        selectedFilter={selectedFilter}
        onFilterChange={onFilterChange}
        options={filterOptions}
      />
    </div>
  );
}
