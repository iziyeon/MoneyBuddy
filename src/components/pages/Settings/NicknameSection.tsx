import { settingsStyles } from '../../../styles/settings.styles';

interface NicknameSectionProps {
  nickname: string;
  hasOngoingConsultation?: boolean;
  onNicknameChange: () => void;
}

export default function NicknameSection({
  nickname,
  hasOngoingConsultation = false,
  onNicknameChange,
}: NicknameSectionProps) {
  return (
    <div className={settingsStyles.nicknameSection}>
      <div className={settingsStyles.nicknameLabel}>닉네임</div>

      <div className={settingsStyles.nicknameContainer}>
        <span className={settingsStyles.nicknameText}>{nickname}</span>
        <button
          onClick={onNicknameChange}
          disabled={hasOngoingConsultation}
          className={`${settingsStyles.changeButton} ${
            hasOngoingConsultation
              ? 'opacity-50 cursor-not-allowed'
              : 'cursor-pointer hover:bg-gray-100'
          }`}
        >
          <span className={settingsStyles.changeButtonText}>변경하기</span>
        </button>
      </div>

      {hasOngoingConsultation && (
        <div className={settingsStyles.nicknameWarning}>
          진행 중인 상담이 있다면 닉네임 변경이 불가해요.
        </div>
      )}
    </div>
  );
}
