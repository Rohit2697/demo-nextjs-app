import Link from 'next/link';
import { useTheme } from './theme/ThemeContext';

export default function Home() {
  const { theme } = useTheme();

  return (
    <main className={theme}>
      <h1>SDLC Agent Demo</h1>
      <p>This is a deliberately tiny app used to demo the agent pipeline.</p>
      <p>
        <Link href="/settings">Go to Settings →</Link>
      </p>
    </main>
  );
}
