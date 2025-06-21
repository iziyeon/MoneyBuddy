interface BannerSectionProps {
  onBannerClick: () => void;
}

export default function BannerSection({ onBannerClick }: BannerSectionProps) {
  return (
    <div
      className="relative w-[350px] h-[60px] bg-[#D4DFFF] rounded cursor-pointer overflow-hidden"
      onClick={onBannerClick}
    >
      <img
        src="/jpg/icon/Banner.png"
        alt="금융 전문가 상담"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
