'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type RoleKey = 'pm' | 'marketing' | 'design' | 'business' | 'founder';

interface RoleContent {
  id: RoleKey;
  label: string;
  before: string[];
  after: string[];
  tools: { name: string; src: string }[];
}

const roleData: Record<RoleKey, RoleContent> = {
  pm: {
    id: 'pm',
    label: 'Product management',
    before: [
      'Hours spent synthesising user interviews by hand.',
      'PRDs written from scratch, then rewritten after every review.',
      'Waiting on engineering to find out if an idea works.',
    ],
    after: [
      'Agents analyse user interviews and surface the patterns that matter.',
      'PRDs drafted in minutes, so reviews focus on the decisions.',
      'Working prototypes you build yourself, before a sprint is planned.',
    ],
    tools: [
      { name: 'Writer', src: '/tools/genai/writer.png' },
      { name: 'n8n', src: '/tools/genai/n8n.png' },
      { name: 'v0', src: '/tools/genai/snake.png' },
      { name: 'Mistral', src: '/tools/genai/mistral.png' },
      { name: 'Jasper', src: '/tools/genai/jasper.png' },
    ],
  },
  marketing: {
    id: 'marketing',
    label: 'Marketing',
    before: [
      'One campaign idea, tested slowly, one channel at a time.',
      'Days lost to briefs, first drafts, and resizing creative.',
      'Reports pulled together by hand at the end of every month.',
    ],
    after: [
      'Dozens of campaign variants drafted and tested in an afternoon.',
      'Workflows that turn one brief into every format you need.',
      'Live dashboards that show what\'s working while it still matters.',
    ],
    tools: [
      { name: 'Clay', src: '/tools/genai/clay.png' },
      { name: 'Writer', src: '/tools/genai/writer.png' },
      { name: 'n8n', src: '/tools/genai/n8n.png' },
      { name: 'v0', src: '/tools/genai/snake.png' },
      { name: 'Mistral', src: '/tools/genai/mistral.png' },
    ],
  },
  design: {
    id: 'design',
    label: 'Design',
    before: [
      'Mockups that stop at static screens.',
      'Handoffs that lose detail somewhere between Figma and code.',
      'A week of sticky notes to synthesise one round of research.',
    ],
    after: [
      'Clickable, coded prototypes you ship yourself.',
      'Designs that become working interfaces, with no handoff gap.',
      'Research themes pulled together in an hour, ready to act on.',
    ],
    tools: [
      { name: 'Jasper', src: '/tools/genai/jasper.png' },
      { name: 'GPT-4', src: '/tools/genai/chatgpt4.png' },
      { name: 'Claude', src: '/tools/genai/claude.png' },
      { name: 'Clay', src: '/tools/genai/clay.png' },
      { name: 'Writer', src: '/tools/genai/writer.png' },
    ],
  },
  business: {
    id: 'business',
    label: 'Business',
    before: [
      'The same reports rebuilt in spreadsheets every week.',
      'Processes that depend on someone remembering the next step.',
      'Questions about your data stuck in an analyst\'s queue.',
    ],
    after: [
      'Automated workflows that run the routine work end to end.',
      'Agents that handle follow-ups, approvals, and hand-offs.',
      'Answers from your own data, in plain language, when you need them.',
    ],
    tools: [
      { name: 'v0', src: '/tools/genai/snake.png' },
      { name: 'Mistral', src: '/tools/genai/mistral.png' },
      { name: 'Jasper', src: '/tools/genai/jasper.png' },
      { name: 'GPT-4', src: '/tools/genai/chatgpt4.png' },
      { name: 'Claude', src: '/tools/genai/claude.png' },
    ],
  },
  founder: {
    id: 'founder',
    label: 'Founder',
    before: [
      'Ideas on hold until you find a technical co-founder.',
      'Months and a real budget before a first version exists.',
      'Support, sales, and ops all landing on your desk.',
    ],
    after: [
      'A working product you build and ship yourself.',
      'An MVP in front of users in weeks, while the idea is fresh.',
      'Agents covering support and ops, so you can focus on growth.',
    ],
    tools: [
      { name: 'Writer', src: '/tools/genai/writer.png' },
      { name: 'n8n', src: '/tools/genai/n8n.png' },
      { name: 'v0', src: '/tools/genai/snake.png' },
      { name: 'Mistral', src: '/tools/genai/mistral.png' },
      { name: 'Jasper', src: '/tools/genai/jasper.png' },
    ],
  },
};

const subCategoryTags = [
  'Writing code',
  'Interface design',
  'Visuals and social',
  'Automation and ops',
  'Backend + database',
  'Video and podcasts',
  'Meetings and notes',
  'Customer support',
  'Research and analysis',
  'Prototype to working app',
  'Marketing copy',
  'Pitch decks',
];

export function GenAIWorkChangesSection() {
  const [activeRole, setActiveRole] = useState<RoleKey>('pm');
  const activeContent = roleData[activeRole];

  return (
    <section className="bg-black text-white pt-20 sm:pt-28 pb-20 relative overflow-hidden">
      {/* Layout constrained within the dual vertical guide lines */}
      <div className="max-w-[1440px] mx-auto border-x border-[#232328] relative">
        
        {/* Section Heading */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="font-editorial text-[38px] sm:text-[48px] md:text-[54px] text-white font-normal leading-tight tracking-tight">
            How your work changes
          </h2>
        </div>

        {/* 5 Role Tabs Header */}
        <div className="grid grid-cols-5 border-t border-b border-[#232328] bg-black">
          {(['pm', 'marketing', 'design', 'business', 'founder'] as RoleKey[]).map((key) => {
            const role = roleData[key];
            const isActive = activeRole === key;
            return (
              <button
                key={key}
                onClick={() => setActiveRole(key)}
                className={`py-4 sm:py-5 px-2 sm:px-4 text-center text-xs sm:text-sm font-medium transition-all relative border-r last:border-r-0 border-[#232328] cursor-pointer ${
                  isActive
                    ? 'text-white bg-[#0e0e13]'
                    : 'text-zinc-500 hover:text-zinc-300 bg-black'
                }`}
              >
                {role.label}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-purple-500" />
                )}
              </button>
            );
          })}
        </div>

        {/* 2-Column Comparison Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#232328] min-h-[380px]">
          
          {/* Left Column: BEFORE */}
          <div className="p-8 sm:p-12 md:border-r border-b md:border-b-0 border-[#232328] bg-[#0c0c0e] flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded bg-[#202026] text-zinc-400 text-[11px] font-semibold tracking-wider uppercase mb-8">
                BEFORE
              </div>

              <ul className="space-y-6">
                {activeContent.before.map((point, index) => (
                  <li key={index} className="flex items-start gap-3.5 text-zinc-300 text-sm sm:text-base font-light leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 mt-2 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: AFTER */}
          <div className="p-8 sm:p-12 bg-gradient-to-br from-[#1d0e38] via-[#140826] to-[#0d0519] border-t md:border-t-0 border-[#3b1968]/40 flex flex-col justify-between relative overflow-hidden">
            {/* Ambient Purple Radial Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="inline-block px-3 py-1 rounded bg-purple-600 text-white text-[11px] font-semibold tracking-wider uppercase mb-8 shadow-sm">
                AFTER
              </div>

              <ul className="space-y-6">
                {activeContent.after.map((point, index) => (
                  <li key={index} className="flex items-start gap-3.5 text-white text-sm sm:text-base font-normal leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Sub-Category Tags & Tool Icons Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between border-b border-[#232328] bg-[#09090b] px-4 sm:px-6 py-4 gap-4">
          
          {/* Left: Scrollable Sub-Category Tags */}
          <div className="flex items-center gap-2 overflow-x-auto w-full lg:w-auto scrollbar-none py-1">
            {subCategoryTags.map((tag, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 rounded-md border border-zinc-800 bg-zinc-950/60 text-zinc-400 text-xs font-light whitespace-nowrap hover:border-zinc-700 hover:text-zinc-200 transition-colors select-none"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Right: 5 Tool Squircles for Active Role */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 self-end lg:self-center">
            {activeContent.tools.map((tool, idx) => (
              <div
                key={idx}
                className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden border border-white/10 bg-zinc-900 shadow-md hover:scale-105 transition-transform"
                title={tool.name}
              >
                <Image
                  src={tool.src}
                  alt={tool.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
