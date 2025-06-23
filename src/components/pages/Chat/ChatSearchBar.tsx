import { X } from 'lucide-react';
import { useChatStore } from '../../../stores/useChatStore';

export default function ChatSearchBar() {
  const { searchTerm, setSearchTerm, setShowSearchInput } = useChatStore();

  return (
    <div className="px-4 py-2 bg-white shadow w-full z-30">
      <div className="relative max-w-2xl mx-auto">
        <input
          type="text"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="메시지 내용 검색"
          className="w-full px-4 py-2 border rounded pr-10 text-sm"
        />
        {searchTerm && (
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400"
            onClick={() => {
              setSearchTerm('');
              setShowSearchInput(false);
            }}
          >
            <X size={20} />
          </button>
        )}
      </div>
    </div>
  );
}
