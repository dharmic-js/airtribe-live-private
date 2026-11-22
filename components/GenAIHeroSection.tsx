'use client';

import React from 'react';
import Image from 'next/image';
import { AirtribeButton } from '@/components/AirtribeButton';
import { GenAISpectrumWaveCanvas } from '@/components/GenAISpectrumWaveCanvas';

interface GenAIHeroSectionProps {
  onApplyClick: () => void;
}

export function GenAIHeroSection({ onApplyClick }: GenAIHeroSectionProps) {
  return (
    <section className="relative w-full bg-black text-white pt-12 sm:pt-20 pb-0 overflow-hidden">
      {/* Layout constrained within the dual vertical guide lines */}
      <div className="max-w-[1440px] mx-auto border-x border-[#232328] relative flex flex-col items-center">
        
        {/* Top Centered Content with standard padding */}
        <div className="w-full px-4 sm:px-8 flex flex-col items-center">
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
        </div>

        {/* 3D Illuminated Spectrum Fin Wave Graphic spanning full width with undulating wave animation */}
        <div className="relative w-full mt-10 sm:mt-14 flex items-end justify-center overflow-hidden select-none pb-0">
          <GenAISpectrumWaveCanvas />

          {/* Ambient Lighting Behind Wave */}
          <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-cyan-500/15 via-purple-600/15 to-transparent blur-3xl pointer-events-none -z-10" />
        </div>

      </div>
    </section>
  );
}
