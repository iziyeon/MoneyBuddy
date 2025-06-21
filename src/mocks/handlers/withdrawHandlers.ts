import { http, HttpResponse } from 'msw';

export const withdrawHandlers = [
  // 비밀번호 확인 API
  http.post('/api/v1/auth/verify-password-withdraw', async ({ request }) => {
    try {
      const { password } = (await request.json()) as { password: string };

      console.log('🔐 MSW 회원탈퇴 비밀번호 확인 요청:', { password: '***' });

      // 하드코딩된 올바른 비밀번호
      const MOCK_CURRENT_PASSWORD = 'password123!';

      // 기존 비밀번호가 틀린 경우 400 에러 반환
      if (password !== MOCK_CURRENT_PASSWORD) {
        console.log('❌ MSW 비밀번호 확인 실패 - 잘못된 비밀번호');
        return HttpResponse.json(
          { message: '비밀번호가 일치하지 않습니다.' },
          { status: 400 },
        );
      }

      // 비밀번호 확인 성공
      console.log('✅ MSW 비밀번호 확인 성공');
      return HttpResponse.json(
        { message: '비밀번호가 확인되었습니다.' },
        { status: 200 },
      );
    } catch (error) {
      console.error('🚨 MSW 비밀번호 확인 핸들러 에러:', error);
      return HttpResponse.json(
        { message: '서버 오류가 발생했습니다.' },
        { status: 500 },
      );
    }
  }), // 회원탈퇴 API - 명세서 준수 (DELETE /api/v1/users/{id})
  http.delete('/api/v1/users/:id', async ({ params }) => {
    try {
      const userId = params.id;
      console.log('🚪 MSW 회원탈퇴 요청:', { userId });

      // 명세서에 따라 204 No Content 반환
      console.log('✅ MSW 회원탈퇴 성공');
      return new HttpResponse(null, { status: 204 });
    } catch (error) {
      console.error('🚨 MSW 회원탈퇴 핸들러 에러:', error);
      return HttpResponse.json(
        { message: '서버 오류가 발생했습니다.' },
        { status: 500 },
      );
    }
  }),
];
