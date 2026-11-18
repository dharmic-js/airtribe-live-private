'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApplyModal } from '@/components/ApplyModalContext';
import { Star, TrendingUp, CheckCircle, Quote, Sparkles, Building2, Play } from 'lucide-react';

const reviewsData = [
  {
    name: 'Kanupriya Bhatt',
    avatar: 'KB',
    track: 'Product Management',
    category: 'product',
    roleBefore: 'Associate Product Manager',
    roleAfter: 'Senior Product Manager @ Swiggy',
    hike: '115% Hike',
    stars: 5,
    quote: 'Airtribe completely reshaped my mental model of product execution. Learning how to formulate AI PRDs and analyze retention funnels from VPs of Product gave me the exact confidence I needed to crack Swiggy.',
  },
  {
    name: 'Chinmay Pathak',
    avatar: 'CP',
    track: 'Software Engineering',
    category: 'engineering',
    roleBefore: 'Backend Developer (2 YOE)',
    roleAfter: 'Lead Systems Architect @ Razorpay',
    hike: '140% Hike',
    stars: 5,
    quote: 'The distributed systems modules on Kafka, Redis sharding, and concurrency patterns were masterclasses in software craft. The capstone microservice directly impressed the hiring committee.',
  },
  {
    name: 'Umesh Sharma',
    avatar: 'US',
    track: 'Generative AI',
    category: 'genai',
    roleBefore: 'Fullstack Dev',
    roleAfter: 'AI Systems Engineer @ Atlassian',
    hike: '85% Hike',
    stars: 5,
    quote: 'Before Airtribe I only played around with ChatGPT prompts. In the GenAI Launchpad I built multi-agent orchestration loops with LangGraph and fine-tuned domain LoRA models. Pure gold.',
  },
  {
    name: 'Rohan Mehra',
    avatar: 'RM',
    track: 'Software Engineering',
    category: 'engineering',
    roleBefore: 'SDE 1 @ Startup',
    roleAfter: 'SDE 2 @ Microsoft',
    hike: '95% Hike',
    stars: 5,
    quote: 'The live problem teardowns every weekend forced me to think like a senior engineer. The 1:1 resume feedback and mock interviews completely removed my interview anxiety.',
  },
  {
    name: 'Ananya Deshmukh',
    avatar: 'AD',
    track: 'Product Management',
    category: 'product',
    roleBefore: 'Business Analyst',
    roleAfter: 'Product Manager @ Flipkart',
    hike: '100% Hike',
    stars: 5,
    quote: 'Making the transition from Business Analyst to PM seemed daunting until I joined Airtribe. The mentor office hours helped me refine my PRD assignments until they were production grade.',
  },
  {
    name: 'Vikramaditya Sen',
    avatar: 'VS',
    track: 'Generative AI',
    category: 'genai',
    roleBefore: 'Data Scientist',
    roleAfter: 'Senior AI Specialist @ Google Cloud Partner',
    hike: '110% Hike',
    stars: 5,
    quote: 'The depth of knowledge in vector retrieval, hybrid chunking, and DSPy prompt compilation is unmatched. Airtribe is miles ahead of traditional courses.',
  },
  {
    name: 'Pooja Iyer',
    avatar: 'PI',
    track: 'Software Engineering',
    category: 'engineering',
    roleBefore: 'Software Engineer',
    roleAfter: 'Senior Backend Engineer @ Uber',
    hike: '125% Hike',
    stars: 5,
    quote: 'The system design teardown on Uber ride-matching algorithms blew my mind. When I interviewed with Uber six months later, I felt like I was discussing architecture with colleagues.',
  },
  {
    name: 'Aditya Verma',
    avatar: 'AV',
    track: 'Product Management',
    category: 'product',
    roleBefore: 'Product Analyst',
    roleAfter: 'Growth PM @ Groww',
    hike: '90% Hike',
    stars: 5,
    quote: 'The sessions on viral loops and unit economics were eye-opening. Airtribe has the most supportive builder community in tech.',
  },
];

export default function ReviewsPage() {
  const { openModal } = useApplyModal();
  const [filter, setFilter] = useState('all');

  const filtered = reviewsData.filter((r) => filter === 'all' || r.category === filter);

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-3 block">
          Wall of Love & Verified Outcomes
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Real stories from the Airtribe
        </h1>
        <p className="text-base sm:text-lg text-gray-300">
          Discover how our alumni transformed their careers, unlocked massive salary hikes, and stepped into dream roles at top tech companies.
        </p>
      </div>

      {/* Aggregate Stats Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-dark-850 border border-white/10 max-w-4xl mx-auto mb-14 text-center">
        <div>
          <div className="text-2xl sm:text-3xl font-extrabold text-brand-400">4.92 / 5</div>
          <div className="text-xs text-gray-400 mt-1">Average Learner Rating</div>
        </div>
        <div>
          <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">83%</div>
          <div className="text-xs text-gray-400 mt-1">Average Salary Hike</div>
        </div>
        <div>
          <div className="text-2xl sm:text-3xl font-extrabold text-white">15,000+</div>
          <div className="text-xs text-gray-400 mt-1">Global Alumni Network</div>
        </div>
        <div>
          <div className="text-2xl sm:text-3xl font-extrabold text-purple-400">500+</div>
          <div className="text-xs text-gray-400 mt-1">Top Tech Hiring Partners</div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
        {[
          { id: 'all', label: 'All Reviews' },
          { id: 'genai', label: 'GenAI Cohorts' },
          { id: 'engineering', label: 'Software Engineering' },
          { id: 'product', label: 'Product Management' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              filter === tab.id
                ? 'bg-brand-500 text-white shadow-md shadow-brand-500/25'
                : 'bg-dark-850 text-gray-400 hover:text-white border border-white/5'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {filtered.map((r, idx) => (
          <div
            key={idx}
            className="glass-card p-6 sm:p-7 rounded-2xl flex flex-col justify-between hover:border-brand-500/30 transition-all duration-300"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-brand-600 to-indigo-400 flex items-center justify-center text-white font-bold text-sm">
                    {r.avatar}
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm">{r.name}</h3>
                    <p className="text-[11px] text-gray-400">{r.roleBefore}</p>
                  </div>
                </div>
                <div className="flex items-center text-amber-400">
                  {[...Array(r.stars)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>

              {/* Transition Pill */}
              <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                <span>{r.roleAfter}</span>
                <span className="text-white/40">•</span>
                <span className="text-white font-bold">{r.hike}</span>
              </div>

              {/* Quote */}
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6 italic">
                &quot;{r.quote}&quot;
              </p>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
              <span className="font-medium text-gray-400">{r.track}</span>
              <span className="flex items-center gap-1 text-emerald-400">
                <CheckCircle className="w-3.5 h-3.5" /> Verified Graduate
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="glass-card p-8 sm:p-12 rounded-3xl max-w-4xl mx-auto text-center border border-brand-500/30 bg-gradient-to-b from-brand-500/10 to-transparent">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
          Write Your Own Transformation Story
        </h3>
        <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
          Join 15,000+ builders who unlocked life-changing career moves. Apply for the upcoming cohort today.
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
