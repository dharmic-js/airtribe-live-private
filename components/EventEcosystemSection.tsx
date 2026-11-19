'use client';

import React, { useState } from 'react';
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

interface EventCardProps {
  item: EventItem;
}

const WarpedEventCard: React.FC<EventCardProps> = ({ item }) => {
  const [tilt, setTilt] = useState<{ x: number; y: number } | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1; // -1 (left) to +1 (right)
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1; // -1 (top) to +1 (bottom)
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt(null);
  };

  // Cursor bend effect:
  // When cursor points over any region of the card, that exact area pushes backward into the screen
  // If cursor is at top (y < 0), rotateX tilts top backward: -y * 14deg
  // If cursor is at right (x > 0), rotateY tilts right backward: x * 14deg
  // translateZ pushes into depth
  const transformStyle = tilt
    ? `perspective(900px) rotateX(${-tilt.y * 14}deg) rotateY(${tilt.x * 14}deg) translateZ(-18px)`
    : 'perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)';

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-[280px] sm:w-[320px] h-[390px] sm:h-[450px] shrink-0 overflow-hidden rounded-xl border border-[#232328] bg-[#0c0c10] cursor-pointer shadow-2xl transition-transform duration-300 will-change-transform group select-none mr-8 sm:mr-12"
      style={{
        transform: transformStyle,
        transition: 'transform 400ms cubic-bezier(0.22, 1, 0.36, 1), border-color 300ms ease',
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

      {/* Dynamic Cursor Indentation Shadow (darker where cursor presses backward) */}
      {tilt && (
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${(tilt.x + 1) * 50}% ${(tilt.y + 1) * 50}%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 65%)`,
          }}
        />
      )}

      {/* Subtle Border Glow on Hover */}
      <div className="absolute inset-0 border border-white/20 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export const EventEcosystemSection: React.FC = () => {
  // Triple the list to create a seamless infinite loop
  const displayItems = [...eventsList, ...eventsList, ...eventsList];

  return (
    <section className="relative w-full bg-black border-b border-[#232328] py-24 sm:py-32 overflow-hidden">
      
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

      <div className="max-w-[1440px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center px-4 sm:px-8 mb-16 sm:mb-20 max-w-3xl mx-auto">
          <h2 className="text-[44px] sm:text-[60px] lg:text-[72px] font-normal leading-[1.0] tracking-[-0.04em] text-white mb-4">
            The event <span className="flow-lavender font-editorial italic">ecosystem</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-[1.65] font-light max-w-2xl mx-auto">
            Hackathons, meetups, conferences and build nights in 50+ cities. Show up, build with strangers, learn from practitioners in the room, and leave with people you’ll build with again.
          </p>
        </div>

        {/* 3D Warped Rotating Carousel with Edge Gradient Masks */}
        <div
          className="relative w-full overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,black_140px,black_calc(100%-140px),transparent)]"
          style={{
            perspective: '1400px',
            perspectiveOrigin: '50% 50%',
          }}
        >
          {/* Continuous Infinite Marquee Track with Pause-on-Hover */}
          <div className="events-marquee-track flex items-center will-change-transform hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing pl-8">
            {displayItems.map((item, idx) => (
              <WarpedEventCard key={idx} item={item} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
