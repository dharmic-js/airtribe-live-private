'use client';

import React from 'react';
import Image from 'next/image';
import { AirtribeButton } from '@/components/AirtribeButton';
import { MessageCircle } from 'lucide-react';

interface GenAIWhyChooseSectionProps {
  onApplyClick: () => void;
  onTalkToCounsellorClick?: () => void;
}

const whyChooseCards = [
  {
    id: 'projects',
    image: '/images/genai-why/card-bird.png',
    title: 'Built around hands-on projects',
    desc: "Every module ends with something you've built: a workflow, an agent, an app, or a campaign.",
  },
  {
    id: 'mentors',
    image: '/images/genai-why/card-knight.png',
    title: 'Learn from people who build with AI',
    desc: 'Your mentors build AI products for a living, and bring what they learn to every session.',
  },
  {
    id: 'product',
    image: '/images/genai-why/card-star.png',
    title: 'From idea to live product',
    desc: 'Go from a blank page to an AI product people use, with a dedicated sprint to find your first users.',
  },
  {
    id: 'community',
    image: '/images/genai-why/card-hands.png',
    title: 'Community-first learning',
    desc: 'Learn alongside founders, operators and marketers building with AI. Share your builds, swap feedback every week, and meet the tribe in person at city meetups.',
  },
];

export function GenAIWhyChooseSection({
  onApplyClick,
  onTalkToCounsellorClick,
}: GenAIWhyChooseSectionProps) {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#2e1065] via-[#1b0840] to-[#090214] text-white py-20 sm:py-28 overflow-hidden border-t border-[#3b1968]/50">
      
      {/* Concentric Arc / Ripple Background Overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 30%, rgba(168, 85, 247, 0.4) 0%, transparent 60%)`,
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-30" />

      {/* Layout constrained within the dual vertical guide lines */}
      <div className="max-w-[1440px] mx-auto border-x border-[#3b1968]/40 relative px-4 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-left mb-12 sm:mb-16 max-w-xl">
          <h2 className="font-editorial text-[36px] sm:text-[48px] md:text-[54px] text-white font-normal leading-tight tracking-tight">
            Why choose this program?
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 relative z-10 mb-16">
          {whyChooseCards.map((card) => (
            <div
              key={card.id}
              className="bg-[#0c0c10] border border-zinc-800/90 rounded-2xl overflow-hidden p-4 sm:p-5 flex flex-col justify-between shadow-2xl hover:border-zinc-700 transition-colors"
            >
              {/* Illustration Header */}
              <div className="relative w-full h-44 sm:h-48 rounded-xl overflow-hidden mb-5 bg-zinc-950">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Body */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-editorial text-xl sm:text-[22px] font-normal text-white leading-tight mb-2.5">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-zinc-400 font-light leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-purple-900/30">
          <span className="text-xs sm:text-sm text-zinc-300 font-light text-center sm:text-left">
            Still deciding? Let&apos;s talk it through.
          </span>

          <div className="flex items-center gap-3">
            <AirtribeButton
              text="Apply now"
              onClick={onApplyClick}
              className="!w-32 sm:!w-36 !h-10 text-xs sm:text-sm"
            />
            
            <button
              onClick={onTalkToCounsellorClick || onApplyClick}
              className="px-4 py-2.5 rounded-lg border border-zinc-700 bg-black/80 hover:bg-zinc-850 hover:border-zinc-500 text-white text-xs sm:text-sm font-medium transition-all cursor-pointer whitespace-nowrap"
            >
              Talk to our counsellor
            </button>

            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-lg bg-[#25D366] hover:bg-[#20ba59] flex items-center justify-center text-white transition-colors cursor-pointer shrink-0 shadow-md"
            >
              <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
