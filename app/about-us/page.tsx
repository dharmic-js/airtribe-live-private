'use client';

import React from 'react';
import Link from 'next/link';
import { useApplyModal } from '@/components/ApplyModalContext';
import { Sparkles, Users, Target, Heart, Award, Shield, ArrowRight } from 'lucide-react';

export default function AboutUsPage() {
  const { openModal } = useApplyModal();

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto mb-20">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-3 block">
          Our Mission & Philosophy
        </span>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
          We&apos;re building the future of tech education.
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed">
          Airtribe is on a mission to empower ambitious engineers and product managers to become confident, AI-fluent builders through high-accountability cohort learning.
        </p>
      </div>

      {/* Story Section */}
      <div className="glass-card p-8 sm:p-12 rounded-3xl max-w-5xl mx-auto mb-20 border border-white/10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          Why we started Airtribe
        </h2>
        <div className="space-y-4 text-sm sm:text-base text-gray-300 leading-relaxed">
          <p>
            For the past decade, tech upskilling was broken. Students and professionals paid thousands of dollars for pre-recorded courses where less than 5% ever reached completion. Learners were left isolated with syntax tutorials that bore no resemblance to real production systems.
          </p>
          <p>
            We realized that true mastery doesn&apos;t come from watching another video at 2x speed. It happens when you are surrounded by ambitious peers who hold you accountable, when you write production code and get shredded in live code reviews by staff engineers, and when you debate trade-offs with people facing the same challenges.
          </p>
          <p>
            That is why we built <span className="text-white font-semibold">Airtribe</span>: live, highly curated, 360° cohort experiences taught exclusively by active practitioners building high-scale products today.
          </p>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-5xl mx-auto mb-24">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-2 block">
            What Drives Us
          </span>
          <h2 className="text-3xl font-extrabold text-white">Our Core Principles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-dark-850 border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-brand-500/10 text-brand-400 flex items-center justify-center mb-4">
              <Target className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Build, Don&apos;t Just Watch</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Theory is useless without execution. Every cohort revolves around shipping production-grade capstones and real-world PRDs.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-dark-850 border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Tribal Accountability</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              When you learn with a curated tribe of motivated engineers, you never drop off. Peers inspire you to push harder.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-dark-850 border border-white/5">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center mb-4">
              <Award className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-white mb-2">Active Practitioners Only</h4>
            <p className="text-xs text-gray-400 leading-relaxed">
              Our instructors aren&apos;t full-time academic lecturers. They are engineering directors and VPs actively leading teams at top tech firms.
            </p>
          </div>
        </div>
      </div>

      {/* Leadership & Backing */}
      <div className="max-w-4xl mx-auto text-center mb-20 p-8 rounded-2xl bg-dark-850 border border-white/5">
        <h3 className="text-2xl font-bold text-white mb-4">Backed by Leading Founders & Angels</h3>
        <p className="text-sm text-gray-400 max-w-xl mx-auto mb-6">
          Supported by visionary investors and angel operators from top tech unicorns including CRED, Swiggy, Blume Ventures, and Razorpay.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-gray-300">
          <span className="px-4 py-2 rounded-xl bg-dark-900 border border-white/10">Blume Ventures</span>
          <span className="px-4 py-2 rounded-xl bg-dark-900 border border-white/10">Top Tech Angels</span>
          <span className="px-4 py-2 rounded-xl bg-dark-900 border border-white/10">15,000+ Alumni Network</span>
        </div>
      </div>

      {/* CTA Box */}
      <div className="glass-card p-8 sm:p-12 rounded-3xl max-w-4xl mx-auto text-center border border-brand-500/30">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
          Join the Airtribe Movement
        </h3>
        <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
          Ready to level up your engineering or product career with an active community of builders?
        </p>
        <button
          onClick={() => openModal()}
          className="px-8 py-4 rounded-xl font-bold text-white bg-brand-500 hover:bg-brand-600 transition-all shadow-xl shadow-brand-500/30 active:scale-95"
        >
          Apply for Next Cohort
        </button>
      </div>

    </div>
  );
}

