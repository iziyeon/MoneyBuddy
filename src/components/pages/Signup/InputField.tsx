import { useState, type InputHTMLAttributes, type JSX } from 'react';
import { Eye, EyeOff } from 'lucide-react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
  hasToggle?: boolean;
}

export default function InputField({
  label,
  id,
  className = '',
  errorMessage,
  type = 'text',
  hasToggle = false,
  ...props
}: InputFieldProps): JSX.Element {
  const [show, setShow] = useState(false);
  const isPassword = type === 'password';
  const inputType = isPassword && hasToggle && show ? 'text' : type;

  return (
    <div className="flex flex-col pb-6">
      {label && (
        <label htmlFor={id} className="text-xs pb-2 text-font1">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          id={id}
          type={inputType}
          className={`p-3.5 pr-10 rounded text-sm border w-full  ${className}`}
          {...props}
        />
        {isPassword && hasToggle && (
          <button
            type="button"
            onClick={() => setShow(prev => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
          >
            {show ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>

      {errorMessage && (
        <p className="mt-1 text-xs p-2 text-error">{errorMessage}</p>
      )}
    </div>
  );
}
