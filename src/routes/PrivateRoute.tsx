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
