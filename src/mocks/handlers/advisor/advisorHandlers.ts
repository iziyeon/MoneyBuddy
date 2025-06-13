import { http, HttpResponse } from 'msw';
import { API_ENDPOINTS } from '../../../config/api';
import { expertData } from '../../../data/expertData';
import type { ExpertListResponse } from '../../../services/experts/expertApi';

export const advisorHandlers = [
  // 전문가 목록 조회
  http.get(API_ENDPOINTS.advisors, ({ request }) => {
    const url = new URL(request.url);
    const category_id = url.searchParams.get('category_id');
    const is_online = url.searchParams.get('is_online');
    const sort = url.searchParams.get('sort');
    const page = parseInt(url.searchParams.get('page') || '1');
    const limit = parseInt(url.searchParams.get('limit') || '10');

    let filtered = [...expertData];

    // 카테고리 필터링
    if (category_id) {
      const categoryMap: Record<string, string> = {
        '1': '소비',
        '2': '지역',
        '3': '투자',
        '4': '부채',
        '5': '기타',
      };
      const categoryName = categoryMap[category_id];
      if (categoryName) {
        filtered = filtered.filter(expert => expert.field === categoryName);
      }
    }

    // 온라인 여부 필터링
    if (is_online) {
      filtered = filtered.filter(
        expert => expert.is_online === (is_online === 'true'),
      );
    }

    // 정렬
    if (sort) {
      const [field, order] = sort.split(',');
      filtered.sort((a, b) => {
        let aValue: number | string, bValue: number | string;

        switch (field) {
          case 'rating':
            aValue = a.rating;
            bValue = b.rating;
            break;
          case 'price':
            aValue = a.price;
            bValue = b.price;
            break;
          case 'review_count':
            aValue = a.review_count;
            bValue = b.review_count;
            break;
          case 'consultation_count':
            aValue = a.consultation_count;
            bValue = b.consultation_count;
            break;
          case 'bookmarks':
            aValue = a.bookmarks;
            bValue = b.bookmarks;
            break;
          case 'nickname':
            aValue = a.nickname;
            bValue = b.nickname;
            return order === 'desc'
              ? bValue.localeCompare(aValue)
              : aValue.localeCompare(bValue);
          case 'created_at':
          default:
            aValue = a.id; // ID를 생성일 대용으로 사용
            bValue = b.id;
            break;
        }

        return order === 'desc'
          ? (bValue as number) - (aValue as number)
          : (aValue as number) - (bValue as number);
      });
    }

    // 페이지네이션
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedData = filtered.slice(startIndex, endIndex);
    const hasMore = endIndex < filtered.length;

    const response: ExpertListResponse = {
      advisors: paginatedData,
      total: filtered.length,
      page,
      limit,
      hasMore,
    };

    return HttpResponse.json(response);
  }),

  // 전문가 상세 조회
  http.get(`${API_ENDPOINTS.advisors}/:id`, ({ params }) => {
    const id = Number(params.id);
    const expert = expertData.find(e => e.id === id);

    if (!expert) {
      return HttpResponse.json(
        { message: '전문가를 찾을 수 없습니다.' },
        { status: 404 },
      );
    }

    return HttpResponse.json(expert);
  }),

  // 카테고리 목록 조회
  http.get(API_ENDPOINTS.categories, () => {
    const categories = [
      { id: 1, name: '소비', description: '소비 관리 및 절약' },
      { id: 2, name: '지역', description: '부동산 및 지역 투자' },
      { id: 3, name: '투자', description: '주식 및 투자 상품' },
      { id: 4, name: '부채', description: '부채 관리 및 상환' },
      { id: 5, name: '기타', description: '기타 재무 상담' },
    ];

    return HttpResponse.json(categories);
  }),

  // 북마크 토글
  http.post('/api/v1/bookmarks/:advisorId', ({ params }) => {
    console.log('북마크 핸들러 호출됨:', params);
    const advisorId = Number(params.advisorId);
    const expert = expertData.find(e => e.id === advisorId);

    if (!expert) {
      console.log('전문가를 찾을 수 없음:', advisorId);
      return HttpResponse.json(
        { message: '전문가를 찾을 수 없습니다.' },
        { status: 404 },
      );
    }

    console.log('북마크 토글 성공:', expert.nickname);
    return HttpResponse.json({ bookmarked: true });
  }),

  // 북마크 목록 조회
  http.get(API_ENDPOINTS.bookmarks, () => {
    // Mock에서는 처음 5개 전문가를 북마크된 것으로 가정
    const bookmarkedExperts = expertData.slice(0, 5);
    return HttpResponse.json(bookmarkedExperts);
  }),
];
