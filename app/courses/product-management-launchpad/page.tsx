'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApplyModal } from '@/components/ApplyModalContext';
import { 
  Layers, 
  Clock, 
  Users, 
  Star, 
  ChevronDown, 
  ChevronUp, 
  Download, 
  Target, 
  BarChart3, 
  Compass, 
  Presentation, 
  Briefcase 
} from 'lucide-react';

const syllabus = [
  {
    week: 'Weeks 1-2',
    title: 'Product Discovery, Problem Framing & AI Market Sizing',
    desc: 'Conducting rapid customer discovery interviews, generating AI user personas, crafting opportunity solution trees, and TAM/SAM/SOM market modeling.',
  },
  {
    week: 'Weeks 3-4',
    title: 'Modern AI PRD Authoring & Spec Writing',
    desc: 'Writing structured Product Requirement Documents (PRDs) that incorporate machine learning capabilities, guardrails, fallback behaviors, and edge cases.',
  },
  {
    week: 'Weeks 5-6',
    title: 'Product Metrics, North Star Frameworks & Analytics',
    desc: 'Instrumenting Amplitude/Mixpanel tracking funnels, defining L1/L2 north star metrics, retention cohort analysis, churn curves, and unit economics.',
  },
  {
    week: 'Weeks 7-8',
    title: 'Prioritization Frameworks & Working with Engineering / Design',
    desc: 'RICE, Kano, and Eisenhower prioritization models. Managing sprint trade-offs, engineering tech debt negotiations, and running cross-functional retrospectives.',
  },
  {
    week: 'Weeks 9-10',
    title: 'Growth Loops, Viral Mechanics & Monetization Strategy',
    desc: 'Product-led growth (PLG) flywheels, freemium vs reverse-trial models, pricing experiments, self-serve onboarding optimizations, and expansion revenue loops.',
  },
  {
    week: 'Weeks 11-12',
    title: 'Capstone Presentation to VPs of Product & PM Interview Prep',
    desc: 'Presenting your complete 0-to-1 product strategy deck to a jury of Product Directors. Comprehensive PM interview preparation for product sense, execution, and behavioral rounds.',
  },
];

export default function ProductManagementPage() {
  const { openModal } = useApplyModal();
  const [openWeek, setOpenWeek] = useState<number | null>(0);

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Hero */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-xs sm:text-sm font-semibold mb-6">
          <Layers className="w-4 h-4 text-emerald-400" />
          Flagship Product Management Track
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
          AI-First Product Management
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
          Build and launch products people love. Master product discovery, AI PRDs, retention analytics, and leadership frameworks alongside Product Directors from Swiggy, Flipkart, and Razorpay.
        </p>

        {/* Cohort Meta Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-gray-300 mb-10">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-850 border border-white/5">
            <Clock className="w-4 h-4 text-emerald-400" />
            <span>12 Weeks (Weekend Cohort)</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-850 border border-white/5">
            <Users className="w-4 h-4 text-emerald-400" />
            <span>1:1 Mentor Office Hours</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-850 border border-white/5">
            <Star className="w-4 h-4 text-emerald-400 fill-emerald-400" />
            <span>4.89/5 Rating (1,450+ reviews)</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => openModal('AI-First Product Management')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-500/30 active:scale-95 text-base"
          >
            Apply for Dec 2026 Batch
          </button>
          <button
            onClick={() => openModal('AI-First Product Management - Syllabus')}
            className="w-full sm:w-auto px-6 py-4 rounded-xl font-semibold text-gray-300 bg-dark-850 hover:bg-dark-800 border border-white/10 transition-colors flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4 text-gray-400" />
            Download Syllabus (PDF)
          </button>
        </div>
      </div>

      {/* Tech & Tools */}
      <div className="p-6 rounded-2xl bg-dark-850 border border-white/5 max-w-5xl mx-auto mb-20 text-center">
        <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
          Product Tools & Frameworks Mastered
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-medium text-gray-200">
          {['Figma', 'Amplitude', 'Mixpanel', 'Jira / Linear', 'Postman', 'SQL for PMs', 'Notion PRD Templates', 'A/B Testing Tools', 'Claude & ChatGPT for PMs'].map((t, idx) => (
            <span key={idx} className="px-3.5 py-1.5 rounded-lg bg-dark-900 border border-white/10 text-gray-300">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Syllabus */}
      <div className="max-w-4xl mx-auto mb-24">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2 block">
            12-Week Curriculum
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            From Customer Discovery to Executive Product Pitch
          </h2>
        </div>

        <div className="space-y-4">
          {syllabus.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-white/10 bg-dark-850 overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenWeek(openWeek === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02]"
              >
                <div className="flex items-center gap-4">
                  <span className="px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-300 text-xs font-bold shrink-0">
                    {item.week}
                  </span>
                  <span className="font-semibold text-white text-sm sm:text-base">
                    {item.title}
                  </span>
                </div>
                {openWeek === idx ? (
                  <ChevronUp className="w-5 h-5 text-emerald-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                )}
              </button>

              {openWeek === idx && (
                <div className="px-5 pb-5 pt-1 text-sm text-gray-400 leading-relaxed border-t border-white/5">
                  {item.desc}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="glass-card p-8 sm:p-12 rounded-3xl max-w-4xl mx-auto text-center border border-emerald-500/30 bg-gradient-to-b from-emerald-500/10 to-transparent">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
          Transition into Modern Product Management
        </h3>
        <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
          Join a curated peer group of high-potential aspiring and practicing PMs. Receive continuous mentorship on portfolio reviews, mocks, and job referrals.
        </p>
        <button
          onClick={() => openModal('AI-First Product Management')}
          className="px-8 py-4 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-500/30 active:scale-95"
        >
          Apply for Product Management Cohort
        </button>
      </div>

    </div>
  );
}
