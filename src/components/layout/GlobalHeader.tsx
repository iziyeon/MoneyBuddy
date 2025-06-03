import { useAuthStore } from '../../stores/useAuthStore';
import { useNavigate } from 'react-router-dom';

export default function GlobalHeader() {
  const navigate = useNavigate();

  const user = useAuthStore(state => state.user);
  const clearAuth = useAuthStore(state => state.clearAuth);

  const handleLogout = () => {
    clearAuth();
    navigate('/');
  };

  return (
    <header>
      <div onClick={() => navigate('/')}>MyProject</div>
      <div>
        {user ? (
          <>
            <span>안녕하세요, {user.nickname}님</span>
            <button onClick={handleLogout}>로그아웃</button>
          </>
        ) : (
          <>
            <button onClick={() => navigate('/login')}>로그인</button>
            <button onClick={() => navigate('/register')}>회원가입</button>
          </>
        )}
      </div>
    </header>
  );
}
