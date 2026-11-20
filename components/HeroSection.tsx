'use client';

import React, { useState } from 'react';
import { useApplyModal } from './ApplyModalContext';
import { AirtribeButton } from './AirtribeButton';

const marqueeLogos = [
  { name: 'Uber', src: '/logos/uber.48b48a45.svg', width: 50, height: 16 },
  { name: 'Meta', src: '/logos/meta.da990ff0.svg', width: 40, height: 26 },
  { name: 'Adobe', src: '/logos/adobe.bed3d518.svg', width: 44, height: 38 },
  { name: 'Shopify', src: '/logos/shopify.d0cf7ff1.svg', width: 34, height: 38 },
  { name: 'Groww', isGroww: true },
  { name: 'Paytm', src: '/logos/paytm.83ecf65f.svg', width: 48, height: 18 },
  { name: 'LinkedIn', src: '/logos/linkedin-v2.789cf12f.svg', width: 28, height: 28 },
  { name: 'Microsoft', src: '/logos/microsoft.e3fe3bf3.svg', width: 36, height: 36 },
  { name: 'Apple', src: '/logos/apple.61f872c0.svg', width: 30, height: 36 },
  { name: 'CRED', src: '/logos/cred.a4cd9d0e.svg', width: 40, height: 24 },
];

export const HeroSection: React.FC = () => {
  const { openModal } = useApplyModal();
  const [currentEra, setCurrentEra] = useState('1984 / Macintosh');

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const t = e.currentTarget.currentTime;
    if (t < 7) {
      setCurrentEra('1984 / Macintosh');
    } else if (t < 14) {
      setCurrentEra('1995 / World Wide Web');
    } else if (t < 21) {
      setCurrentEra('2007 / iPhone');
    } else if (t < 28) {
      setCurrentEra('2023 / Generative AI');
    } else {
      setCurrentEra('2024 / Starship');
    }
  };

  return (
    <section className="w-full bg-black border-b border-[#232328]">
      <div className="max-w-[1440px] mx-auto border-x border-[#232328]">

        {/* Top Headline Block */}
        <div className="relative pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-14 px-6 sm:px-12 lg:px-14">
          <h1 className="flex flex-col items-start text-[44px] sm:text-[72px] lg:text-[96px] leading-[0.98] tracking-[-0.04em] max-w-5xl">
            <span className="font-normal text-white">
              Every era gets its{' '}
              <span className="flow-lavender font-normal">builders.</span>
            </span>
            <span className="font-editorial italic font-normal text-white/95 mt-2 sm:mt-3 text-[48px] sm:text-[80px] lg:text-[104px] tracking-tight">
              Now is your turn
            </span>
          </h1>
        </div>

        {/* Split Grid Box: Left (Text & CTA) + Right (Retro ASCII Evolution Video) */}
        <div className="relative border-t border-[#232328] grid grid-cols-1 md:grid-cols-12 min-h-[360px] sm:min-h-[420px]">

          {/* Evolution Timeline Badge: Positioned right on top of the video's top-right border */}
          <div className="absolute right-0 bottom-full z-20 flex h-9 sm:h-10 items-center px-4 bg-[#18181c] border border-[#232328] border-r-0 border-b-0">
            <span className="text-zinc-300 text-xs sm:text-[13px] font-mono tracking-wider">
              {currentEra}
            </span>
          </div>

          {/* Left Cell */}
          <div className="md:col-span-5 border-b md:border-b-0 md:border-r border-[#232328] p-8 sm:p-12 lg:p-14 flex flex-col justify-between bg-black z-10">
            <p className="text-zinc-300 text-[16px] sm:text-[18px] leading-[1.6] max-w-sm font-normal">
              This era runs on AI. Learn to build with it from practitioners who do it every day, and a tribe that builds with you.
            </p>

            <div className="pt-8 md:pt-12">
              <AirtribeButton
                text="Learn more"
                href="#programs"
                onClick={() => {
                  const el = document.getElementById('programs');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              />
            </div>
          </div>

          {/* Right Cell: Clean ASCII Evolution Video with NO extra overlay */}
          <div className="md:col-span-7 relative bg-black flex items-center justify-center overflow-hidden min-h-[320px] sm:min-h-[420px]">
            <video
              autoPlay
              muted
              loop
              playsInline
              onTimeUpdate={handleTimeUpdate}
              className="w-full h-full object-cover object-center block"
            >
              <source src="/ascii-1x.1a3b7ac9.mp4" type="video/mp4" />
              <source src="/hero-ascii.mp4" type="video/mp4" />
            </video>
          </div>

        </div>

        {/* Bottom Strip: Mentors From + Scrolling Logo Cells */}
        <div className="border-t border-[#232328] flex flex-col lg:flex-row items-stretch overflow-hidden">

          {/* Mentors from label + Avatars */}
          <div className="flex items-center gap-4 px-6 sm:px-10 py-5 shrink-0 border-b lg:border-b-0 lg:border-r border-[#232328] bg-black z-20">
            <span className="text-zinc-400 text-[16px] sm:text-[18px] font-medium whitespace-nowrap">
              Mentors from
            </span>
            <div className="flex items-center">
              <img
                src="/ai-portraits/avatar-1.jpg"
                alt="Mentor"
                className="w-8 h-8 rounded-full border-2 border-black object-cover shrink-0"
              />
              <img
                src="/ai-portraits/avatar-2.jpg"
                alt="Mentor"
                className="w-8 h-8 rounded-full border-2 border-black object-cover -ml-2 shrink-0"
              />
              <img
                src="/ai-portraits/avatar-3.jpg"
                alt="Mentor"
                className="w-8 h-8 rounded-full border-2 border-black object-cover -ml-2 shrink-0"
              />
              <img
                src="/ai-portraits/avatar-4.jpg"
                alt="Mentor"
                className="w-8 h-8 rounded-full border-2 border-black object-cover -ml-2 shrink-0"
              />
            </div>
          </div>

          {/* Marquee of Bordered Square Cells */}
          <div className="flex-1 overflow-hidden relative flex items-center [mask-image:linear-gradient(to_right,transparent,black_40px,black_calc(100%-40px),transparent)]">
            <div className="animate-logo-strip flex items-center">
              {[...marqueeLogos, ...marqueeLogos].map((logo, idx) => (
                <div
                  key={idx}
                  className="w-24 h-20 sm:h-24 border-r border-[#232328] flex items-center justify-center bg-black shrink-0 hover:bg-zinc-950 transition-colors"
                >
                  {logo.isGroww ? (
                    <div className="flex items-center gap-1">
                      <img src="/logos/groww-a.1adebd1b.svg" alt="Groww" className="h-5 w-auto" />
                      <img src="/logos/groww-b.4211abea.svg" alt="" className="h-3 w-auto" />
                    </div>
                  ) : (
                    <img
                      src={logo.src}
                      alt={logo.name}
                      style={{ width: `${logo.width}px`, height: `${logo.height}px` }}
                      className="max-h-10 max-w-[70px] object-contain opacity-90 hover:opacity-100 transition-opacity"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
