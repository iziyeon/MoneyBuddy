import { http, HttpResponse } from 'msw';
import { API_ENDPOINTS } from '../../../config/api';
import { expertData } from '../../../data/expertData';

// ExpertListResponse 타입을 직접 정의
interface ExpertListResponse {
  advisors: typeof expertData;
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export const advisorHandlers = [
  // 전문가 목록 조회 - 명세서 준수 (GET /api/v1/advisors)
  http.get(API_ENDPOINTS.advisors, ({ request }) => {
    try {
      const url = new URL(request.url);
      const category_id = url.searchParams.get('category_id');
      const is_online = url.searchParams.get('is_online');
      const sort = url.searchParams.get('sort');
      const keyword = url.searchParams.get('keyword');
      const page = parseInt(url.searchParams.get('page') || '0');
      const size = parseInt(url.searchParams.get('size') || '10');

      let filtered = [...expertData];

      // 카테고리 필터링
      if (category_id) {
        const categoryMap: Record<string, string> = {
          '1': '소비',
          '2': '저축',
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

      // 키워드 검색
      if (keyword) {
        filtered = filtered.filter(
          expert =>
            expert.nickname.includes(keyword) ||
            expert.description.includes(keyword) ||
            expert.hashtags.some(tag => tag.includes(keyword)),
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
              aValue = a.bookmarks || 0;
              bValue = b.bookmarks || 0;
              break;
            case 'nickname':
              aValue = a.nickname;
              bValue = b.nickname;
              break;
            default:
              aValue = a.id;
              bValue = b.id;
          }

          if (typeof aValue === 'string' && typeof bValue === 'string') {
            return order === 'desc'
              ? bValue.localeCompare(aValue)
              : aValue.localeCompare(bValue);
          }

          return order === 'desc'
            ? (bValue as number) - (aValue as number)
            : (aValue as number) - (bValue as number);
        });
      }

      // 페이지네이션
      const startIndex = page * size;
      const endIndex = startIndex + size;
      const paginatedData = filtered.slice(startIndex, endIndex);
      const hasMore = endIndex < filtered.length;

      const response: ExpertListResponse = {
        advisors: paginatedData,
        total: filtered.length,
        page,
        limit: size,
        hasMore,
      };

      console.log(
        `✅ MSW: 전문가 목록 조회 성공 - ${response.advisors.length}개`,
      );
      return HttpResponse.json(response);
    } catch (error) {
      console.error('❌ MSW: 전문가 목록 조회 실패', error);
      return HttpResponse.json(
        { message: '전문가 목록을 불러오는데 실패했습니다.' },
        { status: 500 },
      );
    }
  }),

  // 전문가 상세 조회 - 명세서 준수 (GET /api/v1/advisors/{advisorId})
  http.get(`${API_ENDPOINTS.advisors}/:id`, ({ params }) => {
    try {
      const expertId = Number(params.id);
      const expert = expertData.find(e => e.id === expertId);

      if (!expert) {
        console.log(`❌ MSW: 전문가를 찾을 수 없음 - ID: ${expertId}`);
        return HttpResponse.json(
          { message: '전문가를 찾을 수 없습니다.' },
          { status: 404 },
        );
      }

      console.log(`✅ MSW: 전문가 상세 조회 성공 - ${expert.nickname}`);
      return HttpResponse.json(expert);
    } catch (error) {
      console.error('❌ MSW: 전문가 상세 조회 실패', error);
      return HttpResponse.json(
        { message: '전문가 정보를 불러오는데 실패했습니다.' },
        { status: 500 },
      );
    }
  }),

  // 카테고리 목록 조회 - 명세서 준수 (GET /api/v1/categories)
  http.get(API_ENDPOINTS.categories, () => {
    const categories = [
      { id: 1, name: '소비', description: '소비 관리 및 절약' },
      { id: 2, name: '저축', description: '저축 및 자산 관리' },
      { id: 3, name: '투자', description: '주식 및 투자 상품' },
      { id: 4, name: '부채', description: '부채 관리 및 상환' },
      { id: 5, name: '기타', description: '기타 재무 상담' },
    ];
    return HttpResponse.json(categories);
  }),

  // 북마크 목록 조회 (프로젝트 전용)
  http.get(API_ENDPOINTS.bookmarks, () => {
    const bookmarkedExperts = expertData.slice(0, 3);
    return HttpResponse.json(bookmarkedExperts);
  }),

  // 북마크 토글 (프로젝트 전용)
  http.post(`${API_ENDPOINTS.bookmarks}/:advisorId`, ({ params }) => {
    const advisorId = Number(params.advisorId);
    const expert = expertData.find(e => e.id === advisorId);

    if (!expert) {
      return HttpResponse.json(
        { message: '전문가를 찾을 수 없습니다.' },
        { status: 404 },
      );
    }

    return HttpResponse.json({
      bookmarked: true,
      message: '북마크가 토글되었습니다.',
    });
  }),

  // 챌린지 전체 조회 - 명세서 준수 (GET /api/v1/challenges)
  http.get(API_ENDPOINTS.challenges, () => {
    try {
      const challenges = [
        {
          id: 1,
          title: '30일 소비 기록 챌린지',
          description: '매일 소비 내용을 기록하고 검토하는 습관 만들기',
          createdAt: '2025-06-19T12:00:00',
        },
        {
          id: 2,
          title: '저축 목표 달성 챌린지',
          description: '월간 저축 목표를 설정하고 달성하기',
          createdAt: '2025-06-18T12:00:00',
        },
        {
          id: 3,
          title: '투자 공부 챌린지',
          description: '주식 투자 기초 공부 30일 완성',
          createdAt: '2025-06-17T12:00:00',
        },
      ];
      console.log('✅ MSW: 챌린지 목록 조회 성공');
      return HttpResponse.json(challenges);
    } catch (error) {
      console.error('❌ MSW: 챌린지 목록 조회 실패', error);
      return HttpResponse.json(
        { message: '챌린지 목록을 불러오는데 실패했습니다.' },
        { status: 500 },
      );
    }
  }),

  // 챌린지 상세 조회 - 명세서 준수 (GET /api/v1/challenges/{id})
  http.get(`${API_ENDPOINTS.challenges}/:id`, ({ params }) => {
    try {
      const challengeId = Number(params.id);
      const challenges = {
        1: {
          id: 1,
          title: '30일 소비 기록 챌린지',
          description: '매일 소비 내용을 기록하고 검토하는 습관 만들기',
          createdAt: '2025-06-19T12:00:00',
          duration: 30,
          participants: 156,
          category: '소비',
        },
        2: {
          id: 2,
          title: '저축 목표 달성 챌린지',
          description: '월간 저축 목표를 설정하고 달성하기',
          createdAt: '2025-06-18T12:00:00',
          duration: 30,
          participants: 89,
          category: '저축',
        },
        3: {
          id: 3,
          title: '투자 공부 챌린지',
          description: '주식 투자 기초 공부 30일 완성',
          createdAt: '2025-06-17T12:00:00',
          duration: 30,
          participants: 234,
          category: '투자',
        },
      };

      const challenge = challenges[challengeId as keyof typeof challenges];
      if (!challenge) {
        console.log(`❌ MSW: 챌린지를 찾을 수 없음 - ID: ${challengeId}`);
        return HttpResponse.json(
          { message: '챌린지를 찾을 수 없습니다.' },
          { status: 404 },
        );
      }

      console.log(`✅ MSW: 챌린지 상세 조회 성공 - ${challenge.title}`);
      return HttpResponse.json(challenge);
    } catch (error) {
      console.error('❌ MSW: 챌린지 상세 조회 실패', error);
      return HttpResponse.json(
        { message: '챌린지 정보를 불러오는데 실패했습니다.' },
        { status: 500 },
      );
    }
  }),

  // 타입별 카테고리 조회 - 명세서 준수 (GET /api/v1/categories/type/{type})
  http.get(`${API_ENDPOINTS.categories}/type/:type`, ({ params }) => {
    try {
      const type = params.type as string;
      const categoryData = {
        INVESTMENT: [{ id: 3, typeDisplayName: '투자', type: 'INVESTMENT' }],
        SAVINGS: [{ id: 2, typeDisplayName: '저축', type: 'SAVINGS' }],
        CONSUMPTION: [{ id: 1, typeDisplayName: '소비', type: 'CONSUMPTION' }],
        DEBT: [{ id: 4, typeDisplayName: '부채', type: 'DEBT' }],
        OTHER: [{ id: 5, typeDisplayName: '기타', type: 'OTHER' }],
      };

      const categories = categoryData[type as keyof typeof categoryData] || [];
      console.log(`✅ MSW: 타입별 카테고리 조회 성공 - ${type}`);
      return HttpResponse.json(categories);
    } catch (error) {
      console.error('❌ MSW: 타입별 카테고리 조회 실패', error);
      return HttpResponse.json(
        { message: '카테고리를 불러오는데 실패했습니다.' },
        { status: 500 },
      );
    }
  }),

  // 카테고리 상세 조회 - 명세서 준수 (GET /api/v1/categories/{categoryId})
  http.get(`${API_ENDPOINTS.categories}/:categoryId`, ({ params }) => {
    try {
      const categoryId = Number(params.categoryId);
      const categories = {
        1: {
          id: 1,
          typeDisplayName: '소비',
          type: 'CONSUMPTION',
          description: '소비 관리 및 절약 상담',
        },
        2: {
          id: 2,
          typeDisplayName: '저축',
          type: 'SAVINGS',
          description: '저축 및 자산 관리 상담',
        },
        3: {
          id: 3,
          typeDisplayName: '투자',
          type: 'INVESTMENT',
          description: '주식 및 투자 상품 상담',
        },
        4: {
          id: 4,
          typeDisplayName: '부채',
          type: 'DEBT',
          description: '부채 관리 및 상환 상담',
        },
        5: {
          id: 5,
          typeDisplayName: '기타',
          type: 'OTHER',
          description: '기타 재무 상담',
        },
      };

      const category = categories[categoryId as keyof typeof categories];
      if (!category) {
        console.log(`❌ MSW: 카테고리를 찾을 수 없음 - ID: ${categoryId}`);
        return HttpResponse.json(
          { message: '카테고리를 찾을 수 없습니다.' },
          { status: 404 },
        );
      }

      console.log(
        `✅ MSW: 카테고리 상세 조회 성공 - ${category.typeDisplayName}`,
      );
      return HttpResponse.json(category);
    } catch (error) {
      console.error('❌ MSW: 카테고리 상세 조회 실패', error);
      return HttpResponse.json(
        { message: '카테고리 정보를 불러오는데 실패했습니다.' },
        { status: 500 },
      );
    }
  }),

  // 메시지 목록 조회 - 명세서 준수 (GET /api/v1/consultation/rooms/{roomId}/messages)
  http.get(
    `${API_ENDPOINTS.consultations}/:roomId/messages`,
    ({ params, request }) => {
      try {
        const roomId = Number(params.roomId);
        const url = new URL(request.url);
        const page = parseInt(url.searchParams.get('page') || '0');
        const size = parseInt(url.searchParams.get('size') || '20');

        // 모의 메시지 데이터
        const messages = [
          {
            id: 1,
            consultationRoomId: roomId,
            senderId: 1,
            senderNickname: '머니버디맨',
            message: '안녕하세요! 상담 잘 부탁드립니다.',
            type: 'TEXT',
            imageUrl: null,
            sentAt: '2025-01-25T10:00:00',
          },
          {
            id: 2,
            consultationRoomId: roomId,
            senderId: 2,
            senderNickname: '박재현',
            message: '네, 안녕하세요! 어떤 것이 궁금하신가요?',
            type: 'TEXT',
            imageUrl: null,
            sentAt: '2025-01-25T10:01:00',
          },
          {
            id: 3,
            consultationRoomId: roomId,
            senderId: 1,
            senderNickname: '머니버디맨',
            message: '투자 관련해서 조언 받고 싶습니다.',
            type: 'TEXT',
            imageUrl: null,
            sentAt: '2025-01-25T10:02:00',
          },
        ];

        // 페이지네이션
        const startIndex = page * size;
        const endIndex = startIndex + size;
        const paginatedMessages = messages.slice(startIndex, endIndex);

        console.log(`✅ MSW: 메시지 목록 조회 성공 - Room ${roomId}`);
        return HttpResponse.json({
          content: paginatedMessages,
          pageable: {
            pageNumber: page,
            pageSize: size,
          },
          totalPages: Math.ceil(messages.length / size),
          totalElements: messages.length,
          hasMore: endIndex < messages.length,
        });
      } catch (error) {
        console.error('❌ MSW: 메시지 목록 조회 실패', error);
        return HttpResponse.json(
          { message: '메시지를 불러오는데 실패했습니다.' },
          { status: 500 },
        );
      }
    },
  ),

  // 상담 목록 조회 - 명세서 준수 (GET /api/v1/consultation/rooms)
  http.get(API_ENDPOINTS.consultations, () => {
    const consultations = [
      {
        id: 1,
        expertName: '박재현',
        date: '2025.01.25',
        time: '10:00',
        status: '예약완료',
      },
    ];
    return HttpResponse.json(consultations);
  }),

  // 상담 상세 조회 - 명세서 준수 (GET /api/v1/consultation/rooms/{roomId}/detail)
  http.get(`${API_ENDPOINTS.consultations}/:roomId/detail`, ({ params }) => {
    const consultation = {
      id: Number(params.roomId),
      expertName: '박재현',
      date: '2025.01.25',
      time: '10:00',
      status: '예약완료',
    };

    console.log(`✅ MSW: 상담 상세 조회 성공 - Room ${consultation.id}`);
    return HttpResponse.json(consultation);
  }),

  // 상담방 나가기 - 명세서 준수 (DELETE /api/v1/consultation/rooms/{roomId}/leave)
  http.delete(`${API_ENDPOINTS.consultations}/:roomId/leave`, ({ params }) => {
    try {
      const roomId = Number(params.roomId);
      console.log(`✅ MSW: 상담방 나가기 성공 - Room ${roomId}`);
      return new HttpResponse(null, { status: 204 });
    } catch (error) {
      console.error('❌ MSW: 상담방 나가기 실패', error);
      return HttpResponse.json(
        { message: '상담방을 나가는데 실패했습니다.' },
        { status: 500 },
      );
    }
  }),

  // 메시지 읽음 처리 - 명세서 준수 (PATCH /api/v1/consultation/rooms/{roomId}/read)
  http.patch(`${API_ENDPOINTS.consultations}/:roomId/read`, ({ params }) => {
    try {
      const roomId = Number(params.roomId);
      console.log(`✅ MSW: 메시지 읽음 처리 성공 - Room ${roomId}`);
      return new HttpResponse(null, { status: 204 });
    } catch (error) {
      console.error('❌ MSW: 메시지 읽음 처리 실패', error);
      return HttpResponse.json(
        { message: '메시지 읽음 처리에 실패했습니다.' },
        { status: 500 },
      );
    }
  }),

  // 상담 상태 변경 - 명세서 준수 (PATCH /api/v1/consultation/rooms/{id}/status)
  http.patch(
    `${API_ENDPOINTS.consultations}/:roomId/status`,
    async ({ params, request }) => {
      try {
        const roomId = Number(params.roomId);
        const body = (await request.json()) as { status: string };

        console.log(
          `✅ MSW: 상담 상태 변경 성공 - Room ${roomId}, Status: ${body.status}`,
        );
        return new HttpResponse(null, { status: 204 });
      } catch (error) {
        console.error('❌ MSW: 상담 상태 변경 실패', error);
        return HttpResponse.json(
          { message: '상담 상태 변경에 실패했습니다.' },
          { status: 500 },
        );
      }
    },
  ),

  // 이미지 업로드 - 명세서 준수 (POST /api/v1/consultation/{consultationRoomId}/image)
  http.post(`/api/v1/consultation/:roomId/image`, async ({ params }) => {
    try {
      const roomId = Number(params.roomId);

      // 모의 이미지 URL 반환
      const imageUrl = `https://moneytalk-s3.s3.ap-northeast-2.amazonaws.com/chat-images/room-${roomId}-${Date.now()}.jpg`;

      console.log(`✅ MSW: 이미지 업로드 성공 - Room ${roomId}`);
      return HttpResponse.json({ imageUrl });
    } catch (error) {
      console.error('❌ MSW: 이미지 업로드 실패', error);
      return HttpResponse.json(
        { message: '이미지 업로드에 실패했습니다.' },
        { status: 500 },
      );
    }
  }),

  // 상담 채팅방 생성 - 명세서 준수 (POST /api/v1/consultation/rooms)
  http.post(API_ENDPOINTS.consultations, async ({ request }) => {
    try {
      await request.json(); // 요청 본문은 읽지만 사용하지 않음

      // 새로운 채팅방 ID 생성
      const newRoomId = 1001 + Math.floor(Math.random() * 1000);

      console.log(`✅ MSW: 상담 채팅방 생성 성공 - Room ${newRoomId}`);
      return HttpResponse.json(newRoomId);
    } catch (error) {
      console.error('❌ MSW: 상담 채팅방 생성 실패', error);
      return HttpResponse.json(
        { message: '상담 채팅방 생성에 실패했습니다.' },
        { status: 500 },
      );
    }
  }),

  // 미션 목록 조회 - 명세서 준수 (GET /api/v1/challenge-participations/{participationId}/missions)
  http.get(
    `/api/v1/challenge-participations/:participationId/missions`,
    ({ params }) => {
      try {
        const participationId = Number(params.participationId);
        const missions = [
          {
            id: 201,
            title: '하루 소비 내역 정리',
            content: '오늘의 모든 소비를 기록하세요.',
            status: 'PENDING',
            participationId: participationId,
            advisorId: 5,
            createdAt: '2025-06-19T15:00:00',
            dueDate: '2025-06-20T23:59:59',
          },
          {
            id: 202,
            title: '주간 예산 계획 수립',
            content: '다음 주 예산을 세워보세요.',
            status: 'SUBMITTED',
            participationId: participationId,
            advisorId: 5,
            createdAt: '2025-06-18T15:00:00',
            dueDate: '2025-06-21T23:59:59',
          },
          {
            id: 203,
            title: '저축 목표 달성 인증',
            content: '저축 계좌 잔액을 인증해주세요.',
            status: 'COMPLETED',
            participationId: participationId,
            advisorId: 5,
            createdAt: '2025-06-17T15:00:00',
            dueDate: '2025-06-19T23:59:59',
          },
        ];

        console.log(
          `✅ MSW: 미션 목록 조회 성공 - Participation ${participationId}`,
        );
        return HttpResponse.json(missions);
      } catch (error) {
        console.error('❌ MSW: 미션 목록 조회 실패', error);
        return HttpResponse.json(
          { message: '미션 목록을 불러오는데 실패했습니다.' },
          { status: 500 },
        );
      }
    },
  ),

  // 리포트 생성 - 명세서 준수 (POST /api/v1/reports)
  http.post('/api/v1/reports', async ({ request }) => {
    try {
      const body = (await request.json()) as {
        userId: number;
        challengeId: number;
        summary: string;
        chartUrl: string;
      };

      const newReport = {
        id: 1001 + Math.floor(Math.random() * 1000),
        userId: body.userId,
        challengeId: body.challengeId,
        challengeTitle: '30일 소비 기록 챌린지',
        summary: body.summary,
        chartUrl: body.chartUrl,
        generatedAt: new Date().toISOString(),
      };

      console.log(`✅ MSW: 리포트 생성 성공 - User ${body.userId}`);
      return HttpResponse.json(newReport);
    } catch (error) {
      console.error('❌ MSW: 리포트 생성 실패', error);
      return HttpResponse.json(
        { message: '리포트 생성에 실패했습니다.' },
        { status: 500 },
      );
    }
  }),

  // 단일 리포트 조회 - 명세서 준수 (GET /api/v1/reports/{id})
  http.get('/api/v1/reports/:id', ({ params }) => {
    try {
      const reportId = Number(params.id);
      const report = {
        id: reportId,
        userId: 7,
        challengeId: 3,
        challengeTitle: '6월 소비 절약 챌린지',
        summary:
          '이번 챌린지를 통해 지출 습관이 개선되었습니다. 평균 20% 절약에 성공하였으며, 불필요한 소비를 줄이는 데 도움이 되었습니다.',
        chartUrl: 'https://cdn.moneybuddy.com/reports/chart-3.png',
        generatedAt: '2025-06-19T18:30:00',
        details: {
          totalSavings: 150000,
          savingsPercentage: 20,
          categorySavings: {
            food: 45000,
            shopping: 60000,
            entertainment: 45000,
          },
          achievements: [
            '일일 소비 기록 100% 달성',
            '목표 저축액 달성',
            '카테고리별 예산 준수',
          ],
        },
      };

      console.log(`✅ MSW: 리포트 상세 조회 성공 - Report ${reportId}`);
      return HttpResponse.json(report);
    } catch (error) {
      console.error('❌ MSW: 리포트 상세 조회 실패', error);
      return HttpResponse.json(
        { message: '리포트 정보를 불러오는데 실패했습니다.' },
        { status: 500 },
      );
    }
  }),

  // 사용자별 리포트 전체 조회 - 명세서 준수 (GET /api/v1/reports/users/{userId})
  http.get('/api/v1/reports/users/:userId', ({ params }) => {
    try {
      const userId = Number(params.userId);
      const reports = [
        {
          id: 1001,
          userId: userId,
          challengeId: 1,
          challengeTitle: '30일 소비 기록 챌린지',
          summary: '소비 패턴 분석을 통해 20% 절약 달성',
          chartUrl: 'https://cdn.moneybuddy.com/reports/chart-1.png',
          generatedAt: '2025-06-19T18:30:00',
          status: 'COMPLETED',
        },
        {
          id: 1002,
          userId: userId,
          challengeId: 2,
          challengeTitle: '저축 목표 달성 챌린지',
          summary: '월간 저축 목표 150% 달성',
          chartUrl: 'https://cdn.moneybuddy.com/reports/chart-2.png',
          generatedAt: '2025-05-19T18:30:00',
          status: 'COMPLETED',
        },
        {
          id: 1003,
          userId: userId,
          challengeId: 3,
          challengeTitle: '투자 공부 챌린지',
          summary: '기초 투자 지식 습득 완료',
          chartUrl: 'https://cdn.moneybuddy.com/reports/chart-3.png',
          generatedAt: '2025-04-19T18:30:00',
          status: 'COMPLETED',
        },
      ];

      console.log(`✅ MSW: 사용자별 리포트 조회 성공 - User ${userId}`);
      return HttpResponse.json(reports);
    } catch (error) {
      console.error('❌ MSW: 사용자별 리포트 조회 실패', error);
      return HttpResponse.json(
        { message: '리포트 목록을 불러오는데 실패했습니다.' },
        { status: 500 },
      );
    }
  }),
];
