import Text from '../../common/Text';
import { Edit } from 'lucide-react';

interface ProfileSectionProps {
  nickname: string;
  profileImage?: string;
  onEditClick: () => void;
}

export default function ProfileSection({
  nickname,
  profileImage,
  onEditClick,
}: ProfileSectionProps) {
  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden">
            {profileImage ? (
              <img
                src={profileImage}
                alt="프로필"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400">
                👤
              </div>
            )}
          </div>
          <div>
            <Text type="H3" className="font-bold">
              {nickname}님
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}
