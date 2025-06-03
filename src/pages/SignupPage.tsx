import type { JSX } from 'react';
import InputField from '../components/signup/InputField';
import SignupHeader from '../components/signup/SignupHeader';

export default function SignupPage(): JSX.Element {
  return (
    <div className="p-10 m-10 border border-slate-950">
      <SignupHeader
        title="이름을 알려주세요"
        description="정확한 이름을 입력해주세요"
      />
      {/* <div className="text-xl pb-2">이름을 알려주세요</div>
      <div className="text-xs pb-6">정확한 이름을 입력해주세요</div> */}
      <InputField id="name" label="이름" placeholder="예) 홍길동" />
      {/* <div className="flex flex-col">
        <InputField label="이름" placeholder="예) 홍길동" />
        <label htmlFor="name" className="text-xs pb-2">
          이름
        </label>
        <input
          id="name"
          className="p-3.5 rounded text-sm border  border-stroke"
          placeholder="예) 홍길동"
        />
      </div> */}
      <div className="border border-stroke p-5">
        <button className="bg-disabled text-white text-base px-5 py-3 w-80 rounded">
          입력완료
        </button>
      </div>
    </div>
  );
}
