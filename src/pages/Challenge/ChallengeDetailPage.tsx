import React from 'react';
import { useParams } from 'react-router-dom';
import PageWrapper from '../../components/layout/PageWrapper';

const ChallengeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <PageWrapper>
      <div className="p-5">
        <h1 className="text-xl font-bold mb-4">챌린지 상세</h1>
        <p>챌린지 ID: {id}</p>
        {/* 추후 챌린지 상세 내용 구현 */}
      </div>
    </PageWrapper>
  );
};

export default ChallengeDetailPage;
