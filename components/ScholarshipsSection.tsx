'use client';

import React from 'react';
import Image from 'next/image';
import { useApplyModal } from './ApplyModalContext';

interface ScholarshipCard {
  number: string;
  title: string;
  desc: string;
  image: string;
}

const scholarshipCards: ScholarshipCard[] = [
  {
    number: '01',
    title: 'Merit Master',
    desc: 'A scholarship for those who score above 70% on our quiz and prove their merit',
    image: '/images/scholarships/merit-master.webp',
  },
  {
    number: '02',
    title: 'Bridge the Gap',
    desc: 'A scholarship for those who need help with the cost of the program',
    image: '/images/scholarships/bridge-the-gap.webp',
  },
  {
    number: '03',
    title: 'Elevate Her',
    desc: 'A scholarship for women building careers in tech',
    image: '/images/scholarships/elevate-her.webp',
  },
  {
    number: '04',
    title: 'Future Shapers',
    desc: 'A scholarship for students stepping into the industry',
    image: '/images/scholarships/future-shapers.webp',
  },
];

export function ScholarshipsSection() {
  const { openModal } = useApplyModal();

  const card1 = scholarshipCards[0]; // 01 Merit Master
  const card2 = scholarshipCards[1]; // 02 Bridge the Gap
  const card3 = scholarshipCards[2]; // 03 Elevate Her
  const card4 = scholarshipCards[3]; // 04 Future Shapers

  return (
    <section className="bg-black text-white py-20 sm:py-28 relative overflow-hidden border-t border-[#232328]">
      {/* Constrained layout strictly within the two guide lines */}
      <div className="max-w-[1440px] mx-auto border-x border-[#232328] relative px-4 sm:px-8">
        
        {/* Desktop 3-Column Grid */}
        <div className="hidden lg:grid grid-cols-12 min-h-[620px] border border-[#232328]">
          
          {/* Left Column: 01 Merit Master & 03 Elevate Her */}
          <div className="col-span-4 flex flex-col border-r border-[#232328]">
            {/* Card 01 */}
            <div className="relative flex-1 p-8 sm:p-10 flex flex-col justify-between border-b border-[#232328] overflow-hidden group">
              <div className="relative z-10 flex items-start justify-between">
                <h3 className="font-editorial text-[28px] xl:text-[32px] text-white font-normal leading-tight">
                  {card1.title}
                </h3>
                <span className="text-zinc-500 font-mono text-sm tracking-widest">{card1.number}</span>
              </div>
              <div className="absolute inset-0 opacity-25 group-hover:opacity-35 transition-opacity duration-300 pointer-events-none">
                <Image
                  src={card1.image}
                  alt={card1.title}
                  fill
                  className="object-contain object-center scale-90"
                  unoptimized
                />
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-[280px] relative z-10 mt-20">
                {card1.desc}
              </p>
            </div>

            {/* Card 03 */}
            <div className="relative flex-1 p-8 sm:p-10 flex flex-col justify-between overflow-hidden group">
              <div className="relative z-10 flex items-start justify-between">
                <h3 className="font-editorial text-[28px] xl:text-[32px] text-white font-normal leading-tight">
                  {card3.title}
                </h3>
                <span className="text-zinc-500 font-mono text-sm tracking-widest">{card3.number}</span>
              </div>
              <div className="absolute inset-0 opacity-25 group-hover:opacity-35 transition-opacity duration-300 pointer-events-none">
                <Image
                  src={card3.image}
                  alt={card3.title}
                  fill
                  className="object-contain object-center scale-90"
                  unoptimized
                />
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-[280px] relative z-10 mt-20">
                {card3.desc}
              </p>
            </div>
          </div>

          {/* Center Column: Scholarships Header, Subtitle, Funnel Graphic, and CTA */}
          <div className="col-span-4 relative flex flex-col items-center justify-center p-8 text-center overflow-hidden border-r border-[#232328]">
            {/* Glowing purple particle funnel background */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
              <Image
                src="/images/persona/particles.webp"
                alt="Scholarships funnel"
                fill
                className="object-contain opacity-80 mix-blend-screen scale-110"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
            </div>

            {/* Foreground Content */}
            <div className="relative z-10 flex flex-col items-center max-w-[320px]">
              <h2 className="font-editorial text-[42px] xl:text-[48px] text-white font-normal leading-tight tracking-tight">
                Scholarships
              </h2>
              <p className="text-zinc-400 text-sm sm:text-[15px] leading-relaxed mt-4 mb-8">
                We offer 10 scholarships that partially fund the program fees, depending on your profile.
              </p>
              <button
                onClick={() => openModal('AI-First Product Management')}
                className="group relative inline-flex items-center gap-3 bg-white text-black text-xs sm:text-sm font-medium px-6 py-3 rounded-sm transition-all duration-300 hover:bg-zinc-100 shadow-lg hover:shadow-purple-500/10 cursor-pointer"
              >
                <span>Apply for scholarship</span>
                <span className="w-5 h-5 rounded-full bg-[#7c3aed] text-white flex items-center justify-center text-xs group-hover:translate-x-0.5 transition-transform">
                  &gt;
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: 02 Bridge the Gap & 04 Future Shapers */}
          <div className="col-span-4 flex flex-col">
            {/* Card 02 */}
            <div className="relative flex-1 p-8 sm:p-10 flex flex-col justify-between border-b border-[#232328] overflow-hidden group">
              <div className="relative z-10 flex items-start justify-between">
                <h3 className="font-editorial text-[28px] xl:text-[32px] text-white font-normal leading-tight">
                  {card2.title}
                </h3>
                <span className="text-zinc-500 font-mono text-sm tracking-widest">{card2.number}</span>
              </div>
              <div className="absolute inset-0 opacity-25 group-hover:opacity-35 transition-opacity duration-300 pointer-events-none">
                <Image
                  src={card2.image}
                  alt={card2.title}
                  fill
                  className="object-contain object-center scale-90"
                  unoptimized
                />
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-[280px] relative z-10 mt-20">
                {card2.desc}
              </p>
            </div>

            {/* Card 04 */}
            <div className="relative flex-1 p-8 sm:p-10 flex flex-col justify-between overflow-hidden group">
              <div className="relative z-10 flex items-start justify-between">
                <h3 className="font-editorial text-[28px] xl:text-[32px] text-white font-normal leading-tight">
                  {card4.title}
                </h3>
                <span className="text-zinc-500 font-mono text-sm tracking-widest">{card4.number}</span>
              </div>
              <div className="absolute inset-0 opacity-25 group-hover:opacity-35 transition-opacity duration-300 pointer-events-none">
                <Image
                  src={card4.image}
                  alt={card4.title}
                  fill
                  className="object-contain object-center scale-90"
                  unoptimized
                />
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-[280px] relative z-10 mt-20">
                {card4.desc}
              </p>
            </div>
          </div>

        </div>

        {/* Mobile / Tablet Responsive Stack */}
        <div className="lg:hidden flex flex-col gap-6">
          {/* Header & CTA Banner */}
          <div className="relative p-8 text-center border border-[#232328] rounded-xl overflow-hidden bg-zinc-950">
            <div className="absolute inset-0 pointer-events-none opacity-40">
              <Image
                src="/images/persona/particles.webp"
                alt="Funnel background"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div className="relative z-10 flex flex-col items-center">
              <h2 className="font-editorial text-[36px] text-white font-normal leading-tight">
                Scholarships
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mt-3 mb-6 max-w-sm">
                We offer 10 scholarships that partially fund the program fees, depending on your profile.
              </p>
              <button
                onClick={() => openModal('AI-First Product Management')}
                className="group inline-flex items-center gap-3 bg-white text-black text-xs font-medium px-5 py-2.5 rounded-sm"
              >
                <span>Apply for scholarship</span>
                <span className="w-4 h-4 rounded-full bg-[#7c3aed] text-white flex items-center justify-center text-[10px]">
                  &gt;
                </span>
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {scholarshipCards.map((card) => (
              <div
                key={card.number}
                className="relative p-6 border border-[#232328] rounded-xl bg-zinc-950/70 overflow-hidden flex flex-col justify-between min-h-[220px]"
              >
                <div className="flex items-start justify-between relative z-10">
                  <h3 className="font-editorial text-[24px] text-white font-normal">
                    {card.title}
                  </h3>
                  <span className="text-zinc-500 font-mono text-xs">{card.number}</span>
                </div>
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-contain object-center scale-90"
                    unoptimized
                  />
                </div>
                <p className="text-zinc-400 text-xs leading-relaxed relative z-10 mt-12">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
