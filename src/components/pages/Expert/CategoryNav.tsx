import { type JSX } from 'react';
import { useNavigate } from 'react-router-dom';
import consumeIcon from '../../../assets/icons/expert/consumeIcon.png';
import saveIcon from '../../../assets/icons/expert/saveIcon.png';
import investIcon from '../../../assets/icons/expert/investIcon.png';
import debtIcon from '../../../assets/icons/expert/debtIcon.png';
import ectIcon from '../../../assets/icons/expert/etcIcon.png';

export default function CategoryNav(): JSX.Element {
  const navigate = useNavigate();
  const categoryItem = [
    { id: 'consume', label: '소비', field: '소비', icon: consumeIcon },
    { id: 'save', label: '저축', field: '저축', icon: saveIcon },
    { id: 'invest', label: '투자', field: '투자', icon: investIcon },
    { id: 'debt', label: '부채', field: '부채', icon: debtIcon },
    { id: 'ect', label: '기타', field: '기타', icon: ectIcon },
  ];
  const handleCategoryClick = (field: string) => {
    navigate(`/experts-list?tab=${field}`);
  };

  return (
    <>
      <div className="text-h3 p-4">분야 별 상담</div>
      <div className="flex justify-between items-center px-4 py-2">
        {categoryItem.map(item => (
          <button
            key={item.id}
            onClick={() => handleCategoryClick(item.field)}
            className="flex flex-col items-center w-full hover:opacity-80 transition-opacity"
          >
            <img src={item.icon} alt={item.label} className="w-12 h-12 mb-1" />
            <span className="text-sm text-black">{item.label}</span>
          </button>
        ))}
      </div>
    </>
  );
}
