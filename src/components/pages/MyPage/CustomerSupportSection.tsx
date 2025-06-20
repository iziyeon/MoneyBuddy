import Text from '../../common/Text';
import { ChevronRight } from 'lucide-react';

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
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <Text type="H4" className="font-bold">
          고객지원
        </Text>
      </div>
      <div>
        {supportItems.map((item, index) => (
          <button
            key={item.label}
            onClick={item.onClick}
            className={`w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors ${
              index < supportItems.length - 1 ? 'border-b border-gray-100' : ''
            }`}
          >
            <Text type="B2">{item.label}</Text>
            <ChevronRight size={16} className="text-gray-400" />
          </button>
        ))}
      </div>
    </div>
  );
}
