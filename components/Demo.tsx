import React from 'react';
import { Play, Volume2, Maximize2, MoreVertical } from 'lucide-react';

export const Demo: React.FC = () => {
  return (
    <section className="py-24 px-6 flex flex-col items-center justify-center bg-black">
      <div className="mb-12 flex justify-center">
        <span className="px-4 py-1 rounded-full border border-white/10 text-sm text-zinc-400 bg-white/5">
          Demo
        </span>
      </div>

      <div className="relative w-full max-w-5xl aspect-video bg-[#080808] rounded-2xl border border-white/10 shadow-2xl overflow-hidden group select-none">
        
        {/* Abstract Background */}
        <div className="absolute inset-0 bg-black">
            {/* Simulating the smoke ring / abstract gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-white/5 blur-[120px] rounded-full opacity-60"></div>
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-zinc-800/20 blur-[80px] rounded-full mix-blend-overlay"></div>
            
            {/* Grainy Noise overlay */}
            <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        </div>

        {/* Main Play Button */}
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer shadow-[0_0_40px_rgba(255,255,255,0.2)] group-hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]">
            <Play size={32} className="ml-1 text-black fill-black" />
          </button>
        </div>

        {/* Presenter Bubble */}
        <div className="absolute bottom-20 right-6 md:bottom-24 md:right-10 w-28 h-36 md:w-40 md:h-48 rounded-2xl overflow-hidden border border-white/10 shadow-2xl z-20 bg-zinc-900">
          <img 
            src="https://picsum.photos/300/400?random=25" 
            alt="Presenter" 
            className="w-full h-full object-cover opacity-90"
          />
          {/* Inner shadow for depth */}
          <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]"></div>
        </div>

        {/* Controls Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 z-40 bg-gradient-to-t from-black/90 via-black/50 to-transparent pt-32">
            
            {/* Captions */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-24 md:bottom-28 text-center w-full px-4">
                 <span className="inline-block bg-black/40 text-zinc-200 px-4 py-2 rounded-lg backdrop-blur-md text-lg md:text-xl font-medium shadow-lg">
                    Hey, I want to show you a demo of Superwhisper
                 </span>
            </div>

            <div className="flex flex-col gap-4">
                {/* Progress Bar */}
                <div className="w-full h-1 bg-white/20 rounded-full cursor-pointer relative group/bar">
                    <div className="absolute left-0 top-0 bottom-0 w-[1%] bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]"></div>
                    <div className="absolute left-[1%] top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover/bar:opacity-100 transition-opacity shadow transform scale-0 group-hover/bar:scale-100 duration-200"></div>
                </div>

                {/* Bottom Row */}
                <div className="flex items-center justify-between mt-1">
                    <div className="text-xs font-medium text-zinc-400 font-mono tracking-wider">0:00 / 1:13</div>
                    
                    <div className="flex items-center gap-5 text-zinc-400">
                        <button className="hover:text-white transition-colors"><Volume2 size={20} /></button>
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