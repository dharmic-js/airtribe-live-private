'use client';

import React from 'react';
import Image from 'next/image';
import { useApplyModal } from '@/components/ApplyModalContext';
import { ChevronRight } from 'lucide-react';

const roleTagsDesktop = [
  { label: 'Software engineer', left: '20px', top: '39px' },
  { label: 'Consultant', left: '111px', top: '97px' },
  { label: 'Support / ops', left: '34px', top: '167px' },
  { label: 'Marketer', left: '191px', top: '182px' },
  { label: 'QA engineer', left: '111px', top: '242px' },
  { label: 'Product designer', left: '176px', top: '307px' },
  { label: 'Business analyst', left: '16px', top: '318px' },
  { label: 'Customer support executive', left: '34px', top: '394px' },
  { label: 'Sales executive', left: '20px', top: '469px' },
];

interface ComeAsYouAreProps {
  targetRole?: string;
  courseId?: string;
  roleDescription?: string;
}

export function ComeAsYouAreSection({
  targetRole = 'PM',
  courseId = 'AI-First Product Management',
  roleDescription = "Great builders come from everywhere. It's not where you start that matters, it's how fast you learn to build with AI. We turn your background into your edge, and point it at the roles everyone's hiring for."
}: ComeAsYouAreProps = {}) {
  const { openModal } = useApplyModal();

  return (
    <section className="bg-black text-white py-24 sm:py-32 relative overflow-hidden border-t border-[#232328]">
      {/* Background Dot Grid */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-25">
        <Image
          src="/images/persona/dot-grid.webp"
          alt=""
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      <div className="max-w-[1440px] mx-auto border-x border-[#232328] px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Desktop Split View (lg:flex) */}
        <div className="hidden lg:flex items-center justify-between min-h-[580px] relative">
          
          {/* Left: Role Constellation & Converging Particle Funnel */}
          <div className="relative w-[520px] h-[540px] shrink-0">
            {/* Particle Stream Funnel pointing to the right */}
            <div className="pointer-events-none absolute top-1/2 left-0 h-[380px] w-[500px] -translate-y-1/2 overflow-hidden">
              <Image
                src="/images/persona/particles.webp"
                alt=""
                fill
                className="object-contain"
                unoptimized
              />
            </div>

            {/* Floating Role Pills */}
            {roleTagsDesktop.map((role) => (
              <div
                key={role.label}
                className="absolute z-10 flex items-center border border-[#3b3b44] bg-[#0c0c0f]/90 backdrop-blur-sm px-3.5 py-2.5 rounded shadow-lg hover:border-zinc-400 transition-colors pointer-events-auto"
                style={{ left: role.left, top: role.top }}
              >
                <span className="text-xs sm:text-[13px] text-zinc-300 font-medium whitespace-nowrap">
                  {role.label}
                </span>
              </div>
            ))}
          </div>

          {/* Right: Copy & Actions */}
          <div className="flex flex-col gap-8 max-w-xl pl-8">
            <h2 className="font-editorial text-[42px] sm:text-[52px] text-white font-normal leading-[1.08] tracking-tight">
              Come as you are. Leave as an AI-first {targetRole}.
            </h2>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => openModal(courseId)}
                className="group relative flex h-12 w-44 shrink-0 cursor-pointer items-center justify-between overflow-hidden bg-white px-5 text-black transition-colors duration-300 hover:bg-zinc-200"
              >
                <span className="text-sm font-semibold">Apply now</span>
                <ChevronRight className="w-4 h-4 text-black group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => openModal('Program Fit Assessment')}
                className="flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap px-6 h-12 text-sm font-medium border border-white text-white bg-black hover:bg-zinc-900 transition-colors"
              >
                Is this program right for me?
              </button>
            </div>

            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              {roleDescription}
            </p>
          </div>

        </div>

        {/* Mobile View (lg:hidden) */}
        <div className="lg:hidden flex flex-col items-center text-center gap-10">
          
          {/* Mobile Visual */}
          <div className="relative w-full max-w-[340px] h-[340px] overflow-hidden">
            <div className="pointer-events-none absolute inset-0">
              <Image
                src="/images/persona/particles.webp"
                alt=""
                fill
                className="object-contain rotate-90"
                unoptimized
              />
            </div>
            
            {/* Subset of tags for clean mobile presentation */}
            <div className="relative z-10 w-full h-full flex flex-wrap gap-2 items-center justify-center p-4">
              {['Software engineer', 'Consultant', 'QA engineer', 'Product designer', 'Marketer', 'Business analyst'].map((tag) => (
                <span
                  key={tag}
                  className="border border-[#3b3b44] bg-[#0c0c0f]/90 px-3 py-1.5 rounded text-xs text-zinc-300 font-medium shadow"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6 max-w-md">
            <h2 className="font-editorial text-[32px] text-white font-normal leading-tight">
              Come as you are. Leave as an AI-first PM.
            </h2>

            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={() => openModal('AI-First Product Management')}
                className="w-full flex h-12 cursor-pointer items-center justify-center gap-2 bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors shadow"
              >
                <span>Apply now</span>
                <ChevronRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => openModal('Program Fit Assessment')}
                className="w-full flex cursor-pointer items-center justify-center gap-2 px-6 h-12 text-sm font-medium border border-white text-white bg-black hover:bg-zinc-900 transition-colors"
              >
                Is this program right for me?
              </button>
            </div>

            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
              Great PMs come from everywhere. It&apos;s not where you start that matters, it&apos;s how fast you learn to build with AI. We turn your background into your edge, and point it at the roles everyone&apos;s hiring for.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
