'use client';

import React from 'react';
import Image from 'next/image';
import { FoundersLetterSection } from './FoundersLetterSection';

export default function FoundersSection() {
  return (
    <>
      {/* SECTION 8: FOUNDERS' NOTE (3D UNTILT, UNFLAP, SLIDE & UNFOLD ANIMATION - BIDIRECTIONAL) */}
      <FoundersLetterSection />

      {/* SECTION 9: BEHIND AIRTRIBE (EXACT 8x4 ARCHITECTURAL GRID) */}
      <section className="bg-black w-full border-t border-[#232328]">
        <div className="max-w-[1440px] mx-auto border-x border-[#232328] pt-20 sm:pt-28 pb-0 relative">
          
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20 px-4">
            <h2 className="text-[36px] sm:text-[50px] lg:text-[60px] font-normal tracking-[-0.03em] text-white leading-tight">
              Behind Airtribe
              <span className="block font-editorial italic font-normal flow-lavender mt-1.5 text-[40px] sm:text-[54px] lg:text-[66px]">
                the founders, and the people who backed them
              </span>
            </h2>
          </div>

          {/* DESKTOP 8x4 ARCHITECTURAL GRID (Exact layout matching Airtribe source) */}
          <div className="hidden lg:block relative w-full border-t border-b border-[#232328]" style={{ aspectRatio: '1318 / 642' }}>
            
            {/* --- ROW 0 --- */}
            {/* Cell 1: Kunal Shah (Col 0, Row 0) */}
            <div
              className="absolute overflow-hidden group border-r border-b border-[#232328] bg-black"
              style={{ left: '0%', top: '0%', width: '12.5%', height: '25%' }}
            >
              <Image
                src="/kunal.497026cc.webp"
                alt="Kunal Shah"
                fill
                className="object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
              <span className="absolute top-2 left-2 z-10 font-mono text-[9px] text-zinc-400 bg-black/80 px-1.5 py-0.5 border border-white/5">
                Angel investor
              </span>
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-2.5 flex flex-col items-center gap-0.5 z-10 px-2 text-center">
                <p className="text-white text-[13px] font-medium leading-none">Kunal Shah</p>
                <div className="flex items-center justify-center gap-1 mt-0.5">
                  <span className="text-[10px] text-zinc-400 leading-none">Founder</span>
                  <div className="relative w-9 h-3">
                    <Image src="/cred.e6422a40.webp" alt="CRED" fill className="object-contain" unoptimized />
                  </div>
                </div>
              </div>
            </div>

            {/* Empty Cell (Col 1, Row 0) */}
            <div
              className="absolute border-r border-b border-[#232328]"
              style={{ left: '12.5%', top: '0%', width: '12.5%', height: '25%' }}
            />

            {/* Cell 2: Better (Seed Fund) (Cols 2-3, Row 0) */}
            <div
              className="absolute overflow-hidden border-r border-b border-[#232328] bg-black flex flex-col justify-between p-3"
              style={{ left: '25%', top: '0%', width: '25%', height: '25%' }}
            >
              <span className="font-mono text-[9px] text-zinc-400">Seed fund</span>
              <div className="flex items-center justify-center flex-1">
                <span className="text-white text-[32px] font-bold tracking-tight">Better</span>
              </div>
            </div>

            {/* Empty Cell (Col 4, Row 0) */}
            <div
              className="absolute border-r border-b border-[#232328]"
              style={{ left: '50%', top: '0%', width: '12.5%', height: '25%' }}
            />

            {/* Empty Cell (Col 5, Row 0) */}
            <div
              className="absolute border-r border-b border-[#232328]"
              style={{ left: '62.5%', top: '0%', width: '12.5%', height: '25%' }}
            />

            {/* Cell 3: Gautam S (Col 6, Row 0) */}
            <div
              className="absolute overflow-hidden group border-r border-b border-[#232328] bg-black"
              style={{ left: '75%', top: '0%', width: '12.5%', height: '25%' }}
            >
              <Image
                src="/gautam.1fe448b3.webp"
                alt="Gautam S"
                fill
                className="object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
              <span className="absolute top-2 left-2 z-10 font-mono text-[9px] text-zinc-400 bg-black/80 px-1.5 py-0.5 border border-white/5">
                Angel investor
              </span>
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-2.5 flex flex-col items-center gap-0.5 z-10 px-2 text-center">
                <p className="text-white text-[13px] font-medium leading-none">Gautam S</p>
                <span className="text-[10px] text-zinc-400 leading-none mt-0.5">Co-founder @Inuka Capital</span>
              </div>
            </div>

            {/* Empty Cell (Col 7, Row 0) */}
            <div
              className="absolute border-b border-[#232328]"
              style={{ left: '87.5%', top: '0%', width: '12.5%', height: '25%' }}
            />


            {/* --- ROW 1 --- */}
            {/* Empty Cell (Col 0, Row 1) */}
            <div
              className="absolute border-r border-b border-[#232328]"
              style={{ left: '0%', top: '25%', width: '12.5%', height: '25%' }}
            />

            {/* Cell 4: Jay Dutta (Col 1, Row 1) */}
            <div
              className="absolute overflow-hidden group border-r border-b border-[#232328] bg-black"
              style={{ left: '12.5%', top: '25%', width: '12.5%', height: '25%' }}
            >
              <Image
                src="/jai.a2ab367c.webp"
                alt="Jay Dutta"
                fill
                className="object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
              <span className="absolute top-2 left-2 z-10 font-mono text-[9px] text-zinc-400 bg-black/80 px-1.5 py-0.5 border border-white/5">
                Angel investor
              </span>
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-2.5 flex flex-col items-center gap-0.5 z-10 px-2 text-center">
                <p className="text-white text-[13px] font-medium leading-none">Jay Dutta</p>
                <div className="flex items-center justify-center gap-1 mt-0.5">
                  <span className="text-[10px] text-zinc-400 leading-none">Founder</span>
                  <div className="relative w-10 h-4">
                    <Image src="/designup.4d67a92a.webp" alt="DesignUp" fill className="object-contain" unoptimized />
                  </div>
                </div>
              </div>
            </div>

            {/* Empty Cell (Col 2, Row 1) */}
            <div
              className="absolute border-r border-b border-[#232328]"
              style={{ left: '25%', top: '25%', width: '12.5%', height: '25%' }}
            />

            {/* Cell 5: THE FOUNDERS (Dhaval Trivedi & Navneet Sharma) (Cols 3-6, Rows 1-2) */}
            <div
              className="absolute overflow-hidden border-r border-b border-[#232328] bg-black group"
              style={{ left: '37.5%', top: '25%', width: '50%', height: '50%' }}
            >
              <Image
                src="/founders.cb6498f1.webp"
                alt="Airtribe Founders - Dhaval Trivedi & Navneet Sharma"
                fill
                className="object-cover object-bottom filter grayscale contrast-110 transition-transform duration-700 group-hover:scale-102"
                unoptimized
              />
              
              {/* Dhaval Trivedi Label Overlay (Left) */}
              <div className="absolute top-6 left-6 z-10 flex flex-col items-start">
                <p className="text-white text-[15px] font-semibold tracking-tight">Dhaval Trivedi</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-zinc-400 text-[11px]">Co-founder</span>
                  <div className="relative w-3.5 h-3.5 opacity-90">
                    <Image src="/airtribe-icon.svg" alt="" fill className="object-contain" />
                  </div>
                </div>
              </div>

              {/* Navneet Sharma Label Overlay (Right) */}
              <div className="absolute top-16 right-6 z-10 flex flex-col items-start">
                <p className="text-white text-[15px] font-semibold tracking-tight">Navneet Sharma</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-zinc-400 text-[11px]">Co-founder</span>
                  <div className="relative w-3.5 h-3.5 opacity-90">
                    <Image src="/airtribe-icon.svg" alt="" fill className="object-contain" />
                  </div>
                </div>
              </div>
            </div>

            {/* Empty Cell (Col 7, Row 1) */}
            <div
              className="absolute border-b border-[#232328]"
              style={{ left: '87.5%', top: '25%', width: '12.5%', height: '25%' }}
            />


            {/* --- ROW 2 --- */}
            {/* Cell 6: Anshumani Rudra (Col 0, Row 2) */}
            <div
              className="absolute overflow-hidden group border-r border-b border-[#232328] bg-black"
              style={{ left: '0%', top: '50%', width: '12.5%', height: '25%' }}
            >
              <Image
                src="/anshumani.dc52ddf1.webp"
                alt="Anshumani Rudra"
                fill
                className="object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
              <span className="absolute top-2 left-2 z-10 font-mono text-[9px] text-zinc-400 bg-black/80 px-1.5 py-0.5 border border-white/5">
                Angel investor
              </span>
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-2.5 flex flex-col items-center gap-0.5 z-10 px-2 text-center">
                <p className="text-white text-[13px] font-medium leading-none">Anshumani Rudra</p>
                <div className="flex items-center justify-center gap-1.5 mt-0.5">
                  <span className="text-[10px] text-zinc-400 leading-none">App PM lead</span>
                  <div className="relative w-12 h-3.5">
                    <Image src="/google.svg" alt="Google" fill className="object-contain" />
                  </div>
                </div>
              </div>
            </div>

            {/* Empty Cell (Col 1, Row 2) */}
            <div
              className="absolute border-r border-b border-[#232328]"
              style={{ left: '12.5%', top: '50%', width: '12.5%', height: '25%' }}
            />

            {/* Cell 7: Anand C. (Col 2, Row 2) */}
            <div
              className="absolute overflow-hidden group border-r border-b border-[#232328] bg-black"
              style={{ left: '25%', top: '50%', width: '12.5%', height: '25%' }}
            >
              <Image
                src="/anand.6bf7b34d.webp"
                alt="Anand C."
                fill
                className="object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
              <span className="absolute top-2 left-2 z-10 font-mono text-[9px] text-zinc-400 bg-black/80 px-1.5 py-0.5 border border-white/5">
                Angel investor
              </span>
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-2.5 flex flex-col items-center gap-0.5 z-10 px-2 text-center">
                <p className="text-white text-[13px] font-medium leading-none">Anand C.</p>
                <div className="flex items-center justify-center gap-1 mt-0.5">
                  <span className="text-[10px] text-zinc-400 leading-none">Partner</span>
                  <div className="relative w-11 h-3.5">
                    <Image src="/gencat.svg" alt="Accel" fill className="object-contain" />
                  </div>
                </div>
              </div>
            </div>

            {/* Cell 8: Aditya Khosla (Col 7, Row 2) */}
            <div
              className="absolute overflow-hidden group border-b border-[#232328] bg-black"
              style={{ left: '87.5%', top: '50%', width: '12.5%', height: '25%' }}
            >
              <Image
                src="/aditya.fcbaded4.webp"
                alt="Aditya Khosla"
                fill
                className="object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
              <span className="absolute top-2 left-2 z-10 font-mono text-[9px] text-zinc-400 bg-black/80 px-1.5 py-0.5 border border-white/5">
                Angel investor
              </span>
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-2.5 flex flex-col items-center gap-0.5 z-10 px-2 text-center">
                <p className="text-white text-[13px] font-medium leading-none">Aditya Khosla</p>
                <div className="flex items-center justify-center gap-1 mt-0.5">
                  <span className="text-[10px] text-zinc-400 leading-none">CTO</span>
                  <div className="relative w-12 h-3.5">
                    <Image src="/iterative.png" alt="Iterative" fill className="object-contain" />
                  </div>
                </div>
              </div>
            </div>


            {/* --- ROW 3 --- */}
            {/* Cell 9: 640 OXFORD (Cols 0-1, Row 3) */}
            <div
              className="absolute overflow-hidden border-r border-[#232328] bg-black flex flex-col justify-between p-3.5"
              style={{ left: '0%', top: '75%', width: '25%', height: '25%' }}
            >
              <span className="font-mono text-[9px] text-zinc-400">Seed fund</span>
              <div className="flex items-center justify-center flex-1">
                <div className="relative w-36 h-6">
                  <Image src="/oxford.svg" alt="640 OXFORD" fill className="object-contain" />
                </div>
              </div>
            </div>

            {/* Empty Cell (Col 2, Row 3) */}
            <div
              className="absolute border-r border-[#232328]"
              style={{ left: '25%', top: '75%', width: '12.5%', height: '25%' }}
            />

            {/* Empty Cell (Col 3, Row 3) */}
            <div
              className="absolute border-r border-[#232328]"
              style={{ left: '37.5%', top: '75%', width: '12.5%', height: '25%' }}
            />

            {/* Empty Cell (Col 4, Row 3) */}
            <div
              className="absolute border-r border-[#232328]"
              style={{ left: '50%', top: '75%', width: '12.5%', height: '25%' }}
            />

            {/* Empty Cell (Col 5, Row 3) */}
            <div
              className="absolute border-r border-[#232328]"
              style={{ left: '62.5%', top: '75%', width: '12.5%', height: '25%' }}
            />

            {/* Cell 10: Abhinav Chhikara (Col 6, Row 3) */}
            <div
              className="absolute overflow-hidden group border-r border-[#232328] bg-black"
              style={{ left: '75%', top: '75%', width: '12.5%', height: '25%' }}
            >
              <Image
                src="/abhinav.d83b91e8.webp"
                alt="Abhinav Chhikara"
                fill
                className="object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-500"
                unoptimized
              />
              <span className="absolute top-2 left-2 z-10 font-mono text-[9px] text-zinc-400 bg-black/80 px-1.5 py-0.5 border border-white/5">
                Angel investor
              </span>
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none" />
              <div className="absolute inset-x-0 bottom-2.5 flex flex-col items-center gap-0.5 z-10 px-2 text-center">
                <p className="text-white text-[13px] font-medium leading-none">Abhinav Chhikara</p>
                <div className="flex items-center justify-center gap-1 mt-0.5">
                  <span className="text-[10px] text-zinc-400 leading-none">Founder</span>
                  <div className="relative w-11 h-3.5">
                    <Image src="/memetic(1).094ff610.svg" alt="Memetic" fill className="object-contain" />
                  </div>
                </div>
              </div>
            </div>

            {/* Empty Cell (Col 7, Row 3) */}
            <div
              className="absolute"
              style={{ left: '87.5%', top: '75%', width: '12.5%', height: '25%' }}
            />

          </div>

          {/* MOBILE / TABLET GRID (Responsive Fallback) */}
          <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-0 border-t border-b border-[#232328]">
            {/* Founders Card */}
            <div className="col-span-2 relative aspect-[16/9] border-b border-[#232328] bg-black p-4 flex flex-col justify-between">
              <Image
                src="/founders.cb6498f1.webp"
                alt="Dhaval & Navneet"
                fill
                className="object-cover object-bottom filter grayscale contrast-110"
                unoptimized
              />
              <div className="relative z-10 flex justify-between">
                <div>
                  <p className="text-white text-sm font-semibold">Dhaval Trivedi</p>
                  <p className="text-zinc-400 text-xs">Co-founder Airtribe</p>
                </div>
                <div className="text-right">
                  <p className="text-white text-sm font-semibold">Navneet Sharma</p>
                  <p className="text-zinc-400 text-xs">Co-founder Airtribe</p>
                </div>
              </div>
            </div>

            {/* Better */}
            <div className="border-r border-b border-[#232328] bg-black p-4 flex flex-col justify-between h-40">
              <span className="font-mono text-[10px] text-zinc-400">Seed fund</span>
              <span className="text-white text-2xl font-bold">Better</span>
            </div>

            {/* 640 Oxford */}
            <div className="border-r border-b border-[#232328] bg-black p-4 flex flex-col justify-between h-40">
              <span className="font-mono text-[10px] text-zinc-400">Seed fund</span>
              <div className="relative w-28 h-5">
                <Image src="/oxford.svg" alt="640 OXFORD" fill className="object-contain" />
              </div>
            </div>

            {/* Kunal Shah */}
            <div className="border-b border-[#232328] bg-black relative h-40 overflow-hidden">
              <Image src="/kunal.497026cc.webp" alt="Kunal" fill className="object-cover grayscale" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-2 left-2 z-10">
                <p className="text-white text-xs font-medium">Kunal Shah</p>
                <p className="text-zinc-400 text-[10px]">Founder CRED</p>
              </div>
            </div>

            {/* Gautam S */}
            <div className="border-r border-b border-[#232328] bg-black relative h-40 overflow-hidden">
              <Image src="/gautam.1fe448b3.webp" alt="Gautam" fill className="object-cover grayscale" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-2 left-2 z-10">
                <p className="text-white text-xs font-medium">Gautam S</p>
                <p className="text-zinc-400 text-[10px]">Inuka Capital</p>
              </div>
            </div>

            {/* Jay Dutta */}
            <div className="border-r border-b border-[#232328] bg-black relative h-40 overflow-hidden">
              <Image src="/jai.a2ab367c.webp" alt="Jay" fill className="object-cover grayscale" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-2 left-2 z-10">
                <p className="text-white text-xs font-medium">Jay Dutta</p>
                <p className="text-zinc-400 text-[10px]">DesignUp</p>
              </div>
            </div>

            {/* Anshumani Rudra */}
            <div className="border-b border-[#232328] bg-black relative h-40 overflow-hidden">
              <Image src="/anshumani.dc52ddf1.webp" alt="Anshumani" fill className="object-cover grayscale" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute bottom-2 left-2 z-10">
                <p className="text-white text-xs font-medium">Anshumani Rudra</p>
                <p className="text-zinc-400 text-[10px]">Google</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
