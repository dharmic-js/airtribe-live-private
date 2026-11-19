'use client';

import React from 'react';
import Image from 'next/image';

const eventsList = [
  { title: 'BUILDCON 26', src: '/buildcon.e33afc6a.webp' },
  { title: 'FINAL.FINAL — Design Hackathon', src: '/final-final.1c7c55f9.webp' },
  { title: 'India Builder Tour 2026', src: '/india-builder-tour.24635f34.webp' },
  { title: 'AI Builders Hackathon', src: '/ai-builders-hackathon.abc233be.webp' },
];

export const EventEcosystemSection: React.FC = () => {
  return (
    <section className="relative w-full bg-black border-b border-[#232328] py-20 sm:py-28 overflow-hidden">
      
      {/* Background Auditorium Graphic at Bottom */}
      <div className="absolute inset-x-0 bottom-0 h-80 pointer-events-none opacity-20">
        <Image
          src="/auditorium.97dfa7c4.webp"
          alt=""
          fill
          className="object-cover object-top"
        />
      </div>

      <div className="max-w-[1440px] mx-auto border-x border-[#232328] relative z-10">
        
        {/* Section Header */}
        <div className="text-center px-4 sm:px-8 mb-16 sm:mb-20 max-w-3xl mx-auto">
          <h2 className="text-[40px] sm:text-[56px] lg:text-[64px] font-normal leading-[1.0] tracking-[-0.04em] text-white mb-4">
            The event <span className="flow-lavender font-editorial italic">ecosystem</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-[1.6] font-light">
            Hackathons, meetups, conferences and build nights in 50+ cities. Show up, build with strangers, learn from practitioners in the room, and leave with people you’ll build with again.
          </p>
        </div>

        {/* Marquee with 3D Event Posters */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_100px,black_calc(100%-100px),transparent)] pb-12">
          <div className="events-marquee-track flex items-center space-x-8 pl-4">
            {[...eventsList, ...eventsList, ...eventsList].map((item, idx) => (
              <div
                key={idx}
                className="relative h-96 w-72 sm:h-104 sm:w-80 shrink-0 overflow-hidden bg-[#121214] border border-[#232328] shadow-2xl transition-transform duration-300 hover:scale-105 hover:border-zinc-500 group"
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold block mb-1">
                    Live Airtribe Event
                  </span>
                  <h4 className="text-base font-medium text-white">
                    {item.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
