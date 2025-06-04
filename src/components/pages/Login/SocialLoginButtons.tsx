type SocialProvider = 'kakao' | 'google' | 'naver';

type SocialLoginButtonsProps = {
  onSocialLogin?: (provider: SocialProvider) => void;
};

export default function SocialLoginButtons({
  onSocialLogin,
}: SocialLoginButtonsProps) {
  const handleClick = (provider: SocialProvider) => {
    if (onSocialLogin) {
      onSocialLogin(provider);
    }
  };

  return (
    <div>
      <button type="button" onClick={() => handleClick('kakao')}>
        카카오 계정으로 1초 만에 시작하기
      </button>
      <button type="button" onClick={() => handleClick('google')}>
        구글 계정으로 시작하기
      </button>
      <button type="button" onClick={() => handleClick('naver')}>
        네이버 계정으로 시작하기
      </button>
    </div>
  );
}
