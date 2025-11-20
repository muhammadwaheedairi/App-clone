import React from 'react';
import { TestimonialData } from '../types';
import { Twitter } from 'lucide-react';

const testimonials: TestimonialData[] = [
  {
    id: 1,
    name: 'Alex MacCaw',
    handle: '@maccaw',
    avatar: 'https://picsum.photos/100/100?random=1',
    content: "I have replaced typing emails with dictating them using a client-side hosted version of Whisper. The app I'm using is called @superwhisperapp. It runs natively on macOS and integrates with the system clipboard. I highly recommend it.",
    source: 'Reflect Notes'
  },
  {
    id: 2,
    name: 'Christian',
    handle: '@curious_vii',
    avatar: 'https://picsum.photos/100/100?random=2',
    content: "s/o to @superwhisperapp 👏. easily best $ I've spent this week\n\nbeen using Whisper on my iPhone, but needed the same for Mac (sorry, Apple, the dictation model isn't quite there...)\n\nI freed up so much mental bandwidth...",
  },
  {
    id: 3,
    name: 'Alex Volkov',
    handle: '@altryne',
    avatar: 'https://picsum.photos/100/100?random=3',
    content: "superwhisper is a great way to 'just talk' to your mac, it's way better than typing, and makes talking to chatGPT and other AIs super fun and easy.\n\nForget typing, just talk",
  },
  {
    id: 4,
    name: 'Francesco (ToolFinder.co)',
    handle: '@FrancescoD_Ales',
    avatar: 'https://picsum.photos/100/100?random=4',
    content: "Superwhisper is an exciting new way to transcribe audio using AI saving you pesky administrative work",
  },
  {
    id: 5,
    name: 'Dr. Palmer Piana',
    handle: '@palmerater',
    avatar: 'https://picsum.photos/100/100?random=5',
    content: "As a chiropractor, much of my day is spent writing reports. superwhisper has been amazing at helping me speed up that process. I love that the data never leaves my computer, so I know my data is safe.",
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-black text-white">
        <div className="flex justify-center mb-16">
        <span className="px-4 py-1 rounded-full border border-white/10 text-sm text-zinc-400 bg-white/5">
          Reviews
        </span>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
        {testimonials.map((t) => (
          <div key={t.id} className="break-inside-avoid bg-[#111] p-6 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors">
            <div className="whitespace-pre-line text-zinc-300 mb-6 text-sm leading-relaxed">
              {t.content}
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                    <div>
                        <div className="font-medium text-sm text-white">{t.name}</div>
                        <div className="text-xs text-zinc-500">{t.handle}</div>
                    </div>
                </div>
                {t.source ? (
                    <div className="flex items-center gap-2 bg-[#222] px-2 py-1 rounded text-xs text-zinc-300">
                        <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                        {t.source}
                    </div>
                ) : (
                     <Twitter size={16} className="text-zinc-600" />
                )}
            </div>
          </div>
        ))}

        {/* Video Review Placeholder Card */}
        <div className="break-inside-avoid bg-[#111] rounded-2xl border border-zinc-800 overflow-hidden group cursor-pointer">
            <div className="relative aspect-video bg-zinc-900">
                <img src="https://picsum.photos/600/400?grayscale" alt="Review Video" className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                         <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-black border-b-[6px] border-b-transparent ml-1"></div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <span className="font-bold text-lg">TRY IT!</span>
                </div>
            </div>
             <div className="p-4 flex items-center gap-3">
                <img src="https://picsum.photos/100/100?random=6" className="w-8 h-8 rounded-full" />
                <div>
                    <div className="text-sm font-medium">Fernando Anselmi</div>
                    <div className="text-xs text-zinc-500">@fernandoanselmi</div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};