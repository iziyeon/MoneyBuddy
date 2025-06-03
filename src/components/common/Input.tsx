import React, { useState, forwardRef } from 'react';
import { Eye, EyeOff } from 'lucide-react';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  hasToggle?: boolean;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder = '', type = 'text', hasToggle = false, ...rest }, ref) => {
    const [show, setShow] = useState(false);
    const inputType = type === 'password' ? (show ? 'text' : 'password') : type;

    return (
      <div>
        <input ref={ref} type={inputType} placeholder={placeholder} {...rest} />
        {hasToggle && (
          <button type="button" onClick={() => setShow(!show)}>
            {show ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
    );
  },
);

export default Input;
