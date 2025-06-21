export const passwordChangeStyles = {
  // 폼 컨테이너
  formContainer: 'flex flex-col items-center py-5 px-5 gap-3 w-[390px]',

  // 라벨
  label:
    'w-[350px] h-[17px] font-normal text-xs leading-[140%] tracking-[-0.025em] text-gray-500',

  // 에러 텍스트
  errorText: 'text-red-500 text-xs mt-1 w-[350px]',

  // 새 비밀번호 섹션
  newPasswordSection:
    'flex flex-col items-start py-5 px-5 gap-10 w-[390px] h-[267px]',

  // 비밀번호 그룹
  passwordGroup: 'flex flex-col items-start gap-3 w-[350px]',

  // 제출 버튼 - 비활성화
  submitButtonDisabled:
    'flex justify-center items-center py-[14px] px-[22px] gap-[10px] w-[350px] h-[46px] bg-gray-300 rounded mx-5 mt-10 cursor-not-allowed',

  // 제출 버튼 - 활성화
  submitButtonActive:
    'flex justify-center items-center py-[14px] px-[22px] gap-[10px] w-[350px] h-[46px] bg-blue-500 rounded mx-5 mt-10 cursor-pointer hover:bg-blue-600 transition-colors',

  // 버튼 텍스트
  buttonText:
    'w-[58px] h-[16px] font-semibold text-base leading-4 text-center tracking-[-0.025em] text-white',

  // 하단 섹션
  bottomSection:
    'flex justify-center items-center py-3 gap-[10px] w-[390px] h-[42px] mt-4',

  // 도움말 텍스트
  helpText:
    'w-[305px] h-[18px] font-normal text-xs leading-[150%] text-gray-400 text-center',

  // 비밀번호 찾기 링크
  findPasswordLink:
    'text-blue-500 underline cursor-pointer hover:text-blue-600 transition-colors',

  // 성공 페이지 컨테이너
  successContainer:
    'flex flex-col items-center justify-center px-5 py-12 min-h-[600px]',

  // 성공 제목
  successTitle: 'text-2xl font-bold mb-2 text-center text-gray-900',

  // 성공 메시지
  successMessage: 'text-gray-500 text-center mb-8 text-sm leading-[150%]',

  // 로그인 버튼
  loginButton:
    'w-full bg-blue-500 text-white py-3 rounded-md text-center font-semibold text-base hover:bg-blue-600 transition-colors',
};
