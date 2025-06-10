import type { InputHTMLAttributes, JSX } from 'react';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMessage?: string;
}

export default function InputField({
  label,
  id,
  className = '',
  errorMessage,
  type = 'text',
  ...props
}: InputFieldProps): JSX.Element {
  return (
    <div className="flex flex-col pb-6">
      {label && (
        <label htmlFor={id} className="text-xs pb-2 text-font1">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={`p-3.5 rounded text-sm border border-stroke ${className}`}
        {...props}
      />
      {errorMessage && (
        <p className="mt-1 text-xs p-2 text-error">{errorMessage}</p>
      )}
    </div>
  );
}
