'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApplyModal } from '@/components/ApplyModalContext';
import { 
  BookOpen, 
  Sparkles, 
  Code, 
  FileText, 
  HelpCircle, 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight,
  Download
} from 'lucide-react';

const freeTools = [
  {
    title: 'Curated DSA 450 Sheet',
    category: 'Coding & Algorithms',
    icon: Code,
    color: 'text-blue-400 bg-blue-500/10',
    description: 'The top 450 Data Structures & Algorithms problems categorized by topic (Arrays, Dynamic Programming, Graphs, Trees) with optimal time/space complexity notes.',
    linkText: 'Access DSA Sheet',
  },
  {
    title: 'AI Prompt & Engineering Playbook',
    category: 'Generative AI',
    icon: Sparkles,
    color: 'text-purple-400 bg-purple-500/10',
    description: '50+ tested system prompts for code generation, PRD formulation, RAG chunking tuning, and automated unit test authoring.',
    linkText: 'Download Playbook',
  },
  {
    title: 'Free Resume Review & ATS Score Checker',
    category: 'Career Tools',
    icon: FileText,
    color: 'text-emerald-400 bg-emerald-500/10',
    description: 'Get your tech resume evaluated against benchmarks from Google and Amazon. Identify formatting flaws and missing impact metrics.',
    linkText: 'Review My Resume',
  },
  {
    title: 'Interactive Tech Quiz Zone',
    category: 'Knowledge Check',
    icon: HelpCircle,
    color: 'text-coral bg-coral/10',
    description: 'Test your understanding of JavaScript event loops, SQL indexing, distributed system design, and AI fundamentals with instant scoring.',
    linkText: 'Start Free Quiz',
  },
];

export default function UpskillForFreePage() {
  const { openModal } = useApplyModal();
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const handleAction = (title: string) => {
    setDownloadSuccess(title);
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-3 block">
          Free Learning Hub
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Upskill For Free: Tools, Sheets & Playbooks
        </h1>
        <p className="text-base sm:text-lg text-gray-300">
          Curated resources to accelerate your interview preparation, test your technical skills, and upgrade your developer toolkit at zero cost.
        </p>
      </div>

      {downloadSuccess && (
        <div className="max-w-md mx-auto mb-8 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm text-center animate-in fade-in">
          🎉 Access granted for &quot;{downloadSuccess}&quot;! Check your downloads.
        </div>
      )}

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {freeTools.map((tool, idx) => {
          const Icon = tool.icon;
          return (
            <div
              key={idx}
              className="glass-card p-8 rounded-2xl border border-white/5 hover:border-brand-500/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-dark-800 text-gray-400 border border-white/5">
                    {tool.category}
                  </span>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${tool.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{tool.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-6">
                  {tool.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <button
                  onClick={() => handleAction(tool.title)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-dark-800 hover:bg-brand-500 hover:text-white border border-white/10 hover:border-brand-500 transition-all flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  {tool.linkText}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Cohort Upsell Banner */}
      <div className="glass-card p-8 sm:p-12 rounded-3xl max-w-4xl mx-auto text-center border border-brand-500/30 bg-gradient-to-b from-brand-500/10 to-transparent">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
          Want 10x Faster Progress with Live Mentorship?
        </h3>
        <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
          Free resources give you information. Live cohorts give you accountability, live code reviews, and direct job referrals from tech leaders.
        </p>
        <button
          onClick={() => openModal()}
          className="px-8 py-4 rounded-xl font-bold text-white bg-brand-500 hover:bg-brand-600 transition-all shadow-xl shadow-brand-500/30 active:scale-95"
        >
          Explore Live Cohorts
        </button>
      </div>

    </div>
  );
}
