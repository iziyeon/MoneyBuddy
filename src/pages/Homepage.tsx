import Footer from '../components/layout/Footer';
import EcomoicTermBanner from '../components/pages/Home/EcomoicTermBanner';
import HomeExpertList from '../components/pages/Home/HomeExpertList';
import PromotionCard from '../components/pages/Home/PromotionCard';
import QuizCard from '../components/pages/Home/QuizCard';
import GoldBar from '../assets/icons/common/goldbarIcon.png';
import Megaphone from '../assets/icons/common/megaphoneIcon.png';
import MegazineList from '../components/pages/Home/MegazineList';
import RecommendedCard from '../components/pages/Home/RecommendCard';
import Content_1 from '../assets/images/Content_1.png';

export default function HomePage() {
  return (
    <div>
      <HomeExpertList />
      <RecommendedCard imageUrl={Content_1} />
      <MegazineList />
      <QuizCard />
      <EcomoicTermBanner />
      <PromotionCard
        text={'지금 바로 엑스퍼트와\n1:1 상담 받아보세요'}
        page="1 / 2"
        bgColor="bg-[#EAF0FF]"
        images={[GoldBar, Megaphone]}
      />
      <Footer />
    </div>
  );
}
