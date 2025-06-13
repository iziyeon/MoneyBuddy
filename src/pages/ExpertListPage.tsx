import { useState, useRef, useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import PageWrapper from '../components/layout/PageWrapper';
import PageHeader from '../components/layout/PageHeader';
import ExpertCard from '../components/pages/ExpertList/ExpertCard';
import Text from '../components/common/Text';
import ScrollContainer from 'react-indiana-drag-scroll';
import { expertData } from '../data/expertData';
import { EXPERT_FIELDS, SORT_OPTIONS, PAGINATION } from '../config/constants';
import type { Expert, ExpertField, SortType } from '../types/expert';
import type { InfiniteQueryData } from '../types/common';

export default function ExpertListPage() {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<ExpertField>('소비');
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const [selectedSort, setSelectedSort] = useState<SortType>('최신순');
  const containerRef = useRef<HTMLDivElement>(null);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useInfiniteQuery<InfiniteQueryData<Expert>>({
      queryKey: ['experts', selectedTab, selectedSort],
      queryFn: ({ pageParam = 0 }) => {
        const filtered = expertData.filter(
          expert => expert.field === selectedTab,
        );
        const sorted = sortExperts(filtered);
        const start = (pageParam as number) * PAGINATION.ITEMS_PER_PAGE;
        const items = sorted.slice(start, start + PAGINATION.ITEMS_PER_PAGE);

        return {
          items,
          nextPage:
            start + PAGINATION.ITEMS_PER_PAGE < sorted.length
              ? (pageParam as number) + 1
              : undefined,
        };
      },
      initialPageParam: 0,
      getNextPageParam: lastPage => lastPage.nextPage,
    });

  const observerTarget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: PAGINATION.INFINITE_SCROLL_THRESHOLD },
    );

    const currentTarget = observerTarget.current;
    if (currentTarget) {
      observer.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        observer.unobserve(currentTarget);
      }
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  const monthlyExperts = expertData
    .filter(expert => expert.field === selectedTab)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);

  const sortExperts = (experts: Expert[]) => {
    return [...experts].sort((a, b) => {
      switch (selectedSort) {
        case '최신순':
          return b.id - a.id;
        case '북마크순':
          return b.bookmarks - a.bookmarks;
        case '평점순':
          return b.rating - a.rating;
        case '상담건순':
          return b.consultation_count - a.consultation_count;
        case '낮은가격순':
          return a.price - b.price;
        case '높은가격순':
          return b.price - a.price;
        case '이름순':
          return a.nickname.localeCompare(b.nickname);
        case '리뷰많은순':
          return b.review_count - a.review_count;
        default:
          return 0;
      }
    });
  };

  const currentCategoryExperts = expertData.filter(
    expert => expert.field === selectedTab,
  ).length;

  const handleSearch = () => {
    console.log('Search clicked');
  };

  return (
    <PageWrapper>
      <div
        ref={containerRef}
        className="h-[844px] overflow-y-scroll hide-scrollbar select-none"
      >
        <div className="sticky top-0 bg-white z-20">
          <PageHeader
            title="전문가 찾기"
            showBackButton={true}
            onBackClick={() => navigate('/search')}
          />

          <div className="flex border-b">
            {EXPERT_FIELDS.map(field => (
              <button
                key={field}
                onClick={() => setSelectedTab(field)}
                className={`
                  flex-1 py-3 text-center transition-colors
                  ${
                    selectedTab === field
                      ? 'border-b-2 border-primary text-primary font-medium'
                      : 'text-font2 hover:text-font1'
                  }
                `}
              >
                {field}
              </button>
            ))}
          </div>
        </div>

        <div>
          <section className="w-[390px] h-[361px] px-5 pt-6 pb-[30px] mb-0">
            <Text type="H2" className="mb-[20px]">
              이달의 엑스퍼트
            </Text>
            <ScrollContainer
              className="scroll-container hide-scrollbar"
              vertical={false}
              horizontal={true}
              hideScrollbars={true}
            >
              <div className="flex gap-[10px] min-w-max">
                {monthlyExperts.map(expert => (
                  <div key={expert.id} className="w-[148px]">
                    <ExpertCard expert={expert} isMonthly />
                  </div>
                ))}
              </div>
            </ScrollContainer>
          </section>

          <div className="flex justify-between items-center px-5 mb-4 sticky top-[50px] bg-white z-10">
            <Text type="B2" className="text-font2">
              총 {currentCategoryExperts}명의 전문가가 있어요
            </Text>

            <div className="relative">
              <button
                onClick={() => setShowSortDropdown(!showSortDropdown)}
                className="flex items-center justify-between text-xs text-primary border border-primary rounded-lg w-[95px] h-[32px] px-3"
              >
                <span>{selectedSort}</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${showSortDropdown ? 'rotate-180' : ''}`}
                />
              </button>

              {showSortDropdown && (
                <div className="absolute right-0 bg-white border rounded-lg shadow-lg z-10 w-[95px] p-2 top-[36px]">
                  {SORT_OPTIONS.map((option, index) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSelectedSort(option);
                        setShowSortDropdown(false);
                      }}
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

          <div className="px-5 pb-[10px]">
            {isLoading ? (
              <div className="flex justify-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
              </div>
            ) : (
              <>
                {data?.pages.map((page, i) => (
                  <div key={i}>
                    {page.items.map(expert => (
                      <ExpertCard key={expert.id} expert={expert} />
                    ))}
                  </div>
                ))}

                {isFetchingNextPage && (
                  <div className="flex justify-center py-4">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary"></div>
                  </div>
                )}

                <div ref={observerTarget} className="h-4" />
              </>
            )}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
