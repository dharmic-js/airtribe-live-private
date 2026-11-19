'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface EventItem {
  title: string;
  src: string;
  badge?: string;
}

const eventsList: EventItem[] = [
  {
    title: 'FINAL.FINAL — A Design Hackathon by Airtribe',
    src: '/final-final.1c7c55f9.webp',
    badge: 'Powered by Logitech',
  },
  {
    title: 'India Builder Tour 2026',
    src: '/india-builder-tour.24635f34.webp',
    badge: 'Powered by Make',
  },
  {
    title: 'AI Builders Hackathon',
    src: '/ai-builders-hackathon.abc233be.webp',
    badge: 'Pine Labs',
  },
  {
    title: 'BUILDCON 26',
    src: '/buildcon.e33afc6a.webp',
    badge: 'Flagship Summit',
  },
];

interface WarpedCardProps {
  item: EventItem;
  carouselRef: React.RefObject<HTMLDivElement | null>;
}

const WarpedEventCard: React.FC<WarpedCardProps> = ({ item, carouselRef }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<{ x: number; y: number } | null>(null);
  const [curveTransform, setCurveTransform] = useState({
    rotateY: 0,
    scale: 0.95,
    translateZ: 0,
  });

  // Track position in the marquee to compute the 3D wrap-around-the-head cylindrical curve
  useEffect(() => {
    let animId: number;

    const updateCurve = () => {
      if (cardRef.current && carouselRef.current) {
        const cardRect = cardRef.current.getBoundingClientRect();
        const carouselRect = carouselRef.current.getBoundingClientRect();

        const cardCenter = cardRect.left + cardRect.width / 2;
        const carouselCenter = carouselRect.left + carouselRect.width / 2;

        // Normalized distance: -1.0 (left edge), 0.0 (center), +1.0 (right edge)
        const norm = (cardCenter - carouselCenter) / (carouselRect.width * 0.48);
        const clamped = Math.max(-1.5, Math.min(1.5, norm));
        const absDist = Math.abs(clamped);

        // Cylindrical bow effect:
        // Center: smaller (scale 0.90), pushed slightly back (translateZ -35px)
        // Outer ends: significantly larger (scale up to 1.14), pulled forward (translateZ up to +55px)
        // Card angles inward towards center of head (rotateY)
        const scale = 0.90 + Math.pow(absDist, 1.25) * 0.22;
        const translateZ = -35 + Math.pow(absDist, 1.25) * 85;
        const rotateY = -clamped * 20;

        setCurveTransform({
          rotateY,
          scale,
          translateZ,
        });
      }
      animId = requestAnimationFrame(updateCurve);
    };

    animId = requestAnimationFrame(updateCurve);
    return () => cancelAnimationFrame(animId);
  }, [carouselRef]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1; // -1 to +1
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1; // -1 to +1
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt(null);
  };

  // Cursor bend effect: region under cursor depresses slightly backward into screen
  const hoverRotateX = tilt ? -tilt.y * 10 : 0;
  const hoverRotateY = tilt ? tilt.x * 10 : 0;
  const hoverTranslateZ = tilt ? -18 : 0;

  const totalRotateY = curveTransform.rotateY + hoverRotateY;
  const totalRotateX = hoverRotateX;
  const totalScale = curveTransform.scale * (tilt ? 1.02 : 1.0);
  const totalTranslateZ = curveTransform.translateZ + hoverTranslateZ;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-[280px] sm:w-[320px] h-[390px] sm:h-[450px] shrink-0 cursor-pointer shadow-2xl select-none mr-8 sm:mr-12 will-change-transform group"
      style={{
        transform: `perspective(1000px) rotateY(${totalRotateY}deg) rotateX(${totalRotateX}deg) scale(${totalScale}) translateZ(${totalTranslateZ}px)`,
        transformStyle: 'preserve-3d',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden',
        transition: tilt
          ? 'transform 120ms ease-out'
          : 'transform 350ms cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {/* Glitch-Free Card Inner Container:
          Uses inset box-shadow instead of standard border to prevent Chromium 3D rotation edge tearing
      */}
      <div
        className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0c0c10]"
        style={{
          boxShadow: tilt
            ? 'inset 0 0 0 1.5px rgba(255,255,255,0.35), 0 20px 40px rgba(0,0,0,0.8)'
            : 'inset 0 0 0 1px #232328, 0 12px 30px rgba(0,0,0,0.6)',
          transform: 'translate3d(0, 0, 0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
        }}
      >
        {/* Poster Image */}
        <Image
          src={item.src}
          alt={item.title}
          fill
          className="object-cover pointer-events-none transition-transform duration-700 ease-out group-hover:scale-105"
          unoptimized
        />

        {/* Dynamic Cursor Indentation Shadow */}
        {tilt && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-200"
            style={{
              background: `radial-gradient(circle at ${(tilt.x + 1) * 50}% ${(tilt.y + 1) * 50}%, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0) 65%)`,
            }}
          />
        )}

        {/* Subtle Top Shine on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </div>
  );
};

export const EventEcosystemSection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  // Triple the list to create a seamless infinite loop
  const displayItems = [...eventsList, ...eventsList, ...eventsList];

  return (
    <section className="relative w-full bg-black border-b border-[#232328] overflow-hidden">
      
      {/* Continuous Left and Right Border Container: unbroken vertical lines from hero to footer */}
      <div className="max-w-[1440px] mx-auto border-x border-[#232328] py-24 sm:py-32 relative z-10">
        
        {/* Background Curved Auditorium Graphic at Bottom */}
        <div className="absolute inset-x-0 bottom-0 h-80 sm:h-96 pointer-events-none opacity-30 z-0">
          <Image
            src="/auditorium.97dfa7c4.webp"
            alt=""
            fill
            className="object-cover object-top"
            unoptimized
          />
        </div>

        {/* Section Header */}
        <div className="text-center px-4 sm:px-8 mb-16 sm:mb-20 max-w-3xl mx-auto relative z-10">
          <h2 className="text-[44px] sm:text-[60px] lg:text-[72px] font-normal leading-[1.0] tracking-[-0.04em] text-white mb-4">
            The event <span className="flow-lavender font-editorial italic">ecosystem</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-[1.65] font-light max-w-2xl mx-auto">
            Hackathons, meetups, conferences and build nights in 50+ cities. Show up, build with strangers, learn from practitioners in the room, and leave with people you’ll build with again.
          </p>
        </div>

        {/* 3D Warped Rotating Carousel with Head Wrap Effect */}
        <div
          ref={carouselRef}
          className="relative w-full overflow-hidden py-10 [mask-image:linear-gradient(to_right,transparent,black_120px,black_calc(100%-120px),transparent)] z-10"
          style={{
            perspective: '1200px',
            perspectiveOrigin: '50% 50%',
          }}
        >
          {/* Continuous Infinite Marquee Track with Pause-on-Hover */}
          <div className="events-marquee-track flex items-center will-change-transform hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing pl-8">
            {displayItems.map((item, idx) => (
              <WarpedEventCard
                key={idx}
                item={item}
                carouselRef={carouselRef}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
