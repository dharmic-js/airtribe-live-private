'use client';

import React from 'react';
import Image from 'next/image';
import { AirtribeButton } from '@/components/AirtribeButton';

interface GenAIHeroSectionProps {
  onApplyClick: () => void;
}

export function GenAIHeroSection({ onApplyClick }: GenAIHeroSectionProps) {
  return (
    <section className="relative w-full bg-black text-white pt-12 sm:pt-20 pb-0 overflow-hidden">
      {/* Layout constrained within the dual vertical guide lines */}
      <div className="max-w-[1440px] mx-auto border-x border-[#232328] relative px-4 sm:px-8 flex flex-col items-center">
        
        {/* Main Editorial Headline */}
        <h1 className="font-editorial text-[42px] sm:text-[62px] md:text-[76px] lg:text-[84px] text-white font-normal leading-[1.06] tracking-tight text-center max-w-4xl mx-auto">
          Future proof your career with AI
        </h1>

        {/* Subtitle */}
        <p className="text-zinc-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto text-center mt-5 leading-relaxed font-light px-4">
          Design prompts, connect AI to your data, automate workflows, build agents, and ship your own AI-powered product in 16 weeks.
        </p>

        {/* Social Proof + Apply CTA Badge */}
        <div className="mt-8 flex items-center justify-between gap-4 sm:gap-6 bg-[#0e0e12] border border-[#2b2b34] rounded-full p-1.5 sm:p-2 pl-3 sm:pl-4 shadow-xl">
          <div className="flex items-center gap-3">
            {/* 4 Overlapping Avatar Circles */}
            <div className="flex -space-x-2 overflow-hidden">
              <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-black overflow-hidden bg-zinc-800">
                <Image
                  src="/portraits/hero-avatar-1.jpg"
                  alt="Enrolled learner"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-black overflow-hidden bg-zinc-800">
                <Image
                  src="/portraits/hero-avatar-2.jpg"
                  alt="Enrolled learner"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-black overflow-hidden bg-zinc-800">
                <Image
                  src="/portraits/hero-avatar-3.jpg"
                  alt="Enrolled learner"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-black overflow-hidden bg-zinc-800">
                <Image
                  src="/portraits/hero-avatar-4.jpg"
                  alt="Enrolled learner"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Learner Count Text */}
            <span className="text-xs sm:text-sm font-medium text-zinc-200 pr-1">
              <strong className="text-white font-semibold">600+</strong> learners already enrolled
            </span>
          </div>

          {/* Purple CTA Button */}
          <AirtribeButton
            text="Apply now"
            onClick={onApplyClick}
            className="!h-9 !px-4 text-xs font-medium"
          />
        </div>

        {/* 3D Illuminated Spectrum Fin Wave Graphic at Bottom */}
        <div className="relative w-full max-w-[940px] mx-auto mt-12 sm:mt-16 flex items-end justify-center pointer-events-none">
          <Image
            src="/images/genai-hero-wave.webp"
            alt="GenAI Spectrum Wave"
            width={732}
            height={170}
            className="w-full h-auto object-contain select-none"
            priority
          />
          {/* Subtle Glow Behind Wave */}
          <div className="absolute inset-x-12 bottom-0 h-32 bg-gradient-to-t from-cyan-500/10 via-purple-500/10 to-transparent blur-2xl pointer-events-none" />
        </div>

      </div>
    </section>
  );
}
