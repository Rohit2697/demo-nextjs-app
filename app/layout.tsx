import { ThemeProvider, useTheme } from './theme/ThemeContext';

export const metadata = {
  title: 'SDLC Agent Demo',
  description: 'Minimal app used to demo the SDLC agent POC',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();

  return (
    <html lang="en">
      <body className={theme} style={{ fontFamily: 'system-ui, sans-serif', margin: 0, padding: '2rem' }}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
