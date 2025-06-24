import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { withdrawStyles } from '../../../styles/withdraw.styles';

interface PasswordInputSectionProps {
  password: string;
  onPasswordChange: (password: string) => void;
  error?: string;
  onForgotPassword: () => void;
}

export default function PasswordInputSection({
  password,
  onPasswordChange,
  error,
  onForgotPassword,
}: PasswordInputSectionProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      {/* 비밀번호 입력 섹션 */}
      <div className={withdrawStyles.passwordSection.container}>
        <label className={withdrawStyles.passwordSection.label}>비밀번호</label>

        <div className={withdrawStyles.passwordSection.inputContainer}>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={e => onPasswordChange(e.target.value)}
            placeholder="비밀번호 입력"
            className={`${withdrawStyles.passwordSection.input} ${!password ? withdrawStyles.passwordSection.placeholder : ''}`}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={withdrawStyles.passwordSection.eyeIcon}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {error && (
          <div className={withdrawStyles.passwordSection.errorText}>
            {error}
          </div>
        )}
      </div>

      {/* 도움말 섹션 */}
      <div className={withdrawStyles.helpSection.container}>
        <span className={withdrawStyles.helpSection.text}>
          기존 비밀번호를 모르겠다면,{' '}
          <span
            className={withdrawStyles.helpSection.linkText}
            onClick={onForgotPassword}
          >
            비밀번호 찾기
          </span>
          를 먼저 진행해주세요.
        </span>
      </div>
    </>
  );
}
