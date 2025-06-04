import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../common/Input';
import Button from '../../common/Button';
import { findIdApi } from '../../../services/auth/findIdApi';
import type {
  FindIdRequest,
  FindIdResponse,
} from '../../../types/api/auth/findId';
import { formatPhoneNumber } from '../../../utils/Regex';

export default function FindIdForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { isValid },
  } = useForm<FindIdRequest>({
    mode: 'onChange',
    defaultValues: { name: '', phone: '' },
  });

  const phoneValue = watch('phone');
  const [result, setResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: FindIdRequest) => {
    try {
      const response: FindIdResponse = await findIdApi(data);
      setResult(response.email);
      setError(null);
    } catch (err: any) {
      setResult(null);
      setError('일치하는 회원이 없습니다.');
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setValue('phone', formatted);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>이름</label>
        <Input
          {...register('name', { required: true })}
          placeholder="이름을 입력하세요"
        />
      </div>

      <div>
        <label>전화번호</label>
        <Input
          {...register('phone', { required: true })}
          placeholder="전화번호를 입력하세요"
          value={phoneValue}
          onChange={handlePhoneChange}
        />
      </div>

      <Button type="submit" disabled={!isValid}>
        아이디 찾기
      </Button>

      {result && <div>회원님의 이메일: {result}</div>}
      {error && <div>{error}</div>}
    </form>
  );
}
