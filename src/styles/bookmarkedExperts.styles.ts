export const bookmarkedExpertsStyles = {
  // 메인 컨테이너
  container: 'w-[390px] mx-auto bg-white pb-10',

  // 탭 섹션
  tabContainer: `
    flex flex-row items-center
    padding: 14px
    width: 390px
    height: 48px
    flex-none
    order: 2
    flex-grow: 0
  `,

  tab: `
    flex-1 h-full
    flex items-center justify-center
    text-center
    border-b-2
    transition-colors duration-200
  `,

  activeTab: `
    border-b-primary
    text-primary
    font-medium
  `,

  inactiveTab: `
    border-b-transparent
    text-font2
  `,

  // 결과 섹션
  resultSection: 'flex justify-between items-center px-5 py-5',

  // 엑스퍼트 목록
  expertList: 'px-5 space-y-4',

  // 빈 상태
  emptyState: 'px-5 py-12 text-center',
  emptyStateText: 'text-font2 mb-4',
  emptyStateButton: 'px-4 py-2 bg-primary text-white rounded-md',

  // 로딩 상태
  loadingSpinner:
    'animate-spin rounded-full h-10 w-10 border-b-2 border-primary',
  // 에러 상태
  errorSection: 'p-5 text-center',
  errorText: 'text-gray-500 mb-4',
  retryButton: 'px-4 py-2 bg-primary text-white rounded-md',

  // 엑스퍼트 카드 스타일
  expertCard: 'border-b border-stroke p-4 bg-white',
  profileImage: 'w-12 h-12 rounded-full object-cover',
  cardContent: 'flex items-start space-x-3',
  infoContainer: 'flex-1',
  nameTagContainer: 'flex items-center space-x-2 mb-1',
  nameHashContainer: 'flex items-center space-x-1',
  expertName: 'text-font1 font-medium',
  hashtags: 'text-primary text-sm',
  description: 'text-font2 text-sm mb-2',
  ratingContainer: 'flex items-center justify-between',
  ratingInfo: 'flex items-center space-x-1',
  rating: 'text-yellow-500 text-sm',
  reviewCount: 'text-font2 text-xs',
  likeButton: 'p-1',

  // 빈 상태 추가 스타일
  emptyContainer: 'flex flex-col items-center justify-center py-20',
  emptyContent: 'text-center',
  emptyImage: 'w-16 h-16 mx-auto opacity-50 mb-4',
  emptyText: 'text-gray-500 mb-4',
  button: 'px-6 py-3 bg-primary text-white rounded-lg',
  buttonText: 'text-white font-medium',

  // 탭 텍스트 스타일
  tabText: 'text-font2',
  activeTabText: 'text-primary font-medium',
  inactiveTabText: 'text-font2',
};
