'use client';

import React from 'react';
import Image from 'next/image';

const mentorsRow1 = [
  { name: 'Nagappan', role: 'AVP of product', company: 'Paytm', photo: '/nagappan.627cd433.webp', companyLogo: '/logos/paytm.83ecf65f.svg' },
  { name: 'Kumar', role: 'Product manager', company: 'Meta', photo: '/kumar.08236fe7.webp', companyLogo: '/logos/meta.da990ff0.svg' },
  { name: 'Ben', role: 'Staff designer', company: 'Figma', photo: '/ben.6fb16084.webp', companyLogo: '/logos/adobe.bed3d518.svg' },
  { name: 'Prasun', role: 'Sr. director of product', company: 'Razorpay', photo: '/prasun.8fae563c.webp', companyLogo: '/logos/cred.a4cd9d0e.svg' },
  { name: 'Pawan', role: 'Staff software engineer', company: 'Uber', photo: '/pawan.1d740cc6.webp', companyLogo: '/logos/uber.48b48a45.svg' },
];

const mentorsRow2 = [
  { name: 'Abhimanyu', role: 'SDE-III', company: 'Microsoft', photo: '/abhimanyu.4793c37d.webp', companyLogo: '/logos/microsoft.e3fe3bf3.svg' },
  { name: 'Abhishek', role: 'Principal product manager', company: 'Shopify', photo: '/abhishek.763b1a31.webp', companyLogo: '/logos/shopify.d0cf7ff1.svg' },
  { name: 'Rishabh', role: 'Co-founder', company: 'Groww', photo: '/rishabh.26262f61.webp', companyLogo: '/logos/groww-a.1adebd1b.svg' },
  { name: 'Siddharth', role: 'Systems Architect', company: 'Apple', photo: '/siddharth.8902172b.webp', companyLogo: '/logos/apple.61f872c0.svg' },
  { name: 'Anand', role: 'Director of Engineering', company: 'Atlassian', photo: '/anand.6bf7b34d.webp', companyLogo: '/logos/linkedin-v2.789cf12f.svg' },
];

export const MentorsSection: React.FC = () => {
  return (
    <section className="w-full bg-black border-b border-[#232328] py-20 sm:py-28 overflow-hidden">
      <div className="max-w-[1440px] mx-auto border-x border-[#232328]">
        
        {/* Section Header */}
        <div className="text-center px-4 sm:px-8 mb-16 sm:mb-20">
          <h2 className="text-[40px] sm:text-[56px] lg:text-[64px] font-normal leading-[1.0] tracking-[-0.04em] text-white">
            People you’d normally <br />
            <span className="flow-lavender font-editorial italic">never get to ask</span>
          </h2>
        </div>

        {/* Marquee Row 1 */}
        <div className="relative w-full overflow-hidden mb-6 [mask-image:linear-gradient(to_right,transparent,black_80px,black_calc(100%-80px),transparent)]">
          <div className="mentors-marquee-track flex items-center space-x-6">
            {[...mentorsRow1, ...mentorsRow1, ...mentorsRow1].map((m, idx) => (
              <div
                key={idx}
                className="w-72 sm:w-80 h-36 bg-[#121214] border border-[#232328] p-4 flex items-center gap-4 shrink-0 hover:border-zinc-500 transition-colors"
              >
                <div className="relative w-20 h-24 rounded overflow-hidden shrink-0 bg-zinc-800">
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-base font-medium text-white truncate">{m.name}</h4>
                    {m.companyLogo && (
                      <img src={m.companyLogo} alt={m.company} className="h-4 max-w-[40px] object-contain opacity-70" />
                    )}
                  </div>
                  <p className="text-xs text-zinc-400 truncate mb-1">{m.role}</p>
                  <span className="text-[11px] text-zinc-500 font-mono">@{m.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee Row 2 (Reverse) */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_80px,black_calc(100%-80px),transparent)]">
          <div className="mentors-marquee-track-reverse flex items-center space-x-6">
            {[...mentorsRow2, ...mentorsRow2, ...mentorsRow2].map((m, idx) => (
              <div
                key={idx}
                className="w-72 sm:w-80 h-36 bg-[#121214] border border-[#232328] p-4 flex items-center gap-4 shrink-0 hover:border-zinc-500 transition-colors"
              >
                <div className="relative w-20 h-24 rounded overflow-hidden shrink-0 bg-zinc-800">
                  <Image
                    src={m.photo}
                    alt={m.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-base font-medium text-white truncate">{m.name}</h4>
                    {m.companyLogo && (
                      <img src={m.companyLogo} alt={m.company} className="h-4 max-w-[40px] object-contain opacity-70" />
                    )}
                  </div>
                  <p className="text-xs text-zinc-400 truncate mb-1">{m.role}</p>
                  <span className="text-[11px] text-zinc-500 font-mono">@{m.company}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
