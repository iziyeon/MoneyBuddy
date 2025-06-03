import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

type InputProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: 'text' | 'password';
  hasToggle?: boolean;
  disabled?: boolean;
};

export default function Input({
  value,
  onChange,
  placeholder = '',
  type = 'text',
  hasToggle = false,
  disabled = false,
}: InputProps) {
  const [show, setShow] = useState(false);
  const inputType = type === 'password' ? (show ? 'text' : 'password') : type;

  return (
    <div>
      <input
        type={inputType}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
      />
      {hasToggle && (
        <button type="button" onClick={() => setShow(!show)}>
          {show ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      )}
    </div>
  );
}
