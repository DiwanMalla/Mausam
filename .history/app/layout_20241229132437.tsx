import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Mausam - Weather app",
  description: "Solo project by Diwan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="app-header">Header Content</header>
        <main className="app-main">{children}</main>
        <footer className="app-footer">Footer Content</footer>
      </body>
    </html>
  );
}
