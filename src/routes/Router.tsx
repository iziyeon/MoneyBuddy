// src/routes/Router.tsx
import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import MyPage from '../pages/MyPage';
import SettingsPage from '../pages/SettingsPage';
import FindAccountPage from '../pages/Find/FindAccountPage';
import ResetPasswordVerifyPage from '../pages/Find/ResetPasswordVerifyPage';
import ResetPasswordPage from '../pages/Find/ResetPasswordPage';
import PrivateRoute from './PrivateRoute';
import DefaultLayout from '../components/layout/DefaultLayout';
import PublicLayout from '../components/layout/PublicLayout';
import ExpertPage from '../pages/Expert/ExpertPage';
import ExpertListPage from '../pages/Expert/ExpertListPage';
import ExpertDetailPage from '../pages/Expert/ExpertDetailPage';
import SearchPage from '../pages/SearchPage';
import ConcernSelectPage from '../pages/Reservation/ConcernSelectPage';
import ReservationPage from '../pages/ReservationPage';
import EnterConcernPage from '../pages/Reservation/EnterConcernPage';
import SelectSchedulePage from '../pages/Reservation/SelectSchedulePage';
import PaymentPage from '../pages/Payment/PaymentPage';
import PaymentSuccessPage from '../pages/Payment/PaymentSuccessPage';
import PaymentFailPage from '../pages/Payment/PaymentFailPage';
import ReservationDetailPage from '../pages/Reservation/ReservationDetailPage';
import ReservationListPage from '../pages/Reservation/ReservationListPage';
import ConsultationHistoryPage from '../pages/Consultation/ConsultationHistoryPage';
import ConsultationDetailPage from '../pages/Consultation/ConsultationDetailPage';
import SelectTimePage from '../pages/Reservation/SelectTimePage';
import BookmarkedExpertsPage from '../pages/Bookmarks/BookmarkedExpertsPage';
import ChallengeStatusPage from '../pages/Challenge/ChallengeStatusPage';
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
      <Route
        path="/expert"
        element={
          <DefaultLayout>
            <ExpertPage />
          </DefaultLayout>
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
        path="/reservation/*"
        element={
          <PrivateRoute>
            <DefaultLayout>
              <ReservationPage />
            </DefaultLayout>
          </PrivateRoute>
        }
      >
        <Route path="step1" element={<ConcernSelectPage />} />
        <Route path="step2" element={<EnterConcernPage />} />
        <Route path="step3" element={<SelectSchedulePage />} />
        <Route path="step4" element={<SelectTimePage />} />
      </Route>
      <Route
        path="/search"
        element={
          <DefaultLayout>
            <SearchPage />
          </DefaultLayout>
        }
      />
      <Route
        path="/payment"
        element={
          <DefaultLayout>
            <PaymentPage />
          </DefaultLayout>
        }
      />
      <Route
        path="/payment/:expertId"
        element={
          <DefaultLayout>
            <PaymentPage />
          </DefaultLayout>
        }
      />
      <Route
        path="/payment/success"
        element={
          <DefaultLayout>
            <PaymentSuccessPage />
          </DefaultLayout>
        }
      />
      <Route
        path="/payment/fail"
        element={
          <DefaultLayout>
            <PaymentFailPage />
          </DefaultLayout>
        }
      />
      <Route
        path="/reserve"
        element={
          <PrivateRoute>
            <DefaultLayout>
              <ReservationListPage />
            </DefaultLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/reserve/detail/:id"
        element={
          <PrivateRoute>
            <DefaultLayout>
              <ReservationDetailPage />
            </DefaultLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/consultation/history"
        element={
          <PrivateRoute>
            <DefaultLayout>
              <ConsultationHistoryPage />
            </DefaultLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/consultation/detail/:id"
        element={
          <PrivateRoute>
            <DefaultLayout>
              <ConsultationDetailPage />
            </DefaultLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/bookmarked/experts"
        element={
          <PrivateRoute>
            <DefaultLayout>
              <BookmarkedExpertsPage />
            </DefaultLayout>
          </PrivateRoute>
        }
      />
      <Route
        path="/challenge/status"
        element={
          <PrivateRoute>
            <DefaultLayout>
              <ChallengeStatusPage />
            </DefaultLayout>
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
