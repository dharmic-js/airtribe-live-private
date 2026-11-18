'use client';

import React from 'react';
import Link from 'next/link';
import { useApplyModal } from '@/components/ApplyModalContext';
import { Layers, ExternalLink, Sparkles, Code, CheckCircle, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Agentic PR Reviewer & Security Auditing Bot',
    author: 'Harsh Vardhan (GenAI Cohort)',
    track: 'Generative AI Launchpad',
    description: 'An autonomous multi-agent developer system that hooks into GitHub webhooks, parses AST syntax trees, identifies security vulnerabilities (OWASP top 10), and writes unit tests automatically.',
    tags: ['LangGraph', 'Python', 'FastAPI', 'Claude 3.5 API', 'Docker'],
    github: 'https://github.com',
    demo: 'https://demo.airtribe.live',
  },
  {
    title: 'High-Throughput Geo-Distributed Ride Dispatcher',
    author: 'Siddharth Nair (Software Engg Cohort)',
    track: 'AI-First Software Engineering',
    description: 'A distributed ride-allocation microservice capable of processing 25,000 spatial requests per second using Redis Geo commands, Kafka streaming partitions, and Go concurrency pipelines.',
    tags: ['Go / Golang', 'Kafka', 'Redis Geo', 'PostgreSQL', 'Docker'],
    github: 'https://github.com',
    demo: 'https://demo.airtribe.live',
  },
  {
    title: 'Pulse: AI Health Companion & RAG Diagnostic Assistant',
    author: 'Megha Sen (Product Management Cohort)',
    track: 'AI-First Product Management',
    description: 'A complete 0-to-1 product strategy, interactive Figma prototype, and PRD for a clinical AI triage assistant, benchmarked against real user retention funnels.',
    tags: ['Product Strategy', 'Figma', 'Amplitude Funnels', 'AI PRD', 'Wireframing'],
    github: 'https://github.com',
    demo: 'https://demo.airtribe.live',
  },
  {
    title: 'Knowledge Graph Enterprise Search Engine',
    author: 'Arjun Das (GenAI Cohort)',
    track: 'Generative AI Launchpad',
    description: 'Hybrid GraphRAG system that extracts structured entities and relationships from SEC financial reports into Neo4j with sub-200ms vector retrieval.',
    tags: ['Neo4j', 'Qdrant', 'LlamaIndex', 'Python', 'FastAPI'],
    github: 'https://github.com',
    demo: 'https://demo.airtribe.live',
  },
];

export default function ProjectShowcasePage() {
  const { openModal } = useApplyModal();

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-3 block">
          Proof of Capability
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Cohort Capstone Project Showcase
        </h1>
        <p className="text-base sm:text-lg text-gray-300">
          Explore real production-ready applications, microservices, and product portfolios shipped by Airtribe learners.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {projects.map((p, idx) => (
          <div
            key={idx}
            className="glass-card p-8 rounded-2xl border border-white/5 hover:border-brand-500/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-brand-500/10 text-brand-300 border border-brand-500/20">
                  {p.track}
                </span>
                <span className="text-xs text-gray-400 font-medium">{p.author}</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 hover:text-brand-300 transition-colors">
                {p.title}
              </h3>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-6">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-6">
                {p.tags.map((t, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md text-xs bg-dark-800 text-gray-300 border border-white/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between gap-4">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-semibold text-gray-400 hover:text-white flex items-center gap-1.5"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                </svg>
                <span>View GitHub Code</span>
              </a>
              <button
                onClick={() => openModal(`Learn to build: ${p.title}`)}
                className="text-xs font-semibold text-brand-400 hover:text-brand-300 flex items-center gap-1"
              >
                <span>Build Similar in Cohort &rarr;</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Box */}
      <div className="glass-card p-8 sm:p-12 rounded-3xl max-w-4xl mx-auto text-center border border-brand-500/30 bg-gradient-to-b from-brand-500/10 to-transparent">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
          Want a Production Portfolio that Gets You Hired?
        </h3>
        <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
          Join our next cohort to build, deploy, and showcase capstones that hiring managers respect.
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
