import { render, act, fireEvent } from '@testing-library/react';
import { ThemeProvider, useTheme } from './ThemeContext';
import '@testing-library/jest-dom';

function TestComponent() {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <span data-testid="current-theme">{theme}</span>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
      <button onClick={() => setTheme('system')}>System</button>
    </div>
  );
}

describe('ThemeContext', () => {
  test('initializes with correct theme from localStorage', () => {
    localStorage.setItem('theme', 'dark');

    const { getByTestId } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(getByTestId('current-theme')).toHaveTextContent('dark');
  });

  test('updates theme correctly', () => {
    const { getByTestId, getByText } = render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    act(() => {
      fireEvent.click(getByText(/light/i));
    });

    expect(getByTestId('current-theme')).toHaveTextContent('light');

    act(() => {
      fireEvent.click(getByText(/dark/i));
    });

    expect(getByTestId('current-theme')).toHaveTextContent('dark');

    act(() => {
      fireEvent.click(getByText(/system/i));
    });

    expect(getByTestId('current-theme')).toHaveTextContent('system');
  });
});