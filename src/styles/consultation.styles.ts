export const consultationStyles = {
  // 상담 내역 카드 (Figma 스타일 기반)
  historyCard:
    'flex flex-col items-start p-0 w-[350px] h-[235px] border border-gray-200 rounded cursor-pointer hover:shadow-md transition-shadow',

  // 카드 내부 레이아웃
  cardHeader:
    'flex justify-between items-center w-full p-4 border-b border-gray-200',
  expertInfo: 'flex flex-col gap-1',
  expertName: 'text-base font-semibold leading-5 tracking-tight text-gray-900',
  expertField: 'text-xs leading-[14px] tracking-tight text-gray-500',

  // 상담 상태
  statusBase: 'px-2 py-1 rounded text-xs font-medium',
  statusCompleted: 'bg-green-100 text-green-800',
  statusScheduled: 'bg-blue-100 text-blue-800',
  statusCancelled: 'bg-red-100 text-red-800',
  statusNoShow: 'bg-gray-100 text-gray-800',

  // 상담 정보 섹션
  consultationInfo: 'flex flex-col gap-3 w-full p-4',
  dateTimeContainer: 'flex justify-between items-center',
  consultationDate: 'text-sm leading-[17px] tracking-tight text-gray-900',
  consultationTime: 'text-sm leading-[17px] tracking-tight text-gray-500',
  consultationType: 'text-xs leading-[14px] tracking-tight text-gray-500',

  // 결제 정보 섹션
  paymentInfo:
    'flex justify-between items-center w-full p-4 border-t border-gray-200',
  paymentAmount:
    'text-base font-semibold leading-5 tracking-tight text-gray-900',
  paymentMethod: 'text-xs leading-[14px] tracking-tight text-gray-500',

  // 리뷰 상태
  reviewStatus: 'text-xs leading-[14px] tracking-tight text-blue-500 px-4 pb-4',
};

// CSS 추가를 위한 스타일 태그 생성
if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    .consultation-history-card {
      @apply flex flex-col items-start p-0 w-[350px] h-[235px] border border-gray-100 rounded cursor-pointer hover:shadow-md transition-shadow;
    }
    
    .consultation-history-header {
      @apply flex justify-between items-center w-full p-4 border-b border-gray-100;
    }
    
    .consultation-expert-info {
      @apply flex flex-col gap-1;
    }
    
    .expert-name {
      @apply text-base font-semibold leading-5 tracking-tight text-gray-900;
    }
    
    .expert-field {
      @apply text-xs leading-[14px] tracking-tight text-gray-500;
    }
    
    .consultation-status {
      @apply px-2 py-1 rounded text-xs font-medium;
    }
    
    .status-예약완료 {
      @apply bg-blue-50 text-blue-600;
    }
    
    .status-상담완료 {
      @apply bg-green-50 text-green-600;
    }
    
    .status-취소됨 {
      @apply bg-red-50 text-red-600;
    }
    
    .consultation-info {
      @apply flex flex-col gap-3 w-full p-4 flex-1;
    }
    
    .consultation-date-time {
      @apply flex justify-between items-center;
    }
    
    .consultation-date {
      @apply text-sm leading-[17px] tracking-tight text-gray-900;
    }
    
    .consultation-time {
      @apply text-sm leading-[17px] tracking-tight text-gray-500;
    }
    
    .consultation-type {
      @apply text-xs leading-[14px] tracking-tight text-gray-500;
    }
    
    .consultation-payment {
      @apply flex justify-between items-center w-full p-4 border-t border-gray-100;
    }
    
    .payment-amount {
      @apply text-base font-semibold leading-5 tracking-tight text-gray-900;
    }
    
    .payment-method {
      @apply text-xs leading-[14px] tracking-tight text-gray-500;
    }
    
    .consultation-review-status {
      @apply text-xs leading-[14px] tracking-tight text-primary px-4 pb-4;
    }
  `;
  document.head.appendChild(styleEl);
}
