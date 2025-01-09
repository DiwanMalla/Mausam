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
        <div className="bg-gradient-to-br from-background to-muted">
          header
          <main className="min-h-screen container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="app-footer">Footer Content</footer>
        </div>
      </body>
    </html>
  );
}
