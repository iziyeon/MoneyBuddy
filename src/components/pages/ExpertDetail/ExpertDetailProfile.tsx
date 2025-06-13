// C:\project\FE\src\components\pages\ExpertDetail\ExpertDetailProfile.tsx

import React, { useState } from 'react';
import type { Expert } from '../../../types/expert';
import { useToggleBookmark } from '../../../hooks/useBookmarks';
import { COMMA_NUMBER_FORMAT } from '../../../utils';
import ProfileHeader from './components/ProfileHeader';
import ProfileTabs from './components/ProfileTabs';
import ExpertInfo from './components/ExpertInfo';
import ExpertIntroduction from './components/ExpertIntroduction';
import ExpertSkills from './components/ExpertSkills';
import ExpertCareer from './components/ExpertCareer';
import LectureTab from './components/tabs/LectureTab';
import MagazineTab from './components/tabs/MagazineTab';
import ReviewTab from './components/tabs/ReviewTab';
import FixedBottom from './components/FixedBottom';

interface ExpertDetailProfileProps {
  expert: Expert & {
    skills?: string[];
    education?: string[];
    career?: string[];
    contact_hours?: string;
    response_time?: string;
    consultation_formats?: string[];
  };
  isBookmarked?: boolean;
}

export default function ExpertDetailProfile({
  expert,
  isBookmarked = false,
}: ExpertDetailProfileProps) {
  const [localBookmarkState, setLocalBookmarkState] = useState(isBookmarked);
  const [activeTab, setActiveTab] = useState('전문가');
  const toggleBookmarkMutation = useToggleBookmark();

  const handleLikeClick = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      setLocalBookmarkState(!localBookmarkState);
      await toggleBookmarkMutation.mutateAsync(expert.id);
    } catch (error) {
      setLocalBookmarkState(localBookmarkState);
      console.error('좋아요 토글 실패:', error);
    }
  };

  return (
    <div className="relative w-full pb-20">
      <ProfileHeader expert={expert} />
      <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {activeTab === '전문가' && (
        <div className="p-6">
          <ExpertInfo expert={expert} />
          <ExpertIntroduction expert={expert} />
          <ExpertSkills expert={expert} />
          <ExpertCareer expert={expert} />
        </div>
      )}

      {activeTab === '강의' && <LectureTab />}
      {activeTab === '매거진' && <MagazineTab />}
      {activeTab === '후기' && <ReviewTab />}

      <FixedBottom
        localBookmarkState={localBookmarkState}
        handleLikeClick={handleLikeClick}
      />
    </div>
  );
}
