'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApplyModal } from '@/components/ApplyModalContext';
import { 
  Code, 
  Clock, 
  Users, 
  Star, 
  ChevronDown, 
  ChevronUp, 
  Download, 
  Server, 
  Database, 
  Layers, 
  GitBranch, 
  Activity 
} from 'lucide-react';

const syllabus = [
  {
    week: 'Weeks 1-2',
    title: 'Advanced Concurrency, Go/Node Internals & Thread Pools',
    desc: 'Goroutines, channels, memory models, Node event loop mechanics, async I/O, deadlock prevention, and non-blocking architecture under high concurrent loads.',
  },
  {
    week: 'Weeks 3-4',
    title: 'Database Architecture, Indexing Deep-Dive & Query Optimization',
    desc: 'B-Trees vs LSM Trees, WAL (Write-Ahead Logging), isolation levels (ACID, MVCC), index scans, query execution plans, PostgreSQL tuning, and partition strategies.',
  },
  {
    week: 'Weeks 5-6',
    title: 'Distributed Caching Strategies & Redis Mastery',
    desc: 'Cache invalidation patterns (Write-through, Write-back, Cache-aside), Redis data structures (Streams, Bitmaps, Sorted Sets), cluster sharding, and thundering herd mitigation.',
  },
  {
    week: 'Weeks 7-8',
    title: 'Message Queues, Event-Driven Architecture & Apache Kafka',
    desc: 'Kafka partitions, consumer groups, exactly-once semantics (EOS), idempotency keys, dead-letter queues, event sourcing, and CQRS patterns for decoupled services.',
  },
  {
    week: 'Weeks 9-10',
    title: 'High-Scale System Design Teardowns (Uber, WhatsApp, Netflix)',
    desc: 'Geohash indexing for ride matching, WebSocket connections for 10M concurrent users, distributed rate limiters (Token Bucket, Leaky Bucket), and content delivery edge caching.',
  },
  {
    week: 'Weeks 11-12',
    title: 'Resilience Engineering: Circuit Breakers, Bulkheads & Observability',
    desc: 'Implementing resilience with Netflix Hystrix/Resilience4j principles, OpenTelemetry distributed tracing, Prometheus metrics, and Grafana alert dashboards.',
  },
  {
    week: 'Weeks 13-14',
    title: 'Containerization, Kubernetes Orchestration & Cloud CI/CD',
    desc: 'Multi-stage Docker builds, Kubernetes Pods, Deployments, Horizontal Pod Autoscalers (HPA), Ingress controllers, and automated zero-downtime deployment pipelines.',
  },
  {
    week: 'Weeks 15-16',
    title: 'AI-Augmented Engineering Workflows & Capstone Production Demo',
    desc: 'Leveraging AI coding agents for automated schema migrations and integration tests, finalizing your capstone microservice, and presenting to Principal Engineers.',
  },
];

export default function BackendEngineeringPage() {
  const { openModal } = useApplyModal();
  const [openWeek, setOpenWeek] = useState<number | null>(0);

  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Hero */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 text-xs sm:text-sm font-semibold mb-6">
          <Code className="w-4 h-4 text-blue-400" />
          Flagship Software Engineering Track
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-6">
          AI-First Software Engineering
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
          Master distributed systems, concurrency, and high-scale backend architecture. Build production microservices capable of handling millions of QPS alongside Principal Engineers from Uber & Razorpay.
        </p>

        {/* Cohort Meta Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-gray-300 mb-10">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-850 border border-white/5">
            <Clock className="w-4 h-4 text-blue-400" />
            <span>16 Weeks (Live Weekend Masterclasses)</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-850 border border-white/5">
            <Users className="w-4 h-4 text-blue-400" />
            <span>Small Cohorts • 1:1 Code Reviews</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-dark-850 border border-white/5">
            <Star className="w-4 h-4 text-emerald-400 fill-emerald-400" />
            <span>4.92/5 Rating (1,200+ reviews)</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => openModal('AI-First Software Engineering')}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/30 active:scale-95 text-base"
          >
            Apply for Dec 2026 Batch
          </button>
          <button
            onClick={() => openModal('AI-First Software Engineering - Syllabus')}
            className="w-full sm:w-auto px-6 py-4 rounded-xl font-semibold text-gray-300 bg-dark-850 hover:bg-dark-800 border border-white/10 transition-colors flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4 text-gray-400" />
            Download Detailed Syllabus
          </button>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="p-6 rounded-2xl bg-dark-850 border border-white/5 max-w-5xl mx-auto mb-20 text-center">
        <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
          Architecture & Tools Mastered
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-medium text-gray-200">
          {['Go / Golang', 'Node.js / TypeScript', 'PostgreSQL', 'Redis Clusters', 'Apache Kafka', 'Docker', 'Kubernetes', 'gRPC & Protocol Buffers', 'Prometheus', 'Grafana', 'AWS / GCP'].map((t, idx) => (
            <span key={idx} className="px-3.5 py-1.5 rounded-lg bg-dark-900 border border-white/10 text-gray-300">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Syllabus */}
      <div className="max-w-4xl mx-auto mb-24">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2 block">
            16-Week Curriculum
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            From Code Craft to Scaled Cloud Architectures
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
                  <span className="px-2.5 py-1 rounded bg-blue-500/10 text-blue-300 text-xs font-bold shrink-0">
                    {item.week}
                  </span>
                  <span className="font-semibold text-white text-sm sm:text-base">
                    {item.title}
                  </span>
                </div>
                {openWeek === idx ? (
                  <ChevronUp className="w-5 h-5 text-blue-400 shrink-0" />
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
      <div className="glass-card p-8 sm:p-12 rounded-3xl max-w-4xl mx-auto text-center border border-blue-500/30 bg-gradient-to-b from-blue-500/10 to-transparent">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
          Step Up to Senior & Staff Software Engineer
        </h3>
        <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
          Gain the system design intuition and distributed backend expertise needed to lead architectural decisions at top tier tech companies.
        </p>
        <button
          onClick={() => openModal('AI-First Software Engineering')}
          className="px-8 py-4 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-xl shadow-blue-500/30 active:scale-95"
        >
          Apply for Software Engineering Cohort
        </button>
      </div>

    </div>
  );
}
