interface TabProps {
  active: 'magazine' | 'popular';
  onChange: (tab: 'magazine' | 'popular') => void;
}

export default function MegazineTab({ active, onChange }: TabProps) {
  return (
    <div className="flex bg-gray-100 rounded-lg p-1 gap-2">
      <button
        className={`flex-1 py-2 rounded-md text-sm font-semibold ${
          active === 'magazine' ? 'bg-[#6488FF] text-white' : 'text-gray-500'
        }`}
        onClick={() => onChange('magazine')}
      >
        매거진
      </button>
      <button
        className={`flex-1 py-2 rounded-md text-sm font-semibold ${
          active === 'popular' ? 'bg-[#6488FF] text-white' : 'text-gray-500'
        }`}
        onClick={() => onChange('popular')}
      >
        인기글
      </button>
    </div>
  );
}
