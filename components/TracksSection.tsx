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

  // Header transform: starts vertically centered in the viewport, smoothly ascends to top
  const headerT = clamp(scrollProgress / 0.28, 0, 1);
  const headerCenterOffset = Math.max(viewportHeight * 0.38 - 80, 160);
  const headerOffsetY = isDesktop ? (1 - easeOutCubic(headerT)) * headerCenterOffset : 0;

  // Staggered card translations:
  // Cards start completely below the viewport and ascend chronologically
  const cardStartTravel = viewportHeight * 1.1;

  // Card 1 (Left): enters first
  const card1T = clamp((scrollProgress - 0.08) / 0.52, 0, 1);
  const card1Y = isDesktop ? (1 - easeOutCubic(card1T)) * cardStartTravel : 0;
  const card1Opacity = isDesktop ? clamp(card1T * 2.8, 0, 1) : 1;

  // Card 2 (Middle): enters second, following Card 1 but lower
  const card2T = clamp((scrollProgress - 0.20) / 0.54, 0, 1);
  const card2Y = isDesktop ? (1 - easeOutCubic(card2T)) * cardStartTravel : 0;
  const card2Opacity = isDesktop ? clamp(card2T * 2.8, 0, 1) : 1;

  // Card 3 (Right): enters third, following Card 2 but lower
  const card3T = clamp((scrollProgress - 0.32) / 0.56, 0, 1);
  const card3Y = isDesktop ? (1 - easeOutCubic(card3T)) * cardStartTravel : 0;
  const card3Opacity = isDesktop ? clamp(card3T * 2.8, 0, 1) : 1;

  const cardTransforms = [
    { y: card1Y, opacity: card1Opacity },
    { y: card2Y, opacity: card2Opacity },
    { y: card3Y, opacity: card3Opacity },
  ];

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
            ? 'sticky top-0 h-screen w-full overflow-hidden bg-black flex flex-col justify-start border-b border-[#232328]'
            : 'w-full bg-black border-b border-[#232328]'
        }`}
      >
        {/* Continuous Left and Right Border Container: max-w-[1440px] mx-auto border-x border-[#232328] */}
        <div
          className={`relative z-10 max-w-[1440px] mx-auto w-full border-x border-[#232328] ${
            isDesktop
              ? 'h-full flex flex-col justify-between px-6 sm:px-10 lg:px-12 pt-8 sm:pt-10 lg:pt-12 pb-6 sm:pb-8'
              : 'px-4 sm:px-8'
          }`}
        >
          {/* Section Header: Starts full-page centered, then smoothly moves up to top */}
          <div
            className={`w-full flex justify-center shrink-0 ${
              isDesktop ? 'will-change-transform z-20' : 'mb-14 sm:mb-18'
            }`}
            style={{
              transform: isDesktop ? `translate3d(0, ${headerOffsetY}px, 0)` : 'none',
              transition: isDesktop ? 'transform 0.05s linear' : 'none',
            }}
          >
            <h2 className="flex flex-col items-center text-center text-[36px] sm:text-[50px] lg:text-[60px] leading-[1.05] tracking-[-0.04em] select-none">
              <span className="text-white font-normal">Three tracks.</span>
              <span className="flow-lavender font-editorial italic text-[40px] sm:text-[54px] lg:text-[66px] mt-1">
                One kind of builder.
              </span>
            </h2>
          </div>

          {/* Staggered Rising Cards:
              Zero ghost box borders: Cards fade in from opacity 0 as they scroll up from below.
              When aligned, all 3 sit on the exact same horizontal baseline.
          */}
          <div className="w-full max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-0 mt-4 sm:mt-6">
            {tracksData.map((track, idx) => (
              <div
                key={track.title}
                className={`p-4 sm:p-5 lg:p-6 flex flex-col justify-between bg-[#0a0a0c] border border-[#232328] ${
                  idx > 0 ? 'lg:-ml-[1px]' : ''
                } shadow-2xl ${
                  isDesktop ? 'will-change-transform' : ''
                }`}
                style={{
                  transform: isDesktop ? `translate3d(0, ${cardTransforms[idx].y}px, 0)` : 'none',
                  opacity: cardTransforms[idx].opacity,
                  transition: isDesktop ? 'transform 0.05s linear, opacity 0.15s ease-out' : 'none',
                }}
              >
                <div>
                  {/* Video / Trailer Box */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-zinc-950 border border-[#232328] group cursor-pointer">
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
                      <div className="relative w-10 h-10 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full bg-black/70 backdrop-blur-sm border border-white/20 transition-transform duration-300 group-hover:scale-110" />
                        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white ml-0.5 relative z-10">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Countdown Status Ribbon */}
                  <div className="bg-[#121214] border-x border-b border-[#232328] px-3 py-1.5 flex items-center justify-between text-[11px] sm:text-xs mb-4">
                    <span className="text-zinc-400 font-normal">
                      Enrolment closes in{' '}
                      <span className="text-white font-mono font-bold ml-1">
                        {formatCountdown(track)}
                      </span>
                    </span>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-[20px] sm:text-[23px] font-normal leading-[1.2] text-white tracking-tight mb-2.5">
                    {track.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-zinc-400 text-xs sm:text-[13px] leading-[1.55] font-light mb-4 line-clamp-3">
                    {track.desc}
                  </p>
                </div>

                {/* Bottom Action Button */}
                <div className="pt-3 border-t border-[#1c1c22]">
                  <AirtribeButton
                    text="Learn more"
                    href={track.href}
                    className="!w-32 !h-9 !text-xs"
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
