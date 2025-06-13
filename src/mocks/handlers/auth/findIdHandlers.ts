import { http, HttpResponse } from 'msw';
import type { FindIdRequest, FindIdResponse } from '../../../types/auth';

const MOCK_USER_DATA = {
  name: '홍길동',
  phone: '010-1234-5678',
  email: 'hong@example.com',
  joinDate: '2024-01-01',
};

export const findIdHandlers = [
  http.post('/api/v1/users/find-id', async ({ request }) => {
    const body = (await request.json()) as FindIdRequest;
    console.log('Request body:', body); // 디버깅용 로그

    // 정확한 경로와 데이터 비교
    if (
      body.name === MOCK_USER_DATA.name &&
      body.phone === MOCK_USER_DATA.phone
    ) {
      const response: FindIdResponse = {
        email: MOCK_USER_DATA.email,
        joinDate: MOCK_USER_DATA.joinDate,
      };
      return HttpResponse.json(response, { status: 200 });
    }

    // 일치하지 않는 경우의 응답
    return new HttpResponse(
      JSON.stringify({ message: '일치하는 회원이 없습니다.' }),
      {
        status: 404,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  }),
];
