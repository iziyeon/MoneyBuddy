// src/pages/FindPage/ResetPasswordRequestPage.tsx
import PageWrapper from '../../components/layout/PageWrapper';
import PageHeader from '../../components/layout/PageHeader';
import ResetPasswordRequestForm from '../../components/pages/auth/ResetPasswordRequestForm';

export default function ResetPasswordRequestPage() {
  return (
    <PageWrapper>
      <PageHeader title="비밀번호 재설정 요청" />
      <ResetPasswordRequestForm />
    </PageWrapper>
  );
}
