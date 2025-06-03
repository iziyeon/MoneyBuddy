import type { ButtonHTMLAttributes, JSX } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary';
}

export default function Button({
  children,
  ...props
}: ButtonProps): JSX.Element {
  return (
    <button className="text-white text-base px-5 py-3 w-80 rounded">
      {children}
    </button>
  );
}

// import React from 'react';

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: 'primary' | 'secondary';
// }

// export default function Button({
//   children,
//   variant = 'primary',
//   ...props
// }: ButtonProps) {
//   const baseStyle = 'px-4 py-2 rounded text-white';
//   const styleMap = {
//     primary: 'bg-blue-500 hover:bg-blue-600',
//     secondary: 'bg-gray-500 hover:bg-gray-600',
//   };

//   return (
//     <button className={`${baseStyle} ${styleMap[variant]}`} {...props}>
//       {children}
//     </button>
//   );
// }
