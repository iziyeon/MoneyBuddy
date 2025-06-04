import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Input from '../../common/Input';
import { loginApi } from '../../../services/auth/loginApi';
import { EMAIL_REGEX } from '../../../utils/Regex';
import { useAuthStore } from '../../../stores/useAuthStore';
import type { LoginRequest } from '../../../types/api/auth/login';

type LoginFormValues = LoginRequest & { autoLogin: boolean };

export default function LoginForm() {
  const navigate = useNavigate();
  const setAuth = useAuthStore(state => state.setAuth);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    setError,
  } = useForm<LoginFormValues>({
    mode: 'onChange',
    defaultValues: { email: '', password: '', autoLogin: false },
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      const { autoLogin, ...loginData } = data;
      const response = await loginApi(loginData);
      setAuth(response.user, response.accessToken, response.refreshToken);
      navigate('/');
    } catch (err: unknown) {
      if (
        err instanceof Error &&
        'response' in err &&
        (err as any).response?.status === 401
      ) {
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

      <div>
        <Input
          {...register('password', { required: '비밀번호를 입력해주세요' })}
          placeholder="비밀번호를 입력해주세요"
          type="password"
          hasToggle
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <div>
        <button type="submit" disabled={!isValid || isSubmitting}>
          {isSubmitting ? '로그인 중...' : '로그인'}
        </button>
      </div>

      <div>
        <input type="checkbox" id="auto-login" {...register('autoLogin')} />
        <label htmlFor="auto-login">자동 로그인</label>
      </div>
    </form>
  );
}
