// src/routes/Router.tsx
import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import MyPage from '../pages/MyPage';
import SettingsPage from '../pages/SettingsPage';
import FindAccountPage from '../pages/FindPage/FindAccountPage';
import ResetPasswordVerifyPage from '../pages/FindPage/ResetPasswordVerifyPage';
import ResetPasswordPage from '../pages/FindPage/ResetPasswordPage';
import PrivateRoute from './PrivateRoute';
import DefaultLayout from '../components/layout/DefaultLayout';
import PublicLayout from '../components/layout/PublicLayout';
import ExpertPage from '../pages/ExpertPage';
import ExpertListPage from '../pages/ExpertListPage';
import ExpertDetailPage from '../pages/ExpertDetailPage';
import SearchPage from '../pages/SearchPage';

export default function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <DefaultLayout>
              <Homepage />
            </DefaultLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicLayout>
            <LoginPage />
          </PublicLayout>
        }
      />
      <Route
        path="/signup"
        element={
          <PublicLayout>
            <SignupPage />
          </PublicLayout>
        }
      />
      <Route
        path="/find-account"
        element={
          <PublicLayout>
            <FindAccountPage />
          </PublicLayout>
        }
      />
      <Route
        path="/reset-password-verify"
        element={
          <PublicLayout>
            <ResetPasswordVerifyPage />
          </PublicLayout>
        }
      />
      <Route
        path="/reset-password"
        element={
          <PublicLayout>
            <ResetPasswordPage />
          </PublicLayout>
        }
      />
      <Route path="/expert" element={<ExpertPage />} />
      <Route
        path="/mypage"
        element={
          <PrivateRoute>
            <DefaultLayout>
              <MyPage />
            </DefaultLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <PrivateRoute>
            <DefaultLayout>
              <SettingsPage />
            </DefaultLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/experts-list"
        element={
          <DefaultLayout>
            <ExpertListPage />
          </DefaultLayout>
        }
      />
      <Route
        path="/experts/:id"
        element={
          <DefaultLayout>
            <ExpertDetailPage />
          </DefaultLayout>
        }
      />
      <Route
        path="/search"
        element={
          <DefaultLayout>
            <SearchPage />
          </DefaultLayout>
        }
      />
    </Routes>
  );
}
