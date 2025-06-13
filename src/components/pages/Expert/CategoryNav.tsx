import { type JSX } from 'react';
import consumeIcon from '../../../assets/icons/expert/consumeIcon.png';
import saveIcon from '../../../assets/icons/expert/saveIcon.png';
import investIcon from '../../../assets/icons/expert/investIcon.png';
import debtIcon from '../../../assets/icons/expert/debtIcon.png';
import ectIcon from '../../../assets/icons/expert/etcIcon.png';
import { NavLink } from 'react-router-dom';

export default function CategoryNav(): JSX.Element {
  const categoryItem = [
    { id: 'consume', label: '소비', path: '/consume', icon: consumeIcon },
    { id: 'save', label: '저축', path: '/save', icon: saveIcon },
    { id: 'invest', label: '투자', path: '/invest', icon: investIcon },
    { id: 'debt', label: '부채', path: '/debt', icon: debtIcon },
    { id: 'ect', label: '기타', path: '/ect', icon: ectIcon },
  ];
  return (
    <>
      <div className="text-h3 p-4">분야 별 상담</div>
      <div className="flex justify-between items-center px-4 py-2">
        {categoryItem.map(item => (
          <NavLink
            key={item.id}
            to={item.path}
            className="flex flex-col items-center w-full"
          >
            <img src={item.icon} alt={item.label} className="w-12 h-12 mb-1" />
            <span className="text-sm text-black">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </>
  );
}
