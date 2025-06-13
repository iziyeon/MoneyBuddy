import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Text from '../common/Text';
import { ChevronLeft } from 'lucide-react';
import Button from '../common/Button';

interface PageHeaderProps {
  title: string;
  showBackButton?: boolean;
  isLoginPage?: boolean;
  onBackClick?: () => void;
  isLoginPage?: boolean;
  rightButtonLabel?: string;
  onRightLabelClick?: () => void;
}

export default function PageHeader({
  title,
  showBackButton = false,
  isLoginPage = false,
  rightButtonLabel,
  onRightLabelClick,
}: PageHeaderProps) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <div
      className={`flex items-center px-4 py-4 ${
        rightButtonLabel ? 'justify-between' : 'justify-start'
      }`}
    >
      {showBackButton && (
        <button
          onClick={handleBackClick}
          className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center"
          aria-label="뒤로 가기"
        >
          <ChevronLeft size={24} strokeWidth={2} className="text-[#111111]" />
        </button>
      )}
      <Text type="H1">{title}</Text>
      {rightButtonLabel && (
        <Button variant="text" onClick={onRightLabelClick}>
          {rightButtonLabel}
        </Button>
      )}
    </div>
  );
}
