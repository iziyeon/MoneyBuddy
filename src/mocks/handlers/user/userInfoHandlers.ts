import { http, HttpResponse } from 'msw';

const mockUser = {
  nickname: '테스트사용자',
  email: 'test@example.com',
  role: 'USER',
  profile_image: '/jpg/experts/expert1.png',
};

export const userInfoHandlers = [
  // 현재 사용자 정보 조회
  http.get('/api/v1/users/me', () => {
    return HttpResponse.json({
      id: 1,
      nickname: '테스트사용자',
      email: 'test@example.com',
      role: 'USER',
      profile_image: '/jpg/experts/expert1.png',
    });
  }),

  // 사용자 정보 업데이트
  http.patch('/api/v1/users/:id', async ({ params, request }) => {
    const body = await request.json();
    return HttpResponse.json({
      id: Number(params.id),
      nickname: (body as any).nickname || '업데이트된닉네임',
      profile_image: (body as any).profile_image || '/jpg/experts/expert1.png',
    });
  }),

  // 사용자 포인트 조회
  http.get('/api/v1/users/points', () => {
    return HttpResponse.json({
      availablePoints: 2000,
      totalEarned: 5000,
      totalUsed: 3000,
    });
  }),

  // 사용자 정보 조회 (ID로)
  http.get('/api/v1/users/:id', ({ params }) => {
    const id = Number(params.id);
    return HttpResponse.json({ ...mockUser, id });
  }),
];
