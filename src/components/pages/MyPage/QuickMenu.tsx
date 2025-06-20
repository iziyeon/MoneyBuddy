import Text from '../../common/Text';

interface QuickMenuProps {
  onChallengeClick: () => void;
  onConsultationClick: () => void;
  onExpertClick: () => void;
  onClassClick: () => void;
}

export default function QuickMenu({
  onChallengeClick,
  onConsultationClick,
  onExpertClick,
  onClassClick,
}: QuickMenuProps) {
  const menuItems = [
    {
      id: 'challenge',
      label: '챌린지 현황',
      icon: '🎯',
      onClick: onChallengeClick,
    },
    {
      id: 'consultation',
      label: '상담 내역',
      icon: '💬',
      onClick: onConsultationClick,
    },
    {
      id: 'expert',
      label: '찜한 전문가',
      icon: '❤️',
      onClick: onExpertClick,
    },
    {
      id: 'class',
      label: '마이클래스',
      icon: '📚',
      onClick: onClassClick,
    },
  ];

  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200">
      <div className="grid grid-cols-4 gap-4">
        {menuItems.map(item => (
          <button
            key={item.id}
            onClick={item.onClick}
            className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <span className="text-2xl mb-2">{item.icon}</span>
            <Text type="B3" className="text-gray-700 text-center">
              {item.label}
            </Text>
          </button>
        ))}
      </div>
    </div>
  );
}
