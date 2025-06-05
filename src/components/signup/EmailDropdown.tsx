import { useState, type JSX } from 'react';

interface EmailDropdownProps {
  selected: string;
  onSelect: (value: string) => void;
}

const domains = ['naver.com', 'gmail.com', 'nate.com', 'daum.net'];

export default function EmailDropdown({
  selected,
  onSelect,
}: EmailDropdownProps): JSX.Element {
  const [open, setOpen] = useState(false);
  // const [customDomain, setCustomDomain] = useState('');

  const handleSelect = (domain: string) => {
    setOpen(false);
    onSelect(domain);
  };

  return (
    <div className="relative">
      <div
        className="border ml-2 px-4 py-3 cursor-pointer flex justify-between items-center w-40"
        onClick={() => setOpen(prev => !prev)}
      >
        <span>{selected || '이메일 선택'}</span>
        <span>▾</span>
      </div>

      {open && (
        <ul className="absolute z-10 mt-1 bg-white border w-40 rounded shadow text-sm">
          {domains.map(domain => (
            <li
              key={domain}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleSelect(domain)}
            >
              @{domain}
            </li>
          ))}
          {/* <li
            className="px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer"
            onClick={() => handleSelect('custom')}
          >
            직접 입력하기
          </li>
          {selected === 'custom' && (
            <input
              type="text"
              value={customDomain}
              onChange={e => {
                setCustomDomain(e.target.value);
                onSelect(e.target.value);
              }}
              placeholder="example.com"
              className="w-full px-3 py-2 border-t"
            />
          )} */}
        </ul>
      )}
    </div>
  );
}
