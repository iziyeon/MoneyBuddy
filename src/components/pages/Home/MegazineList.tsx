import { useState } from 'react';
import MegazineTab from './MegazineTab';
import MegazineCard from './MegazineCard';
import LoadMoreButton from './LoadMoreButton';
import megazine1 from '../../../assets/images/megazine_1.png';
import megazine2 from '../../../assets/images/megazine_2.png';
import megazine3 from '../../../assets/images/megazine_3.png';

export default function MegazineList() {
  const [active, setActive] = useState<'magazine' | 'popular'>('magazine');

  const dummyData = [
    {
      thumbnail: megazine1,
      category: '투자',
      title: '미국장, 국내장 뭐가 다른가요?',
      author: '한채현',
      date: '2024.06.11',
    },
    {
      thumbnail: megazine2,
      category: '부동산',
      title: '뉴스에 나오는 종부세에 대해 알아보자',
      author: '박재현',
      date: '2024.06.14',
    },
    {
      thumbnail: megazine3,
      category: '세금',
      title: '세금 모두 알차게 둘러받아볼까요?',
      author: '이지영',
      date: '2024.06.11',
    },
  ];

  return (
    <div className="px-4 py-5">
      <MegazineTab active={active} onChange={setActive} />
      <div className="flex flex-col gap-3">
        {dummyData.map((item, idx) => (
          <MegazineCard key={idx} {...item} />
        ))}
      </div>
      <LoadMoreButton label="매거진 더 보러가기" />
    </div>
  );
}
