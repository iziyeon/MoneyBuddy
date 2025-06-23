interface RecommendedCardProps {
  imageUrl: string;
}

export default function RecommendedCard({ imageUrl }: RecommendedCardProps) {
  return (
    <div className="mx-5 my-3">
      <h2 className="text-h3 mb-3">오늘의 맞춤 콘텐츠</h2>
      <div className="flex justify-center">
        <img src={imageUrl} />
      </div>
    </div>
  );
}
