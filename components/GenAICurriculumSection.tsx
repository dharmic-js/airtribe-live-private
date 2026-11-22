'use client';

import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface ModuleItem {
  number: string;
  title: string;
  desc: string;
}

interface PhaseData {
  id: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  countBadge: string;
  modules: ModuleItem[];
}

const curriculumPhases: PhaseData[] = [
  {
    id: 'phase-1',
    tabLabel: 'Phase 1',
    title: 'Phase 1: AI foundations',
    subtitle: 'Build the right foundation to become an AI-fluent builder',
    countBadge: '[ 3 MODULES ]',
    modules: [
      {
        number: 'MODULE 01',
        title: 'AI fluency & prompting',
        desc: 'How LLMs work, choosing GPT, Claude or Gemini, and the TCREF prompting framework',
      },
      {
        number: 'MODULE 02',
        title: 'AI workflows & productivity',
        desc: 'AI for research, writing and meetings, plus your own Custom GPT or Claude Project',
      },
      {
        number: 'MODULE 03',
        title: 'AI agents',
        desc: 'When to use a prompt, a workflow or an agent, and shipping your first agent',
      },
    ],
  },
  {
    id: 'phase-2',
    tabLabel: 'Phase 2',
    title: 'Phase 2: Automation mastery',
    subtitle: 'Automate real work with n8n, AI agents and your own data',
    countBadge: '[ 3 MODULES ]',
    modules: [
      {
        number: 'MODULE 04',
        title: 'Workflow automation with n8n',
        desc: 'Nodes, triggers and multi-step AI workflows, with error handling and approval gates',
      },
      {
        number: 'MODULE 05',
        title: 'AI agents for business',
        desc: 'Agents that take action, remember past interactions and handle voice calls',
      },
      {
        number: 'MODULE 06',
        title: 'Data analysis with AI',
        desc: 'Ask your data questions in plain English, get charts from a CSV, build AI dashboards',
      },
    ],
  },
  {
    id: 'phase-3',
    tabLabel: 'Phase 3',
    title: 'Phase 3: Product building',
    subtitle: 'Go from idea to a working, branded AI product with a GTM plan',
    countBadge: '[ 5 MODULES ]',
    modules: [
      {
        number: 'MODULE 07',
        title: 'Tech for builders',
        desc: 'How web apps work, deploying with GitHub and Vercel, and debugging with AI',
      },
      {
        number: 'MODULE 08',
        title: 'AI product thinking & vibe coding',
        desc: 'Scope your MVP, then build it with Replit, Cursor and Claude Code',
      },
      {
        number: 'MODULE 09',
        title: 'Building AI-powered products',
        desc: 'Add chatbots, AI search and answers from your own data through AI APIs',
      },
      {
        number: 'MODULE 10',
        title: 'Brand identity & AI-powered branding',
        desc: 'Brand core, mood board, brand book, and AI image and video campaign assets',
      },
      {
        number: 'MODULE 11',
        title: 'GTM & growth',
        desc: 'Positioning, a content engine, AI ad creatives and demos, and GEO',
      },
    ],
  },
  {
    id: 'phase-4',
    tabLabel: 'Phase 4',
    title: 'Phase 4: Capstone & demo day',
    subtitle: 'Ship your build to real users and present it live',
    countBadge: '[ 4 MODULES ]',
    modules: [
      {
        number: 'MODULE 12–13',
        title: 'Capstone build',
        desc: 'Launch an MVP, an automation system or an internal tool that people actually use',
      },
      {
        number: 'MODULE 14',
        title: 'Adoption sprint',
        desc: 'Take your build to real users, collect usage data and iterate on what you see',
      },
      {
        number: 'MODULE 15',
        title: 'Demo day',
        desc: 'Present your build live to the cohort and industry leaders',
      },
    ],
  },
  {
    id: 'elective',
    tabLabel: 'Elective',
    title: 'Elective: Automate end-to-end marketing',
    subtitle: "Post-capstone. Build and run a brand's entire marketing engine: 6 AI engines, one person",
    countBadge: '[ 6 SESSIONS ]',
    modules: [
      {
        number: 'SESSION 01',
        title: 'Content & creative engine',
        desc: 'Ad copy, image and audio pipeline, built for AI-discoverability',
      },
      {
        number: 'SESSION 02',
        title: 'Performance & paid-acquisition engine',
        desc: 'A running paid-ads engine with a creative-testing loop',
      },
      {
        number: 'SESSION 03',
        title: 'Social media manager',
        desc: 'An agent running a week of social on autopilot',
      },
      {
        number: 'SESSION 04',
        title: 'Lead generation engine',
        desc: 'Live lead capture plus an intent-scoring model',
      },
      {
        number: 'SESSION 05',
        title: 'Nurturing engine',
        desc: 'Behaviour-triggered email and WhatsApp flows plus a follow-up agent',
      },
      {
        number: 'SESSION 06',
        title: 'Connect & measure',
        desc: 'The connected engine plus a self-writing performance dashboard',
      },
    ],
  },
];

interface GenAICurriculumSectionProps {
  onOpenCurriculumModal: () => void;
}

export function GenAICurriculumSection({ onOpenCurriculumModal }: GenAICurriculumSectionProps) {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const activePhase = curriculumPhases[activePhaseIndex];

  return (
    <section className="bg-white text-zinc-900 pt-20 sm:pt-28 pb-0 relative overflow-hidden">
      {/* Layout constrained within the dual vertical guide lines */}
      <div className="max-w-[1440px] mx-auto border-x border-[#e5e7eb] relative">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <h2 className="font-editorial text-[38px] sm:text-[48px] md:text-[54px] text-zinc-950 font-normal leading-tight tracking-tight mb-2">
            Program curriculum
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 font-light">
            15 modules • 4 phases • no coding required
          </p>
        </div>

        {/* 2-Column Curriculum Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-t border-[#e5e7eb]">
          
          {/* Left Column: 5 Phase Tabs */}
          <div className="md:col-span-4 lg:col-span-3 border-r border-[#e5e7eb] flex flex-col bg-zinc-50/50">
            {curriculumPhases.map((phase, idx) => {
              const isActive = activePhaseIndex === idx;
              return (
                <button
                  key={phase.id}
                  onClick={() => setActivePhaseIndex(idx)}
                  className={`w-full text-left transition-all border-b border-[#e5e7eb] cursor-pointer ${
                    isActive
                      ? 'bg-[#121214] text-white p-6 sm:p-7 shadow-lg relative'
                      : 'p-4 sm:p-5 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100/80'
                  }`}
                >
                  {isActive ? (
                    <div>
                      <h4 className="font-editorial text-lg sm:text-xl font-normal leading-tight text-white mb-2">
                        {phase.title}
                      </h4>
                      <p className="text-xs text-zinc-400 font-light leading-relaxed mb-4">
                        {phase.subtitle}
                      </p>
                      <span className="inline-block text-[10px] tracking-wider uppercase font-semibold text-zinc-400 border border-zinc-700 rounded px-2 py-0.5">
                        {phase.countBadge}
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between text-xs sm:text-sm font-medium">
                      <span>{phase.tabLabel}</span>
                      <ChevronRight className="w-4 h-4 text-zinc-400" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Module Cards Grid for Active Phase */}
          <div className="md:col-span-8 lg:col-span-9 p-6 sm:p-10 lg:p-12 bg-white">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {activePhase.modules.map((mod, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-xl border border-zinc-200 bg-zinc-50/40 hover:border-zinc-300 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <span className="block text-[11px] font-semibold tracking-wider text-zinc-400 uppercase mb-2">
                      {mod.number}
                    </span>
                    <h5 className="font-editorial text-xl sm:text-2xl text-zinc-950 font-normal leading-tight mb-3">
                      {mod.title}
                    </h5>
                    <p className="text-xs sm:text-[13px] text-zinc-600 font-light leading-relaxed">
                      {mod.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Full-Width Vibrant Purple Banner */}
        <div className="bg-[#7c3aed] text-white px-6 sm:px-10 py-5 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-purple-600">
          <span className="font-editorial text-xl sm:text-2xl font-normal tracking-tight text-center sm:text-left">
            Want to dive deeper into the details?
          </span>

          <button
            onClick={onOpenCurriculumModal}
            className="px-5 py-2.5 rounded-lg bg-white text-zinc-950 text-xs sm:text-sm font-semibold hover:bg-zinc-100 transition-colors flex items-center gap-1.5 shadow-md cursor-pointer whitespace-nowrap"
          >
            <span>Get the full curriculum</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
