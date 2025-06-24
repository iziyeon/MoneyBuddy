import { AlertCircle } from 'lucide-react';
import type { JSX } from 'react';

export default function ReservationNotice(): JSX.Element {
  return (
    <div className="bg-[#F5F5F5] px-4 py-3 my-4  text-[#777777]">
      <div className="flex items-start gap-2 mb-1">
        <AlertCircle size={14} className="mt-[2px] text-[#9C9C9C]" />
        <div className="text-b3">
          선택한 고민, 금융 및 경제 관련 외의 상담은 반려될 수 있습니다.
        </div>
      </div>
      <div className="flex items-start gap-2">
        <AlertCircle size={14} className="mt-[2px] text-[#9C9C9C]" />
        <div className="text-b3">
          욕설, 비방, 그 외 상담에 적합하지 않은 내용은 취소될 수 있습니다.
        </div>
      </div>
    </div>
  );
}
