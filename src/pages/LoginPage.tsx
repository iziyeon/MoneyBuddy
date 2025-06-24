import PageWrapper from '../components/layout/PageWrapper';
import PageHeader from '../components/layout/PageHeader';
import Login from '../components/pages/Login/Login';

export default function LoginPage() {
  return (
    <PageWrapper>
      <PageHeader title="로그인" isLoginPage showBackButton={false} />
      <Login />
    </PageWrapper>
  );
}
