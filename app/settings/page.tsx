import Link from "next/link";

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

      {/*
        TICKET: "Add a dark mode toggle in settings"
        No theme system exists yet in this app. A ticket asking for a dark
        mode toggle should result in something like:
          - a theme context/provider
          - a toggle control added to this section
          - the app respecting the chosen theme
      */}
    </main>
  );
}
