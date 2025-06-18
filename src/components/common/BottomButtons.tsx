import { type JSX } from 'react';
import Button from './Button';

interface BottomButtonsProps {
  leftLabel?: string;
  rightLabel?: string;
  leftVariant?: 'primary' | 'secondary' | 'disabled' | 'text' | 'text2';
  rightVariant?: 'primary' | 'secondary' | 'disabled' | 'text' | 'text2';
  onLeftClick?: () => void;
  onRightClick?: () => void;
  leftDisabled?: boolean;
  rightDisabled?: boolean;
}

export default function BottomButtons({
  leftLabel,
  rightLabel,
  leftVariant = 'primary',
  rightVariant = 'primary',
  onLeftClick,
  onRightClick,
  leftDisabled,
  rightDisabled,
}: BottomButtonsProps): JSX.Element {
  return (
    <div>
      <div className="flex gap-2 mt-16">
        <Button
          variant={leftDisabled ? 'disabled' : leftVariant}
          onClick={onLeftClick}
          className="flex-1 border py-4"
          disabled={leftDisabled}
        >
          {leftLabel}
        </Button>
        <Button
          variant={rightDisabled ? 'disabled' : rightVariant}
          onClick={onRightClick}
          className="flex-1 border py-4"
          disabled={rightDisabled}
        >
          {rightLabel}
        </Button>
      </div>
    </div>
  );
}
