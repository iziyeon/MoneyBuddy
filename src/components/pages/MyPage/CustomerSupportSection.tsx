import { ChevronRight } from 'lucide-react';
import { mypageStateStyles } from '../../../styles/mypage-state.styles';

interface CustomerSupportSectionProps {
  onCustomerCenterClick: () => void;
  onInquiryClick: () => void;
  onNoticeClick: () => void;
}

export default function CustomerSupportSection({
  onCustomerCenterClick,
  onInquiryClick,
  onNoticeClick,
}: CustomerSupportSectionProps) {
  const supportItems = [
    {
      label: '고객센터',
      onClick: onCustomerCenterClick,
    },
    {
      label: '1:1 문의',
      onClick: onInquiryClick,
    },
    {
      label: '공지사항',
      onClick: onNoticeClick,
    },
  ];

  return (
    <div className={mypageStateStyles.customerSupport.container}>
      <h2 className={mypageStateStyles.customerSupport.title}>고객지원</h2>
      <div className={mypageStateStyles.customerSupport.box}>
        {supportItems.map((item, index) => (
          <div key={item.label}>
            <div
              className={mypageStateStyles.customerSupport.item}
              onClick={item.onClick}
            >
              <span className={mypageStateStyles.customerSupport.itemText}>
                {item.label}
              </span>
              <ChevronRight
                className={mypageStateStyles.customerSupport.arrow}
              />
            </div>
            {index < supportItems.length - 1 && (
              <div className={mypageStateStyles.customerSupport.divider} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
