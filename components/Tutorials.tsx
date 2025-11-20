import React, { useState } from 'react';
import { Linkedin, Terminal, Mail, Play } from 'lucide-react';

export const Tutorials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const tutorials = [
    {
      id: 0,
      tab: "Python Automation",
      title: "Automate with Python",
      description: "Generate complex scripts in seconds",
      duration: "8 min",
      imageComponent: (
        <div className="relative w-full h-full bg-[#111] flex items-center justify-center overflow-hidden group">
            <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-yellow-900 to-blue-900"></div>
            <Terminal size={64} className="text-yellow-500/50 absolute top-4 left-4" />
            <div className="relative z-10 bg-[#1e1e1e] p-4 rounded-lg border border-white/10 shadow-2xl w-3/4 transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                <div className="flex gap-1.5 mb-3">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div className="space-y-2">
                    <div className="h-2 w-1/3 bg-zinc-700 rounded"></div>
                    <div className="h-2 w-2/3 bg-zinc-700 rounded"></div>
                    <div className="h-2 w-1/2 bg-zinc-700 rounded"></div>
                </div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" className="absolute -right-4 -bottom-4 w-16 h-16 opacity-20" alt="" />
            </div>
             {/* Webcam bubble */}
             <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full border border-white/10 overflow-hidden bg-zinc-800 shadow-lg z-20">
                <img src="https://picsum.photos/100/100?random=10" className="w-full h-full object-cover opacity-80" alt="User" />
            </div>
        </div>
      )
    },
    {
      id: 1,
      tab: "LinkedIn Outreach",
      title: "Send Outreach\non Linkedin",
      description: "Write better messages, get responses",
      duration: "5 min",
      imageComponent: (
        <div className="relative w-full h-full bg-[#0B0B0D] flex items-center justify-center overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10"></div>
             
             {/* Browser Window Mockup */}
             <div className="w-[85%] h-[80%] bg-[#1C1C1E] rounded-xl border border-white/10 shadow-2xl flex flex-col overflow-hidden relative transform group-hover:scale-[1.02] transition-transform duration-500">
                 {/* Window Header */}
                 <div className="h-8 bg-[#2C2C2E] border-b border-white/5 flex items-center px-3 gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]"></div>
                 </div>
                 
                 {/* Content */}
                 <div className="flex-1 bg-zinc-900 relative">
                    {/* LinkedIn Header Mock */}
                    <div className="h-12 bg-[#1C1C1E] border-b border-white/5 flex items-center px-4 justify-between">
                        <Linkedin size={24} className="text-[#0077B5] fill-current" />
                        <div className="w-6 h-6 rounded-full bg-zinc-700"></div>
                    </div>
                    {/* LinkedIn Feed Mock */}
                    <div className="p-4 space-y-3 opacity-50">
                        <div className="h-24 bg-[#252527] rounded border border-white/5"></div>
                        <div className="h-24 bg-[#252527] rounded border border-white/5"></div>
                    </div>

                    {/* Superwhisper Floating Window */}
                    <div className="absolute top-8 left-8 right-8 bottom-8 bg-[#111]/90 backdrop-blur-xl rounded-lg border border-white/10 p-4 shadow-2xl flex flex-col animate-in fade-in zoom-in duration-700">
                        <div className="flex items-center gap-2 text-zinc-400 text-xs mb-2 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                            Listening...
                        </div>
                        <div className="text-white text-sm leading-relaxed">
                            "Hey Rahul, I wanted to show you a demo of Superwhisper..."
                        </div>
                    </div>
                 </div>
             </div>

             {/* Webcam bubble */}
             <div className="absolute bottom-6 right-6 w-12 h-12 rounded-full border-2 border-white/20 overflow-hidden bg-zinc-800 shadow-xl z-20">
                <img src="https://picsum.photos/100/100?random=8" className="w-full h-full object-cover" alt="Presenter" />
            </div>
        </div>
      )
    },
    {
      id: 2,
      tab: "Email Management",
      title: "Clear Your Inbox\nin Minutes",
      description: "Draft replies 10x faster",
      duration: "4 min",
      imageComponent: (
        <div className="relative w-full h-full bg-[#111] flex items-center justify-center overflow-hidden">
            <Mail size={80} className="text-zinc-800 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
             <div className="relative z-10 w-3/4 space-y-2">
                {[1,2,3].map((i) => (
                    <div key={i} className="bg-[#1C1C1E] p-3 rounded border border-white/5 flex gap-3 items-center transform hover:translate-x-2 transition-transform">
                        <div className="w-8 h-8 rounded-full bg-zinc-800 flex-shrink-0"></div>
                        <div className="flex-1 space-y-1.5">
                            <div className="h-1.5 w-1/4 bg-zinc-700 rounded"></div>
                            <div className="h-1.5 w-3/4 bg-zinc-800 rounded"></div>
                        </div>
                    </div>
                ))}
            </div>
             {/* Webcam bubble */}
             <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full border border-white/10 overflow-hidden bg-zinc-800 shadow-lg z-20">
                <img src="https://picsum.photos/100/100?random=12" className="w-full h-full object-cover opacity-80" alt="User" />
            </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-24 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-12 transition-all duration-500">
          <span className="text-blue-500 font-medium text-sm mb-4 block">Tutorials</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 whitespace-pre-line leading-tight tracking-tight">
            {tutorials[activeIndex].title}
          </h2>
          <p className="text-zinc-400 text-lg">
            Quick videos to get you started in minutes
          </p>
        </div>

        {/* Carousel Section */}
        <div className="w-full relative max-w-[1400px]">
          
            {/* Gradient Masks for edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none hidden md:block" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none hidden md:block" />

            <div className="flex justify-center items-center gap-8 overflow-x-auto md:overflow-visible pb-8 md:pb-0 snap-x snap-mandatory hide-scrollbar">
                {tutorials.map((tutorial, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <div 
                            key={tutorial.id}
                            onClick={() => setActiveIndex(index)}
                            className={`
                                relative flex-shrink-0 transition-all duration-500 ease-out cursor-pointer snap-center
                                ${isActive ? 'w-[85vw] md:w-[600px] h-[300px] md:h-[400px] scale-100 z-10 opacity-100' : 'w-[60vw] md:w-[400px] h-[250px] md:h-[300px] scale-95 z-0 opacity-40 hover:opacity-60'}
                            `}
                        >
                            <div className={`w-full h-full rounded-2xl overflow-hidden border ${isActive ? 'border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]' : 'border-white/5'} bg-[#050505]`}>
                                {tutorial.imageComponent}
                                
                                {/* Overlay Content */}
                                <div className={`absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 to-transparent flex items-end justify-between transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                                    <div>
                                        <p className="text-white font-medium text-lg mb-1">{tutorial.description}</p>
                                        <div className="h-1 w-12 bg-white/20 rounded-full mt-2 overflow-hidden">
                                            <div className="h-full bg-white w-1/3"></div>
                                        </div>
                                    </div>
                                    <span className="text-zinc-400 text-sm font-medium font-mono">{tutorial.duration}</span>
                                </div>
                                
                                {/* Inactive overlay duration only */}
                                {!isActive && (
                                    <div className="absolute bottom-4 right-4 text-zinc-500 text-xs font-mono">
                                        {tutorial.duration}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

        {/* Custom Pagination Indicator */}
        <div className="mt-12 bg-zinc-900/50 border border-white/5 backdrop-blur-sm px-2 py-1.5 rounded-full flex items-center gap-1.5">
            {tutorials.map((_, i) => (
                <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`transition-all duration-300 rounded-full ${
                        i === activeIndex 
                        ? 'w-12 h-1.5 bg-white shadow-[0_0_10px_rgba(255,255,255,0.3)]' 
                        : 'w-1.5 h-1.5 bg-zinc-600 hover:bg-zinc-500'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                />
            ))}
        </div>

      </div>
    </section>
  );
};
