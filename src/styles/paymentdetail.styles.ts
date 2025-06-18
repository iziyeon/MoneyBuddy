export const paymentDetailStyles = {
  container: 'w-[390px] mx-auto bg-white',
  content: 'flex flex-col px-[20px] pt-[24px] gap-[40px] min-h-[560px]',

  // 상담 내역 섹션
  consultationSection: {
    container: 'w-[350px] h-[235px] border border-[#F1F1F1] rounded-[4px]',
    content:
      'flex flex-col justify-center items-start p-[16px] gap-[10px] w-[350px] h-[235px] bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.05)]',
    header: 'flex items-center gap-[8px] w-[105px] h-[19px]',
    expertName:
      'w-[42px] h-[19px] font-bold text-[16px] leading-[19px] text-[#000000]',
    statusBadge:
      'flex justify-center items-center py-[2px] px-[5px] gap-[2px] w-[55px] h-[18px] bg-[rgba(100,136,255,0.1)] rounded-[4px]',
    statusText:
      'w-[45px] h-[14px] font-normal text-[12px] leading-[14px] text-center text-[#6488FF]',
    divider: 'w-[318px] h-0 border border-[#F1F1F1]',
    infoRow: 'flex items-start gap-[12px] w-[318px] h-[17px]',
    label:
      'w-[52px] h-[17px] font-normal text-[14px] leading-[17px] text-center text-[#777777]',
    value:
      'w-[254px] h-[17px] font-normal text-[14px] leading-[17px] text-[#191919] flex-grow',
    amountRow:
      'flex justify-between items-center gap-[10px] w-[318px] h-[19px]',
    amountLabel:
      'w-[52px] h-[17px] font-normal text-[14px] leading-[17px] text-center text-[#191919]',
    amountValue:
      'w-[70px] h-[19px] font-bold text-[16px] leading-[19px] text-center text-[#191919]',
  },

  // 상담 고민 등록 섹션
  consultationConcernSection: {
    container:
      'flex flex-col justify-center items-start gap-[10px] w-[351px] h-[237px] bg-white',
    title:
      'w-[91px] h-[19px] font-bold text-[16px] leading-[19px] text-[#000000]',
    contentBox:
      'flex flex-col items-start p-[12px] gap-[10px] w-[351px] h-[208px] border border-[#F1F1F1] rounded-[4px]',
    contentText:
      'w-[327px] h-[184px] font-normal text-[13px] leading-[180%] tracking-[-0.025em] text-[#000000]',
  },

  // 버튼 섹션
  buttonSection: {
    container:
      'fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 w-[390px] mx-auto',
    buttonGroup: 'flex gap-3',
    profileButton:
      'flex-1 py-3 border border-primary text-primary rounded-lg font-medium',
    cancelButton: 'flex-1 py-3 bg-red-600 text-white rounded-lg font-medium',
  },

  // 모달
  modal: {
    backdrop:
      'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50',
    container: 'bg-white rounded-lg p-6 mx-4 max-w-sm w-full',
    title: 'text-lg font-semibold mb-2',
    content: 'text-gray-600 mb-4',
    buttonGroup: 'flex gap-3',
    cancelModalButton: 'flex-1 py-2 border border-gray-300 rounded',
    confirmButton:
      'flex-1 py-2 bg-red-600 text-white rounded disabled:opacity-50',
  },

  // 로딩 및 에러 상태
  loading: {
    container: 'flex justify-center items-center h-[400px]',
    spinner: 'animate-spin rounded-full h-10 w-10 border-b-2 border-primary',
  },

  error: {
    container: 'p-5 text-center',
    message: 'text-red-500',
    button: 'mt-4 px-4 py-2 bg-primary text-white rounded-md',
  },
};
