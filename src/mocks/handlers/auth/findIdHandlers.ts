import { http, HttpResponse } from 'msw';

export const findIdHandlers = [
  http.post('/api/v1/users/find-id', async ({ request }) => {
    const { name, phone } = (await request.json()) as {
      name: string;
      phone: string;
    };

    if (name === '홍길동' && phone === '010-1234-5678') {
      return HttpResponse.json(
        { email: 'honggildong@example.com' },
        { status: 200 },
      );
    }

    return HttpResponse.json(
      { message: '일치하는 회원이 없습니다.' },
      { status: 404 },
    );
  }),
];
