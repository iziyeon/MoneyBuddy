import type { ReactNode } from 'react';

type PageWrapperProps = {
  children: ReactNode;
  className?: string;
  bottomElement?: ReactNode;
};

export default function PageWrapper({
  children,
  className = '',
  bottomElement,
}: PageWrapperProps) {
  return (
    <div className="flex justify-center items-start w-full min-h-screen bg-white">
      <div className={`w-[390px] min-h-[844px] relative ${className}`}>
        {/* 메인 콘텐츠 */}
        <div>{children}</div>

        {/* 하단 고정 요소 */}
        {bottomElement && (
          <div className="w-full absolute bottom-0">{bottomElement}</div>
        )}
      </div>
    </div>
  );
}
