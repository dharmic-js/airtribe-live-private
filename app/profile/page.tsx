'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useUser } from '@/components/UserContext';
import {
  CheckCircle2,
  Mail,
  Phone,
  GraduationCap,
  Calendar,
  ExternalLink,
  BookOpen,
  Users,
  Award,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export default function ProfilePage() {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState<'programs' | 'schedule' | 'community'>('programs');

  return (
    <div className="min-h-screen bg-black text-white relative font-sans">
      
      {/* 1. Profile Header Section */}
      <section className="relative w-full border-b border-[#232328] overflow-hidden pt-12 sm:pt-16 pb-12">
        
        {/* Ambient Gradient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[480px] bg-gradient-to-tr from-purple-900/15 via-indigo-900/15 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Layout strictly within the 1440px uniform borders */}
        <div className="max-w-[1440px] mx-auto border-x border-[#232328] relative px-4 sm:px-8 lg:px-12">
          
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#232328]">
            
            {/* Left: Avatar + Identity */}
            <div className="flex items-center gap-6">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-500 flex items-center justify-center text-2xl sm:text-3xl font-bold text-white shadow-2xl ring-2 ring-purple-500/40 shrink-0">
                {user.initials}
                <span className="absolute bottom-1 right-1 w-5 h-5 bg-emerald-500 border-3 border-black rounded-full" />
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2 flex-wrap">
                  <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
                    {user.name}
                  </h1>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Signed-Up Learner
                  </span>
                </div>
                <p className="text-zinc-400 text-sm sm:text-base font-light">
                  {user.role} &bull; <span className="text-white font-medium">{user.institute}</span>
                </p>
              </div>
            </div>

            {/* Right: Quick Stats Pills */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="px-4 py-3 rounded-2xl bg-[#0c0c10] border border-white/5 flex flex-col">
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Cohort Status</span>
                <span className="text-sm font-semibold text-purple-400">Enrolled & Active</span>
              </div>
              <div className="px-4 py-3 rounded-2xl bg-[#0c0c10] border border-white/5 flex flex-col">
                <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Member Since</span>
                <span className="text-sm font-semibold text-white">{user.memberSince}</span>
              </div>
            </div>

          </div>

          {/* Contact Details Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8">
            <div className="p-4 rounded-xl bg-[#0d0d12] border border-white/5 flex items-center gap-3">
              <Mail className="w-5 h-5 text-purple-400 shrink-0" />
              <div className="min-w-0">
                <span className="block text-[11px] text-zinc-500 uppercase">Email Address</span>
                <span className="text-xs sm:text-sm text-zinc-200 font-mono truncate block select-all">
                  {user.email}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0d0d12] border border-white/5 flex items-center gap-3">
              <Phone className="w-5 h-5 text-purple-400 shrink-0" />
              <div className="min-w-0">
                <span className="block text-[11px] text-zinc-500 uppercase">Phone / WhatsApp</span>
                <span className="text-xs sm:text-sm text-zinc-200 font-mono select-all">
                  {user.phone}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0d0d12] border border-white/5 flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-purple-400 shrink-0" />
              <div className="min-w-0">
                <span className="block text-[11px] text-zinc-500 uppercase">Institution</span>
                <span className="text-xs sm:text-sm text-zinc-200 truncate block">
                  {user.institute}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#0d0d12] border border-white/5 flex items-center gap-3">
              <Award className="w-5 h-5 text-purple-400 shrink-0" />
              <div className="min-w-0">
                <span className="block text-[11px] text-zinc-500 uppercase">Credentials</span>
                <span className="text-xs sm:text-sm text-zinc-200">
                  3 Cohorts Registered
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Main Dashboard Content with Uniform Borders */}
      <section className="w-full py-16 sm:py-24">
        <div className="max-w-[1440px] mx-auto border-x border-[#232328] relative px-4 sm:px-8 lg:px-12">
          
          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-[#232328] pb-4 mb-10 overflow-x-auto">
            <button
              onClick={() => setActiveTab('programs')}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'programs'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
            >
              My Enrolled Cohorts
            </button>
            <button
              onClick={() => setActiveTab('schedule')}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'schedule'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
            >
              Upcoming Live Sessions
            </button>
            <button
              onClick={() => setActiveTab('community')}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'community'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-900'
              }`}
            >
              Tribe Community & Perks
            </button>
          </div>

          {/* TAB 1: Enrolled Cohorts */}
          {activeTab === 'programs' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-editorial text-2xl sm:text-3xl text-white font-normal">
                    Enrolled Programs
                  </h2>
                  <p className="text-zinc-400 text-sm mt-1">
                    Direct access to your syllabus, masterclasses, and project repos.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {user.enrolledCourses.map((course) => (
                  <div
                    key={course.id}
                    className="p-6 rounded-2xl bg-[#0d0d12] border border-[#232328] hover:border-purple-500/40 transition-all flex flex-col justify-between group shadow-xl"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/30">
                          {course.badge}
                        </span>
                        <span className="text-xs text-zinc-500 font-mono">Starts {course.startDate}</span>
                      </div>

                      <h3 className="font-editorial text-xl sm:text-2xl text-white font-normal group-hover:text-purple-300 transition-colors mb-2">
                        {course.title}
                      </h3>

                      <p className="text-xs text-zinc-400 leading-relaxed mb-6">
                        Live weekend sessions, production projects, and direct mentor feedback.
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                      <span className="text-xs text-emerald-400 font-medium flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {course.status}
                      </span>
                      <Link
                        href={course.href}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-white hover:text-purple-400 transition-colors"
                      >
                        <span>Open Program</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: Upcoming Sessions */}
          {activeTab === 'schedule' && (
            <div className="p-8 rounded-2xl bg-[#0d0d12] border border-[#232328]">
              <h2 className="font-editorial text-2xl sm:text-3xl text-white font-normal mb-2">
                Live Cohort Schedule
              </h2>
              <p className="text-zinc-400 text-sm mb-8">
                Weekend live architecture workshops & office hours for Dhruv Malhotra.
              </p>

              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-black/60 border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30 flex items-center justify-center font-bold">
                      SAT
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-white">
                        GenAI Architecture: Multi-Agent Systems with n8n
                      </h4>
                      <p className="text-xs text-zinc-400">Saturday &bull; 11:00 AM - 1:00 PM IST</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-medium border border-purple-500/30">
                    Live Workshop
                  </span>
                </div>

                <div className="p-5 rounded-xl bg-black/60 border border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-bold">
                      SUN
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-white">
                        RAG Systems Evaluation & Production Guardrails
                      </h4>
                      <p className="text-xs text-zinc-400">Sunday &bull; 11:00 AM - 1:00 PM IST</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-medium border border-indigo-500/30">
                    Masterclass
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Community & Perks */}
          {activeTab === 'community' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[#0d0d12] border border-[#232328]">
                <Users className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="font-editorial text-2xl text-white font-normal mb-2">
                  Private Discord & Slack Tribe
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  Dhruv is connected with 600+ peers, tech leads, and founders across top product companies.
                </p>
                <a
                  href="https://lp.airtribe.live/community"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-zinc-950 text-xs font-semibold hover:bg-zinc-200 transition-colors"
                >
                  <span>Open Community Hub</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="p-6 rounded-2xl bg-[#0d0d12] border border-[#232328]">
                <Sparkles className="w-8 h-8 text-indigo-400 mb-4" />
                <h3 className="font-editorial text-2xl text-white font-normal mb-2">
                  ₹50,000+ Included Toolstack Perks
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  Direct API credits, n8n licenses, OpenAI/Claude access, and cloud compute infra activated.
                </p>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Perks Activated for Dhruv Malhotra
                </span>
              </div>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
