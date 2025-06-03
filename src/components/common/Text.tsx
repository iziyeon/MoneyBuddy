import React from 'react';

type TextProps = {
  type: 'H1' | 'H2' | 'H3' | 'H4' | 'B1' | 'B2' | 'B3';
  children: React.ReactNode;
  className?: string;
};

export default function Text({ type, children, className = '' }: TextProps) {
  const sizeClass =
    type === 'H1'
      ? 'text-h1'
      : type === 'H2'
        ? 'text-h2'
        : type === 'H3'
          ? 'text-h3'
          : type === 'H4'
            ? 'text-h4'
            : type === 'B1'
              ? 'text-b1'
              : type === 'B2'
                ? 'text-b2'
                : 'text-b3';

  const fontColor = type.startsWith('B')
    ? type === 'B1'
      ? 'text-font1'
      : type === 'B2'
        ? 'text-font2'
        : 'text-font3'
    : 'text-font1';

  const fontWeight = type.startsWith('H') ? 'font-semibold' : 'font-normal';

  return (
    <span className={`${sizeClass} ${fontWeight} ${fontColor} ${className}`}>
      {children}
    </span>
  );
}
