import Link from "next/link";
import DarkModeToggle from "../theme/DarkModeToggle";

export default function Settings() {
  return (
    <main>
      <h1>Settings</h1>
      <p>
        <Link href="/">← Back home</Link>
      </p>

      <section style={{ marginTop: "1.5rem" }}>
        <h2>Notifications</h2>
        <label style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <input type="checkbox" defaultChecked />
          Email me about product updates
        </label>
      </section>

      <section style={{ marginTop: "1.5rem" }}>
        <h2>Appearance</h2>
        <DarkModeToggle />
      </section>
    </main>
  );
}
