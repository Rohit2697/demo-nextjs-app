'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  };

  const wrapperStyle =
    theme === 'dark'
      ? { backgroundColor: '#111111', color: '#f5f5f5', minHeight: '100vh' }
      : { backgroundColor: '#ffffff', color: '#111111', minHeight: '100vh' };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={wrapperStyle}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
