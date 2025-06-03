import { http } from 'msw';
import { API_ENDPOINTS } from '../../../config/api';
import type {
  LoginRequest,
  LoginResponse,
} from '../../../types/api/auth/login';

export const loginHandlers = [
  http.post(API_ENDPOINTS.login, async ({ request }) => {
    const { email, password } = (await request.json()) as LoginRequest;

    if (email === 'test@example.com' && password === 'password123') {
      const response: LoginResponse = {
        accessToken: 'jwt_token_here',
        refreshToken: 'jwt_refresh_token_here',
        user: { id: 1, nickname: '사용자닉네임', role: 'USER' },
      };

      return new Response(JSON.stringify(response), { status: 200 });
    } else {
      return new Response(
        JSON.stringify({ message: '이메일 또는 비밀번호가 올바르지 않습니다' }),
        { status: 401 },
      );
    }
  }),
];
