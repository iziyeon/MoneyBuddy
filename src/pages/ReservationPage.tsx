import PageWrapper from '../components/layout/PageWrapper';
import PageHeader from '../components/layout/PageHeader';
import type { JSX } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import ProgressHeader from '../components/common/ProgressBar';

export default function ReservationPage(): JSX.Element {
  const location = useLocation();

  const stepMap: Record<string, number> = {
    '/reservation/step1': 1,
    '/reservation/step2': 2,
    '/reservation/step3': 3,
    '/reservation/step4': 3,
  };

  const currentStep = stepMap[location.pathname] || 1;

  return (
    <PageWrapper>
      <PageHeader title="상담 예약하기" />
      <ProgressHeader currentStep={currentStep} totalSteps={4} />
      <Outlet />
    </PageWrapper>
  );
}
