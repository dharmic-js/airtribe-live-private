'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface CareerTab {
  id: string;
  number: string;
  title: string;
  desc: string;
  activeBg: string;
  rightGraphic: string;
  mobileGraphic: string;
  accentColor: string;
}

const careerTabs: CareerTab[] = [
  {
    id: 'interview-prep',
    number: '01',
    title: 'Interview preparation',
    desc: 'Weekly expert-led sessions across 8 PM interview rounds, from product design to AI interviews',
    activeBg: '/images/career/state-1-active.webp',
    rightGraphic: '/images/career/state-1-bg.webp',
    mobileGraphic: '/images/career/state-1-mobile.webp',
    accentColor: '#0b6b3a',
  },
  {
    id: 'profile-opt',
    number: '02',
    title: 'Profile optimization',
    desc: 'Build a robust resume, LinkedIn and PM portfolio that stand out to hiring managers',
    activeBg: '/images/career/state-2-active.webp',
    rightGraphic: '/images/career/state-2-bg.webp',
    mobileGraphic: '/images/career/state-2-mobile.webp',
    accentColor: '#1a6ef5',
  },
  {
    id: 'mock-interviews',
    number: '03',
    title: 'Unlimited mock interviews',
    desc: 'Practice with experienced PMs and get detailed feedback after every round',
    activeBg: '/images/career/state-3-active.webp',
    rightGraphic: '/images/career/state-3-bg.webp',
    mobileGraphic: '/images/career/state-3-mobile.webp',
    accentColor: '#6347e7',
  },
  {
    id: 'referrals-network',
    number: '04',
    title: 'Referrals and network',
    desc: 'Referrals to roles through our hiring partners once you meet the eligibility criteria',
    activeBg: '/images/career/state-4-active.webp',
    rightGraphic: '/images/career/state-4-bg.webp',
    mobileGraphic: '/images/career/state-4-mobile.webp',
    accentColor: '#e1523d',
  },
];

const statsData = [
  { value: '48 lpa', label: 'Highest package' },
  { value: '400%', label: 'Highest hike' },
  { value: '22 lpa', label: 'Median package' },
];

export function CareerSupportSection() {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [timerKey, setTimerKey] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Automatically cycle to the next tab every 6000ms
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveTabIdx((prev) => (prev + 1) % careerTabs.length);
      setTimerKey((prev) => prev + 1);
    }, 6000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeTabIdx]);

  const handleSelectTab = (index: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setActiveTabIdx(index);
    setTimerKey((prev) => prev + 1);
  };

  const activeTab = careerTabs[activeTabIdx];

  return (
    <section className="bg-white text-black py-20 sm:py-28 relative overflow-hidden border-t border-zinc-200">
      <div className="max-w-[1440px] mx-auto border-x border-zinc-200 px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mx-auto flex w-full max-w-xl flex-col items-center gap-3 text-center mb-12 sm:mb-16">
          <h2 className="font-editorial text-[34px] sm:text-[48px] text-black font-normal leading-tight tracking-tight">
            Career support, built into the program
          </h2>
        </div>

        {/* Desktop Split Card View (Hidden on mobile) */}
        <div className="hidden lg:block">
          <div className="border-y border-zinc-200 relative flex min-h-[576px] w-full overflow-hidden bg-white">

            {/* Background Graphic Layer (Right-aligned illustrations) */}
            <div className="pointer-events-none absolute inset-0 z-0">
              {careerTabs.map((tab, idx) => (
                <div
                  key={`bg-${tab.id}`}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${idx === activeTabIdx ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                  <Image
                    src={tab.rightGraphic}
                    alt=""
                    fill
                    className="object-cover object-right"
                    unoptimized
                    priority={idx === 0}
                  />
                </div>
              ))}
            </div>

            {/* Left Column: Interactive Cards & Tabs */}
            <div className="relative z-10 flex w-1/2 flex-col border-r border-zinc-200 bg-white/40 backdrop-blur-[2px]">
              {careerTabs.map((tab, idx) => {
                const isActive = idx === activeTabIdx;

                if (isActive) {
                  return (
                    <div
                      key={tab.id}
                      role="region"
                      aria-label={tab.title}
                      className="relative flex w-full shrink-0 flex-col gap-6 overflow-hidden border-b border-zinc-200 px-7 sm:px-9 py-8 sm:py-10 text-white shadow-lg transition-all duration-300"
                    >
                      {/* Active Card Textured Background */}
                      <Image
                        src={tab.activeBg}
                        alt=""
                        fill
                        className="object-cover pointer-events-none"
                        unoptimized
                        priority
                      />

                      {/* Smooth 6s Timer Line on Top */}
                      <div
                        key={`timer-${timerKey}`}
                        aria-hidden="true"
                        className="absolute top-0 left-0 z-20 h-1.5 sm:h-2 w-full origin-left bg-white"
                        style={{
                          animation: 'career-progress 6000ms linear forwards',
                        }}
                      />

                      {/* Content */}
                      <div className="relative z-10 flex w-full max-w-lg flex-col gap-6">
                        <p className="text-sm font-mono font-bold tracking-widest uppercase text-white/90">
                          {tab.number}
                        </p>
                        <div className="flex flex-col gap-2">
                          <h3 className="font-editorial text-[28px] sm:text-[34px] font-normal text-white leading-snug tracking-tight">
                            {tab.title}
                          </h3>
                          <p className="text-sm sm:text-base leading-relaxed text-white/95 font-normal max-w-md">
                            {tab.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handleSelectTab(idx)}
                    className="group border-b border-zinc-200 bg-[#fbfbfb] hover:bg-zinc-100 flex w-full shrink-0 items-center p-6 text-left transition-colors cursor-pointer"
                  >
                    <p className="font-editorial text-[22px] sm:text-[24px] font-normal text-zinc-500 group-hover:text-black transition-colors">
                      {tab.title}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Empty spacer so background graphic is fully visible */}
            <div className="relative w-1/2 pointer-events-none" />

          </div>
        </div>

        {/* Mobile Accordion View (lg:hidden) */}
        <div className="lg:hidden flex flex-col border border-zinc-200 rounded-xl overflow-hidden bg-white">
          {careerTabs.map((tab, idx) => {
            const isActive = idx === activeTabIdx;

            if (isActive) {
              return (
                <div
                  key={`m-${tab.id}`}
                  className="flex flex-col w-full border-b border-zinc-200"
                >
                  {/* Card with Mobile Graphic & Timer */}
                  <div className="relative flex w-full flex-col gap-4 overflow-hidden px-6 py-8 text-white min-h-[360px] justify-between">
                    <Image
                      src={tab.mobileGraphic}
                      alt={tab.title}
                      fill
                      className="object-cover pointer-events-none"
                      unoptimized
                    />

                    {/* Timer Line */}
                    <div
                      key={`timer-m-${timerKey}`}
                      className="absolute top-0 left-0 z-20 h-1.5 w-full origin-left bg-white"
                      style={{
                        animation: 'career-progress 6000ms linear forwards',
                      }}
                    />

                    <div className="relative z-10 flex flex-col gap-2 pt-2">
                      <span className="text-xs font-mono font-bold tracking-widest uppercase text-white/90">
                        {tab.number}
                      </span>
                      <h3 className="font-editorial text-[26px] font-normal text-white leading-tight">
                        {tab.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-white/95 leading-relaxed mt-1">
                        {tab.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <button
                key={`m-btn-${tab.id}`}
                type="button"
                onClick={() => handleSelectTab(idx)}
                className="border-b border-zinc-200 bg-[#fbfbfb] hover:bg-zinc-100 p-5 text-left transition-colors cursor-pointer"
              >
                <p className="font-editorial text-lg font-normal text-zinc-500 hover:text-black">
                  {tab.title}
                </p>
              </button>
            );
          })}
        </div>

        {/* Bottom Permanent Stats Row (48 lpa | 400% | 22 lpa) */}
        <div className="border-b border-zinc-200 flex flex-col sm:flex-row items-stretch justify-between bg-white mt-0">
          {statsData.map((stat, idx) => {
            const isLast = idx === statsData.length - 1;
            return (
              <div
                key={stat.label}
                className={`flex flex-1 flex-col items-center justify-center py-10 sm:py-12 px-6 overflow-hidden ${!isLast ? 'border-b sm:border-b-0 sm:border-r border-zinc-200' : ''
                  }`}
              >
                <div className="flex items-baseline sm:items-center gap-4 text-black">
                  <p className="font-editorial text-[56px] sm:text-[72px] leading-none whitespace-nowrap tracking-tight">
                    {stat.value}
                  </p>
                  <div className="flex flex-col justify-center text-xs sm:text-sm text-zinc-600 font-medium max-w-[95px] leading-tight">
                    <p>{stat.label}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Scoped CSS Keyframe for Timer Progress Bar */}
      <style jsx>{`
        @keyframes career-progress {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }
      `}</style>
    </section>
  );
}
