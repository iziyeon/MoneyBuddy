import { http, HttpResponse } from 'msw';
import { API_ENDPOINTS } from '../../../config/api';
import type { MonthlyExpert } from '../../../types/api/expert/expert';

const mockExperts: MonthlyExpert[] = [
  {
    id: 1,
    rank: 1,
    name: '이경순',
    description: '금융을 알기 쉽게 알려주는 금융 전문가',
    tags: ['재무상담', '소비계획'],
    rating: 5.0,
    reviewCount: 50,
    imgUrl: '/images/expert1.png',
  },
  {
    id: 2,
    rank: 2,
    name: '이지선',
    description: '친절하게 미국 투자를 알려드려요',
    tags: ['투자', '저축계획'],
    rating: 4.5,
    reviewCount: 40,
    imgUrl: '/images/expert2.png',
  },
  {
    id: 3,
    rank: 3,
    name: '김용식',
    description: '당신 옆의 든직한 금융 전문가, 김용식',
    tags: ['투자', '저축계획'],
    rating: 4.5,
    reviewCount: 40,
    imgUrl: '/images/expert3.png',
  },
];

export const experthandlers = [
  http.get(API_ENDPOINTS.getMonthlyExperts, () => {
    return HttpResponse.json(mockExperts);
  }),
];
