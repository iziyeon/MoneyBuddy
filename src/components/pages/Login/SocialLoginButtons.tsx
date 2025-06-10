import { loginStyles } from '../../../styles/login.styles';

type SocialProvider = 'kakao' | 'google' | 'naver';

type SocialLoginButtonsProps = {
  onSocialLogin?: (provider: SocialProvider) => void;
};

export default function SocialLoginButtons({
  onSocialLogin,
}: SocialLoginButtonsProps) {
  return (
    <div className={loginStyles.socialButtonsWrapper}>
      <button
        type="button"
        onClick={() => onSocialLogin?.('kakao')}
        className={loginStyles.socialButton}
      >
        <img
          src="/jpg/SocialLoginButton/kakao.png"
          alt="카카오 계정으로 1초 만에 시작하기"
          className="w-full h-full"
        />
      </button>

      <button
        type="button"
        onClick={() => onSocialLogin?.('google')}
        className={loginStyles.socialButton}
      >
        <img
          src="/jpg/SocialLoginButton/google.png"
          alt="구글 계정으로 시작하기"
          className="w-full h-full"
        />
      </button>

      <button
        type="button"
        onClick={() => onSocialLogin?.('naver')}
        className={loginStyles.socialButton}
      >
        <img
          src="/jpg/SocialLoginButton/naver.png"
          alt="네이버 계정으로 시작하기"
          className="w-full h-full"
        />
      </button>
    </div>
  );
}
