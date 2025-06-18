import PageWrapper from '../components/layout/PageWrapper';
import PageHeader from '../components/layout/PageHeader';
import type { JSX } from 'react';
import { Outlet } from 'react-router-dom';

export default function ReservationPage(): JSX.Element {
  return (
    <PageWrapper>
      <PageHeader title="상담 예약하기" />
      <Outlet />
    </PageWrapper>
  );
}
