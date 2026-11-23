'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, ChevronRight } from 'lucide-react';

interface ModuleItem {
  tag: string;
  title: string;
  desc: string;
}

interface PhaseData {
  id: string;
  tabLabel: string;
  cardTitle: string;
  cardDesc: string;
  badge: string;
  languageTabs?: { id: string; label: string; modules: ModuleItem[] }[];
  modules?: ModuleItem[];
  hasViewToggle?: boolean;
}

const phases: PhaseData[] = [
  {
    id: 'phase1',
    tabLabel: 'Phase 1',
    cardTitle: 'Phase 1: Build backend systems',
    cardDesc: 'Core backend engineering with AI-assisted development',
    badge: '[ 10 MODULES ]',
    hasViewToggle: true,
    languageTabs: [
      {
        id: 'java',
        label: 'Java & Spring Boot',
        modules: [
          { tag: 'MODULE 01', title: 'Backend systems & the Java runtime', desc: 'HTTP, web architecture, JVM and memory' },
          { tag: 'MODULE 02', title: 'Object-oriented Java', desc: 'Classes, interfaces, encapsulation, inheritance and polymorphism' },
          { tag: 'MODULE 03', title: 'API development with Spring Boot', desc: 'Controllers, services and dependency injection' },
          { tag: 'MODULE 04', title: 'Relational data with JPA', desc: 'Entity modeling, Hibernate, queries and transactions' },
          { tag: 'MODULE 05', title: 'API contracts', desc: 'Validation, error handling and pagination' },
          { tag: 'MODULE 06', title: 'Testing Java services', desc: 'JUnit, Mockito, Spring Test and integration testing' },
          { tag: 'MODULE 07', title: 'Authentication & application security', desc: 'JWT, OAuth, RBAC and secure API design' },
          { tag: 'MODULE 08', title: 'Working with AI coding agents', desc: 'Repository context, change plans, tests and diff review' },
          { tag: 'MODULE 09', title: 'Concurrency & performance', desc: 'Threads, async processing, caching and profiling' },
          { tag: 'MODULE 10', title: 'Taking a Java service live', desc: 'Logging, health checks and deployment' },
        ],
      },
      {
        id: 'node',
        label: 'Node.js',
        modules: [
          { tag: 'MODULE 01', title: 'Backend systems & Node runtime', desc: 'HTTP, web architecture, Node.js modules and the event loop' },
          { tag: 'MODULE 02', title: 'Asynchronous JavaScript & TypeScript', desc: 'Event loop mechanics, promises, async/await and error handling' },
          { tag: 'MODULE 03', title: 'API development with Express', desc: 'Express routing, middleware architecture and request lifecycle' },
          { tag: 'MODULE 04', title: 'Data modeling with MongoDB & SQL', desc: 'MongoDB, Mongoose, indexing and relational data integration' },
          { tag: 'MODULE 05', title: 'API contracts & validation', desc: 'OpenAPI specification, Zod/Joi validation and pagination' },
          { tag: 'MODULE 06', title: 'Testing Node.js services', desc: 'Jest, Supertest, mocking and end-to-end integration testing' },
          { tag: 'MODULE 07', title: 'Authentication & application security', desc: 'JWT, OAuth, role-based access control and secure API design' },
          { tag: 'MODULE 08', title: 'Working with AI coding agents', desc: 'Repository context, change plans, tests and diff review' },
          { tag: 'MODULE 09', title: 'Real-time systems & concurrency', desc: 'Streams, WebSockets, background tasks and Redis caching' },
          { tag: 'MODULE 10', title: 'Taking a Node service live', desc: 'Logging, health checks, Docker containerization and deployment' },
        ],
      },
      {
        id: 'python',
        label: 'Python & Django',
        modules: [
          { tag: 'MODULE 01', title: 'Backend systems & Python runtime', desc: 'HTTP, web architecture, Python OOP, packaging and environments' },
          { tag: 'MODULE 02', title: 'Django architecture & request lifecycle', desc: 'Django projects, applications, settings and request-response flow' },
          { tag: 'MODULE 03', title: 'API development with Django REST & FastAPI', desc: 'DRF viewsets, serializers, FastAPI, Pydantic and dependency injection' },
          { tag: 'MODULE 04', title: 'Relational data with Django ORM', desc: 'ORM entity modeling, migrations, PostgreSQL and transactions' },
          { tag: 'MODULE 05', title: 'API contracts & validation', desc: 'OpenAPI documentation, schema validation, filtering and pagination' },
          { tag: 'MODULE 06', title: 'Testing Python services', desc: 'pytest, fixtures, test databases and integration testing' },
          { tag: 'MODULE 07', title: 'Authentication & application security', desc: 'JWT, permissions, rate limiting and secure API design' },
          { tag: 'MODULE 08', title: 'Working with AI coding agents', desc: 'Repository context, change plans, tests and diff review' },
          { tag: 'MODULE 09', title: 'Async processing & caching', desc: 'Celery, Redis queues, background task workers and caching' },
          { tag: 'MODULE 10', title: 'Taking a Python service live', desc: 'Logging, health checks, Gunicorn/Uvicorn, Docker and deployment' },
        ],
      },
    ],
  },
  {
    id: 'phase2',
    tabLabel: 'Phase 2',
    cardTitle: 'Phase 2: Design maintainable software',
    cardDesc: 'Low-level design and AI-assisted engineering',
    badge: '[ 6 MODULES ]',
    hasViewToggle: false,
    modules: [
      { tag: 'MODULE 01', title: 'Requirement clarification & domain modeling', desc: 'Actors, use cases, entities and invariants' },
      { tag: 'MODULE 02', title: 'Object-oriented design', desc: 'Responsibilities, abstractions, cohesion and coupling' },
      { tag: 'MODULE 03', title: 'Designing stable software', desc: 'SOLID, composition, interfaces and dependency management' },
      { tag: 'MODULE 04', title: 'Design patterns in context', desc: 'Selection, trade-offs, anti-patterns and practical usage' },
      { tag: 'MODULE 05', title: 'Applied LLD & machine coding', desc: 'State, persistence, concurrency and failure handling' },
      { tag: 'MODULE 06', title: 'Spec-driven engineering with AI agents', desc: 'Plan, implement, refactor and verify' },
    ],
  },
  {
    id: 'phase3',
    tabLabel: 'Phase 3',
    cardTitle: 'Phase 3: Build AI capabilities',
    cardDesc: 'Applied AI engineering',
    badge: '[ 8 MODULES ]',
    hasViewToggle: true,
    modules: [
      { tag: 'MODULE 01', title: 'Agentic software development', desc: 'Planning, task delegation, code review and verification' },
      { tag: 'MODULE 02', title: 'LLM application foundations', desc: 'Model behavior, tokens, model selection, prompting and structured outputs' },
      { tag: 'MODULE 03', title: 'Context engineering', desc: 'System instructions, context assembly, memory, tool outputs, context compression and token budgets' },
      { tag: 'MODULE 04', title: 'Reliable model integrations', desc: 'Streaming, schema validation, timeouts, retries, rate limits and provider fallbacks' },
      { tag: 'MODULE 05', title: 'Retrieval-augmented generation', desc: 'Embeddings, chunking, hybrid search, reranking and citations' },
      { tag: 'MODULE 06', title: 'Agents & tool use', desc: 'Function calling, MCP, orchestration, state and human approval' },
      { tag: 'MODULE 07', title: 'AI evals & quality measurement', desc: 'Golden datasets, task-specific metrics, LLM-as-judge, human review and regression gates' },
      { tag: 'MODULE 08', title: 'AI safety, observability & operations', desc: 'Guardrails, prompt injection, data security, tracing, monitoring, latency and cost' },
    ],
  },
  {
    id: 'phase4',
    tabLabel: 'Phase 4',
    cardTitle: 'Phase 4: Engineer the data layer',
    cardDesc: 'Data modeling, databases and retrieval systems',
    badge: '[ 5 MODULES ]',
    hasViewToggle: false,
    modules: [
      { tag: 'MODULE 01', title: 'Data modeling for production systems', desc: 'Entities, relationships, normalization and constraints' },
      { tag: 'MODULE 02', title: 'Transactions & consistency', desc: 'ACID, isolation levels, locking and concurrent updates' },
      { tag: 'MODULE 03', title: 'Advanced SQL & query performance', desc: 'Joins, window functions, indexes and execution plans' },
      { tag: 'MODULE 04', title: 'Scaling data systems', desc: 'Caching, replication, partitioning, NoSQL and read/write trade-offs' },
      { tag: 'MODULE 05', title: 'Retrieval systems for AI', desc: 'Vector indexes, hybrid search, metadata filtering and permissions' },
    ],
  },
  {
    id: 'phase5',
    tabLabel: 'Phase 5',
    cardTitle: 'Phase 5: Architect for scale',
    cardDesc: 'High-level system design',
    badge: '[ 8 MODULES ]',
    hasViewToggle: true,
    modules: [
      { tag: 'MODULE 01', title: 'System design foundations', desc: 'Requirements, capacity estimation, API and data flows, and bottleneck analysis' },
      { tag: 'MODULE 02', title: 'Scaling web systems', desc: 'Horizontal and vertical scaling, load balancing, caching, CDNs and rate limiting' },
      { tag: 'MODULE 03', title: 'Data stores & distributed data', desc: 'SQL versus NoSQL, replication, sharding, consistent hashing and CAP trade-offs' },
      { tag: 'MODULE 04', title: 'Service architecture & real-time systems', desc: 'Service boundaries, microservices, API gateways, queues, streams and WebSockets' },
      { tag: 'MODULE 05', title: 'Reliability & failure recovery', desc: 'Timeouts, retries, idempotency, circuit breakers, failover and disaster recovery' },
      { tag: 'MODULE 06', title: 'Architecting AI-integrated systems', desc: 'Model gateways, retrieval services, agent runtimes, eval pipelines and long-running workflows' },
      { tag: 'MODULE 07', title: 'Production architecture & operations', desc: 'Multi-tenancy, security, observability, SLOs, cost controls and incident response' },
      { tag: 'MODULE 08', title: 'System design case studies', desc: 'High-concurrency booking, personalized feeds, real-time messaging and production RAG' },
    ],
  },
  {
    id: 'phase6',
    tabLabel: 'Phase 6',
    cardTitle: 'Phase 6: Deploy for a customer',
    cardDesc: 'Forward deployed engineering and applied AI systems',
    badge: '[ 4 MODULES ]',
    hasViewToggle: false,
    modules: [
      { tag: 'MODULE 01', title: 'FDE discovery, scope & applied AI architecture', desc: 'Map the customer workflow, define success metrics, and decide where rules, automation, RAG or agents fit' },
      { tag: 'MODULE 02', title: 'Customer workflow build', desc: 'APIs, ingestion pipelines, retrieval and tool-calling workflows, integrated with external systems and enterprise data' },
      { tag: 'MODULE 03', title: 'Deployment readiness', desc: 'Evaluation datasets, failure-case testing, approval boundaries, and monitoring for quality, latency and cost' },
      { tag: 'MODULE 04', title: 'Production deployment & handoff', desc: 'Containerize and deploy, run a pilot, prepare rollback and incident procedures, and hand over ownership' },
    ],
  },
  {
    id: 'dsa',
    tabLabel: 'DSA',
    cardTitle: 'DSA: Java / Python',
    cardDesc: 'Data structures, algorithms and interview problem solving, in the language you pick',
    badge: '[ 9 TOPICS ]',
    hasViewToggle: false,
    languageTabs: [
      {
        id: 'java-dsa',
        label: 'Java',
        modules: [
          { tag: 'TOPIC 01', title: 'Complexity & brute-to-optimal thinking', desc: 'Time and space complexity, trade-offs and a repeatable framework for improving brute-force solutions' },
          { tag: 'TOPIC 02', title: 'Core linear patterns', desc: 'Arrays, hashing, prefix sums, two pointers, sliding windows, binary search, stacks, queues and deques' },
          { tag: 'TOPIC 03', title: 'Linked structures, recursion & backtracking', desc: 'Linked-list transformations, slow/fast pointers, recursion trees, subsets, permutations and pruning' },
          { tag: 'TOPIC 04', title: 'Trees, BSTs & tries', desc: 'Traversals, BFS/DFS, tree decomposition, lowest common ancestor, BST validation and prefix search' },
          { tag: 'TOPIC 05', title: 'Heaps, intervals, greedy & bit manipulation', desc: 'Top-K selection, two-heap patterns, sweep-line reasoning, scheduling, greedy proofs and compact state' },
          { tag: 'TOPIC 06', title: 'Graph algorithms & connectivity', desc: 'Graph modeling, BFS/DFS, topological sorting, cycle detection, Dijkstra and union-find' },
          { tag: 'TOPIC 07', title: 'Dynamic programming', desc: 'State design, memoization, tabulation, knapsack variants, string and grid DP, and tree DP' },
          { tag: 'TOPIC 08', title: 'Integrated interview practice', desc: 'Mixed-pattern problem solving, machine-coding framing, complexity defense and timed practice' },
          { tag: 'TOPIC 09', title: 'Optional advanced DSA', desc: 'Bellman-Ford, minimum spanning trees, interval DP, bitmasking, KMP and Rabin-Karp, Fenwick trees, segment-tree fundamentals and tree serialization' },
        ],
      },
      {
        id: 'python-dsa',
        label: 'Python',
        modules: [
          { tag: 'TOPIC 01', title: 'Complexity & brute-to-optimal thinking', desc: 'Time and space complexity, trade-offs and a repeatable framework for improving brute-force solutions' },
          { tag: 'TOPIC 02', title: 'Core linear patterns', desc: 'Arrays, hashing, prefix sums, two pointers, sliding windows, binary search, stacks, queues and deques' },
          { tag: 'TOPIC 03', title: 'Linked structures, recursion & backtracking', desc: 'Linked-list transformations, slow/fast pointers, recursion trees, subsets, permutations and pruning' },
          { tag: 'TOPIC 04', title: 'Trees, BSTs & tries', desc: 'Traversals, BFS/DFS, tree decomposition, lowest common ancestor, BST validation and prefix search' },
          { tag: 'TOPIC 05', title: 'Heaps, intervals, greedy & bit manipulation', desc: 'Top-K selection, two-heap patterns, sweep-line reasoning, scheduling, greedy proofs and compact state' },
          { tag: 'TOPIC 06', title: 'Graph algorithms & connectivity', desc: 'Graph modeling, BFS/DFS, topological sorting, cycle detection, Dijkstra and union-find' },
          { tag: 'TOPIC 07', title: 'Dynamic programming', desc: 'State design, memoization, tabulation, knapsack variants, string and grid DP, and tree DP' },
          { tag: 'TOPIC 08', title: 'Integrated interview practice', desc: 'Mixed-pattern problem solving, machine-coding framing, complexity defense and timed practice' },
          { tag: 'TOPIC 09', title: 'Optional advanced DSA', desc: 'Bellman-Ford, minimum spanning trees, interval DP, bitmasking, KMP and Rabin-Karp, Fenwick trees, segment-tree fundamentals and tree serialization' },
        ],
      },
    ],
  },
];

interface BELCurriculumSectionProps {
  onOpenCurriculumModal: () => void;
}

export function BELCurriculumSection({ onOpenCurriculumModal }: BELCurriculumSectionProps) {
  const [activePhaseId, setActivePhaseId] = useState<string>('phase1');
  const [selectedLang, setSelectedLang] = useState<Record<string, string>>({
    phase1: 'java',
    dsa: 'java-dsa',
  });
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  const activePhase = phases.find((p) => p.id === activePhaseId) || phases[0];

  // Modules resolution
  let currentModules: ModuleItem[] = [];
  if (activePhase.languageTabs) {
    const currentLangKey = selectedLang[activePhase.id] || activePhase.languageTabs[0].id;
    const tabObj = activePhase.languageTabs.find((t) => t.id === currentLangKey) || activePhase.languageTabs[0];
    currentModules = tabObj.modules;
  } else if (activePhase.modules) {
    currentModules = activePhase.modules;
  }

  // Slice if toggle is collapsed
  const displayedModules = activePhase.hasViewToggle && !isExpanded
    ? currentModules.slice(0, 6)
    : currentModules;

  return (
    <section className="w-full bg-white text-black py-16 sm:py-24 border-b border-[#e5e7eb] select-text">
      <div className="max-w-[1440px] mx-auto border-x border-[#e5e7eb] px-4 sm:px-8 lg:px-12">

        {/* Centered Heading & Subtitle */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-[38px] sm:text-[48px] lg:text-[56px] font-editorial text-black tracking-tight leading-none">
            Program curriculum
          </h2>
          <p className="text-zinc-500 text-xs sm:text-[14px] font-normal mt-3">
            40+ modules · 6 phases + DSA · one AI-first path
          </p>
        </div>

        {/* Main Curriculum Grid Container */}
        <div className="w-full border border-[#e5e7eb] bg-white overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#e5e7eb]">

            {/* Left Column: Phase Navigation Tabs */}
            <div className="lg:col-span-3 bg-[#f8f9fa] flex flex-col">
              {phases.map((phase) => {
                const isActive = phase.id === activePhaseId;
                return (
                  <button
                    key={phase.id}
                    onClick={() => {
                      setActivePhaseId(phase.id);
                      setIsExpanded(true);
                    }}
                    className={`w-full text-left transition-all cursor-pointer border-b border-[#e5e7eb] last:border-b-0 ${isActive
                      ? 'bg-black text-white p-6 relative shadow-md'
                      : 'p-4 sm:p-5 text-zinc-600 hover:text-black hover:bg-zinc-200/50 font-medium'
                      }`}
                  >
                    {isActive ? (
                      <div className="space-y-2">
                        <div className="font-editorial text-xl sm:text-2xl font-normal leading-tight text-white">
                          {phase.cardTitle}
                        </div>
                        <p className="text-xs text-zinc-400 font-light leading-relaxed">
                          {phase.cardDesc}
                        </p>
                        <div className="pt-2 text-[11px] font-mono font-semibold tracking-wider text-zinc-300">
                          {phase.badge}
                        </div>
                      </div>
                    ) : (
                      <div className="text-sm font-medium">
                        {phase.tabLabel}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right Column: Language Switcher + Modules Grid */}
            <div className="lg:col-span-9 bg-white flex flex-col justify-between">

              <div>
                {/* Optional Language Switcher Strip (Phase 1 and DSA) */}
                {activePhase.languageTabs && (
                  <div className="w-full flex items-center border-b border-[#e5e7eb] bg-zinc-50">
                    {activePhase.languageTabs.map((langTab) => {
                      const isCurrentLang = (selectedLang[activePhase.id] || activePhase.languageTabs![0].id) === langTab.id;
                      return (
                        <button
                          key={langTab.id}
                          onClick={() => setSelectedLang((prev) => ({ ...prev, [activePhase.id]: langTab.id }))}
                          className={`flex-1 py-4 sm:py-5 px-4 text-center font-medium text-xs sm:text-[15px] transition-colors border-r border-[#e5e7eb] last:border-r-0 cursor-pointer ${isCurrentLang
                            ? 'bg-[#6366f1] text-white font-semibold'
                            : 'text-zinc-600 hover:text-black bg-white hover:bg-zinc-50'
                            }`}
                        >
                          {langTab.label}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* Modules 2-Column Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 divide-[#e5e7eb]">
                  {displayedModules.map((mod, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                      <div
                        key={idx}
                        className={`p-6 sm:p-8 flex flex-col justify-start border-b border-[#e5e7eb] ${isEven ? 'md:border-r md:border-[#e5e7eb]' : ''
                          }`}
                      >
                        <span className="text-[11px] font-mono font-bold tracking-wider text-zinc-400 uppercase mb-3">
                          {mod.tag}
                        </span>
                        <h4 className="text-lg sm:text-xl font-editorial font-normal text-black mb-2 leading-tight">
                          {mod.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed">
                          {mod.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* View More / View Less Toggle Button */}
              {activePhase.hasViewToggle && (
                <div className="p-4 sm:p-6 bg-zinc-50/70 border-t border-[#e5e7eb] flex justify-center">
                  <button
                    onClick={() => setIsExpanded((prev) => !prev)}
                    className="px-6 py-2 rounded-lg border border-zinc-300 bg-white hover:bg-zinc-100 text-xs sm:text-sm font-medium text-zinc-800 transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
                  >
                    <span>{isExpanded ? 'View less' : 'View more'}</span>
                    {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                </div>
              )}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
