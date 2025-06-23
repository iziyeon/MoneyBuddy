import Button from '../common/Button';

interface ReportCompleteModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

export default function ReportCompleteModal({
  onClose,
  onConfirm,
}: ReportCompleteModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-[320px] px-6 py-8 text-center shadow-lg"
        onClick={e => e.stopPropagation()}
      >
        <div className="text-h2 text-[#1A1A1A] mb-2">신고 완료</div>

        <p className="text-b2 text-[#9C9C9C] mb-6">
          이용에 불편을 드려 죄송합니다.
        </p>

        <Button variant="primary" className="w-full py-2" onClick={onConfirm}>
          채팅방 나가기
        </Button>
      </div>
    </div>
  );
}
