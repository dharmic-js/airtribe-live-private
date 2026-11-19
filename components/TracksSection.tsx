'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { AirtribeButton } from './AirtribeButton';

interface TrackData {
  title: string;
  desc: string;
  thumbnail: string;
  countdownDays: number;
  countdownHours: number;
  countdownMins: number;
  countdownSecs: number;
  href: string;
}

const tracksData: TrackData[] = [
  {
    title: 'AI-first product management',
    desc: 'AI-first PMs prototype their own ideas, automate the busywork, and make decisions at product speed. Learn to run product like a builder.',
    thumbnail: '/vid1.28e47de1.webp',
    countdownDays: 2,
    countdownHours: 14,
    countdownMins: 4,
    countdownSecs: 57,
    href: '/courses/product-management-launchpad',
  },
  {
    title: 'AI-first software engineering',
    desc: 'AI-first engineers design systems, automate the repetitive work, and ship AI-native products at scale. Learn the craft end to end, from DSA to Agentic Engineering.',
    thumbnail: '/vid2.30ec823d.webp',
    countdownDays: 3,
    countdownHours: 14,
    countdownMins: 4,
    countdownSecs: 57,
    href: '/courses/backend-engineering-launchpad',
  },
  {
    title: 'The GenAI launchpad',
    desc: 'Build agents and automations, turn an idea into a working AI product, and take it to real users with a go-to-market plan. Use it in your job, or launch your own startup.',
    thumbnail: '/vid3.b07c0e33.webp',
    countdownDays: 2,
    countdownHours: 14,
    countdownMins: 4,
    countdownSecs: 57,
    href: '/courses/generative-ai-launchpad',
  },
];

// Smooth cubic easing for natural momentum
const easeOutCubic = (x: number): number => {
  return 1 - Math.pow(1 - x, 3);
};

const clamp = (val: number, min: number, max: number): number => {
  return Math.min(Math.max(val, min), max);
};

export const TracksSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(900);
  const [isDesktop, setIsDesktop] = useState(true);
  const [secondsTick, setSecondsTick] = useState(0);

  // Live countdown timer ticking every second
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsTick((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Track window dimensions and responsiveness
  useEffect(() => {
    const updateDimensions = () => {
      setViewportHeight(window.innerHeight);
      setIsDesktop(window.innerWidth >= 1024);
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Track scroll progress through the pinned container
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollableDist = rect.height - window.innerHeight;

      if (scrollableDist <= 0) return;

      const currentScroll = -rect.top;
      const progress = clamp(currentScroll / scrollableDist, 0, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Format countdown string
  const formatCountdown = (t: TrackData) => {
    const totalSecs =
      t.countdownDays * 86400 +
      t.countdownHours * 3600 +
      t.countdownMins * 60 +
      t.countdownSecs -
      secondsTick;

    if (totalSecs <= 0) return '0d : 0h : 0m : 0s';

    const d = Math.floor(totalSecs / 86400);
    const h = Math.floor((totalSecs % 86400) / 3600);
    const m = Math.floor((totalSecs % 3600) / 60);
    const s = totalSecs % 60;

    return `${d}d : ${h}h : ${m}m : ${s}s`;
  };

  // Header transform: starts vertically centered, smoothly ascends to top
  const headerT = clamp(scrollProgress / 0.30, 0, 1);
  const headerCenterOffset = viewportHeight * 0.35; // centered in viewport at start
  const headerOffsetY = isDesktop ? (1 - easeOutCubic(headerT)) * headerCenterOffset : 0;

  // Staggered card translations:
  // Cards start completely below the viewport
  const cardStartTravel = viewportHeight * 0.95;

  // Card 1 (Left): enters first
  const card1T = clamp((scrollProgress - 0.08) / 0.54, 0, 1);
  const card1Y = isDesktop ? (1 - easeOutCubic(card1T)) * cardStartTravel : 0;

  // Card 2 (Middle): enters second, following Card 1 but lower
  const card2T = clamp((scrollProgress - 0.22) / 0.56, 0, 1);
  const card2Y = isDesktop ? (1 - easeOutCubic(card2T)) * cardStartTravel : 0;

  // Card 3 (Right): enters third, following Card 2 but lower
  const card3T = clamp((scrollProgress - 0.36) / 0.58, 0, 1);
  const card3Y = isDesktop ? (1 - easeOutCubic(card3T)) * cardStartTravel : 0;

  const cardYs = [card1Y, card2Y, card3Y];

  return (
    <section
      id="programs"
      ref={containerRef}
      className={`relative w-full bg-black ${isDesktop ? 'h-[280vh]' : 'py-20 sm:py-28'}`}
    >
      {/* Sticky Fullscreen Frame on Desktop / Flow Container on Mobile */}
      <div
        className={`${
          isDesktop
            ? 'sticky top-0 h-screen w-full overflow-hidden bg-black flex flex-col justify-between border-b border-[#232328]'
            : 'w-full bg-black border-b border-[#232328]'
        }`}
      >
        {/* Subtle Architectural Background Grid Lines */}
        <div className="absolute inset-0 pointer-events-none max-w-[1440px] mx-auto border-x border-[#232328] grid grid-cols-1 lg:grid-cols-3 z-0">
          <div className="hidden lg:block border-r border-[#232328]/50 h-full" />
          <div className="hidden lg:block border-r border-[#232328]/50 h-full" />
          <div className="h-full" />
        </div>

        {/* Content Wrapper */}
        <div
          className={`relative z-10 max-w-[1440px] mx-auto w-full ${
            isDesktop
              ? 'h-full flex flex-col justify-between px-6 sm:px-10 lg:px-12 pt-14 sm:pt-16 pb-8 sm:pb-10'
              : 'px-4 sm:px-8'
          }`}
        >
          {/* Section Header: Starts full-page centered, then moves up */}
          <div
            className={`w-full flex justify-center ${
              isDesktop ? 'will-change-transform' : 'mb-14 sm:mb-18'
            }`}
            style={{
              transform: isDesktop ? `translate3d(0, ${headerOffsetY}px, 0)` : 'none',
              transition: isDesktop ? 'transform 0.05s linear' : 'none',
            }}
          >
            <h2 className="flex flex-col items-center text-center text-[40px] sm:text-[56px] lg:text-[64px] leading-[1.0] tracking-[-0.04em] select-none">
              <span className="text-white font-normal">Three tracks.</span>
              <span className="flow-lavender font-editorial italic text-[44px] sm:text-[62px] lg:text-[72px] mt-1 sm:mt-2">
                One kind of builder.
              </span>
            </h2>
          </div>

          {/* Staggered Rising Cards Container */}
          <div className="w-full max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-0 border border-[#232328] bg-black shadow-2xl">
            {tracksData.map((track, idx) => (
              <div
                key={track.title}
                className={`p-5 sm:p-7 flex flex-col justify-between bg-black ${
                  idx < 2 ? 'lg:border-r border-[#232328]' : ''
                } border-b lg:border-b-0 border-[#232328] ${
                  isDesktop ? 'will-change-transform' : ''
                }`}
                style={{
                  transform: isDesktop ? `translate3d(0, ${cardYs[idx]}px, 0)` : 'none',
                  transition: isDesktop ? 'transform 0.05s linear' : 'none',
                }}
              >
                <div>
                  {/* Video / Trailer Box */}
                  <div className="relative aspect-[16/9.5] w-full overflow-hidden bg-zinc-950 border border-[#232328] group cursor-pointer">
                    <Image
                      src={track.thumbnail}
                      alt={track.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      unoptimized
                    />

                    {/* Airtribe Logo Stamp in Top Right */}
                    <div className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                      <Image
                        src="/airtribe-icon.svg"
                        alt="Airtribe"
                        width={10}
                        height={10}
                      />
                      <span className="text-[10px] text-zinc-300 font-medium">Airtribe</span>
                    </div>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative w-11 h-11 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full bg-black/70 backdrop-blur-sm border border-white/20 transition-transform duration-300 group-hover:scale-110" />
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white ml-0.5 relative z-10">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Countdown Status Ribbon */}
                  <div className="bg-[#121214] border-x border-b border-[#232328] px-3.5 py-2 flex items-center justify-between text-[11px] sm:text-xs mb-5">
                    <span className="text-zinc-400 font-normal">
                      Enrolment closes in{' '}
                      <span className="text-white font-mono font-bold ml-1">
                        {formatCountdown(track)}
                      </span>
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-[22px] sm:text-[26px] font-normal leading-[1.2] text-white tracking-tight mb-3">
                    {track.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-zinc-400 text-xs sm:text-[13px] leading-[1.65] font-light mb-6">
                    {track.desc}
                  </p>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-4 border-t border-[#1c1c22]">
                  <AirtribeButton
                    text="Learn more"
                    href={track.href}
                    className="!w-36 !h-10"
                  />
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
