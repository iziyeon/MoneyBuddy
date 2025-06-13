import { useParams } from 'react-router-dom';
import PageWrapper from '../components/layout/PageWrapper';
import PageHeader from '../components/layout/PageHeader';
import ExpertDetailProfile from '../components/pages/ExpertDetail/ExpertDetailProfile';
import { useExpert } from '../hooks/useExpert';

export default function ExpertDetailPage() {
  const { id } = useParams<{ id: string }>();
  const expertId = id ? parseInt(id) : undefined;
  const { data: expert, isLoading, error } = useExpert(expertId);

  if (isLoading) {
    return (
      <PageWrapper>
        <PageHeader title="전문가 상세" showBackButton />
        <div className="flex justify-center items-center h-[calc(100vh-60px)]">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary"></div>
        </div>
      </PageWrapper>
    );
  }

  if (error || !expert) {
    return (
      <PageWrapper>
        <PageHeader title="전문가 상세" showBackButton />
        <div className="p-5 text-center">
          <p>전문가 정보를 불러오는데 문제가 발생했습니다.</p>
          <p className="text-gray-500 text-sm mt-2">다시 시도해주세요.</p>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <PageHeader title={`${expert.nickname}`} showBackButton />
      <ExpertDetailProfile expert={expert} />
    </PageWrapper>
  );
}
