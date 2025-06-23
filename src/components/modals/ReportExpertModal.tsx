import { useState } from 'react';
import Button from '../common/Button';

interface ReportExpertModalProps {
  onClose: () => void;
  onSubmit: (selectedReasons: string[]) => void;
}

const reasons = [
  '폭언, 비속어 등 언어 폭력',
  '부정거래 유도',
  '성희롱 및 성추행',
  '장기간 연락 두절',
  '명예 훼손, 사생활 침해 등 권리 침해',
];

export default function ReportExpertModal({
  onClose,
  onSubmit,
}: ReportExpertModalProps) {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleReason = (reason: string) => {
    setSelected(prev =>
      prev.includes(reason)
        ? prev.filter(r => r !== reason)
        : [...prev, reason],
    );
  };

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-end justify-center z-50"
      onClick={onClose}
    >
      <div
        className="w-full rounded-t-2xl bg-white p-6 max-w-screen-md"
        onClick={e => e.stopPropagation()}
      >
        <h2 className="text-h2 mt-2 mb-8">신고 사유</h2>

        <ul className="space-y-10 text-b2 text-[#111111] mb-6">
          {reasons.map((reason, index) => (
            <li key={index} className="flex items-center justify-between">
              <span>{reason}</span>
              <input
                type="checkbox"
                className="accent-[#6488FF] w-6 h-6"
                checked={selected.includes(reason)}
                onChange={() => toggleReason(reason)}
              />
            </li>
          ))}
        </ul>
        <Button
          variant={selected.length > 0 ? 'primary' : 'disabled'}
          disabled={selected.length === 0}
          className="w-full py-2 rounded-md font-semibold text-sm my-2"
          onClick={() => onSubmit(selected)}
        >
          신고하기
        </Button>
      </div>
    </div>
  );
}
