import React from 'react';
import { Apple, ArrowRight, ChevronsDown } from 'lucide-react';
import Link from 'next/link';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-[#050505] px-4 pt-10 pb-20">
      {/* Background Texture/Gradient */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-soft-light"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none" />

      {/* Logo */}
      <div className="relative w-40 h-40 mb-8 select-none pointer-events-none">
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
            <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#333" />
                    <stop offset="50%" stopColor="#151515" />
                    <stop offset="100%" stopColor="#000" />
                </linearGradient>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
                    <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            {/* 3D Triangle Shape Simulation */}
            <path 
                d="M100 40 C150 40 170 80 160 110 C150 140 120 160 100 160 C80 160 50 140 40 110 C30 80 50 40 100 40Z" 
                fill="none" 
                stroke="url(#logoGradient)" 
                strokeWidth="24" 
                strokeLinecap="round"
                strokeLinejoin="round"
                className="drop-shadow-2xl"
            />
            {/* Top Highlight for 3D effect */}
            <path 
                d="M100 40 C150 40 170 80 160 110 C150 140 120 160 100 160 C80 160 50 140 40 110 C30 80 50 40 100 40Z" 
                fill="none" 
                stroke="white" 
                strokeWidth="1" 
                strokeOpacity="0.15"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
             {/* Inner shadow fake */}
             <path 
                d="M100 52 C140 52 156 84 148 108 C140 132 116 148 100 148 C84 148 60 132 52 108 C44 84 60 52 100 52Z" 
                fill="none" 
                stroke="black" 
                strokeWidth="2" 
                strokeOpacity="0.5"
                className="blur-sm"
            />
        </svg>
      </div>

      {/* Headline */}
      <h1 className="text-5xl md:text-7xl leading-[1.1] font-bold tracking-tight text-white mb-6 max-w-5xl mx-auto">
        Write 3x faster, without <br className="hidden md:block" /> lifting a finger.
      </h1>

      {/* Subhead */}
      <div className="flex flex-col items-center gap-1 mb-12">
        <span className="text-xl text-zinc-300 font-medium tracking-tight">superwhisper</span>
        <span className="text-sm text-zinc-500 font-medium tracking-wide">AI powered voice to text</span>
      </div>

      {/* Chat Bubble Text */}
      <div className="max-w-2xl mx-auto mb-14 text-center px-4">
        <p className="text-lg md:text-[19px] text-zinc-400 leading-relaxed font-medium">
          Hey Rahul, excited to see what you've been working on, been hearing great things! Let's meet at the usual spot for coffee next week. Cheers, Neil.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex flex-col items-center w-full">
        <button className="group relative bg-white text-black px-8 py-3.5 rounded-xl font-semibold text-[17px] flex items-center gap-2.5 hover:bg-zinc-200 transition-all active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          <Apple size={20} className="fill-current mb-0.5" />
          <span>Download for Mac</span>
        </button>
        
        <span className="mt-3 text-[13px] text-zinc-600 font-medium tracking-wide">
            requires macOS 13+
        </span>

        <Link href="#" className="mt-10 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#111] border border-white/10 text-[13px] text-zinc-500 hover:text-white hover:border-white/20 transition-all group backdrop-blur-sm">
          <span className="font-medium">Now available on iOS</span>
          <span className="text-zinc-300 group-hover:text-white transition-colors flex items-center gap-1 ml-1">
             Download now <ArrowRight size={12} className="opacity-70 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </Link>
      </div>
      
      {/* Bottom Arrow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-700/50 animate-bounce">
        <ChevronsDown size={24} />
      </div>
    </section>
  );
};