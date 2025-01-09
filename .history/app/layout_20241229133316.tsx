import type { Metadata } from "next";

import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";

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
        <ThemeProvider defaultTheme="dark">
          <div className="bg-gradient-to-br from-background to-muted">
            header
            <main className="min-h-screen container mx-auto px-4 py-8">
              {children}h
            </main>
            <footer className="border-t backdrop-blur py-12 supports-[backdrop-filter]:bg-background/60">
              <div className="container mx-auto px-4 text-center text-gray-400">
                Made by Diwan
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
