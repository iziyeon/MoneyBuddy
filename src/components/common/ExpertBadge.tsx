import { ShieldCheck } from 'lucide-react';

export default function ExpertBadge() {
  return (
    <span className="inline-flex items-center px-2.5 py-1 bg-[#6488FF] text-white text-xs font-semibold rounded-lg">
      <ShieldCheck size={14} className="mr-1 -mt-[1px]" />
      엑스퍼트
    </span>
  );
}
