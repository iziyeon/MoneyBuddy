import type { JSX } from 'react';

interface SignupHeaderProps {
  title?: string;
  description?: string;
}

export default function SignupHeader({
  title,
  description,
}: SignupHeaderProps): JSX.Element {
  return (
    <div>
      <div className="text-xl pb-2">{title} 입력해주세요</div>
      <div className="text-xs pb-6">{description}</div>
    </div>
  );
}
