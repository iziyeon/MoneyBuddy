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
  const [isCustom, setIsCustom] = useState(false);
  const [customDomain, setCustomDomain] = useState('');

  const handleSelect = (domain: string) => {
    setOpen(false);
    if (domain === 'custom') {
      setIsCustom(true);
      onSelect('');
    } else {
      setIsCustom(false);
      onSelect(domain);
    }
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomDomain(value);
    onSelect(value);
  };

  return (
    <div className="relative ml-2 w-40">
      {isCustom ? (
        <>
          <input
            type="text"
            value={customDomain}
            onChange={handleCustomChange}
            placeholder="example.com"
            className="w-full px-4 py-3 border rounded text-sm"
          />

          <div className="mt-1 text-right">
            <button
              type="button"
              onClick={() => {
                setIsCustom(false);
                setCustomDomain('');
                onSelect('');
              }}
              className="text-blue-500 text-xs hover:underline"
            >
              목록에서 선택하기
            </button>
          </div>
        </>
      ) : (
        <>
          <div
            className="border px-4 py-3 cursor-pointer flex justify-between items-center rounded"
            onClick={() => setOpen(prev => !prev)}
          >
            <span>{selected || '이메일 선택'}</span>
            <span>▾</span>
          </div>

          {open && (
            <ul className="absolute z-10 mt-1 bg-white border w-full rounded shadow text-sm">
              {domains.map(domain => (
                <li
                  key={domain}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSelect(domain)}
                >
                  @{domain}
                </li>
              ))}
              <li
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect('custom')}
              >
                직접 입력하기
              </li>
            </ul>
          )}
        </>
      )}
    </div>
  );
}
