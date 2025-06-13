import { http, HttpResponse } from 'msw';
import { API_ENDPOINTS } from '../../../config/api';
import { expertData } from '../../../data/expertData';
import type { ExpertListResponse } from '../../../services/experts/expertApi';

export const advisorHandlers = [
  // 전문가 목록 조회
  http.get(API_ENDPOINTS.advisors, ({ request }) => {
    try {
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
    } catch (error) {
      console.error('❌ MSW - 전문가 목록 처리 오류:', error);
      return new HttpResponse(
        JSON.stringify({
          message: '서버 오류가 발생했습니다.',
          details: error instanceof Error ? error.message : '알 수 없는 오류',
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } },
      );
    }
  }),

  // 전문가 상세 조회 - 단순화하여 MSW 오류 예방
  http.get(`${API_ENDPOINTS.advisors}/:id`, () => {
    // 항상 성공하는 기본 응답 반환 (MSW 오류 방지를 위해)
    const mockExpert = expertData[0];

    // 추가 정보를 포함한 전문가 데이터 확장
    const enhancedExpert = {
      ...mockExpert,
      skills: ['디지털 소비 분석', '예산 관리', '재정 계획'],
      education: ['서울대학교 경영학과', 'CFA Level 3'],
      career: ['금융투자협회 10년', '재무상담사 5년'],
      contact_hours: '평일 10:00 - 19:00',
      response_time: '평균 2시간 이내',
      consultation_formats: ['채팅', '화상', '이메일'],
    };

    // 성공 응답 반환
    return HttpResponse.json(enhancedExpert, { status: 200 });
  }),

  // 카테고리 목록 조회
  http.get(API_ENDPOINTS.categories, () => {
    try {
      const categories = [
        { id: 1, name: '소비', description: '소비 관리 및 절약' },
        { id: 2, name: '지역', description: '부동산 및 지역 투자' },
        { id: 3, name: '투자', description: '주식 및 투자 상품' },
        { id: 4, name: '부채', description: '부채 관리 및 상환' },
        { id: 5, name: '기타', description: '기타 재무 상담' },
      ];

      return HttpResponse.json(categories);
    } catch (error) {
      console.error('❌ MSW - 카테고리 목록 조회 오류:', error);
      return new HttpResponse(
        JSON.stringify({ message: '서버 오류가 발생했습니다.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } },
      );
    }
  }),

  // 북마크 토글
  http.post('/api/v1/bookmarks/:advisorId', ({ params }) => {
    try {
      const advisorId = Number(params.advisorId);
      const expert = expertData.find(e => e.id === advisorId);

      if (!expert) {
        return HttpResponse.json(
          { message: '전문가를 찾을 수 없습니다.' },
          { status: 404 },
        );
      }

      console.log('북마크 토글 성공:', expert.nickname);
      return HttpResponse.json({ bookmarked: true });
    } catch (error) {
      console.error('❌ MSW - 북마크 토글 오류:', error);
      return new HttpResponse(
        JSON.stringify({ message: '서버 오류가 발생했습니다.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } },
      );
    }
  }),

  // 북마크 목록 조회
  http.get(API_ENDPOINTS.bookmarks, () => {
    try {
      // Mock에서는 처음 5개 전문가를 북마크된 것으로 가정
      const bookmarkedExperts = expertData.slice(0, 5);
      return HttpResponse.json(bookmarkedExperts);
    } catch (error) {
      console.error('❌ MSW - 북마크 목록 조회 오류:', error);
      return new HttpResponse(
        JSON.stringify({ message: '서버 오류가 발생했습니다.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } },
      );
    }
  }),
];
