export const paymentStyles = {
  container: 'w-[390px] mx-auto bg-white p-5',
  section: 'mb-6',
  sectionTitle: 'text-lg font-semibold mb-3',
  row: 'flex justify-between items-center mb-3',
  input: 'w-full border border-gray-300 rounded-md p-3',
  button: 'bg-primary text-white rounded-md py-3 px-0',
  divider: 'w-full h-[1px] bg-gray-200',
  totalAmount: 'text-xl font-semibold text-primary',
  actionButton: 'w-full bg-primary text-white py-3 rounded-md text-center',

  // 연락처 정보 스타일
  contactInfo: 'flex flex-col gap-2 mb-4',
  contactNumberText: 'text-base mb-1',
  contactCheckboxContainer: 'flex items-center gap-2',
  contactCheckboxTextSmall: 'text-sm text-gray-500',

  // 요청사항 섹션
  requestSection: 'border-t border-gray-200 py-4 mb-4',
  requestTitle: 'text-base font-medium',
  requestInput:
    'w-full border border-gray-300 rounded-md p-3 mt-2 resize-none h-24',

  // 포인트 섹션
  pointSection: 'border-t border-gray-200 py-4 mb-4',
  pointTitle: 'text-base font-medium',
  pointDivider: 'my-3 h-[1px] bg-gray-200',
  pointRow: 'flex justify-between items-center mb-2',
  pointLabel: 'text-sm text-gray-600',
  pointAmount: 'font-medium text-base text-black',
  pointAmountText: 'text-sm text-gray-600',
  pointUnit: 'text-sm text-gray-600',
  pointInput: 'flex-1 border border-gray-300 rounded-md p-2 mr-2 text-right',
  pointInputText: 'flex-1 text-right font-medium',
  pointInputUnit: 'text-sm text-gray-600',
  pointUseAllBtn:
    'text-xs text-primary border border-primary rounded-md px-2 py-1',

  // 가격 섹션
  priceSection: 'border-t border-gray-200 py-4 mb-4',
  priceTitle: 'text-base font-medium',
  priceRow: 'flex justify-between items-center mb-2',
  priceLabel: 'text-sm text-gray-600',
  priceAmount: 'font-medium text-base text-black',
  priceAmountText: 'text-sm text-gray-600',
  priceUnit: 'text-sm text-gray-600',
  totalPrice: 'flex justify-between items-center mt-4 pt-3 border-t',
  totalPriceLabel: 'text-base font-medium',
  totalPriceAmount: 'font-semibold text-lg text-primary',
  totalPriceText: 'text-sm text-primary',

  // 결제 방식 섹션 (업데이트됨)
  paymentSection: 'border-t border-gray-200 py-4 mb-4',
  paymentTitle: 'text-base font-medium',
  paymentSubtitle: 'text-sm mt-4 mb-2 font-medium',
  paymentMethods: 'grid grid-cols-2 gap-3 mt-3',
  paymentMethod: {
    button:
      'flex items-center justify-center w-full h-[46px] border border-gray-200 rounded-md',
    selected: 'border-primary text-primary',
    card: 'flex items-center gap-2',
    label: 'font-semibold text-sm',
    icon: 'w-5 h-5',
    imageContainer: 'flex items-center justify-center h-full',
    paymentImage: 'max-h-6 mx-auto',
  },
  simplePaymentsGrid: 'grid grid-cols-2 gap-3',

  // 버튼 고정 영역
  bottomFixedButton:
    'fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 w-[390px] mx-auto',
  payButton: 'w-full bg-primary text-white py-3 rounded-md text-center',
  payDisabledButton:
    'w-full bg-gray-300 text-white py-3 rounded-md text-center',

  // 전체 페이지 섹션 컨테이너 (업데이트됨)
  pageSection: 'flex flex-col gap-[13px] px-0 pb-6',

  // 전문가 섹션 (업데이트됨)
  expertSection: 'p-5 pb-6 flex flex-col gap-3',
  expertContainer: 'flex gap-[13px] items-center w-[350px] h-[60px]',
  expertImage: 'w-[60px] h-[60px] rounded-[4px] object-cover flex-shrink-0',
  expertInfo: 'flex-1 flex flex-col justify-center h-[51px] gap-[10px]',
  expertNameContainer: 'flex items-center gap-[8px] h-[24px]',
  expertName:
    'text-[20px] font-semibold leading-[24px] tracking-[-0.02em] text-[#111111]',
  expertBadge:
    'flex items-center justify-center py-[2px] px-[5px] h-[18px] bg-primary rounded-[4px]',
  expertBadgeText: 'text-[12px] text-white leading-[14px]',
  expertServices: 'flex items-center gap-[5px] h-[17px]',
  expertServiceText: 'text-[14px] leading-[17px] text-[#777777]',
  expertDot: 'w-[2px] h-[2px] bg-[#777777] rounded-full',

  // 일정 정보 (업데이트됨)
  dateContainer:
    'relative flex justify-center items-center py-[12px] px-[14px] gap-[10px] w-[350px] h-[41px] rounded-[4px] bg-gradient-to-r from-[rgba(188,100,255,0.1)] to-[rgba(255,116,151,0.1)]',
  dateGradientBorder: 'gradient-border',
  dateIcon: 'w-[16px] h-[16px] text-[#BC64FF]',
  dateText:
    'font-semibold text-[14px] leading-[17px] text-[#BC64FF] tracking-[-0.02em]',

  // 연락처 정보 스타일 (업데이트됨)
  contactContainer:
    'border border-[#F1F1F1] rounded-[4px] p-[14px] w-[350px] h-[112px]',
  contactTitle:
    'font-semibold text-[16px] leading-[20px] tracking-[-0.025em] text-[#111111] mb-[10px] w-[322px]',
  contactNumberRow:
    'flex justify-between items-center mb-[10px] w-[322px] h-[24px]',
  contactNumber:
    'font-normal text-[16px] leading-[19px] tracking-[-0.025em] text-[#111111] w-[112px]',
  contactChangeBtn:
    'text-[12px] font-semibold leading-[20px] tracking-[-0.025em] text-[#777777] bg-[#F5F5F5] border border-[#F1F1F1] rounded-[4px] py-[2px] px-[8px] h-[24px] w-[60px]',
  contactCheckbox: 'flex items-center gap-[7px] w-[322px] h-[20px]',
  contactCheckboxInput: 'custom-checkbox',
  contactCheckboxTextLarge:
    'text-[12px] leading-[14px] tracking-[-0.025em] text-[#777777] w-[84px] h-[14px]',

  // 모달
  modal: {
    backdrop:
      'fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50',
    container:
      'w-[390px] bg-white rounded-t-lg shadow-[0px_-4px_4px_rgba(0,0,0,0.05)]',
    icon: 'w-12 h-12 mb-4',
    title: 'text-xl font-bold mb-2 text-center',
    description: 'text-gray-600 text-center mb-6',
    buttonGroup: 'w-full flex gap-4',
  },

  modalBackground:
    'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50',
  modalContent: 'bg-white rounded-lg p-6 w-[340px] flex flex-col items-center',
  modalIcon: 'w-16 h-16 mb-4',
  modalTitle: 'text-xl font-bold mb-2',
  modalText: 'text-gray-600 text-center mb-6',
  modalButton: 'w-full bg-primary text-white py-3 rounded-md text-center',
};

// CSS 추가를 위한 스타일 태그 생성
if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    .gradient-border {
      position: relative;
    }
    .gradient-border::before {
      content: '';
      position: absolute;
      inset: 0;
      padding: 1px;
      border-radius: 4px;
      background: linear-gradient(90deg, #BC64FF 0%, #FF7497 100%);
      -webkit-mask: 
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      pointer-events: none;
    }

    /* 커스텀 체크박스 스타일 - 정확한 명세 적용 */
    .custom-checkbox {
      appearance: none;
      -webkit-appearance: none;
      width: 20px;
      height: 20px;
      border: 1px solid #E4E4E4;
      border-radius: 3px;
      outline: none;
      cursor: pointer;
      position: relative;
      background-color: white;
    }
    
    /* 체크 상태일 때 표시되는 내부 테두리 */
    .custom-checkbox:checked::after {
      content: '';
      position: absolute;
      left: 12.5%;
      right: 12.5%;
      top: 12.5%;
      bottom: 12.5%;
      border: 1.5px solid #6488FF;
      box-sizing: border-box;
    }

    /* 체크 표시 (선택적) */
    .custom-checkbox:checked::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -60%) rotate(45deg);
      width: 4px;
      height: 8px;
      border-right: 2px solid #6488FF;
      border-bottom: 2px solid #6488FF;
    }
  `;
  document.head.appendChild(styleEl);
}
