'use client';

import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          {/* Logo Icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 19H22L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-90"/>
            <path d="M12 6L6 16H18L12 6Z" fill="white" className="opacity-80"/>
          </svg>
          <span className="font-semibold text-lg tracking-tight text-white">superwhisper</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-zinc-400 font-medium">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#testimonials" className="hover:text-white transition-colors">Reviews</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium text-white hover:opacity-80 transition-opacity">Log in</button>
          <button className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors">
            Download
          </button>
        </div>

        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#050505] border-b border-white/10 p-6 flex flex-col gap-4">
          <a href="#features" className="text-zinc-400 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#testimonials" className="text-zinc-400 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Reviews</a>
          <a href="#pricing" className="text-zinc-400 hover:text-white" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
          <div className="h-px bg-white/10 my-2" />
          <button className="text-left text-white font-medium">Log in</button>
          <button className="bg-white text-black px-4 py-2 rounded-full font-medium text-center">Download</button>
        </div>
      )}
    </nav>
  );
};