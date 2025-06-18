import React, { useEffect, useRef } from 'react';

interface BottomSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

/**
 * 바텀시트 모달 컴포넌트
 * 하단에서 올라오는 모달 형태로 표시됩니다.
 */
export default function BottomSheetModal({
  isOpen,
  onClose,
  children,
  className = '',
}: BottomSheetModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // 배경 클릭시 닫기
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // ESC 키 눌렀을 때 닫기
  useEffect(() => {
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscKey);
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  // 모달이 열릴 때 body 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div
        ref={modalRef}
        className={`
          w-[390px] 
          flex flex-col 
          items-start 
          bg-white 
          shadow-[0px_-4px_4px_rgba(0,0,0,0.05)] 
          rounded-t-[8px] 
          animate-slide-up
          ${className}
        `}
        onClick={e => e.stopPropagation()}
        style={{
          maxHeight: '90vh',
          transform: 'translateZ(0)', // 모바일 렌더링 성능 향상
        }}
      >
        {/* 드래그 핸들 */}
        <div className="w-full flex justify-center py-2">
          <div className="w-10 h-1 bg-gray-300 rounded-full"></div>
        </div>

        {children}
      </div>
    </div>
  );
}
