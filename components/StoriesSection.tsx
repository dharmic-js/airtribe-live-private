'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const outcomeSlides = [
  {
    from: 'Senior manager at standard chartered',
    to: 'PM at Incubyte',
    person: 'Anoop',
    detail: '',
  },
  {
    from: 'Web developer',
    to: 'PM at Marmin Tech',
    person: 'Deeksha',
    detail: ', with a 90% hike',
  },
  {
    from: 'Software Engineer',
    to: 'Lead Systems Architect at Razorpay',
    person: 'Chinmay',
    detail: ', with a 140% hike',
  },
  {
    from: 'Backend Developer',
    to: 'Staff AI Engineer at Global AI Lab',
    person: 'Debayan',
    detail: ', with a 110% hike',
  },
  {
    from: 'SDE 1',
    to: 'SDE 2 at Gritworks',
    person: 'Yash',
    detail: ', with an 85% hike',
  },
];

const communityLogos = [
  { name: 'Google', src: '/logos/google.svg', fallback: '/logos/google.afd4bc44.webp' },
  { name: 'Microsoft', src: '/logos/microsoft.e3fe3bf3.svg' },
  { name: 'Meta', src: '/logos/meta.da990ff0.svg' },
  { name: 'Apple', src: '/logos/apple.61f872c0.svg' },
  { name: 'Uber', src: '/logos/uber.48b48a45.svg' },
  { name: 'Adobe', src: '/logos/adobe.bed3d518.svg' },
  { name: 'Shopify', src: '/logos/shopify.d0cf7ff1.svg' },
  { name: 'Paytm', src: '/logos/paytm.83ecf65f.svg' },
  { name: 'Razorpay', src: '/logos/cred.a4cd9d0e.svg' },
  { name: 'Groww', src: '/logos/groww-a.1adebd1b.svg' },
];

export const StoriesSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // PPT slide change animation timer
  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % outcomeSlides.length);
        setIsAnimating(false);
      }, 350);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-black border-b border-[#232328] overflow-hidden">
      <div className="max-w-[1440px] mx-auto border-x border-[#232328] py-20 sm:py-28">
        
        {/* Section Header */}
        <div className="text-center px-4 sm:px-8 mb-16 sm:mb-20">
          <h2 className="text-[40px] sm:text-[56px] lg:text-[64px] font-normal leading-[1.0] tracking-[-0.04em] text-white mb-3">
            Real stories from{' '}
            <span className="flow-lavender font-editorial italic tracking-normal">
              the tribe
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            Career switches, promotions, and a new way of working
          </p>
        </div>

        {/* 1. Testimonials Belt: Moving Right-to-Left */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_50px,black_calc(100%-50px),transparent)] mb-10">
          <div className="animate-belt-rtl flex items-stretch space-x-6 w-max pause-on-hover py-2">
            
            {/* Set 1 */}
            {/* Card 1: Review Card */}
            <div className="w-[310px] sm:w-[340px] h-[400px] bg-[#0c0c0f] border border-[#232328] p-7 flex flex-col justify-between shrink-0 hover:border-zinc-500 transition-colors select-none relative overflow-hidden">
              <p className="text-zinc-200 text-[20px] sm:text-[22px] leading-[1.3] font-medium tracking-tight">
                &ldquo;The Node.js, Database Modelling and HLD modules are exceptional. Join for the skills; the career growth will follow.&rdquo;
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-[#232328]/60">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-zinc-700 bg-zinc-800">
                  <Image src="/portraits/story-yash-tiwari.jpg" alt="" fill className="object-cover" unoptimized />
                </div>
                <div>
                  <h4 className="text-white text-base font-bold leading-tight">Yash Tiwari</h4>
                  <p className="text-zinc-400 text-xs mt-0.5">SDE 2 @ Gritworks</p>
                </div>
              </div>
            </div>

            {/* Card 2: Vibrant Purple Highlight Card */}
            <div className="w-[310px] sm:w-[340px] h-[400px] bg-[#6936f5] border border-[#7a48ff] p-7 flex flex-col justify-between shrink-0 hover:brightness-105 transition-all select-none relative overflow-hidden text-white shadow-xl">
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)',
                  backgroundSize: '10px 10px',
                }}
              />
              <div className="relative z-10">
                <h3 className="text-[40px] sm:text-[46px] font-medium leading-[1.0] tracking-[-0.04em] mb-4">
                  10x the value of what I paid
                </h3>
              </div>
              <div className="relative z-10 pt-4">
                <p className="text-white/90 text-sm leading-snug mb-4">
                  Senior consultant, customer experience · Jesseh Bhatt
                </p>
                <div className="flex items-center justify-between border-t border-white/20 pt-3">
                  <span className="font-bold text-base tracking-wide">RelevantZ</span>
                  <span className="text-white/90 text-xs font-mono">10 yrs experience</span>
                </div>
              </div>
            </div>

            {/* Card 3: Video Card */}
            <div className="w-[310px] sm:w-[340px] h-[400px] bg-[#0c0c0f] border border-[#232328] p-5 flex flex-col justify-between shrink-0 hover:border-zinc-500 transition-colors select-none relative overflow-hidden group">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900 border border-[#232328] rounded">
                <Image
                  src="/video-kanupriya-bhatt.806d9d03.webp"
                  alt=""
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/40 transition-all">
                    <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 right-2 bg-black/75 backdrop-blur-sm px-2 py-1 rounded text-[11px] font-mono text-white/90 truncate">
                  Airtribe helped me become an AI-PRODUCT MANAGER
                </div>
              </div>
              <div className="flex items-center gap-3 pt-3 border-t border-[#232328]/60">
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-zinc-700 bg-zinc-800">
                  <Image src="/portraits/story-kanupriya-rawat.jpg" alt="" fill className="object-cover" unoptimized />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold leading-tight">Kanupriya Rawat</h4>
                  <p className="text-zinc-400 text-xs mt-0.5">Product manager @ QD MATIKS</p>
                </div>
              </div>
            </div>

            {/* Card 4: Review Card */}
            <div className="w-[310px] sm:w-[340px] h-[400px] bg-[#0c0c0f] border border-[#232328] p-7 flex flex-col justify-between shrink-0 hover:border-zinc-500 transition-colors select-none relative overflow-hidden">
              <p className="text-zinc-200 text-[20px] sm:text-[22px] leading-[1.3] font-medium tracking-tight">
                &ldquo;They shared their experience, made us think like senior engineers and gave us a path to grow.&rdquo;
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-[#232328]/60">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-zinc-700 bg-zinc-800">
                  <Image src="/portraits/story-unnam-deshmukh.jpg" alt="" fill className="object-cover" unoptimized />
                </div>
                <div>
                  <h4 className="text-white text-base font-bold leading-tight">Unnam Deshmukh</h4>
                  <p className="text-zinc-400 text-xs mt-0.5">Senior software engineer II @ GeekyAnts</p>
                </div>
              </div>
            </div>

            {/* Card 5: Hike Card */}
            <div className="w-[310px] sm:w-[340px] h-[400px] bg-[#0c0c0f] border border-[#232328] p-6 flex flex-col justify-between shrink-0 hover:border-zinc-500 transition-colors select-none relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 bg-zinc-900/80 px-3 py-1.5 border border-[#232328] mb-6">
                  <span>Web developer</span>
                  <span>&rarr;</span>
                  <span className="text-white font-bold">Product manager</span>
                </div>
                <h3 className="text-[44px] font-bold text-white tracking-tight mb-2">
                  90% hike
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Transitioned from frontend implementation into driving end-to-end AI product strategy.
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4 border-t border-[#232328]/60">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-zinc-700 bg-zinc-800">
                  <Image src="/portraits/story-deeksha-george.jpg" alt="" fill className="object-cover" unoptimized />
                </div>
                <div>
                  <h4 className="text-white text-base font-bold leading-tight">Deeksha George</h4>
                  <p className="text-zinc-400 text-xs mt-0.5">Product manager @ Marmin Tech</p>
                </div>
              </div>
            </div>

            {/* Duplicate set for seamless loop */}
            {/* Card 1 Rep */}
            <div className="w-[310px] sm:w-[340px] h-[400px] bg-[#0c0c0f] border border-[#232328] p-7 flex flex-col justify-between shrink-0 hover:border-zinc-500 transition-colors select-none relative overflow-hidden">
              <p className="text-zinc-200 text-[20px] sm:text-[22px] leading-[1.3] font-medium tracking-tight">
                &ldquo;The Node.js, Database Modelling and HLD modules are exceptional. Join for the skills; the career growth will follow.&rdquo;
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-[#232328]/60">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-zinc-700 bg-zinc-800">
                  <Image src="/portraits/story-yash-tiwari.jpg" alt="" fill className="object-cover" unoptimized />
                </div>
                <div>
                  <h4 className="text-white text-base font-bold leading-tight">Yash Tiwari</h4>
                  <p className="text-zinc-400 text-xs mt-0.5">SDE 2 @ Gritworks</p>
                </div>
              </div>
            </div>

            {/* Card 2 Rep */}
            <div className="w-[310px] sm:w-[340px] h-[400px] bg-[#6936f5] border border-[#7a48ff] p-7 flex flex-col justify-between shrink-0 hover:brightness-105 transition-all select-none relative overflow-hidden text-white shadow-xl">
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(#ffffff 1.5px, transparent 1.5px)',
                  backgroundSize: '10px 10px',
                }}
              />
              <div className="relative z-10">
                <h3 className="text-[40px] sm:text-[46px] font-medium leading-[1.0] tracking-[-0.04em] mb-4">
                  10x the value of what I paid
                </h3>
              </div>
              <div className="relative z-10 pt-4">
                <p className="text-white/90 text-sm leading-snug mb-4">
                  Senior consultant, customer experience · Jesseh Bhatt
                </p>
                <div className="flex items-center justify-between border-t border-white/20 pt-3">
                  <span className="font-bold text-base tracking-wide">RelevantZ</span>
                  <span className="text-white/90 text-xs font-mono">10 yrs experience</span>
                </div>
              </div>
            </div>

            {/* Card 3 Rep */}
            <div className="w-[310px] sm:w-[340px] h-[400px] bg-[#0c0c0f] border border-[#232328] p-5 flex flex-col justify-between shrink-0 hover:border-zinc-500 transition-colors select-none relative overflow-hidden group">
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-900 border border-[#232328] rounded">
                <Image
                  src="/video-kanupriya-bhatt.806d9d03.webp"
                  alt=""
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center group-hover:scale-110 group-hover:bg-white/40 transition-all">
                    <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="absolute bottom-2 left-2 right-2 bg-black/75 backdrop-blur-sm px-2 py-1 rounded text-[11px] font-mono text-white/90 truncate">
                  Airtribe helped me become an AI-PRODUCT MANAGER
                </div>
              </div>
              <div className="flex items-center gap-3 pt-3 border-t border-[#232328]/60">
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-zinc-700 bg-zinc-800">
                  <Image src="/portraits/story-kanupriya-rawat.jpg" alt="" fill className="object-cover" unoptimized />
                </div>
                <div>
                  <h4 className="text-white text-sm font-bold leading-tight">Kanupriya Rawat</h4>
                  <p className="text-zinc-400 text-xs mt-0.5">Product manager @ QD MATIKS</p>
                </div>
              </div>
            </div>

            {/* Card 4 Rep */}
            <div className="w-[310px] sm:w-[340px] h-[400px] bg-[#0c0c0f] border border-[#232328] p-7 flex flex-col justify-between shrink-0 hover:border-zinc-500 transition-colors select-none relative overflow-hidden">
              <p className="text-zinc-200 text-[20px] sm:text-[22px] leading-[1.3] font-medium tracking-tight">
                &ldquo;They shared their experience, made us think like senior engineers and gave us a path to grow.&rdquo;
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-[#232328]/60">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-zinc-700 bg-zinc-800">
                  <Image src="/portraits/story-unnam-deshmukh.jpg" alt="" fill className="object-cover" unoptimized />
                </div>
                <div>
                  <h4 className="text-white text-base font-bold leading-tight">Unnam Deshmukh</h4>
                  <p className="text-zinc-400 text-xs mt-0.5">Senior software engineer II @ GeekyAnts</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 2. Bottom Grid: Career Outcomes (PPT Slide Deck) + Where Community Works (Left to Right Belt) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border-t border-[#232328]">
          
          {/* Left Cell: Career Outcomes with PPT Slide Deck Animation */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-[#232328] p-8 sm:p-10 flex flex-col justify-between bg-[#0a0a0c] relative overflow-hidden min-h-[220px]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-zinc-400 text-sm font-mono uppercase tracking-wider">
                Career outcomes
              </span>
              <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500">
                <span className="text-[#a78bfa] font-bold">0{currentSlide + 1}</span>
                <span>/</span>
                <span>0{outcomeSlides.length}</span>
              </div>
            </div>

            {/* Slide Presentation Viewport */}
            <div className="relative overflow-hidden py-3 min-h-[85px] flex items-center">
              <div
                className={`transition-all duration-300 ease-out transform ${
                  isAnimating
                    ? '-translate-x-12 opacity-0 scale-95'
                    : 'translate-x-0 opacity-100 scale-100'
                }`}
              >
                <p className="text-zinc-300 text-[18px] sm:text-[20px] leading-relaxed tracking-tight">
                  <span className="text-white font-medium">{outcomeSlides[currentSlide].person}</span>{' '}
                  moved from{' '}
                  <span className="font-semibold text-white">
                    {outcomeSlides[currentSlide].from}
                  </span>{' '}
                  to{' '}
                  <span className="font-semibold text-[#a78bfa]">
                    {outcomeSlides[currentSlide].to}
                  </span>
                  {outcomeSlides[currentSlide].detail}
                </p>
              </div>
            </div>

            {/* PPT Progress Dots */}
            <div className="flex items-center gap-2 pt-4">
              {outcomeSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === currentSlide ? 'w-6 bg-[#a78bfa]' : 'w-2 bg-zinc-700 hover:bg-zinc-500'
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Right Cell: Where Our Community Works with Left-to-Right Belt */}
          <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between bg-black overflow-hidden relative min-h-[220px]">
            <span className="text-zinc-400 text-sm font-mono uppercase tracking-wider mb-6 block">
              Where our community works
            </span>

            {/* Moving Belt Left-to-Right */}
            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_30px,black_calc(100%-30px),transparent)]">
              <div className="animate-belt-ltr flex items-center space-x-3 w-max pause-on-hover py-1">
                {[...communityLogos, ...communityLogos, ...communityLogos].map((c, idx) => (
                  <div
                    key={idx}
                    className="w-20 h-16 sm:w-24 sm:h-18 border border-[#232328] bg-[#0c0c0f] flex items-center justify-center shrink-0 hover:border-zinc-500 transition-colors p-3"
                  >
                    <img
                      src={c.src}
                      alt={c.name}
                      className="max-h-8 max-w-[60px] object-contain opacity-75 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between text-xs text-zinc-500 font-mono">
              <span>500+ Hiring Partners</span>
              <span>Global Remote & Tier-1 Offices</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
