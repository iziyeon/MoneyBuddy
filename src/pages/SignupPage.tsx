import PageWrapper from '../components/layout/PageWrapper';
import PageHeader from '../components/layout/PageHeader';
import type { JSX } from 'react';
import Signup from '../components/pages/Signup/Signup';

export default function SignupPage(): JSX.Element {
  return (
    <PageWrapper>
      <PageHeader title="회원가입" />
      <Signup />
    </PageWrapper>
  );
}
