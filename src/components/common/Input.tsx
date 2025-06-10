import React, { useState, forwardRef } from 'react';
import { Eye, EyeOff } from 'lucide-react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  hasToggle?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      placeholder = '',
      type = 'text',
      hasToggle = false,
      className = '',
      ...rest
    },
    ref,
  ) => {
    const [show, setShow] = useState(false);
    const inputType = type === 'password' ? (show ? 'text' : 'password') : type;

    const defaultInputStyle = `
      w-[350px] h-[50px] 
      rounded-[4px] 
      border border-stroke 
      px-5 py-[17px]
    `;

    return (
      <div className="relative w-[350px]">
        <input
          ref={ref}
          type={inputType}
          placeholder={placeholder}
          className={`${defaultInputStyle} ${className}`}
          {...rest}
        />
        {type === 'password' && hasToggle && (
          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          >
            {show ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';

export default Input;
