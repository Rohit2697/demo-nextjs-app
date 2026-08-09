import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>SDLC Agent Demo</h1>
      <p>This is a deliberately tiny app used to demo the agent pipeline.</p>
      <p>
        <Link href="/settings">Go to Settings →</Link>
      </p>
    </main>
  );
}
