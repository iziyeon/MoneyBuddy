import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BookmarkedExpertsHeaderProps {
  title: string;
}

export default function BookmarkedExpertsHeader({
  title,
}: BookmarkedExpertsHeaderProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="w-[390px] h-[56px] bg-white shadow-[0px_1px_4px_rgba(0,0,0,0.04)] rounded-b-[6px]">
      <div className="relative w-full h-full">
        <button
          onClick={handleBack}
          className="absolute left-[20px] top-1/2 -translate-y-1/2 w-[24px] h-[24px] flex items-center justify-center"
          aria-label="뒤로 가기"
        >
          <ChevronLeft size={24} strokeWidth={2} className="text-[#111111]" />
        </button>

        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140px] h-[28px] font-pretendard font-semibold text-[20px] leading-[28px] text-center tracking-[-0.025em] text-black">
          {title}
        </h1>
      </div>
    </div>
  );
}
