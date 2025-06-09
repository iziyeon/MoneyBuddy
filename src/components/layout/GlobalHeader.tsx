import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../stores/useAuthStore';

export default function GlobalHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  const user = useAuthStore(state => state.user);
  const clearAuth = useAuthStore(state => state.clearAuth);

  const hideHeaderRoutes = [
    '/login',
    '/signup',
    '/find-account',
    '/find-id',
    '/reset-password-verify',
    '/reset-password',
  ].map(path => path.toLowerCase());

  const handleLogout = () => {
    clearAuth();
    navigate('/');
  };

  // 현재 경로가 hideHeaderRoutes에 포함되어 있는지 확인 (대소문자 구분 없이)
  if (hideHeaderRoutes.includes(location.pathname.toLowerCase())) {
    return null;
  }

  return (
    <header className="flex justify-between items-center px-4 py-3">
      <div onClick={() => navigate('/')} className="cursor-pointer font-bold">
        MyProject
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
