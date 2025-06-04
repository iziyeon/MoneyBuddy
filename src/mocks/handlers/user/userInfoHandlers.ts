import { http, HttpResponse } from 'msw';

export const userInfoHandlers = [
  // 기존 GET 핸들러 (이미 작성 완료)
  http.get('/api/v1/users/:id', ({ params }) => {
    const { id } = params;

    return HttpResponse.json(
      {
        id: Number(id),
        email: 'user@example.com',
        nickname: '사용자닉네임',
        profile_image: 'http://your-cdn.com/profile.jpg',
        role: 'USER',
      },
      { status: 200 },
    );
  }),

  // PATCH 사용자 정보 수정 핸들러 추가
  http.patch('/api/v1/users/:id', async ({ request, params }) => {
    const { nickname, profile_image } = (await request.json()) as {
      nickname: string;
      profile_image: string;
    };
    const { id } = params;

    return HttpResponse.json(
      {
        id: Number(id),
        nickname,
        profile_image,
      },
      { status: 200 },
    );
  }),
];
