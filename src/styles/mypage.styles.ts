export const mypageStyles = {
  // 헤더
  header: {
    container: 'flex justify-between items-center px-5 py-4',
    title: 'text-xl font-semibold text-black',
    settingsIcon: 'w-6 h-6 text-gray-600',
  },

  // 배너
  banner: {
    container:
      'relative w-full h-[100px] bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg p-4 overflow-hidden',
    text: 'text-base font-medium text-gray-700 mb-2',
    image: 'absolute right-4 top-4 w-12 h-12',
  },

  profile: {
    container:
      'flex items-center p-4 gap-3 bg-white/30 border border-gray-100 rounded-lg shadow-sm backdrop-blur-sm',
    image: 'w-12 h-12 rounded-full border border-gray-300',
    info: 'flex-1',
    name: 'text-lg font-semibold text-gray-900',
    editButton: 'flex items-center gap-1 text-xs text-gray-500',
    editIcon: 'w-4 h-4',
  },

  consultation: {
    container: 'bg-white border border-gray-100 rounded shadow-sm',
    header: 'flex items-center justify-between p-3 border-b border-gray-100',
    date: 'text-sm font-semibold text-gray-900',
    detailButton: 'flex items-center gap-1 text-xs text-gray-500',
    content: 'p-4',
    expertSection: 'flex items-start gap-3',
    expertImage: 'w-15 h-15 rounded bg-gray-200',
    expertInfo: 'flex-1',
    expertHeader: 'flex items-center gap-2 mb-1',
    expertName: 'text-base font-bold text-gray-900',
    statusBadge: 'px-2 py-1 text-xs rounded bg-blue-50 text-blue-600',
    time: 'text-sm text-gray-900 mb-2',
    details: 'flex items-center gap-1 text-xs text-gray-500',
    dot: 'w-1 h-1 bg-gray-400 rounded-full',
    actionButton:
      'w-full mt-6 py-3 bg-blue-500 text-white text-sm font-semibold rounded',
  },

  challenge: {
    container: 'flex items-center justify-between p-4 bg-blue-50 rounded-lg',
    textSection: 'flex-1',
    title: 'text-base font-semibold text-blue-600',
    deadline: 'text-xs text-gray-400',
    chartContainer: 'relative w-20 h-10',
    percentage:
      'absolute inset-0 flex items-center justify-center text-base font-bold text-blue-600',
  },

  quickMenu: {
    container:
      'flex items-center justify-center p-3 gap-2 bg-white/30 border border-gray-100 rounded-lg shadow-sm backdrop-blur-sm',
    item: 'flex flex-col items-center gap-2 flex-1',
    icon: 'w-7 h-7',
    label: 'text-sm text-gray-900',
    divider: 'w-px h-9 bg-gray-200',
  },

  customerSupport: {
    container: 'bg-white',
    title: 'text-lg font-semibold text-gray-900 px-1 mb-4',
    box: 'bg-white/30 border border-gray-100 rounded-lg shadow-sm backdrop-blur-sm',
    item: 'flex items-center justify-between p-3',
    itemText: 'text-sm text-gray-900',
    arrow: 'w-5 h-5 text-gray-500',
    divider: 'border-b border-gray-100',
  },
};
