import { http, HttpResponse } from 'msw';

const mockUser = {
  nickname: '테스트사용자',
  email: 'test@example.com',
  role: 'USER',
  profile_image: '/jpg/experts/expert1.png',
};

// 토큰 유효성 검증 함수
const validateToken = (authHeader: string | null): boolean => {
  if (!authHeader || !authHeader.startsWith('Bearer ')) return false;
  const token = authHeader.replace('Bearer ', '');
  // 간단한 토큰 검증 (실제로는 JWT 검증)
  return token.startsWith('mock_access_token_');
};

// 토큰에서 사용자 ID 추출
const getUserIdFromToken = (authHeader: string): number => {
  const token = authHeader.replace('Bearer ', '');
  const match = token.match(/mock_access_token_(\d+)_/);
  return match ? parseInt(match[1]) : 1; // 기본값 1
};

export const userInfoHandlers = [
  // 현재 사용자 정보 조회 - 인증 필요
  http.get('/api/v1/users/me', ({ request }) => {
    const authHeader = request.headers.get('Authorization');

    // 토큰 검증
    if (!validateToken(authHeader)) {
      console.log('❌ MSW: 인증되지 않은 사용자 - /users/me');
      return HttpResponse.json(
        { message: '인증이 필요합니다.' },
        { status: 401 },
      );
    }

    const userId = getUserIdFromToken(authHeader!);
    console.log('✅ MSW: 사용자 정보 조회 성공 - ID:', userId);

    return HttpResponse.json({
      id: userId,
      nickname: mockUser.nickname,
      email: mockUser.email,
      role: mockUser.role,
      profile_image: mockUser.profile_image,
    });
  }), // 사용자 정보 업데이트 - 인증 필요
  http.put('/api/v1/users/:id', async ({ params, request }) => {
    const authHeader = request.headers.get('Authorization');

    // 토큰 검증
    if (!validateToken(authHeader)) {
      console.log('❌ MSW: 인증되지 않은 사용자 - PUT /users/:id');
      return HttpResponse.json(
        { message: '인증이 필요합니다.' },
        { status: 401 },
      );
    }

    const requestUserId = Number(params.id);
    const tokenUserId = getUserIdFromToken(authHeader!);

    console.log(
      '🔄 MSW: 닉네임 변경 요청 - requestUserId:',
      requestUserId,
      'tokenUserId:',
      tokenUserId,
    );

    const body = (await request.json()) as {
      nickname?: string;
      profile_image?: string;
    };

    console.log('🔄 MSW: 사용자 정보 업데이트 요청', { requestUserId, body });

    // 닉네임 중복 체크 시뮬레이션 (테스트용 중복 닉네임 제외)
    if (body.nickname && body.nickname === '중복닉네임') {
      console.log('❌ MSW: 닉네임 중복');
      return HttpResponse.json(
        { message: '이미 사용 중인 닉네임입니다.' },
        { status: 409 },
      );
    }

    // 성공 응답 - 업데이트된 전체 사용자 정보 반환
    const updatedUser = {
      id: requestUserId,
      nickname: body.nickname || mockUser.nickname,
      profile_image: body.profile_image || mockUser.profile_image,
      email: mockUser.email,
      role: mockUser.role,
    };

    console.log('✅ MSW: 사용자 정보 업데이트 성공', updatedUser);

    // mockUser 업데이트하여 다음 요청에서도 변경된 닉네임 반영
    if (body.nickname) {
      mockUser.nickname = body.nickname;
    }

    return HttpResponse.json(updatedUser);
  }),

  // 사용자 포인트 조회 - 인증 필요
  http.get('/api/v1/users/points', ({ request }) => {
    const authHeader = request.headers.get('Authorization');

    // 토큰 검증
    if (!validateToken(authHeader)) {
      console.log('❌ MSW: 인증되지 않은 사용자 - /users/points');
      return HttpResponse.json(
        { message: '인증이 필요합니다.' },
        { status: 401 },
      );
    }

    const userId = getUserIdFromToken(authHeader!);
    console.log('✅ MSW: 포인트 조회 성공 - ID:', userId);

    return HttpResponse.json({
      availablePoints: 2000,
      totalEarned: 5000,
      totalUsed: 3000,
    });
  }),

  // 사용자 설정 조회 (명세서 준수)
  http.get('/api/v1/users/:userId/settings', ({ params }) => {
    const { userId } = params;
    console.log('⚙️ 사용자 설정 조회:', userId);

    return HttpResponse.json({
      user_id: parseInt(userId as string),
      notification_settings: {
        push_enabled: true,
        email_enabled: true,
        sms_enabled: false,
      },
      privacy_settings: {
        profile_public: true,
        activity_public: false,
      },
      consultation_settings: {
        auto_accept: false,
        preferred_time: '14:00-18:00',
      },
    });
  }),

  // 사용자 설정 수정 (명세서 준수)
  http.put('/api/v1/users/:userId/settings', async ({ params, request }) => {
    const { userId } = params;
    const settings = await request.json();
    console.log('⚙️ 사용자 설정 수정:', userId, settings);

    return HttpResponse.json({
      message: '설정이 성공적으로 업데이트되었습니다.',
      updated_at: new Date().toISOString(),
    });
  }),

  // 사용자 정보 조회 (ID로)
  http.get('/api/v1/users/:id', ({ params }) => {
    const id = Number(params.id);
    return HttpResponse.json({ ...mockUser, id });
  }),
  // 사용자 삭제 (탈퇴) - 명세서 준수 (DELETE /api/v1/users/{id})
  http.delete('/api/v1/users/:id', async ({ params }) => {
    const { id } = params;
    console.log('👋 MSW: 사용자 탈퇴', { id });

    // 명세서에 따라 204 No Content 반환
    return new HttpResponse(null, { status: 204 });
  }),

  // 결제 내역 조회 (명세서에 없음 - 프로젝트 필요)
  http.get('/api/v1/payments', ({ request }) => {
    console.log('📊 MSW: 결제 내역 조회');

    const authHeader = request.headers.get('Authorization');
    if (!authHeader) {
      return HttpResponse.json(
        { message: '인증이 필요합니다.' },
        { status: 401 },
      );
    }

    const mockPaymentHistory = [
      {
        id: 1,
        expertId: 1,
        expertName: '김전문',
        amount: 40000,
        paymentMethod: 'CARD',
        status: 'COMPLETED',
        paymentDate: '2024-01-15T14:30:00',
        consultationDate: '2024-01-20T10:00:00',
      },
      {
        id: 2,
        expertId: 2,
        expertName: '이지선',
        amount: 35000,
        paymentMethod: 'KAKAO_PAY',
        status: 'COMPLETED',
        paymentDate: '2024-01-10T09:15:00',
        consultationDate: '2024-01-15T15:00:00',
      },
    ];

    return HttpResponse.json(mockPaymentHistory);
  }),
];
