'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useApplyModal } from '@/components/ApplyModalContext';
import { AirtribeButton } from '@/components/AirtribeButton';
import { ToolsSection } from '@/components/ToolsSection';
import { ProgramsAtAGlanceSection } from '@/components/ProgramsAtAGlanceSection';
import { PMStoriesSection } from '@/components/PMStoriesSection';
import { BonusPerksSection } from '@/components/BonusPerksSection';
import { TrustedCompaniesSection } from '@/components/TrustedCompaniesSection';
import { RealWorldProjectsSection } from '@/components/RealWorldProjectsSection';
import {
  X,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';

const partnerLogos = [
  { name: 'Adobe', src: '/logos/adobe.bed3d518.svg', width: 44, height: 36 },
  { name: 'Shopify', src: '/logos/shopify.d0cf7ff1.svg', width: 34, height: 36 },
  { name: 'Flipkart', src: '/flipkart.600cc75b.webp', width: 48, height: 28 },
  { name: 'PhonePe', src: '/phonepe.a21c03c3.webp', width: 46, height: 26 },
  { name: 'CRED', src: '/logos/cred.a4cd9d0e.svg', width: 42, height: 24 },
  { name: 'Zepto', src: '/zepto.a70f9f38.webp', width: 46, height: 22 },
  { name: 'Meesho', src: '/meesho.25371ed5.webp', width: 44, height: 24 },
  { name: 'Paytm', src: '/logos/paytm.83ecf65f.svg', width: 48, height: 18 },
  { name: 'OYO', src: '/oyo.bf15604e.webp', width: 40, height: 22 },
  { name: 'Rapido', src: '/rapido.01bff05a.svg', width: 46, height: 22 },
];

interface CurriculumModule {
  tag: string;
  title: string;
  desc: string;
}

interface CurriculumPhase {
  id: string;
  tabLabel: string;
  activeTitle: string;
  activeDesc: string;
  activeBadge: string;
  modules: CurriculumModule[];
  showCalloutBanner: boolean;
  hasViewToggle?: boolean;
}

const curriculumPhases: CurriculumPhase[] = [
  {
    id: 'phase1',
    tabLabel: 'Phase 1',
    activeTitle: 'Phase 1: Craft',
    activeDesc: 'Product thinking, research instincts and problem-solving fundamentals',
    activeBadge: '[ 4 MODULES ]',
    showCalloutBanner: true,
    hasViewToggle: false,
    modules: [
      {
        tag: 'MODULE 01',
        title: 'Fundamentals of product management',
        desc: 'What PMs actually do, product sense through teardowns, B2B vs B2C roles and your first real user conversation',
      },
      {
        tag: 'MODULE 02',
        title: 'Product strategy & strategic thinking',
        desc: 'Vision, positioning, competitive moats, bet sizing, the new builder operating model and your own one-page product strategy',
      },
      {
        tag: 'MODULE 03',
        title: 'Problem discovery, market & user research',
        desc: 'Personas, qualitative and quantitative research, and mapping B2B buying committees',
      },
      {
        tag: 'MODULE 04',
        title: 'Problem framing & prioritization',
        desc: 'Problem statements, user stories, RICE, MoSCoW, first-principles thinking and back-of-envelope market sizing',
      },
    ],
  },
  {
    id: 'phase2',
    tabLabel: 'Phase 2',
    activeTitle: 'Phase 2: Craft + AI',
    activeDesc: 'Core PM work with AI as a working partner',
    activeBadge: '[ 4 MODULES ]',
    showCalloutBanner: true,
    hasViewToggle: false,
    modules: [
      {
        tag: 'MODULE 05',
        title: 'UX & design collaboration',
        desc: 'Design critique, wireframes and a clickable Figma prototype built with ChatGPT and Claude, tested with a real user',
      },
      {
        tag: 'MODULE 06',
        title: 'Effective communication as a PM',
        desc: 'Pick your product case and write its PRD, plus stakeholder management, B2B communication and quality criteria for AI features',
      },
      {
        tag: 'MODULE 07',
        title: 'Analytics & metrics',
        desc: 'North Star metrics, real SQL on a cloud data warehouse, funnels and cohorts in Amplitude, and A/B test analysis',
      },
      {
        tag: 'MODULE 08',
        title: 'Product launch & monetization',
        desc: 'STP, MVPs and launch planning, monetization models, pricing AI products and B2B go-to-market',
      },
    ],
  },
  {
    id: 'phase3',
    tabLabel: 'Phase 3',
    activeTitle: 'Phase 3: Deep AI',
    activeDesc: 'Build, evaluate and ship AI-powered products',
    activeBadge: '[ 6 MODULES ]',
    showCalloutBanner: false,
    hasViewToggle: true,
    modules: [
      {
        tag: 'MODULE 09',
        title: 'Tech 101 for PMs',
        desc: 'How an app fits together, a real API call in Postman, Git, and running sprints with engineering',
      },
      {
        tag: 'MODULE 10',
        title: 'LLMs, RAG & AI foundations',
        desc: 'LLM fundamentals, prompting, the fine-tuning vs RAG vs prompting decision, and eval design',
      },
      {
        tag: 'MODULE 11',
        title: 'Vibe coding for PMs',
        desc: 'Run your PRD as a sprint with Claude Code, raise a pull request in a real codebase and set up OpenCode, a free coding agent you keep',
      },
      {
        tag: 'MODULE 12',
        title: 'Agents in production',
        desc: 'When to use an agent, MCP, context engineering and guardrails, and your own personal agent with memory and skills',
      },
      {
        tag: 'MODULE 13',
        title: 'Evals for PMs',
        desc: 'Eval sets, rubrics, LLM judges and red-teaming, ending in a ship or don\'t-ship call on your agent',
      },
      {
        tag: 'MODULE 14',
        title: 'Capstone project & interview prep',
        desc: 'Design, build and present an AI-first product at Demo Day, then prepare for PM interviews',
      },
    ],
  },
  {
    id: 'electives',
    tabLabel: 'Electives',
    activeTitle: 'Electives',
    activeDesc: 'Two optional electives of 4 sessions each, run alongside your capstone. Take one or both',
    activeBadge: '[ 2 ELECTIVES ]',
    showCalloutBanner: true,
    hasViewToggle: false,
    modules: [
      {
        tag: 'ELECTIVE A',
        title: 'System design for PMs',
        desc: 'Caches, queues and a UPI payments flow, then AI feature and agent architecture, ending in an architecture doc for your capstone',
      },
      {
        tag: 'ELECTIVE B',
        title: 'Growth and business for PMs',
        desc: 'Growth loops, retention, experiments and unit economics, with Canva, Meesho and CRED teardowns and a growth plan for your capstone',
      },
    ],
  },
  {
    id: 'phase4',
    tabLabel: 'Phase 4',
    activeTitle: 'Phase 4: Interview prep',
    activeDesc: 'Weekly expert-led sessions across 8 interview rounds, once the first 3 phases are done',
    activeBadge: '[ 8 ROUND TYPES ]',
    showCalloutBanner: false,
    hasViewToggle: true,
    modules: [
      {
        tag: 'ROUND 01',
        title: 'AI interview',
        desc: 'Show your AI-first skills and perform in AI-driven interview rounds',
      },
      {
        tag: 'ROUND 02',
        title: 'Execution',
        desc: 'Handle ambiguity, and diagnose what went wrong and why',
      },
      {
        tag: 'ROUND 03',
        title: 'Product design',
        desc: 'Find creative solutions to difficult or unusual problems',
      },
      {
        tag: 'ROUND 04',
        title: 'Product improvement',
        desc: 'Improve existing products to meet customer needs and add value',
      },
      {
        tag: 'ROUND 05',
        title: 'Analytical',
        desc: 'Frame problems in terms of concrete metrics and reason through them',
      },
      {
        tag: 'ROUND 06',
        title: 'Guesstimate',
        desc: 'Work logically toward a close estimate when you don\'t have the data',
      },
      {
        tag: 'ROUND 07',
        title: 'Behavioural',
        desc: 'Answer the experience-based and hypothetical scenario questions every PM interview includes',
      },
      {
        tag: 'ROUND 08',
        title: 'Strategy',
        desc: 'Solve market, growth and business problems with structured thinking and clear decisions',
      },
    ],
  },
];

interface ExpertInstructor {
  id: string;
  name: string;
  role: string;
  company: string;
  companyLogo?: string;
  companyRender?: React.ReactNode;
  bio1: string;
  bio2: string;
  experience: string;
  pastLogos: string[];
  image: string;
}

const expertInstructors: ExpertInstructor[] = [
  {
    id: 'expert-1',
    name: 'Aniket Mathur',
    role: 'Director, AI Product Management',
    company: 'Paytm',
    companyLogo: '/logos/paytm.83ecf65f.svg',
    bio1: 'I lead the AI product charter for Recharges and Utilities at Paytm, building AI agents for the next 500M users.',
    bio2: "I'm replacing manual, operations-heavy workflows with agentic loops built from raw APIs, and I'll show you what works when you build with AI, and what breaks.",
    experience: '9+ years of experience',
    pastLogos: ['First Advantage', 'HomeLane', 'annalect'],
    image: '/portraits/expert-aniket-mathur.jpg',
  },
  {
    id: 'expert-2',
    name: 'Sravanti Sundaram',
    role: 'Senior Product Manager, International Checkout',
    company: 'PayPal',
    companyRender: (
      <span className="inline-flex items-center gap-0.5 font-bold italic text-white text-sm tracking-tighter">
        <span className="text-[#0079C1]">Pay</span>
        <span className="text-[#00457C]">Pal</span>
      </span>
    ),
    bio1: 'I build international checkout, cross-border payments and subscriptions at PayPal, and recently shipped a managed-subscriptions capability for small businesses across EMEA and MENA.',
    bio2: "Just before PayPal I built an SRE AI agent at Rakuten that cut incident resolution time by 32%, and I'll show you how to tie every AI feature to an outcome you can measure.",
    experience: '8+ years of experience',
    pastLogos: ['Rakuten', 'SCISPACE', 'Mercedes-Benz'],
    image: '/portraits/expert-sravanti-sundaram.jpg',
  },
  {
    id: 'expert-3',
    name: 'Natarajan Thangavel',
    role: 'Senior Product Manager',
    company: 'Google',
    companyRender: (
      <span className="inline-flex items-center font-medium text-sm tracking-normal">
        <span className="text-[#4285F4]">G</span>
        <span className="text-[#EA4335]">o</span>
        <span className="text-[#FBBC05]">o</span>
        <span className="text-[#4285F4]">g</span>
        <span className="text-[#34A853]">l</span>
        <span className="text-[#EA4335]">e</span>
      </span>
    ),
    bio1: "I lead Google Cloud's identity security portfolio, which protects millions of users and AI agents, along with a customer identity platform used by billions of people every month.",
    bio2: "I launched Google's identity threat detection offering, cutting security response time from days to seconds, and I'll show you how to take a complex product from idea to launch.",
    experience: '15+ years of experience',
    pastLogos: ['INTUIT', 'SAP'],
    image: '/portraits/expert-natarajan-thangavel.jpg',
  },
  {
    id: 'expert-4',
    name: 'Gaurav Sethi',
    role: 'Product Leader, B2B gift card distribution',
    company: 'pine labs',
    companyRender: (
      <span className="inline-flex items-center gap-1.5 font-bold text-white text-xs tracking-tight">
        <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
        <span>pine labs</span>
      </span>
    ),
    bio1: "I lead Pine Labs' B2B gift card distribution platform, owning the product from strategy through go-to-market and revenue.",
    bio2: "Just before this I led growth at Optiva, launching a new B2B2X product line with GenAI built in, and I'll teach you to turn AI from an experiment into revenue.",
    experience: '15+ years of experience',
    pastLogos: ['Optiva', 'Adobe', 'BOEING', 'GE'],
    image: '/portraits/expert-gaurav-sethi.jpg',
  },
  {
    id: 'expert-5',
    name: 'Siddharth Malhotra',
    role: 'Head of Product and Growth',
    company: 'PCA PRODUCT CAREER ACADEMY',
    companyRender: (
      <span className="inline-flex items-center gap-1.5 font-bold text-white text-xs tracking-tight">
        <span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-200 text-[10px] font-mono border border-zinc-700">PCA</span>
        <span className="text-[11px] uppercase tracking-wider text-zinc-300 font-semibold">PRODUCT CAREER ACADEMY</span>
      </span>
    ),
    bio1: 'I run product and growth as fractional CPO at Product Career Academy, and I coach PMs who want to move into AI product roles.',
    bio2: "I've coached 1200+ PMs through the AI PM interview, from RAG and evals to model trade-offs, and I'll help you tell your story the way hiring managers want to hear it.",
    experience: '10+ years of experience',
    pastLogos: ['AmbitionBox', 'media.net', 'Khoros'],
    image: '/portraits/expert-siddharth-malhotra.jpg',
  },
];

export default function ProductManagementLaunchpadPage() {
  const router = useRouter();
  const { openModal } = useApplyModal();
  const [bannerVisible, setBannerVisible] = useState(true);
  const [selectedCurriculumPhase, setSelectedCurriculumPhase] = useState<string>('phase1');
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [currentExpertIndex, setCurrentExpertIndex] = useState<number>(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState<boolean>(false);
  const [trackOffset, setTrackOffset] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [curriculumModalOpen, setCurriculumModalOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [leadForm, setLeadForm] = useState({
    name: '',
    email: '',
    phone: '',
    role: '',
    experience: '1-3 years',
  });

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 12,
    mins: 39,
    secs: 14,
  });

  // Sticky Bottom Bar visibility (only shows from "Programs at a glance" section downwards)
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const glanceEl = document.getElementById('programs-at-a-glance');
      if (glanceEl) {
        const rect = glanceEl.getBoundingClientRect();
        setShowStickyBar(rect.top <= 160);
      } else {
        setShowStickyBar(window.scrollY > 850);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, mins, secs } = prev;
        if (secs > 0) {
          secs -= 1;
        } else {
          secs = 59;
          if (mins > 0) {
            mins -= 1;
          } else {
            mins = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) days -= 1;
            }
          }
        }
        return { days, hours, mins, secs };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Experts Carousel Auto-slide loop
  useEffect(() => {
    if (isCarouselPaused) return;
    const interval = setInterval(() => {
      setCurrentExpertIndex((prev) => (prev + 1) % expertInstructors.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isCarouselPaused]);

  // Dynamically calculate center offset for active expert card
  const updateOffset = useCallback(() => {
    if (!containerRef.current || !cardRefs.current[currentExpertIndex]) return;
    const container = containerRef.current;
    const card = cardRefs.current[currentExpertIndex];
    if (!card) return;
    const containerCenter = container.offsetWidth / 2;
    const cardCenter = card.offsetLeft + card.offsetWidth / 2;
    setTrackOffset(containerCenter - cardCenter);
  }, [currentExpertIndex]);

  useEffect(() => {
    updateOffset();
    window.addEventListener('resize', updateOffset);
    return () => window.removeEventListener('resize', updateOffset);
  }, [updateOffset]);

  const handleCurriculumSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.email || !leadForm.phone) return;
    setFormSubmitted(true);
    // Direct transition to the full curriculum document
    setTimeout(() => {
      setCurriculumModalOpen(false);
      router.push('/courses/product-management-launchpad/curriculum');
    }, 600);
  };

  const handlePrevExpert = () => {
    setCurrentExpertIndex((prev) => (prev - 1 + expertInstructors.length) % expertInstructors.length);
  };

  const handleNextExpert = () => {
    setCurrentExpertIndex((prev) => (prev + 1) % expertInstructors.length);
  };

  const format2 = (n: number) => String(n).padStart(2, '0');

  const currentPhase = curriculumPhases.find((p) => p.id === selectedCurriculumPhase) || curriculumPhases[0];

  // Determine which modules to display
  const displayModules = currentPhase.hasViewToggle && !isExpanded
    ? currentPhase.modules.slice(0, 4)
    : currentPhase.modules;

  return (
    <div className="w-full bg-black text-white min-h-screen relative selection:bg-purple-500 selection:text-white pb-24">

      {/* 1. TOP ANNOUNCEMENT BANNER */}
      {bannerVisible && (
        <div className="w-full bg-[#7c3aed] text-white px-4 py-2.5 text-xs sm:text-sm font-medium flex items-center justify-between relative z-30 transition-all">
          <div className="mx-auto flex items-center gap-2 text-center">
            <span>Apply today and get access to 20+ Product Management templates</span>
            <button
              onClick={() => openModal('AI-First Product Management')}
              className="underline hover:text-white/80 transition-colors inline-flex items-center gap-1 font-semibold ml-1 cursor-pointer"
            >
              Apply now &rarr;
            </button>
          </div>
          <button
            onClick={() => setBannerVisible(false)}
            className="text-white/80 hover:text-white p-1 transition-colors shrink-0"
            aria-label="Close Announcement"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* 2. HERO SECTION */}
      <section className="relative w-full bg-black border-b border-[#232328] overflow-hidden pt-12 sm:pt-16 pb-0">

        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[680px] h-[480px] bg-gradient-to-tr from-purple-600/15 via-blue-600/15 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto border-x border-[#232328] px-4 sm:px-8 lg:px-12 relative z-10 flex flex-col items-center text-center">

          {/* Cohort Badges */}
          <div className="inline-flex items-center gap-3 text-xs sm:text-sm text-zinc-400 font-medium mb-8">
            <span className="text-white">16 Weeks</span>
            <span className="text-zinc-600">|</span>
            <span>Enrolment ends 21 November</span>
          </div>

          {/* Hero Heading */}
          <h1 className="text-[44px] sm:text-[68px] lg:text-[84px] font-normal leading-[1.0] tracking-[-0.04em] text-white max-w-4xl mb-6">
            Become an
            <span className="block font-editorial italic font-normal text-white mt-1">
              AI-first product manager
            </span>
          </h1>

          {/* Hero Subtitle */}
          <p className="text-zinc-400 text-sm sm:text-base lg:text-[18px] leading-[1.65] max-w-2xl mx-auto mb-10 font-light">
            The old way of learning PM is outdated. AI-powered PMs are shaping the future by automating workflows, making smarter decisions and building products at scale.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16 sm:mb-20">
            <button
              onClick={() => setCurriculumModalOpen(true)}
              className="px-6 py-3 rounded-md text-sm font-medium text-white bg-transparent border border-[#333] hover:border-zinc-400 transition-colors cursor-pointer"
            >
              Download brochure
            </button>

            <AirtribeButton
              text="Apply now"
              onClick={() => openModal('AI-First Product Management')}
              className="!w-36 !h-11"
            />
          </div>

          {/* HERO VISUAL: ANIMATED PIPELINE OF SUCCESS FACTORS FLOWING INTO & OUT OF THE GLOWING FOLDER */}
          <div className="relative w-full max-w-[880px] h-[340px] sm:h-[400px] flex items-end justify-center overflow-visible select-none pb-0">

            {/* The Central Glowing Floating Folder held by hand */}
            <div className="relative z-20 flex flex-col items-center animate-folder-bob -mb-2 sm:-mb-3">

              {/* Backlight Cyan/Purple Aura */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-cyan-400/40 rounded-full blur-3xl pointer-events-none" />

              {/* Glowing Folder Asset */}
              <div className="relative w-[200px] sm:w-[240px] h-[230px] sm:h-[270px] drop-shadow-[0_0_35px_rgba(99,102,241,0.65)]">
                <Image
                  src="/images/pm-folder-glowing.png"
                  alt="AI PM Launchpad Core"
                  fill
                  className="object-contain object-bottom"
                  priority
                />
              </div>
            </div>

            {/* INCOMING STREAM: SUCCESS FACTOR CHIPS ARCHING INTO THE FOLDER FROM THE LEFT */}
            <div className="absolute inset-0 pointer-events-none z-10">

              {/* Chip 1: UPI PAYMENTS */}
              <div className="absolute animate-curve-in-1">
                <div className="-translate-x-1/2 -translate-y-1/2 bg-[#0e0e12]/95 border border-purple-500/30 text-white font-mono text-xs sm:text-[13px] font-semibold px-4 py-2 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.3)] backdrop-blur-md flex items-center gap-2 whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                  UPI PAYMENTS
                </div>
              </div>

              {/* Chip 2: STREAK */}
              <div className="absolute animate-curve-in-2">
                <div className="-translate-x-1/2 -translate-y-1/2 bg-[#0e0e12]/95 border border-emerald-500/30 text-white font-mono text-xs sm:text-[13px] font-semibold px-4 py-2 rounded-full shadow-[0_0_20px_rgba(16,185,129,0.3)] backdrop-blur-md flex items-center gap-2 whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  STREAK
                </div>
              </div>

              {/* Chip 3: AI ASSISTANTS */}
              <div className="absolute animate-curve-in-3">
                <div className="-translate-x-1/2 -translate-y-1/2 bg-[#0e0e12]/95 border border-cyan-500/30 text-white font-mono text-xs sm:text-[13px] font-semibold px-4 py-2 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.3)] backdrop-blur-md flex items-center gap-2 whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  AI ASSISTANTS
                </div>
              </div>

              {/* Chip 4: USER DISCOVERY */}
              <div className="absolute animate-curve-in-4">
                <div className="-translate-x-1/2 -translate-y-1/2 bg-[#0e0e12]/95 border border-blue-500/30 text-white font-mono text-xs sm:text-[13px] font-semibold px-4 py-2 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.3)] backdrop-blur-md flex items-center gap-2 whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  USER DISCOVERY
                </div>
              </div>

            </div>

            {/* OUTGOING STREAM: TRANSFORMED PRODUCT APP TILES ARCHING OUT OF THE FOLDER TO THE RIGHT */}
            <div className="absolute inset-0 pointer-events-none z-30">

              {/* Tile 1: Uber */}
              <div className="absolute animate-curve-out-1">
                <div className="-translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-black border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center backdrop-blur-md">
                  <span className="font-bold text-white text-base sm:text-lg tracking-tight">Uber</span>
                </div>
              </div>

              {/* Tile 2: WhatsApp */}
              <div className="absolute animate-curve-out-2">
                <div className="-translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#25D366] border border-emerald-300/40 shadow-[0_0_30px_rgba(37,211,102,0.4)] flex items-center justify-center backdrop-blur-md">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </div>
              </div>

              {/* Tile 3: JioHotstar Star Icon */}
              <div className="absolute animate-curve-out-3">
                <div className="-translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#07132b] border border-cyan-400/40 shadow-[0_0_30px_rgba(6,182,212,0.5)] flex items-center justify-center backdrop-blur-md">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white text-cyan-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                  </svg>
                </div>
              </div>

              {/* Tile 4: Myntra Red 'my' Tile */}
              <div className="absolute animate-curve-out-4">
                <div className="-translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#e11d48] border border-rose-300/40 shadow-[0_0_30px_rgba(225,29,72,0.5)] flex items-center justify-center backdrop-blur-md">
                  <span className="font-black text-white text-xl sm:text-2xl tracking-tighter">my</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 3. PROGRAM HIGHLIGHTS SECTION */}
      <section className="w-full bg-black border-b border-[#232328]">
        <div className="max-w-[1440px] mx-auto border-x border-[#232328]">

          {/* Top Row: 16 weeks | 15+ experts | 21 Nov Countdown & CTAs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#232328]">

            {/* Stat 1: 16 weeks */}
            <div className="lg:col-span-2 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-[#232328] flex flex-col justify-center">
              <span className="text-[44px] sm:text-[54px] font-normal leading-[1.0] text-white tracking-tight">
                16
              </span>
              <span className="text-zinc-400 text-sm font-medium mt-1">
                weeks
              </span>
            </div>

            {/* Stat 2: 15+ experts */}
            <div className="lg:col-span-2 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-[#232328] flex flex-col justify-center">
              <span className="text-[44px] sm:text-[54px] font-normal leading-[1.0] text-white tracking-tight">
                15+
              </span>
              <span className="text-zinc-400 text-sm font-medium mt-1">
                experts
              </span>
            </div>

            {/* Stat 3: 21 Nov Countdown + Apply Now & Get Full Curriculum */}
            <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <span className="text-[32px] sm:text-[40px] font-normal leading-[1.0] text-white tracking-tight block">
                  21 Nov
                </span>
                <span className="text-zinc-400 text-xs sm:text-sm font-normal mt-1.5 flex items-center gap-1.5">
                  enrolment ends in{' '}
                  <span className="font-mono text-white font-semibold">
                    {format2(timeLeft.days)}:{format2(timeLeft.hours)}:{format2(timeLeft.mins)}:{format2(timeLeft.secs)}
                  </span>
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 flex-wrap">
                <AirtribeButton
                  text="Apply now"
                  onClick={() => openModal('AI-First Product Management')}
                  className="!w-32 !h-10"
                />

                <button
                  onClick={() => setCurriculumModalOpen(true)}
                  className="px-5 py-2.5 rounded-md text-xs sm:text-sm font-medium text-white bg-transparent border border-[#333] hover:border-zinc-400 transition-colors cursor-pointer"
                >
                  Get the full curriculum
                </button>
              </div>
            </div>

          </div>

          {/* Bottom Strip: Mentors from 4 Avatars + Company Logo Ribbon */}
          <div className="flex flex-col lg:flex-row items-stretch overflow-hidden">

            {/* Mentors from label + Avatars */}
            <div className="flex items-center gap-4 px-6 sm:px-8 py-4 shrink-0 border-b lg:border-b-0 lg:border-r border-[#232328] bg-black z-10">
              <span className="text-zinc-400 text-xs sm:text-sm font-medium whitespace-nowrap">
                Mentors from
              </span>
              <div className="flex items-center">
                <img
                  src="/portraits/hero-avatar-1.jpg"
                  alt="Mentor"
                  className="w-7 h-7 rounded-full border border-black object-cover shrink-0"
                />
                <img
                  src="/portraits/hero-avatar-2.jpg"
                  alt="Mentor"
                  className="w-7 h-7 rounded-full border border-black object-cover -ml-2 shrink-0"
                />
                <img
                  src="/portraits/hero-avatar-3.jpg"
                  alt="Mentor"
                  className="w-7 h-7 rounded-full border border-black object-cover -ml-2 shrink-0"
                />
                <img
                  src="/portraits/hero-avatar-4.jpg"
                  alt="Mentor"
                  className="w-7 h-7 rounded-full border border-black object-cover -ml-2 shrink-0"
                />
              </div>
            </div>

            {/* Marquee of Partner Logos */}
            <div className="flex-1 overflow-hidden relative flex items-center py-3.5 [mask-image:linear-gradient(to_right,transparent,black_40px,black_calc(100%-40px),transparent)]">
              <div className="animate-logo-strip flex items-center">
                {[...partnerLogos, ...partnerLogos].map((logo, idx) => (
                  <div
                    key={idx}
                    className="w-24 sm:w-28 h-12 flex items-center justify-center shrink-0 border-r border-[#232328]/60 px-4"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      style={{ width: `${logo.width}px`, height: `${logo.height}px` }}
                      className="max-h-8 max-w-[65px] object-contain opacity-80 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. PROGRAMS AT A GLANCE (Animated Left-to-Right Timer Line & High-Fidelity Infographics) */}
      <ProgramsAtAGlanceSection />

      {/* 5. PROGRAM CURRICULUM SECTION */}
      <section className="w-full bg-white text-black py-16 sm:py-24 border-b border-[#e5e7eb] select-text">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">

          {/* Centered Heading & Subtitle */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-[38px] sm:text-[48px] lg:text-[56px] font-editorial text-black tracking-tight leading-none">
              Program curriculum
            </h2>
            <p className="text-zinc-500 text-xs sm:text-[13px] font-normal mt-3">
              14 modules · 3 phases · 2 electives · 13 portfolio projects
            </p>
          </div>

          {/* Main Container Frame */}
          <div className="w-full border border-[#e5e7eb] bg-white overflow-hidden shadow-sm">

            {/* Top Grid Area: Left Tabs + Right Modules */}
            <div className="flex flex-col lg:flex-row items-stretch">

              {/* Left Column: Phase Tabs */}
              <div className="w-full lg:w-[280px] shrink-0 border-b lg:border-b-0 lg:border-r border-[#e5e7eb] bg-[#f9fafb] flex flex-col">
                {curriculumPhases.map((phase) => {
                  const isActive = phase.id === selectedCurriculumPhase;

                  if (isActive) {
                    return (
                      <div
                        key={phase.id}
                        className="w-full p-6 bg-[#121214] border-b border-[#e5e7eb] text-white relative select-none"
                        style={{
                          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.12) 1px, transparent 1px)',
                          backgroundSize: '4px 4px'
                        }}
                      >
                        <h4 className="text-white text-base sm:text-lg font-semibold tracking-tight">
                          {phase.activeTitle}
                        </h4>
                        <p className="text-zinc-300 text-xs sm:text-[13px] leading-relaxed mt-2.5 font-normal">
                          {phase.activeDesc}
                        </p>
                        <div className="mt-8 font-mono text-[11px] text-zinc-400 tracking-wider font-medium">
                          {phase.activeBadge}
                        </div>
                      </div>
                    );
                  }

                  return (
                    <button
                      key={phase.id}
                      onClick={() => {
                        setSelectedCurriculumPhase(phase.id);
                        setIsExpanded(true);
                      }}
                      className="w-full text-left px-6 py-4 border-b border-[#e5e7eb] last:border-b-0 bg-[#f9fafb] hover:bg-[#f3f4f6] text-zinc-700 font-medium text-sm transition-colors cursor-pointer flex items-center justify-between"
                    >
                      <span>{phase.tabLabel}</span>
                    </button>
                  );
                })}
              </div>

              {/* Right Column: 2-Column Module Grid */}
              <div className="flex-1 flex flex-col bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 flex-1">
                  {displayModules.map((mod, idx) => {
                    const isEvenCol = idx % 2 === 1;
                    return (
                      <div
                        key={mod.tag}
                        className={`p-6 sm:p-8 border-b border-[#e5e7eb] flex flex-col justify-start ${!isEvenCol ? 'md:border-r md:border-[#e5e7eb]' : ''
                          }`}
                      >
                        <span className="font-mono text-xs uppercase tracking-wider text-zinc-800 font-semibold mb-2.5 block">
                          {mod.tag}
                        </span>
                        <h3 className="font-editorial text-lg sm:text-[22px] font-normal text-black leading-snug mb-2">
                          {mod.title}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-zinc-600 leading-relaxed font-normal">
                          {mod.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* View less / View more toggle for Phase 3 and Phase 4 */}
                {currentPhase.hasViewToggle && (
                  <div className="p-4 sm:p-5 flex justify-center sm:justify-end border-t border-[#e5e7eb] bg-white">
                    <button
                      onClick={() => setIsExpanded(!isExpanded)}
                      className="px-4 py-2 border border-[#e5e7eb] bg-white hover:bg-zinc-50 text-xs font-medium text-zinc-700 rounded transition-colors flex items-center gap-1.5 shadow-sm cursor-pointer"
                    >
                      <span>{isExpanded ? 'View less ^' : 'View more v'}</span>
                    </button>
                  </div>
                )}
              </div>

            </div>

            {/* Bottom Purple Callout Banner for Phase 1, Phase 2, Electives */}
            {currentPhase.showCalloutBanner && (
              <div className="w-full bg-[#7c3aed] text-white px-6 sm:px-10 py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#e5e7eb]">
                <h3 className="font-editorial italic text-xl sm:text-2xl lg:text-[26px] text-white font-normal">
                  Want to dive deeper into the details?
                </h3>
                <button
                  onClick={() => setCurriculumModalOpen(true)}
                  className="bg-white text-black hover:bg-zinc-100 text-xs sm:text-sm font-medium px-5 py-2.5 rounded flex items-center gap-2 transition-colors cursor-pointer self-start sm:self-auto shrink-0 shadow-sm"
                >
                  <span>Get the full curriculum</span>
                  <ChevronRight className="w-4 h-4 text-black" />
                </button>
              </div>
            )}

          </div>

        </div>
      </section>

      {/* 5. EXPERTS SECTION: "Learn from experts who build with AI" (Moving belt of cards) */}
      <section className="w-full bg-black text-white py-20 sm:py-28 border-b border-[#232328] relative overflow-hidden">

        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-r from-purple-900/10 via-blue-900/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">

          {/* Centered Heading */}
          <div className="text-center mb-14 sm:mb-20">
            <h2 className="text-[34px] sm:text-[48px] md:text-[54px] font-editorial text-white leading-[1.12] tracking-tight">
              Learn from experts who<br />build with AI
            </h2>
          </div>

          {/* Carousel Track Container */}
          <div
            ref={containerRef}
            onMouseEnter={() => setIsCarouselPaused(true)}
            onMouseLeave={() => setIsCarouselPaused(false)}
            className="relative w-full overflow-hidden select-none py-4"
          >
            {/* The Moving Belt of Cards */}
            <div
              className="flex items-center transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(${trackOffset}px)`,
              }}
            >
              {expertInstructors.map((expert, idx) => {
                const isActive = idx === currentExpertIndex;

                return (
                  <div
                    key={expert.id}
                    ref={(el) => {
                      cardRefs.current[idx] = el;
                    }}
                    onClick={() => setCurrentExpertIndex(idx)}
                    className={`w-[88vw] sm:w-[80vw] lg:w-[860px] shrink-0 mx-3 sm:mx-6 bg-[#0a0a0c] border rounded-2xl transition-all duration-500 overflow-hidden ${isActive
                      ? 'border-[#2e2e38] shadow-[0_0_50px_rgba(0,0,0,0.9)] opacity-100 scale-100 cursor-default'
                      : 'border-[#1b1b22] opacity-35 scale-95 cursor-pointer hover:opacity-60'
                      }`}
                  >
                    <div className="flex flex-col md:flex-row items-center p-6 sm:p-10 gap-6 sm:gap-10">

                      {/* Left: Grayscale Studio Portrait with bottom vignette */}
                      <div className="w-[200px] sm:w-[240px] md:w-[280px] h-[260px] sm:h-[320px] md:h-[360px] relative shrink-0 overflow-hidden rounded-xl bg-black">
                        <img
                          src={expert.image}
                          alt={expert.name}
                          className="w-full h-full object-cover object-top filter grayscale contrast-125"
                        />
                        {/* Smooth bottom gradient vignette to black */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent pointer-events-none" />
                      </div>

                      {/* Right: Expert Bio & Credentials */}
                      <div className="flex-1 flex flex-col justify-center text-left">
                        <h3 className="text-2xl sm:text-[30px] font-editorial text-white font-normal tracking-tight mb-1">
                          {expert.name}
                        </h3>

                        {/* Current Role & Company */}
                        <div className="text-xs sm:text-[13px] text-zinc-300 font-medium mb-5 flex items-center gap-1.5 flex-wrap">
                          <span>{expert.role}</span>
                          <span className="text-zinc-500 font-normal">@</span>
                          {expert.companyLogo ? (
                            <img
                              src={expert.companyLogo}
                              alt={expert.company}
                              className="h-4 sm:h-5 object-contain inline-block"
                            />
                          ) : expert.companyRender ? (
                            expert.companyRender
                          ) : (
                            <span className="text-white font-bold">{expert.company}</span>
                          )}
                        </div>

                        {/* Two Bio Paragraphs */}
                        <p className="text-zinc-400 text-xs sm:text-[13px] leading-relaxed mb-3 font-light">
                          {expert.bio1}
                        </p>
                        <p className="text-zinc-400 text-xs sm:text-[13px] leading-relaxed mb-6 font-light">
                          {expert.bio2}
                        </p>

                        {/* Years of Experience */}
                        <div className="text-zinc-500 text-[11px] font-mono tracking-wider mb-2">
                          {expert.experience}
                        </div>

                        {/* Past Company Logos */}
                        <div className="flex items-center gap-4 sm:gap-6 flex-wrap opacity-75 grayscale hover:grayscale-0 transition-all pt-1">
                          {expert.pastLogos.map((brand, bIdx) => (
                            <span
                              key={bIdx}
                              className="text-xs sm:text-[13px] font-semibold tracking-tight text-zinc-300"
                            >
                              {brand}
                            </span>
                          ))}
                        </div>

                      </div>

                    </div>
                  </div>
                );
              })}
            </div>

            {/* Left Peeking Navigation Arrow */}
            <button
              onClick={handlePrevExpert}
              aria-label="Previous Expert"
              className="absolute left-2 sm:left-6 md:left-12 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded bg-[#121214]/90 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer shadow-2xl"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Right Peeking Navigation Arrow */}
            <button
              onClick={handleNextExpert}
              aria-label="Next Expert"
              className="absolute right-2 sm:right-6 md:right-12 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded bg-[#121214]/90 border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer shadow-2xl"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

          </div>

        </div>
      </section>

      {/* 5. TOOLS YOU'LL BUILD WITH (SCROLL-DRIVEN CONSTELLATION ANIMATION) */}
      <ToolsSection />

      {/* 6. REAL STORIES FROM THE TRIBE (UPPER BELT LTR + LOWER OUTCOMES & COMMUNITY RTL) */}
      <PMStoriesSection />

      {/* 7. BONUS PERKS */}
      <BonusPerksSection />

      {/* 8. TRUSTED BY LEADING COMPANIES */}
      <TrustedCompaniesSection />

      {/* 9. WORK ON REAL-WORLD PROJECTS */}
      <RealWorldProjectsSection />

      {/* 6. STICKY BOTTOM ENROLMENT BAR */}
      <div
        className={`fixed bottom-0 inset-x-0 bg-black text-white border-t border-[#232328] z-40 py-3.5 px-4 sm:px-8 shadow-2xl backdrop-blur-md bg-black/95 transition-all duration-300 ease-in-out ${showStickyBar ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-full opacity-0 pointer-events-none'
          }`}
      >
        <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">

          {/* Left Enrolment Details */}
          <div className="flex items-center gap-6 sm:gap-10 text-left w-full sm:w-auto justify-between sm:justify-start">
            <div>
              <div className="text-[11px] text-zinc-400 font-normal leading-tight">Enrolment ends on</div>
              <div className="text-xs sm:text-sm font-semibold text-white tracking-tight mt-0.5">21 November</div>
            </div>
            <div>
              <div className="text-[11px] text-zinc-400 font-normal leading-tight">Course starting on</div>
              <div className="text-xs sm:text-sm font-semibold text-white tracking-tight mt-0.5">22 November</div>
            </div>
            <div>
              <div className="text-[11px] text-zinc-400 font-normal leading-tight">Your commitment</div>
              <div className="text-xs sm:text-sm font-semibold text-white tracking-tight mt-0.5">10-12 hrs/week</div>
            </div>
          </div>

          {/* Right Action Button */}
          <div className="flex items-center gap-4 shrink-0 w-full sm:w-auto justify-end">
            <span className="text-xs text-zinc-400 hidden lg:inline-block">Limited seats available</span>
            <button
              onClick={() => openModal('AI-First Product Management')}
              className="bg-white text-black hover:bg-zinc-200 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded flex items-center gap-2 transition-colors cursor-pointer shrink-0 shadow"
            >
              <span>Apply now</span>
              <ChevronRight className="w-4 h-4 text-black" />
            </button>
          </div>

        </div>
      </div>

      {/* 7. FLOATING WHATSAPP BUTTON (Docked in corner on hero, moves up when sticky bar is active) */}
      <a
        href="https://wa.me/918031139097?text=Hi%20Airtribe,%20I%20have%20a%20question%20about%20the%20AI-First%20Product%20Management%20Launchpad"
        target="_blank"
        rel="noreferrer noopener"
        aria-label="WhatsApp Support"
        className={`fixed right-5 z-50 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 ${showStickyBar ? 'bottom-20 sm:bottom-22' : 'bottom-5 sm:bottom-6'
          }`}
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
      </a>

      {/* 8. LEAD CAPTURE SIGN-UP MODAL */}
      {curriculumModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0e0e12] border border-[#232328] rounded-2xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl animate-in fade-in zoom-in-95 duration-200">

            {/* Close button */}
            <button
              onClick={() => setCurriculumModalOpen(false)}
              className="absolute top-5 right-5 text-zinc-400 hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Heading */}
            <div className="mb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-purple-400">
                OFFICIAL AIRTRIBE CURRICULUM
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Get the Full 16-Week AI-First PM Curriculum
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Access the complete week-by-week syllabus, hands-on AI projects, live tools, and case study breakdowns.
              </p>
            </div>

            {formSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                <p className="text-lg font-semibold text-white">Opening Curriculum Document...</p>
                <p className="text-xs text-zinc-400">Redirecting to the official syllabus viewer.</p>
              </div>
            ) : (
              <form onSubmit={handleCurriculumSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={leadForm.name}
                    onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full bg-[#18181c] border border-[#2b2b36] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Work / Personal Email</label>
                  <input
                    type="email"
                    required
                    value={leadForm.email}
                    onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                    placeholder="rahul@example.com"
                    className="w-full bg-[#18181c] border border-[#2b2b36] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1">Phone Number</label>
                  <div className="flex gap-2">
                    <span className="bg-[#18181c] border border-[#2b2b36] rounded-lg px-3 py-2.5 text-sm text-zinc-400">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      value={leadForm.phone}
                      onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                      placeholder="9876543210"
                      className="w-full bg-[#18181c] border border-[#2b2b36] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1">Current Role</label>
                    <input
                      type="text"
                      value={leadForm.role}
                      onChange={(e) => setLeadForm({ ...leadForm, role: e.target.value })}
                      placeholder="e.g. SDE-2, Analyst"
                      className="w-full bg-[#18181c] border border-[#2b2b36] rounded-lg px-3.5 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-zinc-400 mb-1">Experience</label>
                    <select
                      value={leadForm.experience}
                      onChange={(e) => setLeadForm({ ...leadForm, experience: e.target.value })}
                      className="w-full bg-[#18181c] border border-[#2b2b36] rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500"
                    >
                      <option value="0-1 years">0-1 years</option>
                      <option value="1-3 years">1-3 years</option>
                      <option value="3-5 years">3-5 years</option>
                      <option value="5+ years">5+ years</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3.5 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-sm transition-all shadow-lg shadow-purple-600/30 cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Access Full 16-Week Curriculum</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </div>
  );
}
