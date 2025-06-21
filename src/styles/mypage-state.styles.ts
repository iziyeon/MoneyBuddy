export const mypageStateStyles = {
  // 공통 컨테이너
  container: 'w-[390px] mx-auto bg-white',
  scrollContainer: 'h-[844px] overflow-y-scroll select-none scrollbar-none',

  // 헤더
  header: {
    container:
      'flex flex-row items-center justify-between px-5 py-4 w-[390px] h-14 bg-white shadow-sm rounded-b-md',
    title: 'text-xl font-semibold text-gray-900 flex-1',
    settingsIcon: 'w-6 h-6 text-black cursor-pointer',
  },

  // 메인 콘텐츠
  content: {
    container: 'flex flex-col gap-5 p-5',
    profileSection:
      'box-border flex flex-row items-center p-4 gap-3 w-[350px] h-[82px] bg-white/30 border border-gray-100 shadow-sm backdrop-blur-sm rounded-lg',
    profileImage:
      'box-border w-[50px] h-[50px] border border-gray-300 rounded-full',
    profileInfo: 'flex flex-col justify-end items-start gap-2 w-[262px] h-11',
    nickname: 'text-lg font-semibold text-gray-900',
    editButton: 'flex flex-row items-center gap-0.5 cursor-pointer',
  }, // 배너 (기본 상태)
  banner: {
    container:
      'relative w-[350px] h-[60px] bg-[#D4DFFF] rounded overflow-hidden',
    text: 'absolute left-4 top-1/2 transform -translate-y-1/2 text-sm font-semibold text-blue-600 z-10',
    image: 'absolute right-0 top-[-14px] w-[88px] h-[82px] object-contain',
  },

  // 상담 카드
  consultation: {
    container:
      'flex flex-col w-[350px] bg-white border border-gray-100 shadow-md rounded',
    header:
      'flex flex-row justify-between items-center px-3.5 py-3 w-[350px] h-[41px] bg-white border-b border-gray-100',
    dateText: 'text-sm font-semibold text-gray-900',
    detailButton:
      'flex flex-row items-center gap-0.5 text-xs text-gray-500 cursor-pointer',
    content:
      'flex flex-col justify-center items-start p-4 gap-10 w-[350px] bg-white',
    expertInfo: 'flex flex-row items-start gap-3',
    expertImage: 'w-15 h-15 rounded bg-cover bg-center',
    expertDetails: 'flex flex-col items-start gap-2 flex-1',
    nameSection: 'flex flex-col items-start gap-1',
    nameRow: 'flex flex-row items-center gap-2',
    expertName: 'text-base font-bold text-black',
    statusBadge:
      'flex flex-row justify-center items-center px-1 py-0.5 gap-0.5 bg-blue-50 rounded text-xs text-blue-600',
    timeText: 'text-sm text-gray-900',
    metaInfo: 'flex flex-row items-center gap-1.5 text-xs text-gray-500',
    actionButton:
      'flex flex-col items-end p-0 gap-2 w-[318px] h-10 flex-none order-1 self-stretch flex-grow-0 bg-[#6790FF] text-white text-sm font-semibold rounded-[4px] justify-center items-center hover:bg-blue-600 transition-colors backdrop-blur-[8px]',
  }, // 퀵 메뉴
  quickMenu: {
    container:
      'box-border flex flex-row justify-between items-center px-4 py-3 w-[350px] h-[79px] bg-white/30 border border-gray-100 shadow-sm backdrop-blur-sm rounded-lg gap-2',
    item: 'flex flex-col items-center gap-2 flex-1 cursor-pointer',
    icon: 'w-[30px] h-[30px]',
    text: 'text-xs text-black text-center',
    divider: 'w-9 h-0 border-t border-gray-100 rotate-90',
  },
  // 고객지원
  customerSupport: {
    container: 'flex flex-col items-start gap-4',
    title: 'text-lg font-semibold text-gray-900 px-1',
    box: 'box-border flex flex-col justify-center items-center p-3 w-[350px] bg-white/30 border border-gray-100 shadow-sm backdrop-blur-sm rounded-lg',
    item: 'flex flex-row justify-between items-center px-3 py-3 w-[350px] h-[46px]',
    itemText: 'text-sm text-black',
    arrow: 'w-5 h-5 text-gray-500',
    divider: 'w-[350px] h-0 border-b border-gray-100',
  },
};
