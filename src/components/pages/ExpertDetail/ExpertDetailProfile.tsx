// C:\project\FE\src\components\pages\ExpertDetail\ExpertDetailProfile.tsx

import React, { useState } from 'react';
import type { Expert } from '../../../types/expert';
import ProfileHeader from './components/ProfileHeader';
import ProfileTabs from './components/ProfileTabs';
import ExpertInfo from './components/ExpertInfo';
import ExpertIntroduction from './components/ExpertIntroduction';
import ExpertSkills from './components/ExpertSkills';
import ExpertCareer from './components/ExpertCareer';
import LectureTab from './components/tabs/LectureTab';
import MagazineTab from './components/tabs/MagazineTab';
import ReviewTab from './components/tabs/ReviewTab';

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
  const [activeTab, setActiveTab] = useState('전문가');

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
    </div>
  );
}
