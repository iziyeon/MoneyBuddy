import { formatCurrency } from '../../../utils';

interface PaymentPriceInfoProps {
  price: number;
  usedPoint: number;
  totalPrice: number;
}

export default function PaymentPriceInfo({
  price,
  usedPoint,
  totalPrice,
}: PaymentPriceInfoProps) {
  return (
    <div className="flex flex-col items-start py-[24px] gap-[14px] w-[390px]">
      {/* 결제 금액 타이틀 */}
      <h2 className="w-[350px] h-[20px] font-semibold text-[16px] leading-[20px] tracking-[-0.025em] text-[#111111]">
        결제 금액
      </h2>

      {/* 구분선 */}
      <div className="w-[350px] h-[1px] bg-[#F1F1F1]"></div>

      {/* 상담 가격 행 */}
      <div className="flex flex-row justify-between items-start w-[350px] h-[20px] gap-[14px]">
        <span className="font-semibold text-[14px] leading-[20px] tracking-[-0.025em] text-[#111111]">
          상담 가격
        </span>
        <div className="flex flex-row items-center gap-[2px]">
          <span className="font-semibold text-[16px] leading-[19px] tracking-[-0.02em] text-[#111111] flex items-center text-center">
            {formatCurrency(price)}
          </span>
          <span className="font-normal text-[14px] leading-[17px] text-[#777777] flex items-center text-center">
            원
          </span>
        </div>
      </div>

      {/* 포인트 사용 행 - 포인트 사용 시에만 표시 */}
      {usedPoint > 0 && (
        <div className="flex flex-row justify-between items-start w-[350px] h-[20px] gap-[14px]">
          <span className="font-semibold text-[14px] leading-[20px] tracking-[-0.025em] text-[#111111]">
            포인트 사용
          </span>
          <div className="flex flex-row items-center gap-[2px]">
            <span className="font-semibold text-[16px] leading-[19px] tracking-[-0.02em] text-[#111111] flex items-center text-center">
              - {formatCurrency(usedPoint)}
            </span>
            <span className="font-normal text-[14px] leading-[17px] text-[#777777] flex items-center text-center">
              P
            </span>
          </div>
        </div>
      )}

      {/* 총 결제 금액 행 */}
      <div className="flex flex-row justify-between items-center w-[350px] h-[24px] gap-[14px]">
        <span className="font-semibold text-[14px] leading-[20px] tracking-[-0.025em] text-[#111111]">
          총 결제 금액
        </span>
        <div className="flex flex-row items-center gap-[2px]">
          <span className="font-semibold text-[20px] leading-[24px] tracking-[-0.02em] text-[#111111] flex items-center text-center">
            {formatCurrency(totalPrice)}
          </span>
          <span className="font-normal text-[14px] leading-[17px] text-[#777777] flex items-center text-center">
            원
          </span>
        </div>
      </div>
    </div>
  );
}
