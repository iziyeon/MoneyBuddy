import { CheckCircle } from 'lucide-react';
import BottomSheetModal from '../../common/BottomSheetModal';

interface PaymentCompleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function PaymentCompleteModal({
  isOpen,
  onClose,
  onConfirm,
}: PaymentCompleteModalProps) {
  if (!isOpen) return null;

  return (
    <BottomSheetModal isOpen={isOpen} onClose={onClose} className="h-[216px]">
      <div className="w-full flex flex-col items-center p-5">
        <CheckCircle className="w-12 h-12 text-primary mb-3" />
        <h2 className="text-xl font-bold mb-2">결제 완료</h2>
        <p className="text-gray-600 text-center mb-4">
          상담 결제가 완료되었습니다.
          <br />
          상담 내역은 마이페이지에서 확인하실 수 있습니다.
        </p>

        <div className="w-full mt-2">
          <button
            onClick={onConfirm}
            className="w-full bg-primary text-white py-3 rounded-md text-center"
          >
            확인
          </button>
        </div>
      </div>
    </BottomSheetModal>
  );
}
