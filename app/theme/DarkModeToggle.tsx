'use client';

import { useTheme } from './ThemeContext';

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(event.target.value as 'light' | 'dark' | 'system');
  };

  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <span>Theme:</span>
      <select value={theme} onChange={handleThemeChange} style={{ padding: '0.5rem' }}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="system">System</option>
      </select>
    </label>
  );
}