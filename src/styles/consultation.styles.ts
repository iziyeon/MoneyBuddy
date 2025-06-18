export const consultationStyles = {
  // 상담 내역 카드 (Figma 스타일 기반)
  historyCard: `
    flex flex-col items-start p-0
    w-[350px] h-[235px]
    border border-[#F1F1F1] rounded-[4px]
    cursor-pointer hover:shadow-md transition-shadow
  `,

  // 카드 내부 레이아웃
  cardHeader:
    'flex justify-between items-center w-full p-4 border-b border-[#F1F1F1]',
  expertInfo: 'flex flex-col gap-1',
  expertName:
    'text-[16px] font-semibold leading-[20px] tracking-[-0.025em] text-[#111111]',
  expertField: 'text-[12px] leading-[14px] tracking-[-0.025em] text-[#777777]',

  // 상담 상태
  statusBase: 'px-2 py-1 rounded-[4px] text-[12px] font-medium',
  statusCompleted: 'bg-green-100 text-green-800',
  statusScheduled: 'bg-blue-100 text-blue-800',
  statusCancelled: 'bg-red-100 text-red-800',
  statusNoShow: 'bg-gray-100 text-gray-800',

  // 상담 정보 섹션
  consultationInfo: 'flex flex-col gap-3 w-full p-4',
  dateTimeContainer: 'flex justify-between items-center',
  consultationDate:
    'text-[14px] leading-[17px] tracking-[-0.02em] text-[#111111]',
  consultationTime:
    'text-[14px] leading-[17px] tracking-[-0.02em] text-[#777777]',
  consultationType:
    'text-[12px] leading-[14px] tracking-[-0.025em] text-[#777777]',

  // 결제 정보 섹션
  paymentInfo:
    'flex justify-between items-center w-full p-4 border-t border-[#F1F1F1]',
  paymentAmount:
    'text-[16px] font-semibold leading-[20px] tracking-[-0.025em] text-[#111111]',
  paymentMethod:
    'text-[12px] leading-[14px] tracking-[-0.025em] text-[#777777]',

  // 리뷰 상태
  reviewStatus:
    'text-[12px] leading-[14px] tracking-[-0.025em] text-[#6488FF] px-4 pb-4',
};

// CSS 추가를 위한 스타일 태그 생성
if (typeof document !== 'undefined') {
  const styleEl = document.createElement('style');
  styleEl.textContent = `
    .consultation-history-card {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0px;
      width: 350px;
      height: 235px;
      border: 1px solid #F1F1F1;
      border-radius: 4px;
      cursor: pointer;
      transition: box-shadow 0.2s ease;
    }
    
    .consultation-history-card:hover {
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    
    .consultation-history-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 16px;
      border-bottom: 1px solid #F1F1F1;
    }
    
    .consultation-expert-info {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    
    .expert-name {
      font-size: 16px;
      font-weight: 600;
      line-height: 20px;
      letter-spacing: -0.025em;
      color: #111111;
    }
    
    .expert-field {
      font-size: 12px;
      line-height: 14px;
      letter-spacing: -0.025em;
      color: #777777;
    }
    
    .consultation-status {
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 500;
    }
    
    .status-예약완료 {
      background-color: #dbeafe;
      color: #1e40af;
    }
    
    .status-상담완료 {
      background-color: #dcfce7;
      color: #166534;
    }
    
    .status-취소됨 {
      background-color: #fee2e2;
      color: #dc2626;
    }
    
    .status-노쇼 {
      background-color: #f3f4f6;
      color: #374151;
    }
    
    .consultation-info {
      display: flex;
      flex-direction: column;
      gap: 12px;
      width: 100%;
      padding: 16px;
      flex: 1;
    }
    
    .consultation-date-time {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .consultation-date {
      font-size: 14px;
      line-height: 17px;
      letter-spacing: -0.02em;
      color: #111111;
    }
    
    .consultation-time {
      font-size: 14px;
      line-height: 17px;
      letter-spacing: -0.02em;
      color: #777777;
    }
    
    .consultation-type {
      font-size: 12px;
      line-height: 14px;
      letter-spacing: -0.025em;
      color: #777777;
    }
    
    .consultation-payment {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 16px;
      border-top: 1px solid #F1F1F1;
    }
    
    .payment-amount {
      font-size: 16px;
      font-weight: 600;
      line-height: 20px;
      letter-spacing: -0.025em;
      color: #111111;
    }
    
    .payment-method {
      font-size: 12px;
      line-height: 14px;
      letter-spacing: -0.025em;
      color: #777777;
    }
    
    .consultation-review-status {
      font-size: 12px;
      line-height: 14px;
      letter-spacing: -0.025em;
      color: #6488FF;
      padding: 0 16px 16px;
    }
  `;
  document.head.appendChild(styleEl);
}
