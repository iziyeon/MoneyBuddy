// filepath: c:\project\FE\src\pages\ExpertDetailPage.tsx
import { useParams } from 'react-router-dom';
import { useRef, useMemo } from 'react';
import type { ReactNode } from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import PageHeader from '../../components/layout/PageHeader';
import ExpertDetailProfile from '../../components/pages/ExpertDetail/ExpertDetailProfile';
import { useExpert } from '../../hooks/useExpert';

// 스크롤 컨테이너 컴포넌트 추출
const ScrollContainer = ({
  children,
  title = '전문가 상세',
}: {
  children: ReactNode;
  title?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className="h-[844px] overflow-y-scroll select-none"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch',
        scrollbarColor: 'transparent transparent',
      }}
    >
      <div className="sticky top-0 bg-white z-20">
        <PageHeader title={title} showBackButton />
      </div>
      {children}
    </div>
  );
};

export default function ExpertDetailPage() {
  const { id } = useParams<{ id: string }>();

  // ID 파싱을 더 안전하게 처리
  const expertId = useMemo(() => {
    if (!id) return undefined;
    const parsed = parseInt(id, 10);
    return isNaN(parsed) ? undefined : parsed;
  }, [id]);
  const { data: expert, isLoading, error } = useExpert(expertId);

  let content: ReactNode;
  let headerTitle = '전문가 상세';

  if (isLoading) {
    content = (
      <div className="flex justify-center items-center h-[calc(100vh-60px)]">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
      </div>
    );
  } else if (error || !expert) {
    content = (
      <div className="p-5 text-center">
        <p>전문가 정보를 불러오는데 문제가 발생했습니다.</p>
        <p className="text-gray-500 text-sm mt-2">다시 시도해주세요.</p>
      </div>
    );
  } else {
    headerTitle = expert.nickname;
    content = <ExpertDetailProfile expert={expert} />;
  }
  return (
    <PageWrapper>
      <ScrollContainer title={headerTitle}>{content}</ScrollContainer>
    </PageWrapper>
  );
}
