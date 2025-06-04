import LoginForm from './LoginForm';
import SocialLoginButtons from './SocialLoginButtons';
import Text from '../../common/Text';

export default function Login() {
  const handleSocialLogin = (provider: 'kakao' | 'google' | 'naver') => {
    console.log(`${provider} 소셜 로그인 시작`);
    // 이후 소셜 로그인 API 연동 부분 확장 가능
  };

  return (
    <div>
      <LoginForm />

      <div>
        <div />
        <Text type="B2">또는</Text>
        <div />
      </div>

      <SocialLoginButtons onSocialLogin={handleSocialLogin} />

      <div>
        <button type="button">회원가입</button>
        <button type="button">아이디 · 비밀번호 재설정</button>
      </div>
    </div>
  );
}
