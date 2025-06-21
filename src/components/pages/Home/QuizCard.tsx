import { useState } from 'react';
import LightBulbIcon from '../../../assets/icons/common/lightbulbIcon.png';

const QUIZ_QUESTION = 'GDP는 무엇의 약자일까요?';
const QUIZ_OPTIONS = [
  '국내 총생산',
  '글로벌 개발 프로그램',
  '일반 국내 정책',
  '총역학적 힘',
];
const CORRECT_ANSWER = '국내 총생산';

export default function QuizCard() {
  const [selected, setSelected] = useState<string | null>(null);
  const [result, setResult] = useState<string | null>(null);

  const handleCheck = () => {
    if (!selected) return;
    setResult(selected === CORRECT_ANSWER ? '정답입니다!' : '틀렸습니다!');
  };

  return (
    <div className="relative  my-14">
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-10">
        <img src={LightBulbIcon} alt="quiz icon" className="w-24 h-24" />
      </div>

      <div className="bg-gradient-to-t from-[#6488FF] to-[#9FB6FF] rounded-xl pt-12 pb-6 px-4 my-6 mx-4 text-center shadow-md">
        <div className="text-sm font-medium text-white mb-1">
          지금 퀴즈 풀고, 포인트 적립받자!
        </div>

        <div className="text-[18px] font-bold mb-5 text-white">
          {QUIZ_QUESTION}
        </div>

        <div className="grid grid-cols-2 gap-2 mb-4">
          {QUIZ_OPTIONS.map(option => (
            <button
              key={option}
              className={`border rounded-md py-2 px-1 text-sm transition-all duration-150 ${
                selected === option
                  ? 'bg-white font-semibold border-[#5A67D8] text-[#5A67D8]'
                  : 'bg-[#f4f6fa] text-gray-600  border-transparent'
              }`}
              onClick={() => setSelected(option)}
            >
              {option}
            </button>
          ))}
        </div>

        <button
          onClick={handleCheck}
          className="w-full py-2 rounded-md bg-white text-sm font-semibold text-black shadow-md border border-gray-200 hover:bg-gray-50"
        >
          정답 확인하기
        </button>

        {result && (
          <div className="mt-3 text-sm font-semibold text-white">{result}</div>
        )}
      </div>
    </div>
  );
}
