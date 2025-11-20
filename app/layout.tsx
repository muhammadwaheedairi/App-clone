import type { Metadata } from 'next';
import localFont from 'next/font/local';
import React from 'react';
import './globals.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Ensure /public/fonts/Inter-Variable.woff2 exists
// If you see a "Font file not found" error, ensure you have placed the file in public/fonts/
const inter = localFont({
  src: '../public/fonts/Inter-Variable.woff2',
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Superwhisper - AI Voice to Text',
  description: 'A pixel-perfect recreation of the Superwhisper landing page with a functional AI writing demo powered by Gemini.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} bg-[#050505] text-white antialiased font-sans`}>
        <Navbar />
        <main className="min-h-screen overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}