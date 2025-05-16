import React, { useEffect } from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useThemeStore } from '../../store/themeStore';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useThemeStore();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const root = window.document.documentElement;

    const updateTheme = () => {
      const isDark = theme.mode === 'dark' || 
        (theme.mode === 'system' && mediaQuery.matches);
      
      root.classList.toggle('dark', isDark);
    };

    mediaQuery.addEventListener('change', updateTheme);
    updateTheme();

    return () => mediaQuery.removeEventListener('change', updateTheme);
  }, [theme]);

  return (
    <div className="relative inline-block">
      <select
        value={theme.mode}
        onChange={(e) => setTheme({ mode: e.target.value as 'light' | 'dark' | 'system' })}
        className="appearance-none bg-transparent border border-gray-300 dark:border-gray-600 rounded-md py-1 pl-8 pr-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
      <div className="absolute inset-y-0 left-2 flex items-center pointer-events-none">
        {theme.mode === 'light' && <Sun className="h-4 w-4" />}
        {theme.mode === 'dark' && <Moon className="h-4 w-4" />}
        {theme.mode === 'system' && <Monitor className="h-4 w-4" />}
      </div>
    </div>
  );
};

export default ThemeSwitcher;