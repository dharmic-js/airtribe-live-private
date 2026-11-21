'use client';

import React from 'react';
import Image from 'next/image';

interface CompanyItem {
  id: string;
  name: string;
  type: 'full-body' | 'standard' | 'logitech' | 'github' | 'chronicle';
  src?: string;
  className?: string;
}

const row1Companies: CompanyItem[] = [
  { id: 'vercel', name: 'Vercel', type: 'full-body', src: '/images/trusted/vercel.svg' },
  { id: 'notion', name: 'Notion', type: 'standard', src: '/images/trusted/notion.svg', className: 'h-7 w-auto' },
  { id: 'pine-labs', name: 'Pine Labs', type: 'standard', src: '/images/trusted/pine-labs.webp', className: 'h-5 w-auto' },
  { id: 'magnific', name: 'Magnific', type: 'full-body', src: '/images/trusted/magnific.svg' },
  { id: 'lovable', name: 'Lovable', type: 'standard', src: '/images/trusted/lovable.svg', className: 'h-6 w-auto' },
  { id: 'n8n', name: 'n8n', type: 'standard', src: '/images/trusted/n8n.webp', className: 'h-6 w-auto' },
  { id: 'emergent', name: 'Emergent', type: 'full-body', src: '/images/trusted/emergent.svg' },
  { id: 'razorpay', name: 'Razorpay', type: 'full-body', src: '/images/trusted/razorpay.svg' },
  { id: 'lyzr', name: 'Lyzr', type: 'standard', src: '/images/trusted/lyzr.webp', className: 'h-6 w-auto' },
];

const row2Companies: CompanyItem[] = [
  { id: 'flow', name: 'Flow', type: 'full-body', src: '/images/trusted/flow.svg' },
  { id: 'plivo', name: 'Plivo', type: 'standard', src: '/images/trusted/plivo.webp', className: 'h-5 w-auto' },
  { id: 'logitech', name: 'Logitech', type: 'logitech' },
  { id: 'replit', name: 'Replit', type: 'full-body', src: '/images/trusted/replit.svg' },
  { id: 'yozigo', name: 'Yozigo', type: 'standard', src: '/images/trusted/yozigo.webp', className: 'h-6 w-auto' },
  { id: 'github', name: 'GitHub', type: 'github' },
  { id: 'chronicle', name: 'Chronicle', type: 'chronicle' },
  { id: 'dialnexa', name: 'DialNexa', type: 'standard', src: '/images/trusted/dialnexa.webp', className: 'h-5.5 w-auto' },
  { id: 'make', name: 'Make', type: 'standard', src: '/images/trusted/make.svg', className: 'h-4.5 w-auto' },
];

function CompanyCard({ item }: { item: CompanyItem }) {
  if (item.type === 'full-body' && item.src) {
    return (
      <div className="group relative h-[156px] w-[220px] shrink-0 border-t border-r border-l border-[#232328] bg-black px-4 pt-4 [&:not(:first-child)]:-ml-px">
        <div className="relative h-[140px] w-[188px] overflow-hidden rounded-t-[16px]">
          <Image
            src={item.src}
            alt={item.name}
            fill
            className="object-contain"
            unoptimized
          />
          {/* Border line */}
          <div className="pointer-events-none absolute inset-0 rounded-t-[16px] border-t border-r border-l border-[#232328]" />
          {/* Coloured window dots overlay on hover */}
          <div className="pointer-events-none absolute top-3 left-3 flex gap-1 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            <span className="w-2 h-2 rounded-full bg-[#ff5f57]" />
            <span className="w-2 h-2 rounded-full bg-[#febc2e]" />
            <span className="w-2 h-2 rounded-full bg-[#28c840]" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group relative h-[156px] w-[220px] shrink-0 border-t border-r border-l border-[#232328] bg-black px-4 pt-4 [&:not(:first-child)]:-ml-px">
      <div className="flex h-[140px] w-[188px] flex-col overflow-hidden rounded-t-[16px] border-t border-r border-l border-[#232328] bg-black">
        {/* Top window header bar */}
        <div className="bg-[#121215] flex h-8 shrink-0 gap-1 px-3 pt-3">
          <span className="w-2 h-2 rounded-full bg-[#333333] transition-colors duration-200 group-hover:bg-[#ff5f57]" />
          <span className="w-2 h-2 rounded-full bg-[#333333] transition-colors duration-200 group-hover:bg-[#febc2e]" />
          <span className="w-2 h-2 rounded-full bg-[#333333] transition-colors duration-200 group-hover:bg-[#28c840]" />
        </div>

        {/* Center Logo area */}
        <div className="flex flex-1 items-center justify-center p-3">
          {item.type === 'logitech' && (
            <div
              className="h-6 w-20.5 bg-white"
              style={{
                maskImage: 'url(/images/trusted/logitech-mask.png)',
                WebkitMaskImage: 'url(/images/trusted/logitech-mask.png)',
                maskSize: 'contain',
                WebkitMaskSize: 'contain',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskPosition: 'center',
                WebkitMaskPosition: 'center',
              }}
            />
          )}

          {item.type === 'github' && (
            <div className="relative h-5 w-22.5">
              <div className="absolute inset-0 right-[25%]">
                <Image
                  src="/images/trusted/github-word.svg"
                  alt="GitHub"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <div className="absolute inset-0 left-[75%]">
                <Image
                  src="/images/trusted/github-icon.svg"
                  alt=""
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          )}

          {item.type === 'chronicle' && (
            <div className="relative h-3.5 w-24">
              <div className="absolute inset-0 right-[82%]">
                <Image
                  src="/images/trusted/chronicle-icon.svg"
                  alt=""
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
              <div className="absolute inset-0 left-[20%]">
                <Image
                  src="/images/trusted/chronicle-word.svg"
                  alt="Chronicle"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          )}

          {item.type === 'standard' && item.src && (
            <Image
              src={item.src}
              alt={item.name}
              width={120}
              height={36}
              className={`object-contain ${item.className || 'h-6 w-auto'}`}
              unoptimized
            />
          )}
        </div>
      </div>
    </div>
  );
}

export function TrustedCompaniesSection() {
  // Quadruple rows for ultra-smooth infinite loops
  const row1Repeated = [...row1Companies, ...row1Companies, ...row1Companies, ...row1Companies];
  const row2Repeated = [...row2Companies, ...row2Companies, ...row2Companies, ...row2Companies];

  return (
    <section className="bg-black text-white pt-24 sm:pt-32 pb-16 sm:pb-24 relative overflow-hidden">
      {/* Section Header */}
      <div className="mx-auto flex max-w-[760px] flex-col items-center gap-4 px-4 text-center relative z-20">
        <h2 className="font-editorial text-[36px] sm:text-[48px] font-normal leading-tight tracking-tight text-white">
          Trusted by leading companies
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base font-normal max-w-lg leading-relaxed">
          We partner with companies that bring real projects, practitioners, and opportunities to the tribe.
        </p>
      </div>

      {/* Belts Container */}
      <div className="mt-14 sm:mt-16 relative overflow-hidden">
        {/* Left Edge Fog / Gradient Blur */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 z-30 w-16 sm:w-28"
          style={{
            background: 'linear-gradient(to right, #000 20%, transparent 100%)',
          }}
        />

        {/* Right Edge Fog / Gradient Blur */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 z-30 w-16 sm:w-28"
          style={{
            background: 'linear-gradient(to left, #000 20%, transparent 100%)',
          }}
        />

        <div className="flex flex-col gap-6 sm:gap-8">
          {/* ROW 1: TOP BELT (Right to Left) */}
          <div className="overflow-hidden border-b border-[#232328] group/row1">
            <div
              className="flex w-max animate-belt-rtl group-hover/row1:[animation-play-state:paused]"
              style={{ animationDuration: '65s' }}
            >
              {row1Repeated.map((item, index) => (
                <CompanyCard key={`row1-${item.id}-${index}`} item={item} />
              ))}
            </div>
          </div>

          {/* ROW 2: BOTTOM BELT (Left to Right) */}
          <div className="overflow-hidden border-b border-[#232328] group/row2">
            <div
              className="flex w-max animate-belt-ltr group-hover/row2:[animation-play-state:paused]"
              style={{ animationDuration: '65s' }}
            >
              {row2Repeated.map((item, index) => (
                <CompanyCard key={`row2-${item.id}-${index}`} item={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
