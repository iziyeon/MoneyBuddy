import type { JSX } from 'react';
import ConsultContentInput from '../../components/pages/Reservation/ConsultContentInput';
import { useReservationStore } from '../../stores/useReservationStore';
import { useNavigate } from 'react-router-dom';
import BottomButtons from '../../components/common/BottomButtons';
import { useEffect } from 'react';
import ReservationNotice from '../../components/pages/Reservation/ReservationNotice';

export default function EnterConcernPage(): JSX.Element {
  const { expert, content, setContent } = useReservationStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!expert) {
      navigate(-1);
    }
  }, [expert, navigate]);

  return (
    <div>
      <div className="text-center">
        <ReservationNotice />
        <div className="text-h3 mb-2 mt-8">
          원하는 상담 내용을 자세히 적어주세요.
        </div>
        <div className="text-b2 text-[#777777]">
          자세히 적을수록 상담이 더 유익해질 수 있어요.
        </div>
      </div>
      <ConsultContentInput
        value={content}
        onChange={setContent}
        maxLength={2000}
      />
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
