'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const perkTools = [
  { name: 'ChatGPT', src: '/images/perks/perk-chatgpt.webp' },
  { name: 'Claude', src: '/images/perks/perk-claude.webp' },
  { name: 'Claude Code', src: '/images/perks/perk-claude-code.webp' },
  { name: 'n8n', src: '/images/perks/perk-n8n.webp' },
];

const immersionPhotos = [
  '/images/perks/tribe-photo-1.jpg',
  '/images/perks/tribe-photo-2.jpg',
  '/images/perks/tribe-photo-3.jpg',
];

export function BonusPerksSection() {
  const [activePhoto, setActivePhoto] = useState(0);
  const [centerToolIdx, setCenterToolIdx] = useState(0);

  // Immersion photos cross-fade timer
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhoto((prev) => (prev + 1) % immersionPhotos.length);
    }, 3600);
    return () => clearInterval(timer);
  }, []);

  // Plasma Tool Belt cycling timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCenterToolIdx((prev) => (prev + 1) % perkTools.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full bg-white text-black py-20 sm:py-28 overflow-hidden border-b border-zinc-200">
      {/* Subtle Dotted Gray Grid Texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#d1d5db 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
        }}
      />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-[38px] sm:text-[48px] font-editorial text-black leading-tight tracking-tight">
            Bonus perks
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base font-normal mt-2.5 max-w-xl">
            Everything that comes with your seat, on top of the live sessions.
          </p>
        </div>

        {/* 1. TOP ROW: 2 Large Cards (INR 50,000 Perks & Access to the Tribe) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mb-7">
          
          {/* CARD 1: INR 50,000 AI Tools, Credits & Perks */}
          <div className="relative min-h-[380px] sm:min-h-[420px] rounded-2xl overflow-hidden bg-black text-white p-7 sm:p-9 flex flex-col justify-between border border-zinc-800 shadow-xl group hover:scale-[1.01] transition-transform">
            
            {/* Left Description Content */}
            <div className="relative z-10 max-w-[230px] sm:max-w-[260px] flex flex-col gap-3">
              <p className="text-[38px] sm:text-[44px] font-semibold leading-[0.98] tracking-tight">
                INR 50,000
              </p>
              <h3 className="text-base sm:text-[17px] font-bold text-white leading-snug">
                AI tools, credits and partner perks
              </h3>
              <p className="text-xs sm:text-[13px] leading-relaxed text-zinc-300">
                Shared access to premium AI tools, so you learn and build real projects on what teams actually use. Access varies by tool; see the FAQ.
              </p>
            </div>

            {/* Right Display: Converging Plasma Video + Cycling Tool Belt */}
            <div className="absolute top-4 bottom-5 right-4 sm:right-7 w-[190px] sm:w-[260px] overflow-hidden rounded-xl border border-white/10 bg-black">
              {/* Converging Plasma Video */}
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="/images/perks/burst-poster.jpg"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none scale-125 filter saturate-[0.85]"
              >
                <source src="/images/perks/burst.mp4" type="video/mp4" />
              </video>

              {/* Ambient Radial Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60 pointer-events-none" />

              {/* Horizontal Belt Moving Right to Left with Center Highlight */}
              <div className="absolute inset-0 flex flex-row items-center justify-center gap-3 sm:gap-4 pointer-events-none px-2 overflow-hidden">
                {[-1, 0, 1].map((offset) => {
                  const itemIndex = (centerToolIdx + offset + perkTools.length) % perkTools.length;
                  const tool = perkTools[itemIndex];
                  const isCenter = offset === 0;

                  return (
                    <div
                      key={`${tool.name}-${offset}-${centerToolIdx}`}
                      className={`transition-all duration-700 ease-out flex items-center justify-center shrink-0 ${
                        isCenter
                          ? 'scale-115 opacity-100 z-10 drop-shadow-[0_0_28px_rgba(255,255,255,0.85)]'
                          : 'scale-75 opacity-40 blur-[0.5px]'
                      }`}
                    >
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-black/60 backdrop-blur-md flex items-center justify-center">
                        <Image
                          src={tool.src}
                          alt={tool.name}
                          fill
                          className="object-cover p-1.5"
                          unoptimized
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* CARD 2: Access to the Tribe */}
          <div className="relative min-h-[380px] sm:min-h-[420px] rounded-2xl overflow-hidden bg-[#581c87] text-white p-7 sm:p-9 flex flex-col justify-between border border-purple-800 shadow-xl group hover:scale-[1.01] transition-transform">
            
            {/* Left Description Content */}
            <div className="relative z-10 max-w-[230px] sm:max-w-[260px] flex flex-col gap-3">
              <h3 className="text-[28px] sm:text-[34px] font-editorial font-normal leading-[1.05] tracking-tight">
                Access to the Tribe
              </h3>
              <p className="text-sm sm:text-[15px] font-bold text-purple-200 leading-snug">
                Meet online. Hang out offline. Build together.
              </p>
              <p className="text-xs sm:text-[13px] leading-relaxed text-purple-100/90">
                Join a community of AI builders, from operators to founders. Offline meetups put you in the room with peers, mentors, and the opportunities they bring.
              </p>
            </div>

            {/* Right Display: Offline Immersion Photos Cross-fade Slideshow */}
            <div className="absolute top-4 bottom-5 right-4 sm:right-7 w-[190px] sm:w-[260px] overflow-hidden rounded-xl border border-white/20 shadow-2xl bg-zinc-900">
              {immersionPhotos.map((photo, i) => (
                <Image
                  key={photo}
                  src={photo}
                  alt="Offline immersion meetup"
                  fill
                  className={`object-cover transition-opacity duration-1000 ${
                    i === activePhoto ? 'opacity-100' : 'opacity-0'
                  }`}
                  unoptimized
                />
              ))}
            </div>

          </div>

        </div>

        {/* 2. BOTTOM ROW: 3 Distinct Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          
          {/* CARD 3: Never nod along in a tech chat again */}
          <div className="bg-[#0c0c0f] border border-zinc-800 text-white rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-lg hover:border-zinc-600 transition-colors group">
            <div>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
                <Image
                  src="/images/perks/proof-tech-chat.webp"
                  alt="Tech chat helm"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <h3 className="text-lg sm:text-[21px] font-editorial font-normal mt-5 text-white leading-snug">
                Never nod along in a tech chat again
              </h3>
              <p className="text-xs sm:text-[13px] text-zinc-400 mt-2.5 leading-relaxed">
                In three weeks, learn enough tech to talk to engineers like a peer and build products with confidence.
              </p>
            </div>
          </div>

          {/* CARD 4: Walk into your PM interview ready */}
          <div className="bg-[#0c0c0f] border border-zinc-800 text-white rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-lg hover:border-zinc-600 transition-colors group">
            <div>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
                <Image
                  src="/images/perks/proof-interview.webp"
                  alt="PM interview microphone"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <h3 className="text-lg sm:text-[21px] font-editorial font-normal mt-5 text-white leading-snug">
                Walk into your PM interview ready
              </h3>
              <p className="text-xs sm:text-[13px] text-zinc-400 mt-2.5 leading-relaxed">
                Don't leave it to chance. Close your gaps across strategy, guesstimate, and behavioral rounds before the real thing.
              </p>
            </div>
          </div>

          {/* CARD 5: Learn straight from the people at the top */}
          <div className="bg-[#0c0c0f] border border-zinc-800 text-white rounded-2xl p-5 sm:p-6 flex flex-col justify-between shadow-lg hover:border-zinc-600 transition-colors group">
            <div>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
                <Image
                  src="/images/perks/proof-leaders.webp"
                  alt="Leaders summit peak"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  unoptimized
                />
              </div>
              <h3 className="text-lg sm:text-[21px] font-editorial font-normal mt-5 text-white leading-snug">
                Learn straight from the people at the top
              </h3>
              <p className="text-xs sm:text-[13px] text-zinc-400 mt-2.5 leading-relaxed">
                Get the insider playbook from CXOs and CPOs, perspectives you won't find anywhere else, only for enrolled learners.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
