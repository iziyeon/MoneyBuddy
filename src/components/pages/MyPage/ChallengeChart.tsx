interface ChallengeChartProps {
  percentage: number;
  className?: string;
}

export default function ChallengeChart({
  percentage,
  className = '',
}: ChallengeChartProps) {
  const radius = 35;
  const strokeWidth = 8;
  const circumference = Math.PI * radius; // 반원 둘레
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (circumference * percentage) / 100;

  return (
    <div className={`relative ${className}`}>
      <svg width="80" height="40" viewBox="0 0 80 40" className="transform">
        {/* 배경 반원 */}
        <path
          d="M 8 32 A 32 32 0 0 1 72 32"
          fill="none"
          stroke="#F1F1F1"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        {/* 진행률 반원 */}
        <path
          d="M 8 32 A 32 32 0 0 1 72 32"
          fill="none"
          stroke="#6488FF"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          className="transition-all duration-500 ease-out"
          style={{
            transformOrigin: '40px 32px',
          }}
        />
      </svg>
    </div>
  );
}
