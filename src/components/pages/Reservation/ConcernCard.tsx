import type { JSX } from 'react';
import Button from '../../common/Button';
import clsx from 'clsx';

interface ConcernCardProps {
  title?: string;
  description?: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export default function ConcernCard({
  title,
  description,
  isSelected = false,
  onClick,
}: ConcernCardProps): JSX.Element {
  return (
    <Button
      variant="text"
      onClick={onClick}
      className={clsx(
        'w-full text-left border rounded-lg px-4 py-3 transition-all my-6',
        isSelected ? 'border-primary bg-blue-50' : 'border-gray-200 bg-white',
        'hover:border-primary',
      )}
    >
      <div className="text-base font-semibold text-[#111111]">{title}</div>
      <div className="text-sm text-[#777777] mt-1">{description}</div>
    </Button>
  );
}
