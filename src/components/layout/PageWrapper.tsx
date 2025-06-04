import type { ReactNode } from 'react';

type PageWrapperProps = {
  children: ReactNode;
  className?: string;
};

export default function PageWrapper({
  children,
  className = '',
}: PageWrapperProps) {
  return <div className={className}>{children}</div>;
}
