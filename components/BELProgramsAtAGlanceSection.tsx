'use client';

import React, { useState, useEffect } from 'react';
import { Check, X as LucideX, Terminal, Cpu, Database, Network, TrendingUp } from 'lucide-react';

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
    heading: 'Engineer with AI, not around it',
    body: 'AI runs through every phase - how you write code, how you review it, and the systems you ship. Build the whole program in the stack your career already runs on, with the same six phases from backend foundations through to forward deployed engineering.',
    badges: ['Java + Spring Boot', 'Node.js', 'Python + Django'],
  },
  {
    id: 'how-you-learn',
    tabLabel: 'How you learn',
    eyebrow: '02  HOW YOU LEARN',
    heading: 'Learn it live. Prove it in code.',
    body: "Live sessions with engineers who ship for a living, then an assignment at the end of every module. You find the gaps while there's still time to close them, and every submission comes back with feedback from someone who has done the job.",
    badges: ['Live sessions', 'Assignment every module', '12-14 hrs a week'],
  },
  {
    id: 'real-world-projects',
    tabLabel: 'Real-world projects',
    eyebrow: '03  REAL-WORLD PROJECTS',
    heading: 'Build systems that solve production problems',
    body: 'Step into backend roles on high-scale systems. Architect conversation APIs with streaming and memory, build background email queues that process millions of events without duplicate delivery, and design flash-sale checkouts that withstand massive concurrent traffic spikes.',
    badges: ['ChatGPT Streaming Engine', 'Mailchimp 1M Queues', 'Flipkart Flash Checkout'],
  },
  {
    id: 'dsa-prep',
    tabLabel: 'DSA & Interview prep',
    eyebrow: '04  DSA & INTERVIEW PREP',
    heading: 'Master problem solving and defend your system design',
    body: 'Solve algorithmic patterns from linear structures to DP in Java or Python. Master complexity defense, machine coding, and high-level system design rounds under real interview time constraints with senior tech mentors.',
    badges: ['9 DSA pattern topics', 'Java & Python tracks', 'System design defense'],
  },
  {
    id: 'careers',
    tabLabel: 'Careers & beyond',
    eyebrow: '05  CAREERS & BEYOND',
    heading: 'Accelerate your career with senior engineering networks',
    body: 'Get 1:1 resume teardowns, personalized referrals to tier-1 tech companies, and lifetime access to a tight-knit community of senior engineers and tech leads who help you break through salary plateaus.',
    badges: ['48 LPA highest package', '400% highest hike', '22 LPA median package'],
  },
];

export function BELProgramsAtAGlanceSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [timerProgress, setTimerProgress] = useState(0); // 0 to 100
  const activeTab = glanceTabs[activeIdx];
  const timerDuration = 6000; // 6s per tab

  useEffect(() => {
    const tickInterval = 30;
    const increment = (tickInterval / timerDuration) * 100;

    const timer = setInterval(() => {
      setTimerProgress((prev) => {
        if (prev + increment >= 100) {
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
    <section id="programs-at-a-glance" className="w-full bg-black py-20 sm:py-28 border-b border-[#232328]">
      <div className="max-w-[1440px] mx-auto border-x border-[#232328] px-4 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-[38px] sm:text-[54px] font-editorial italic font-normal text-white">
            Programs at a glance
          </h2>
        </div>

        {/* 5-Tab Navigation with Animated Timer Line */}
        <div className="w-full border-t border-b border-[#232328] grid grid-cols-2 md:grid-cols-5 mb-0">
          {glanceTabs.map((tab, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(idx)}
                className={`relative min-h-[64px] sm:min-h-[72px] flex items-center justify-center px-3 sm:px-4 transition-colors border-r border-[#232328] last:border-r-0 cursor-pointer ${
                  isActive ? 'bg-[#0a0a0d] text-white font-bold' : 'text-zinc-500 hover:text-zinc-300 font-medium'
                }`}
              >
                <span className="text-xs sm:text-[15px] tracking-tight text-center">
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
        <div className="w-full border-b border-[#232328] bg-black grid grid-cols-1 lg:grid-cols-12 min-h-[520px]">

          {/* Left Column: Descriptive Content */}
          <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 border-b lg:border-b-0 lg:border-r border-[#232328] flex flex-col justify-between">
            <div>
              <p className="text-xs sm:text-[13px] font-mono tracking-widest text-zinc-400 uppercase mb-4">
                {activeTab.eyebrow}
              </p>
              <h3 className="text-[28px] sm:text-[34px] font-editorial font-normal text-white leading-tight mb-5">
                {activeTab.heading}
              </h3>
              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed font-light mb-8">
                {activeTab.body}
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-4">
              {activeTab.badges.map((b, i) => (
                <span
                  key={i}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium text-zinc-300 bg-zinc-900 border border-zinc-700/80"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: High-Fidelity Infographic Graphics */}
          <div className="lg:col-span-7 bg-[#05060b] relative flex items-center justify-center p-6 sm:p-10 overflow-hidden">

            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/40 via-blue-950/20 to-black pointer-events-none" />

            {/* TAB 01: AI-FIRST CURRICULUM GRAPHIC */}
            {activeIdx === 0 && (
              <div className="relative w-full max-w-[540px] flex flex-col gap-4 z-10 animate-fadeIn">
                <div className="p-4 sm:p-5 rounded-xl bg-[#0f111e]/90 border border-indigo-500/30 backdrop-blur-md shadow-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400">
                      <Terminal className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Claude Code Agent CLI</p>
                      <p className="text-xs text-zinc-400 font-mono">Autonomous refactoring & test generation</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300 text-[11px] font-mono font-semibold">Active Sprint</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#0b0c16]/90 border border-white/10 flex flex-col gap-2">
                    <span className="text-xs text-zinc-400 font-medium">Stack Autonomy</span>
                    <span className="text-xl font-bold text-white">Java • Node • Py</span>
                    <span className="text-[11px] text-emerald-400">Production multi-language</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#0b0c16]/90 border border-white/10 flex flex-col gap-2">
                    <span className="text-xs text-zinc-400 font-medium">System Architecture</span>
                    <span className="text-xl font-bold text-white">Forward Deployed</span>
                    <span className="text-[11px] text-indigo-400">Applied AI & RAG pipelines</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#0a0c1a]/95 border border-white/10 flex items-center justify-between font-mono text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>RAG & Vector Retrieval Engine</span>
                  </div>
                  <span className="text-zinc-500">Sub-100ms latency</span>
                </div>
              </div>
            )}

            {/* TAB 02: HOW YOU LEARN (Exact code terminal / test runner from user screenshot!) */}
            {activeIdx === 1 && (
              <div className="relative w-full max-w-[560px] z-10 animate-fadeIn">
                {/* Blue background canvas with fine grid */}
                <div className="relative rounded-2xl bg-[#0c1033] border border-blue-500/30 p-6 sm:p-8 shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px] opacity-25 pointer-events-none" />

                  {/* macOS Terminal / Test Runner Window */}
                  <div className="relative rounded-xl bg-white text-zinc-900 shadow-2xl border border-zinc-200 overflow-hidden font-sans">
                    {/* Window Titlebar */}
                    <div className="px-4 py-2.5 bg-zinc-100 border-b border-zinc-200 flex items-center gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-red-400 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 inline-block" />
                        <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block" />
                      </div>
                      <span className="text-[11px] text-zinc-500 font-mono ml-2">
                        assignment-02.ts (git commit)
                      </span>
                    </div>

                    {/* Window Body: Test Cases Checklist */}
                    <div className="p-5 font-mono text-xs sm:text-[13px] flex flex-col gap-2.5">
                      <div className="text-zinc-400 text-[11px] font-semibold mb-1">
                        &gt; npm test
                      </div>

                      <div className="flex items-center gap-2 text-emerald-600 font-medium">
                        <Check className="w-3.5 h-3.5 shrink-0" />
                        <span>limits requests per IP</span>
                      </div>

                      <div className="flex items-center gap-2 text-emerald-600 font-medium">
                        <Check className="w-3.5 h-3.5 shrink-0" />
                        <span>resets after the window</span>
                      </div>

                      {/* Failed test with soft red background bar */}
                      <div className="flex items-center gap-2 text-red-600 bg-red-50/80 px-2.5 py-1.5 rounded border border-red-200/60 font-medium">
                        <LucideX className="w-3.5 h-3.5 shrink-0" />
                        <span>handles a store outage</span>
                      </div>

                      <div className="flex items-center gap-2 text-emerald-600 font-medium">
                        <Check className="w-3.5 h-3.5 shrink-0" />
                        <span>returns 429 with retry-after</span>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-zinc-200 text-zinc-500 text-[11px] flex justify-between items-center">
                        <span>Tests: 3 passed, 1 failed</span>
                        <span className="text-red-500 font-semibold">1 test failing</span>
                      </div>
                    </div>
                  </div>

                  {/* Pipeline Milestone Visual: MODULE 02 ------- [ gap found ] ------- DUE */}
                  <div className="mt-6 flex items-center justify-between text-zinc-400 font-mono text-[11px]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-zinc-400" />
                      <span>MODULE 02</span>
                    </div>

                    <div className="flex-1 mx-4 relative flex items-center justify-center">
                      <div className="w-full h-px border-t border-dashed border-zinc-500" />
                      <span className="absolute px-2.5 py-0.5 rounded-full bg-red-500/20 text-red-400 text-[10px] font-semibold border border-red-500/30">
                        gap found
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-zinc-400" />
                      <span>DUE</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 03: REAL-WORLD PROJECTS GRAPHIC */}
            {activeIdx === 2 && (
              <div className="relative w-full max-w-[540px] z-10 flex flex-col gap-4 animate-fadeIn">
                <div className="p-5 rounded-2xl bg-[#0c102b] border border-blue-500/30 shadow-2xl">
                  <div className="flex items-center justify-between border-b border-blue-900/50 pb-3 mb-4">
                    <span className="text-xs font-mono text-blue-400 font-semibold">HIGH-THROUGHPUT ARCHITECTURE</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-mono">15,000 QPS</span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-center text-xs font-mono">
                    <div className="p-3 rounded-lg bg-zinc-900/80 border border-zinc-700">
                      <span className="text-zinc-400 block text-[10px]">INCOMING</span>
                      <span className="text-white font-bold text-sm">API Gateway</span>
                    </div>
                    <div className="p-3 rounded-lg bg-indigo-950/80 border border-indigo-700">
                      <span className="text-indigo-300 block text-[10px]">MESSAGE BUS</span>
                      <span className="text-white font-bold text-sm">Kafka Queue</span>
                    </div>
                    <div className="p-3 rounded-lg bg-zinc-900/80 border border-zinc-700">
                      <span className="text-zinc-400 block text-[10px]">CACHE LAYER</span>
                      <span className="text-white font-bold text-sm">Redis Cluster</span>
                    </div>
                  </div>

                  <div className="mt-4 p-3 rounded-lg bg-black/60 border border-white/5 flex items-center justify-between text-xs text-zinc-400 font-mono">
                    <span>Target Latency: &lt; 25ms p99</span>
                    <span className="text-emerald-400 font-semibold">Zero Double-Writes</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 04: DSA & INTERVIEW PREP GRAPHIC */}
            {activeIdx === 3 && (
              <div className="relative w-full max-w-[540px] z-10 flex flex-col gap-4 animate-fadeIn">
                <div className="p-5 rounded-2xl bg-[#0e0e1a] border border-purple-500/30 shadow-2xl font-mono text-xs">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                    <span className="text-purple-400 font-semibold text-xs">ALGORITHMIC COMPLEXITY DEFENSE</span>
                    <span className="text-zinc-400 text-[11px]">Java &amp; Python</span>
                  </div>

                  <div className="flex flex-col gap-3">
                    <div className="p-3 rounded-lg bg-red-950/30 border border-red-800/40 flex items-center justify-between">
                      <div>
                        <span className="text-red-400 font-bold block">Brute Force O(N²)</span>
                        <span className="text-[11px] text-zinc-400">Nested search loop</span>
                      </div>
                      <span className="px-2 py-1 rounded bg-red-900/40 text-red-300 text-[10px]">Timed Out (4.8s)</span>
                    </div>

                    <div className="p-3 rounded-lg bg-emerald-950/30 border border-emerald-700/50 flex items-center justify-between">
                      <div>
                        <span className="text-emerald-400 font-bold block">Sliding Window O(N)</span>
                        <span className="text-[11px] text-zinc-400">Optimal two-pointer invariant</span>
                      </div>
                      <span className="px-2 py-1 rounded bg-emerald-900/40 text-emerald-300 text-[10px] font-bold">12ms (Accepted)</span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-zinc-400 text-[11px]">
                    <span>9 Core Linear &amp; Graph Patterns</span>
                    <span className="text-purple-300 font-semibold">Live Mock System Design</span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 05: CAREERS & BEYOND GRAPHIC */}
            {activeIdx === 4 && (
              <div className="relative w-full max-w-[540px] z-10 flex flex-col gap-4 animate-fadeIn">
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#12102e] to-[#06060c] border border-indigo-500/30 shadow-2xl">
                  <span className="text-xs font-mono text-indigo-400 font-semibold uppercase tracking-wider block mb-4">
                    Alumni Outcomes &amp; Peer Network
                  </span>

                  <div className="grid grid-cols-3 gap-3 mb-5">
                    <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 text-center">
                      <span className="text-2xl font-bold text-white block">48 LPA</span>
                      <span className="text-[11px] text-zinc-400">Highest package</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 text-center">
                      <span className="text-2xl font-bold text-white block">400%</span>
                      <span className="text-[11px] text-zinc-400">Highest hike</span>
                    </div>
                    <div className="p-3.5 rounded-xl bg-black/60 border border-white/10 text-center">
                      <span className="text-2xl font-bold text-white block">22 LPA</span>
                      <span className="text-[11px] text-zinc-400">Median package</span>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between text-xs text-zinc-300">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-emerald-400" />
                      <span>Direct hiring referrals to Atlassian, Razorpay, Uber</span>
                    </div>
                    <span className="text-indigo-400 font-semibold text-xs">Active</span>
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
