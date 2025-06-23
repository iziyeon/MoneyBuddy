import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../stores/useAuthStore';
import { logoutApi } from '../../services/auth/loginApi';

export default function GlobalHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  const user = useAuthStore(state => state.user);
  const clearAuth = useAuthStore(state => state.clearAuth);

  const handleLogout = async () => {
    try {
      // 명세서에 따른 로그아웃 API 호출
      await logoutApi();
      clearAuth();
      navigate('/login');
    } catch (error) {
      console.error('로그아웃 실패:', error);
      // 실패해도 로컬 상태는 초기화
      clearAuth();
      navigate('/login');
    }
  };

  const hideHeaderRoutes = [
    '/login',
    '/signup',
    '/find-account',
    '/find-id',
    '/reset-password-verify',
    '/reset-password',
  ].map(path => path.toLowerCase());

  const isExpertsDetailPage = location.pathname
    .toLowerCase()
    .startsWith('/experts/');

  if (
    hideHeaderRoutes.includes(location.pathname.toLowerCase()) ||
    isExpertsDetailPage
  ) {
    return null;
  }

  return (
    <header className="flex justify-between items-center px-4 py-0 bg-white">
      <div onClick={() => navigate('/')} className="cursor-pointer font-bold">
        <img
          src="/jpg/logo_small.png"
          alt="MoneyBuddy"
          className="w-[120px] h-[60px]"
        />
      </div>

      <div>
        {user ? (
          <div className="flex items-center gap-4">
            <span>안녕하세요, {user.nickname}님</span>
            <button onClick={handleLogout}>로그아웃</button>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/login')}>로그인</button>
            <button onClick={() => navigate('/signup')}>회원가입</button>
          </div>
        )}
      </div>
    </header>
  );
}
