import React from 'react';

export type TextType = 'H1' | 'H2' | 'H3' | 'H4' | 'B1' | 'B2' | 'B3';

type TextProps = {
  type: TextType;
  children: React.ReactNode;
  className?: string;
};

const textSize = {
  H1: 'text-h1',
  H2: 'text-h2',
  H3: 'text-h3',
  H4: 'text-h4',
  B1: 'text-b1',
  B2: 'text-b2',
  B3: 'text-b3',
} as const;

const textColor = {
  H1: 'text-font1',
  H2: 'text-font1',
  H3: 'text-font1',
  H4: 'text-font1',
  B1: 'text-font1',
  B2: 'text-font2',
  B3: 'text-font3',
} as const;

const textWeight = {
  H1: 'font-semibold',
  H2: 'font-semibold',
  H3: 'font-semibold',
  H4: 'font-semibold',
  B1: 'font-normal',
  B2: 'font-normal',
  B3: 'font-normal',
} as const;

export default function Text({ type, children, className = '' }: TextProps) {
  return (
    <span
      className={`${textSize[type]} ${textWeight[type]} ${textColor[type]} ${className}`}
    >
      {children}
    </span>
  );
}
