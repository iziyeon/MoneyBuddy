// src/pages/FindPage/FindAccountPage.tsx
import { useState } from 'react';
import PageWrapper from '../../components/layout/PageWrapper';
import PageHeader from '../../components/layout/PageHeader';
import FindIdForm from '../../components/pages/auth/FindIdForm';
import ResetPasswordRequestForm from '../../components/pages/auth/ResetPasswordRequestForm';
import Text from '../../components/common/Text';
import { authStyles } from '../../styles/auth.styles';

type Tab = 'findId' | 'resetPassword';

export default function FindAccountPage() {
  const [activeTab, setActiveTab] = useState<Tab>('findId');

  return (
    <PageWrapper>
      <PageHeader title="아이디 · 비밀번호 재설정" />

      <div className={authStyles.wrapper}>
        <div className={authStyles.container}>
          <div className={authStyles.tabContainer}>
            <button
              onClick={() => setActiveTab('findId')}
              className={`${authStyles.tab} ${
                activeTab === 'findId'
                  ? authStyles.activeTab
                  : authStyles.inactiveTab
              }`}
            >
              <Text type="B1">아이디 찾기</Text>
            </button>
            <button
              onClick={() => setActiveTab('resetPassword')}
              className={`${authStyles.tab} ${
                activeTab === 'resetPassword'
                  ? authStyles.activeTab
                  : authStyles.inactiveTab
              }`}
            >
              <Text type="B1">비밀번호 재설정</Text>
            </button>
          </div>

          {activeTab === 'findId' ? (
            <FindIdForm onSwitchTab={() => setActiveTab('resetPassword')} />
          ) : (
            <ResetPasswordRequestForm />
          )}
        </div>
      </div>
    </PageWrapper>
  );
}
