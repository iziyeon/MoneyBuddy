import { useParams } from 'react-router-dom';
import PageWrapper from '../components/layout/PageWrapper';
import PageHeader from '../components/layout/PageHeader';

export default function ExpertDetailPage() {
  const { id } = useParams();

  return (
    <PageWrapper>
      <PageHeader title="전문가 상세" showBackButton />
      <div className="p-4">
        <h1>Expert ID: {id}</h1>
        {/* 전문가 상세 정보 표시 */}
      </div>
    </PageWrapper>
  );
}
