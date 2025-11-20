import React from 'react';
import { Apple, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 flex flex-col items-center text-center overflow-hidden">
      {/* Background Texture Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-white/[0.02] blur-[100px] rounded-full pointer-events-none" />

      {/* Main Logo 3D representation */}
      <div className="relative w-32 h-32 mb-8 group cursor-pointer">
         {/* Mimicking the triangle logo from image */}
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#444" />
              <stop offset="100%" stopColor="#111" />
            </linearGradient>
          </defs>
          <path 
            d="M50 15 L15 85 H85 L50 15Z" 
            fill="url(#logoGradient)" 
            stroke="#333" 
            strokeWidth="1"
            className="filter drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          />
           {/* Inner triangle for depth */}
          <path d="M50 25 L25 75 H75 L50 25Z" fill="#000" opacity="0.5" />
        </svg>
      </div>

      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4 max-w-4xl mx-auto leading-[1.1]">
        Write 3x faster, without <br className="hidden md:block" /> lifting a finger.
      </h1>

      <div className="text-xl text-zinc-400 mb-8 font-medium">
        <span className="text-white">superwhisper</span>
        <span className="block text-sm text-zinc-500 mt-1">AI powered voice to text</span>
      </div>

      <div className="max-w-2xl mx-auto mb-12 text-center">
        <p className="text-lg text-zinc-300 leading-relaxed glass-panel p-6 rounded-xl border border-white/10">
          Hey Rahul, excited to see what you've been working on, been hearing great things! Let's meet at the usual spot for coffee next week. Cheers, Neil.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <button className="group relative bg-white text-black px-8 py-3.5 rounded-lg font-semibold text-lg flex items-center gap-2 hover:bg-zinc-200 transition-all active:scale-95">
          <Apple size={20} className="fill-current" />
          <span>Download for Mac</span>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-zinc-500 font-normal whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            requires macOS 13+
          </div>
        </button>

        <a href="#" className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-sm text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors group">
          <span className="font-medium text-white">Now available on iOS</span>
          <span>Download now</span>
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
      
      <div className="mt-16 animate-bounce text-zinc-600">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 13L12 18L17 13M7 6L12 11L17 6" />
        </svg>
      </div>
    </section>
  );
};