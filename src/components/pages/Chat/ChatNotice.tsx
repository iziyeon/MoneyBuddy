import type { JSX } from 'react';

export default function ChatNotice(): JSX.Element {
  return (
    <div className="bg-[#F4F4F4] text-center text-sm text-gray-600 py-4 px-2 leading-relaxed">
      고객님과 소통하는 엑스퍼트는 누군가의 소중한 가족입니다.
      <br />
      이를 위반할 경우 서비스 이용이 제한될 수 있습니다.
    </div>
  );
}
