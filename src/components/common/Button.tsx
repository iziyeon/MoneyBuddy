import type { ButtonHTMLAttributes, JSX } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'disabled' | 'white' | 'border' | 'grayBtn' | 'text';
}

export default function Button({
  children,
  variant = 'primary',
  ...props
}: ButtonProps): JSX.Element {
  const styleSet = {
    primary: 'bg-primary text-white',
    disabled: 'bg-disabled text-white',
    white: 'bg-white text-primary',
    border: 'bg-white border border-primary text-primary',
    grayBtn: 'bg-white border border-stroke text-font2',
    text: 'bg-transparent text-black',
  };

  return (
    <button
      {...props}
      className={`${styleSet[variant]} text-base px-5 py-3 w-80 rounded`}
    >
      {children}
    </button>
  );
}
