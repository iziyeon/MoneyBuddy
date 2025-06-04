import { useState, type JSX } from 'react';
import InputField from '../components/signup/InputField';
import SignupHeader from '../components/signup/SignupHeader';
import EmailDropdown from '../components/signup/EmailDropdown';
import Button from '../components/common/Button';

export default function SignupPage(): JSX.Element {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [emailId, setEmailId] = useState('');
  const [domain, setDomain] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const isNameEmpty = name.length >= 1;
  const isNumberEmpty = phone.length >= 1;
  const isEmailEmpty = emailId.length > 0 && domain.length > 0;

  return (
    <div className=" border border-slate-950">
      <SignupHeader title="이름을" description="정확한 이름을 입력해주세요" />
      {isEmailEmpty && (
        <>
          <InputField
            id="password"
            type="password"
            label="비밀번호"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="특수문자, 영문, 숫자 포함 10자 이상"
          />
          <InputField
            id="passwordcheck"
            type="password"
            label="비밀번호 확인"
            value={passwordCheck}
            onChange={e => setPasswordCheck(e.target.value)}
            placeholder="특수문자, 영문, 숫자 포함 10자 이상"
          />
        </>
      )}
      {isNumberEmpty && (
        <div className="flex items-center">
          <InputField
            id="email"
            type="email"
            label="이메일"
            value={emailId}
            placeholder="이메일을 입력해주세요"
            onChange={e => setEmailId(e.target.value)}
          />
          <EmailDropdown selected={domain} onSelect={setDomain} />
        </div>
      )}

      {isNameEmpty && (
        <InputField
          id="phone"
          label="휴대폰 번호"
          placeholder="예) 휴대폰번호를 입력해주세요"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
      )}

      <InputField
        id="name"
        label="이름"
        placeholder="예) 홍길동"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <div className="border border-stroke p-5 mt-4">
        {/* <button className="bg-red text-white text-base px-5 py-3 w-80 rounded">
          입력완료
        </button> */}
        <Button>입력완료</Button>
      </div>
    </div>
  );
}
