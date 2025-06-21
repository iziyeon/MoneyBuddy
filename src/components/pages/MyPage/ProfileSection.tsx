import { ChevronRight } from 'lucide-react';
import { mypageStateStyles } from '../../../styles/mypage-state.styles';

interface ProfileSectionProps {
  nickname: string;
  profileImage: string;
  onEditClick: () => void;
}

export default function ProfileSection({
  nickname,
  profileImage,
  onEditClick,
}: ProfileSectionProps) {
  return (
    <div className={mypageStateStyles.content.profileSection}>
      <img
        src={profileImage}
        alt="프로필"
        className={mypageStateStyles.content.profileImage}
      />
      <div className={mypageStateStyles.content.profileInfo}>
        <div className={mypageStateStyles.content.nickname}>{nickname}</div>
        <div
          className={mypageStateStyles.content.editButton}
          onClick={onEditClick}
        >
          <span className="text-xs text-gray-500">프로필 수정</span>
          <ChevronRight className="w-4 h-4 text-gray-500" />
        </div>
      </div>
    </div>
  );
}
