'use client';

import React from 'react';
import Image from 'next/image';

interface ScheduleRow {
  category: string;
  desc: string;
  items: { text: string; stripeColor: string }[];
}

const commitmentSchedule: ScheduleRow[] = [
  {
    category: 'Core session',
    desc: 'Live, hands-on sessions led by your mentor',
    items: [
      { text: 'Sat, 11:00 AM - 1:00 PM (IST)', stripeColor: '#9DE1E3' },
      { text: 'Sun, 11:00 AM - 1:00 PM (IST)', stripeColor: '#F9F707' },
    ],
  },
  {
    category: 'Q&A session',
    desc: 'Mentor-led sessions to work through questions and get unblocked',
    items: [
      { text: 'Sat, 5:00 PM - 6:30 PM (IST)', stripeColor: '#997AFF' },
    ],
  },
  {
    category: 'Hands-on projects',
    desc: 'Real-world projects where you build, ship, and get feedback on your work',
    items: [
      { text: 'Module-level assignments', stripeColor: '#FF7A7A' },
    ],
  },
];

export function YourCommitmentSection() {
  return (
    <section className="bg-black text-white relative overflow-hidden border-t border-[#232328]">
      {/* Top Banner with Hands Background (White Theme) */}
      <div className="relative w-full bg-white text-black py-20 sm:py-28 overflow-hidden">
        {/* Subtle Hands Pinky Promise Graphic */}
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center opacity-85">
          <div className="relative w-full max-w-4xl h-full">
            <Image
              src="/images/commitment/hands.webp"
              alt=""
              fill
              className="object-contain object-top"
              unoptimized
            />
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10 text-center">
          <h2 className="font-editorial text-[36px] sm:text-[48px] text-black font-normal leading-tight tracking-tight">
            Your commitment
          </h2>
          <p className="text-zinc-600 text-sm sm:text-base font-normal mt-3 max-w-lg mx-auto leading-relaxed">
            Here&apos;s what a week in the program looks like: live sessions on weekends, projects in between.
          </p>
        </div>
      </div>

      {/* Schedule Table (Dark Theme matching image) */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 py-12 sm:py-20">
        <div className="border-t border-[#232328]">
          {commitmentSchedule.map((row, idx) => (
            <div
              key={row.category}
              className="border-b border-[#232328] flex flex-col md:flex-row items-stretch min-h-[140px]"
            >
              {/* Left Label & Description */}
              <div className="w-full md:w-96 shrink-0 border-b md:border-b-0 md:border-r border-[#232328] p-6 sm:p-8 flex flex-col justify-center gap-2">
                <h3 className="font-editorial text-[24px] sm:text-[28px] font-normal text-white leading-snug">
                  {row.category}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-xs">
                  {row.desc}
                </p>
              </div>

              {/* Right Schedule Pills */}
              <div className="flex-1 p-6 sm:p-8 lg:px-12 flex flex-col justify-center gap-4">
                {row.items.map((item, itemIdx) => (
                  <div
                    key={`item-${itemIdx}`}
                    className="relative flex h-14 sm:h-16 items-center overflow-hidden bg-[#121215] border border-white/5 pl-6 pr-4 rounded"
                  >
                    {/* Vertical Colored Stripe Accent */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-y-0 left-0 w-1"
                      style={{ backgroundColor: item.stripeColor }}
                    />
                    <span className="text-sm sm:text-base text-zinc-300 font-medium">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
