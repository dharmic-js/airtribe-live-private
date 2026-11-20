'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useApplyModal } from '@/components/ApplyModalContext';
import { AirtribeButton } from '@/components/AirtribeButton';
import {
  ArrowLeft,
  Download,
  Share2,
  CheckCircle2,
  Clock,
  Calendar,
  Users,
  Award,
  BookOpen,
  Sparkles,
  Layers,
  Terminal,
  Cpu,
  BarChart3,
  Rocket,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  Laptop,
  Check
} from 'lucide-react';

interface WeekDetail {
  week: number;
  title: string;
  focus: string;
  sessions: string[];
  skills: string[];
  deliverable: string;
}

interface PhaseDetail {
  phase: number;
  title: string;
  subtitle: string;
  weeks: string;
  description: string;
  color: string;
  items: WeekDetail[];
}

const curriculumPhases: PhaseDetail[] = [
  {
    phase: 1,
    title: 'Problem Discovery, User Research & AI-Assisted Ideation',
    subtitle: 'From ambiguous problem spaces to validated opportunities',
    weeks: 'Weeks 1 – 4',
    color: 'from-emerald-500/20 to-teal-500/5 border-emerald-500/30 text-emerald-400',
    description:
      'Master modern user discovery by combining traditional ethnographic inquiry with LLM-powered synthetic personas, deep competitive intelligence, and structured prioritization trees.',
    items: [
      {
        week: 1,
        title: 'Evolution of Product Management & The AI-First Mindset',
        focus: 'Foundations & Mental Models',
        sessions: [
          'Deconstructing traditional PM vs. AI-augmented PM workflows',
          'Mental models for product reasoning: First principles, inverted logic, and opportunity mapping',
          'Navigating probabilistic software vs. deterministic business logic',
          'Case study: How Spotify and Netflix transitioned from heuristics to predictive algorithms',
        ],
        skills: ['AI PM Mindset', 'First Principles Thinking', 'System Modeling'],
        deliverable: 'Comprehensive AI Readiness Diagnostic for a B2C or B2B SaaS product',
      },
      {
        week: 2,
        title: 'User Research, Customer Discovery & Synthetic AI Personas',
        focus: 'Qualitative & Quantitative Discovery',
        sessions: [
          'Designing unbiased customer discovery interview protocols (The Mom Test framework)',
          'Simulating and validating qualitative personas using customized Claude & GPT personas',
          'Extracting latent friction points from hundreds of customer call transcripts using semantic embeddings',
          'Synthesizing customer insights into actionable Jobs-To-Be-Done (JTBD) canvases',
        ],
        skills: ['Customer Discovery', 'JTBD Framework', 'Synthetic AI Personas', 'Transcript Mining'],
        deliverable: 'Validated User Research Dossier with 3 Deep JTBD Personas and Problem Framing',
      },
      {
        week: 3,
        title: 'Market Sizing, Competitive Landscapes & Moat Architecture',
        focus: 'Market Economics & Strategy',
        sessions: [
          'Bottom-up vs. top-down market sizing: TAM, SAM, SOM calculations with defensible assumptions',
          'Analyzing AI defensibility: Data flywheels, workflow lock-in, and switching costs',
          'Competitive intelligence gathering using automated AI scrapers and sentiment pipelines',
          'Case study: Perplexity vs. Google Search — evaluating incumbent vulnerability',
        ],
        skills: ['TAM/SAM/SOM Sizing', 'Competitive Moats', 'Defensibility Matrix'],
        deliverable: 'Market Sizing Model & Competitive Advantage Matrix in Google Sheets/Excel',
      },
      {
        week: 4,
        title: 'Opportunity Solution Trees & Ruthless Prioritization',
        focus: 'Prioritization & Roadmapping',
        sessions: [
          'Constructing Teresa Torres Opportunity Solution Trees (OST) for complex domains',
          'Multi-variable prioritization frameworks: RICE, Kano, Value vs. Complexity, and Cost of Delay',
          'Handling stakeholder trade-offs, engineering pushback, and technical debt',
          'Building quarterly strategic product roadmaps with confidence scores',
        ],
        skills: ['Opportunity Solution Trees', 'RICE Scoring', 'Stakeholder Alignment', 'Roadmapping'],
        deliverable: 'Quarterly Strategic Roadmap with RICE-Scored Backlog & Opportunity Solution Tree',
      },
    ],
  },
  {
    phase: 2,
    title: 'Product Specifications, AI System Design & Rapid Prototyping',
    subtitle: 'From conceptual ideas to high-fidelity clickable reality',
    weeks: 'Weeks 5 – 7',
    color: 'from-blue-500/20 to-indigo-500/5 border-blue-500/30 text-blue-400',
    description:
      'Learn how to write watertight AI PRDs, understand how modern LLMs, embeddings, and vector databases operate under the hood, and build interactive clickable prototypes using modern AI code tools.',
    items: [
      {
        week: 5,
        title: 'Writing Modern AI PRDs (Product Requirement Documents)',
        focus: 'Technical Specifications',
        sessions: [
          'Deconstructing high-standard PRDs from Stripe, Airbnb, and Uber',
          'Defining non-functional requirements for AI: Latency targets, hallucination tolerances, cost budgets',
          'Specifying fallback mechanisms, human-in-the-loop triggers, and defensive UX states',
          'Writing comprehensive acceptance criteria with edge-case matrices',
        ],
        skills: ['AI PRD Authoring', 'Fallback Architecture', 'Acceptance Criteria', 'Edge-Case Design'],
        deliverable: 'Complete 8-Page Production-Ready AI Feature PRD with Guardrail Specifications',
      },
      {
        week: 6,
        title: 'AI Systems Architecture for Product Managers',
        focus: 'Technical Foundations',
        sessions: [
          'Demystifying LLM architectures: Tokens, context windows, temperature, and fine-tuning vs. RAG',
          'Vector embeddings, semantic vector databases (Pinecone, Qdrant), and retrieval indexing',
          'API design fundamentals for PMs: REST, GraphQL, Webhooks, streaming responses (SSE)',
          'Evaluating cost economics: Token calculation, model selection (Claude 3.5 Sonnet vs GPT-4o-mini)',
        ],
        skills: ['RAG Architecture', 'Vector Databases', 'REST/GraphQL APIs', 'Token Cost Modeling'],
        deliverable: 'AI System Architecture Diagram & Cost-per-Query Economic Forecast',
      },
      {
        week: 7,
        title: 'Rapid AI Prototyping with No-Code & AI Code Generators',
        focus: 'Functional Prototyping',
        sessions: [
          '0-to-1 UI generation using v0 by Vercel, Claude Artifacts, and Lovable',
          'Wireframing and user journey micro-interactions in Figma',
          'Deploying functional prototypes to Vercel/Netlify with live user test links',
          'Running unmoderated usability tests on prototypes using Maze and UserTesting',
        ],
        skills: ['v0 Prototyping', 'Figma Wireframing', 'Vercel Deployment', 'Usability Testing'],
        deliverable: 'Live Interactive Web Prototype deployed on Vercel with Usability Test Report',
      },
    ],
  },
  {
    phase: 3,
    title: 'Product Analytics, Experimentation & Data-Driven Decisions',
    subtitle: 'From vanity numbers to compounding business metrics',
    weeks: 'Weeks 8 – 10',
    color: 'from-purple-500/20 to-pink-500/5 border-purple-500/30 text-purple-400',
    description:
      'Establish airtight telemetry, track granular behavioral events, build retention cohort analyses, and run statistically rigorous A/B experiments that guide product growth.',
    items: [
      {
        week: 8,
        title: 'Metrics Architecture & The North Star Framework',
        focus: 'Product Telemetry',
        sessions: [
          'Formulating the true North Star Metric and input metric trees',
          'Comparing framework families: HEART (Google) vs. AARRR Pirate Funnel vs. REFORGE growth loops',
          'Designing event instrumentation tracking plans for Mixpanel and Segment',
          'Detecting metric gaming and cannibalization effects across core features',
        ],
        skills: ['North Star Metric', 'HEART Framework', 'Tracking Schema Design', 'Metric Trees'],
        deliverable: 'Comprehensive Tracking Schema & Event Taxonomy for Mixpanel/Segment',
      },
      {
        week: 9,
        title: 'Deep-Dive Analytics: Funnels, Drop-offs & Segmentation',
        focus: 'Behavioral Analytics',
        sessions: [
          'Setting up behavioral cohorts and identifying high-intent drop-off steps',
          'Building complex multi-step conversion funnels in Mixpanel and Amplitude',
          'Segmenting user behaviors by acquisition channel, platform, and engagement velocity',
          'Case study: Optimizing onboarding completion rate for an edtech subscription app',
        ],
        skills: ['Funnel Optimization', 'Behavioral Segmentation', 'Mixpanel', 'Amplitude'],
        deliverable: 'Interactive Analytics Dashboard with Funnel Drop-off Diagnostic & Remediation Plan',
      },
      {
        week: 10,
        title: 'Retention Cohorts, A/B Testing & Statistical Rigor',
        focus: 'Experimentation & Growth',
        sessions: [
          'Reading and interpreting N-day, unbounded, and bracketed retention curves',
          'Formulating falsifiable product hypotheses and test variants',
          'Statistical fundamentals for PMs: P-values, experiment population sizing, statistical power, MDE',
          'Managing trade-offs between speed and certainty: Multi-armed bandits vs. classical A/B tests',
        ],
        skills: ['Cohort Retention Analysis', 'Hypothesis Formulation', 'A/B Test Design', 'Statistical Power'],
        deliverable: 'Experimentation Spec Sheet with Traffic & Cohort Sizing Calculator and Variant Wireframes',
      },
    ],
  },
  {
    phase: 4,
    title: 'Product Strategy, Go-to-Market & Business Models',
    subtitle: 'From launch day to scalable distribution and monetization',
    weeks: 'Weeks 11 – 13',
    color: 'from-amber-500/20 to-orange-500/5 border-amber-500/30 text-amber-400',
    description:
      'Learn how top product leaders orchestrate multi-channel GTM campaigns, architect Product-Led Growth (PLG) viral loops, design high-converting pricing tiers, and optimize customer lifetime value.',
    items: [
      {
        week: 11,
        title: 'Product-Led Growth (PLG) & Virality Flywheels',
        focus: 'Growth Mechanics',
        sessions: [
          'Dissecting best-in-class PLG engines: Figma, Slack, Notion, and Loom',
          'Designing time-to-value (TTV) acceleration and friction-free aha moments',
          'Engineering organic viral loops: Collaborative loops, word-of-mouth loops, and badge incentives',
          'Balancing freemium, free-trial, and reverse-trial onboarding architectures',
        ],
        skills: ['PLG Flywheels', 'Time-to-Value (TTV)', 'Viral Coefficients', 'Onboarding Flows'],
        deliverable: 'End-to-End PLG Strategy Blueprint with Self-Serve Onboarding Flowchart',
      },
      {
        week: 12,
        title: 'Monetization, Pricing Tiers & Unit Economics',
        focus: 'Product Economics',
        sessions: [
          'Pricing models: Usage-based (tokens/compute), per-seat, tiered subscription, and credit pools',
          'Conducting willingness-to-pay research (Van Westendorp Price Sensitivity Meter)',
          'Modeling unit economics: Customer Acquisition Cost (CAC), Lifetime Value (LTV), Payback Period',
          'Designing paywalls, upgrade triggers, and churn-reduction retention loops',
        ],
        skills: ['Pricing Strategy', 'Van Westendorp Survey', 'LTV:CAC Modeling', 'Paywall Design'],
        deliverable: 'Financial Unit Economics Model with Tiered Pricing Proposal',
      },
      {
        week: 13,
        title: 'Go-To-Market (GTM) Strategy & Cross-Functional Launch',
        focus: 'Execution & Commercialization',
        sessions: [
          'Constructing a multi-tiered GTM launch checklist (Internal, Beta, General Availability)',
          'Aligning Product Marketing, Sales Engineering, Customer Success, and Legal/Compliance',
          'Structuring high-impact Product Hunt, Reddit, and Twitter/X launch campaigns',
          'Post-launch retrospectives, triage protocols, and hypercare monitoring',
        ],
        skills: ['GTM Launch Playbook', 'Cross-Functional Alignment', 'Product Marketing', 'Hypercare'],
        deliverable: 'Full GTM Launch Playbook with Rollout Timeline, RACI Matrix, and KPI Scorecard',
      },
    ],
  },
  {
    phase: 5,
    title: '0-to-1 Capstone Project, Live Demo Day & Career Acceleration',
    subtitle: 'From learner to proven product practitioner ready to lead',
    weeks: 'Weeks 14 – 16',
    color: 'from-rose-500/20 to-red-500/5 border-rose-500/30 text-rose-400',
    description:
      'Synthesize every skill acquired over 13 weeks into an end-to-end Capstone Product. Build live prototypes, validate metrics, present live on Demo Day before VP/Director judges, and conquer PM interviews.',
    items: [
      {
        week: 14,
        title: 'Capstone Sprint 1: Problem Space, User Discovery & High-Fidelity Prototype',
        focus: 'Capstone Execution',
        sessions: [
          'Selecting high-impact problem statements across FinTech, AI, Quick Commerce, or HealthTech',
          '1:1 mentor critique on problem validation and TAM defensibility',
          'Refining clickable interactive prototype with real mock data and responsive design',
          'Mid-capstone milestone review with industry PM coaches',
        ],
        skills: ['Capstone Formulation', 'Product Validation', 'Interactive Prototyping'],
        deliverable: 'Capstone Milestone 1: Problem Definition Brief, PRD v1, and Clickable Prototype',
      },
      {
        week: 15,
        title: 'Capstone Sprint 2: Metrics Telemetry, GTM Strategy & Pitch Deck Polishing',
        focus: 'Capstone Finalization',
        sessions: [
          'Integrating full telemetry tracking architecture and synthetic retention modeling',
          'Crafting a compelling 10-slide executive investment / product deck',
          'Mock presentation run-throughs with senior PMs to stress-test objections',
          'Storytelling techniques: Hook, tension, breakthrough, and commercial traction',
        ],
        skills: ['Executive Storytelling', 'Product Pitching', 'Presentation Design'],
        deliverable: 'Capstone Milestone 2: Complete Product Portfolio Dossier & 10-Slide Pitch Deck',
      },
      {
        week: 16,
        title: 'Live Demo Day & Executive PM Career Acceleration',
        focus: 'Graduation & Placement',
        sessions: [
          'Live Demo Day Pitch before a jury of Product Directors and VPs from top tech firms',
          'Live Q&A defense on product trade-offs, architecture decisions, and unit economics',
          'Comprehensive PM interview prep: Product Sense, Execution/Metrics, Behavioral, and System Design',
          'Resume transformation, LinkedIn positioning, and Airtribe Alumni Network induction',
        ],
        skills: ['Demo Day Defense', 'PM Interview Mastery', 'Portfolio Presentation', 'Executive Presence'],
        deliverable: 'Official Airtribe Certified AI Product Manager Credential & Demo Day Showcase',
      },
    ],
  },
];

const productionTools = [
  { name: 'OpenAI API & GPT-4o', category: 'LLM Foundations', desc: 'System prompts, function calling, parameter tuning' },
  { name: 'Claude 3.5 Sonnet', category: 'Synthetic Research', desc: 'Artifacts, customer persona simulations, analysis' },
  { name: 'v0 by Vercel', category: 'Rapid Prototyping', desc: 'Generative React/Tailwind UI prototyping' },
  { name: 'Cursor & GitHub Copilot', category: 'AI Development', desc: 'AI-assisted code generation & inspection' },
  { name: 'Mixpanel & Amplitude', category: 'Product Analytics', desc: 'Funnels, cohort retention, behavioral cohorts' },
  { name: 'Figma', category: 'Design Systems', desc: 'User flows, wireframing, interactive components' },
  { name: 'Postman', category: 'API Inspection', desc: 'Testing endpoints, JSON payload schema exploration' },
  { name: 'Perplexity Pro', category: 'Market Intelligence', desc: 'Deep research, citations, competitor analysis' },
  { name: 'Notion', category: 'Product Knowledge', desc: 'Living PRDs, decision logs, RACI frameworks' },
  { name: 'Miro', category: 'Discovery & Trees', desc: 'Opportunity Solution Trees, user journey mapping' },
];

export default function CurriculumPage() {
  const { openModal } = useApplyModal();
  const [activePhase, setActivePhase] = useState<number>(1);
  const [copiedLink, setCopiedLink] = useState(false);

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  const handleShare = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="w-full bg-[#0a0a0d] text-zinc-100 min-h-screen selection:bg-purple-600 selection:text-white print:bg-white print:text-black">
      
      {/* 1. TOP DOCUMENT ACTION BAR (Hidden in print) */}
      <header className="sticky top-0 z-40 w-full bg-[#0e0e14]/95 border-b border-[#232328] backdrop-blur-md px-4 sm:px-8 py-3.5 flex items-center justify-between print:hidden">
        <div className="flex items-center gap-4">
          <Link
            href="/courses/product-management-launchpad"
            className="inline-flex items-center gap-2 text-xs sm:text-sm text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Launchpad</span>
          </Link>
          <span className="hidden sm:inline text-zinc-600">|</span>
          <div className="hidden sm:flex items-center gap-2 text-xs text-zinc-300 font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>OFFICIAL SYLLABUS SPECIFICATION &bull; v4.2</span>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handleShare}
            className="px-3 py-2 rounded-md bg-[#18181f] hover:bg-[#23232b] text-zinc-300 hover:text-white text-xs font-medium border border-[#2b2b36] transition-colors flex items-center gap-1.5 cursor-pointer"
            title="Share Document"
          >
            {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
            <span className="hidden md:inline">{copiedLink ? 'Copied' : 'Share'}</span>
          </button>

          <button
            onClick={handlePrint}
            className="px-3.5 py-2 rounded-md bg-[#18181f] hover:bg-[#23232b] text-zinc-200 hover:text-white text-xs font-medium border border-[#2b2b36] transition-colors flex items-center gap-1.5 cursor-pointer"
            title="Download PDF"
          >
            <Download className="w-3.5 h-3.5 text-purple-400" />
            <span>Download PDF</span>
          </button>

          <AirtribeButton
            text="Apply now"
            onClick={() => openModal('AI-First Product Management')}
            className="!w-28 !h-9 !text-xs"
          />
        </div>
      </header>

      {/* 2. DOCUMENT HERO & OVERVIEW */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-8 pt-10 sm:pt-14 pb-10 border-b border-[#232328] print:border-none print:pt-4">
        
        {/* Meta badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-6 text-xs font-mono">
          <span className="px-2.5 py-1 rounded bg-purple-500/10 border border-purple-500/30 text-purple-300 font-medium">
            AIRTRIBE ACADEMY
          </span>
          <span className="px-2.5 py-1 rounded bg-zinc-800 text-zinc-300">
            REF: AT-PM-LP-2026-v4.2
          </span>
          <span className="px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
            Next Cohort: 21 November
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4 print:text-black">
          AI-First Product Management
          <span className="block font-editorial italic font-normal text-purple-300 print:text-purple-700 mt-1">
            Official 16-Week Curriculum Dossier
          </span>
        </h1>

        <p className="text-zinc-400 print:text-zinc-700 text-base sm:text-lg max-w-3xl leading-relaxed mb-8">
          The definitive syllabus architecture designed for aspiring, transitioning, and scaling product managers. 
          Structured around 16 weeks of intensive live masterclasses, hands-on labs, AI-native tooling, real-world product briefs, 
          and a production-grade 0-to-1 capstone presented before senior tech leaders.
        </p>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-[#121218] border border-[#232328] print:bg-gray-100 print:border-gray-300">
          <div>
            <div className="text-zinc-500 print:text-zinc-600 text-xs uppercase tracking-wider font-semibold">Duration</div>
            <div className="text-white print:text-black text-xl font-bold mt-1 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-purple-400" />
              16 Weeks
            </div>
            <div className="text-zinc-400 print:text-zinc-600 text-xs mt-0.5">8–10 hrs / week</div>
          </div>

          <div>
            <div className="text-zinc-500 print:text-zinc-600 text-xs uppercase tracking-wider font-semibold">Faculty & Mentors</div>
            <div className="text-white print:text-black text-xl font-bold mt-1 flex items-center gap-1.5">
              <Users className="w-4 h-4 text-cyan-400" />
              15+ Leaders
            </div>
            <div className="text-zinc-400 print:text-zinc-600 text-xs mt-0.5">Meta, Shopify, Razorpay</div>
          </div>

          <div>
            <div className="text-zinc-500 print:text-zinc-600 text-xs uppercase tracking-wider font-semibold">Format</div>
            <div className="text-white print:text-black text-xl font-bold mt-1 flex items-center gap-1.5">
              <Laptop className="w-4 h-4 text-emerald-400" />
              Live Interactive
            </div>
            <div className="text-zinc-400 print:text-zinc-600 text-xs mt-0.5">Weekend sessions + Labs</div>
          </div>

          <div>
            <div className="text-zinc-500 print:text-zinc-600 text-xs uppercase tracking-wider font-semibold">Outcome</div>
            <div className="text-white print:text-black text-xl font-bold mt-1 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-amber-400" />
              AI PM Certification
            </div>
            <div className="text-zinc-400 print:text-zinc-600 text-xs mt-0.5">Demo Day portfolio</div>
          </div>
        </div>

      </section>

      {/* 3. CURRICULUM ARCHITECTURE NAVIGATION (Interactive tabs for 5 phases) */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-8 py-8">
        
        {/* Phase selector tabs (Hidden in print) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-[#232328] scrollbar-none print:hidden">
          {curriculumPhases.map((phase) => (
            <button
              key={phase.phase}
              onClick={() => setActivePhase(phase.phase)}
              className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
                activePhase === phase.phase
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30'
                  : 'bg-[#14141a] text-zinc-400 hover:text-white hover:bg-[#1c1c24] border border-[#232328]'
              }`}
            >
              <span className="w-5 h-5 rounded-full bg-white/20 text-xs flex items-center justify-center font-bold">
                {phase.phase}
              </span>
              <span>Phase {phase.phase}: {phase.weeks}</span>
            </button>
          ))}
        </div>

        {/* PHASES LIST (Displays all 5 phases in print or shows selected / full list) */}
        <div className="space-y-12">
          {curriculumPhases.map((phase) => {
            const isSelected = activePhase === phase.phase;
            return (
              <div
                key={phase.phase}
                className={`rounded-2xl border bg-[#101016] p-6 sm:p-8 transition-all print:bg-white print:border-gray-300 print:p-4 print:mb-8 ${
                  isSelected ? 'border-purple-500/50 ring-1 ring-purple-500/30' : 'border-[#232328]'
                }`}
              >
                {/* Phase Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#232328] print:border-gray-300">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                        PHASE {phase.phase} &bull; {phase.weeks}
                      </span>
                      <span className="text-zinc-500 print:text-zinc-600 text-xs font-mono">
                        {phase.items.length} Modules
                      </span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-semibold text-white print:text-black">
                      {phase.title}
                    </h2>
                    <p className="text-zinc-400 print:text-zinc-600 text-sm mt-1">
                      {phase.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 print:text-zinc-700 max-w-md bg-[#161620] print:bg-gray-50 p-3.5 rounded-lg border border-[#2b2b36] print:border-gray-200">
                    {phase.description}
                  </p>
                </div>

                {/* Weeks in Phase */}
                <div className="divide-y divide-[#1e1e26] print:divide-gray-200 mt-4">
                  {phase.items.map((week) => (
                    <div key={week.week} className="py-6 first:pt-4 last:pb-2">
                      
                      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                        <div className="flex items-start gap-3.5">
                          <span className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 font-mono text-sm font-bold flex items-center justify-center shrink-0">
                            W{week.week}
                          </span>
                          <div>
                            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block">
                              {week.focus}
                            </span>
                            <h3 className="text-lg sm:text-xl font-semibold text-white print:text-black mt-0.5">
                              Week {week.week}: {week.title}
                            </h3>
                          </div>
                        </div>

                        {/* Deliverable badge */}
                        <div className="lg:text-right shrink-0">
                          <span className="text-[11px] font-mono uppercase text-emerald-400 print:text-emerald-700 block font-semibold mb-0.5">
                            Practical Deliverable
                          </span>
                          <span className="text-xs text-zinc-300 print:text-zinc-800 bg-[#171720] print:bg-gray-100 px-3 py-1.5 rounded border border-[#2b2b36] print:border-gray-200 inline-block font-medium">
                            {week.deliverable}
                          </span>
                        </div>
                      </div>

                      {/* Sessions Covered */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pl-0 sm:pl-12 mt-3">
                        {week.sessions.map((session, sIdx) => (
                          <div key={sIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300 print:text-zinc-700">
                            <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                            <span>{session}</span>
                          </div>
                        ))}
                      </div>

                      {/* Skills Acquired Tags */}
                      <div className="flex flex-wrap items-center gap-1.5 pl-0 sm:pl-12 mt-4">
                        <span className="text-[11px] font-mono text-zinc-500 uppercase mr-1">Skills:</span>
                        {week.skills.map((skill, kIdx) => (
                          <span
                            key={kIdx}
                            className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#1a1a24] text-zinc-300 border border-[#2d2d38] print:bg-gray-100 print:text-zinc-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

      </section>

      {/* 4. TOOLS & TECH STACK COVERED */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-8 py-12 border-t border-[#232328] print:border-gray-300">
        
        <div className="mb-8">
          <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold block mb-1">
            HANDS-ON TOOLCHAIN
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white print:text-black">
            The Modern AI Product Manager Stack
          </h2>
          <p className="text-zinc-400 print:text-zinc-600 text-sm mt-1 max-w-2xl">
            You will not just discuss AI theoretically. You will write code with AI generators, inspect production APIs,
            query semantic vector indexes, and run live analytics instrumentation on actual applications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {productionTools.map((tool, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#121218] border border-[#232328] hover:border-purple-500/40 transition-colors print:bg-white print:border-gray-300"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-semibold text-sm text-white print:text-black">{tool.name}</span>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-zinc-800 print:bg-gray-200 text-zinc-300 print:text-zinc-700">
                  {tool.category}
                </span>
              </div>
              <p className="text-xs text-zinc-400 print:text-zinc-600 leading-relaxed">{tool.desc}</p>
            </div>
          ))}
        </div>

      </section>

      {/* 5. 0-TO-1 CAPSTONE PROJECT SPECIFICATION */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-8 py-12 border-t border-[#232328] print:border-gray-300">
        
        <div className="rounded-2xl border border-purple-500/40 bg-gradient-to-b from-purple-950/20 via-[#101016] to-[#0d0d12] p-6 sm:p-10 print:bg-white print:border-gray-300">
          
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
              GRADUATION CAPSTONE
            </span>
            <span className="text-xs text-zinc-400">Evaluated by VP/Director Jury</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-semibold text-white print:text-black mb-3">
            Real-World Capstone Deliverables
          </h2>

          <p className="text-zinc-300 print:text-zinc-700 text-sm sm:text-base max-w-3xl leading-relaxed mb-8">
            Every candidate builds an end-to-end product dossier from scratch. You will choose a challenging problem space
            inspired by real market disruptions (e.g. JioHotstar personalized churn defense, Zepto dynamic delivery bundling,
            or Swiggy conversational food ordering), formulate hypotheses, author PRDs, build interactive clickable prototypes,
            and present live on Demo Day.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-5 rounded-xl bg-[#161622] border border-[#2b2b3a] print:bg-gray-50 print:border-gray-200">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-sm mb-3">
                01
              </div>
              <h3 className="font-semibold text-white print:text-black text-base mb-1.5">
                The Product Dossier
              </h3>
              <p className="text-xs text-zinc-400 print:text-zinc-600 leading-relaxed">
                A complete 10+ page living documentation repository in Notion, containing User Discovery Findings, JTBD Personas,
                Market Opportunity Sizing, and Full AI PRD with technical edge-case fallbacks.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#161622] border border-[#2b2b3a] print:bg-gray-50 print:border-gray-200">
              <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold text-sm mb-3">
                02
              </div>
              <h3 className="font-semibold text-white print:text-black text-base mb-1.5">
                The Working Prototype
              </h3>
              <p className="text-xs text-zinc-400 print:text-zinc-600 leading-relaxed">
                A deployed, clickable web interface built with modern prototyping engines (v0/Figma) showcasing the core AI
                feature interactions, happy paths, and defensive failure UI states.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#161622] border border-[#2b2b3a] print:bg-gray-50 print:border-gray-200">
              <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 flex items-center justify-center font-bold text-sm mb-3">
                03
              </div>
              <h3 className="font-semibold text-white print:text-black text-base mb-1.5">
                Demo Day Pitch & Defense
              </h3>
              <p className="text-xs text-zinc-400 print:text-zinc-600 leading-relaxed">
                A 10-slide executive pitch deck delivered live before an invited jury of VP of Products and Directors, 
                followed by 10 minutes of rigorous defense on trade-offs and economics.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* 6. WEEKLY LEARNING SCHEDULE & COMMITMENT */}
      <section className="max-w-[1200px] mx-auto px-4 sm:px-8 py-12 border-t border-[#232328] print:border-gray-300">
        
        <div className="mb-8">
          <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold block mb-1">
            STRUCTURE & CADENCE
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white print:text-black">
            Weekly Learning Rhythm (8–10 hrs / week)
          </h2>
          <p className="text-zinc-400 print:text-zinc-600 text-sm mt-1 max-w-2xl">
            Designed specifically for working professionals. Live sessions are held on weekends with flexible asynchronous
            assignments and mid-week peer group syncs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl bg-[#121218] border border-[#232328] print:bg-white print:border-gray-300">
            <div className="flex items-center gap-2 text-purple-400 font-semibold text-sm mb-2">
              <Calendar className="w-4 h-4" />
              <span>Saturday: Masterclass</span>
            </div>
            <div className="text-xs text-zinc-300 print:text-zinc-700 font-mono mb-2">11:00 AM – 1:30 PM IST (2.5 hrs)</div>
            <p className="text-xs text-zinc-400 print:text-zinc-600 leading-relaxed">
              Deep conceptual breakdown, live architectural case studies, teardowns of production features, and interactive Q&A.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#121218] border border-[#232328] print:bg-white print:border-gray-300">
            <div className="flex items-center gap-2 text-cyan-400 font-semibold text-sm mb-2">
              <Laptop className="w-4 h-4" />
              <span>Sunday: Hands-on Lab</span>
            </div>
            <div className="text-xs text-zinc-300 print:text-zinc-700 font-mono mb-2">11:00 AM – 1:00 PM IST (2.0 hrs)</div>
            <p className="text-xs text-zinc-400 print:text-zinc-600 leading-relaxed">
              Live build-alongs: authoring PRDs in real-time, building prototypes in v0, configuring Mixpanel events, and peer reviews.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#121218] border border-[#232328] print:bg-white print:border-gray-300">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm mb-2">
              <Users className="w-4 h-4" />
              <span>Mid-Week: Pod Sync & Mentorship</span>
            </div>
            <div className="text-xs text-zinc-300 print:text-zinc-700 font-mono mb-2">Wednesday / Thursday (1.5 hrs)</div>
            <p className="text-xs text-zinc-400 print:text-zinc-600 leading-relaxed">
              Small peer pod (4-5 members) working sessions, assignment debugging, and dedicated 1:1 mentor office hours.
            </p>
          </div>
        </div>

      </section>

      {/* 7. ADMISSIONS & ENROLMENT FOOTER CTA (Hidden in print) */}
      <section className="w-full bg-[#0d0d12] border-t border-[#232328] py-16 px-4 sm:px-8 text-center print:hidden">
        <div className="max-w-2xl mx-auto space-y-6">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
            ENROLMENT DEADLINE &bull; 21 NOVEMBER
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight">
            Ready to lead in the AI product era?
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Cohorts are capped at 45 seats to preserve high mentor-to-learner ratios and individualized feedback on capstones.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <AirtribeButton
              text="Apply for this cohort"
              onClick={() => openModal('AI-First Product Management')}
              className="!w-52 !h-12 !text-sm"
            />

            <button
              onClick={handlePrint}
              className="px-6 py-3 rounded-md text-sm font-medium text-white bg-transparent border border-[#333] hover:border-zinc-400 transition-colors cursor-pointer flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-purple-400" />
              <span>Save / Print PDF</span>
            </button>
          </div>

          <div className="pt-6 text-xs text-zinc-500 font-mono">
            <span>&copy; 2026 Airtribe Private Limited &bull; Official Curriculum Specification Document</span>
          </div>
        </div>
      </section>

    </div>
  );
}
