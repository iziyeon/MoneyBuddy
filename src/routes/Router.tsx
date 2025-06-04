import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import FindIdPage from '../pages/FindIdPage';
import MyPage from '../pages/MyPage';
import SettingsPage from '../pages/SettingsPage';
import PrivateRoute from './PrivateRoute';
import DefaultLayout from '../components/layout/DefaultLayout';
import PublicLayout from '../components/layout/PublicLayout';

export default function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <DefaultLayout>
            <Homepage />
          </DefaultLayout>
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
        path="/find-id"
        element={
          <PublicLayout>
            <FindIdPage />
          </PublicLayout>
        }
      />

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
    </Routes>
  );
}
