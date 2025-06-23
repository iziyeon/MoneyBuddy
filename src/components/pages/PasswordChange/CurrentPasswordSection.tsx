import Input from '../../common/Input';
import { passwordChangeStyles } from '../../../styles/passwordChange.styles';

interface CurrentPasswordSectionProps {
  currentPassword: string;
  setCurrentPassword: (password: string) => void;
  error?: string;
  onPasswordChange?: (password: string) => void;
}

export default function CurrentPasswordSection({
  currentPassword,
  setCurrentPassword,
  error,
  onPasswordChange,
}: CurrentPasswordSectionProps) {
  const { formContainer, label, errorText } = passwordChangeStyles;

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCurrentPassword(value);
    onPasswordChange?.(value);
  };

  return (
    <div className={formContainer}>
      <label className={label}>기존 비밀번호</label>
      <Input
        type="password"
        value={currentPassword}
        onChange={handlePasswordChange}
        placeholder="기존 비밀번호를 입력하세요"
        hasToggle
        className="w-[350px] h-[50px] border border-[#F1F1F1] rounded-[4px] px-5 py-[17px]"
      />
      {error && <div className={errorText}>{error}</div>}
    </div>
  );
}
