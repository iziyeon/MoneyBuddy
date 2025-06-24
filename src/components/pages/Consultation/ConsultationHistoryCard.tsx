import type { ConsultationHistory } from '../../../types/consultation';

interface ConsultationHistoryCardProps {
  consultation: ConsultationHistory;
  onClick?: () => void;
}

export default function ConsultationHistoryCard({
  consultation,
  onClick,
}: ConsultationHistoryCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case '예약완료':
        return 'bg-blue-100 text-blue-600';
      case '상담완료':
        return 'bg-green-100 text-green-800';
      case '취소됨':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };

  return (
    <div
      className="flex flex-col items-start p-0 w-[350px] h-[235px] border border-gray-200 rounded cursor-pointer hover:shadow-md transition-shadow"
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="flex flex-col justify-center items-start p-4 gap-2.5 w-[350px] h-[235px] bg-white shadow-sm">
        {/* 헤더 - 전문가명과 상태 */}
        <div className="flex items-center gap-2">
          <span className="text-base font-bold text-black">
            {consultation.expertName}
          </span>
          <div
            className={`px-1 py-0.5 rounded text-xs font-medium ${getStatusColor(
              consultation.status,
            )}`}
          >
            {consultation.status}
          </div>
        </div>

        {/* 구분선 */}
        <div className="w-[318px] h-px bg-gray-200"></div>

        {/* 상담 정보 */}
        <div className="flex items-start gap-3 w-[318px]">
          <span className="w-13 text-sm text-center text-gray-500">
            상담 일자
          </span>
          <span className="flex-1 text-sm text-gray-900">
            {consultation.date}
          </span>
        </div>

        <div className="flex items-start gap-3 w-[318px]">
          <span className="w-13 text-sm text-center text-gray-500">
            상담 시간
          </span>
          <span className="flex-1 text-sm text-gray-900">
            {consultation.time}
          </span>
        </div>

        <div className="flex items-start gap-3 w-[318px]">
          <span className="w-13 text-sm text-center text-gray-500">
            상담 방법
          </span>
          <span className="flex-1 text-sm text-gray-900">
            {consultation.type}
          </span>
        </div>

        <div className="flex items-start gap-3 w-[318px]">
          <span className="w-13 text-sm text-center text-gray-500">
            상담 영역
          </span>
          <span className="flex-1 text-sm text-gray-900">
            {consultation.consultationArea}
          </span>
        </div>

        <div className="flex items-start gap-3 w-[318px]">
          <span className="w-13 text-sm text-center text-gray-500">
            결제 방식
          </span>
          <span className="flex-1 text-sm text-gray-900">
            {consultation.paymentMethod}
          </span>
        </div>

        {/* 구분선 */}
        <div className="w-[318px] h-px bg-gray-200"></div>

        {/* 결제 금액 */}
        <div className="flex justify-between items-center gap-2.5 w-[318px]">
          <span className="text-sm text-center text-gray-900">결제 금액</span>
          <span className="font-bold text-base text-center text-gray-900">
            {consultation.amount.toLocaleString()}원
          </span>
        </div>
      </div>
    </div>
  );
}
