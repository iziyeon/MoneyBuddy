import type { JSX } from 'react';
import ConsultContentInput from '../../components/pages/Reservation/ConsultContentInput';
import { useReservationStore } from '../../stores/useReservationStore';
import { useNavigate } from 'react-router-dom';
import BottomButtons from '../../components/common/BottomButtons';

export default function EnterConcernPage(): JSX.Element {
  const { content, setContent } = useReservationStore();
  const navigate = useNavigate();

  return (
    <div>
      <div className="text-center">
        <div className="text-h3 mb-2">
          원하는 상담 내용을 자세히 적어주세요.
        </div>
        <div className="text-b2 text-[#777777]">
          자세히 적을 수록 상담이 더 유익해질 수 있어요.
        </div>
      </div>
      <ConsultContentInput
        value={content}
        onChange={setContent}
        maxLength={2000}
      />
      {/* <div className="mt-10 flex gap-2">
        <Button className="flex-1" variant="secondary">
          이전
        </Button>
        <Button
          variant={content ? 'primary' : 'disabled'}
          className="flex-1"
          onClick={() => navigate('/reservation/step3')}
        >
          작성 완료
        </Button>
      </div> */}
      <BottomButtons
        leftLabel="이전"
        rightLabel="작성 완료"
        leftVariant="secondary"
        rightVariant={content ? 'primary' : 'disabled'}
        onLeftClick={() => navigate(-1)}
        onRightClick={() => navigate('/reservation/step3')}
      />
    </div>
  );
}
