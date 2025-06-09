import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';

type User = {
  id: number;
  nickname: string;
  role: string;
};

type AuthState = {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  setAuth: (user: User, accessToken: string, refreshToken: string) => void;
  clearAuth: () => void;
};

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      set => ({
        user: null,
        accessToken: null,
        refreshToken: null,
        setAuth: (user, accessToken, refreshToken) => {
          set({ user, accessToken, refreshToken });
        },
        clearAuth: () => {
          set({ user: null, accessToken: null, refreshToken: null });
        },
      }),
      {
        name: 'auth-storage',
      },
    ),
  ),
);
