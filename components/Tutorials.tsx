import React, { useState, useRef, useEffect } from 'react';
import { Play, Slack, Mail, Youtube, Terminal, FileText, Twitter, Command } from 'lucide-react';

interface Tutorial {
  id: number;
  app: string;
  headlineStart: string;
  headlineEnd: string;
  description: string;
  duration: string;
  image: string;
  logo: React.ReactNode;
  color: string;
}

const tutorials: Tutorial[] = [
  {
    id: 0,
    app: 'Gmail',
    headlineStart: 'Respond to an email',
    headlineEnd: 'in seconds',
    description: 'Fly through your emails',
    duration: '2 min',
    image: 'https://images.unsplash.com/photo-1557200130-4a30a32b518b?auto=format&fit=crop&w=800&q=80',
    logo: <Mail className="w-12 h-12 text-red-500 drop-shadow-lg" />,
    color: '#EA4335'
  },
  {
    id: 1,
    app: 'Slack',
    headlineStart: 'Whip through',
    headlineEnd: 'Slack messages',
    description: 'Send perfect messages at work',
    duration: '7 min',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    logo: <Slack className="w-12 h-12 text-white drop-shadow-lg" />,
    color: '#E01E5A'
  },
  {
    id: 2,
    app: 'YouTube',
    headlineStart: 'Summarize videos',
    headlineEnd: 'instantly',
    description: 'Quickly solidify your learning',
    duration: '5 min',
    image: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&w=800&q=80',
    logo: <Youtube className="w-12 h-12 text-red-600 drop-shadow-lg" />,
    color: '#FF0000'
  },
  {
    id: 3,
    app: 'VS Code',
    headlineStart: 'Comment code',
    headlineEnd: 'with your voice',
    description: 'Documentation made easy',
    duration: '4 min',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80',
    logo: <Terminal className="w-12 h-12 text-blue-500 drop-shadow-lg" />,
    color: '#007ACC'
  },
  {
    id: 4,
    app: 'Notion',
    headlineStart: 'Write pages',
    headlineEnd: 'at speed of thought',
    description: 'Organize your life effortlessly',
    duration: '6 min',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80',
    logo: <FileText className="w-12 h-12 text-zinc-100 drop-shadow-lg" />,
    color: '#FFFFFF'
  },
  {
    id: 5,
    app: 'Twitter',
    headlineStart: 'Draft viral tweets',
    headlineEnd: 'fast',
    description: 'Grow your audience daily',
    duration: '3 min',
    image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=800&q=80',
    logo: <Twitter className="w-12 h-12 text-sky-500 drop-shadow-lg" />,
    color: '#1DA1F2'
  },
  {
    id: 6,
    app: 'Raycast',
    headlineStart: 'Control your Mac',
    headlineEnd: 'hands-free',
    description: 'The ultimate productivity combo',
    duration: '8 min',
    image: 'https://images.unsplash.com/photo-1517430816045-df4b7de8db6e?auto=format&fit=crop&w=800&q=80',
    logo: <Command className="w-12 h-12 text-orange-500 drop-shadow-lg" />,
    color: '#FF6363'
  }
];

export const Tutorials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Start with index 0 (Gmail) as per image, or any other
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToSlide = (index: number) => {
    setActiveIndex(index);
    const container = scrollContainerRef.current;
    if (container) {
      const slides = container.children;
      if (slides[index]) {
        // Center the selected slide
        slides[index].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        scrollToSlide(Math.max(0, activeIndex - 1));
      } else if (e.key === 'ArrowRight') {
        scrollToSlide(Math.min(tutorials.length - 1, activeIndex + 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIndex]);

  return (
    <section className="py-24 bg-black text-white overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
        
        {/* Header Section - Pixel Perfect Update */}
        <div className="text-center mb-16 transition-all duration-500 relative z-10 max-w-5xl px-4">
          <span className="text-[#3B82F6] font-semibold text-[15px] mb-6 block tracking-wide">Tutorials</span>
          <h2 
            key={activeIndex} 
            className="text-[44px] md:text-[64px] font-bold mb-6 leading-[1.1] tracking-tight animate-in fade-in slide-in-from-bottom-2 duration-300"
          >
            <span className="text-[#666] transition-colors duration-500">{tutorials[activeIndex].headlineStart}</span>{' '}
            <span className="text-white transition-colors duration-500">{tutorials[activeIndex].headlineEnd}</span>
          </h2>
          <p className="text-[#888] text-lg md:text-[19px] font-medium tracking-wide">
            Quick videos to get you started in minutes
          </p>
        </div>

        {/* Carousel Section */}
        <div className="w-full relative">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-black to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-black to-transparent z-20 pointer-events-none" />

            <div 
                ref={scrollContainerRef}
                className="flex gap-6 overflow-x-auto pb-12 px-[50vw] snap-x snap-mandatory hide-scrollbar items-start"
                style={{ scrollBehavior: 'smooth' }}
            >
                {tutorials.map((tutorial, index) => {
                    const isActive = index === activeIndex;
                    return (
                        <div 
                            key={tutorial.id}
                            onClick={() => scrollToSlide(index)}
                            className={`
                                relative flex-shrink-0 transition-all duration-500 ease-out cursor-pointer snap-center group
                                flex flex-col gap-4
                                ${isActive ? 'opacity-100 scale-100' : 'opacity-30 hover:opacity-50 scale-95'}
                            `}
                            style={{ width: 'min(85vw, 550px)' }}
                        >
                            {/* Card Image */}
                            <div className={`
                                relative aspect-[16/10] w-full bg-[#111] rounded-2xl overflow-hidden border border-white/10
                                transition-shadow duration-500
                                ${isActive ? 'shadow-[0_0_40px_rgba(255,255,255,0.05)]' : ''}
                            `}>
                                {/* Background Image */}
                                <img 
                                    src={tutorial.image} 
                                    alt={tutorial.app} 
                                    className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105"
                                />
                                
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                {/* App Logo / Center Icon */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className={`
                                        p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 
                                        transform transition-all duration-500
                                        ${isActive ? 'scale-110' : 'scale-100 grayscale'}
                                    `}>
                                        {tutorial.logo}
                                    </div>
                                </div>

                                {/* Play Button (visible on hover of active) */}
                                {isActive && (
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[1px]">
                                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                                            <Play size={24} className="ml-1 text-black fill-black" />
                                        </div>
                                    </div>
                                )}

                                {/* User Bubble (Bottom Left) */}
                                <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full border border-white/20 overflow-hidden bg-zinc-800 shadow-lg z-20">
                                    <img 
                                        src={`https://picsum.photos/100/100?random=${tutorial.id + 50}`} 
                                        className="w-full h-full object-cover" 
                                        alt="Presenter" 
                                    />
                                </div>

                                {/* Duration (Bottom Right) */}
                                <div className="absolute bottom-4 right-4 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-white/10 text-xs font-medium text-zinc-300 tabular-nums">
                                    {tutorial.duration}
                                </div>
                            </div>

                            {/* Description Caption */}
                            <div className={`px-1 transition-all duration-500 ${isActive ? 'opacity-100 transform translate-y-0' : 'opacity-50 transform -translate-y-2'}`}>
                                <p className="text-lg text-zinc-300 font-medium">{tutorial.description}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

        {/* Custom Pagination */}
        <div className="mt-4 bg-[#111] border border-white/10 p-1.5 rounded-full flex items-center gap-2 shadow-2xl relative z-20">
            {tutorials.map((_, i) => (
                <button
                    key={i}
                    onClick={() => scrollToSlide(i)}
                    className={`
                        h-1.5 rounded-full transition-all duration-300
                        ${i === activeIndex ? 'w-8 bg-white' : 'w-1.5 bg-zinc-700 hover:bg-zinc-500'}
                    `}
                    aria-label={`Go to slide ${i + 1}`}
                />
            ))}
        </div>

      </div>
    </section>
  );
};