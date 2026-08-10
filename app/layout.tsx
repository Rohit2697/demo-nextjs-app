import { ThemeProvider } from "./theme/ThemeContext";

export const metadata = {
  title: "SDLC Agent Demo",
  description: "Minimal app used to demo the SDLC agent POC",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "system-ui, sans-serif", margin: 0, padding: "2rem" }}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
