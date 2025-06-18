import { consultationHistoryStyles } from '../../../styles/consultationHistory.styles';

interface TabSectionProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function TabSection({
  activeTab,
  onTabChange,
}: TabSectionProps) {
  const { tabSection } = consultationHistoryStyles;

  const tabs = [
    { id: 'all', label: '전체' },
    { id: 'scheduled', label: '예약 완료' },
    { id: 'ongoing', label: '상담 완료' },
    { id: 'cancelled', label: '상담 취소' },
  ];

  return (
    <div className={tabSection.container}>
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`${tabSection.tab} ${
            activeTab === tab.id ? tabSection.activeTab : tabSection.inactiveTab
          }`}
        >
          <span className={tabSection.tabText}>{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
