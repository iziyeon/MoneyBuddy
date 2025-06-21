import { useNavigate } from 'react-router-dom';

export default function PasswordChangeSuccess() {
  const navigate = useNavigate();

  const handleGoToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center px-5 py-12 min-h-[600px]">
      <img
        src="/jpg/icon/SettingIcon.png"
        alt="비밀번호 변경 완료"
        className="w-24 h-24 mb-6"
      />
      <h1 className="text-2xl font-bold mb-2 text-center text-[#111111]">
        비밀번호 변경 완료
      </h1>
      <p className="text-[#777777] text-center mb-8 text-[14px] leading-[150%]">
        비밀번호가 성공적으로 변경되었습니다.
        <br />
        새로운 비밀번호로 로그인해주세요.
      </p>

      <div className="w-full">
        <button
          onClick={handleGoToLogin}
          className="w-full bg-[#6488FF] text-white py-3 rounded-md text-center font-semibold text-[16px] hover:bg-[#5577EE] transition-colors"
        >
          로그인 하러가기
        </button>
      </div>
    </div>
  );
}
