'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useApplyModal } from '@/components/ApplyModalContext';
import { AirtribeButton } from '@/components/AirtribeButton';
import { BELProgramsAtAGlanceSection } from '@/components/BELProgramsAtAGlanceSection';
import { BELCurriculumSection } from '@/components/BELCurriculumSection';
import { BELExpertsCarouselSection } from '@/components/BELExpertsCarouselSection';
import { BELToolsSection } from '@/components/BELToolsSection';
import { BELStoriesSection } from '@/components/BELStoriesSection';
import { BonusPerksSection } from '@/components/BonusPerksSection';
import { TrustedCompaniesSection } from '@/components/TrustedCompaniesSection';
import { BELRealWorldProjectsSection } from '@/components/BELRealWorldProjectsSection';
import { CareerSupportSection } from '@/components/CareerSupportSection';
import { ComeAsYouAreSection } from '@/components/ComeAsYouAreSection';
import { YourCommitmentSection } from '@/components/YourCommitmentSection';
import { CertificateSection } from '@/components/CertificateSection';
import { PeerCommunityCarouselSection } from '@/components/PeerCommunityCarouselSection';
import { ScholarshipsSection } from '@/components/ScholarshipsSection';
import { BELFAQSection } from '@/components/BELFAQSection';
import { PricingSection } from '@/components/PricingSection';
import { X, ChevronRight, CheckCircle2 } from 'lucide-react';

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

export default function BackendEngineeringLaunchpadPage() {
  const router = useRouter();
  const { openModal } = useApplyModal();
  const [bannerVisible, setBannerVisible] = useState(true);

  // Curriculum modal state
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
    hours: 3,
    mins: 5,
    secs: 50,
  });

  // Sticky Bottom Bar visibility
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

  const format2 = (n: number) => String(n).padStart(2, '0');

  const handleCurriculumSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.email || !leadForm.phone) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setCurriculumModalOpen(false);
      window.open('https://airtribe.link/BEL_Brochure', '_blank');
    }, 600);
  };

  return (
    <div className="w-full bg-black text-white min-h-screen relative selection:bg-purple-500 selection:text-white pb-24">

      {/* 1. TOP ANNOUNCEMENT BANNER */}
      {bannerVisible && (
        <div className="w-full bg-[#6366f1] text-white px-4 py-2.5 text-xs sm:text-sm font-medium flex items-center justify-between relative z-30 transition-all">
          <div className="mx-auto flex items-center gap-2 text-center">
            <span>Apply now and get our Docker crash course for free</span>
            <button
              onClick={() => openModal('AI-First Software Engineering')}
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

        {/* Ambient Backlight Aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[720px] h-[520px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1440px] mx-auto border-x border-[#232328] relative z-10 flex flex-col items-center">

          {/* Centered Top Content with standard padding */}
          <div className="w-full px-4 sm:px-8 lg:px-12 flex flex-col items-center text-center">
            {/* GitHub Partner Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm mb-8 hover:border-white/30 transition-colors">
              <div className="w-4 h-4 relative">
                <Image
                  src="/github-partner.webp"
                  alt="GitHub"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xs sm:text-[13px] text-zinc-300 font-medium">
                Official <span className="font-bold text-white">GitHub</span> Education Program Partner
              </span>
            </div>

            {/* Hero Heading */}
            <h1 className="text-[44px] sm:text-[68px] lg:text-[84px] font-normal leading-[1.0] tracking-[-0.04em] text-white max-w-4xl mb-6">
              Become an
              <span className="block font-editorial italic font-normal text-white mt-1">
                AI-First Software Engineer
              </span>
            </h1>

            {/* Hero Subtitle */}
            <p className="text-zinc-400 text-sm sm:text-base lg:text-[18px] leading-[1.65] max-w-2xl mx-auto mb-10 font-light">
              Software engineering is evolving fast. In the AI era, the best engineers don&apos;t just write code. They design systems, automate intelligently, and deploy AI-native solutions at scale.
            </p>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-16 sm:mb-20">
              <button
                onClick={() => setCurriculumModalOpen(true)}
                className="px-6 py-3 rounded-md text-sm font-medium text-white bg-transparent border border-[#333] hover:border-zinc-400 transition-colors cursor-pointer"
              >
                Get the full curriculum
              </button>

              <AirtribeButton
                text="Apply now"
                onClick={() => openModal('AI-First Software Engineering')}
                className="!w-36 !h-11"
              />
            </div>

            {/* Cohort Badges */}
            <div className="inline-flex items-center gap-3 text-xs sm:text-sm text-zinc-400 font-medium mb-8">
              <span className="text-white font-medium">6 Months</span>
              <span className="text-zinc-600">|</span>
              <span>Enrolment ends 22 Nov</span>
            </div>
          </div>

          {/* HERO VISUAL: COSMIC GLOWING VORTEX VIDEO */}
          {/* Sized larger and aligned flush with the right border line */}
          <div className="relative w-full max-w-[1240px] ml-auto h-[440px] sm:h-[560px] lg:h-[660px] flex items-end justify-end overflow-hidden select-none pb-0">
            {/* Ambient Backlight Aura shifted to the bottom right under vortex */}
            <div className="absolute bottom-10 right-12 w-[640px] h-[400px] bg-gradient-to-t from-blue-600/40 via-indigo-600/25 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="/hero-bel-poster.webp"
              className="w-full h-full object-cover object-right-bottom pointer-events-none select-none"
              style={{
                mixBlendMode: 'screen',
                WebkitMaskImage: 'radial-gradient(ellipse 95% 85% at 85% 90%, black 45%, transparent 85%)',
                maskImage: 'radial-gradient(ellipse 95% 85% at 85% 90%, black 45%, transparent 85%)',
              }}
            >
              <source src="/videos/hero-bel.mp4" type="video/mp4" />
            </video>
          </div>

        </div>
      </section>

      {/* 3. PROGRAM HIGHLIGHTS / STATS BAR */}
      <section className="w-full bg-black border-b border-[#232328]">
        <div className="max-w-[1440px] mx-auto border-x border-[#232328]">

          {/* Top Row: 6 months | 15+ experts | 22 Nov Countdown & CTAs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 border-b border-[#232328]">

            {/* Stat 1: 6 months */}
            <div className="lg:col-span-2 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-[#232328] flex flex-col justify-center">
              <span className="text-[44px] sm:text-[54px] font-normal leading-[1.0] text-white tracking-tight">
                6
              </span>
              <span className="text-zinc-400 text-sm font-medium mt-1">
                months
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

            {/* Stat 3: 22 Nov Countdown + Apply Now & Get Full Curriculum */}
            <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <span className="text-[32px] sm:text-[40px] font-normal leading-[1.0] text-white tracking-tight block">
                  22 Nov
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
                  onClick={() => openModal('AI-First Software Engineering')}
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

            <div className="flex items-center gap-4 px-6 sm:px-8 py-4 shrink-0 border-b lg:border-b-0 lg:border-r border-[#232328] bg-black z-10">
              <span className="text-zinc-400 text-xs sm:text-sm font-medium whitespace-nowrap">
                Engineers from
              </span>
              <div className="flex items-center">
                <img
                  src="/portraits/sanchit.webp"
                  alt="Sanchit Tanwar"
                  className="w-7 h-7 rounded-full border border-black object-cover shrink-0 grayscale"
                />
                <img
                  src="/portraits/gurmandeep.webp"
                  alt="Gurmandeep Bedi"
                  className="w-7 h-7 rounded-full border border-black object-cover -ml-2 shrink-0 grayscale"
                />
                <img
                  src="/portraits/dhaval.webp"
                  alt="Dhaval Trivedi"
                  className="w-7 h-7 rounded-full border border-black object-cover -ml-2 shrink-0 grayscale"
                />
                <img
                  src="/portraits/hero-avatar-1.jpg"
                  alt="Alumni"
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

      {/* 4. PARTNER LOGOS BAR (GitHub Education & EDC, IIT Delhi Laurel Flank) */}
      <section className="w-full bg-black border-b border-[#232328]">
        <div className="max-w-[1440px] mx-auto border-x border-[#232328] grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#232328] py-8 sm:py-12">

          {/* Left: GitHub Education Partner */}
          <div className="relative flex items-center justify-center p-6">
            <div className="flex items-center justify-center gap-6 sm:gap-8">
              <img
                src="/logos/laurel-edc-l.svg"
                alt=""
                style={{ height: '76px' }}
                className="w-auto shrink-0 opacity-80"
              />
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 relative">
                  <Image
                    src="/github-partner.webp"
                    alt="GitHub"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-zinc-300 text-center text-sm sm:text-base leading-tight font-sans">
                  Official Github Education<br />Program Partner
                </p>
              </div>
              <img
                src="/logos/laurel-edc-l.svg"
                alt=""
                style={{ height: '76px' }}
                className="w-auto shrink-0 -scale-x-100 opacity-80"
              />
            </div>
          </div>

          {/* Right: EDC, IIT Delhi Knowledge Partner */}
          <div className="relative flex items-center justify-center p-6">
            <div className="flex items-center justify-center gap-6 sm:gap-8">
              <img
                src="/logos/laurel-edc-l.svg"
                alt=""
                style={{ height: '76px' }}
                className="w-auto shrink-0 opacity-80"
              />
              <div className="flex flex-col items-center gap-1">
                <p className="font-editorial text-[34px] sm:text-[44px] leading-[1.2] font-semibold text-white">
                  EDC, IIT Delhi
                </p>
                <p className="text-zinc-400 text-sm sm:text-base">
                  Knowledge partner
                </p>
              </div>
              <img
                src="/logos/laurel-edc-l.svg"
                alt=""
                style={{ height: '76px' }}
                className="w-auto shrink-0 -scale-x-100 opacity-80"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 5. PROGRAMS AT A GLANCE (5 Interactive Tabs + Code Test Terminal) */}
      <BELProgramsAtAGlanceSection />

      {/* 6. PROGRAM CURRICULUM SECTION (6 Phases + DSA, Multi-Language Switchers) */}
      <BELCurriculumSection onOpenCurriculumModal={() => setCurriculumModalOpen(true)} />

      {/* 7. EXPERTS CAROUSEL (Sanchit Tanwar, Dhaval Trivedi, Gurmandeep Singh Bedi) */}
      <BELExpertsCarouselSection onOpenCurriculumModal={() => setCurriculumModalOpen(true)} />

      {/* 8. TOOLS & TECHNOLOGIES CONSTELLATION SECTION */}
      <BELToolsSection />

      {/* 9. REAL STORIES FROM THE TRIBE */}
      <BELStoriesSection />

      {/* 10. BONUS PERKS SECTION */}
      <BonusPerksSection />

      {/* 11. TRUSTED BY LEADING COMPANIES SECTION */}
      <TrustedCompaniesSection />

      {/* 12. WORK ON REAL-WORLD PROJECTS (Zero prohibited words) */}
      <BELRealWorldProjectsSection />

      {/* 13. CAREER SUPPORT BUILT INTO THE PROGRAM */}
      <CareerSupportSection />

      {/* 14. COME AS YOU ARE. LEAVE AS AN AI-FIRST ENGINEER. */}
      <ComeAsYouAreSection
        targetRole="engineer"
        courseId="AI-First Software Engineering"
        roleDescription="Great engineers come from everywhere. It's not where you start that matters, it's how fast you learn to design distributed architectures and build with AI. We turn your foundation into your edge, and point it at the systems roles everyone's hiring for."
      />

      {/* 15. YOUR COMMITMENT SECTION */}
      <YourCommitmentSection />

      {/* 16. A CERTIFICATE YOU'LL ACTUALLY WANT TO SHARE */}
      <CertificateSection
        certificateImage="/images/certificate/certificate-bel.webp"
        courseTitle="AI-First Software Engineering"
      />

      {/* 17. 3D REVOLVING PEER COMMUNITY CAROUSEL */}
      <PeerCommunityCarouselSection />

      {/* 18. SCHOLARSHIPS SECTION */}
      <ScholarshipsSection />

      {/* 19. FREQUENTLY ASKED QUESTIONS */}
      <BELFAQSection />

      {/* 20. PRICING SECTION */}
      <PricingSection
        courseTitle="AI-First Software Engineering"
        courseId="AI-First Software Engineering"
        originalPrice="₹1,85,000"
        discountPrice="₹1,49,999"
        specialNote="Special price applicable for next 15 seats only."
        includedItems={[
          {
            title: 'Live masterclasses with Principal Engineers',
            desc: '60+ live sessions and hands-on code reviews with tech leads from Uber, Microsoft and Atlassian',
          },
          {
            title: 'A production system portfolio',
            desc: 'A production-grade microservice deliverable from every phase, and a high-throughput capstone',
          },
          {
            title: '₹50,000+ worth of AI and engineering tools',
            desc: 'Access to Claude Code, OpenAI API credits, Docker Pro and Cursor',
          },
          {
            title: 'Career assistance & referral network',
            desc: 'Mock interviews, DSA problem-solving defense, resume reviews, and direct hiring partner referrals',
          },
          {
            title: '1 year of access',
            desc: 'Recordings, architectures, codebases, and the community for 1 year from your start date',
          },
        ]}
      />

      {/* 21. STICKY BOTTOM ENROLMENT BAR */}
      <div
        className={`fixed bottom-0 left-0 w-full bg-black/95 backdrop-blur-md border-t border-[#232328] py-3.5 px-4 sm:px-8 z-40 transition-all duration-300 ease-in-out ${
          showStickyBar ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-xs sm:text-sm text-zinc-300 flex-wrap justify-center md:justify-start">
            <div className="flex flex-col">
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Enrolment ends on</span>
              <span className="font-semibold text-white">22 November</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-[#232328]" />
            <div className="flex flex-col">
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Course starting on</span>
              <span className="font-semibold text-white">29 November</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-[#232328]" />
            <div className="flex flex-col">
              <span className="text-[10px] text-zinc-500 uppercase tracking-wider">Your commitment</span>
              <span className="font-semibold text-white">12-14 hrs/week</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-zinc-400 hidden lg:inline">
              Limited seats available
            </span>
            <AirtribeButton
              text="Apply now"
              onClick={() => openModal('AI-First Software Engineering')}
              className="!w-36 !h-10"
            />
          </div>
        </div>
      </div>

      {/* 22. GET FULL CURRICULUM LEAD MODAL */}
      {curriculumModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="relative w-full max-w-md bg-[#0d0e14] border border-zinc-700 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setCurriculumModalOpen(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-editorial font-normal text-white mb-2">
              Get the full curriculum
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
              Enter your details to receive the comprehensive 40+ module syllabus, architecture breakdowns, and schedules.
            </p>

            {formSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-lg font-semibold text-white">Curriculum downloading</h4>
                <p className="text-xs text-zinc-400">Opening full course syllabus brochure...</p>
              </div>
            ) : (
              <form onSubmit={handleCurriculumSubmit} className="space-y-4 text-left">
                <div>
                  <label className="text-xs text-zinc-400 block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={leadForm.name}
                    onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                    placeholder="Srinivasa Ramanujan"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-white text-sm focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="text-xs text-zinc-400 block mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    value={leadForm.email}
                    onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-white text-sm focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="text-xs text-zinc-400 block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    value={leadForm.phone}
                    onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-white text-sm focus:outline-none focus:border-purple-500"
                  />
                </div>

                <div>
                  <label className="text-xs text-zinc-400 block mb-1">Years of Experience</label>
                  <select
                    value={leadForm.experience}
                    onChange={(e) => setLeadForm({ ...leadForm, experience: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-zinc-900 border border-zinc-700 text-white text-sm focus:outline-none focus:border-purple-500"
                  >
                    <option value="0-1 years">0 - 1 years (Student / Entry)</option>
                    <option value="1-3 years">1 - 3 years (Junior / Mid)</option>
                    <option value="3-5 years">3 - 5 years (Mid / Senior)</option>
                    <option value="5+ years">5+ years (Senior / Staff)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full mt-2 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors cursor-pointer shadow-lg shadow-purple-600/30"
                >
                  Download Complete Curriculum
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
