import { http, HttpResponse } from 'msw';
import type { SignupRequest } from '../../../types/api/auth/signup';

export const signupHandlers = [
  http.post('/api/v1/users', async ({ request }) => {
    const { name, phone, email, password, agreementTerm } =
      (await request.json()) as SignupRequest;

    if (!name || name.trim().length < 2) {
      return HttpResponse.json(
        { message: '이름은 2자 이상 입력해주세요.' },
        { status: 400 },
      );
    }

    if (!/^01[016789]-\d{3,4}-\d{4}$/.test(phone)) {
      return HttpResponse.json(
        { message: '유효한 휴대폰 번호 형식이 아닙니다.' },
        { status: 400 },
      );
    }

    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
      return HttpResponse.json(
        { message: '이메일 형식이 올바르지 않습니다.' },
        { status: 400 },
      );
    }

    if (!/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{10,}$/.test(password)) {
      return HttpResponse.json(
        {
          message:
            '비밀번호는 영문, 숫자, 특수문자 포함 10자 이상이어야 합니다.',
        },
        { status: 400 },
      );
    }

    const requiredTerms = ['age', 'service', 'privacy'];
    const hasAllRequired = requiredTerms.every(term =>
      agreementTerm?.includes(term),
    );
    if (!hasAllRequired) {
      return HttpResponse.json(
        { message: '필수 약관에 모두 동의해야 합니다.' },
        { status: 400 },
      );
    }

    return HttpResponse.json(
      { message: '회원가입 성공(Mock)' },
      { status: 201 },
    );
  }),
];
