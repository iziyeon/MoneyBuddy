import { settingsStyles } from '../../../styles/settings.styles';

interface EmailSectionProps {
  email: string;
  isVerified?: boolean;
}

export default function EmailSection({
  email,
  isVerified = true,
}: EmailSectionProps) {
  return (
    <div className={settingsStyles.emailSection}>
      <div className={settingsStyles.emailLabel}>이메일</div>

      <div className={settingsStyles.emailContainer}>
        <span className={settingsStyles.emailText}>{email}</span>
        <span className={settingsStyles.verifiedText}>
          {isVerified ? '인증 완료' : '인증 필요'}
        </span>
      </div>
    </div>
  );
}
