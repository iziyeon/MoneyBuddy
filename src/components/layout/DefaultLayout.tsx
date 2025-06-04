//전체 앱 메인 컨텐츠 영역 틀 담당(헤더는 포함하지 않음)
import PageWrapper from './PageWrapper';
import type { ReactNode } from 'react';

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return <PageWrapper className="p-8">{children}</PageWrapper>;
}
