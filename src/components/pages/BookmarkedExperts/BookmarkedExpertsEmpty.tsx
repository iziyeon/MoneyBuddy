import { useNavigate } from 'react-router-dom';

export default function BookmarkedExpertsEmpty() {
  const navigate = useNavigate();

  const handleExploreExperts = () => {
    navigate('/experts-list');
  };

  return (
    <div className="flex flex-col justify-center items-center px-0 py-20 gap-10 w-[390px] h-[421px] rounded-lg">
      {/* 이미지와 텍스트 프레임 */}
      <div className="flex flex-col items-center gap-3 w-[310px] h-[175px]">
        {' '}
        {/* 동전 이미지 */}
        <div className="w-[119px] h-[123px] mb-3">
          <img
            src="/jpg/icon/none.png"
            alt="좋아요한 엑스퍼트 없음"
            className="w-full h-full object-contain"
          />
        </div>
        {/* 텍스트 */}
        <div className="w-[310px] h-10 font-pretendard font-semibold text-sm leading-[140%] text-center tracking-[-0.025em] text-[#777777]">
          좋아요한 엑스퍼트가 없어요,
          <br />
          지금 엑스퍼트를 둘러보아요
        </div>
      </div>

      {/* 버튼 */}
      <button
        onClick={handleExploreExperts}
        className="box-border flex flex-row justify-center items-center py-[14px] px-[22px] gap-[10px] w-[310px] h-[46px] bg-white border border-[#6790FF] backdrop-blur-[8px] rounded-[4px] transition-colors hover:bg-gray-50"
      >
        <span className="w-[112px] h-4 font-pretendard font-semibold text-base leading-4 text-center tracking-[-0.025em] text-[#6488FF]">
          엑스퍼트 보러가기
        </span>
      </button>
    </div>
  );
}
