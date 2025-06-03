import { useNavigate } from 'react-router-dom';
import Text from '../common/Text';
import { ChevronLeft } from 'lucide-react';

type PageHeaderProps = {
  title: string;
  showBackButton?: boolean;
  onBackClick?: () => void;
};

export default function PageHeader({
  title,
  showBackButton = true,
  onBackClick,
}: PageHeaderProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (onBackClick) {
      onBackClick();
    } else {
      navigate(-1);
    }
  };

  return (
    <div>
      {showBackButton && (
        <button onClick={handleBack}>
          <ChevronLeft size={24} />
        </button>
      )}
      <Text type="H1">{title}</Text>
    </div>
  );
}
