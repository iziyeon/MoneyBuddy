import { http, HttpResponse } from 'msw';
import type { LoginRequest, LoginResponse } from '../../../types/auth';

export const loginHandlers = [
  http.post('/api/v1/users/login', async ({ request }) => {
    try {
      const { email, password } = (await request.json()) as LoginRequest;

      console.log('🔐 MSW 로그인 요청:', { email, password: '***' });

      if (email === 'test@example.com' && password === 'password123!') {
        const response: LoginResponse = {
          accessToken: 'mock_access_token_1_' + Date.now(),
          refreshToken: 'mock_refresh_token_1_' + Date.now(),
          user: {
            id: 1,
            email: 'test@example.com',
            nickname: '사용자닉네임',
            role: 'USER',
            profile_image: '/jpg/experts/expert1.png',
          },
        };

        console.log('✅ MSW 로그인 성공');
        return HttpResponse.json({
          user: response.user,
          tokens: {
            access_token: response.accessToken,
            refresh_token: response.refreshToken,
          },
        });
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

  // 로그아웃 API - 명세서 준수
  http.post('/api/v1/auth/logout', async () => {
    console.log('🚪 MSW 로그아웃 요청');

    // 쿠키에서 토큰 제거 시뮬레이션
    return new Response(null, {
      status: 200,
      headers: {
        'Set-Cookie': [
          'token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; Secure; SameSite=Strict',
          'refresh_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; Secure; SameSite=Strict',
        ].join(', '),
      },
    });
  }),
];
