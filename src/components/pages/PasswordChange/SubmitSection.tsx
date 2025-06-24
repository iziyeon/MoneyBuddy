import { useNavigate } from 'react-router-dom';
import { passwordChangeStyles } from '../../../styles/passwordChange.styles';

interface SubmitSectionProps {
  isFormValid: boolean;
  onSubmit: () => void;
  isLoading?: boolean;
}

export default function SubmitSection({
  isFormValid,
  onSubmit,
  isLoading = false,
}: SubmitSectionProps) {
  const navigate = useNavigate();
  const {
    submitButtonDisabled,
    submitButtonActive,
    buttonText,
    bottomSection,
    helpText,
    findPasswordLink,
  } = passwordChangeStyles;

  const handleFindPassword = () => {
    navigate('/find-account');
  };

  return (
    <>
      <button
        onClick={onSubmit}
        disabled={!isFormValid || isLoading}
        className={
          isFormValid && !isLoading ? submitButtonActive : submitButtonDisabled
        }
      >
        <span className={buttonText}>
          {isLoading ? '처리중...' : '제출하기'}
        </span>
      </button>

      <div className={bottomSection}>
        <div className={helpText}>
          기존 비밀번호를 모르겠다면,{' '}
          <span className={findPasswordLink} onClick={handleFindPassword}>
            비밀번호 찾기
          </span>
          를 먼저 진행해주세요.
        </div>
      </div>
    </>
  );
}
