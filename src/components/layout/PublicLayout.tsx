import PageWrapper from './PageWrapper';
import type { ReactNode } from 'react';

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-[390px] h-[844px] mx-auto bg-white relative">
      <PageWrapper>
        <div className="pt-[243px]">{children}</div>
      </PageWrapper>
    </div>
  );
}
