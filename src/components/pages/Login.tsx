import { useForm } from 'react-hook-form';
import Text from '../common/Text';
import Input from '../common/Input';
import { EMAIL_REGEX } from '../../utils/Regex';

type LoginFormValues = {
  email: string;
  password: string;
  autoLogin: boolean;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<LoginFormValues>({
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
      autoLogin: false,
    },
  });

  const onSubmit = (data: LoginFormValues) => {
    console.log('제출 데이터:', data);
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
            minLength: {
              value: 6,
              message: '비밀번호는 6자리 이상이어야 합니다',
            },
          })}
          placeholder="비밀번호를 입력해주세요"
          type="password"
          hasToggle
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      {/* 로그인 버튼 */}
      <div>
        <button type="submit" disabled={!isValid}>
          로그인
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
