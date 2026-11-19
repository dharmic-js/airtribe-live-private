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
}

const stages: CardStage[] = [
  {
    num: '01',
    body: "Learn live from practitioners who've spent years building (and unlearning) at the companies you know.",
    title1: 'Live interactive',
    title2: 'sessions',
    bgColor: '#00764a',
    texture: '/card-texture.5f0cab6b.webp',
  },
  {
    num: '02',
    body: 'Every module ends with a project. You learn it, then you build it, before you move on.',
    title1: 'Hands-on',
    title2: 'projects',
    bgColor: '#ff725a',
    texture: '/card-texture-coral.87c40aa7.webp',
  },
  {
    num: '03',
    body: 'Join 40,000+ builders who ship. Peer reviews, in-person meetups, and a network that outlasts the program.',
    title1: 'Active community to',
    title2: 'help you grow',
    bgColor: '#3580f9',
    texture: '/card-texture.5f0cab6b.webp',
  },
];

// Mathematical easing
const easeOutCubic = (x: number): number => 1 - Math.pow(1 - x, 3);
const clamp = (val: number, min: number, max: number): number => Math.min(Math.max(val, min), max);

// Exact Airtribe video scrubbing keyframes:
// Starts at 2.8s to SKIP the repetitive finger movements at 0.0s-2.8s!
// Hands come closer pointing at each other from 2.8s to 6.4s
const videoKeyframes = [
  [0.0, 2.8],
  [0.24, 2.8],
  [0.44, 6.4],
  [0.62, 9.6],
  [0.82, 13.3],
  [1.0, 14.0],
];

function getTargetVideoTime(p: number): number {
  for (let i = 1; i < videoKeyframes.length; i++) {
    const [p0, t0] = videoKeyframes[i - 1];
    const [p1, t1] = videoKeyframes[i];
    if (p <= p1) {
      const frac = (p - p0) / (p1 - p0);
      const ease = frac * frac * (3 - 2 * frac);
      return t0 + (t1 - t0) * ease;
    }
  }
  return 14.0;
}

// Compute active color (r, g, b) with smooth transitions
function getStageColor(progress: number): { r: number; g: number; b: number; activeIdx: number } {
  const c1 = [0, 118, 74];   // #00764a Emerald Green
  const c2 = [255, 114, 90]; // #ff725a Coral Orange
  const c3 = [53, 128, 249]; // #3580f9 Electric Blue

  if (progress < 0.26) {
    return { r: c1[0], g: c1[1], b: c1[2], activeIdx: 0 };
  } else if (progress < 0.44) {
    const t = (progress - 0.26) / (0.44 - 0.26);
    const easeT = t * t * (3 - 2 * t);
    const r = Math.round(c1[0] + (c2[0] - c1[0]) * easeT);
    const g = Math.round(c1[1] + (c2[1] - c1[1]) * easeT);
    const b = Math.round(c1[2] + (c2[2] - c1[2]) * easeT);
    return { r, g, b, activeIdx: t > 0.5 ? 1 : 0 };
  } else if (progress < 0.62) {
    return { r: c2[0], g: c2[1], b: c2[2], activeIdx: 1 };
  } else if (progress < 0.80) {
    const t = (progress - 0.62) / (0.80 - 0.62);
    const easeT = t * t * (3 - 2 * t);
    const r = Math.round(c2[0] + (c3[0] - c2[0]) * easeT);
    const g = Math.round(c2[1] + (c3[1] - c2[1]) * easeT);
    const b = Math.round(c2[2] + (c3[2] - c2[2]) * easeT);
    return { r, g, b, activeIdx: t > 0.5 ? 2 : 1 };
  } else {
    return { r: c3[0], g: c3[1], b: c3[2], activeIdx: 2 };
  }
}

export const AirtribeWaySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const patternCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const [headerInView, setHeaderInView] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Target video time ref for seek loop
  const targetTimeRef = useRef(2.8);
  const isSeekingRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);

  // Current color ref for canvas render loop
  const currentColorRef = useRef({ r: 0, g: 118, b: 74, activeIdx: 0 });

  // Generate offscreen pixelated dither texture pattern
  const getPattern = useCallback((r: number, g: number, b: number) => {
    if (!patternCanvasRef.current) {
      const pCanvas = document.createElement('canvas');
      pCanvas.width = 240;
      pCanvas.height = 240;
      patternCanvasRef.current = pCanvas;
    }

    const pCanvas = patternCanvasRef.current;
    const pCtx = pCanvas.getContext('2d');
    if (!pCtx) return null;

    pCtx.clearRect(0, 0, pCanvas.width, pCanvas.height);

    // Stipple pixelated dots in the active color
    const dotColor = `rgba(${r}, ${g}, ${b}, 0.22)`;
    pCtx.fillStyle = dotColor;

    // Deterministic pseudo-random dither clusters
    const seed = 42;
    for (let x = 0; x < pCanvas.width; x += 4) {
      for (let y = 0; y < pCanvas.height; y += 4) {
        // High frequency organic dither field
        const hash = Math.sin(x * 12.9898 + y * 78.233 + seed) * 43758.5453;
        const rand = hash - Math.floor(hash);
        if (rand > 0.62) {
          pCtx.fillRect(x, y, 2, 2);
        }
      }
    }

    return pCanvas;
  }, []);

  // Main draw loop: draws the dither background + enlarged hand plane across the whole container
  const drawFrame = useCallback(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const cw = canvas.width;
    const ch = canvas.height;
    ctx.clearRect(0, 0, cw, ch);

    const { r, g, b } = currentColorRef.current;

    // 1. Draw pixelated dither background matching the active hand color
    const pCanvas = getPattern(r, g, b);
    if (pCanvas) {
      const pattern = ctx.createPattern(pCanvas, 'repeat');
      if (pattern) {
        ctx.fillStyle = pattern;
        ctx.fillRect(0, 0, cw, ch);
      }
    }

    // 2. Draw enlarged hand artwork
    if (video.readyState >= 2) {
      const planeW = 880;
      const planeH = 1604;

      // Scale generously so the hands span across the entire container,
      // with the arm entering from the upper left (behind the card) and
      // lower hand resting in the bottom right!
      const isMobile = cw < 1024;
      const scale = isMobile
        ? Math.max(cw / 700, ch / 1100)
        : Math.max(cw / 1050, ch / 1150);

      const drawW = planeW * scale;
      const drawH = planeH * scale;

      // Offset so the upper arm extends from behind the card (left: 80px)
      // and fingers meet in the center
      const drawX = isMobile ? (cw - drawW) * 0.5 : (cw - drawW) * 0.28;
      const drawY = (ch - drawH) * 0.45;

      ctx.drawImage(video, 0, 0, planeW, planeH, drawX, drawY, drawW, drawH);
    }
  }, [getPattern]);

  // Handle canvas resolution on resize for crisp Retina display
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

  // Intersection observer for heading entrance
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeaderInView(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Video seeking loop with seek-locking to prevent keyframe loops & stuttering
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

        if (!isSeekingRef.current && diff > 0.035) {
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

  // Scroll tracking: updates progress, computes color transitions, and scrubs video smoothly
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollableDist = rect.height - window.innerHeight;

      if (scrollableDist <= 0) return;

      const currentScroll = -rect.top;
      const progress = clamp(currentScroll / scrollableDist, 0, 1);
      setScrollProgress(progress);

      // Compute active color
      const stageColor = getStageColor(progress);
      currentColorRef.current = stageColor;

      // Compute target video time using the exact keyframes (starting at 2.8s)
      const targetTime = getTargetVideoTime(progress);
      targetTimeRef.current = targetTime;

      drawFrame();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [drawFrame]);

  const { r, g, b, activeIdx } = getStageColor(scrollProgress);

  // Compute card float-in translations from below completely out of frame:
  // Card 1: Settled at start; tucks upward as Card 2 arrives
  let card1Y = 0;
  let card1Scale = 1;
  let card1Opacity = 1;
  let card1Z = 30;

  if (scrollProgress >= 0.26 && scrollProgress < 0.44) {
    const t = (scrollProgress - 0.26) / 0.18;
    card1Y = -t * 26;
    card1Scale = 1 - t * 0.05;
    card1Opacity = 1 - t * 0.08;
    card1Z = 20;
  } else if (scrollProgress >= 0.44 && scrollProgress < 0.62) {
    card1Y = -26;
    card1Scale = 0.95;
    card1Opacity = 0.92;
    card1Z = 20;
  } else if (scrollProgress >= 0.62) {
    const t = clamp((scrollProgress - 0.62) / 0.18, 0, 1);
    card1Y = -26 - t * 24;
    card1Scale = 0.95 - t * 0.05;
    card1Opacity = 0.92 - t * 0.12;
    card1Z = 10;
  }

  // Card 2: Starts completely out of frame below (+100vh); floats up in parallel as color shifts to Orange
  let card2Y = 600;
  let card2Scale = 1;
  let card2Opacity = 0;
  let card2Z = 30;

  if (scrollProgress < 0.26) {
    card2Y = 600; // completely below out of frame
    card2Opacity = 0;
  } else if (scrollProgress >= 0.26 && scrollProgress < 0.44) {
    const t = clamp((scrollProgress - 0.26) / 0.18, 0, 1);
    card2Y = (1 - easeOutCubic(t)) * 600; // floats up into settled position
    card2Opacity = clamp(t * 2.5, 0, 1);
    card2Z = 30;
  } else if (scrollProgress >= 0.44 && scrollProgress < 0.62) {
    card2Y = 0; // settled in place during core orange movement
    card2Opacity = 1;
    card2Scale = 1;
    card2Z = 30;
  } else if (scrollProgress >= 0.62) {
    const t = clamp((scrollProgress - 0.62) / 0.18, 0, 1);
    card2Y = -t * 26;
    card2Scale = 1 - t * 0.05;
    card2Opacity = 1 - t * 0.08;
    card2Z = 25;
  }

  // Card 3: Starts completely out of frame below (+100vh); floats up in parallel as color shifts to Blue
  let card3Y = 600;
  let card3Scale = 1;
  let card3Opacity = 0;
  let card3Z = 40;

  if (scrollProgress < 0.62) {
    card3Y = 600; // completely below out of frame
    card3Opacity = 0;
  } else if (scrollProgress >= 0.62 && scrollProgress < 0.80) {
    const t = clamp((scrollProgress - 0.62) / 0.18, 0, 1);
    card3Y = (1 - easeOutCubic(t)) * 600; // floats up into settled position
    card3Opacity = clamp(t * 2.5, 0, 1);
    card3Z = 40;
  } else {
    card3Y = 0; // settled in place during core blue cat's cradle movement
    card3Opacity = 1;
    card3Scale = 1;
    card3Z = 40;
  }

  const cardTransforms = [
    { y: card1Y, scale: card1Scale, opacity: card1Opacity, z: card1Z },
    { y: card2Y, scale: card2Scale, opacity: card2Opacity, z: card2Z },
    { y: card3Y, scale: card3Scale, opacity: card3Opacity, z: card3Z },
  ];

  return (
    <section className="w-full bg-[#f4f4f6] text-black relative">
      {/* Dynamic SVG Filter for Tinting the Hand Video Canvas
          Black background becomes 100% transparent (alpha=0),
          white ink is tinted to the exact dynamic (r, g, b) of the active stage!
      */}
      <svg className="absolute w-0 h-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <defs>
          <filter id="hand-tint-dynamic" colorInterpolationFilters="sRGB">
            <feColorMatrix
              type="matrix"
              values={`0 0 0 0 ${(r / 255).toFixed(3)}
                      0 0 0 0 ${(g / 255).toFixed(3)}
                      0 0 0 0 ${(b / 255).toFixed(3)}
                      0.333 0.333 0.333 0 0`}
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
        style={{ height: '380vh' }}
      >
        {/* Sticky Viewport Frame with continuous left & right vertical border: max-w-[1440px] mx-auto border-x border-[#232328] */}
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#f4f4f6] border-b border-[#d8d8dc]">
          
          <div className="max-w-[1440px] mx-auto w-full h-full border-x border-[#232328] relative flex flex-col justify-between overflow-hidden">
            
            {/* Subtle Paper Texture Background */}
            <div
              className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply z-0"
              style={{
                backgroundImage: "url('/bg.5b4ca721.webp')",
                backgroundRepeat: 'repeat',
              }}
            />

            {/* FULL-BLEED CANVAS FOR HANDS & PIXELATED BACKGROUND:
                Placed across the entire container (inset-0, z-10).
                The hands fill the container generously and extend behind the card on the left!
            */}
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
              style={{
                filter: 'url(#hand-tint-dynamic)',
                mixBlendMode: 'multiply',
              }}
            />

            {/* "The Airtribe way" Heading:
                Placed lower down closer to the cards, in the white space
            */}
            <div
              ref={headerRef}
              className="w-full pt-14 sm:pt-16 pb-2 px-6 sm:px-12 text-center relative z-20"
            >
              <h2 className="text-[38px] sm:text-[52px] lg:text-[66px] font-normal leading-[1.0] tracking-[-0.04em] text-black flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
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

            {/* Card Stack Container:
                Cards sit on z-20 on top of the hands canvas.
                As the hands change color, each card floats in from below completely out of frame
                and settles in place once the core hand movement begins!
            */}
            <div className="relative z-20 w-full flex-1 px-6 sm:px-10 lg:px-16 flex items-center justify-start pb-8">
              
              <div className="w-full max-w-[440px] sm:max-w-[480px] relative">
                <div className="relative w-full h-[400px] sm:h-[430px]">
                  {stages.map((stage, idx) => {
                    const { y, scale, opacity, z } = cardTransforms[idx];

                    return (
                      <div
                        key={stage.num}
                        className="absolute inset-0 shadow-2xl p-7 sm:p-9 flex flex-col justify-between text-white overflow-hidden will-change-transform"
                        style={{
                          backgroundColor: stage.bgColor,
                          transform: `translate3d(0, ${y.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`,
                          zIndex: z,
                          opacity: opacity,
                          pointerEvents: opacity > 0.5 ? 'auto' : 'none',
                          transition: 'opacity 0.2s ease-out, transform 0.08s linear',
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
                          <h3 className="text-[32px] sm:text-[40px] font-medium leading-[1.08] tracking-tight">
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
                <div className="flex items-center gap-2 mt-6 justify-center sm:justify-start">
                  {stages.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeIdx
                          ? 'w-8 bg-zinc-800'
                          : 'w-2 bg-zinc-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
