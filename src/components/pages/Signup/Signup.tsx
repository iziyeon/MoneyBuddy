import { type JSX } from 'react';
import { signupApi } from '../../../services/auth/signupApi';
import SignupHeader from './SignupHeader';
import InputField from './InputField';
import EmailDropdown from './EmailDropdown';
import TermsAgreement from './TermAgreement';
import Button from '../../common/Button';
import {
  isPasswordMatch,
  isValidEmailId,
  isValidName,
  isValidPassword,
  isValidPhone,
  hasRequiredTerms,
} from '../../../utils/Validation';
import { useSignupStore } from '../../../stores/useSignupStore';
import { useNavigate } from 'react-router-dom';

export default function SignupPage(): JSX.Element {
  const {
    name,
    phone,
    email,
    domain,
    password,
    passwordCheck,
    agreementTerm,
    errors,
    setErrorForField,
    clearErrors,
    setName,
    setPhone,
    setEmail,
    setDomain,
    setPassword,
    setPasswordCheck,
    setAgreementTerm,
    resetSignup,
  } = useSignupStore();

  const isNameEmpty = name.length >= 1;
  const isNumberEmpty = phone.length >= 1;
  const isEmailEmpty = email.length > 0 && domain.length > 0;
  const allTermId = ['all', 'age', 'service', 'privacy', 'marketing'];
  const navigate = useNavigate();
  const handleTermCheck = (id: string, checked: boolean) => {
    if (id === 'all') {
      setAgreementTerm(checked ? [...allTermId] : []);
    } else {
      const next = checked
        ? [...new Set([...agreementTerm, id])]
        : agreementTerm.filter(item => item !== id);

      const individualIds = allTermId.filter(term => term !== 'all');
      const isAllChecked = individualIds.every(term => next.includes(term));

      const updatedTerms = isAllChecked
        ? [...new Set([...next, 'all'])]
        : next.filter(term => term !== 'all');

      setAgreementTerm(updatedTerms);
    }
  };

  const handleSubmit = async () => {
    clearErrors();

    if (
      !name.trim() ||
      !phone.trim() ||
      !email.trim() ||
      !domain.trim() ||
      !password.trim() ||
      !passwordCheck.trim()
    ) {
      alert('모든 항목을 빠짐없이 입력해주세요.');
      return;
    }

    if (!hasRequiredTerms(agreementTerm)) {
      alert('필수 약관에 모두 동의해야 가입할 수 있습니다.');
    }
    if (!isValidName(name)) {
      setErrorForField('name', '이름은 2자 이상 입력해주세요.');
    }

    if (!isValidPhone(phone)) {
      setErrorForField('phone', '유효한 휴대폰 번호 형식으로 입력해주세요.');
    }

    if (!isValidEmailId(email)) {
      setErrorForField('email', '이메일 형식이 올바르지 않습니다.');
    }

    if (!isValidPassword(password)) {
      setErrorForField(
        'password',
        '특수문자, 영문, 숫자를 포함해 10자 이상이어야 합니다.',
      );
    }

    if (!isPasswordMatch(password, passwordCheck)) {
      setErrorForField('passwordCheck', '비밀번호가 일치하지 않습니다.');
    }

    try {
      const fullEmail = `${email}@${domain}`;
      await signupApi({
        name,
        phone,
        email: fullEmail,
        password,
        agreementTerm,
      });
      alert('회원가입 성공');
      navigate('/');
      resetSignup();
    } catch (error) {
      alert('회원가입 실패');
    }
  };

  return (
    <div className="border border-slate-950">
      <SignupHeader title="이름을" description="정확한 이름을 입력해주세요" />

      {isEmailEmpty && (
        <>
          <InputField
            id="password"
            type="password"
            label="비밀번호"
            value={password}
            onChange={e => setPassword(e.target.value)}
            errorMessage={errors.password}
            placeholder="특수문자, 영문, 숫자 포함 10자 이상"
          />
          <InputField
            id="passwordcheck"
            type="password"
            label="비밀번호 확인"
            value={passwordCheck}
            onChange={e => setPasswordCheck(e.target.value)}
            errorMessage={errors.passwordCheck}
            placeholder="비밀번호 확인"
          />
        </>
      )}

      {isNumberEmpty && (
        <div className="flex items-center">
          <InputField
            id="email"
            type="email"
            label="이메일"
            value={email}
            onChange={e => setEmail(e.target.value)}
            errorMessage={errors.email}
            placeholder="이메일 앞부분"
          />
          <EmailDropdown selected={domain} onSelect={setDomain} />
        </div>
      )}

      {isNameEmpty && (
        <InputField
          id="phone"
          label="휴대폰 번호"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          errorMessage={errors.phone}
          placeholder="예) 010-1234-5678"
        />
      )}

      <InputField
        id="name"
        label="이름"
        value={name}
        onChange={e => setName(e.target.value)}
        errorMessage={errors.name}
        placeholder="예) 홍길동"
      />

      {isEmailEmpty && (
        <TermsAgreement
          checkedItems={agreementTerm}
          onCheck={handleTermCheck}
        />
      )}

      <div className="border border-stroke p-5 mt-4">
        <Button onClick={handleSubmit}>입력완료</Button>
      </div>
    </div>
  );
}
