import { bookmarkedExpertsStyles } from '../../../styles/bookmarkedExperts.styles';

interface BookmarkedExpertsTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function BookmarkedExpertsTabs({
  activeTab,
  onTabChange,
}: BookmarkedExpertsTabsProps) {
  const {
    tabContainer,
    tab,
    activeTab: activeTabStyle,
    inactiveTab,
    tabText,
    activeTabText,
    inactiveTabText,
  } = bookmarkedExpertsStyles;
  const tabs = [
    { id: '소비', label: '소비' },
    { id: '저축', label: '저축' },
    { id: '투자', label: '투자' },
    { id: '부채', label: '부채' },
    { id: '기타', label: '기타' },
  ];

  return (
    <div className={tabContainer}>
      {tabs.map(tabItem => (
        <button
          key={tabItem.id}
          onClick={() => onTabChange(tabItem.id)}
          className={`${tab} ${
            activeTab === tabItem.id ? activeTabStyle : inactiveTab
          }`}
        >
          <span
            className={`${tabText} ${
              activeTab === tabItem.id ? activeTabText : inactiveTabText
            }`}
          >
            {tabItem.label}
          </span>
        </button>
      ))}
    </div>
  );
}
