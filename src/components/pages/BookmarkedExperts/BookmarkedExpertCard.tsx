import { useState } from 'react';
import { Heart, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToggleBookmark } from '../../../hooks/useBookmarks';
import { bookmarkedExpertsStyles } from '../../../styles/bookmarkedExperts.styles';
import type { Expert } from '../../../types/expert';

interface BookmarkedExpertCardProps {
  expert: Expert;
  isBookmarked?: boolean;
}

export default function BookmarkedExpertCard({
  expert,
  isBookmarked = true,
}: BookmarkedExpertCardProps) {
  const navigate = useNavigate();
  const [localBookmarkState, setLocalBookmarkState] = useState(isBookmarked);
  const toggleBookmarkMutation = useToggleBookmark();
  const {
    expertCard,
    profileImage,
    cardContent,
    infoContainer,
    nameTagContainer,
    nameHashContainer,
    expertName,
    hashtags,
    description,
    ratingContainer,
    ratingInfo,
    rating,
    reviewCount,
    likeButton,
  } = bookmarkedExpertsStyles;

  const handleCardClick = () => {
    navigate(`/experts/${expert.id}`);
  };

  const handleLikeClick = async (e: React.MouseEvent) => {
    e.stopPropagation();

    try {
      setLocalBookmarkState(!localBookmarkState);
      await toggleBookmarkMutation.mutateAsync(expert.id);
    } catch (error) {
      setLocalBookmarkState(localBookmarkState);
      console.error('북마크 토글 실패:', error);
    }
  };

  return (
    <div
      className={expertCard}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
    >
      {/* 프로필 이미지 */}
      <div
        className={profileImage}
        style={{ backgroundImage: `url(${expert.profile_image})` }}
      />

      {/* 카드 내용 */}
      <div className={cardContent}>
        <div className={infoContainer}>
          <div className={nameTagContainer}>
            {/* 이름과 해시태그 */}
            <div className={nameHashContainer}>
              <span className={expertName}>{expert.nickname}</span>
              <span className={hashtags}>
                {expert.hashtags.map(tag => `#${tag}`).join(' ')}
              </span>
            </div>

            {/* 설명 */}
            <div className={description}>{expert.description}</div>
          </div>

          {/* 평점 정보 */}
          <div className={ratingContainer}>
            <Star size={10} className="text-[#FF7497] fill-[#FF7497]" />
            <div className={ratingInfo}>
              <span className={rating}>{expert.rating.toFixed(1)}</span>
              <span className={reviewCount}>({expert.review_count})</span>
            </div>
          </div>
        </div>

        {/* 좋아요 버튼 */}
        <button
          onClick={handleLikeClick}
          className={likeButton}
          aria-label="좋아요"
        >
          <Heart
            size={20}
            className={
              localBookmarkState
                ? 'fill-[#FF373A] text-[#FF373A]'
                : 'text-gray-400'
            }
          />
        </button>
      </div>
    </div>
  );
}
