import PageWrapper from '../components/layout/PageWrapper';
import PageHeader from '../components/layout/PageHeader';
import FindIdForm from '../components/pages/auth/FindIdForm';

export default function FindIdPage() {
  return (
    <PageWrapper>
      <PageHeader title="아이디 찾기" />
      <FindIdForm />
    </PageWrapper>
  );
}
