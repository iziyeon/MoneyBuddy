// C:\project\FE\src\components\pages\ExpertDetail\components\FixedBottom.tsx

import React from 'react';
import { Heart } from 'lucide-react';

interface FixedBottomProps {
  localBookmarkState: boolean;
  handleLikeClick: (e: React.MouseEvent) => void;
}

export default function FixedBottom({
  localBookmarkState,
  handleLikeClick,
}: FixedBottomProps) {
  return (
    <div className="w-full bg-white border-t border-gray-200 py-4 px-5 flex items-center justify-between">
      <button
        onClick={handleLikeClick}
        className="flex flex-col items-center justify-center"
      >
        <Heart
          size={24}
          className={
            localBookmarkState ? 'fill-red-500 text-red-500' : 'text-gray-500'
          }
        />
        <span className="text-xs text-gray-500 mt-1">북마크</span>
      </button>
      <button className="flex-1 ml-4 bg-primary text-white py-3 rounded font-medium">
        지금 상담하기
      </button>
    </div>
  );
}
