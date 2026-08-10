'use client';

import { useTheme } from './ThemeContext';

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <input
        type="checkbox"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />
      Dark mode
    </label>
  );
}
