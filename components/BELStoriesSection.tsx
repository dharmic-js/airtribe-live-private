'use client';

import React from 'react';
import Image from 'next/image';

interface BELStoryCard {
  id: string;
  type: 'quote' | 'hike';
  name: string;
  role: string;
  avatar: string;
  quote?: string;
  fromRole?: string;
  toRole?: string;
  hike?: string;
  fromCompany?: string;
  toCompany?: string;
}

const belStoryCards: BELStoryCard[] = [
  {
    id: 'yash',
    type: 'quote',
    name: 'Yash Tomar',
    role: 'SDE 2 @ Gritworks',
    avatar: '/yash-tomar.0ed74727.webp',
    quote: 'The Node.js, Database Modelling and HLD modules are exceptional. Join for the skills; the career growth will follow.',
  },
  {
    id: 'mohit',
    type: 'hike',
    name: 'Mohit',
    role: 'Sr Software Developer @ LeVich',
    avatar: '/portraits/hero-avatar-1.jpg',
    fromRole: 'Sr Software Engineer at Xebia',
    toRole: 'Sr Software Developer',
    hike: '155% hike',
    fromCompany: 'Xebia',
    toCompany: 'LeVich',
  },
  {
    id: 'ishan',
    type: 'quote',
    name: 'Ishan Srivastava',
    role: 'Software Engineer 2 @ Uber',
    avatar: '/ishan-srivastava.57b8e12b.webp',
    quote: 'The program played a key role in helping me crack both the DSA and system design rounds at top product firms.',
  },
  {
    id: 'tarun',
    type: 'hike',
    name: 'Unnam Tarun',
    role: 'Backend Engineer @ Razorpay',
    avatar: '/unnam-tarun.cba6044d.webp',
    fromRole: 'Associate Software Engineer',
    toRole: 'Backend Engineer',
    hike: '120% hike',
    fromCompany: 'ServiceNow',
    toCompany: 'Razorpay',
  },
  {
    id: 'chinmay',
    type: 'quote',
    name: 'Chinmay Pathak',
    role: 'Senior Software Engineer @ Atlassian',
    avatar: '/chinmay-pathak.5dbff685.webp',
    quote: 'Building distributed services with Kafka and Redis gave me the exact architecture confidence I needed for Staff-level interviews.',
  },
];

export function BELStoriesSection() {
  return (
    <section className="w-full bg-black py-20 sm:py-28 border-b border-[#232328] overflow-hidden select-none">
      <div className="max-w-[1440px] mx-auto border-x border-[#232328] px-4 sm:px-8 lg:px-12 mb-12 sm:mb-16 text-center">
        <h2 className="text-[38px] sm:text-[54px] font-editorial italic font-normal text-white">
          Real stories from the tribe
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base font-light mt-3">
          Career switches, promotions, and a new way of working
        </p>
      </div>

      {/* Infinite Scrolling Ribbon */}
      <div className="w-full overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_80px,black_calc(100%-80px),transparent)]">
        <div className="flex items-center gap-6 animate-logo-strip hover:[animation-play-state:paused] py-4">
          {[...belStoryCards, ...belStoryCards].map((card, idx) => (
            <div
              key={`${card.id}-${idx}`}
              className="w-[320px] sm:w-[360px] h-[340px] shrink-0 rounded-2xl p-6 sm:p-7 bg-[#0c0d14] border border-[#232328] hover:border-purple-500/50 transition-colors flex flex-col justify-between"
            >
              {card.type === 'quote' ? (
                <>
                  <p className="text-zinc-200 text-sm sm:text-base font-light leading-relaxed">
                    &ldquo;{card.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <img
                      src={card.avatar}
                      alt={card.name}
                      className="w-10 h-10 rounded-full object-cover border border-white/10"
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-white">{card.name}</h4>
                      <p className="text-xs text-zinc-400">{card.role}</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="space-y-4">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold inline-block">
                      {card.hike}
                    </span>
                    <div className="space-y-2 text-xs">
                      <div className="text-zinc-400">
                        <span className="text-zinc-500">From: </span>
                        {card.fromRole} ({card.fromCompany})
                      </div>
                      <div className="text-white font-medium">
                        <span className="text-emerald-400">To: </span>
                        {card.toRole} @ {card.toCompany}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <img
                      src={card.avatar}
                      alt={card.name}
                      className="w-10 h-10 rounded-full object-cover border border-white/10"
                    />
                    <div>
                      <h4 className="text-sm font-semibold text-white">{card.name}</h4>
                      <p className="text-xs text-zinc-400">{card.role}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
