import { create } from 'zustand';

interface CalendarState {
  year: number;
  month: number;

  goToPrevMonth: () => void;
  goToNextMonth: () => void;

  isCurrentMonth: () => boolean;
}

const today = new Date();
const currentYear = today.getFullYear();
const currentMonth = today.getMonth();

export const useCalendarStore = create<CalendarState>((set, get) => ({
  year: currentYear,
  month: currentMonth,

  goToPrevMonth: () => {
    const { year, month } = get();

    const newYear = month === 0 ? year - 1 : year;
    const newMonth = month === 0 ? 11 : month - 1;

    const isBeforeToday =
      newYear < currentYear ||
      (newYear === currentYear && newMonth < currentMonth);

    if (isBeforeToday) return;

    set({ year: newYear, month: newMonth });
  },

  goToNextMonth: () => {
    const { year, month } = get();

    if (month === 11) {
      set({ year: year + 1, month: 0 });
    } else {
      set({ month: month + 1 });
    }
  },

  isCurrentMonth: () => {
    const { year, month } = get();
    return year === currentYear && month === currentMonth;
  },
}));
