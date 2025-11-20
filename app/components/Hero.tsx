'use client';

import React, { useState, useEffect } from 'react';
import { Apple, ArrowRight, ChevronsDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const [stage, setStage] = useState<'listening' | 'transcribing' | 'final'>('listening');
  const [displayText, setDisplayText] = useState('');
  // The text to be transcribed
  const dictationText = "Hey Rahul, excited to see what you've been working on, been hearing great things! Let's meet at the usual spot for coffee next week. Cheers, Neil.";

  // Generate random bars for the waveform visualization once
  const [waveformBars] = useState(() => 
    Array.from({ length: 45 }).map(() => ({
      height: Math.floor(Math.random() * 70) + 30 + '%', // 30% to 100% height
      animationDelay: `-${Math.random() * 2}s`, // Negative delay for instant start
      animationDuration: `${0.8 + Math.random() * 0.6}s` // Random duration
    }))
  );

  useEffect(() => {
    // Phase 1: Listening (Audio Wave) - 3s duration
    const listeningTimer = setTimeout(() => {
      setStage('transcribing');
    }, 3000);

    return () => clearTimeout(listeningTimer);
  }, []);

  useEffect(() => {
    // Phase 2: Transcribing (Typewriter effect)
    if (stage === 'transcribing') {
      if (displayText.length < dictationText.length) {
        // Calculate typing speed - slightly random for realism
        const speed = Math.random() * 30 + 20; 
        const timeout = setTimeout(() => {
          setDisplayText(dictationText.slice(0, displayText.length + 1));
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        // Once typing is complete, switch to final layout
        const finishTimer = setTimeout(() => {
          setStage('final');
        }, 600);
        return () => clearTimeout(finishTimer);
      }
    } else if (stage === 'listening') {
        setDisplayText('');
    } else if (stage === 'final') {
        setDisplayText(dictationText);
    }
  }, [stage, displayText, dictationText]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center overflow-hidden bg-[#050505] px-6 pt-16 pb-32">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.15] pointer-events-none mix-blend-overlay"></div>
      
      {/* Ambient Glow */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/[0.02] blur-[150px] rounded-full pointer-events-none" />

      {/* Logo */}
      <div className="relative w-32 h-32 md:w-44 md:h-44 mb-10 select-none pointer-events-none animate-in fade-in zoom-in duration-1000">
        <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl">
            <defs>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#2a2a2a" />
                    <stop offset="50%" stopColor="#1a1a1a" />
                    <stop offset="100%" stopColor="#080808" />
                </linearGradient>
            </defs>
            
            {/* Rounded Triangle Loop Shape */}
            <path 
                d="M100 35 
                   C145 35 175 70 165 105 
                   C155 145 120 170 100 170 
                   C80 170 45 145 35 105 
                   C25 70 55 35 100 35Z" 
                fill="url(#logoGradient)"
                className="drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            />
            
            {/* Top Highlight for 3D effect */}
            <path 
                d="M100 35 
                   C145 35 175 70 165 105 
                   C155 145 120 170 100 170 
                   C80 170 45 145 35 105 
                   C25 70 55 35 100 35Z" 
                fill="none" 
                stroke="white" 
                strokeWidth="1" 
                strokeOpacity="0.08"
            />
            
            {/* Inner Shadow / Hole Definition */}
            <path 
               d="M100 55 C130 55 145 80 140 100 C135 120 115 135 100 135 C85 135 65 120 60 100 C55 80 70 55 100 55Z"
               fill="#050505"
               className="opacity-90 blur-[2px]"
            />
        </svg>
      </div>

      {/* Static Headline */}
      <div className="flex flex-col items-center justify-center mb-2 w-full max-w-5xl mx-auto z-10">
        <h1 className="text-5xl md:text-[76px] leading-[1.05] font-bold tracking-tighter text-white text-center animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both">
          Write 3x faster, without <br className="hidden md:block" /> lifting a finger.
        </h1>
      </div>

      {/* Static Subheadline */}
      <div className="flex flex-col items-center gap-1.5 mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 fill-mode-both">
        <span className="text-2xl md:text-[22px] text-white/95 font-semibold tracking-tight">superwhisper</span>
        <span className="text-base md:text-[15px] text-zinc-500 font-medium tracking-normal">AI powered voice to text</span>
      </div>

      {/* Dynamic Area: Waveform -> Text */}
      <div className="relative max-w-[720px] mx-auto mb-16 px-6 h-[100px] w-full flex items-center justify-center">
        {/* Waveform Layer */}
        <div 
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-out ${
                stage === 'listening' ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
        >
            <div className="flex items-center justify-center gap-[3px] h-12 w-full max-w-[400px]">
                {waveformBars.map((bar, i) => (
                    <div 
                        key={i} 
                        className="w-[3px] bg-white/90 rounded-full animate-audio-wave" 
                        style={{ 
                            height: bar.height,
                            animationDelay: bar.animationDelay,
                            animationDuration: bar.animationDuration
                        }} 
                    />
                ))}
            </div>
        </div>

        {/* Transcription Text Layer */}
        <div 
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ease-out ${
                stage === 'listening' ? 'opacity-0' : 'opacity-100'
            }`}
        >
            <p className="text-xl md:text-[21px] text-zinc-400 leading-[1.6] font-medium tracking-tight antialiased text-center">
              {displayText}
              {stage === 'transcribing' && (
                  <span className="animate-pulse ml-0.5 w-[2px] h-5 md:h-6 inline-block bg-blue-500 align-middle"></span>
              )}
            </p>
        </div>
      </div>

      {/* Buttons */}
      <div className={`flex flex-col items-center w-full transition-all duration-1000 ${stage === 'final' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Main Download Button */}
        <button className="group relative bg-white text-black px-9 py-4 rounded-2xl font-semibold text-[17px] flex items-center gap-2.5 hover:bg-zinc-100 transition-all active:scale-95 shadow-[0_0_50px_-10px_rgba(255,255,255,0.15)]">
          <Apple size={22} className="fill-current mb-[3px]" />
          <span>Download for Mac</span>
        </button>
        
        <span className="mt-5 text-[13px] text-zinc-600 font-medium tracking-wide">
            requires macOS 13+
        </span>

        {/* iOS Button */}
        <a href="#" className="mt-10 inline-flex items-center gap-2 pl-5 pr-4 py-2.5 rounded-full bg-[#121212] border border-white/[0.08] text-[13px] text-zinc-400 hover:text-white hover:border-white/20 hover:bg-[#1a1a1a] transition-all group backdrop-blur-md">
          <span className="font-medium">Now available on iOS</span>
          <span className="text-zinc-500 group-hover:text-white transition-colors flex items-center gap-1 ml-1.5">
             Download now <ArrowRight size={14} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </a>
      </div>
      
      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-800 animate-bounce transition-opacity duration-1000 delay-1000 ${stage === 'final' ? 'opacity-100' : 'opacity-0'}`}>
        <ChevronsDown size={20} />
      </div>
    </section>
  );
};