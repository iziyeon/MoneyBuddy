//로그인 안 된 경우 → 강제 로그인 페이지로 이동시킴
//로그인 된 경우 → 자식 컴포넌트 통과

import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../stores/useAuthStore';
import type { ReactNode } from 'react';

type PrivateRouteProps = {
  children: ReactNode;
};

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const user = useAuthStore(state => state.user);
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
}
