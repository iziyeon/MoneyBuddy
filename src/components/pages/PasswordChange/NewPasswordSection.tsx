import { useState, useEffect } from 'react';
import Input from '../../common/Input';
import { passwordChangeStyles } from '../../../styles/passwordChange.styles';

interface NewPasswordSectionProps {
  newPassword: string;
  confirmPassword: string;
  setNewPassword: (password: string) => void;
  setConfirmPassword: (password: string) => void;
  errors: {
    newPassword?: string;
    confirmPassword?: string;
  };
}

const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{10,}$/;

export default function NewPasswordSection({
  newPassword,
  confirmPassword,
  setNewPassword,
  setConfirmPassword,
  errors,
}: NewPasswordSectionProps) {
  const { newPasswordSection, passwordGroup, label, errorText } =
    passwordChangeStyles;
  const [passwordError, setPasswordError] = useState('');
  const [confirmError, setConfirmError] = useState('');

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNewPassword(value);
  };

  const handlePasswordBlur = () => {
    if (newPassword && !PASSWORD_REGEX.test(newPassword)) {
      setPasswordError('올바른 비밀번호 형식이 아닙니다. 다시 입력해주세요.');
    } else {
      setPasswordError('');
    }
  };

  const handleConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);
  };

  const handleConfirmBlur = () => {
    if (confirmPassword && newPassword && confirmPassword !== newPassword) {
      setConfirmError('비밀번호가 일치 하지 않습니다. 다시 입력해주세요.');
    } else {
      setConfirmError('');
    }
  };

  // confirmPassword가 변경될 때마다 실시간으로 체크
  useEffect(() => {
    if (confirmPassword && newPassword && confirmPassword !== newPassword) {
      setConfirmError('비밀번호가 일치 하지 않습니다. 다시 입력해주세요.');
    } else {
      setConfirmError('');
    }
  }, [confirmPassword, newPassword]);

  return (
    <div className={newPasswordSection}>
      <div className={passwordGroup}>
        <label className={label}>변경할 비밀번호</label>
        <Input
          type="password"
          value={newPassword}
          onChange={handlePasswordChange}
          onBlur={handlePasswordBlur}
          placeholder="새 비밀번호를 입력하세요"
          hasToggle
          className="w-[350px] h-[50px] border border-[#F1F1F1] rounded-[4px] px-5 py-[17px]"
        />
        {(passwordError || errors.newPassword) && (
          <div className={errorText}>{passwordError || errors.newPassword}</div>
        )}

        <Input
          type="password"
          value={confirmPassword}
          onChange={handleConfirmChange}
          onBlur={handleConfirmBlur}
          placeholder="새 비밀번호를 다시 입력하세요"
          hasToggle
          className="w-[350px] h-[50px] border border-[#F1F1F1] rounded-[4px] px-5 py-[17px] mt-3"
        />
        {(confirmError || errors.confirmPassword) && (
          <div className={errorText}>
            {confirmError || errors.confirmPassword}
          </div>
        )}
      </div>
    </div>
  );
}
