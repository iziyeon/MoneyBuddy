import Button from '../common/Button';

interface LeaveChatModalProps {
  onClose: () => void;
  onConfirm: () => void;
}

export default function LeaveChatModal({
  onClose,
  onConfirm,
}: LeaveChatModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-[320px] px-6 py-8 text-center shadow-lg"
        onClick={e => e.stopPropagation()}
      >
        <div className="text-h2 text-[#1A1A1A] mb-2">
          정말로 나가시겠습니까?
        </div>
        <p className="text-b2 text-[#9C9C9C] mb-6 leading-relaxed">
          채팅방을 나가게 되면,
          <br />
          이전 대화 내용이 모두 사라집니다.
        </p>

        <div className="flex justify-between gap-3">
          <Button
            variant="text"
            className="flex-1 py-3 border border-[#6488FF] rounded text-b1 font-semibold"
            onClick={onClose}
          >
            계속 채팅하기
          </Button>
          <Button
            variant="text"
            className="flex-1 py-3 border border-[#6488FF] rounded text-b1 font-semibold"
            onClick={onConfirm}
          >
            채팅 나가기
          </Button>
        </div>
      </div>
    </div>
  );
}
