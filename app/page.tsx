'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useApplyModal } from '@/components/ApplyModalContext';
import { MentorMarquee } from '@/components/MentorMarquee';
import { 
  ArrowRight, 
  Sparkles, 
  Star, 
  CheckCircle2, 
  Users, 
  TrendingUp, 
  Building, 
  Code, 
  Cpu, 
  Layers, 
  Calendar, 
  Clock, 
  Play, 
  ExternalLink,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

export default function HomePage() {
  const { openModal } = useApplyModal();

  return (
    <div className="relative overflow-hidden">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        {/* Glowing background blurs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-brand-500/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-electric/10 rounded-full blur-[90px] pointer-events-none" />

        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-gray-300 mb-8 backdrop-blur-md hover:border-brand-500/40 transition-colors">
          <span className="flex h-2 w-2 rounded-full bg-brand-400 animate-pulse" />
          <span className="text-brand-300 font-semibold">New Cohorts 2026:</span>
          <span>Limited Admissions Open for Live Batches</span>
          <ArrowRight className="w-3.5 h-3.5 text-gray-400" />
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-[1.1] mb-6">
          Every era gets its builders. <br className="hidden sm:inline" />
          <span className="text-gradient-purple">Now is your turn.</span>
        </h1>

        {/* Subhead */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Airtribe is a learning community that helps ambitious engineers and PMs become confident, AI-fluent product builders through 360° cohort learning.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={() => openModal()}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-brand-500 hover:bg-brand-600 transition-all duration-200 shadow-xl shadow-brand-500/30 flex items-center justify-center gap-2 text-base active:scale-95"
          >
            <Sparkles className="w-5 h-5 text-brand-200" />
            Apply For Next Cohort
          </button>

          <Link
            href="/courses"
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-gray-200 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-200 flex items-center justify-center gap-2 text-base"
          >
            Explore All Programs
            <ArrowRight className="w-4 h-4 text-gray-400" />
          </Link>
        </div>

        {/* Social Proof / Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto pt-6 border-t border-white/10">
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">15,000+</div>
            <div className="text-xs sm:text-sm text-gray-400 mt-1">Builders Upskilled</div>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="text-2xl sm:text-3xl font-extrabold text-brand-400">83%</div>
            <div className="text-xs sm:text-sm text-gray-400 mt-1">Average Salary Hike</div>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="text-2xl sm:text-3xl font-extrabold text-white">500+</div>
            <div className="text-xs sm:text-sm text-gray-400 mt-1">Hiring Tech Partners</div>
          </div>
          <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 flex items-center justify-center gap-1">
              4.9 <Star className="w-4 h-4 fill-emerald-400 text-emerald-400" />
            </div>
            <div className="text-xs sm:text-sm text-gray-400 mt-1">Alumni Review Score</div>
          </div>
        </div>

      </section>

      {/* MARQUEE */}
      <MentorMarquee />

      {/* THREE TRACKS SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-3 block">
            Flagship Learning Tracks
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Three tracks. One kind of builder.
          </h2>
          <p className="text-base sm:text-lg text-gray-400">
            Tailored cohort curricula designed and taught by senior practitioners who build high-scale products every single day.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* TRACK 1: GENAI */}
          <div className="glass-card p-8 rounded-2xl relative flex flex-col justify-between group">
            <div className="absolute top-4 right-4">
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                Most Popular
              </span>
            </div>

            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-6 border border-purple-500/20">
                <Sparkles className="w-6 h-6" />
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-2">
                <Clock className="w-3.5 h-3.5" /> 8 Weeks Live • Weekend Cohort
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-300 transition-colors">
                The GenAI Launchpad
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Master LLMs, Prompt Engineering, Vector Databases, RAG architectures, and build autonomous AI agents from scratch into production.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">What you will master:</div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>LangChain, LlamaIndex & DSPy</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>Hybrid RAG, Qdrant & Pinecone indexing</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                  <span>Multi-agent workflows with CrewAI</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
              <Link 
                href="/courses/generative-ai-launchpad"
                className="text-sm font-semibold text-gray-300 hover:text-white flex items-center gap-1 group/btn"
              >
                <span>Curriculum Details</span>
                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={() => openModal('The GenAI Launchpad')}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-brand-500 hover:bg-brand-600 transition-colors"
              >
                Apply Now
              </button>
            </div>
          </div>

          {/* TRACK 2: SOFTWARE ENGINEERING */}
          <div className="glass-card p-8 rounded-2xl relative flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6 border border-blue-500/20">
                <Code className="w-6 h-6" />
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-2">
                <Clock className="w-3.5 h-3.5" /> 16 Weeks Live • Intensive
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-300 transition-colors">
                AI-First Software Engineering
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Go deep into backend architecture, distributed systems, high concurrency, Docker, Kubernetes, and AI-accelerated dev workflows.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">What you will master:</div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>System design for millions of QPS</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Redis caching, Kafka streaming & sharding</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Production microservices deployment</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
              <Link 
                href="/courses/backend-engineering-launchpad"
                className="text-sm font-semibold text-gray-300 hover:text-white flex items-center gap-1 group/btn"
              >
                <span>Curriculum Details</span>
                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={() => openModal('AI-First Software Engineering')}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 transition-colors"
              >
                Apply Now
              </button>
            </div>
          </div>

          {/* TRACK 3: PRODUCT MANAGEMENT */}
          <div className="glass-card p-8 rounded-2xl relative flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6 border border-emerald-500/20">
                <Layers className="w-6 h-6" />
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-2">
                <Clock className="w-3.5 h-3.5" /> 12 Weeks Live • Mentored
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-300 transition-colors">
                AI-First Product Management
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed mb-6">
                Learn modern product leadership from 0 to 1 and scale. Build AI PRDs, run rapid user interviews, design metrics, and launch real products.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">What you will master:</div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Product strategy & AI product definition</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Retention curves, unit economics & analytics</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Capstone presentation to VP of Product</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
              <Link 
                href="/courses/product-management-launchpad"
                className="text-sm font-semibold text-gray-300 hover:text-white flex items-center gap-1 group/btn"
              >
                <span>Curriculum Details</span>
                <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={() => openModal('AI-First Product Management')}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors"
              >
                Apply Now
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* THE AIRTRIBE WAY */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-2 block">
            Why Cohort-Based Learning?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            The Airtribe Way: You won’t build alone
          </h2>
          <p className="text-gray-400 text-sm sm:text-base">
            Self-paced video courses have a 5% completion rate. Airtribe cohorts have a 92% completion rate because of accountability, live feedback, and real peers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-dark-850 border border-white/5 hover:border-brand-500/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-brand-500/10 text-brand-400 flex items-center justify-center mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Live Interactive Sessions</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              No pre-recorded monologue. Participate in live problem-solving teardowns and Q&A with tech leaders.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-dark-850 border border-white/5 hover:border-brand-500/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-electric/10 text-electric flex items-center justify-center mb-4">
              <Code className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Hands-on Capstones</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Ship production-ready codebases, AI microservices, and PRDs that prove your capability to hiring managers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-dark-850 border border-white/5 hover:border-brand-500/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">1:1 Career Mentorship</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Get detailed resume reviews, mock interviews, and career transition roadmaps from senior practitioners.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-dark-850 border border-white/5 hover:border-brand-500/30 transition-all">
            <div className="w-10 h-10 rounded-lg bg-coral/10 text-coral flex items-center justify-center mb-4">
              <Building className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">500+ Hiring Network</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Direct referrals to top startups and unicorns seeking verified, pre-screened cohort graduates.
            </p>
          </div>
        </div>
      </section>

      {/* WALL OF LOVE PREVIEW */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-2 block">
              Alumni Outcomes
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Real stories from the tribe
            </h2>
          </div>
          <Link
            href="/reviews"
            className="mt-4 md:mt-0 text-sm font-semibold text-brand-400 hover:text-brand-300 flex items-center gap-1"
          >
            Read all 2,400+ reviews &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 rounded-2xl bg-dark-850 border border-white/5 hover:border-white/10 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-brand-500 to-purple-400 flex items-center justify-center text-white font-bold text-lg">
                KB
              </div>
              <div>
                <h5 className="font-bold text-white text-sm">Kanupriya Bhatt</h5>
                <p className="text-xs text-gray-400">APM &rarr; Senior Product Manager</p>
              </div>
            </div>
            <div className="inline-block px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-3">
              Swiggy • 115% Salary Hike
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              &quot;Airtribe&apos;s product management cohort transformed how I approach PRDs and product execution. The live feedback from directors at top tech companies was worth 10x the course fee.&quot;
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-dark-850 border border-white/5 hover:border-white/10 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold text-lg">
                CP
              </div>
              <div>
                <h5 className="font-bold text-white text-sm">Chinmay Pathak</h5>
                <p className="text-xs text-gray-400">Software Engineer &rarr; Lead Architect</p>
              </div>
            </div>
            <div className="inline-block px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-3">
              Razorpay • 140% Salary Hike
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              &quot;The distributed backend and system design sessions broke down complex concepts that I struggled with for years. The capstone project directly helped me clear the staff engineering round.&quot;
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-dark-850 border border-white/5 hover:border-white/10 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-pink-400 flex items-center justify-center text-white font-bold text-lg">
                US
              </div>
              <div>
                <h5 className="font-bold text-white text-sm">Umesh Sharma</h5>
                <p className="text-xs text-gray-400">Backend Dev &rarr; AI Systems Engineer</p>
              </div>
            </div>
            <div className="inline-block px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-xs font-semibold mb-3">
              Atlassian • 85% Salary Hike
            </div>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              &quot;The GenAI cohort gave me true hands-on skills with vector embeddings, autonomous agents, and RAG. I went from being curious about AI to deploying production AI microservices.&quot;
            </p>
          </div>

        </div>
      </section>

      {/* FOUNDERS' NOTE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="glass-card p-8 sm:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-2 block">
              Founders&apos; Note
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              We built Airtribe because real learning happens in tribes.
            </h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
              In tech, the best ideas don&apos;t come from watching solo tutorial videos on 2x speed. They come from debating architecture trade-offs with peers, receiving candid code reviews from senior engineers, and shipping real products under pressure.
            </p>
            <div className="flex items-center gap-4">
              <div>
                <div className="font-bold text-white text-sm">Navneet Sharma & Gaurav Tripathi</div>
                <div className="text-xs text-gray-400">Founders, Airtribe</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STICKY BOTTOM CALL TO ACTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Ready to become an AI-fluent builder?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 mb-8">
            Admissions for the upcoming 2026 cohort close once 40 seats are filled. Apply now to secure your spot and start your prep work.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openModal()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-brand-500 hover:bg-brand-600 transition-all shadow-xl shadow-brand-500/25 active:scale-95"
            >
              Apply For Next Cohort
            </button>
            <Link
              href="/contact-us"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-gray-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              Talk to an Advisor
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
