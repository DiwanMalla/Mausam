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
          <footer className="border-t backdrop-blur py-12">
            <div className="container mx-auto px-4 text-center text-gray-400">
              Made by Diwan
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
