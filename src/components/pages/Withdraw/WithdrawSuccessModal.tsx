import { withdrawStyles } from '../../../styles/withdraw.styles';

interface WithdrawSuccessModalProps {
  isOpen: boolean;
  onConfirm: () => void;
}

export default function WithdrawSuccessModal({
  isOpen,
  onConfirm,
}: WithdrawSuccessModalProps) {
  if (!isOpen) return null;

  return (
    <div className={withdrawStyles.modal.backdrop}>
      <div className={withdrawStyles.modal.container}>
        <div className={withdrawStyles.modal.content}>
          <h3 className={withdrawStyles.modal.title}>그동안 고마웠습니다.</h3>
          <p className={withdrawStyles.modal.description}>
            탈퇴가 완료되었습니다.
          </p>
        </div>

        <button
          onClick={onConfirm}
          className={withdrawStyles.modal.successButton}
        >
          <span className={withdrawStyles.modal.successButtonText}>확인</span>
        </button>
      </div>
    </div>
  );
}
