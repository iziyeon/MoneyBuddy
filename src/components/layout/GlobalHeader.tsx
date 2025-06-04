//로그인 여부에 따른 메뉴 변화 담당
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../stores/useAuthStore';

export default function GlobalHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  const hideHeaderRoutes = ['/login', '/signup', '/find-id', '/reset-password'];

  const user = useAuthStore(state => state.user);
  const clearAuth = useAuthStore(state => state.clearAuth);

  const handleLogout = () => {
    clearAuth();
    navigate('/');
  };

  if (hideHeaderRoutes.includes(location.pathname)) {
    return null;
  }

  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem',
      }}
    >
      <div
        onClick={() => navigate('/')}
        style={{ cursor: 'pointer', fontWeight: 'bold' }}
      >
        MyProject
      </div>

      <div>
        {user ? (
          <>
            <span>안녕하세요, {user.nickname}님</span>
            <button onClick={handleLogout} style={{ marginLeft: '1rem' }}>
              로그아웃
            </button>
          </>
        ) : (
          <>
            <button onClick={() => navigate('/login')}>로그인</button>
            <button
              onClick={() => navigate('/signup')}
              style={{ marginLeft: '1rem' }}
            >
              회원가입
            </button>
          </>
        )}
      </div>
    </header>
  );
}
