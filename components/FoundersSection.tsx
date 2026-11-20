'use client';

import React from 'react';
import Image from 'next/image';
import { FoundersLetterSection } from './FoundersLetterSection';

const investors = [
  {
    name: 'Kunal Shah',
    role: 'Founder',
    company: 'CRED',
    badge: 'Angel investor',
    photo: '/images/kunal.497026cc.webp',
    logo: '/images/cred.e6422a40.webp',
  },
  {
    name: 'Gautam S',
    role: 'Co-founder',
    company: 'Inuka Capital',
    badge: 'Angel investor',
    photo: '/images/gautam.1fe448b3.webp',
  },
  {
    name: 'Jay Dutta',
    role: 'Founder',
    company: 'DesignUp',
    badge: 'Angel investor',
    photo: '/images/jai.a2ab367c.webp',
    logo: '/images/designup.4d67a92a.webp',
  },
  {
    name: 'Anshumani Rudra',
    role: 'App PM lead',
    company: 'Google',
    badge: 'Angel investor',
    photo: '/images/anshumani.dc52ddf1.webp',
    logo: '/images/google.svg',
  },
  {
    name: 'Anand C.',
    role: 'Partner',
    company: 'GenCat',
    badge: 'Angel investor',
    photo: '/images/anand.6bf7b34d.webp',
    logo: '/images/gencat.svg',
  },
  {
    name: 'Aditya Khosla',
    role: 'CTO',
    company: 'Iterative',
    badge: 'Angel investor',
    photo: '/images/aditya.fcbaded4.webp',
    logo: '/images/iterative.png',
  },
  {
    name: 'Abhinav Chhikara',
    role: 'Founder',
    company: 'Memetic',
    badge: 'Angel investor',
    photo: '/images/abhinav.d83b91e8.webp',
    logo: '/images/memetic(1).094ff610.svg',
  },
  {
    name: 'Better Capital',
    role: 'Seed fund',
    company: 'Better',
    badge: 'Seed fund',
    logo: '/images/oxford.svg',
  },
];

export default function FoundersSection() {
  return (
    <>
      {/* SECTION 8: FOUNDERS' NOTE (3D UNTILT, UNFLAP, SLIDE & UNFOLD ANIMATION - BIDIRECTIONAL) */}
      <FoundersLetterSection />

      {/* SECTION 9: BEHIND AIRTRIBE (FOUNDERS & INVESTORS) */}
      <section className="bg-black w-full border-t border-[#232328]">
        <div className="max-w-[1440px] mx-auto border-x border-[#232328] py-24 sm:py-28 px-4 sm:px-8 relative">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-[36px] md:text-[52px] font-bold tracking-tight text-white leading-tight">
              Behind Airtribe
              <span className="block font-serif italic font-normal flow-lavender mt-1">
                the founders, and the people who backed them
              </span>
            </h2>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* Founders Card (Spans 2 cols on lg) */}
            <div className="lg:col-span-2 relative min-h-[380px] rounded-2xl overflow-hidden border border-[#232328] bg-[#0c0c0e] group">
              <Image
                src="/images/founders.cb6498f1.webp"
                alt="Airtribe Founders - Dhaval Trivedi & Navneet Sharma"
                fill
                className="object-cover object-center filter grayscale contrast-110 group-hover:scale-105 transition-transform duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              {/* Tag */}
              <div className="absolute top-4 left-4 z-10">
                <span className="font-mono text-[11px] text-zinc-300 bg-black/70 backdrop-blur-sm border border-[#232328] px-2.5 py-1 rounded">
                  Co-founders
                </span>
              </div>

              {/* Founders Info */}
              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between">
                <div>
                  <h3 className="text-white text-2xl font-bold">Dhaval Trivedi &amp; Navneet Sharma</h3>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-zinc-400 text-sm">Co-founders</span>
                    <span className="text-zinc-600">•</span>
                    <div className="flex items-center gap-1.5 opacity-90">
                      <Image
                        src="/airtribe-icon.svg"
                        alt="Airtribe"
                        width={14}
                        height={14}
                      />
                      <Image
                        src="/airtribe-wordmark.svg"
                        alt="Airtribe"
                        width={60}
                        height={12}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Investor Cards */}
            {investors.map((inv, idx) => (
              <div
                key={idx}
                className="relative min-h-[260px] rounded-2xl overflow-hidden border border-[#232328] bg-[#0c0c0e] group flex flex-col justify-end p-5 hover:border-zinc-700 transition-all duration-300"
              >
                {/* Photo if available */}
                {inv.photo ? (
                  <>
                    <Image
                      src={inv.photo}
                      alt={inv.name}
                      fill
                      className="object-cover object-top filter grayscale contrast-115 group-hover:scale-105 transition-transform duration-500"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center p-8 bg-[#101014]">
                    {inv.logo && (
                      <div className="relative w-28 h-12 opacity-80 group-hover:opacity-100 transition-opacity">
                        <Image
                          src={inv.logo}
                          alt={inv.company}
                          fill
                          className="object-contain filter grayscale"
                          unoptimized
                        />
                      </div>
                    )}
                  </div>
                )}

                {/* Top Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="font-mono text-[10px] text-zinc-400 bg-black/80 backdrop-blur-sm border border-[#232328] px-2 py-0.5 rounded">
                    {inv.badge}
                  </span>
                </div>

                {/* Info */}
                <div className="relative z-10">
                  <h3 className="text-white text-base font-bold leading-tight">{inv.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-zinc-400 text-xs">{inv.role}</span>
                    {inv.logo && (
                      <div className="relative h-4 w-14 shrink-0">
                        <Image
                          src={inv.logo}
                          alt={inv.company}
                          fill
                          className="object-contain filter grayscale opacity-80"
                          unoptimized
                        />
                      </div>
                    )}
                    {!inv.logo && inv.company && (
                      <span className="text-zinc-500 text-xs">@{inv.company}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
