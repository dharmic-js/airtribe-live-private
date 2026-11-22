'use client';

import React from 'react';
import Image from 'next/image';
import { AirtribeButton } from '@/components/AirtribeButton';

interface GenAIStatsPartnerSectionProps {
  onApplyClick: () => void;
  onOpenCurriculumModal: () => void;
}

export function GenAIStatsPartnerSection({
  onApplyClick,
  onOpenCurriculumModal,
}: GenAIStatsPartnerSectionProps) {
  return (
    <section className="bg-black text-white relative">
      {/* Layout constrained within the dual vertical guide lines */}
      <div className="max-w-[1440px] mx-auto border-x border-[#232328] relative">
        
        {/* ROW 1: 4-COLUMN STATS & ACTIONS BAR */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-[#232328]">
          
          {/* Stat 1: 16 weeks */}
          <div className="p-6 sm:p-8 border-r border-[#232328] flex flex-col justify-center">
            <span className="text-[38px] sm:text-[46px] font-normal font-editorial leading-none text-white tracking-tight">
              16
            </span>
            <span className="text-zinc-400 text-xs sm:text-sm font-light mt-2">
              weeks
            </span>
          </div>

          {/* Stat 2: 15+ mentors */}
          <div className="p-6 sm:p-8 border-b md:border-b-0 md:border-r border-[#232328] flex flex-col justify-center">
            <span className="text-[38px] sm:text-[46px] font-normal font-editorial leading-none text-white tracking-tight">
              15+
            </span>
            <span className="text-zinc-400 text-xs sm:text-sm font-light mt-2">
              mentors
            </span>
          </div>

          {/* Stat 3: 22 Nov course starts */}
          <div className="p-6 sm:p-8 border-r border-[#232328] flex flex-col justify-center">
            <span className="text-[38px] sm:text-[46px] font-normal font-editorial leading-none text-white tracking-tight">
              22 Nov
            </span>
            <span className="text-zinc-400 text-xs sm:text-sm font-light mt-2">
              course starts
            </span>
          </div>

          {/* Action Column: Buttons */}
          <div className="p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <AirtribeButton
              text="Apply now"
              onClick={onApplyClick}
              className="!w-full sm:!w-36 !h-10 text-xs sm:text-sm"
            />
            <button
              onClick={onOpenCurriculumModal}
              className="w-full sm:w-auto px-4 py-2.5 rounded-lg border border-zinc-700 bg-transparent text-white text-xs sm:text-sm font-medium hover:bg-zinc-850 hover:border-zinc-500 transition-all text-center whitespace-nowrap cursor-pointer"
            >
              Get the full curriculum
            </button>
          </div>

        </div>

        {/* ROW 2: 2-COLUMN PARTNER BADGES */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#232328]">
          
          {/* Partner 1: n8n Vetted Curriculum */}
          <div className="p-8 sm:p-12 md:border-r border-b md:border-b-0 border-[#232328] relative flex flex-col items-center justify-center text-center overflow-hidden bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_70%)]">
            {/* Subtle Texture Grid */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: `url('/images/tools-pixelated-bg.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />

            {/* n8n Badge with Flanking Laurel Wreaths */}
            <div className="relative z-10 flex items-center justify-center gap-4 sm:gap-6 mb-3">
              <div className="relative w-8 sm:w-10 h-12 opacity-70">
                <Image
                  src="/logos/laurel-edc-l.svg"
                  alt="Laurel wreath left"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex items-center gap-3">
                <div className="relative w-10 sm:w-12 h-6 sm:h-7">
                  <Image
                    src="/logos/genai/partner-wreath.svg"
                    alt="n8n nodes"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                  n8n
                </span>
              </div>

              <div className="relative w-8 sm:w-10 h-12 opacity-70 scale-x-[-1]">
                <Image
                  src="/logos/laurel-edc-l.svg"
                  alt="Laurel wreath right"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm font-light relative z-10">
              Vetted curriculum
            </p>
          </div>

          {/* Partner 2: EDC, IIT Delhi Knowledge Partner */}
          <div className="p-8 sm:p-12 relative flex flex-col items-center justify-center text-center overflow-hidden bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_70%)]">
            {/* Subtle Texture Grid */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage: `url('/images/tools-pixelated-bg.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />

            {/* EDC, IIT Delhi with Flanking Laurel Wreaths */}
            <div className="relative z-10 flex items-center justify-center gap-4 sm:gap-6 mb-3">
              <div className="relative w-8 sm:w-10 h-12 opacity-70">
                <Image
                  src="/logos/laurel-edc-l.svg"
                  alt="Laurel wreath left"
                  fill
                  className="object-contain"
                />
              </div>

              <span className="text-2xl sm:text-3xl font-editorial font-normal tracking-tight text-white">
                EDC, IIT Delhi
              </span>

              <div className="relative w-8 sm:w-10 h-12 opacity-70 scale-x-[-1]">
                <Image
                  src="/logos/laurel-edc-l.svg"
                  alt="Laurel wreath right"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm font-light relative z-10">
              Knowledge partner
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
