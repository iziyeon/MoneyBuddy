import { AlertCircle } from 'lucide-react';
import BottomSheetModal from '../../common/BottomSheetModal';

interface PaymentFailModalProps {
  isOpen: boolean;
  onClose: () => void;
  errorMessage?: string;
}

export default function PaymentFailModal({
  isOpen,
  onClose,
  errorMessage = '결제 중 오류가 발생했습니다.',
}: PaymentFailModalProps) {
  if (!isOpen) return null;

  return (
    <BottomSheetModal isOpen={isOpen} onClose={onClose} className="h-[216px]">
      <div className="w-full flex flex-col items-center p-5">
        <AlertCircle className="w-12 h-12 text-red-500 mb-3" />
        <h2 className="text-xl font-bold mb-2">결제 실패</h2>
        <p className="text-gray-600 text-center mb-4">
          {errorMessage}
          <br />
          다시 시도해주세요.
        </p>

        <div className="w-full mt-2">
          <button
            onClick={onClose}
            className="w-full bg-primary text-white py-3 rounded-md text-center"
          >
            확인
          </button>
        </div>
      </div>
    </BottomSheetModal>
  );
}
