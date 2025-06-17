import { http, HttpResponse } from 'msw';
import type { LoginRequest, LoginResponse } from '../../../types/auth';

export const loginHandlers = [
  http.post('/api/v1/users/login', async ({ request }) => {
    try {
      const { email, password } = (await request.json()) as LoginRequest;

      console.log('🔐 MSW 로그인 요청:', { email, password: '***' });

      if (email === 'test@example.com' && password === 'password123') {
        const response: LoginResponse = {
          accessToken: 'jwt_token_here',
          refreshToken: 'jwt_refresh_token_here',
          user: { id: 1, nickname: '사용자닉네임', role: 'USER' },
        };

        console.log('✅ MSW 로그인 성공');
        return HttpResponse.json(response, { status: 200 });
      }

      console.log('❌ MSW 로그인 실패 - 잘못된 자격증명');
      return HttpResponse.json(
        { message: '이메일 또는 비밀번호가 올바르지 않습니다' },
        { status: 401 },
      );
    } catch (error) {
      console.error('❌ MSW 로그인 핸들러 오류:', error);
      return HttpResponse.json(
        { message: '서버 오류가 발생했습니다.' },
        { status: 500 },
      );
    }
  }),
];
