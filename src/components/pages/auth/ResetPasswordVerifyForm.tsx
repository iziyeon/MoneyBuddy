// src/components/pages/auth/ResetPasswordVerifyForm.tsx
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../common/Input';
import Button from '../../common/Button';
import { verifyResetCodeApi } from '../../../services/auth/resetPasswordApi';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Text from '../../common/Text';
import { authStyles } from '../../../styles/auth.styles'; // 수정된 부분

export default function ResetPasswordVerifyForm() {
  const [params] = useSearchParams();
  const email = params.get('email') || '';
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<{ code: string }>();

  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data: { code: string }) => {
    try {
      const response = await verifyResetCodeApi({ email, code: data.code });
      navigate(`/reset-password?token=${response.token}`);
    } catch (err: any) {
      setErrorMessage('인증번호가 틀립니다. 다시 확인해주세요.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={authStyles.form}>
      <div className={authStyles.iconWrapper}>
        <img
          src="/jpg/icon/VerificationIcon.png"
          alt=""
          className={authStyles.icon}
        />
      </div>

      <Text type="H2" className="text-center mb-8">
        {email}으로 전송된
        <br />
        인증번호 6자리를 입력해주세요
      </Text>

      <Input
        {...register('code', {
          required: '인증번호를 입력해주세요',
          pattern: {
            value: /^\d{6}$/,
            message: '6자리 숫자를 입력해주세요',
          },
        })}
        placeholder="인증번호 6자리 입력"
      />
      {errors.code && (
        <Text type="B3" className="text-red-500">
          {errors.code.message}
        </Text>
      )}
      {errorMessage && (
        <Text type="B3" className="text-red-500">
          {errorMessage}
        </Text>
      )}

      <Button
        type="submit"
        disabled={!isValid || Object.keys(errors).length > 0}
        variant={
          !isValid || Object.keys(errors).length > 0 ? 'disabled' : 'primary'
        }
      >
        다음
      </Button>
    </form>
  );
}
