import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, MoreVertical } from 'lucide-react';

export const Demo: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [duration] = useState(73); // 1:13 duration
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval: number;
    if (isPlaying) {
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
  }, [isPlaying, duration]);

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

  return (
    <section className="py-24 px-6 flex flex-col items-center justify-center bg-black">
      <div className="mb-12 flex justify-center">
        <span className="px-4 py-1 rounded-full border border-white/10 text-sm text-zinc-400 bg-white/5">
          Demo
        </span>
      </div>

      <div className="relative w-full max-w-5xl aspect-video bg-[#080808] rounded-2xl border border-white/10 shadow-2xl overflow-hidden group select-none">
        
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
                <img 
                    src="https://picsum.photos/300/400?random=25" 
                    alt="Presenter" 
                    className="w-full h-full object-cover opacity-90"
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
      </div>
    </section>
  );
};