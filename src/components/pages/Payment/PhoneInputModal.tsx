import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { formatPhoneNumber } from '../../../utils';
import { paymentStyles } from '../../../styles/payment.styles';
import BottomSheetModal from '../../common/BottomSheetModal';

interface PhoneInputModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (phoneNumber: string) => void;
  currentPhoneNumber?: string;
}

interface FormValues {
  phoneNumber: string;
}

export default function PhoneInputModal({
  isOpen,
  onClose,
  onSubmit,
  currentPhoneNumber = '',
}: PhoneInputModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormValues>({
    defaultValues: {
      phoneNumber: currentPhoneNumber,
    },
  });

  const [phoneError, setPhoneError] = useState('');
  const phoneNumber = watch('phoneNumber');

  // 버튼 활성화 상태 관리
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  // 전화번호 입력값 변경시 버튼 활성화 상태 체크
  useEffect(() => {
    // 전화번호가 비어있거나 현재 번호와 동일하면 버튼 비활성화
    const isEmpty = !phoneNumber || phoneNumber.trim() === '';
    const isUnchanged = phoneNumber === currentPhoneNumber;
    const isInvalid = !!phoneError;

    setIsButtonDisabled(isEmpty || isUnchanged || isInvalid);
  }, [phoneNumber, currentPhoneNumber, phoneError]);

  const validateAndSubmit = (data: FormValues) => {
    // 한국 휴대폰 번호 형식 검사 (01X-XXX(X)-XXXX)
    // 010, 011, 016, 017, 018, 019 모두 허용
    const phoneRegex = /^01[0-9]-\d{3,4}-\d{4}$/;
    if (!phoneRegex.test(data.phoneNumber)) {
      setPhoneError('올바른 전화번호 형식이 아닙니다.');
      return;
    }

    onSubmit(data.phoneNumber);
    onClose();
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedNumber = formatPhoneNumber(e.target.value);
    setValue('phoneNumber', formattedNumber);
    setPhoneError('');
  };

  if (!isOpen) return null;

  return (
    <BottomSheetModal isOpen={isOpen} onClose={onClose} className="h-[216px]">
      <div className="w-full p-5">
        <h2 className="text-lg font-semibold mb-4">연락처 변경</h2>

        <form onSubmit={handleSubmit(validateAndSubmit)} className="w-full">
          <div className="mb-4">
            <input
              {...register('phoneNumber', { required: true })}
              onChange={handlePhoneChange}
              placeholder="010-0000-0000"
              className={paymentStyles.input}
              type="tel"
              autoFocus
            />
            {(errors.phoneNumber || phoneError) && (
              <p className="text-red-500 text-sm mt-1">
                {phoneError || '전화번호를 입력해주세요'}
              </p>
            )}
          </div>

          <div className="mt-4">
            <button
              type="submit"
              disabled={isButtonDisabled}
              className={`w-full py-3 rounded-md text-center ${
                isButtonDisabled
                  ? 'bg-gray-300 text-white cursor-not-allowed'
                  : 'bg-primary text-white'
              }`}
            >
              변경하기
            </button>
          </div>
        </form>
      </div>
    </BottomSheetModal>
  );
}
