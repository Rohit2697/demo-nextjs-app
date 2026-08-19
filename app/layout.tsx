import { ThemeProvider } from './theme/ThemeContext';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'SDLC Agent Demo',
  description: 'Minimal app used to demo the SDLC agent POC',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', margin: 0, padding: '2rem' }}>
        <Navbar />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}