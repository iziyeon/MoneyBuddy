import type { JSX } from 'react';

interface CounsultContentProps {
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
}

export default function ConsultContentInput({
  value,
  onChange,
  maxLength = 2000,
}: CounsultContentProps): JSX.Element {
  return (
    <div>
      <div className="flex justify-center my-4">
        <textarea
          onChange={e => onChange(e.target.value)}
          value={value}
          className="w-[326px] h-[350px] border p-1"
          maxLength={maxLength}
        ></textarea>
      </div>
      <div className="absolute right-0 text-xs text-[#9C9C9C]">
        {value.length}/{maxLength}자
      </div>
    </div>
  );
}
