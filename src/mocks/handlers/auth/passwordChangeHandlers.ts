import { http, HttpResponse } from 'msw';

// 비밀번호 변경 요청 타입
interface ChangePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

export const passwordChangeHandlers = [
  // 비밀번호 변경 API
  http.patch('/api/v1/auth/change-password', async ({ request }) => {
    try {
      const authHeader = request.headers.get('Authorization');

      // 인증 체크 - MSW 환경에서는 Bearer 토큰이 있으면 유효한 것으로 간주
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        console.log('❌ MSW 비밀번호 변경 실패 - 인증 토큰 없음');
        return HttpResponse.json(
          { message: '인증이 필요합니다.' },
          { status: 401 },
        );
      }

      const { currentPassword, newPassword } =
        (await request.json()) as ChangePasswordRequest;
      console.log('🔐 MSW 비밀번호 변경 요청:', {
        currentPassword: '***',
        newPassword: '***',
      });

      // 기존 비밀번호 검증 (모의)
      if (currentPassword !== 'password123!') {
        console.log('❌ MSW 비밀번호 변경 실패 - 잘못된 기존 비밀번호');
        return HttpResponse.json(
          { message: '틀린 비밀번호 입니다. 다시 입력해주세요.' },
          { status: 400 },
        );
      }

      // 새 비밀번호 유효성 검사
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{10,}$/;
      if (!passwordRegex.test(newPassword)) {
        console.log('❌ MSW 비밀번호 변경 실패 - 유효하지 않은 새 비밀번호');
        return HttpResponse.json(
          {
            message:
              '비밀번호는 영문, 숫자, 특수문자 포함 10자 이상이어야 합니다.',
          },
          { status: 400 },
        );
      }

      console.log('✅ MSW 비밀번호 변경 성공');
      return HttpResponse.json(
        { message: '비밀번호가 성공적으로 변경되었습니다.' },
        { status: 200 },
      );
    } catch (error) {
      console.error('❌ MSW 비밀번호 변경 핸들러 오류:', error);
      return HttpResponse.json(
        { message: '서버 오류가 발생했습니다.' },
        { status: 500 },
      );
    }
  }),

  // OAuth2 소셜 연동 해제 API
  http.delete('/api/v1/auth/unlink', async () => {
    console.log('🔗 MSW 소셜 연동 해제 요청');

    return new Response('소셜 연동이 해제되었습니다.', {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    });
  }),
];
