import { withdrawStyles } from '../../../styles/withdraw.styles';

interface WithdrawConfirmModalProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function WithdrawConfirmModal({
  isOpen,
  onCancel,
  onConfirm,
}: WithdrawConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className={withdrawStyles.modal.backdrop}>
      <div className={withdrawStyles.modal.container}>
        <div className={withdrawStyles.modal.content}>
          <h3 className={withdrawStyles.modal.title}>
            정말로 탈퇴하시겠습니까?
          </h3>
          <p className={withdrawStyles.modal.description}>
            탈퇴후, 모든 개인데이터는 복구할 수 없습니다.
          </p>
        </div>

        <div className={withdrawStyles.modal.buttonGroup}>
          <button
            onClick={onCancel}
            className={withdrawStyles.modal.modalCancelButton}
          >
            <span className={withdrawStyles.modal.modalButtonText}>아니오</span>
          </button>

          <button
            onClick={onConfirm}
            className={withdrawStyles.modal.modalConfirmButton}
          >
            <span className={withdrawStyles.modal.modalButtonText}>
              탈퇴하기
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
