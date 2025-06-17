import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Input from '../../common/Input';
import Button from '../../common/Button';
import Text from '../../common/Text';
import { findIdApi } from '../../../services/auth/findIdApi';
import { formatPhoneNumber } from '../../../utils/formatters';
import { authStyles } from '../../../styles/auth.styles';
import type { FindIdRequest, FindIdResponse } from '../../../types/auth';

interface FindIdFormProps {
  onSwitchTab?: () => void;
}

export default function FindIdForm({ onSwitchTab }: FindIdFormProps) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<FindIdResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm<FindIdRequest>({
    mode: 'onChange',
    defaultValues: {
      name: '',
      phone: '',
    },
  });

  const phoneValue = watch('phone');

  const onSubmit = async (data: FindIdRequest) => {
    setIsLoading(true);
    try {
      const response = await findIdApi(data);
      setResult(response);
      setError(null);
    } catch (err: any) {
      setResult(null);
      setError(err.response?.data?.message || '일치하는 회원이 없습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setValue('phone', formatted, { shouldValidate: true });
  };

  return (
    <>
      {result ? (
        <div className={authStyles.resultContainer}>
          <div className={authStyles.iconWrapper}>
            <img
              src="/public/jpg/icon/FindIcon.png"
              alt="find-success-icon"
              className={authStyles.icon}
            />
          </div>
          <Text type="H2">아이디 찾기 완료</Text>
          <Text type="B2" className="mt-2">
            사용자 정보와 일치하는 아이디를 찾았습니다
          </Text>

          <div className={authStyles.resultBox}>
            <div className="flex items-center px-2">
              {' '}
              <Text type="B2" className="w-20">
                아이디
              </Text>
              <Text type="B1">{result.email}</Text>
            </div>
            <div className="flex items-center px-2">
              {' '}
              <Text type="B2" className="w-20">
                가입일
              </Text>
              <Text type="B1">{result.joinDate}</Text>
            </div>
          </div>

          <div className={authStyles.buttonContainer}>
            <Button onClick={() => navigate('/login')}>로그인하러 가기</Button>
            <Button variant="secondary" onClick={onSwitchTab}>
              비밀번호 재설정하기
            </Button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className={authStyles.form}>
          <div className={authStyles.iconWrapper}>
            <img
              src="/public/jpg/icon/VerificationIcon.png"
              alt="find-icon"
              className={authStyles.icon}
            />
          </div>

          <div className="text-center">
            <Text type="H2" className="mb-8">
              이름과 휴대폰 번호를 입력하신 후<br />
              아이디 찾기를 진행해 주세요.
            </Text>
          </div>

          <Input
            {...register('name', {
              required: '이름을 입력해주세요',
            })}
            placeholder="이름을 입력하세요"
          />
          {errors.name && (
            <Text type="B3" className="text-red-500">
              {errors.name.message}
            </Text>
          )}

          <Input
            {...register('phone')}
            value={phoneValue}
            onChange={handlePhoneChange}
            placeholder="전화번호를 입력하세요"
          />
          {errors.phone && (
            <Text type="B3" className="text-red-500">
              {errors.phone.message}
            </Text>
          )}

          <Button
            type="submit"
            disabled={!isValid || isLoading || Object.keys(errors).length > 0}
            variant={
              !isValid || isLoading || Object.keys(errors).length > 0
                ? 'disabled'
                : 'primary'
            }
          >
            {isLoading ? '검색중...' : '아이디 찾기'}
          </Button>

          {error && (
            <Text type="B3" className="text-red-500">
              {error}
            </Text>
          )}
        </form>
      )}
    </>
  );
}
