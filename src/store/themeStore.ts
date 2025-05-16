import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { ThemeConfig } from '../types';

interface ThemeState {
  theme: ThemeConfig;
  setTheme: (theme: ThemeConfig) => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: {
        mode: 'system',
      },
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'theme-storage',
    }
  )
);