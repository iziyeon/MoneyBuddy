import { useState } from 'react';
import { paymentStyles } from '../../../styles/payment.styles';
import PhoneInputModal from './PhoneInputModal';

interface PaymentContactInfoProps {
  phone: string;
  setPhone: (phone: string) => void;
  isSameAsUser: boolean;
  setIsSameAsUser: (value: boolean) => void;
}

export default function PaymentContactInfo({
  phone,
  setPhone,
  isSameAsUser,
  setIsSameAsUser,
}: PaymentContactInfoProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePhoneUpdate = (newPhone: string) => {
    setPhone(newPhone);
    setIsModalOpen(false);
  };

  return (
    <div className={paymentStyles.pageSection}>
      <div className="box-border flex flex-col items-start p-[14px] gap-[10px] w-[350px] h-[112px] border border-[#F1F1F1] rounded-[4px]">
        <h2 className="w-[322px] h-[20px] font-semibold text-[16px] leading-[20px] tracking-[-0.025em] text-[#111111]">
          연락처
        </h2>

        <div className="flex flex-row justify-between items-center p-0 gap-[122px] w-[322px] h-[24px]">
          <span className="w-[112px] h-[19px] font-normal text-[16px] leading-[19px] tracking-[-0.025em] text-[#111111]">
            {phone}
          </span>
          <button
            onClick={() => setIsModalOpen(true)}
            className="box-border flex flex-col items-start py-[2px] px-[8px] gap-[10px] w-[60px] h-[24px] bg-[#F5F5F5] border border-[#F1F1F1] rounded-[4px]"
            type="button"
          >
            <span className="w-[44px] h-[20px] font-semibold text-[12px] leading-[20px] tracking-[-0.025em] text-[#777777]">
              번호 변경
            </span>
          </button>
        </div>

        {/* 안심번호 체크박스 - 명세에 맞게 정확하게 구현 */}
        <div className="flex flex-row items-center p-0 gap-[7px] w-[322px] h-[20px]">
          <div className="relative w-[20px] h-[20px]">
            <input
              type="checkbox"
              id="safeNumber"
              checked={isSameAsUser}
              onChange={e => setIsSameAsUser(e.target.checked)}
              className="custom-checkbox"
            />
          </div>
          <label
            htmlFor="safeNumber"
            className="w-[84px] h-[14px] font-normal text-[12px] leading-[14px] tracking-[-0.025em] text-[#777777] cursor-pointer"
          >
            안심번호 사용하기
          </label>
        </div>
      </div>

      <PhoneInputModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handlePhoneUpdate}
        currentPhoneNumber={phone}
      />
    </div>
  );
}
