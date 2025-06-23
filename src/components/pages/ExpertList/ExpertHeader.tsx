import Text from '../../common/Text';

type Props = {
  activeTab: string;
  onTabChange: (tab: string) => void;
};

export default function ExpertHeader({ activeTab, onTabChange }: Props) {
  const tabs = ['소비', '저축', '투자', '부채', '기타'];

  return (
    <div className="flex mb-6 border-b">
      {tabs.map(tab => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`
            flex-1 py-3 text-center
            ${activeTab === tab ? 'border-b-2 border-primary text-primary font-medium' : 'text-font2'}
          `}
        >
          <Text type="B2">{tab}</Text>
        </button>
      ))}
    </div>
  );
}
