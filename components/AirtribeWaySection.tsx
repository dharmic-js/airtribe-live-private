'use client';

import React from 'react';
import Image from 'next/image';

export const AirtribeWaySection: React.FC = () => {
  return (
    <section className="w-full bg-black border-b border-[#232328] py-20 sm:py-28">
      <div className="max-w-[1440px] mx-auto border-x border-[#232328]">
        
        {/* Section Header */}
        <div className="text-center px-4 sm:px-8 mb-16 sm:mb-20">
          <h2 className="text-[40px] sm:text-[56px] lg:text-[64px] font-normal leading-[1.0] tracking-[-0.04em] text-white">
            The <span className="font-editorial italic">Airtribe</span> way
          </h2>
        </div>

        {/* 3 Large Styled Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#232328]">
          
          {/* Card 01: Emerald Green */}
          <div className="relative overflow-hidden p-8 sm:p-10 border-b md:border-b-0 md:border-r border-[#232328] min-h-[460px] flex flex-col justify-between" style={{ backgroundColor: '#00764a' }}>
            <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-luminosity">
              <Image
                src="/card-texture.5f0cab6b.webp"
                alt=""
                fill
                className="object-cover"
              />
            </div>

            <div className="relative z-10">
              <span className="text-[32px] sm:text-[36px] font-bold text-white tracking-wider block mb-4">
                01
              </span>
              <p className="text-white/90 text-sm sm:text-base leading-[1.5] max-w-xs font-normal">
                Learn live from practitioners who&apos;ve spent years building (and unlearning) at the companies you know.
              </p>
            </div>

            <div className="relative z-10 pt-16">
              <h3 className="text-[36px] sm:text-[44px] font-medium text-white leading-[1.1] tracking-tight">
                Live interactive <br />
                <span className="font-editorial italic font-normal">sessions</span>
              </h3>
            </div>
          </div>

          {/* Card 02: Coral Orange */}
          <div className="relative overflow-hidden p-8 sm:p-10 border-b md:border-b-0 md:border-r border-[#232328] min-h-[460px] flex flex-col justify-between" style={{ backgroundColor: '#ff725a' }}>
            <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-luminosity">
              <Image
                src="/card-texture-coral.87c40aa7.webp"
                alt=""
                fill
                className="object-cover"
              />
            </div>

            <div className="relative z-10">
              <span className="text-[32px] sm:text-[36px] font-bold text-white tracking-wider block mb-4">
                02
              </span>
              <p className="text-white/90 text-sm sm:text-base leading-[1.5] max-w-xs font-normal">
                Every module ends with a project. You learn it, then you build it, before you move on.
              </p>
            </div>

            <div className="relative z-10 pt-16">
              <h3 className="text-[36px] sm:text-[44px] font-medium text-white leading-[1.1] tracking-tight">
                Hands-on <br />
                <span className="font-editorial italic font-normal">projects</span>
              </h3>
            </div>
          </div>

          {/* Card 03: Electric Blue */}
          <div className="relative overflow-hidden p-8 sm:p-10 min-h-[460px] flex flex-col justify-between" style={{ backgroundColor: '#3580f9' }}>
            <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-luminosity">
              <Image
                src="/card-texture.5f0cab6b.webp"
                alt=""
                fill
                className="object-cover"
              />
            </div>

            <div className="relative z-10">
              <span className="text-[32px] sm:text-[36px] font-bold text-white tracking-wider block mb-4">
                03
              </span>
              <p className="text-white/90 text-sm sm:text-base leading-[1.5] max-w-xs font-normal">
                Join 40,000+ builders who ship. Peer reviews, in-person meetups, and a network that outlasts the program.
              </p>
            </div>

            <div className="relative z-10 pt-16">
              <h3 className="text-[32px] sm:text-[40px] font-medium text-white leading-[1.1] tracking-tight">
                Active community to <br />
                <span className="font-editorial italic font-normal">help you grow</span>
              </h3>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
