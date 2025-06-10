import { useNavigate } from 'react-router-dom';
import Text from '../common/Text';
import { ChevronLeft } from 'lucide-react';

type PageHeaderProps = {
  title: string;
  showBackButton?: boolean;
  onBackClick?: () => void;
  isLoginPage?: boolean;
};

export default function PageHeader({
  title,
  showBackButton = true,
  onBackClick,
  isLoginPage = false,
}: PageHeaderProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      navigate(-1);
    }
  };

  if (isLoginPage) {
    return null; // 로그인 페이지에서는 헤더를 표시하지 않음
  }

  return (
    <div className="flex items-center px-4 py-4">
      {showBackButton && (
        <button onClick={handleBack} className="mr-4">
          <ChevronLeft size={24} />
        </button>
      )}
      <Text type="H1">{title}</Text>
    </div>
  );
}
