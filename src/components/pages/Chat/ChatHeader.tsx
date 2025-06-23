import { ChevronLeft, MoreVertical, Search } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LeaveChatModal from '../../modals/LeaveChatModal';
import ReportExpertModal from '../../modals/ReportExpertModal';
import ReportCompleteModal from '../../modals/ReportCompleteModal';
import Button from '../../common/Button';
import { useChatStore } from '../../../stores/useChatStore';

export default function ChatHeader() {
  const navigation = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [showLeaveModal, setShowLeaveModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showReportCompleteModal, setShowReportCompleteModal] = useState(false);

  const { showSearchInput, setShowSearchInput } = useChatStore();

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex justify-between items-center p-4 border-b relative">
      <div className="flex items-center gap-4">
        <button onClick={() => navigation(-1)}>
          <ChevronLeft size={24} />
        </button>
        <div className="text-lg font-semibold">김희경 전문가</div>
      </div>

      <div className="relative flex items-center gap-2">
        <Search
          size={20}
          className="cursor-pointer"
          onClick={() => setShowSearchInput(!showSearchInput)}
        />
        <button onClick={() => setShowMenu(prev => !prev)}>
          <MoreVertical size={20} />
        </button>

        {showMenu && (
          <div
            ref={menuRef}
            className="absolute right-0 top-full mt-2 w-36 bg-white border rounded-lg shadow-lg z-10"
          >
            <Button
              variant="text2"
              className="w-full text-left px-4 py-2 hover:bg-gray-100 text-b2 font-bold"
              onClick={() => {
                setShowMenu(false);
                setShowLeaveModal(true);
              }}
            >
              채팅방 나가기
            </Button>
            <Button
              variant="text2"
              className="w-full text-left px-4 py-2 hover:bg-gray-100 text-b2 font-bold"
              onClick={() => {
                setShowMenu(false);
                setShowReportModal(true);
              }}
            >
              엑스퍼트 신고하기
            </Button>
          </div>
        )}

        {showLeaveModal && (
          <LeaveChatModal
            onClose={() => setShowLeaveModal(false)}
            onConfirm={() => {
              setShowLeaveModal(false);
              navigation('/');
            }}
          />
        )}

        {showReportModal && (
          <ReportExpertModal
            onClose={() => setShowReportModal(false)}
            onSubmit={selectedReasons => {
              console.log('신고 사유:', selectedReasons);
              setShowReportModal(false);
              setShowReportCompleteModal(true);
            }}
          />
        )}

        {showReportCompleteModal && (
          <ReportCompleteModal
            onClose={() => setShowReportCompleteModal(false)}
            onConfirm={() => {
              setShowReportCompleteModal(false);
              navigation('/');
            }}
          />
        )}
      </div>
    </div>
  );
}
