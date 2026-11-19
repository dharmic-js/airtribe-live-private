'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AirtribeButton } from './AirtribeButton';

interface TrackCardProps {
  title: string;
  desc: string;
  thumbnail: string;
  initialCountdown: string;
  href: string;
  borderRight?: boolean;
}

const TrackCard: React.FC<TrackCardProps> = ({
  title,
  desc,
  thumbnail,
  initialCountdown,
  href,
  borderRight = true,
}) => {
  return (
    <div className={`p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 ${borderRight ? 'lg:border-r' : ''} border-[#232328] bg-black hover:bg-zinc-950/40 transition-colors group`}>
      <div>
        {/* Video / Trailer Card */}
        <div className="relative aspect-video w-full overflow-hidden bg-zinc-900 border border-[#232328] group/vid cursor-pointer mb-0">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover/vid:scale-105"
          />

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 transition-transform duration-300 group-hover/vid:scale-110" />
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white ml-0.5 relative z-10">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Countdown Bar */}
        <div className="bg-[#121214] border-x border-b border-[#232328] px-4 py-2.5 flex items-center justify-between text-xs mb-6">
          <span className="text-zinc-500 font-normal">Enrolment closes in</span>
          <span className="text-white font-mono font-bold tracking-wider">{initialCountdown}</span>
        </div>

        {/* Heading */}
        <h3 className="text-[24px] sm:text-[28px] font-normal leading-[1.2] text-white tracking-tight mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-zinc-400 text-sm leading-[1.6] font-normal font-light mb-8">
          {desc}
        </p>
      </div>

      <div className="pt-6 border-t border-[#232328]">
        <AirtribeButton
          text="Learn more"
          href={href}
          className="!w-36"
        />
      </div>
    </div>
  );
};

export const TracksSection: React.FC = () => {
  return (
    <section id="programs" className="w-full bg-black border-b border-[#232328] py-20 sm:py-28">
      <div className="max-w-[1440px] mx-auto border-x border-[#232328]">
        
        {/* Section Header */}
        <div className="text-center px-4 sm:px-8 mb-16 sm:mb-20">
          <h2 className="flex flex-col items-center text-center text-[40px] sm:text-[56px] lg:text-[64px] leading-[1.0] tracking-[-0.04em]">
            <span className="text-white font-normal">Three tracks.</span>
            <span className="flow-lavender font-editorial italic text-[44px] sm:text-[64px] lg:text-[72px] mt-1">
              One kind of builder.
            </span>
          </h2>
        </div>

        {/* Tracks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border-t border-[#232328]">
          <TrackCard
            title="AI-first product management"
            desc="AI-first PMs prototype their own ideas, automate the busywork, and make decisions at product speed. Learn to run product like a builder."
            thumbnail="/vid1.28e47de1.webp"
            initialCountdown="2d : 16h : 38m : 44s"
            href="/courses/product-management-launchpad"
            borderRight={true}
          />
          <TrackCard
            title="AI-first software engineering"
            desc="AI-first engineers design systems, automate the repetitive work, and ship AI-native products at scale. Learn the craft end to end, from DSA to Agentic Engineering."
            thumbnail="/vid2.30ec823d.webp"
            initialCountdown="3d : 16h : 38m : 44s"
            href="/courses/backend-engineering-launchpad"
            borderRight={true}
          />
          <TrackCard
            title="The GenAI launchpad"
            desc="Build agents and automations, turn an idea into a working AI product, and take it to real users with a go-to-market plan. Use it in your job, or launch your own startup."
            thumbnail="/vid3.b07c0e33.webp"
            initialCountdown="3d : 09h : 08m : 15s"
            href="/courses/generative-ai-launchpad"
            borderRight={false}
          />
        </div>

      </div>
    </section>
  );
};
