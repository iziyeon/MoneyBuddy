import { create } from 'zustand';

interface ReservationState {
  selectedConcern: string | null;
  content: string;

  setSelectedConcern: (key: string) => void;
  setContent: (value: string) => void;
  clearConcern: () => void;
}

export const useReservationStore = create<ReservationState>(set => ({
  selectedConcern: null,
  content: '',

  setSelectedConcern: key => set({ selectedConcern: key }),
  setContent: value => set({ content: value }),

  clearConcern: () => set({ selectedConcern: null, content: '' }),
}));
