import { type JSX } from 'react';
import Button from '../../common/Button';

export default function MethodSelector(): JSX.Element {
  return (
    <div>
      <div className="text-h3 my-4 mx-2">상담 방식 선택</div>

      <div className="flex gap-2">
        <Button variant="text2" className="flex-1 border py-4">
          채팅 상담
        </Button>
        <Button variant="text2" className="flex-1 border py-4">
          전화 상담
        </Button>
      </div>
    </div>
  );
}
