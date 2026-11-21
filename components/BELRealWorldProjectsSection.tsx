'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Download, FileText, Printer, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProjectBrief {
  id: string;
  company: string;
  tagline: string;
  heroImage: string;
  cardTitle: string;
  cardDesc: string;
  role: string;
  duration: string;
  cohort: string;
  documentTitle: string;
  executiveSummary: string;
  problemStatement: string;
  systemArchitecture: string;
  northStarMetric: string;
  primaryGoal: string;
  technicalMilestones: { phase: string; deliverable: string; acceptanceCriteria: string }[];
  keyTradeoffs: { decision: string; optionSelected: string; rationale: string }[];
  implementationSpecs: string[];
  keyResults: string[];
}

const projectsData: ProjectBrief[] = [
  {
    id: 'chatgpt-backend',
    company: 'ChatGPT / Conversational AI',
    tagline: 'High-Throughput Streaming Conversation API & Context Memory Engine',
    heroImage: '/projects/chatgpt.png',
    cardTitle: 'Build the brain behind the chat',
    cardDesc: 'Step into a backend engineer role on an AI product. Design the conversation API, stream LLM responses, manage context and memory across sessions, and keep latency and cost within budget.',
    role: 'Senior Backend Engineer — AI Platform & Runtime',
    duration: '4-Week Intensive Sprint',
    cohort: 'Airtribe AI-First Software Engineering Fellow Project',
    documentTitle: 'AI Conversation Platform: Low-Latency Streaming Engine & Session Context Architecture',
    executiveSummary: 'This engineering system design brief defines the production backend for an enterprise conversational AI service. By decoupling token generation through Server-Sent Events (SSE), implementing semantic context compression, and tiering conversation history in Redis and PostgreSQL, the platform maintains sub-80ms time-to-first-token (TTFT) while preventing context window budget overruns.',
    problemStatement: 'Modern conversational interfaces face severe latency degradation under sustained traffic. Direct synchronous LLM invocations tie up HTTP worker threads for up to 30 seconds, leading to connection exhaustion at 500 concurrent sessions. Furthermore, uncompressed conversation state causes 65% of monthly token spending on redundant prompt tokens.',
    systemArchitecture: 'Asynchronous streaming gateway built with non-blocking I/O. Token stream delivered over SSE with Redis Pub/Sub pub-channel per active session. Context sliding window manager continuously summarizes older dialogue turns into vector memory while hot state resides in an in-memory session buffer.',
    northStarMetric: 'P95 Time to First Token (TTFT) < 80ms and 99.95% stream delivery completion without socket disconnects.',
    primaryGoal: 'Achieve stable 5,000 concurrent streaming connections with 45% reduction in average tokens per user query.',
    technicalMilestones: [
      { phase: 'Sprint 1: Streaming Gateway & Event Bus', deliverable: 'Non-blocking SSE endpoint with connection pooling', acceptanceCriteria: 'Sustained 5k concurrent SSE connections with < 2% memory variance' },
      { phase: 'Sprint 2: Memory & Context Window Manager', deliverable: 'Hybrid sliding window with automated turn summarization', acceptanceCriteria: 'Context size capped under 4,000 tokens while retaining 98% intent recall' },
      { phase: 'Sprint 3: Vector Knowledge & Tool Calling Loop', deliverable: 'Tool dispatcher with schema validation and fallback', acceptanceCriteria: 'Sub-40ms vector similarity lookup and strict JSON schema conformance' },
      { phase: 'Sprint 4: Resilience & Production Observability', deliverable: 'Token rate-limiting, OpenTelemetry tracing, and circuit breakers', acceptanceCriteria: 'Automated fallback to secondary LLM provider within 200ms of upstream error' },
    ],
    keyTradeoffs: [
      { decision: 'SSE vs WebSockets', optionSelected: 'Server-Sent Events (SSE)', rationale: 'SSE operates over standard HTTP/2, traverses enterprise firewalls seamlessly, and provides native browser automatic reconnection with zero overhead for unidirectional response streaming.' },
      { decision: 'Session Storage Architecture', optionSelected: 'Redis Cluster with Write-Behind to Postgres', rationale: 'Sub-millisecond read/write latency during active conversation turns, with asynchronous persistent backup ensuring historical search durability.' },
      { decision: 'Context Window Compression', optionSelected: 'Hierarchical Summarization with Vector Anchors', rationale: 'Compacts earlier chat turns into structured factual bullet points, reducing token payload by 52% while keeping topical continuity intact.' },
    ],
    implementationSpecs: [
      'Edge Gateway: Reverse proxy terminating TLS and load-balancing requests across containerized backend nodes.',
      'Token Streamer: Fast non-blocking chunk parser emitting standard chunk payloads with heartbeats every 15 seconds.',
      'Guardrails & Safety Interceptor: Pre-execution token check and regex prompt-injection classifier with latency under 12ms.',
      'Telemetry: OpenTelemetry distributed spans measuring exact token generation velocity, provider latency, and error codes.',
    ],
    keyResults: [
      'P95 Time to First Token dropped from 620ms to 74ms across all evaluated benchmark sessions.',
      'Infrastructure resource utilization lowered by 40% using non-blocking asynchronous event loops.',
      'Zero dropped stream events achieved over 250,000 automated load-test requests.',
    ],
  },
  {
    id: 'mailchimp-engine',
    company: 'Mailchimp',
    tagline: 'Fault-Tolerant Distributed Notification & Campaign Dispatch Engine',
    heroImage: '/projects/mailchimp.png',
    cardTitle: 'Build the engine that sends a million emails',
    cardDesc: 'Step into a backend engineer role at Mailchimp. Design the campaign service audience segmentation, scheduling, background queues with retries and make sure a million sends never means one email sent twice.',
    role: 'Staff Distributed Systems Engineer — Core Infrastructure',
    duration: '4-Week Intensive Sprint',
    cohort: 'Airtribe AI-First Software Engineering Fellow Project',
    documentTitle: 'Distributed Campaign Delivery Engine: High-Throughput Partitioning & Exactly-Once Semantics',
    executiveSummary: 'This engineering brief provides the architectural blueprint for an enterprise email dispatch system delivering 1,000,000+ transactional and marketing emails per hour. Utilizing Apache Kafka partitioned topics, distributed idempotency keys in Redis, and adaptive rate limiters with token buckets, the service guarantees exactly-once dispatch semantics and zero data loss during upstream provider throttling.',
    problemStatement: 'Bulk marketing dispatches previously caused database lock contention when updating recipient status across million-row cohorts. Network timeouts during third-party SMTP/API handshakes resulted in retry storms, causing duplicate emails to be dispatched to 3.8% of users and triggering reputation penalties.',
    systemArchitecture: 'Event-driven pipeline separating campaign ingestion, recipient segment resolution, queue chunking, and worker dispatch. Worker pools consume pre-partitioned recipient chunks, verifying atomic Redis locks before dispatching to external delivery relays with automated dead-letter queue routing.',
    northStarMetric: 'Throughput capacity >= 30,000 emails/sec with 0.000% duplicate delivery across all campaign tiers.',
    primaryGoal: 'Process a 1,000,000 recipient campaign in under 35 minutes with 99.99% fault tolerance and zero database locking.',
    technicalMilestones: [
      { phase: 'Sprint 1: Campaign Chunking & Kafka Topology', deliverable: 'Chunking worker emitting 500-recipient batch records to Kafka', acceptanceCriteria: 'Partition keys distributed uniformly across 16 partition topics' },
      { phase: 'Sprint 2: Distributed Idempotency Mechanism', deliverable: 'Atomic Redis SETNX validation with TTL reservation', acceptanceCriteria: '100% prevention of duplicate dispatches under simulated network retry spikes' },
      { phase: 'Sprint 3: Adaptive Rate Limiting & Backoff', deliverable: 'Token-bucket rate limiter tuned per SMTP/API relay', acceptanceCriteria: 'Zero 429 throttling errors from external upstream delivery providers' },
      { phase: 'Sprint 4: Dead-Letter Queue & Reconciliation', deliverable: 'Automated retry schedule with exponential jitter and DLQ alerting', acceptanceCriteria: 'Failed transmissions automatically isolated and replayed after provider recovery' },
    ],
    keyTradeoffs: [
      { decision: 'Message Queue Selection', optionSelected: 'Apache Kafka over RabbitMQ', rationale: 'Kafka provides superior append-only horizontal scaling and partition offset tracking, allowing seamless replayability in the event of worker node failures.' },
      { decision: 'Idempotency Key Strategy', optionSelected: 'Composite Hash (campaign_id:recipient_id:timestamp_window)', rationale: 'Eliminates cross-worker coordination bottlenecks while guaranteeing absolute delivery singularity across retry intervals.' },
      { decision: 'Database Write Optimization', optionSelected: 'Batch Status Upserts via TimescaleDB / Postgres', rationale: 'Batches 1,000 status updates into single transactional operations, reducing database I/O by 88% compared to single-row updates.' },
    ],
    implementationSpecs: [
      'Partition Keying: Hash-based keying on recipient domain ensuring compliance with external provider domain throttling rules.',
      'Concurrency Control: Goroutine/async worker pools with configurable concurrency throttles per node.',
      'Graceful Shutdown: SIGTERM listener ensuring currently processing batches finish within a 30-second drain window before exit.',
      'Monitoring: Prometheus gauges tracking queue depth, consumer lag, dispatch latency, and retry velocity.',
    ],
    keyResults: [
      'Dispatched 1.2M recipients in 28 minutes (peak throughput: 34,200 emails/second).',
      'Zero duplicate dispatches confirmed across extensive adversarial chaos experiments.',
      'Database CPU utilization decreased from 92% to 26% during peak campaign dispatch runs.',
    ],
  },
  {
    id: 'flipkart-checkout',
    company: 'Flipkart & Amazon',
    tagline: 'High-Concurrency Distributed Flash-Sale Checkout & Inventory Engine',
    heroImage: '/projects/ecommerce.webp',
    cardTitle: 'Build a checkout that survives a sale day',
    cardDesc: 'Step into an engineering role at Flipkart or Amazon. Design the order and inventory system cart, payments, stock consistency under thousands of concurrent buyers then scale it for a festival-sale spike.',
    role: 'Lead Systems Architect — Commerce & Payments',
    duration: '4-Week Intensive Sprint',
    cohort: 'Airtribe AI-First Software Engineering Fellow Project',
    documentTitle: 'Festival Flash-Sale Checkout Platform: Concurrent Inventory Reservation & Payment Orchestration',
    executiveSummary: 'This engineering design specification details the checkout and inventory reservation engine built to handle festival sales spikes exceeding 100,000 QPS. Utilizing Lua scripts in Redis for atomic stock decrements, optimistic concurrency control, and saga pattern orchestration for distributed payment verification, the system completely prevents overselling while ensuring 99.999% uptime.',
    problemStatement: 'During festival flash sales, tens of thousands of buyers attempt to purchase limited-inventory units (e.g., 5,000 units of a flagship smartphone) simultaneously. Traditional relational database row-locking results in deadlocks, transaction timeouts, database crashes, and severe inventory overselling discrepancies.',
    systemArchitecture: 'Two-tier inventory architecture: Redis Cluster maintains atomic fast stock reservations during the critical 15-minute checkout window. Asynchronous transactional workers emit payment verification events, triggering a distributed Saga orchestrator that reconciles inventory with primary PostgreSQL read-write replicas.',
    northStarMetric: 'Zero overselling incidents across high-concurrency SKU flash events while supporting 50,000 concurrent checkout attempts.',
    primaryGoal: 'Maintain p99 checkout response time below 120ms with 100% stock consistency and seamless rollback on payment failure.',
    technicalMilestones: [
      { phase: 'Sprint 1: Atomic Inventory Reservation Engine', deliverable: 'Redis Lua script executing atomic test-and-decrement with TTL reservation', acceptanceCriteria: 'Zero overselling with 10,000 concurrent threads competing for 100 inventory units' },
      { phase: 'Sprint 2: Distributed Saga Payment Orchestration', deliverable: 'Saga state machine managing OrderPlaced, StockReserved, PaymentProcessed', acceptanceCriteria: 'Automatic compensation rollback of stock reservation if payment fails or expires' },
      { phase: 'Sprint 3: Idempotent Payment Webhook Processing', deliverable: 'Idempotency handler for third-party payment gateways (Razorpay, Stripe)', acceptanceCriteria: 'Zero duplicate order creations despite duplicate webhook notifications' },
      { phase: 'Sprint 4: Chaos Engineering & Scale Simulation', deliverable: 'Load testing with k6 simulating 100k peak QPS flash-sale traffic', acceptanceCriteria: 'P99 latency stable at < 110ms with zero unhandled exceptions or deadlocks' },
    ],
    keyTradeoffs: [
      { decision: 'Pessimistic vs Redis Atomic Reservation', optionSelected: 'Redis Lua Atomic Reservation with 15-Minute TTL', rationale: 'Bypasses relational database connection pools during the peak spike, allowing 100k QPS in-memory decrements without database lock waits.' },
      { decision: 'Distributed Transaction Model', optionSelected: 'Choreographed Saga with Kafka Events', rationale: 'Avoids heavy Two-Phase Commit (2PC) locks across services, enabling fast asynchronous checkout completion with compensating rollbacks.' },
      { decision: 'Cart State Persistence', optionSelected: 'Client-Side Signed JWT Cart with Server Validation', rationale: 'Removes unnecessary database writes during cart browsing, validating stock and discounts only at the exact point of checkout initiation.' },
    ],
    implementationSpecs: [
      'Atomic Decrement Script: Evaluates stock balance and writes reserved token in a single Redis atomic cycle.',
      'TTL Reclaim Daemon: Scans expired reservation keys and automatically restores stock balance to available inventory pool.',
      'Database Sharding: Orders table partitioned by user_id across database nodes to prevent hotspot contention.',
      'Circuit Breaker: Automatic shed of non-critical UI features (recommendations, review counts) during extreme checkout spikes.',
    ],
    keyResults: [
      'Handled simulated 120,000 QPS flash-sale spike with p99 latency of 92ms.',
      'Absolute zero overselling recorded across 1,000,000 simulated race-condition checkout requests.',
      'Successfully rolled back 100% of expired reservations without human intervention.',
    ],
  },
];

export function BELRealWorldProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectBrief | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'specifications'>('overview');

  const openBrief = (project: ProjectBrief) => {
    setSelectedProject(project);
    setActiveTab('overview');
  };

  const closeBrief = () => {
    setSelectedProject(null);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="w-full bg-black py-20 sm:py-28 border-b border-[#232328]">
      <div className="max-w-[1440px] mx-auto border-x border-[#232328] px-4 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="text-[38px] sm:text-[54px] font-editorial italic font-normal text-white">
            Work on real-world projects
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light mt-3 max-w-2xl mx-auto">
            Build production-grade systems alongside Principal Engineers. Design architectures that scale to millions of requests, survive failovers, and power AI capabilities.
          </p>
        </div>

        {/* 3 Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-[#232328] divide-y md:divide-y-0 md:divide-x divide-[#232328] bg-black">
          {projectsData.map((project) => (
            <div key={project.id} className="p-6 sm:p-8 flex flex-col justify-between group hover:bg-[#08080c] transition-colors">
              <div>
                {/* Visual Header */}
                <div className="w-full h-48 rounded-xl overflow-hidden mb-6 relative border border-[#232328] bg-[#0c0d14]">
                  <Image
                    src={project.heroImage}
                    alt={project.company}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3 text-xs font-mono font-semibold text-white bg-black/60 px-2.5 py-1 rounded backdrop-blur-md border border-white/10">
                    {project.company}
                  </span>
                </div>

                {/* Title & Desc */}
                <h3 className="text-xl sm:text-2xl font-editorial font-normal text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {project.cardTitle}
                </h3>
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light mb-6">
                  {project.cardDesc}
                </p>
              </div>

              {/* Action Button */}
              <button
                onClick={() => openBrief(project)}
                className="w-full py-3 px-4 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-200 text-xs sm:text-sm font-medium border border-zinc-700/80 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-purple-400" />
                <span>View project brief</span>
              </button>
            </div>
          ))}
        </div>

      </div>

      {/* FULL PROJECT BRIEF MODAL (High-Fidelity Document Reader & Printable) */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 overflow-y-auto">
          <div className="relative w-full max-w-4xl bg-[#0b0c14] border border-zinc-700 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col text-left">

            {/* Modal Topbar */}
            <div className="px-6 py-4 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-purple-500/20 text-purple-300 text-xs font-mono font-semibold border border-purple-500/30">
                  {selectedProject.company}
                </span>
                <span className="text-xs text-zinc-400 font-mono hidden sm:inline">
                  {selectedProject.cohort}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrint}
                  className="px-3 py-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium flex items-center gap-1.5 border border-zinc-700 transition-colors cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print / Save PDF</span>
                </button>
                <button
                  onClick={closeBrief}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Navigation Tabs inside Modal */}
            <div className="px-6 border-b border-zinc-800 bg-zinc-950 flex items-center gap-4 text-xs font-medium">
              <button
                onClick={() => setActiveTab('overview')}
                className={`py-3 border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'overview'
                    ? 'border-purple-500 text-white font-semibold'
                    : 'border-transparent text-zinc-400 hover:text-zinc-200'
                }`}
              >
                System Overview
              </button>
              <button
                onClick={() => setActiveTab('architecture')}
                className={`py-3 border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'architecture'
                    ? 'border-purple-500 text-white font-semibold'
                    : 'border-transparent text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Architecture &amp; Trade-offs
              </button>
              <button
                onClick={() => setActiveTab('specifications')}
                className={`py-3 border-b-2 transition-colors cursor-pointer ${
                  activeTab === 'specifications'
                    ? 'border-purple-500 text-white font-semibold'
                    : 'border-transparent text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Milestones &amp; Results
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-zinc-300 text-sm leading-relaxed">

              {/* Header Title */}
              <div>
                <h3 className="text-2xl sm:text-3xl font-editorial font-normal text-white mb-2">
                  {selectedProject.documentTitle}
                </h3>
                <p className="text-xs font-mono text-zinc-400">
                  Role: {selectedProject.role} • Scope: {selectedProject.duration}
                </p>
              </div>

              {/* TAB 1: OVERVIEW */}
              {activeTab === 'overview' && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/30">
                    <h4 className="text-xs font-mono text-purple-400 font-semibold uppercase tracking-wider mb-2">
                      Executive Summary
                    </h4>
                    <p className="text-zinc-200 text-sm leading-relaxed">
                      {selectedProject.executiveSummary}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono text-zinc-400 font-semibold uppercase tracking-wider mb-2">
                      Problem Context &amp; Production Bottlenecks
                    </h4>
                    <p className="text-zinc-300 text-sm leading-relaxed">
                      {selectedProject.problemStatement}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                      <span className="text-xs font-mono text-zinc-400 block mb-1">North Star Metric</span>
                      <span className="text-sm font-semibold text-white">{selectedProject.northStarMetric}</span>
                    </div>
                    <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                      <span className="text-xs font-mono text-zinc-400 block mb-1">Target Engineering Objective</span>
                      <span className="text-sm font-semibold text-emerald-400">{selectedProject.primaryGoal}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: ARCHITECTURE & TRADEOFFS */}
              {activeTab === 'architecture' && (
                <div className="space-y-6 animate-fadeIn">
                  <div>
                    <h4 className="text-xs font-mono text-zinc-400 font-semibold uppercase tracking-wider mb-2">
                      System Topology &amp; Component Interaction
                    </h4>
                    <p className="text-zinc-300 text-sm leading-relaxed">
                      {selectedProject.systemArchitecture}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono text-zinc-400 font-semibold uppercase tracking-wider mb-3">
                      Key Architectural Trade-Offs &amp; Decision Matrix
                    </h4>
                    <div className="space-y-3">
                      {selectedProject.keyTradeoffs.map((t, idx) => (
                        <div key={idx} className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800 text-xs space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-white text-sm">{t.decision}</span>
                            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono font-medium">{t.optionSelected}</span>
                          </div>
                          <p className="text-zinc-400 leading-normal">{t.rationale}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono text-zinc-400 font-semibold uppercase tracking-wider mb-3">
                      Technical Implementation Specifications
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.implementationSpecs.map((s, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* TAB 3: MILESTONES & RESULTS */}
              {activeTab === 'specifications' && (
                <div className="space-y-6 animate-fadeIn">
                  <div>
                    <h4 className="text-xs font-mono text-zinc-400 font-semibold uppercase tracking-wider mb-3">
                      Sprint Milestones &amp; Acceptance Criteria
                    </h4>
                    <div className="border border-zinc-800 rounded-xl overflow-hidden">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-zinc-900 text-zinc-400 font-mono border-b border-zinc-800">
                          <tr>
                            <th className="p-3">Phase / Sprint</th>
                            <th className="p-3">Deliverable</th>
                            <th className="p-3">Acceptance Criteria</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-800 text-zinc-300">
                          {selectedProject.technicalMilestones.map((m, idx) => (
                            <tr key={idx} className="hover:bg-zinc-900/40">
                              <td className="p-3 font-mono font-medium text-purple-300">{m.phase}</td>
                              <td className="p-3 font-semibold text-white">{m.deliverable}</td>
                              <td className="p-3 text-zinc-400">{m.acceptanceCriteria}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono text-zinc-400 font-semibold uppercase tracking-wider mb-3">
                      Production Verification &amp; Benchmark Results
                    </h4>
                    <div className="grid grid-cols-1 gap-2.5">
                      {selectedProject.keyResults.map((r, idx) => (
                        <div key={idx} className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/30 flex items-center gap-3 text-xs text-emerald-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                          <span>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 bg-zinc-900/90 border-t border-zinc-800 flex items-center justify-between shrink-0">
              <span className="text-xs text-zinc-500 font-mono">
                Verified Technical Specification • Airtribe Engineering
              </span>
              <button
                onClick={closeBrief}
                className="px-4 py-2 rounded-lg bg-white text-zinc-900 text-xs font-semibold hover:bg-zinc-200 transition-colors cursor-pointer"
              >
                Close Document
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
