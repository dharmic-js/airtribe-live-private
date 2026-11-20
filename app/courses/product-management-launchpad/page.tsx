'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useApplyModal } from '@/components/ApplyModalContext';
import { AirtribeButton } from '@/components/AirtribeButton';
import {
  X,
  Clock,
  Users,
  Calendar,
  Sparkles,
  CheckCircle2,
  Download,
  ArrowRight,
  ChevronRight,
  Shield,
  Layers,
  FileText,
  BarChart2,
  Rocket,
  Award
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

export default function ProductManagementLaunchpadPage() {
  const router = useRouter();
  const { openModal } = useApplyModal();
  const [bannerVisible, setBannerVisible] = useState(true);
  const [activeTab, setActiveTab] = useState<'curriculum' | 'capstone' | 'demoday' | 'careers'>('capstone');
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

  const handleCurriculumSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.email || !leadForm.phone) return;
    setFormSubmitted(true);
    // Smooth transition directly to the official Curriculum Document
    setTimeout(() => {
      setCurriculumModalOpen(false);
      router.push('/courses/product-management-launchpad/curriculum');
    }, 600);
  };

  const format2 = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="w-full bg-black text-white min-h-screen relative selection:bg-purple-500 selection:text-white">
      
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
      <section className="relative w-full bg-black border-b border-[#232328] overflow-hidden pt-12 sm:pt-16 pb-16 sm:pb-24">
        
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
          <div className="relative w-full max-w-[880px] h-[320px] sm:h-[380px] flex items-center justify-center overflow-visible select-none">
            
            {/* The Central Glowing Floating Folder held by hand */}
            <div className="relative z-20 flex flex-col items-center animate-folder-bob">
              
              {/* Backlight Cyan/Purple Aura */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-cyan-400/40 rounded-full blur-3xl pointer-events-none" />

              {/* Glowing Folder Asset */}
              <div className="relative w-[190px] sm:w-[220px] h-[220px] sm:h-[250px] drop-shadow-[0_0_35px_rgba(99,102,241,0.65)]">
                <Image
                  src="/images/pm-folder-glowing.png"
                  alt="AI PM Launchpad Core"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* INCOMING STREAM: SUCCESS FACTOR CHIPS ARCHING INTO THE FOLDER FROM THE LEFT */}
            <div className="absolute inset-0 pointer-events-none z-10">
              
              {/* Chip 1: AI ASSISTANTS */}
              <div className="absolute animate-curve-in-1">
                <div className="bg-[#0e0e12]/95 border border-white/20 text-white font-mono text-xs sm:text-[13px] font-semibold px-4 py-2 rounded-full shadow-2xl backdrop-blur-md flex items-center gap-2 -rotate-12">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  AI ASSISTANTS
                </div>
              </div>

              {/* Chip 2: TRUST MARKET */}
              <div className="absolute animate-curve-in-2">
                <div className="bg-[#0e0e12]/95 border border-white/20 text-white font-mono text-xs sm:text-[13px] font-semibold px-4 py-2 rounded-full shadow-2xl backdrop-blur-md flex items-center gap-2 -rotate-6">
                  <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                  TRUST MARKET
                </div>
              </div>

              {/* Chip 3: PROMPT ENGINEERING */}
              <div className="absolute animate-curve-in-3">
                <div className="bg-[#0e0e12]/95 border border-white/20 text-white font-mono text-xs sm:text-[13px] font-semibold px-4 py-2 rounded-full shadow-2xl backdrop-blur-md flex items-center gap-2 -rotate-15">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  PROMPT ENGIN.
                </div>
              </div>

              {/* Chip 4: USER DISCOVERY */}
              <div className="absolute animate-curve-in-4">
                <div className="bg-[#0e0e12]/95 border border-white/20 text-white font-mono text-xs sm:text-[13px] font-semibold px-4 py-2 rounded-full shadow-2xl backdrop-blur-md flex items-center gap-2 -rotate-3">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  USER DISCOVERY
                </div>
              </div>

            </div>

            {/* OUTGOING STREAM: TRANSFORMED PRODUCT APP TILES ARCHING OUT OF THE FOLDER TO THE RIGHT */}
            <div className="absolute inset-0 pointer-events-none z-30">
              
              {/* Tile 1: JioHotstar Star Icon */}
              <div className="absolute animate-curve-out-1">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#07132b] border border-cyan-400/40 shadow-[0_0_30px_rgba(6,182,212,0.5)] flex items-center justify-center rotate-12 backdrop-blur-md">
                  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white text-cyan-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
                  </svg>
                </div>
              </div>

              {/* Tile 2: Myntra Red 'my' Tile */}
              <div className="absolute animate-curve-out-2">
                <div className="w-13 h-13 sm:w-15 sm:h-15 rounded-2xl bg-[#991b1b] border border-red-400/40 shadow-[0_0_30px_rgba(239,68,68,0.5)] flex items-center justify-center -rotate-6 backdrop-blur-md">
                  <span className="font-bold text-white text-xl tracking-tighter">my</span>
                </div>
              </div>

              {/* Tile 3: 10x Retention Flywheel */}
              <div className="absolute animate-curve-out-3">
                <div className="bg-[#18181b]/95 border border-purple-500/40 text-purple-200 font-mono text-xs sm:text-[13px] font-bold px-3.5 py-2 rounded-xl shadow-2xl backdrop-blur-md flex items-center gap-2 rotate-12">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  10x RETENTION
                </div>
              </div>

              {/* Tile 4: AI Copilot Launch */}
              <div className="absolute animate-curve-out-4">
                <div className="bg-[#09090b]/95 border border-cyan-500/40 text-cyan-200 font-mono text-xs sm:text-[13px] font-bold px-3.5 py-2 rounded-xl shadow-2xl backdrop-blur-md flex items-center gap-2 rotate-6">
                  <Rocket className="w-3.5 h-3.5 text-cyan-400" />
                  AI COPILOT
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Floating WhatsApp Support Button */}
        <a
          href="https://wa.me/918031139097?text=Hi%20Airtribe,%20I%20have%20a%20question%20about%20the%20AI-First%20Product%20Management%20Launchpad"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="WhatsApp Support"
          className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-transform"
        >
          <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>
      </section>

      {/* 3. PROGRAM HIGHLIGHTS SECTION (Image 2 exact replica) */}
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

      {/* 4. PROGRAMS AT A GLANCE (Tabbed interactive section matching bottom of Image 2) */}
      <section className="w-full bg-black py-20 sm:py-28 border-b border-[#232328]">
        <div className="max-w-[1440px] mx-auto border-x border-[#232328] px-4 sm:px-8 lg:px-12">
          
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-[38px] sm:text-[54px] font-editorial italic font-normal text-white">
              Programs at a glance
            </h2>
          </div>

          {/* Tab Navigation */}
          <div className="w-full max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 border-b border-[#232328] text-center mb-12">
            {[
              { id: 'curriculum', label: 'AI-first curriculum' },
              { id: 'capstone', label: 'Capstone Project' },
              { id: 'demoday', label: 'Demo Day' },
              { id: 'careers', label: 'Careers & beyond' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-4 text-xs sm:text-sm font-medium transition-all relative ${
                  activeTab === tab.id
                    ? 'text-white font-semibold'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 inset-x-0 h-0.5 bg-white" />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          <div className="w-full max-w-4xl mx-auto bg-[#0a0a0c] border border-[#232328] rounded-xl p-6 sm:p-10 shadow-2xl">
            {activeTab === 'capstone' && (
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1 space-y-4">
                  <span className="font-mono text-xs uppercase tracking-widest text-purple-400 bg-purple-500/10 px-3 py-1 rounded border border-purple-500/20 inline-block">
                    02 CAPSTONE PROJECT
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-normal text-white">
                    Solve real-world PM challenges vetted by hiring partners
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Build a complete 0-to-1 product strategy, from AI persona synthesis and PRD drafting to interactive prototyping in v0/Cursor and launch metrics tracking.
                  </p>
                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-300 pt-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                      Individual capstone with 1:1 Director of Product feedback
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                      Presented live to hiring managers on Demo Day
                    </li>
                  </ul>
                  <div className="pt-4">
                    <button
                      onClick={() => setCurriculumModalOpen(true)}
                      className="inline-flex items-center gap-2 text-sm text-purple-300 hover:text-purple-200 underline font-medium"
                    >
                      View capstone project rubrics in full curriculum &rarr;
                    </button>
                  </div>
                </div>

                <div className="w-full lg:w-[320px] aspect-[4/3] rounded-lg bg-gradient-to-tr from-purple-900/40 via-blue-900/30 to-black border border-purple-500/30 p-6 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-300 font-bold text-sm">
                      PM
                    </div>
                    <p className="text-white font-medium text-sm">Capstone: 0-to-1 AI Copilot for Quick Commerce</p>
                    <p className="text-zinc-400 text-xs">Spec, Prototype, Metric Funnel & GTM Playbook</p>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-zinc-500 font-mono pt-4 border-t border-white/10">
                    <span>STATUS: VETTED</span>
                    <span className="text-emerald-400">DEMO READY</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'curriculum' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-mono text-xs text-purple-400 uppercase tracking-widest">16 WEEKS • 5 PHASES</span>
                    <h3 className="text-2xl font-normal text-white mt-1">AI-First Product Management Syllabus</h3>
                  </div>
                  <button
                    onClick={() => setCurriculumModalOpen(true)}
                    className="px-4 py-2 rounded text-xs font-semibold bg-white text-black hover:bg-zinc-200 transition-colors"
                  >
                    Get Full PDF
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-lg bg-zinc-950 border border-[#232328]">
                    <span className="text-xs font-mono text-purple-400 block mb-1">PHASE 1 (WEEKS 1-4)</span>
                    <h4 className="text-sm font-semibold text-white">Problem Discovery & AI Market Sizing</h4>
                    <p className="text-xs text-zinc-400 mt-1">Conducting user interviews, building AI personas, opportunity solution trees, and market modeling.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-zinc-950 border border-[#232328]">
                    <span className="text-xs font-mono text-purple-400 block mb-1">PHASE 2 (WEEKS 5-7)</span>
                    <h4 className="text-sm font-semibold text-white">Modern AI PRDs & System Scoping</h4>
                    <p className="text-xs text-zinc-400 mt-1">Authoring AI PRDs, defining edge cases, APIs, vector DB architectures, and rapid prototyping in v0.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-zinc-950 border border-[#232328]">
                    <span className="text-xs font-mono text-purple-400 block mb-1">PHASE 3 (WEEKS 8-10)</span>
                    <h4 className="text-sm font-semibold text-white">Metrics, Funnels & Churn Modeling</h4>
                    <p className="text-xs text-zinc-400 mt-1">Tracking taxonomies in Mixpanel/Amplitude, retention cohort curves, A/B testing, and North Star metrics.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-zinc-950 border border-[#232328]">
                    <span className="text-xs font-mono text-purple-400 block mb-1">PHASE 4 & 5 (WEEKS 11-16)</span>
                    <h4 className="text-sm font-semibold text-white">PLG, Capstone & PM Interview Mastery</h4>
                    <p className="text-xs text-zinc-400 mt-1">Viral expansion flywheels, monetization experiments, Demo Day jury review, and 1:1 interview drills.</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'demoday' && (
              <div className="space-y-4">
                <span className="font-mono text-xs uppercase tracking-widest text-purple-400 bg-purple-500/10 px-3 py-1 rounded border border-purple-500/20 inline-block">
                  03 LIVE DEMO DAY
                </span>
                <h3 className="text-2xl font-normal text-white">Pitch directly to VPs and Product Directors</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Every builder presents their vetted Capstone project to an elite jury of hiring managers from companies like Swiggy, Razorpay, CRED, and Zepto. Top presenters receive direct fast-track interview invitations.
                </p>
                <div className="p-4 rounded-lg bg-zinc-950 border border-[#232328] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-purple-400" />
                    <span className="text-sm text-zinc-300">Over 350+ candidates placed through Airtribe Demo Days</span>
                  </div>
                  <button
                    onClick={() => openModal('Demo Day Participation')}
                    className="text-xs text-white underline hover:text-purple-300 font-medium"
                  >
                    Learn about jury &rarr;
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'careers' && (
              <div className="space-y-4">
                <span className="font-mono text-xs uppercase tracking-widest text-purple-400 bg-purple-500/10 px-3 py-1 rounded border border-purple-500/20 inline-block">
                  04 CAREER SERVICES & BEYOND
                </span>
                <h3 className="text-2xl font-normal text-white">Comprehensive PM placement preparation</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Personalized 1:1 resume teardown, portfolio optimization, mock interviews for Product Sense, Root Cause Analysis, and Behavioral Leadership rounds with senior practitioners.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-center">
                  <div className="p-3 bg-zinc-950 border border-[#232328] rounded">
                    <span className="text-xl font-bold text-white block">1:1</span>
                    <span className="text-xs text-zinc-400">Mentor Coaching</span>
                  </div>
                  <div className="p-3 bg-zinc-950 border border-[#232328] rounded">
                    <span className="text-xl font-bold text-white block">400+</span>
                    <span className="text-xs text-zinc-400">Hiring Partners</span>
                  </div>
                  <div className="p-3 bg-zinc-950 border border-[#232328] rounded">
                    <span className="text-xl font-bold text-white block">48%</span>
                    <span className="text-xs text-zinc-400">Avg. Salary Hike</span>
                  </div>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* 5. LEAD CAPTURE SIGN-UP MODAL (Leads directly to Curriculum Document) */}
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
