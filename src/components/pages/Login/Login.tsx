import { useNavigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import SocialLoginButtons from './SocialLoginButtons';
import Text from '../../common/Text';
import { loginStyles } from '../../../styles/login.styles';

export default function Login() {
  const navigate = useNavigate();

  const handleSocialLogin = (provider: 'kakao' | 'google' | 'naver') => {
    console.log(`${provider} 소셜 로그인 시작`);
  };

  return (
    <div className={loginStyles.wrapper}>
      <div className="mb-12 text-center">
        <img
          src="/jpg/logo_small.png"
          alt="MoneyBuddy"
          className="w-[120px] h-[60px] mx-auto"
        />
      </div>

      <LoginForm />

      <div className={loginStyles.divider}>
        <div className={loginStyles.dividerLine} />
        <Text type="B2">또는</Text>
        <div className={loginStyles.dividerLine} />
      </div>

      <SocialLoginButtons onSocialLogin={handleSocialLogin} />

      <div className={loginStyles.bottomLinks}>
        <button type="button" onClick={() => navigate('/signup')}>
          <Text type="B2" className="whitespace-nowrap">
            회원가입
          </Text>
        </button>
        <Text type="B2">|</Text>
        <button type="button" onClick={() => navigate('/find-account')}>
          <Text type="B2" className="whitespace-nowrap">
            아이디 · 비밀번호 재설정
          </Text>
        </button>
      </div>
    </div>
  );
}
