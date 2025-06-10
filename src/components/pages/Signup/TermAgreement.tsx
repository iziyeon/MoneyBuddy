import { type JSX } from 'react';

type Props = {
  checkedItems: string[];
  errorMessage?: string;
  onCheck: (value: string, checked: boolean) => void;
};

export default function TermsAgreement({
  checkedItems,
  errorMessage,
  onCheck,
}: Props): JSX.Element {
  const terms = [
    { id: 'all', label: '모두 동의 (선택 사항 포함)' },
    { id: 'age', label: '[필수] 만 14세 이상입니다.' },
    { id: 'service', label: '[필수] 이용약관에 동의합니다.' },
    { id: 'privacy', label: '[필수] 개인정보 수집에 동의합니다.' },
    { id: 'marketing', label: '[선택] 마케팅 정보 수신에 동의합니다.' },
  ];

  return (
    <div className="mt-6 space-y-2">
      {errorMessage && (
        <p className="mt-1 text-xs p-2 text-error">{errorMessage}</p>
      )}
      <span className=" text-xs text-font2 p-2">서비스 이용약관 동의</span>
      {terms.map(term =>
        term.id === 'all' ? (
          <label
            key={term.id}
            className="flex items-center space-x-2 border-b p-2 border-b-slate-400"
          >
            <input
              type="checkbox"
              checked={checkedItems.includes(term.id)}
              onChange={e => onCheck(term.id, e.target.checked)}
            />
            <span>{term.label}</span>
          </label>
        ) : (
          <label key={term.id} className="flex items-center p-2 space-x-2">
            <input
              type="checkbox"
              checked={checkedItems.includes(term.id)}
              onChange={e => onCheck(term.id, e.target.checked)}
            />
            <span>{term.label}</span>
          </label>
        ),
      )}
    </div>
  );
}
