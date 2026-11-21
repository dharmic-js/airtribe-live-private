'use client';

import React from 'react';
import Image from 'next/image';

const interviewCards = [
  {
    title: 'Strategy',
    desc: 'Solve market, growth and business problems with structured thinking and clear decisions.',
    icon: (
      <svg width="32" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M9 15h6" />
        <path d="M9 11h6" />
      </svg>
    ),
  },
  {
    title: 'AI interview',
    desc: 'Show your AI-first skills and perform in AI-driven interview rounds.',
    icon: (
      <svg width="32" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z" />
        <path d="M5 3v4" />
        <path d="M3 5h4" />
      </svg>
    ),
  },
  {
    title: 'Execution',
    desc: 'Handle ambiguity, and diagnose what went wrong and why.',
    icon: (
      <svg width="32" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: 'Product design',
    desc: 'Find creative solutions to difficult or unusual problems.',
    icon: (
      <svg width="32" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <line x1="6" y1="7" x2="6.01" y2="7" />
        <line x1="9" y1="7" x2="9.01" y2="7" />
      </svg>
    ),
  },
  {
    title: 'Product improvement',
    desc: 'Improve existing products to meet customer needs and add value.',
    icon: (
      <svg width="32" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 18h6" />
        <path d="M10 22h4" />
        <path d="M12 2a7 7 0 0 0-7 7c0 2.4 1.2 4.5 3 5.7V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.3c1.8-1.2 3-3.3 3-5.7a7 7 0 0 0-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Analytical',
    desc: 'Frame problems in terms of concrete metrics and reason through them.',
    icon: (
      <svg width="32" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: 'Guesstimate',
    desc: "Work logically toward a close estimate when you don't have the data.",
    icon: (
      <svg width="32" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
    ),
  },
  {
    title: 'Behavioural',
    desc: 'Answer the experience-based and hypothetical scenario questions every PM interview includes.',
    icon: (
      <svg width="32" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-5.04z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-5.04z" />
      </svg>
    ),
  },
];

export function WeeklyInterviewSection() {
  return (
    <section className="bg-black text-white pt-24 sm:pt-32 pb-16 sm:pb-24 relative overflow-hidden border-t border-[#232328]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Top Header with Compass Graphic */}
        <div className="relative mb-12 sm:mb-16 min-h-[160px] sm:min-h-[220px] flex items-center justify-between">
          <div className="relative z-10 max-w-xl">
            <h2 className="font-editorial text-[36px] sm:text-[48px] text-white font-normal leading-tight tracking-tight">
              Weekly interview preparation
            </h2>
          </div>

          {/* Compass Graphic on Top-Right */}
          <div className="hidden sm:block absolute right-0 top-0 w-[380px] lg:w-[471px] h-[226px] pointer-events-none opacity-90">
            <div
              className="w-full h-full bg-white"
              style={{
                maskImage: 'url(/images/interview/compass.webp)',
                WebkitMaskImage: 'url(/images/interview/compass.webp)',
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'right center',
                WebkitMaskPosition: 'right center',
              }}
            />
          </div>
        </div>

        {/* 8-Card Grid (4 columns desktop, 2 columns tablet, 1 column mobile) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-[#232328]">
          {interviewCards.map((card, idx) => (
            <div
              key={card.title}
              className="group relative flex flex-col justify-between bg-black min-h-[260px] sm:min-h-[300px] border-b border-r border-[#232328] px-6 sm:px-8 py-8 sm:py-10 transition-colors"
            >
              {/* Card Hover Image Texture */}
              <Image
                src="/images/interview/card-hover.png"
                alt=""
                fill
                className="pointer-events-none absolute inset-0 z-0 size-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                unoptimized
              />

              {/* Icon */}
              <div className="relative z-10 text-white/90 group-hover:text-white transition-colors mb-8 sm:mb-14">
                <div className="w-10 h-10 flex items-center justify-center">
                  {card.icon}
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col gap-3">
                <h3 className="font-editorial text-[24px] sm:text-[28px] font-normal text-white leading-snug">
                  {card.title}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
