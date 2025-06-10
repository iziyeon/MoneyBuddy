import type { ReactNode } from 'react';

type PageWrapperProps = {
  children: ReactNode;
  className?: string;
};

export default function PageWrapper({
  children,
  className = '',
}: PageWrapperProps) {
  return (
    <div className="flex justify-center items-start w-full min-h-screen bg-white">
      <div className={`w-[390px] min-h-[844px] ${className}`}>{children}</div>
    </div>
  );
}
