'use client';

import React from 'react';

export const StatsSection: React.FC = () => {
  return (
    <section className="w-full bg-black border-b border-[#232328]">
      <div className="max-w-[1440px] mx-auto border-x border-[#232328]">
        <h2 className="sr-only">You won&apos;t build alone</h2>

        <div className="grid grid-cols-1 md:grid-cols-3">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-center py-10 sm:py-14 border-b md:border-b-0 md:border-r border-[#232328] px-4">
            <div className="stats-number-flow text-[56px] sm:text-[76px] font-normal leading-[1.1] tracking-tight mb-2">
              100+
            </div>
            <p className="text-zinc-300 text-[17px] sm:text-[19px] font-medium tracking-tight">
              Expert mentors
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-center py-10 sm:py-14 border-b md:border-b-0 md:border-r border-[#232328] px-4">
            <div className="stats-number-flow text-[56px] sm:text-[76px] font-normal leading-[1.1] tracking-tight mb-2">
              40,000+
            </div>
            <p className="text-zinc-300 text-[17px] sm:text-[19px] font-medium tracking-tight">
              Builders
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-center py-10 sm:py-14 px-4">
            <div className="stats-number-flow text-[56px] sm:text-[76px] font-normal leading-[1.1] tracking-tight mb-2">
              4.7/5
            </div>
            <p className="text-zinc-300 text-[17px] sm:text-[19px] font-medium tracking-tight">
              Overall rating
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
