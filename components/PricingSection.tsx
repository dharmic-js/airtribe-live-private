'use client';

import React from 'react';
import Image from 'next/image';
import { useApplyModal } from './ApplyModalContext';

export interface IncludedItem {
  title: string;
  desc: string;
}

const defaultIncludedItems: IncludedItem[] = [
  {
    title: 'Live sessions with product leaders',
    desc: '40+ live sessions and weekly assignments with PMs from top companies',
  },
  {
    title: 'A portfolio you can show',
    desc: 'A deliverable from every module, and a capstone you present at Final Showcase Day',
  },
  {
    title: '₹50,000+ worth of AI tools',
    desc: 'Access to n8n, Claude Pro or ChatGPT Plus, Lyzr, Wispr Flow and Make',
  },
  {
    title: 'Placement assistance',
    desc: 'Resume, LinkedIn and portfolio reviews, mock interviews, and hiring-partner referrals once you meet the eligibility criteria',
  },
  {
    title: '1 year of access',
    desc: 'Recordings, resources and the community for 1 year from your start date',
  },
];

interface PricingSectionProps {
  courseTitle?: string;
  originalPrice?: string;
  discountPrice?: string;
  specialNote?: string;
  includedItems?: IncludedItem[];
  courseId?: string;
}

export function PricingSection({
  courseTitle = 'AI-First Product Management',
  originalPrice = '₹1,75,000',
  discountPrice = '₹1,44,999',
  specialNote = 'Special price applicable for next 15 seats only.',
  includedItems = defaultIncludedItems,
  courseId = 'AI-First Product Management',
}: PricingSectionProps = {}) {
  const { openModal } = useApplyModal();

  return (
    <section className="bg-black text-white py-20 sm:py-32 relative overflow-hidden border-t border-[#232328]">
      {/* Constrained layout strictly within the two guide lines */}
      <div className="max-w-[1440px] mx-auto border-x border-[#232328] relative px-4 sm:px-8 flex items-center justify-center">
        
        {/* Full-width Pricing Stage with Purple Streaks Background */}
        <div className="relative w-full max-w-[1240px] rounded-2xl overflow-hidden py-10 sm:py-16 px-4 sm:px-10 flex items-center justify-center">
          
          {/* Vertical Purple Streaks / Barcode Curtains Background */}
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/images/pricing/card-streaks.png"
              alt="Purple streaks frame"
              fill
              className="object-cover object-center"
              unoptimized
            />
          </div>

          {/* Central Radial Purple Glow */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <Image
              src="/images/pricing/glow.webp"
              alt="Purple glow"
              width={700}
              height={700}
              className="object-contain opacity-60 mix-blend-screen"
              unoptimized
            />
          </div>

          {/* Central Black Card */}
          <div className="relative z-10 w-full max-w-[1080px] bg-black/95 backdrop-blur-md border border-[#232328] rounded-2xl p-8 sm:p-12 lg:p-14 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              
              {/* Left Column: Course Name, Price, and Actions */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <h3 className="font-editorial text-[30px] sm:text-[38px] text-white font-normal leading-tight tracking-tight">
                    {courseTitle}
                  </h3>

                  <div className="mt-8 sm:mt-10">
                    <p className="text-zinc-500 line-through text-base sm:text-lg font-medium">
                      {originalPrice}
                    </p>
                    <p className="font-editorial text-[46px] sm:text-[56px] text-white font-normal leading-none tracking-tight mt-1">
                      {discountPrice}
                    </p>
                    <p className="text-zinc-300 text-xs sm:text-sm mt-3 font-normal">
                      {specialNote}
                    </p>
                    <p className="text-zinc-400 text-xs mt-1">
                      No-cost EMI available
                    </p>
                  </div>
                </div>

                {/* Button Actions */}
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => openModal(courseId)}
                    className="group inline-flex items-center gap-3 bg-white text-black text-xs sm:text-sm font-medium px-6 py-3 rounded-sm transition-all duration-300 hover:bg-zinc-100 shadow-lg cursor-pointer"
                  >
                    <span>Apply now</span>
                    <span className="w-5 h-5 rounded-full bg-[#7c3aed] text-white flex items-center justify-center text-xs group-hover:translate-x-0.5 transition-transform">
                      &gt;
                    </span>
                  </button>

                  <button
                    onClick={() => openModal(courseId)}
                    className="border border-zinc-700 hover:border-zinc-500 text-white text-xs sm:text-sm font-medium px-5 py-3 rounded-sm transition-colors cursor-pointer"
                  >
                    Request a callback
                  </button>
                </div>
              </div>

              {/* Right Column: What's Included */}
              <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-[#232328] pt-8 lg:pt-0 lg:pl-12 flex flex-col">
                <h4 className="text-xs sm:text-sm font-semibold text-zinc-300 tracking-wider uppercase mb-7">
                  What’s included
                </h4>

                <div className="space-y-6">
                  {includedItems.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="shrink-0 pt-0.5">
                        <Image
                          src="/chevron.svg"
                          alt=""
                          width={28}
                          height={18}
                          className="object-contain opacity-85"
                          unoptimized
                        />
                      </div>
                      <div>
                        <h5 className="text-white text-sm sm:text-base font-medium leading-snug">
                          {item.title}
                        </h5>
                        <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mt-1">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
