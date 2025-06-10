import { useState } from 'react';
import PageWrapper from '../../layout/PageWrapper';
import PageHeader from '../../layout/PageHeader';
import FindIdForm from '../../pages/auth/FindIdForm';
import ResetPasswordRequestForm from '../../pages/auth/ResetPasswordRequestForm';
import Text from '../../common/Text';
import { authStyles } from '../../../styles/auth.styles';

type Tab = 'findId' | 'resetPassword';

export default function FindAccountPage() {
  const [activeTab, setActiveTab] = useState<Tab>('findId');

  return (
    <PageWrapper>
      <PageHeader title="아이디 · 비밀번호 재설정" />

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

      <div className={authStyles.wrapper}>
        {activeTab === 'findId' ? (
          <FindIdForm onSwitchTab={() => setActiveTab('resetPassword')} />
        ) : (
          <ResetPasswordRequestForm />
        )}
      </div>
    </PageWrapper>
  );
}
