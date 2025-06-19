import { useReservationStore } from '../../../stores/useReservationStore';
import ExpertBadge from '../../common/ExpertBadge';

export default function ReserveExpertInfo() {
  const { expert } = useReservationStore();

  if (!expert) return null;

  return (
    <div className="flex items-center p-4 border-b border-gray-200">
      <img
        src={expert.profile_image}
        alt={expert.nickname}
        className="w-16 h-16  mr-4"
      />
      <div>
        <div className="flex items-center gap-2">
          <div className="text-h2 py-2">{expert.nickname}</div>
          <ExpertBadge />
        </div>
        <div className="text-b2 text-[#777777]">
          전화 상담 · 채팅 상담 · 15분 ~ 1시간 소요
        </div>
      </div>
    </div>
  );
}
