'use client';

import React, { useState, useEffect, useRef } from 'react';

interface GlanceTab {
  id: string;
  tabLabel: string;
  eyebrow: string;
  heading: string;
  body: string;
  badges: string[];
}

const glanceTabs: GlanceTab[] = [
  {
    id: 'curriculum',
    tabLabel: 'AI-first curriculum',
    eyebrow: '01  AI-FIRST CURRICULUM',
    heading: 'Build products with AI, not around it',
    body: 'AI runs through every stage of the product craft — how you discover problems, size opportunities, spec solutions and ship. You learn modern PM in the same tools the best teams already use, from discovery through to launch.',
    badges: ['Discovery', 'Product strategy', 'AI prototyping'],
  },
  {
    id: 'capstone',
    tabLabel: 'Capstone Project',
    eyebrow: '02  CAPSTONE PROJECT',
    heading: 'Leave with a shipped product, not a certificate',
    body: 'Take a real problem from discovery to a working product, end to end. You scope it, prototype it with AI, pressure-test it with users, and build the artefacts — PRD, metrics, a go-to-market — that a hiring team actually wants to see.',
    badges: ['Real problem', 'End-to-end PRD', 'Portfolio-ready'],
  },
  {
    id: 'demoday',
    tabLabel: 'Demo Day',
    eyebrow: '03  DEMO DAY',
    heading: 'Pitch your work to people who hire',
    body: 'Present your capstone to a room of practising product leaders and hiring teams. You get live feedback on the product and the pitch, and your work goes in front of people who can open the next door.',
    badges: ['Live pitch', 'Feedback from PMs', 'In front of hiring teams'],
  },
  {
    id: 'careers',
    tabLabel: 'Careers & beyond',
    eyebrow: '04  CAREER SUPPORT',
    heading: 'Ready before the first interview, not after the fifth',
    body: 'Profile and portfolio reviews, mock interviews with practising product managers, and help getting in front of hiring teams. The work starts while you\'re still building, not after you\'ve finished.',
    badges: ['Resume + portfolio review', 'Mock interviews', 'Hiring support'],
  },
];

export function ProgramsAtAGlanceSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [timerProgress, setTimerProgress] = useState(0); // 0 to 100
  const activeTab = glanceTabs[activeIdx];
  const timerDuration = 6000; // 6 seconds per tab

  useEffect(() => {
    const tickInterval = 30; // 30ms updates
    const increment = (tickInterval / timerDuration) * 100;

    const timer = setInterval(() => {
      setTimerProgress((prev) => {
        if (prev + increment >= 100) {
          // Advance to next tab
          setActiveIdx((curr) => (curr + 1) % glanceTabs.length);
          return 0;
        }
        return prev + increment;
      });
    }, tickInterval);

    return () => clearInterval(timer);
  }, [activeIdx]);

  const handleTabClick = (index: number) => {
    setActiveIdx(index);
    setTimerProgress(0);
  };

  return (
    <section className="w-full bg-black py-20 sm:py-28 border-b border-[#232328]">
      <div className="max-w-[1440px] mx-auto border-x border-[#232328] px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-[38px] sm:text-[54px] font-editorial italic font-normal text-white">
            Programs at a glance
          </h2>
        </div>

        {/* Tab Navigation with Animated Timer Line */}
        <div className="w-full border-t border-b border-[#232328] grid grid-cols-2 lg:grid-cols-4 mb-0">
          {glanceTabs.map((tab, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(idx)}
                className={`relative min-h-[64px] sm:min-h-[72px] flex items-center justify-center px-4 sm:px-6 transition-colors border-r border-[#232328] last:border-r-0 cursor-pointer ${
                  isActive ? 'bg-[#0a0a0d] text-white font-bold' : 'text-zinc-500 hover:text-zinc-300 font-medium'
                }`}
              >
                <span className="text-sm sm:text-base tracking-tight text-center">
                  {tab.tabLabel}
                </span>

                {/* Left-to-Right Timer Progress Line */}
                {isActive ? (
                  <div
                    className="absolute bottom-0 left-0 h-0.5 sm:h-1 bg-white transition-[width] duration-75 ease-linear pointer-events-none"
                    style={{ width: `${timerProgress}%` }}
                  />
                ) : (
                  <div className="absolute bottom-0 left-0 h-0.5 sm:h-1 w-full bg-transparent pointer-events-none" />
                )}
              </button>
            );
          })}
        </div>

        {/* Tab Main Content: 2-Column Responsive Card Grid */}
        <div className="w-full border-b border-[#232328] bg-black grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
          
          {/* Left Column: Eyebrow, Heading, Description, Badges */}
          <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#232328]">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 block mb-4">
                {activeTab.eyebrow}
              </span>
              <h3 className="text-[26px] sm:text-[32px] lg:text-[38px] font-sans font-semibold text-white leading-[1.15] tracking-tight mb-4">
                {activeTab.heading}
              </h3>
              <p className="text-zinc-400 text-sm sm:text-[15px] font-light leading-relaxed max-w-lg">
                {activeTab.body}
              </p>
            </div>

            {/* Badges / Pill Tags */}
            <div className="flex flex-wrap gap-2.5 pt-8 mt-auto">
              {activeTab.badges.map((badge, bIdx) => (
                <span
                  key={bIdx}
                  className="border border-[#2a2a32] bg-[#121216]/80 text-zinc-300 text-xs sm:text-[13px] px-3.5 py-1.5 rounded font-normal"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Visual Infographics Matching Uploaded Images */}
          <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex items-center justify-center bg-[#070709]">
            
            {/* 1. AI-FIRST CURRICULUM: Terminal Workflow Infographic */}
            {activeTab.id === 'curriculum' && (
              <div className="relative w-full aspect-[4/3] max-w-[540px] rounded-xl overflow-hidden p-6 sm:p-8 flex items-center justify-center bg-gradient-to-br from-[#0c0638] via-[#1c0e66] to-[#080324] border border-[#232338] shadow-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(88,38,245,0.35)_0%,transparent_70%)] pointer-events-none" />

                {/* White Container Card with 4 Purple Corner Brackets */}
                <div className="relative w-full max-w-[420px] bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.45)] border border-white/80 p-5 sm:p-6 z-10 text-black">
                  <span className="absolute top-2.5 left-2.5 w-1.5 h-1.5 bg-[#6320ee]" />
                  <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-[#6320ee]" />
                  <span className="absolute bottom-2.5 left-2.5 w-1.5 h-1.5 bg-[#6320ee]" />
                  <span className="absolute bottom-2.5 right-2.5 w-1.5 h-1.5 bg-[#6320ee]" />

                  {/* Terminal Header Bar */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-100">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-mono text-xs font-semibold text-zinc-800">
                        $ run ai product workflow
                      </span>
                    </div>
                    <span className="font-mono text-[9px] text-zinc-400 uppercase tracking-wider">
                      ACTIVE
                    </span>
                  </div>

                  {/* Workflow Pipeline Steps */}
                  <div className="space-y-2 text-xs">
                    {[
                      { name: 'Reading Figma flow', tool: 'Figma', color: 'text-rose-600', dot: 'bg-rose-500' },
                      { name: 'Drafting PRD', tool: 'Claude', color: 'text-amber-700', dot: 'bg-amber-500' },
                      { name: 'Generating user stories', tool: 'ChatGPT', color: 'text-purple-700', dot: 'bg-purple-600' },
                      { name: 'Creating tickets', tool: 'Linear', color: 'text-blue-700', dot: 'bg-blue-600' },
                      { name: 'Preparing GitHub handoff', tool: 'GitHub', color: 'text-zinc-800', dot: 'bg-zinc-800' },
                      { name: 'Defining success metrics', tool: 'Mixpanel', color: 'text-purple-600', dot: 'bg-purple-500' },
                    ].map((step, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-1.5 px-2.5 rounded bg-zinc-50 border border-zinc-100/80"
                      >
                        <div className="flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${step.dot}`} />
                          <span className="font-medium text-zinc-800">{step.name}</span>
                        </div>
                        <span className={`font-mono text-[10px] font-semibold ${step.color}`}>
                          {step.tool}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* 2. CAPSTONE PROJECT: Certificate vs Shipped Product Toggle (Image 3) */}
            {activeTab.id === 'capstone' && (
              <div
                className="relative w-full aspect-[4/3] max-w-[540px] rounded-xl overflow-hidden p-6 sm:p-8 flex items-center justify-center border border-[#232338] shadow-2xl"
                style={{
                  background:
                    'repeating-linear-gradient(90deg, #100b52 0px, #1a0f80 12px, #3b1fc4 24px, #6025e8 36px, #3216ba 48px, #0e074a 60px)',
                }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,32,238,0.35)_0%,transparent_75%)] pointer-events-none" />

                {/* White Card with 4 Purple Corner Brackets */}
                <div className="relative w-full max-w-[420px] bg-white rounded-xl shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-white/80 p-6 z-10 text-black">
                  <span className="absolute top-2.5 left-2.5 w-1.5 h-1.5 bg-[#6320ee]" />
                  <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-[#6320ee]" />
                  <span className="absolute bottom-2.5 left-2.5 w-1.5 h-1.5 bg-[#6320ee]" />
                  <span className="absolute bottom-2.5 right-2.5 w-1.5 h-1.5 bg-[#6320ee]" />

                  {/* Certificate Mockup Frame */}
                  <div className="border border-zinc-200 rounded-lg p-6 bg-[#fafaf8] flex flex-col items-center justify-center min-h-[140px] relative text-center">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-zinc-400 block mb-1">
                      CERTIFICATE
                    </span>
                    <h4 className="font-editorial italic text-2xl sm:text-3xl text-zinc-800 font-normal">
                      of Completion
                    </h4>
                    <span className="text-[11px] font-sans text-zinc-400 mt-1 block">
                      awarded to ____________
                    </span>
                  </div>

                  {/* Toggle Switch: Certificate -> Shipped Product */}
                  <div className="mt-5 pt-3 border-t border-zinc-100 flex items-center justify-center gap-3">
                    <span className="text-xs text-zinc-400 font-medium">Certificate</span>
                    <div className="w-11 h-6 bg-zinc-300 rounded-full p-0.5 flex items-center justify-end shadow-inner cursor-pointer">
                      <div className="w-5 h-5 bg-white rounded-full shadow-md" />
                    </div>
                    <span className="text-xs text-zinc-900 font-bold">Shipped product</span>
                  </div>

                  {/* Badges Below Toggle */}
                  <div className="mt-3 flex items-center justify-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> LIVE
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 font-semibold border border-zinc-200">
                      PRD • Metrics • GTM
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* 3. DEMO DAY: Amphitheater Audience Pitch (Image 4) */}
            {activeTab.id === 'demoday' && (
              <div
                className="relative w-full aspect-[4/3] max-w-[540px] rounded-xl overflow-hidden p-6 sm:p-8 flex items-center justify-center border border-[#232338] shadow-2xl"
                style={{
                  background:
                    'repeating-linear-gradient(0deg, #180d6b 0px, #351cb5 8px, #5824e6 16px, #2a1496 24px, #11074d 32px)',
                }}
              >
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,rgba(110,60,255,0.4)_0%,transparent_70%)] pointer-events-none" />

                {/* White Card with 4 Purple Corner Brackets */}
                <div className="relative w-full max-w-[420px] bg-white rounded-xl shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-white/80 p-5 sm:p-6 z-10 text-black">
                  <span className="absolute top-2.5 left-2.5 w-1.5 h-1.5 bg-[#6320ee]" />
                  <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-[#6320ee]" />
                  <span className="absolute bottom-2.5 left-2.5 w-1.5 h-1.5 bg-[#6320ee]" />
                  <span className="absolute bottom-2.5 right-2.5 w-1.5 h-1.5 bg-[#6320ee]" />

                  {/* Audience Role Legend */}
                  <div className="flex items-center justify-center gap-3 sm:gap-4 text-[10px] sm:text-[11px] text-zinc-600 mb-4 pb-3 border-b border-zinc-100">
                    <span className="flex items-center gap-1.5 font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#3b82f6]" /> Product managers
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#06b6d4]" /> Product leaders
                    </span>
                    <span className="flex items-center gap-1.5 font-medium">
                      <span className="w-2 h-2 rounded-full bg-[#f97316]" /> Hiring teams
                    </span>
                  </div>

                  {/* Amphitheater Seating Arc */}
                  <div className="relative h-28 w-full flex items-center justify-center">
                    <svg viewBox="0 0 300 120" className="w-full h-full">
                      {/* Tier 1 (Outer Arc) */}
                      <circle cx="50" cy="30" r="4.5" fill="#3b82f6" />
                      <circle cx="80" cy="20" r="4.5" fill="#06b6d4" />
                      <circle cx="115" cy="14" r="4.5" fill="#f97316" />
                      <circle cx="150" cy="12" r="4.5" fill="#3b82f6" />
                      <circle cx="185" cy="14" r="4.5" fill="#06b6d4" />
                      <circle cx="220" cy="20" r="4.5" fill="#f97316" />
                      <circle cx="250" cy="30" r="4.5" fill="#3b82f6" />

                      {/* Tier 2 (Middle Arc) */}
                      <circle cx="70" cy="55" r="4.5" fill="#06b6d4" />
                      <circle cx="100" cy="46" r="4.5" fill="#f97316" />
                      <circle cx="132" cy="40" r="4.5" fill="#3b82f6" />
                      <circle cx="168" cy="40" r="4.5" fill="#06b6d4" />
                      <circle cx="200" cy="46" r="4.5" fill="#3b82f6" />
                      <circle cx="230" cy="55" r="4.5" fill="#f97316" />

                      {/* Tier 3 (Inner Arc) */}
                      <circle cx="95" cy="80" r="4.5" fill="#3b82f6" />
                      <circle cx="125" cy="70" r="4.5" fill="#06b6d4" />
                      <circle cx="150" cy="66" r="4.5" fill="#f97316" />
                      <circle cx="175" cy="70" r="4.5" fill="#3b82f6" />
                      <circle cx="205" cy="80" r="4.5" fill="#06b6d4" />
                    </svg>
                  </div>

                  {/* Presenter Stage Position */}
                  <div className="flex items-center justify-center mt-2">
                    <div className="px-4 py-1.5 rounded-full bg-zinc-900 text-white text-xs font-semibold flex items-center gap-2 shadow-lg">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>You, live pitch</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 4. CAREERS & BEYOND: Marked Up Resume with PM Reviewer Callout (Image 1 & 2) */}
            {activeTab.id === 'careers' && (
              <div
                className="relative w-full aspect-[4/3] max-w-[540px] rounded-xl overflow-hidden p-6 sm:p-8 flex items-center justify-center border border-[#232338] shadow-2xl"
                style={{
                  background:
                    'repeating-linear-gradient(0deg, #100b52 0px, #100b52 3px, #3b1fc4 3px, #3b1fc4 6px)',
                }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(80,30,220,0.35)_0%,transparent_75%)] pointer-events-none" />

                {/* White Card with 4 Purple Corner Brackets */}
                <div className="relative w-full max-w-[420px] bg-white rounded-xl shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-white/80 p-5 sm:p-6 z-10 text-black">
                  <span className="absolute top-2.5 left-2.5 w-1.5 h-1.5 bg-[#6320ee]" />
                  <span className="absolute top-2.5 right-2.5 w-1.5 h-1.5 bg-[#6320ee]" />
                  <span className="absolute bottom-2.5 left-2.5 w-1.5 h-1.5 bg-[#6320ee]" />
                  <span className="absolute bottom-2.5 right-2.5 w-1.5 h-1.5 bg-[#6320ee]" />

                  {/* Resume Layout with PM Reviewer Comment */}
                  <div className="relative flex gap-4">
                    {/* Resume Skeleton */}
                    <div className="w-[62%] border border-zinc-200 rounded p-3.5 space-y-2.5 bg-zinc-50/70">
                      <div className="flex items-center gap-2 pb-2 border-b border-zinc-200">
                        <span className="w-5 h-5 rounded-full bg-zinc-300 shrink-0" />
                        <span className="w-24 h-2.5 bg-zinc-900 rounded" />
                      </div>
                      <div className="space-y-1.5">
                        <span className="w-16 h-1.5 bg-zinc-400 rounded block" />
                        <span className="w-full h-1 bg-zinc-200 rounded block" />
                        <span className="w-5/6 h-1 bg-zinc-200 rounded block" />
                      </div>
                      <div className="space-y-1.5 pt-1">
                        <span className="w-14 h-1.5 bg-purple-400 rounded block" />
                        <span className="w-full h-1 bg-purple-200 rounded block" />
                        <span className="w-4/5 h-1 bg-purple-200 rounded block" />
                      </div>
                      <div className="pt-2 flex items-center justify-between">
                        <span className="text-[10px] font-semibold text-purple-700 underline cursor-pointer">
                          portfolio ↗
                        </span>
                        <span className="text-[8.5px] font-mono text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded font-bold">
                          ✓ REVIEWED
                        </span>
                      </div>
                    </div>

                    {/* Floating Reviewer Comment Callout Bubble */}
                    <div className="w-[50%] absolute -right-2 top-6 bg-white border border-purple-300 rounded-lg p-3 shadow-xl z-20">
                      <div className="flex items-center gap-1.5 text-[10.5px] font-bold text-purple-700 mb-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                        PM reviewer
                      </div>
                      <p className="text-[11px] text-zinc-900 leading-snug font-medium">
                        Quantify the impact: What changed, and by how much?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
