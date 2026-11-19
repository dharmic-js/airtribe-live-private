'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface CardStage {
  num: string;
  body: string;
  title1: string;
  title2: string;
  bgColor: string;
  texture: string;
  filterId: string;
  startTime: number;
  endTime: number;
}

const stages: CardStage[] = [
  {
    num: '01',
    body: "Learn live from practitioners who've spent years building (and unlearning) at the companies you know.",
    title1: 'Live interactive',
    title2: 'sessions',
    bgColor: '#00764a',
    texture: '/card-texture.5f0cab6b.webp',
    filterId: 'url(#hand-tint-green)',
    startTime: 0.0,
    endTime: 4.5,
  },
  {
    num: '02',
    body: 'Every module ends with a project. You learn it, then you build it, before you move on.',
    title1: 'Hands-on',
    title2: 'projects',
    bgColor: '#ff725a',
    texture: '/card-texture-coral.87c40aa7.webp',
    filterId: 'url(#hand-tint-orange)',
    startTime: 4.5,
    endTime: 9.2,
  },
  {
    num: '03',
    body: 'Join 40,000+ builders who ship. Peer reviews, in-person meetups, and a network that outlasts the program.',
    title1: 'Active community to',
    title2: 'help you grow',
    bgColor: '#3580f9',
    texture: '/card-texture.5f0cab6b.webp',
    filterId: 'url(#hand-tint-blue)',
    startTime: 9.2,
    endTime: 14.0,
  },
];

export const AirtribeWaySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const [headerInView, setHeaderInView] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  // Trigger faded whoosh left-to-right entrance animation on heading when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeaderInView(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Track scroll progress through the pinned track (0.0 to 1.0)
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollableDist = rect.height - windowHeight;

      if (scrollableDist <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / scrollableDist, 0), 1);
      setScrollProgress(progress);

      // Determine active card and video time
      let stage = 0;
      if (progress >= 0.66) {
        stage = 2;
      } else if (progress >= 0.33) {
        stage = 1;
      }
      setActiveStageIndex(stage);

      // Scrub hands animation video smoothly
      if (videoRef.current && videoRef.current.duration) {
        const targetTime = progress * 14.0;
        // Avoid jitter by setting currentTime
        if (Math.abs(videoRef.current.currentTime - targetTime) > 0.05) {
          videoRef.current.currentTime = targetTime;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeStage = stages[activeStageIndex];

  return (
    <section className="w-full bg-[#f4f4f6] text-black relative">
      {/* SVG Filters for ink coloring (Black ink becomes transparent, white ink gets colored) */}
      <svg className="absolute w-0 h-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <defs>
          <filter id="hand-tint-green" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.000
                      0 0 0 0 0.463
                      0 0 0 0 0.290
                      0.333 0.333 0.333 0 0"
            />
          </filter>
          <filter id="hand-tint-orange" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 1.000
                      0 0 0 0 0.447
                      0 0 0 0 0.353
                      0.333 0.333 0.333 0 0"
            />
          </filter>
          <filter id="hand-tint-blue" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.208
                      0 0 0 0 0.502
                      0 0 0 0 0.976
                      0.333 0.333 0.333 0 0"
            />
          </filter>
        </defs>
      </svg>

      {/* Top Header Section with Faded Whoosh Entrance from Left to Right */}
      <div
        ref={headerRef}
        className="w-full bg-black py-20 sm:py-28 px-6 sm:px-12 border-b border-[#232328] relative overflow-hidden"
      >
        <div className="max-w-[1440px] mx-auto text-center relative z-10">
          <h2 className="text-[44px] sm:text-[60px] lg:text-[76px] font-normal leading-[1.0] tracking-[-0.04em] text-white flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
            {/* 'The' - delay 0ms */}
            <span
              className={`inline-block transition-all duration-700 ease-out transform ${
                headerInView
                  ? 'opacity-100 translate-x-0 blur-0'
                  : 'opacity-0 -translate-x-12 blur-sm'
              }`}
            >
              The
            </span>

            {/* 'Airtribe' - delay 140ms */}
            <span
              className={`inline-block transition-all duration-700 ease-out transform font-editorial italic text-white/95 ${
                headerInView
                  ? 'opacity-100 translate-x-0 blur-0'
                  : 'opacity-0 -translate-x-12 blur-sm'
              }`}
              style={{ transitionDelay: '140ms' }}
            >
              Airtribe
            </span>

            {/* 'way' - delay 280ms */}
            <span
              className={`inline-block transition-all duration-700 ease-out transform ${
                headerInView
                  ? 'opacity-100 translate-x-0 blur-0'
                  : 'opacity-0 -translate-x-12 blur-sm'
              }`}
              style={{ transitionDelay: '280ms' }}
            >
              way
            </span>
          </h2>
        </div>
      </div>

      {/* Pinned Scroll Track for Hands and Stacked Cards Animation */}
      <div
        ref={containerRef}
        className="relative w-full"
        style={{ height: '380vh' }}
      >
        {/* Sticky Viewport */}
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#f4f4f6] flex items-center justify-center border-b border-[#d8d8dc]">
          
          {/* Subtle Paper Texture Background */}
          <div
            className="absolute inset-0 pointer-events-none opacity-45 mix-blend-multiply"
            style={{
              backgroundImage: "url('/bg.5b4ca721.webp')",
              backgroundRepeat: 'repeat',
            }}
          />

          {/* Main Stage Container */}
          <div className="relative z-10 max-w-[1440px] w-full h-full mx-auto px-6 sm:px-12 lg:px-16 flex flex-col lg:flex-row items-center justify-between">
            
            {/* LEFT SIDE: Interactive Stacked Cards */}
            <div className="w-full lg:w-[480px] shrink-0 relative z-20 my-auto">
              <div className="relative w-full h-[420px] sm:h-[460px]">
                {stages.map((stage, idx) => {
                  const isActive = idx === activeStageIndex;
                  const isBehind = idx < activeStageIndex;
                  const isAhead = idx > activeStageIndex;

                  // Compute vertical offset and elevation for 3D card stack
                  let translateY = 0;
                  let scale = 1;
                  let opacity = 1;
                  let zIndex = 30;

                  if (isBehind) {
                    // Tucked neatly at the top of the stack
                    translateY = (idx - activeStageIndex) * 20;
                    scale = 0.96;
                    opacity = 0.95;
                    zIndex = 10 + idx;
                  } else if (isActive) {
                    // Active card front and center
                    translateY = 0;
                    scale = 1;
                    opacity = 1;
                    zIndex = 40;
                  } else if (isAhead) {
                    // Peeking from below
                    translateY = (idx - activeStageIndex) * 36;
                    scale = 0.98;
                    opacity = 0.9;
                    zIndex = 20 - idx;
                  }

                  return (
                    <div
                      key={stage.num}
                      className="absolute inset-0 rounded-none shadow-2xl p-7 sm:p-9 flex flex-col justify-between text-white overflow-hidden transition-all duration-500 ease-out"
                      style={{
                        backgroundColor: stage.bgColor,
                        transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
                        zIndex,
                        opacity,
                      }}
                    >
                      {/* Card Surface Dither Texture */}
                      <div className="absolute inset-0 pointer-events-none opacity-25 mix-blend-luminosity">
                        <Image
                          src={stage.texture}
                          alt=""
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>

                      {/* Top Content: Number + Body */}
                      <div className="relative z-10">
                        <span className="text-[32px] sm:text-[36px] font-bold block mb-4 tracking-wider leading-none">
                          {stage.num}
                        </span>
                        <p className="text-white/95 text-sm sm:text-base leading-relaxed max-w-sm font-normal">
                          {stage.body}
                        </p>
                      </div>

                      {/* Bottom Title: Editorial Dual Typography */}
                      <div className="relative z-10 pt-10">
                        <h3 className="text-[34px] sm:text-[44px] font-medium leading-[1.08] tracking-tight">
                          {stage.title1}{' '}
                          <span className="font-editorial italic font-normal block mt-1">
                            {stage.title2}
                          </span>
                        </h3>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Progress Indicator Dots */}
              <div className="flex items-center gap-2 mt-6 justify-center lg:justify-start">
                {stages.map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === activeStageIndex
                        ? 'w-8 bg-zinc-800'
                        : 'w-2 bg-zinc-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT SIDE: The Hand Animation (Green Hand -> Orange Hand with Threads -> Blue Hands with Polygon Thread Network) */}
            <div className="w-full lg:w-[65%] h-[360px] sm:h-[520px] lg:h-full relative flex items-center justify-center overflow-hidden">
              <video
                ref={videoRef}
                playsInline
                muted
                preload="auto"
                src="/hands-ink.mp4"
                className="w-full h-full max-h-[85vh] object-contain transition-all duration-500"
                style={{
                  filter: activeStage.filterId,
                }}
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
