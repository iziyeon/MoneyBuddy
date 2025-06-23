import { useRef, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import EmojiPicker, { type EmojiClickData } from 'emoji-picker-react';
import { Plus, Smile } from 'lucide-react';
import { useChatStore } from '../../../stores/useChatStore';

interface ChatInputProps {
  onSend: (text: string, imageFile?: File) => Promise<void>;
  disabled?: boolean;
}

export default function ChatInput({ onSend, disabled }: ChatInputProps) {
  const [input, setInput] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const emojiButtonRef = useRef<HTMLButtonElement>(null);

  const { replyTarget, setReplyTarget } = useChatStore();

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed && !image) return;

    setLoading(true);
    try {
      await onSend(trimmed, image || undefined);
      setInput('');
      setImage(null);
      setReplyTarget(null);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImage(file);
  };

  const handleEmojiClick = (emojiData: EmojiClickData) => {
    setInput(prev => prev + emojiData.emoji);
    setShowEmojiPicker(false);
    textareaRef.current?.focus();
  };

  return (
    <div className="relative w-full px-4 py-4 bg-white border-t border-gray-200">
      {replyTarget && (
        <div className="bg-blue-50 border-l-4 border-blue-400 px-3 py-2 mb-2 rounded-md text-sm text-gray-700">
          <div className="flex justify-between items-center">
            <div className="truncate max-w-[240px]">
              <span className="font-semibold">
                {replyTarget.senderNickname}
              </span>
              : {replyTarget.message}
            </div>
            <button
              onClick={() => setReplyTarget(null)}
              className="text-gray-500 text-xs ml-2"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {image && (
        <div className="mb-2 flex items-center justify-between bg-gray-100 p-2 rounded">
          <span className="text-sm text-gray-700 truncate max-w-[80%]">
            {image.name}
          </span>
          <button
            onClick={() => setImage(null)}
            className="text-xs text-red-500"
          >
            삭제
          </button>
        </div>
      )}

      <div className="flex gap-2">
        <button
          onClick={() => fileInputRef.current?.click()}
          className="text-gray-500 hover:text-blue-500 text-xl"
        >
          <Plus />
        </button>

        <button
          ref={emojiButtonRef}
          onClick={() => setShowEmojiPicker(prev => !prev)}
          className="text-gray-500 hover:text-yellow-500 text-xl"
        >
          <Smile />
        </button>

        <textarea
          ref={textareaRef}
          rows={1}
          className="flex-grow resize-none p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm max-h-40 overflow-y-hidden"
          placeholder="메시지를 입력하세요..."
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          disabled={disabled || loading}
        />

        <button
          onClick={handleSend}
          className="px-4 py-2 text-sm font-semibold bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 flex items-center justify-center"
          disabled={disabled || loading || (!input.trim() && !image)}
        >
          {loading ? <ClipLoader size={16} color="#fff" /> : '전송'}
        </button>

        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          className="hidden"
          onChange={handleImageChange}
        />
      </div>

      {showEmojiPicker && (
        <div className="absolute bottom-full mb-2 left-4 z-50">
          <EmojiPicker onEmojiClick={handleEmojiClick} />
        </div>
      )}
    </div>
  );
}
