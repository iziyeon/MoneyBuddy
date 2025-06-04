//헤더 없는 전체 공개 페이지의 틀 담당
import GlobalHeader from './GlobalHeader';
import PageWrapper from './PageWrapper';
import type { ReactNode } from 'react';

export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <GlobalHeader />
      <PageWrapper>{children}</PageWrapper>
    </>
  );
}
