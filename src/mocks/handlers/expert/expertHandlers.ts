import { http, HttpResponse } from 'msw';
import { API_ENDPOINTS } from '../../../config/api';
import { expertData } from '../../../data/expertData';
import type { MonthlyExpert } from '../../../types/api/expert/expert';

// expertData에서 월간 전문가 데이터 생성
const getMonthlyExpertsFromData = (): MonthlyExpert[] => {
  return expertData
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5)
    .map((expert, index) => ({
      id: expert.id,
      rank: index + 1,
      name: expert.nickname,
      description: expert.description,
      tags: expert.hashtags,
      rating: expert.rating,
      reviewCount: expert.review_count,
      imgUrl: expert.profile_image,
      isLiked: false,
    }));
};

export const experthandlers = [
  http.get(API_ENDPOINTS.getMonthlyExperts, () => {
    console.log('🎯 MSW: expertHandlers에서 월간 전문가 데이터 반환');
    return HttpResponse.json(getMonthlyExpertsFromData());
  }),
];
