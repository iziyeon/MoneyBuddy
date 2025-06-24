export const settingsStyles = {
  // 메인 컨테이너
  container: 'w-[390px] mx-auto bg-white',

  // 프로필 섹션
  profileSection:
    'flex flex-col justify-center items-center px-5 py-6 gap-6 w-[390px] h-[353px]',

  // 프로필 이미지 컨테이너
  profileImageContainer: 'relative w-[100px] h-[100px]',
  profileImage:
    'w-[100px] h-[100px] bg-gray-200 border border-gray-300 rounded-full object-cover',

  // 편집 버튼
  editButton:
    'absolute -bottom-0 -right-0 w-8 h-8 bg-white border border-gray-300 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors',

  // 닉네임 섹션
  nicknameSection: 'flex flex-col items-start gap-1.5 w-[350px]',
  nicknameLabel:
    'w-[350px] h-[17px] font-normal text-xs leading-[140%] tracking-[-0.025em] text-gray-500',
  nicknameContainer:
    'box-border flex flex-row justify-between items-start px-[14px] py-[13px] gap-2.5 w-[350px] h-[50px] bg-white border border-gray-100 rounded',
  nicknameText:
    'font-semibold text-sm leading-[140%] tracking-[-0.025em] text-gray-900',
  changeButton:
    'box-border flex flex-col items-start py-0.5 px-2 gap-2.5 w-[57px] h-6 bg-gray-100 border border-gray-100 rounded',
  changeButtonText:
    'w-[41px] h-5 font-semibold text-xs leading-5 tracking-[-0.025em] text-gray-500',
  nicknameWarning:
    'w-[350px] h-[17px] font-normal text-xs leading-[140%] tracking-[-0.025em] text-gray-600',

  // 이메일 섹션
  emailSection: 'flex flex-col items-start gap-1.5 w-[350px]',
  emailLabel:
    'w-[350px] h-[17px] font-normal text-xs leading-[140%] tracking-[-0.025em] text-gray-500',
  emailContainer:
    'box-border flex flex-row justify-between items-center px-[14px] py-[13px] gap-[14px] w-[350px] h-[46px] bg-white border border-gray-100 rounded-lg',
  emailText:
    'font-normal text-sm leading-[140%] tracking-[-0.025em] text-gray-900',
  verifiedText:
    'font-semibold text-xs leading-5 tracking-[-0.025em] text-gray-500',

  // 구분선
  separator: 'w-[390px] h-2 bg-gray-100',

  // 메뉴 리스트
  menuList: 'flex flex-col items-start w-[390px]',
  menuItem:
    'box-border flex flex-row justify-between items-center px-5 py-4 gap-2.5 w-[390px] h-[54px] bg-white border-y border-gray-50 cursor-pointer hover:bg-gray-50 transition-colors',
  menuText: 'font-normal text-base leading-[140%] text-center text-gray-900',
  chevronIcon: 'w-5 h-5 text-gray-400',

  // 회원 탈퇴
  withdrawSection:
    'flex flex-row justify-end items-center px-5 py-3 gap-2.5 w-[390px] h-[41px]',
  withdrawText:
    'w-16 h-[17px] font-normal text-xs leading-[140%] tracking-[-0.025em] underline text-gray-600 cursor-pointer hover:text-gray-700 transition-colors',
};
