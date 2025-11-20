'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, MoreVertical, Mic, Wand2, RotateCcw, ArrowLeft, Sparkles } from 'lucide-react';
import Image from 'next/image';

export const Demo: React.FC = () => {
  // Video State
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [duration] = useState(73); // 1:13 duration
  const progressBarRef = useRef<HTMLDivElement>(null);

  // Interactive State
  const [mode, setMode] = useState<'video' | 'interactive'>('video');
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isListening, setIsListening] = useState(false);

  // Video Timer Logic
  useEffect(() => {
    let interval: number;
    if (isPlaying && mode === 'video') {
      interval = window.setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= duration) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 0.1;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying, duration, mode]);

  const togglePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  const toggleMute = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setIsMuted(!isMuted);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (progressBarRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(1, x / rect.width));
      setCurrentTime(percentage * duration);
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const progressPercent = (currentTime / duration) * 100;

  // Interactive Logic
  const handleVoiceInput = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      
      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputText(prev => prev + (prev ? ' ' : '') + transcript);
      };
      
      recognition.start();
    } else {
      alert('Speech recognition is not supported in this browser.');
    }
  };

  const handleRewrite = async () => {
    if (!inputText.trim()) return;
    setIsProcessing(true);
    setOutputText('');
    
    try {
      const response = await fetch('/api/rewrite', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: inputText }),
      });
      
      const data = await response.json();
      if (data.text) {
        setOutputText(data.text);
      } else {
        setOutputText('Error: Could not generate text.');
      }
    } catch (error) {
      console.error('Error rewriting text:', error);
      setOutputText('Error: Failed to connect to API.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section className="py-24 px-6 flex flex-col items-center justify-center bg-black">
      <div className="mb-12 flex flex-col items-center gap-4">
        <span className="px-4 py-1 rounded-full border border-white/10 text-sm text-zinc-400 bg-white/5">
          Demo
        </span>
        <div className="flex items-center gap-2 p-1 bg-zinc-900/50 rounded-full border border-white/10">
          <button 
            onClick={() => { setMode('video'); setIsPlaying(false); }}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${mode === 'video' ? 'bg-white text-black shadow-lg' : 'text-zinc-400 hover:text-white'}`}
          >
            Video Tour
          </button>
          <button 
            onClick={() => { setMode('interactive'); setIsPlaying(false); }}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${mode === 'interactive' ? 'bg-white text-black shadow-lg' : 'text-zinc-400 hover:text-white'}`}
          >
            <Sparkles size={14} />
            Interactive
          </button>
        </div>
      </div>

      <div className="relative w-full max-w-5xl aspect-video bg-[#080808] rounded-2xl border border-white/10 shadow-2xl overflow-hidden group select-none">
        
        {mode === 'video' ? (
          <>
            {/* Video Display Area - Click to toggle play */}
            <div className="absolute inset-0 cursor-pointer" onClick={togglePlay}>
                {/* Abstract Background */}
                <div className="absolute inset-0 bg-black overflow-hidden">
                    {/* Animated Background Elements */}
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-white/5 blur-[120px] rounded-full opacity-60 transition-all duration-[2000ms] ${isPlaying ? 'scale-110 opacity-70' : 'scale-100 opacity-60'}`}></div>
                    <div className={`absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-zinc-800/20 blur-[80px] rounded-full mix-blend-overlay transition-transform duration-[3000ms] ${isPlaying ? 'translate-x-10' : 'translate-x-0'}`}></div>
                    
                    {/* Grainy Noise overlay */}
                    <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
                </div>

                {/* Presenter Bubble */}
                <div className="absolute bottom-20 right-6 md:bottom-24 md:right-10 w-28 h-36 md:w-40 md:h-48 rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-20 bg-zinc-900">
                    <Image 
                        src="https://picsum.photos/300/400?random=25" 
                        alt="Presenter"
                        fill
                        className="object-cover opacity-90"
                        unoptimized={true}
                    />
                    <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]"></div>
                </div>
            </div>

            {/* Main Play Button Overlay */}
            {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
                <button 
                    onClick={togglePlay}
                    className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer shadow-[0_0_40px_rgba(255,255,255,0.2)] group-hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] pointer-events-auto"
                >
                    <Play size={32} className="ml-1 text-black fill-black" />
                </button>
                </div>
            )}

            {/* Controls Overlay */}
            <div className={`absolute inset-x-0 bottom-0 p-6 md:p-8 z-40 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-32 transition-opacity duration-300 ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}>
                
                {/* Captions */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-24 md:bottom-28 text-center w-full px-4 pointer-events-none">
                    <span className={`inline-block bg-black/40 text-zinc-200 px-4 py-2 rounded-lg backdrop-blur-md text-lg md:text-xl font-medium shadow-lg transition-all duration-500 ${isPlaying ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
                        Hey, I want to show you a demo of Superwhisper
                    </span>
                </div>

                <div className="flex flex-col gap-4" onClick={(e) => e.stopPropagation()}>
                    {/* Progress Bar */}
                    <div 
                        ref={progressBarRef}
                        className="w-full h-5 relative group/bar cursor-pointer flex items-center"
                        onClick={handleSeek}
                    >
                        {/* Background Track */}
                        <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                            <div className="w-full h-full bg-white/20"></div>
                        </div>
                        
                        {/* Progress Track */}
                        <div 
                            className="absolute left-0 h-1 bg-white rounded-full z-10 pointer-events-none"
                            style={{ width: `${progressPercent}%` }}
                        ></div>

                        {/* Scrubber Handle */}
                        <div 
                            className={`absolute w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-transform duration-200 z-20 pointer-events-none ${isPlaying || progressPercent > 0 ? 'scale-100' : 'scale-0'} group-hover/bar:scale-100`}
                            style={{ left: `${progressPercent}%`, transform: `translateX(-50%)` }}
                        ></div>
                    </div>

                    {/* Bottom Row */}
                    <div className="flex items-center justify-between -mt-2">
                        <div className="flex items-center gap-4">
                            <button onClick={togglePlay} className="text-zinc-200 hover:text-white transition-colors">
                                {isPlaying ? <Pause size={20} fill="currentColor" className="text-white" /> : <Play size={20} fill="currentColor" className="text-white" />}
                            </button>
                            <div className="text-xs font-medium text-zinc-400 font-mono tracking-wider select-none">
                                {formatTime(currentTime)} / {formatTime(duration)}
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-5 text-zinc-400">
                            <button onClick={toggleMute} className="hover:text-white transition-colors">
                                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                            </button>
                            <button className="hover:text-white transition-colors"><Maximize2 size={20} /></button>
                            <button className="hover:text-white transition-colors"><MoreVertical size={20} /></button>
                        </div>
                    </div>
                </div>
            </div>
          </>
        ) : (
          /* Interactive Mode */
          <div className="absolute inset-0 bg-[#080808] flex flex-col md:flex-row">
            
            {/* Left: Input */}
            <div className="flex-1 p-8 border-b md:border-b-0 md:border-r border-white/10 flex flex-col relative">
               <div className="flex items-center justify-between mb-4">
                 <h3 className="text-zinc-400 font-medium flex items-center gap-2">
                    <Mic size={16} /> Input
                 </h3>
                 <button 
                   onClick={() => setInputText('')}
                   className="text-xs text-zinc-500 hover:text-white transition-colors"
                 >
                   Clear
                 </button>
               </div>
               
               <textarea 
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Type something messy here, or use the microphone button..."
                  className="flex-1 bg-transparent resize-none outline-none text-lg text-white placeholder-zinc-700 font-medium leading-relaxed"
               />
               
               <div className="mt-4 flex items-center justify-between">
                  <button 
                    onClick={handleVoiceInput}
                    className={`p-3 rounded-full transition-all ${isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800'}`}
                  >
                    <Mic size={20} />
                  </button>
                  
                  <button 
                    onClick={handleRewrite}
                    disabled={!inputText || isProcessing}
                    className="px-6 py-2 bg-white text-black rounded-full font-semibold flex items-center gap-2 hover:bg-zinc-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? (
                        <>
                         <RotateCcw size={16} className="animate-spin" /> Processing...
                        </>
                    ) : (
                        <>
                         <Wand2 size={16} /> Rewrite
                        </>
                    )}
                  </button>
               </div>
            </div>

            {/* Right: Output */}
            <div className="flex-1 p-8 bg-[#030303] flex flex-col">
               <div className="flex items-center justify-between mb-4">
                 <h3 className="text-blue-400 font-medium flex items-center gap-2">
                    <Sparkles size={16} /> Superwhisper Output
                 </h3>
                 {outputText && (
                     <button 
                        onClick={() => navigator.clipboard.writeText(outputText)}
                        className="text-xs text-zinc-500 hover:text-white transition-colors"
                     >
                        Copy
                     </button>
                 )}
               </div>

               {outputText ? (
                   <div className="flex-1 text-lg text-white leading-relaxed font-medium animate-in fade-in duration-500">
                      {outputText}
                   </div>
               ) : (
                   <div className="flex-1 flex items-center justify-center text-zinc-800 text-sm italic">
                      AI polished text will appear here...
                   </div>
               )}
            </div>

          </div>
        )}

      </div>
    </section>
  );
};