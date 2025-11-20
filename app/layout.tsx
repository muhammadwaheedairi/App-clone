import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import './globals.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}