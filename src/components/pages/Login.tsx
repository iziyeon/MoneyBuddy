import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Text from '../common/Text';
import Input from '../common/Input';
import { EMAIL_REGEX } from '../../utils/Regex';
import { loginApi } from '../../services/auth/loginApi';
import type { LoginRequest } from '../../types/api/auth/login';
import { setApiToken } from '../../services/api';

// 실제 폼에서 사용하는 타입: API 요청 타입 + 추가 UI 상태
type LoginFormValues = LoginRequest & {
  autoLogin: boolean;
};

export default function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting, isValid, errors },
    setError,
  } = useForm<LoginFormValues>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      autoLogin: false,
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      // autoLogin은 api에 안 보내므로 분리
      const { autoLogin, ...loginData } = data;
      const response = await loginApi(loginData);
      setApiToken(response.accessToken);
      navigate('/');
    } catch (err: any) {
      if (err?.response?.status === 401) {
        setError('password', {
          message: '이메일 또는 비밀번호가 올바르지 않습니다.',
        });
      } else {
        alert('알 수 없는 오류가 발생했습니다.');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* 이메일 입력 */}
      <div>
        <Input
          {...register('email', {
            required: '이메일을 입력해주세요',
            pattern: {
              value: EMAIL_REGEX,
              message: '이메일 형식이 올바르지 않습니다',
            },
          })}
          placeholder="이메일을 입력해주세요"
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      {/* 비밀번호 입력 */}
      <div>
        <Input
          {...register('password', {
            required: '비밀번호를 입력해주세요',
          })}
          placeholder="비밀번호를 입력해주세요"
          type="password"
          hasToggle
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      {/* 로그인 버튼 */}
      <div>
        <button type="submit" disabled={!isValid || isSubmitting}>
          {isSubmitting ? '로그인 중...' : '로그인'}
        </button>
      </div>

      {/* 자동 로그인 */}
      <div>
        <input type="checkbox" id="auto-login" {...register('autoLogin')} />
        <label htmlFor="auto-login">자동 로그인</label>
      </div>

      {/* 구분선 */}
      <div>
        <div />
        <Text type="B2">또는</Text>
        <div />
      </div>

      {/* 소셜 로그인 */}
      <div>
        <button type="button">카카오 계정으로 1초 만에 시작하기</button>
        <button type="button">구글 계정으로 시작하기</button>
        <button type="button">네이버 계정으로 시작하기</button>
      </div>

      {/* 하단 링크 */}
      <div>
        <button type="button">회원가입</button>
        <button type="button">아이디 · 비밀번호 재설정</button>
      </div>
    </form>
  );
}
