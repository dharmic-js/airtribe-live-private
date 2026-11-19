'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

interface CardStage {
  num: string;
  body: string;
  title1: string;
  title2: string;
  bgColor: string;
  texture: string;
  filterId: string;
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
  },
  {
    num: '02',
    body: 'Every module ends with a project. You learn it, then you build it, before you move on.',
    title1: 'Hands-on',
    title2: 'projects',
    bgColor: '#ff725a',
    texture: '/card-texture-coral.87c40aa7.webp',
    filterId: 'url(#hand-tint-orange)',
  },
  {
    num: '03',
    body: 'Join 40,000+ builders who ship. Peer reviews, in-person meetups, and a network that outlasts the program.',
    title1: 'Active community to',
    title2: 'help you grow',
    bgColor: '#3580f9',
    texture: '/card-texture.5f0cab6b.webp',
    filterId: 'url(#hand-tint-blue)',
  },
];

export const AirtribeWaySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const [headerInView, setHeaderInView] = useState(false);
  const [activeStageIndex, setActiveStageIndex] = useState(0);

  // Target time and seek state for ultra-smooth video scrubbing without decode glitches
  const targetTimeRef = useRef(0);
  const isSeekingRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);

  // Draw the textured hand from the video onto the canvas (Left plane: x from 0 to 880, height 1604)
  // This explicitly discards the right-side silhouette plane (x from 896 to 1776)
  const drawFrame = useCallback(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas || video.readyState < 2) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const cw = canvas.width;
    const ch = canvas.height;
    ctx.clearRect(0, 0, cw, ch);

    // Compute aspect-fit dimensions for the 880x1604 hand plane
    const planeW = 880;
    const planeH = 1604;
    const scale = Math.min(cw / planeW, ch / planeH) * 1.15; // slightly enlarged for grandeur
    const drawW = planeW * scale;
    const drawH = planeH * scale;
    const drawX = (cw - drawW) / 2;
    const drawY = (ch - drawH) / 2;

    // Draw strictly the left half (0, 0, 880, 1604)
    ctx.drawImage(video, 0, 0, planeW, planeH, drawX, drawY, drawW, drawH);
  }, []);

  // Update canvas internal pixel resolution on resize for crisp Retina rendering
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.round(rect.width * dpr));
    canvas.height = Math.max(1, Math.round(rect.height * dpr));
    drawFrame();
  }, [drawFrame]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  // Faded whoosh left-to-right entrance animation on heading when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeaderInView(true);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Seek loop running via requestAnimationFrame to avoid keyframe thrashing / multi-loop resets
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleSeeked = () => {
      isSeekingRef.current = false;
      drawFrame();
    };

    video.addEventListener('seeked', handleSeeked);

    const updateLoop = () => {
      if (video && video.readyState >= 2) {
        const target = targetTimeRef.current;
        const diff = Math.abs(video.currentTime - target);

        // Only seek if difference exceeds threshold and video is not actively decoding a prior seek
        if (!isSeekingRef.current && diff > 0.04) {
          isSeekingRef.current = true;
          video.currentTime = target;
        }
      }
      animationFrameRef.current = requestAnimationFrame(updateLoop);
    };

    animationFrameRef.current = requestAnimationFrame(updateLoop);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      video.removeEventListener('seeked', handleSeeked);
    };
  }, [drawFrame]);

  // Scroll listener: maps scroll distance smoothly across the 3 stages
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollableDist = rect.height - window.innerHeight;

      if (scrollableDist <= 0) return;

      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / scrollableDist, 0), 1);

      // Determine active stage and compute monotonically mapped video time:
      // Stage 1 (0.0 to 0.33): Green hands reaching (0.0s to 4.2s)
      // Stage 2 (0.33 to 0.66): Orange hands with threads (4.2s to 8.8s)
      // Stage 3 (0.66 to 1.0): Blue hands with polygon thread network (8.8s to 13.8s)
      let stage = 0;
      let calculatedTime = 0;

      if (progress < 0.33) {
        stage = 0;
        calculatedTime = (progress / 0.33) * 4.2;
      } else if (progress < 0.66) {
        stage = 1;
        calculatedTime = 4.2 + ((progress - 0.33) / 0.33) * 4.6;
      } else {
        stage = 2;
        calculatedTime = 8.8 + ((progress - 0.66) / 0.34) * 5.0;
      }

      setActiveStageIndex(stage);
      targetTimeRef.current = Math.min(Math.max(calculatedTime, 0), 13.8);
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

      {/* Hidden Video element decoding in the background without UI display */}
      <video
        ref={videoRef}
        playsInline
        muted
        preload="auto"
        src="/hands-ink.mp4"
        className="hidden"
      />

      {/* Pinned Scroll Track for Sticky Stage */}
      <div
        ref={containerRef}
        className="relative w-full"
        style={{ height: '360vh' }}
      >
        {/* Sticky Viewport Frame with continuous left & right vertical border: max-w-[1440px] mx-auto border-x border-[#232328] */}
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#f4f4f6] border-b border-[#d8d8dc]">
          
          <div className="max-w-[1440px] mx-auto w-full h-full border-x border-[#232328] relative flex flex-col justify-between overflow-hidden">
            
            {/* Subtle Paper Texture Background */}
            <div
              className="absolute inset-0 pointer-events-none opacity-45 mix-blend-multiply"
              style={{
                backgroundImage: "url('/bg.5b4ca721.webp')",
                backgroundRepeat: 'repeat',
              }}
            />

            {/* "The Airtribe way" Heading in the white/paper space at the top */}
            <div
              ref={headerRef}
              className="w-full pt-8 sm:pt-12 pb-2 px-6 sm:px-12 text-center relative z-20"
            >
              <h2 className="text-[40px] sm:text-[56px] lg:text-[70px] font-normal leading-[1.0] tracking-[-0.04em] text-black flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
                {/* 'The' */}
                <span
                  className={`inline-block transition-all duration-700 ease-out transform ${
                    headerInView
                      ? 'opacity-100 translate-x-0 blur-0'
                      : 'opacity-0 -translate-x-12 blur-sm'
                  }`}
                >
                  The
                </span>

                {/* 'Airtribe' */}
                <span
                  className={`inline-block transition-all duration-700 ease-out transform font-editorial italic text-zinc-900 ${
                    headerInView
                      ? 'opacity-100 translate-x-0 blur-0'
                      : 'opacity-0 -translate-x-12 blur-sm'
                  }`}
                  style={{ transitionDelay: '140ms' }}
                >
                  Airtribe
                </span>

                {/* 'way' */}
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

            {/* Main Stage: Left Cards + Right Enlarged Unconfined Hand Canvas */}
            <div className="relative z-10 w-full flex-1 px-6 sm:px-10 lg:px-14 flex flex-col lg:flex-row items-center justify-between pb-6">
              
              {/* LEFT SIDE: Sequential Cards Flow
                  Card 01 is shown alone at start.
                  Card 02 and 03 do NOT stack or peek under Card 01 before their respective turns!
              */}
              <div className="w-full lg:w-[460px] shrink-0 relative z-20 my-auto">
                <div className="relative w-full h-[400px] sm:h-[440px]">
                  {stages.map((stage, idx) => {
                    const isActive = idx === activeStageIndex;
                    const isPassed = idx < activeStageIndex;
                    const isFuture = idx > activeStageIndex;

                    let translateY = 0;
                    let scale = 1;
                    let opacity = 0;
                    let zIndex = 10;
                    let pointerEvents = 'none';

                    if (isActive) {
                      translateY = 0;
                      scale = 1;
                      opacity = 1;
                      zIndex = 30;
                      pointerEvents = 'auto';
                    } else if (isPassed) {
                      // Tucked neatly above
                      translateY = (idx - activeStageIndex) * 22;
                      scale = 0.95 - (activeStageIndex - idx) * 0.03;
                      opacity = 0.95;
                      zIndex = 20 + idx;
                      pointerEvents = 'auto';
                    } else if (isFuture) {
                      // Completely offscreen below — NO STACKING or peeking underneath before arrival!
                      translateY = 80;
                      scale = 0.95;
                      opacity = 0;
                      zIndex = 5;
                      pointerEvents = 'none';
                    }

                    return (
                      <div
                        key={stage.num}
                        className="absolute inset-0 shadow-2xl p-7 sm:p-9 flex flex-col justify-between text-white overflow-hidden transition-all duration-600 ease-out"
                        style={{
                          backgroundColor: stage.bgColor,
                          transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
                          zIndex,
                          opacity,
                          pointerEvents: pointerEvents as React.CSSProperties['pointerEvents'],
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

                        {/* Bottom Title: Dual Typography */}
                        <div className="relative z-10 pt-10">
                          <h3 className="text-[32px] sm:text-[42px] font-medium leading-[1.08] tracking-tight">
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

                {/* Progress Indicators */}
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

              {/* RIGHT SIDE: Enlarged, Unconfined Hand Canvas
                  Only renders the authentic left textured plane (0 to 880px).
                  Fills generously across to the right border boundary without restriction.
              */}
              <div className="w-full lg:w-[68%] h-[400px] sm:h-[500px] lg:h-full relative flex items-center justify-center overflow-visible">
                <canvas
                  ref={canvasRef}
                  className="w-full h-full max-h-[85vh] object-contain transition-all duration-500 will-change-transform"
                  style={{
                    filter: activeStage.filterId,
                    mixBlendMode: 'multiply',
                  }}
                />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
