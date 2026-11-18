'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApplyModal } from '@/components/ApplyModalContext';
import { 
  Sparkles, 
  Code, 
  Layers, 
  Cpu, 
  Palette, 
  Search, 
  Clock, 
  Calendar, 
  ArrowRight, 
  CheckCircle2, 
  Star 
} from 'lucide-react';

const allCourses = [
  {
    id: 'generative-ai-launchpad',
    title: 'The GenAI Launchpad',
    slug: 'generative-ai-launchpad',
    category: 'genai',
    categoryName: 'Generative AI & Data',
    duration: '8 Weeks',
    format: 'Live Weekend Sessions',
    rating: '4.95',
    reviewsCount: '840+',
    badge: 'Trending #1',
    description: 'Build production-ready LLM apps, hybrid RAG pipelines, fine-tuned models, and autonomous multi-agent systems using LangChain and CrewAI.',
    skills: ['LangChain & LlamaIndex', 'Vector Databases (Pinecone/Qdrant)', 'Multi-Agent Systems', 'Fine-tuning LLMs'],
    mentors: 'Staff AI Engineers from Google & Atlassian',
    nextCohort: 'Starting Dec 2026',
  },
  {
    id: 'backend-engineering-launchpad',
    title: 'AI-First Software Engineering',
    slug: 'backend-engineering-launchpad',
    category: 'engineering',
    categoryName: 'Engineering & Systems',
    duration: '16 Weeks',
    format: 'Live Interactive Sessions',
    rating: '4.92',
    reviewsCount: '1,200+',
    badge: 'Flagship',
    description: 'Master high-concurrency microservices, distributed system design, caching with Redis, event streaming with Kafka, and containerized cloud deployment.',
    skills: ['Distributed Systems Design', 'Kafka & Event Streaming', 'Redis Caching & Sharding', 'Docker & Kubernetes'],
    mentors: 'Principal Engineers from Uber & Razorpay',
    nextCohort: 'Starting Dec 2026',
  },
  {
    id: 'product-management-launchpad',
    title: 'AI-First Product Management',
    slug: 'product-management-launchpad',
    category: 'product',
    categoryName: 'Product & Leadership',
    duration: '12 Weeks',
    format: 'Live Cohort + 1:1 Mentorship',
    rating: '4.89',
    reviewsCount: '1,450+',
    badge: 'Top Rated',
    description: 'Learn modern 0-to-1 product strategy, user discovery, AI PRD authoring, north-star metrics, and launch a real capstone presented to VPs of Product.',
    skills: ['AI PRD Authoring', 'Product Discovery & Strategy', 'Unit Economics & Retention', 'Leadership & Stakeholder Mgmt'],
    mentors: 'Directors of Product from Swiggy & Flipkart',
    nextCohort: 'Starting Dec 2026',
  },
  {
    id: 'system-design-masterclass',
    title: 'High-Scale System Design & Cloud',
    slug: 'backend-engineering-launchpad',
    category: 'engineering',
    categoryName: 'Engineering & Systems',
    duration: '10 Weeks',
    format: 'Live Teardowns & Architecture',
    rating: '4.94',
    reviewsCount: '620+',
    badge: 'Senior Engineers',
    description: 'Architect resilient distributed architectures capable of handling 100k+ requests per second. Real-world teardowns of Uber, Netflix, and WhatsApp.',
    skills: ['Database Sharding & Replication', 'Load Balancing & CDNs', 'CAP Theorem in Practice', 'Fault Tolerance'],
    mentors: 'Architects from Microsoft & AWS',
    nextCohort: 'Starting Jan 2027',
  },
  {
    id: 'product-design-ui-ux',
    title: 'UI/UX & AI-Assisted Product Design',
    slug: 'product-management-launchpad',
    category: 'design',
    categoryName: 'Design & UX',
    duration: '8 Weeks',
    format: 'Live Studio Critiques',
    rating: '4.88',
    reviewsCount: '410+',
    badge: 'Design Sprint',
    description: 'Master Figma design systems, interaction design, AI prompt generation for UI components, usability testing, and design systems handoff.',
    skills: ['Figma Design Systems', 'User Research & Wireframing', 'AI Prototyping Tools', 'Interaction Design'],
    mentors: 'Design Leads from Groww & CRED',
    nextCohort: 'Starting Dec 2026',
  },
];

export default function CoursesPage() {
  const { openModal } = useApplyModal();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = allCourses.filter((c) => {
    const matchesCategory = activeCategory === 'all' || c.category === activeCategory;
    const matchesSearch = c.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          c.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-3 block">
          Airtribe Cohorts Catalog
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Master Modern Tech & AI with Industry Leaders
        </h1>
        <p className="text-base sm:text-lg text-gray-300">
          Cohort-based learning programs designed for software engineers, product managers, and tech leaders ready to accelerate their careers.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-white/10">
        
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
          {[
            { id: 'all', label: 'All Cohorts' },
            { id: 'genai', label: 'GenAI & Agents' },
            { id: 'engineering', label: 'Software Engineering' },
            { id: 'product', label: 'Product Management' },
            { id: 'design', label: 'Design & UX' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-brand-500 text-white shadow-md shadow-brand-500/30'
                  : 'bg-dark-850 text-gray-400 hover:text-white border border-white/5 hover:border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search skills, tools, tracks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-dark-850 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-500"
          />
        </div>

      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((course) => (
          <div
            key={course.id}
            className="glass-card rounded-2xl p-7 flex flex-col justify-between group hover:border-brand-500/40 transition-all duration-300"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-brand-500/10 text-brand-300 border border-brand-500/20">
                  {course.categoryName}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {course.badge}
                </span>
              </div>

              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">
                {course.title}
              </h2>

              <p className="text-xs text-gray-400 leading-relaxed mb-5">
                {course.description}
              </p>

              {/* Specs */}
              <div className="flex items-center gap-4 text-xs text-gray-300 mb-5 pb-4 border-b border-white/5">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-brand-400" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-brand-400" />
                  <span>{course.format}</span>
                </div>
                <div className="flex items-center gap-1 text-emerald-400 font-semibold ml-auto">
                  <Star className="w-3.5 h-3.5 fill-emerald-400" />
                  <span>{course.rating}</span>
                </div>
              </div>

              {/* Skills tags */}
              <div className="space-y-2 mb-6">
                <div className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
                  Key Curated Topics:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {course.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 rounded-md text-xs bg-dark-800 text-gray-300 border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-xs text-gray-400 mb-6 bg-dark-800/60 p-2.5 rounded-lg border border-white/5">
                <span className="text-gray-300 font-medium">Mentors:</span> {course.mentors}
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-3">
              <Link
                href={`/courses/${course.slug}`}
                className="text-xs font-semibold text-gray-300 hover:text-white flex items-center gap-1 group/btn"
              >
                <span>View Syllabus</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
              <button
                onClick={() => openModal(course.title)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-white bg-brand-500 hover:bg-brand-600 transition-colors shadow-sm"
              >
                Apply for Batch
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
