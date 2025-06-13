import { http, HttpResponse } from 'msw';
import { advisorHandlers } from './advisor/advisorHandlers';
import { authHandlers } from './auth';
import { expertData } from '../../data/expertData';

// 북마크 핸들러를 별도로 먼저 정의
const bookmarkHandler = http.post(
  '/api/v1/bookmarks/:advisorId',
  ({ params }) => {
    console.log('🔖 북마크 핸들러 호출됨:', params);
    const advisorId = Number(params.advisorId);
    const expert = expertData.find(e => e.id === advisorId);

    if (!expert) {
      console.log('❌ 전문가를 찾을 수 없음:', advisorId);
      return HttpResponse.json(
        { message: '전문가를 찾을 수 없습니다.' },
        { status: 404 },
      );
    }

    console.log('✅ 북마크 토글 성공:', expert.nickname);
    return HttpResponse.json({
      bookmarked: true,
      message: '북마크가 토글되었습니다.',
    });
  },
);

export const handlers = [
  bookmarkHandler,

  // 기본 핸들러들
  http.get('/api/health', () => {
    return HttpResponse.json({ status: 'ok' });
  }),

  http.post('/api/v1/auth/login', async ({ request }) => {
    const { email, password } = (await request.json()) as any;

    if (email === 'test@test.com' && password === 'password') {
      return HttpResponse.json({
        token: 'mock-token',
        user: { id: 1, email, name: 'Test User' },
      });
    }

    return HttpResponse.json(
      { message: '인증에 실패했습니다.' },
      { status: 401 },
    );
  }),

  http.post('/api/v1/auth/logout', () => {
    return HttpResponse.json({ message: '로그아웃되었습니다.' });
  }),

  http.get('/api/v1/user/profile', () => {
    return HttpResponse.json({
      id: 1,
      email: 'test@test.com',
      name: 'Test User',
    });
  }),

  // Auth handlers
  ...authHandlers,

  // Advisor handlers
  ...advisorHandlers,
];
