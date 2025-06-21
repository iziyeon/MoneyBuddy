import { ChevronRight } from 'lucide-react';
import { mypageStateStyles } from '../../../styles/mypage-state.styles';

interface Consultation {
  id: number;
  expertName: string;
  expertImage: string;
  date: string;
  time: string;
  type: string;
  status: string;
  duration: string;
}

interface ConsultationSectionProps {
  consultation: Consultation;
  onDetailClick: () => void;
  onActionClick: () => void;
}

export default function ConsultationSection({
  consultation,
  onDetailClick,
  onActionClick,
}: ConsultationSectionProps) {
  return (
    <div className={mypageStateStyles.consultation.container}>
      {/* 헤더 */}
      <div className={mypageStateStyles.consultation.header}>
        <div className={mypageStateStyles.consultation.dateText}>
          2025년 1월 25일 월요일
        </div>
        <div
          className={mypageStateStyles.consultation.detailButton}
          onClick={onDetailClick}
        >
          <span>상세보기</span>
          <ChevronRight className="w-4 h-4" />
        </div>
      </div>

      {/* 콘텐츠 */}
      <div className={mypageStateStyles.consultation.content}>
        {' '}
        {/* 전문가 정보 */}
        <div className="flex flex-row items-start gap-3 w-[298px] h-[62px]">
          <div
            className="w-[60px] h-[60px] bg-cover bg-center rounded border border-gray-300 flex-none"
            style={{ backgroundImage: `url(${consultation.expertImage})` }}
          />
          <div className="flex flex-col flex-1 gap-2">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-base font-bold text-black">
                  {consultation.expertName}
                </span>
                <div className="flex items-center justify-center px-[5px] py-[2px] bg-blue-50 rounded text-xs text-blue-500">
                  {consultation.status}
                </div>
              </div>
              <div className="text-sm text-gray-800">{consultation.time}</div>
            </div>
            <div className="flex items-center gap-[5px] text-xs text-gray-500">
              <span>{consultation.type}</span>
              <div className="w-0.5 h-0.5 bg-gray-500 rounded-full" />
              <span>{consultation.duration}</span>
            </div>
          </div>
        </div>
        {/* 버튼 */}
        <button
          className={mypageStateStyles.consultation.actionButton}
          onClick={onActionClick}
        >
          채팅 바로가기{' '}
        </button>
      </div>
    </div>
  );
}
