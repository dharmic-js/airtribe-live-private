'use client';

import React from 'react';
import Link from 'next/link';
import { HeroSection } from '@/components/HeroSection';
import { useApplyModal } from '@/components/ApplyModalContext';
import { AirtribeButton } from '@/components/AirtribeButton';
import { 
  Sparkles, 
  Code, 
  Layers, 
  CheckCircle2, 
  Star, 
  ArrowRight, 
  Users, 
  TrendingUp, 
  Clock 
} from 'lucide-react';

export default function HomePage() {
  const { openModal } = useApplyModal();

  return (
    <div className="w-full bg-black text-white">
      
      {/* 1. EXACT HERO SECTION MATCHING SCREENSHOT */}
      <HeroSection />

      {/* 2. THREE TRACKS SECTION (ARCHITECTURAL GRID) */}
      <section id="programs" className="w-full border-b border-[#232328] bg-black py-20 sm:py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-14">
          
          <div className="mb-14 max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#a5b4fc] font-semibold mb-2 block">
              Flagship Cohorts
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white">
              Three tracks. <span className="font-editorial italic">One kind of builder.</span>
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-3">
              Cohort learning designed and led by senior practitioners who build high-scale products every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 border border-[#232328]">
            
            {/* Track 1: GenAI */}
            <div className="p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-[#232328] flex flex-col justify-between hover:bg-zinc-950/50 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">
                    8 Weeks Live • Weekend
                  </span>
                  <span className="text-[10px] bg-purple-500/10 text-[#c4b5fd] border border-purple-500/20 px-2 py-0.5 font-medium">
                    TRENDING
                  </span>
                </div>

                <h3 className="text-2xl font-medium text-white mb-3">
                  The GenAI launchpad
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-light">
                  Build agents and automations, turn an idea into a working AI product, and take it to real users with production RAG, LangGraph, and LoRA fine-tuning.
                </p>

                <div className="space-y-2 mb-8 text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#818cf8]" />
                    <span>Autonomous Multi-Agent loops with CrewAI</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#818cf8]" />
                    <span>Hybrid Vector Search & Reranking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#818cf8]" />
                    <span>OpenAI GPT-4o, Claude 3.5 & Ollama</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#232328] flex items-center justify-between">
                <Link href="/courses/generative-ai-launchpad" className="text-xs text-zinc-400 hover:text-white flex items-center gap-1">
                  View Syllabus &rarr;
                </Link>
                <AirtribeButton
                  text="Apply"
                  onClick={() => openModal('The GenAI Launchpad')}
                  className="!w-28 !h-10"
                />
              </div>
            </div>

            {/* Track 2: Software Engineering */}
            <div className="p-8 sm:p-10 border-b lg:border-b-0 lg:border-r border-[#232328] flex flex-col justify-between hover:bg-zinc-950/50 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">
                    16 Weeks Live • Intensive
                  </span>
                  <span className="text-[10px] bg-blue-500/10 text-blue-300 border border-blue-500/20 px-2 py-0.5 font-medium">
                    SYSTEM DESIGN
                  </span>
                </div>

                <h3 className="text-2xl font-medium text-white mb-3">
                  AI-first software engineering
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-light">
                  Go deep into distributed backends, high concurrency with Go and Node, Kafka streaming, Redis sharding, and real-world system design teardowns.
                </p>

                <div className="space-y-2 mb-8 text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400" />
                    <span>Architecting for 100k+ QPS workloads</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400" />
                    <span>Event-driven queues with Apache Kafka</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-400" />
                    <span>Container orchestration with Kubernetes</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#232328] flex items-center justify-between">
                <Link href="/courses/backend-engineering-launchpad" className="text-xs text-zinc-400 hover:text-white flex items-center gap-1">
                  View Syllabus &rarr;
                </Link>
                <AirtribeButton
                  text="Apply"
                  onClick={() => openModal('AI-First Software Engineering')}
                  className="!w-28 !h-10"
                />
              </div>
            </div>

            {/* Track 3: Product Management */}
            <div className="p-8 sm:p-10 flex flex-col justify-between hover:bg-zinc-950/50 transition-colors">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-semibold text-zinc-500 uppercase tracking-wider">
                    12 Weeks Live • Mentored
                  </span>
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 px-2 py-0.5 font-medium">
                    LEADERSHIP
                  </span>
                </div>

                <h3 className="text-2xl font-medium text-white mb-3">
                  AI-first product management
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-light">
                  Master modern 0-to-1 product strategy, user discovery, AI PRD authoring, north-star metrics, and present your product deck to VP mentors.
                </p>

                <div className="space-y-2 mb-8 text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400" />
                    <span>AI PRD generation & Opportunity Trees</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400" />
                    <span>Retention funnels & unit economics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-400" />
                    <span>Product-led growth flywheels</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-[#232328] flex items-center justify-between">
                <Link href="/courses/product-management-launchpad" className="text-xs text-zinc-400 hover:text-white flex items-center gap-1">
                  View Syllabus &rarr;
                </Link>
                <AirtribeButton
                  text="Apply"
                  onClick={() => openModal('AI-First Product Management')}
                  className="!w-28 !h-10"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. THE AIRTRIBE WAY */}
      <section className="w-full border-b border-[#232328] bg-black py-20 sm:py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-14">
          
          <div className="mb-14 max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-[#a5b4fc] font-semibold mb-2 block">
              The Airtribe Way
            </span>
            <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white">
              You won&apos;t build alone.
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base mt-3">
              We ditched passive pre-recorded videos. Here is how learning actually works when you want real mastery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-[#232328]">
            <div className="p-8 sm:p-10 border-b md:border-b-0 md:border-r border-[#232328]">
              <span className="text-xs font-mono text-zinc-500 mb-4 block">01 / FORMAT</span>
              <h4 className="text-xl font-medium text-white mb-2">Live interactive sessions</h4>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                Direct two-way discussions with engineering directors and VPs. Real problem teardowns, live architectural debates, and instant feedback.
              </p>
            </div>

            <div className="p-8 sm:p-10 border-b md:border-b-0 md:border-r border-[#232328]">
              <span className="text-xs font-mono text-zinc-500 mb-4 block">02 / EXECUTION</span>
              <h4 className="text-xl font-medium text-white mb-2">Hands-on capstones</h4>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                Ship production-ready codebases, autonomous agents, and structured PRDs that hiring managers inspect during final rounds.
              </p>
            </div>

            <div className="p-8 sm:p-10">
              <span className="text-xs font-mono text-zinc-500 mb-4 block">03 / COMMUNITY</span>
              <h4 className="text-xl font-medium text-white mb-2">Active builder tribe</h4>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">
                Lifelong access to an ambitious community of 15,000+ engineers, product managers, and founders across top unicorns.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. VERIFIED ALUMNI OUTCOMES */}
      <section className="w-full border-b border-[#232328] bg-black py-20 sm:py-24">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-14">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#a5b4fc] font-semibold mb-2 block">
                Alumni Outcomes
              </span>
              <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white">
                Real stories from the tribe.
              </h2>
            </div>
            <Link href="/reviews" className="mt-4 md:mt-0 text-sm text-[#a5b4fc] hover:underline">
              Read all verified stories &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-[#232328]">
            <div className="p-8 border-b md:border-b-0 md:border-r border-[#232328]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-zinc-800 text-white flex items-center justify-center font-bold text-sm">
                  KB
                </div>
                <div>
                  <div className="text-sm font-medium text-white">Kanupriya Bhatt</div>
                  <div className="text-xs text-zinc-400">APM &rarr; Senior PM @ Swiggy</div>
                </div>
              </div>
              <div className="text-xs text-emerald-400 font-mono mb-3">115% Salary Hike</div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light italic">
                &quot;Airtribe completely reshaped how I structure PRDs and metrics. The direct teardowns with directors helped me clear the Swiggy interview seamlessly.&quot;
              </p>
            </div>

            <div className="p-8 border-b md:border-b-0 md:border-r border-[#232328]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-zinc-800 text-white flex items-center justify-center font-bold text-sm">
                  CP
                </div>
                <div>
                  <div className="text-sm font-medium text-white">Chinmay Pathak</div>
                  <div className="text-xs text-zinc-400">Software Engg &rarr; Architect @ Razorpay</div>
                </div>
              </div>
              <div className="text-xs text-emerald-400 font-mono mb-3">140% Salary Hike</div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light italic">
                &quot;The distributed systems teardown on Kafka and Redis gave me the exact architectural intuition needed to pass staff engineering rounds.&quot;
              </p>
            </div>

            <div className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-zinc-800 text-white flex items-center justify-center font-bold text-sm">
                  US
                </div>
                <div>
                  <div className="text-sm font-medium text-white">Umesh Sharma</div>
                  <div className="text-xs text-zinc-400">Backend Dev &rarr; AI Systems @ Atlassian</div>
                </div>
              </div>
              <div className="text-xs text-emerald-400 font-mono mb-3">85% Salary Hike</div>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light italic">
                &quot;The GenAI Launchpad took me from basic prompt tinkering to building enterprise RAG and multi-agent loops. Truly practical.&quot;
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="w-full bg-black py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl sm:text-6xl font-normal text-white tracking-tight mb-4">
            Now is <span className="font-editorial italic">your turn.</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-lg mx-auto mb-8 font-light">
            Cohort admissions for the upcoming 2026 batches are now open. Reserve your seat and start your prep today.
          </p>
          <div className="flex justify-center">
            <AirtribeButton
              text="Apply for Cohort"
              onClick={() => openModal()}
              className="!w-44 !h-12"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
