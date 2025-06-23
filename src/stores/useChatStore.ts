import { create } from 'zustand';
import type { ConsultationMessage } from '../types';

interface ChatStoreState {
  messages: ConsultationMessage[];
  replyTarget: ConsultationMessage | null;
  searchTerm: string;
  showSearchInput: boolean;

  setMessages: (messages: ConsultationMessage[]) => void;
  addMessage: (message: ConsultationMessage) => void;
  setReplyTarget: (message: ConsultationMessage | null) => void;
  setSearchTerm: (term: string) => void;
  setShowSearchInput: (show: boolean) => void;
  resetChatState: () => void;
}

export const useChatStore = create<ChatStoreState>(set => ({
  messages: [],
  replyTarget: null,
  searchTerm: '',
  showSearchInput: false,

  setMessages: messages => set({ messages }),
  addMessage: message =>
    set(state => ({ messages: [...state.messages, message] })),
  setReplyTarget: message => set({ replyTarget: message }),
  setSearchTerm: term => set({ searchTerm: term }),
  setShowSearchInput: show => set({ showSearchInput: show }),
  resetChatState: () =>
    set({
      messages: [],
      replyTarget: null,
      searchTerm: '',
      showSearchInput: false,
    }),
}));
