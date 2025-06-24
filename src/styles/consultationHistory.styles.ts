export const consultationHistoryStyles = {
  // 페이지 헤더
  header: {
    container: 'flex justify-between items-center px-5 py-4',
    title: 'text-xl font-semibold text-black',
    detailButton: 'flex items-center gap-0.5 text-xs text-gray-500',
  },

  // 경고 메시지 영역
  warningSection: {
    container: 'flex flex-col gap-1.5 p-3 bg-gray-100',
    warningItem: 'flex items-center gap-1.5 text-gray-500 text-xs',
    icon: 'w-3.5 h-3.5 flex-shrink-0',
  },

  // 탭 영역
  tabSection: {
    container: 'flex px-5 border-b border-gray-200',
    tab: 'flex-1 py-3.5 text-center border-b-2',
    activeTab: 'border-primary text-black font-medium',
    inactiveTab: 'border-gray-200 text-black font-medium',
    tabText: 'text-base',
  },

  // 결과 섹션
  resultSection: {
    container: 'flex justify-between items-center px-5 py-5',
    count: 'text-sm font-medium text-gray-700',
    filterButton:
      'flex items-center gap-1 px-3 py-2 bg-gray-100 border border-gray-400 rounded-lg text-xs text-gray-600',
  },

  // 상담 내역 카드
  consultationCard: {
    container:
      'flex flex-col w-full bg-white border border-gray-200 rounded shadow-sm',
    header:
      'flex justify-between items-center px-3.5 py-3 border-b border-gray-200',
    date: 'text-sm font-semibold text-gray-900 text-center',
    detailLink: 'flex items-center gap-0.5 text-xs text-gray-500',
    content: 'p-4',

    // 전문가 정보
    expertSection: 'flex gap-3 mb-10',
    profileImage: 'w-15 h-15 rounded bg-gray-200 flex-shrink-0',
    expertInfo: 'flex-1',
    expertHeader: 'flex items-center gap-2 mb-1',
    expertName: 'text-base font-bold text-black',
    statusBadge: 'px-1.5 py-0.5 rounded text-xs font-normal',
    timeText: 'text-sm text-gray-900 mb-2',
    consultationDetails: 'flex items-center gap-1.5 text-xs text-gray-600',
    dot: 'w-0.5 h-0.5 bg-gray-600 rounded-full',

    // 버튼 영역
    buttonSection: 'flex flex-col gap-2 w-full',
    primaryButton:
      'w-full px-5 py-3 bg-primary text-white text-sm font-semibold rounded',
    secondaryButton:
      'w-full px-5 py-3 bg-white border border-primary text-primary text-sm font-semibold rounded',
    disabledButton:
      'w-full px-5 py-3 bg-gray-300 text-white text-sm font-semibold rounded cursor-not-allowed',
    outlineButton:
      'w-full px-5 py-3 bg-white border border-gray-200 text-gray-400 text-sm font-semibold rounded cursor-not-allowed',
  },

  // 상태별 배지 스타일
  statusStyles: {
    예약완료: 'bg-blue-50 text-blue-600',
    상담중: 'bg-pink-50 text-pink-500',
    상담완료: 'bg-primary text-white',
    취소중: 'bg-gray-200 text-gray-600',
    취소완료: 'bg-gray-200 text-gray-600',
  },
};
