'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GenAIMentor {
  id: string;
  name: string;
  role: string;
  companyName: string;
  companyLogo: string;
  photo: string;
  bio: string[];
  experience: string;
  pastCompanies?: { name: string; isText?: boolean; color?: string }[];
}

const genaiMentors: GenAIMentor[] = [
  {
    id: 'siddharth-virkar',
    name: 'Siddharth Virkar',
    role: 'Senior Manager, Creative and Content',
    companyName: 'Pernod Ricard',
    companyLogo: '/logos/genai/pernod-ricard.png',
    photo: '/mentors/genai/siddharth-virkar.png',
    bio: [
      "I've spent 11+ years crafting brand stories at Ogilvy, DDB Mudra and now Pernod Ricard, for brands loved worldwide.",
      'I bridge storytelling and technology, using AI to produce images, audio and video and folding those tools into real marketing workflows.',
    ],
    experience: '11+ years of experience',
    pastCompanies: [
      { name: 'Ogilvy', isText: true, color: '#dc2626' },
      { name: 'DDB mudra group', isText: true, color: '#f59e0b' },
    ],
  },
  {
    id: 'krishna-kumar',
    name: 'Krishna Kumar',
    role: 'Co-founder and CEO',
    companyName: 'GreenPepper',
    companyLogo: '/logos/genai/greenpepper.png',
    photo: '/mentors/genai/krishna-kumar.png',
    bio: [
      'I build at the crossroads of talent, technology and transformation, and I use AI as the catalyst to help people think bigger.',
      "AI is a new operating system for business. I've led 200+ AI workshops for 50,000+ professionals, helping teams move from AI-curious to AI-native.",
    ],
    experience: '15+ years of experience',
  },
  {
    id: 'parth-bansal',
    name: 'Parth Bansal',
    role: 'Staff Product Manager, AI',
    companyName: 'NUVAE',
    companyLogo: '/logos/genai/nuvae.png',
    photo: '/mentors/genai/parth-bansal.png',
    bio: [
      'I build AI systems that run at scale across enterprise, public infrastructure and healthcare, from claim automation to voice-first platforms for citizens.',
      'I design AI-native workflows where reasoning, retrieval, orchestration and automation are core infrastructure.',
    ],
    experience: '4+ years of experience',
    pastCompanies: [
      { name: 'nextuple', isText: true, color: '#f43f5e' },
      { name: 'EkStep', isText: true, color: '#38bdf8' },
      { name: 'Omni', isText: true, color: '#e2e8f0' },
    ],
  },
  {
    id: 'aditya-sharma',
    name: 'Aditya Sharma',
    role: 'Lead Product Manager, Glean for Analytics',
    companyName: 'glean',
    companyLogo: '/logos/genai/glean.png',
    photo: '/mentors/genai/aditya-sharma.png',
    bio: [
      'I build AI products for enterprises, solving high-stakes problems with AI agents, GenAI and LLMs.',
      "At Glean, I'm building AI for analytics, where anyone can ask a question in plain English and get the full story of what changed and why.",
    ],
    experience: '7+ years of experience',
    pastCompanies: [
      { name: 'joveo', isText: true, color: '#06b6d4' },
      { name: 'betterplace', isText: true, color: '#ffffff' },
    ],
  },
  {
    id: 'sri-laxmi',
    name: 'Sri Laxmi',
    role: 'AI-Product Manager',
    companyName: 'Rakuten',
    companyLogo: '/logos/genai/rakuten.png',
    photo: '/mentors/genai/sri-laxmi.png',
    bio: [
      'Focused on LLM-powered applications, RAG systems, and AI agents, with strong ownership of AI platforms, experimentation, and product strategy.',
      'Architecting enterprise AI workflows that integrate predictive analytics and autonomous tool execution.',
    ],
    experience: '6+ years of experience',
    pastCompanies: [
      { name: 'Rakuten', isText: true, color: '#bf1e2e' },
    ],
  },
  {
    id: 'kartikay-dhar',
    name: 'Kartikay Dhar',
    role: 'Director of Product, AI',
    companyName: 'Sprouts.ai',
    companyLogo: '/logos/genai/sprouts.png',
    photo: '/mentors/genai/kartikay-dhar.png',
    bio: [
      'Lead GenAI and data intelligence platforms at scale, driving enterprise transformation through AI-native product strategy and execution.',
      'Pioneering agentic systems for enterprise workflows and multi-modal intelligence.',
    ],
    experience: '8+ years of experience',
    pastCompanies: [
      { name: 'Sprouts.ai', isText: true, color: '#10b981' },
    ],
  },
];

export function GenAIExpertsCarouselSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance timer: moves every 4500ms, pauses on hover
  React.useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === genaiMentors.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? genaiMentors.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === genaiMentors.length - 1 ? 0 : prev + 1));
  };

  const currentMentor = genaiMentors[currentIndex];
  const prevMentor = genaiMentors[(currentIndex - 1 + genaiMentors.length) % genaiMentors.length];
  const nextMentor = genaiMentors[(currentIndex + 1) % genaiMentors.length];

  return (
    <section className="bg-black text-white pt-24 pb-28 relative overflow-hidden border-b border-[#232328]">
      {/* Layout strictly contained within the dual vertical guide lines with overflow-hidden */}
      <div className="max-w-[1440px] mx-auto border-x border-[#232328] relative overflow-hidden px-4 sm:px-8 lg:px-12">
        
        {/* Section Heading */}
        <div className="text-center mb-14 sm:mb-20 max-w-3xl mx-auto">
          <h2 className="font-editorial text-[38px] sm:text-[50px] md:text-[56px] text-white font-normal leading-tight tracking-tight mb-4">
            Learn from experts who build with AI
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm md:text-base font-light leading-relaxed">
            Learn the fundamentals from experienced operators who&apos;ve built with AI, and get the guidance you need to apply it in your own projects.
          </p>
        </div>

        {/* Carousel Viewport Container (contained within the 1440px guide lines) */}
        <div
          className="relative w-full max-w-5xl mx-auto flex flex-col items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative w-full flex items-center justify-center">
            
            {/* Peeking Left Card (Contained within bounds, faded) */}
            <div
              onClick={prevSlide}
              className="hidden xl:block absolute -left-20 2xl:-left-12 w-80 h-[460px] bg-[#0c0c0e] border border-white/5 rounded-2xl opacity-20 hover:opacity-40 transition-opacity cursor-pointer overflow-hidden scale-90 blur-[1px] pointer-events-auto"
            >
              <div className="relative w-full h-full p-6 flex flex-col justify-between">
                <span className="font-editorial text-xl text-white">{prevMentor.name}</span>
                <div className="relative w-full h-64">
                  <Image src={prevMentor.photo} alt={prevMentor.name} fill className="object-cover grayscale" />
                </div>
              </div>
            </div>

            {/* Main Active Card */}
            <div className="relative w-full max-w-3xl bg-[#0c0c0e] border border-white/10 rounded-2xl p-6 sm:p-10 shadow-2xl flex flex-col md:flex-row gap-8 items-center md:items-start z-10 transition-all duration-300">
              
              {/* Left Column: Portrait Photo with Subtle Halo */}
              <div className="relative w-52 h-64 sm:w-64 sm:h-80 shrink-0 rounded-xl overflow-hidden bg-zinc-900 border border-white/10 shadow-inner">
                <Image
                  key={`photo-${currentMentor.id}`}
                  src={currentMentor.photo}
                  alt={currentMentor.name}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500 animate-in fade-in zoom-in-95"
                  sizes="(max-width: 768px) 208px, 256px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Right Column: Bio & Metadata */}
              <div className="flex-1 flex flex-col justify-between h-full text-left">
                <div>
                  {/* Mentor Name */}
                  <h3 className="font-editorial text-[30px] sm:text-[34px] font-normal text-white leading-tight mb-1.5">
                    {currentMentor.name}
                  </h3>

                  {/* Role and Current Company with Logo */}
                  <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-zinc-300 font-normal mb-6">
                    <span>{currentMentor.role}</span>
                    <span className="text-zinc-500 font-light">@</span>
                    <div className="flex items-center gap-1.5">
                      {currentMentor.companyLogo && (
                        <div className="relative w-5 h-5 shrink-0">
                          <Image
                            src={currentMentor.companyLogo}
                            alt={currentMentor.companyName}
                            fill
                            className="object-contain"
                          />
                        </div>
                      )}
                      <span className="font-medium text-white">{currentMentor.companyName}</span>
                    </div>
                  </div>

                  {/* Bio Paragraphs */}
                  <div className="space-y-3.5 mb-8">
                    {currentMentor.bio.map((para, i) => (
                      <p key={i} className="text-zinc-300 text-xs sm:text-[13px] md:text-sm font-light leading-relaxed">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>

                {/* Experience and Past Logos Footer */}
                <div className="pt-6 border-t border-zinc-800/80">
                  <p className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold mb-3">
                    {currentMentor.experience}
                  </p>

                  {currentMentor.pastCompanies && currentMentor.pastCompanies.length > 0 && (
                    <div className="flex items-center gap-5">
                      {currentMentor.pastCompanies.map((comp, idx) => (
                        <span
                          key={idx}
                          className="text-xs sm:text-sm font-bold tracking-tight opacity-80"
                          style={{ color: comp.color || '#fff' }}
                        >
                          {comp.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

              </div>

            </div>

            {/* Peeking Right Card (Contained within bounds, faded) */}
            <div
              onClick={nextSlide}
              className="hidden xl:block absolute -right-20 2xl:-right-12 w-80 h-[460px] bg-[#0c0c0e] border border-white/5 rounded-2xl opacity-20 hover:opacity-40 transition-opacity cursor-pointer overflow-hidden scale-90 blur-[1px] pointer-events-auto"
            >
              <div className="relative w-full h-full p-6 flex flex-col justify-between">
                <span className="font-editorial text-xl text-white">{nextMentor.name}</span>
                <div className="relative w-full h-64">
                  <Image src={nextMentor.photo} alt={nextMentor.name} fill className="object-cover grayscale" />
                </div>
              </div>
            </div>

            {/* Navigation Buttons (Placed cleanly inside the 1440px guide lines) */}
            <button
              onClick={prevSlide}
              aria-label="Previous mentor"
              className="absolute left-1 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-zinc-900/90 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white flex items-center justify-center transition-all shadow-xl cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextSlide}
              aria-label="Next mentor"
              className="absolute right-1 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-zinc-900/90 border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-white flex items-center justify-center transition-all shadow-xl cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>

          {/* Carousel Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8 z-20">
            {genaiMentors.map((mentor, index) => (
              <button
                key={`dot-${mentor.id}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  index === currentIndex
                    ? 'w-6 h-2 bg-purple-500'
                    : 'w-2 h-2 bg-zinc-700 hover:bg-zinc-500'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
