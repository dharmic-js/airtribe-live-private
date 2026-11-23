'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

interface ExpertInstructor {
  id: string;
  name: string;
  role: string;
  company: string;
  companyLogo?: string;
  companyRender?: React.ReactNode;
  bio1: string;
  bio2: string;
  experience: string;
  pastLogos: { name: string; src?: string; text?: string; color?: string }[];
  image: string;
}

const expertsData: ExpertInstructor[] = [
  {
    id: 'sanchit-tanwar',
    name: 'Sanchit Tanwar',
    role: 'Senior Software Engineer, AI/ML @',
    company: 'Atlassian',
    companyLogo: '/logos/atlassian.webp',
    companyRender: (
      <span className="inline-flex items-center gap-1.5 font-bold text-[#0052CC] text-sm tracking-wide">
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M11.53 2c-.4 0-.77.22-.96.58L6.15 11.23a1.1 1.1 0 0 0 .96 1.62h6.92c.6 0 1.1-.5 1.1-1.1V2h-3.6zM12.47 22c.4 0 .77-.22.96-.58l4.42-8.65a1.1 1.1 0 0 0-.96-1.62h-6.92c-.6 0-1.1.5-1.1 1.1V22h3.6z" />
        </svg>
        <span>ATLASSIAN</span>
      </span>
    ),
    bio1: 'I build AI developer tools at Atlassian, from RAG pipelines to the eval frameworks that decide whether a feature ships.',
    bio2: "On our code assistant I took retrieval from 5 seconds to under 1 and lifted code acceptance by 150%, and I'll show you how AI systems like that get measured before they ship.",
    experience: '7+ years of experience',
    pastLogos: [
      { name: 'amazon', text: 'amazon' },
      { name: 'AMERICAN EXPRESS', text: 'AMERICAN EXPRESS', color: '#006FCF' },
    ],
    image: '/portraits/sanchit.webp',
  },
  {
    id: 'dhaval-trivedi',
    name: 'Dhaval Trivedi',
    role: 'Co-founder @',
    company: 'Airtribe',
    companyRender: (
      <span className="inline-flex items-center gap-1.5 font-bold text-white text-sm tracking-wide">
        <svg className="w-4 h-4 text-purple-400 fill-current" viewBox="0 0 24 24">
          <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13H5.5L12 6.5z" />
        </svg>
        <span>Airtribe</span>
      </span>
    ),
    bio1: 'I led engineering at Unacademy and RAG systems at Rentomojo before co-founding Airtribe, after starting out as an engineer at HackerRank.',
    bio2: "I've scaled infrastructure 20x while the business grew under it and run systems holding 50K+ concurrent users, so I teach the decisions you only face when the traffic is real.",
    experience: '12+ years of experience',
    pastLogos: [
      { name: 'unacademy', text: 'unacademy', color: '#08BD80' },
      { name: 'rentomojo', text: 'rentomojo', color: '#DC3545' },
      { name: 'HackerRank', text: 'HackerRank', color: '#2EC866' },
    ],
    image: '/portraits/dhaval.webp',
  },
  {
    id: 'gurmandeep-bedi',
    name: 'Gurmandeep Singh Bedi',
    role: 'Senior Software Engineer @',
    company: 'Microsoft',
    companyRender: (
      <span className="inline-flex items-center gap-1.5 font-medium text-white text-sm">
        <span className="grid grid-cols-2 gap-0.5 w-3.5 h-3.5">
          <span className="bg-[#F25022] w-1.5 h-1.5" />
          <span className="bg-[#7FBA00] w-1.5 h-1.5" />
          <span className="bg-[#00A4EF] w-1.5 h-1.5" />
          <span className="bg-[#FFB900] w-1.5 h-1.5" />
        </span>
        <span>Microsoft</span>
      </span>
    ),
    bio1: "I've spent 8+ years building systems at Microsoft, Oracle and Qualcomm, from chipset firmware to enterprise software.",
    bio2: 'I like making slow things fast. At Qualcomm I rebuilt how clocks were tested so the team validated builds 3x quicker, and finding that one bottleneck is the instinct I try to hand over.',
    experience: '8+ years of experience',
    pastLogos: [
      { name: 'ORACLE', text: 'ORACLE', color: '#F80000' },
      { name: 'Qualcomm', text: 'Qualcomm', color: '#3253DC' },
    ],
    image: '/portraits/gurmandeep.webp',
  },
];

interface BELExpertsProps {
  onOpenCurriculumModal: () => void;
}

export function BELExpertsCarouselSection({ onOpenCurriculumModal }: BELExpertsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance timer: moves every 4500ms, pauses on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % expertsData.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prevExpert = () => {
    setCurrentIndex((prev) => (prev - 1 + expertsData.length) % expertsData.length);
  };

  const nextExpert = () => {
    setCurrentIndex((prev) => (prev + 1) % expertsData.length);
  };

  const activeExpert = expertsData[currentIndex];

  return (
    <section className="w-full bg-black text-white relative">

      {/* 1. PURPLE BANNER: "Want to dive deeper into the details?" */}
      <div className="w-full bg-[#6366f1] text-white py-4 px-4 sm:px-8 border-y border-indigo-400/30">
        <div className="max-w-[1440px] mx-auto border-x border-indigo-400/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <h3 className="text-xl sm:text-2xl font-editorial font-normal tracking-tight text-white text-center sm:text-left">
            Want to dive deeper into the details?
          </h3>
          <button
            onClick={onOpenCurriculumModal}
            className="px-6 py-2.5 rounded-lg bg-white text-zinc-950 font-medium text-xs sm:text-sm hover:bg-zinc-100 transition-all flex items-center gap-1.5 shrink-0 shadow-md cursor-pointer"
          >
            <span>Get the full curriculum</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 2. MAIN EXPERTS CAROUSEL */}
      <div className="w-full py-20 sm:py-28 overflow-hidden">
        <div className="max-w-[1440px] mx-auto border-x border-[#232328] relative overflow-hidden px-4 sm:px-8 lg:px-12">

          {/* Section Heading */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-[38px] sm:text-[54px] font-editorial italic font-normal text-white">
              Learn from experts who build with AI
            </h2>
          </div>

          {/* Carousel Viewport Container */}
          <div
            className="relative max-w-4xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >

            {/* Left Chevron Button */}
            <button
              onClick={prevExpert}
              aria-label="Previous Expert"
              className="absolute -left-4 sm:-left-7 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-lg bg-black/80 hover:bg-zinc-800 border border-zinc-700/80 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md shadow-xl"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Right Chevron Button */}
            <button
              onClick={nextExpert}
              aria-label="Next Expert"
              className="absolute -right-4 sm:-right-7 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-lg bg-black/80 hover:bg-zinc-800 border border-zinc-700/80 text-white flex items-center justify-center transition-all cursor-pointer backdrop-blur-md shadow-xl"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Active Expert Card (Exact layout from screenshots) */}
            <div className="relative rounded-2xl border border-[#232328] bg-[#09090d] overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-12 min-h-[460px]">

              {/* Left Column: Portrait with Grayscale & Gradient Mask */}
              <div className="md:col-span-5 relative min-h-[340px] md:min-h-full bg-black flex items-end justify-center overflow-hidden">
                <Image
                  src={activeExpert.image}
                  alt={activeExpert.name}
                  fill
                  className="object-cover object-top grayscale"
                  priority
                />
                {/* Bottom gradient fade so portrait seamlessly merges into black */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090d] via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#09090d]/80 hidden md:block pointer-events-none" />
              </div>

              {/* Right Column: Bio, Credentials & Experience */}
              <div className="md:col-span-7 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  {/* Name */}
                  <h3 className="text-3xl sm:text-4xl font-editorial font-normal text-white mb-2">
                    {activeExpert.name}
                  </h3>

                  {/* Role & Company */}
                  <div className="flex items-center gap-2 mb-6 flex-wrap text-sm text-zinc-300">
                    <span>{activeExpert.role}</span>
                    {activeExpert.companyRender}
                  </div>

                  {/* Bios */}
                  <div className="space-y-4 text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                    <p>{activeExpert.bio1}</p>
                    <p>{activeExpert.bio2}</p>
                  </div>
                </div>

                {/* Bottom Credentials & Logos */}
                <div className="pt-8 border-t border-white/5 mt-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 block mb-3">
                    {activeExpert.experience}
                  </span>
                  <div className="flex items-center gap-6 flex-wrap">
                    {activeExpert.pastLogos.map((logo, idx) => (
                      <span
                        key={idx}
                        style={{ color: logo.color || '#e4e4e7' }}
                        className="font-bold text-xs tracking-wider opacity-80"
                      >
                        {logo.text || logo.name}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>

            {/* Pagination Dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {expertsData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${idx === currentIndex ? 'w-8 bg-purple-500' : 'bg-zinc-700 hover:bg-zinc-500'
                    }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
