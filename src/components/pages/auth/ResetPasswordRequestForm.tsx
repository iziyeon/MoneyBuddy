// src/components/pages/auth/ResetPasswordRequestForm.tsx
import { useForm } from 'react-hook-form';
import { EMAIL_REGEX } from '../../../utils';
import Input from '../../common/Input';
import Button from '../../common/Button';
import Text from '../../common/Text';
import { authStyles } from '../../../styles/auth.styles';
import { requestResetPasswordApi } from '../../../services/auth/resetPasswordApi';
import type { RequestResetPasswordRequest } from '../../../types/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ResetPasswordRequestForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RequestResetPasswordRequest>({
    mode: 'onChange',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data: RequestResetPasswordRequest) => {
    try {
      await requestResetPasswordApi(data);
      navigate(
        `/reset-password-verify?email=${encodeURIComponent(data.email)}`,
      );
    } catch (err: any) {
      setErrorMessage(err?.response?.data?.message || '오류가 발생했습니다.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={authStyles.form}>
      <div className={authStyles.iconWrapper}>
        <img
          src="/jpg/icon/SettingIcon.png"
          alt=""
          className={authStyles.icon}
        />
      </div>
      <div className="text-center">
        <Text type="H2" className="mb-8">
          가입하신 이메일 주소를 입력하시면
          <br />
          인증번호를 보내드립니다.
        </Text>
      </div>

      <Input
        {...register('email', {
          required: '이메일을 입력해주세요',
          pattern: {
            value: EMAIL_REGEX,
            message: '올바른 이메일 형식이 아닙니다',
          },
        })}
        placeholder="이메일 주소 입력"
      />
      {errors.email && (
        <Text type="B3" className="text-red-500 mt-1">
          {errors.email.message}
        </Text>
      )}

      <Button
        type="submit"
        disabled={!isValid || Object.keys(errors).length > 0}
        variant={
          !isValid || Object.keys(errors).length > 0 ? 'disabled' : 'primary'
        }
      >
        인증번호 받기
      </Button>

      {errorMessage && (
        <Text type="B3" className="text-red-500 mt-2">
          {errorMessage}
        </Text>
      )}
    </form>
  );
}
