import PageHeader from '../components/layout/PageHeader';
import PageWrapper from '../components/layout/PageWrapper';
import Login from '../components/pages/Login';

function LoginPage() {
  return (
    <PageWrapper>
      <PageHeader title="로그인" showBackButton={false} />
      <Login />
    </PageWrapper>
  );
}

export default LoginPage;
