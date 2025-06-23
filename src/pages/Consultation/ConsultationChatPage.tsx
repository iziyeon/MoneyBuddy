import React from 'react';
import { useParams } from 'react-router-dom';
import PageWrapper from '../../components/layout/PageWrapper';
import PageHeader from '../../components/layout/PageHeader';

const ConsultationChatPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <PageWrapper>
      <div className="h-[844px] flex flex-col">
        <PageHeader title="상담 채팅" showBackButton />
        <div className="flex-1 p-5">
          <div className="text-center py-20">
            <h1 className="text-xl font-bold mb-4">상담 채팅</h1>
            <p className="text-gray-600">상담 ID: {id}</p>
            <p className="text-gray-500 mt-4">
              채팅 기능은 추후 구현 예정입니다.
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ConsultationChatPage;
