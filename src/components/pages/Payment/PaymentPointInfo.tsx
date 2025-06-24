import { useState } from 'react';
import { formatCurrency } from '../../../utils';

interface PaymentPointInfoProps {
  availablePoint: number;
  usedPoint: number;
  setUsedPoint: (point: number) => void;
}

export default function PaymentPointInfo({
  availablePoint,
  usedPoint,
  setUsedPoint,
}: PaymentPointInfoProps) {
  const [pointInput, setPointInput] = useState(usedPoint.toString());

  const handlePointChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^\d]/g, '');
    setPointInput(value);

    const numValue = parseInt(value || '0', 10);
    if (numValue > availablePoint) {
      setUsedPoint(availablePoint);
      setPointInput(availablePoint.toString());
    } else {
      setUsedPoint(numValue);
    }
  };

  const handleUseAllPoints = () => {
    setUsedPoint(availablePoint);
    setPointInput(availablePoint.toString());
  };

  return (
    <div className="flex flex-col items-start py-[24px]  gap-[14px] w-[390px] h-[174px]">
      {/* 포인트 사용 타이틀 */}
      <h2 className="w-[350px] h-[20px] font-semibold text-[16px] leading-[20px] tracking-[-0.025em] text-[#111111]">
        포인트 사용
      </h2>

      {/* 구분선 */}
      <div className="w-[350px] h-[1px] bg-[#F1F1F1]"></div>

      {/* 포인트 정보 - 정보와 값의 표시 */}
      <div className="flex flex-row justify-between items-start w-[350px] h-[20px] gap-[14px]">
        <span className="font-semibold text-[14px] leading-[20px] tracking-[-0.025em] text-[#111111]">
          포인트
        </span>
        <div className="flex flex-row items-center gap-[2px]">
          <span className="font-semibold text-[16px] leading-[19px] tracking-[-0.02em] text-[#111111] flex items-center text-center">
            {formatCurrency(availablePoint)}
          </span>
          <span className="font-normal text-[14px] leading-[17px] text-[#777777] flex items-center text-center">
            P
          </span>
        </div>
      </div>

      {/* 포인트 입력 필드 */}
      <div className="box-border flex flex-row justify-end items-center py-[9px] px-[14px] gap-[14px] w-[350px] h-[43px] bg-white border border-[#F1F1F1] rounded-[8px]">
        <div className="flex items-center gap-[4px]">
          <input
            type="text"
            value={pointInput}
            onChange={handlePointChange}
            className="text-right outline-none border-none font-normal text-[14px] leading-[140%] tracking-[-0.025em] text-[#777777]"
            placeholder="0"
          />
          <span className="font-normal text-[14px] leading-[140%] tracking-[-0.025em] text-[#111111]">
            P
          </span>
        </div>

        {/* 전액 사용 버튼 - 디자인 명세에 맞게 정확히 수정 */}
        <button
          onClick={handleUseAllPoints}
          className="box-border flex flex-col items-start py-[2px] px-[8px] gap-[10px] w-[60px] h-[24px] bg-[#F5F5F5] border border-[#F1F1F1] rounded-[4px]"
          type="button"
        >
          <span className="w-[44px] h-[20px] font-semibold text-[12px] leading-[20px] tracking-[-0.025em] text-[#777777]">
            전액 사용
          </span>
        </button>
      </div>
    </div>
  );
}
