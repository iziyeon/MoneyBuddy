import BottomNavigation from '../components/common/BottomNavigation';
import CategoryNav from '../components/pages/Expert/CategoryNav';
import ExpertHeader from '../components/pages/Expert/ExpertHeader';
import MonthlyExpertList from '../components/pages/Expert/MonthlyExpertList';

export default function ExpertPage() {
  return (
    <div>
      <ExpertHeader />
      <CategoryNav />
      <MonthlyExpertList />
      <BottomNavigation />
    </div>
  );
}
