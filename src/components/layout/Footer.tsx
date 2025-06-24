import { ChevronDown } from 'lucide-react';
import type { JSX } from 'react';

export default function Footer(): JSX.Element {
  return (
    <div className="bg-[#F6F7F8] px-4 py-5">
      <div className="flex items-center font-bold text-sm text-[#464C52] mb-2">
        <span className="mr-1">(주)머니버디 사업자정보</span>
        <ChevronDown size={16} />
      </div>

      <div className="flex flex-wrap gap-x-2 text-b3 text-[#9FA4A9]">
        <span>서비스 이용약관</span>
        <span>|</span>
        <span>개인정보 처리방침</span>
        <span>|</span>
        <span>위치기반서비스 이용약관</span>
      </div>
    </div>
  );
}
