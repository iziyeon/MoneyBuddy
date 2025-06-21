export const withdrawStyles = {
  // 메인 컨테이너
  container: 'w-[390px] mx-auto bg-white',
  // 헤더 섹션
  headerSection: {
    container: 'flex flex-col items-start px-5 py-8 gap-6 w-[390px]',
    title:
      'w-[350px] font-semibold text-xl leading-[140%] tracking-[-0.025em] text-gray-900',
  },

  // 비밀번호 입력 섹션
  passwordSection: {
    container: 'flex flex-col items-start px-5 py-5 gap-3 w-[390px]',
    label:
      'w-[350px] h-[17px] font-normal text-xs leading-[140%] tracking-[-0.025em] text-gray-500',
    inputContainer:
      'box-border flex flex-row items-center py-[17px] px-5 gap-[10px] w-[350px] h-[50px] bg-white border border-gray-100 rounded backdrop-blur-[8px]',
    input:
      'flex-1 font-normal text-sm leading-[17px] tracking-[-0.025em] text-gray-900 bg-transparent border-none outline-none',
    placeholder: 'text-gray-500',
    eyeIcon: 'w-5 h-5 text-black cursor-pointer',
    errorText: 'w-[350px] text-red-500 font-normal text-xs leading-[150%]',
  },

  // 도움말 섹션
  helpSection: {
    container:
      'flex flex-row justify-center items-center py-3 gap-[10px] w-[390px] h-[42px]',
    text: 'w-[305px] h-[18px] font-normal text-xs leading-[150%] text-gray-400 text-center',
    linkText:
      'text-blue-500 underline cursor-pointer hover:text-blue-600 transition-colors',
  }, // 탈퇴 사유 섹션
  reasonSection: {
    container: 'flex flex-col items-start px-5 py-5 gap-3 w-[390px]',
    optionsContainer: 'flex flex-col items-start gap-3 w-[350px]',
    option:
      'box-border flex flex-row items-center py-4 px-3 gap-[10px] w-[350px] h-[46px] bg-white/30 border border-gray-100 shadow-[0px_1px_4px_rgba(0,0,0,0.04)] rounded cursor-pointer transition-all duration-200 hover:border-blue-500',
    optionSelected: '!border-blue-500',
    optionText:
      'font-normal text-sm leading-[17px] tracking-[-0.025em] text-gray-900',
  },

  // 주의사항 섹션
  warningSection: {
    container: 'flex flex-col items-start px-5 py-5 gap-5 w-[390px]',
    title:
      'w-[350px] h-[28px] font-semibold text-xl leading-[140%] tracking-[-0.025em] text-gray-900',
    list: 'flex flex-col items-start gap-5 w-[350px]',
    item: 'flex flex-row items-center gap-[5px] w-[350px] h-[21px]',
    icon: 'box-border w-4 h-4 border border-pink-500 rounded-[30px] flex-shrink-0',
    iconInner: 'w-full h-full bg-pink-500 rounded-[30px]',
    text: 'flex-1 font-normal text-sm leading-[150%] text-gray-700',
  },

  // 하단 버튼 섹션
  bottomSection: {
    container:
      'box-border flex flex-row justify-center items-center px-5 py-5 gap-4 w-[390px] h-[100px] bg-white border-t border-gray-100',
    buttonGroup: 'flex gap-4 w-full',
    cancelButton:
      'box-border flex flex-row justify-center items-center py-[14px] px-[22px] gap-[10px] flex-1 h-[46px] bg-white border border-blue-500 rounded backdrop-blur-[8px]',
    cancelButtonText:
      'font-semibold text-base leading-[16px] text-center tracking-[-0.025em] text-blue-500',
    submitButton:
      'flex flex-row justify-center items-center py-[14px] px-[22px] gap-[10px] flex-1 h-[46px] rounded backdrop-blur-[8px]',
    submitButtonDisabled: 'bg-gray-300',
    submitButtonActive: 'bg-blue-500',
    submitButtonText:
      'font-semibold text-base leading-[16px] text-center tracking-[-0.025em] text-white',
  },

  // 모달
  modal: {
    backdrop:
      'fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50',
    container:
      'flex flex-col items-center px-5 py-5 gap-6 w-[318px] bg-white rounded-lg',
    content: 'flex flex-col items-center gap-2 w-[278px]',
    title:
      'w-[278px] h-[28px] font-semibold text-xl leading-[140%] text-center tracking-[-0.02em] text-gray-900',
    description: 'font-normal text-xs leading-[150%] text-center text-gray-400',
    buttonGroup: 'flex flex-row items-start gap-3 w-[278px] h-[46px]',
    modalCancelButton:
      'box-border flex flex-row justify-center items-center py-[14px] px-[22px] gap-[10px] flex-1 h-[46px] bg-white border border-blue-500 rounded backdrop-blur-[8px]',
    modalConfirmButton:
      'flex flex-row justify-center items-center py-[14px] px-[22px] gap-[10px] flex-1 h-[46px] bg-white rounded backdrop-blur-[8px]',
    modalButtonText:
      'font-semibold text-base leading-[16px] text-center tracking-[-0.025em] text-blue-500',
    successButton:
      'flex flex-row justify-center items-center py-[14px] px-[22px] gap-[10px] w-[278px] h-[46px] bg-blue-500 rounded backdrop-blur-[8px]',
    successButtonText:
      'font-semibold text-base leading-[16px] text-center tracking-[-0.025em] text-white',
  },
};
