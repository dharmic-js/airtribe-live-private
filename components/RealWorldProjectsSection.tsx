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
  targetAudience: string;
  northStarMetric: string;
  primaryGoal: string;
  funnelAnalysis: { stage: string; rate: string; dropOffReason: string }[];
  riceMatrix: { initiative: string; reach: string; impact: string; confidence: string; effort: string; score: string }[];
  solutionDetails: string[];
  keyResults: string[];
}

const projectsData: ProjectBrief[] = [
  {
    id: 'snabbit',
    company: 'Snabbit',
    tagline: 'On-Demand Home Services & Maintenance Platform',
    heroImage: '/images/projects/snabbit.webp',
    cardTitle: 'Build a habit loop that sticks',
    cardDesc: 'Step into a PM role at Snabbit. Run user research, map the activation funnel, and prioritize with RICE. Ship a prototype and growth loop to lift the weekly habit rate from 15% to 30%.',
    role: 'Associate Product Manager — Growth & Retention',
    duration: '4-Week Intensive Sprint',
    cohort: 'Airtribe AI-First PM Fellow Project',
    documentTitle: 'Snabbit: Activation Funnel Optimization & Habit-Forming Re-Engagement Loop',
    executiveSummary: 'This product requirements document addresses the post-service retention drop-off in Snabbit households across Bangalore and Mumbai. By re-engineering the booking confirmation loop into a predictive home maintenance schedule, the product team established a continuous habit loop that lifted weekly repeat rates from 15.2% to 29.8%.',
    problemStatement: 'While top-of-funnel installation remains strong via performance marketing, 84.8% of first-time users fail to re-engage within 30 days of initial service completion. Post-service interviews identified lack of proactive reminders, uncertain pricing for repeat visits, and friction in recurring technician dispatch as the primary abandonment drivers.',
    targetAudience: 'Urban dual-income households and working professionals managing residential maintenance across metro apartments, requiring guaranteed response times and transparent billing.',
    northStarMetric: 'Weekly Active Households (WAH) booking >= 1 verified service per month.',
    primaryGoal: 'Increase weekly habit formation rate from 15% to 30% and reduce customer acquisition payback period from 4.2 months to 2.8 months.',
    funnelAnalysis: [
      { stage: 'App Install & Registration', rate: '100%', dropOffReason: 'Standard entry baseline' },
      { stage: 'First Service Search & Booking', rate: '64.2%', dropOffReason: 'High initial intent driven by introductory pricing' },
      { stage: 'Service Delivery & Rating', rate: '58.4%', dropOffReason: '91% five-star rating among completed visits' },
      { stage: 'D7 App Open / Browse', rate: '21.5%', dropOffReason: 'User assumes platform is only for emergencies' },
      { stage: 'D30 Repeat Booking', rate: '15.2%', dropOffReason: 'Absence of scheduled cadence or reminder infrastructure' },
    ],
    riceMatrix: [
      { initiative: 'Snabbit Pass (Pre-Scheduled Monthly Cadence)', reach: '42,000', impact: '3.0 (High)', confidence: '80%', effort: '2 sprints', score: '50.4' },
      { initiative: 'Live WhatsApp Telemetry & One-Tap Rebook', reach: '60,000', impact: '2.0 (Med)', confidence: '90%', effort: '1.5 sprints', score: '72.0' },
      { initiative: 'Predictive Appliance Service Reminder Engine', reach: '35,000', impact: '3.0 (High)', confidence: '75%', effort: '2 sprints', score: '39.3' },
      { initiative: 'Referral Credit Wallet on Service Completion', reach: '28,000', impact: '1.5 (Low)', confidence: '70%', effort: '1 sprint', score: '29.4' },
    ],
    solutionDetails: [
      'Post-Visit Subscription Transition: Upon five-star service completion, present an automated home maintenance calendar with zero upfront commitment.',
      'Frictionless WhatsApp Scheduling: Leverage official WhatsApp Business API with interactive buttons allowing customers to confirm, snooze, or modify service dates in under 5 seconds.',
      'Technician Continuity Engine: Prioritize matching returning households with previously rated technicians, building trust and reducing on-site coordination time by 4 minutes.',
    ],
    keyResults: [
      'Weekly habit re-engagement rate increased from 15.2% to 29.8% in pilot zones.',
      'Customer lifetime value (LTV) expanded by 38% over a 90-day tracking window.',
      'Organic repeat bookings lifted without requiring additional ad spend or promo code discounts.',
    ],
  },
  {
    id: 'rapido',
    company: 'Rapido',
    tagline: "India's Leading Bike-Taxi & Auto Commute Network",
    heroImage: '/images/projects/rapido.webp',
    cardTitle: 'Build the reason riders come back',
    cardDesc: 'Step into a PM role at Rapido. Map the rider funnel from first ride to repeat, spot the drop-off points, prototype the fix, and design the GTM and metrics that win the second ride.',
    role: 'Product Manager — Rider Experience & Daily Commute',
    duration: '4-Week Intensive Sprint',
    cohort: 'Airtribe AI-First PM Fellow Project',
    documentTitle: 'Rapido: Second-Ride Activation & Commuter Route Parity Engine',
    executiveSummary: 'This product brief tackles the steep 48% drop-off between a rider’s first trip and second ride. By introducing geofenced landmark auto-anchoring (Rapido Spot) and an automated morning commute fare lock, the team significantly reduced morning cancellations and propelled first-to-second ride conversion to 66.4%.',
    problemStatement: '48% of first-time riders never request a second ride within 14 days. Rider analytics and qualitative teardowns show that morning peak-hour cancellations (8:30 AM – 10:30 AM), captain location mismatches at crowded transit nodes (metro stations, tech parks), and erratic surge pricing erode rider confidence during critical daily work trips.',
    targetAudience: 'Daily metro commuters and office goers traveling 3 to 10 kilometers during peak traffic windows, prioritizing predictable arrival time and reliable matching over luxury vehicles.',
    northStarMetric: 'Rider L28 Retention Rate (Percentage of active riders completing >= 4 trips per month).',
    primaryGoal: 'Increase first-to-second ride completion conversion from 52% to 68% and slash peak-morning driver cancellation rates by 35%.',
    funnelAnalysis: [
      { stage: 'First Ride Request & Completion', rate: '100%', dropOffReason: 'High activation driven by discount coupon' },
      { stage: 'App Open within 7 Days', rate: '56.3%', dropOffReason: '43.7% do not open app again during weekday commute' },
      { stage: 'Second Ride Intent / Search', rate: '38.2%', dropOffReason: 'Hesitation due to observed surge or estimated arrival times' },
      { stage: 'Second Ride Confirmed & Dispatched', rate: '31.1%', dropOffReason: 'Captain cancellation before pickup' },
      { stage: 'Second Ride Successfully Completed', rate: '27.0%', dropOffReason: 'Net retention across first 14 days' },
    ],
    riceMatrix: [
      { initiative: 'Rapido Spot (Precise Metro Landmark Auto-Anchor)', reach: '180,000', impact: '3.0 (High)', confidence: '90%', effort: '2 sprints', score: '243.0' },
      { initiative: 'Daily Commute Pass with Guaranteed Fare Lock', reach: '120,000', impact: '2.5 (High)', confidence: '85%', effort: '2 sprints', score: '127.5' },
      { initiative: 'Captain ETA Buffer & Smart Auto-Reroute', reach: '95,000', impact: '2.0 (Med)', confidence: '80%', effort: '1.5 sprints', score: '101.3' },
      { initiative: 'Post-Ride Commute Habit Notification', reach: '110,000', impact: '1.5 (Low)', confidence: '80%', effort: '1 sprint', score: '132.0' },
    ],
    solutionDetails: [
      'Rapido Spot Landmark Anchoring: At high-density transit gates (e.g. Indiranagar Metro Gate 2), automatically anchor the pickup pin to a designated verified pickup pillar, eliminating phone call confusion.',
      'Commute Route Lock: Allow riders who complete their first trip to pin their daily work route for a fixed weekly fare with guaranteed morning captain allocation.',
      'Instant Auto-Reassign: If an allocated captain stays stationary for more than 90 seconds, silently dispatch the nearest moving captain without restarting rider wait counters.',
    ],
    keyResults: [
      'Second-ride conversion surged from 52% to 66.4% across pilot metro corridors.',
      'Morning pickup cancellation frequency decreased by 37.8%.',
      'Average captain-rider connection time dropped by 2.2 minutes at major tech park hubs.',
    ],
  },
  {
    id: 'kuku',
    company: 'KUKU TV',
    tagline: 'Leading Vernacular Audio & Video Streaming Platform',
    heroImage: '/images/projects/kuku.webp',
    cardTitle: 'Build a binge into a habit',
    cardDesc: 'Step into a PM role at KUKU TV. Fix free-to-paid drop-off with sharper onboarding, cross-show recommendations, and a retention loop. Define the NSM and OKRs to lift first-show completion by 40%.',
    role: 'Growth Product Manager — Monetization & Onboarding',
    duration: '4-Week Intensive Sprint',
    cohort: 'Airtribe AI-First PM Fellow Project',
    documentTitle: 'KUKU TV: Free-to-Paid Monetization Architecture & Vernacular Content Hook',
    executiveSummary: 'This product requirements document resolves the abrupt drop-off observed when non-subscribers finish preview episodes of vernacular series. By transforming the hard annual paywall into a frictionless Rs 9 daily micro-pass and embedding personalized cliffhanger teasers, the team achieved an 8.8% free-to-paid conversion and a 42.6% lift in first-show completions.',
    problemStatement: 'While top historical drama and thriller audio/video series achieve >82% completion across free Episodes 1 and 2, 64% of viewers abandon the platform at the Episode 3 paywall screen. Users across Tier-2 and Tier-3 cities hesitate to commit to full annual subscriptions before validating that catalog volume matches their regional dialect preferences.',
    targetAudience: 'Vernacular content consumers across Tier-2 and Tier-3 India seeking localized stories in Hindi, Marathi, and Telugu with accessible pricing and low bandwidth requirements.',
    northStarMetric: 'Total Paid Viewing Hours per Monthly Active User (Hours/MAU).',
    primaryGoal: 'Increase first-show completion by 40% and double free-to-paid subscription conversion from 4.1% to 8.5%.',
    funnelAnalysis: [
      { stage: 'App Launch & Show Discovery', rate: '100%', dropOffReason: 'High organic curiosity from social reels' },
      { stage: 'Episode 1 (Free) Completion', rate: '86.4%', dropOffReason: 'Strong narrative opening and voice acting' },
      { stage: 'Episode 2 (Free) Completion', rate: '82.1%', dropOffReason: 'High story immersion and cliffhanger build-up' },
      { stage: 'Episode 3 (Paywall Encounter)', rate: '29.5%', dropOffReason: 'Sudden demand for annual Rs 399 payment triggers abandonment' },
      { stage: 'Paid Plan Purchase & Binge Continue', rate: '4.1%', dropOffReason: 'Historical baseline conversion' },
    ],
    riceMatrix: [
      { initiative: 'Personalized 15-Second Cliffhanger Teaser', reach: '310,000', impact: '2.5 (High)', confidence: '90%', effort: '1 sprint', score: '697.5' },
      { initiative: 'UPI AutoPay Rs 9/Day Micro-Pass', reach: '250,000', impact: '3.0 (High)', confidence: '85%', effort: '2 sprints', score: '318.7' },
      { initiative: 'Vernacular Voice-Guided Onboarding Engine', reach: '140,000', impact: '2.0 (Med)', confidence: '75%', effort: '1.5 sprints', score: '140.0' },
      { initiative: 'Download-for-Offline Quick Cache Option', reach: '190,000', impact: '2.0 (Med)', confidence: '80%', effort: '2 sprints', score: '152.0' },
    ],
    solutionDetails: [
      'Contextual Episode Cliffhanger: Rather than an abrasive full-screen blocking modal, Episode 2 ends with a 15-second contextual teaser of the upcoming revelation.',
      'Micro-Commitment Pricing Tier: Introduce an impulse-friendly Rs 9 24-hour binge pass with single-tap UPI intent payment, removing long-term commitment anxiety.',
      'Vernacular Genre Affinity Matching: As soon as a user finishes Episode 1, pre-cache 3 top-rated companion titles in their preferred regional language to drive multi-show stickiness.',
    ],
    keyResults: [
      'First-show completion increased by 42.6% within the first 14 days of launch.',
      'Free-to-paid conversion reached 8.8%, beating the 8.5% target.',
      'Day-30 retention among micro-pass buyers upgrading to quarterly plans reached 31.4%.',
    ],
  },
];

export function RealWorldProjectsSection() {
  const [activeBrief, setActiveBrief] = useState<ProjectBrief | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Raw file download generator
  const handleDownloadFile = (project: ProjectBrief) => {
    const textContent = `
================================================================================
AIRTRIBE PRODUCT MANAGEMENT LAUNCHPAD
PROJECT BRIEF & REQUIREMENTS DOCUMENT
================================================================================

PROJECT: ${project.documentTitle}
COMPANY: ${project.company} (${project.tagline})
ROLE: ${project.role}
TIMELINE: ${project.duration}
STATUS: Production Approved

--------------------------------------------------------------------------------
1. EXECUTIVE SUMMARY
--------------------------------------------------------------------------------
${project.executiveSummary}

--------------------------------------------------------------------------------
2. PROBLEM STATEMENT & USER PAIN POINTS
--------------------------------------------------------------------------------
${project.problemStatement}

TARGET AUDIENCE:
${project.targetAudience}

NORTH STAR METRIC (NSM):
${project.northStarMetric}

PRIMARY GOAL:
${project.primaryGoal}

--------------------------------------------------------------------------------
3. ACTIVATION & RETENTION FUNNEL DIAGNOSTICS
--------------------------------------------------------------------------------
${project.funnelAnalysis
  .map(
    (item, idx) =>
      `[Stage ${idx + 1}] ${item.stage.padEnd(35)} | Rate: ${item.rate.padEnd(8)} | Note: ${item.dropOffReason}`
  )
  .join('\n')}

--------------------------------------------------------------------------------
4. RICE PRIORITIZATION MATRIX
--------------------------------------------------------------------------------
${project.riceMatrix
  .map(
    (item, idx) =>
      `[#${idx + 1}] ${item.initiative}\n     Reach: ${item.reach} | Impact: ${item.impact} | Conf: ${item.confidence} | Effort: ${item.effort} | RICE Score: ${item.score}`
  )
  .join('\n\n')}

--------------------------------------------------------------------------------
5. SOLUTION ARCHITECTURE & IMPLEMENTATION
--------------------------------------------------------------------------------
${project.solutionDetails.map((detail, idx) => `(${idx + 1}) ${detail}`).join('\n\n')}

--------------------------------------------------------------------------------
6. MEASURED RESULTS & POST-LAUNCH METRICS
--------------------------------------------------------------------------------
${project.keyResults.map((kr) => `• ${kr}`).join('\n')}

================================================================================
CONFIDENTIAL - FOR AUTHORIZED AIRTRIBE PRODUCT MANAGEMENT FELLOWS ONLY
================================================================================
`.trim();

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${project.company}_Product_Management_Project_Brief.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="bg-black text-white pt-24 sm:pt-32 pb-24 sm:pb-36 border-t border-[#232328]">
      <div className="max-w-[1440px] mx-auto border-x border-[#232328] px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <h2 className="font-editorial text-[32px] sm:text-[48px] text-white text-center font-normal leading-tight tracking-tight mb-12 sm:mb-16">
          Work on real-world projects
        </h2>

        {/* Desktop 3-Card Grid */}
        <div className="border-y border-[#232328] hidden md:flex">
          {projectsData.map((project, idx) => {
            const isLast = idx === projectsData.length - 1;
            return (
              <div
                key={project.id}
                className={`flex flex-1 flex-col justify-between gap-6 bg-black px-6 pt-6 pb-8 ${
                  !isLast ? 'border-r border-[#232328]' : ''
                }`}
              >
                {/* Project Image */}
                <div className="relative h-55 w-full shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={project.heroImage}
                    alt={project.company}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>

                {/* Content Area */}
                <div className="flex w-full flex-col items-start gap-8 sm:gap-12 flex-1 justify-between">
                  <div className="flex w-full flex-col gap-4">
                    <h3 className="font-editorial text-[26px] sm:text-[28px] font-normal text-white leading-snug">
                      {project.cardTitle}
                    </h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">
                      {project.cardDesc}
                    </p>
                  </div>

                  {/* Trigger Button: Download sample brief as in reference */}
                  <button
                    type="button"
                    onClick={() => setActiveBrief(project)}
                    className="flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap px-6 h-12 text-sm font-medium border border-white text-white bg-black hover:bg-zinc-900 transition-colors"
                  >
                    Download sample brief
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View: Stacked Cards */}
        <div className="md:hidden flex flex-col">
          {projectsData.map((project, idx) => (
            <div
              key={`mobile-${project.id}`}
              className={`border border-[#232328] bg-black p-5.5 flex flex-col items-start gap-8 ${
                idx > 0 ? '-mt-px' : ''
              }`}
            >
              <div className="flex w-full flex-col gap-5">
                <div className="relative h-50 w-full overflow-hidden rounded-lg">
                  <Image
                    src={project.heroImage}
                    alt={project.company}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="flex min-h-36 w-full flex-col gap-4">
                  <h3 className="font-editorial text-[24px] font-normal text-white leading-snug">
                    {project.cardTitle}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {project.cardDesc}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveBrief(project)}
                className="w-full flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap px-6 h-12 text-sm font-medium border border-white text-white bg-black hover:bg-zinc-900 transition-colors"
              >
                Download sample brief
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* DETAILED PROJECT BRIEF MODAL / VIEWER */}
      {activeBrief && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0 print:bg-white print:static">
          <div className="bg-[#0e0e12] border border-[#232328] rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto relative shadow-2xl text-left flex flex-col print:max-h-none print:border-none print:shadow-none print:bg-white print:text-black">
            
            {/* Modal Header Bar */}
            <div className="sticky top-0 z-20 bg-[#0e0e12]/95 backdrop-blur border-b border-[#232328] px-6 sm:px-8 py-5 flex items-center justify-between gap-4 print:hidden">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono tracking-widest uppercase text-purple-400 font-semibold block">
                    Official Airtribe Project Brief
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white leading-tight">
                    {activeBrief.company} — Product Requirements Brief
                  </h4>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2.5">
                <button
                  onClick={handlePrint}
                  title="Print or Save as PDF"
                  className="px-3.5 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs sm:text-sm font-medium text-white flex items-center gap-2 transition-colors cursor-pointer border border-zinc-700"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Save PDF / Print</span>
                </button>

                <button
                  onClick={() => handleDownloadFile(activeBrief)}
                  title="Download Raw Document"
                  className="px-3.5 py-2 rounded-lg bg-white hover:bg-zinc-200 text-xs sm:text-sm font-medium text-black flex items-center gap-2 transition-colors cursor-pointer"
                >
                  {downloadSuccess ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Downloaded</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      <span>Download File</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => setActiveBrief(null)}
                  className="p-2 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors ml-1 cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Document Body */}
            <div className="p-6 sm:p-10 space-y-8 font-sans print:p-0">
              
              {/* Document Banner */}
              <div className="border border-zinc-800 bg-[#141418] rounded-xl p-5 sm:p-6 print:border-black print:bg-gray-100">
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-zinc-400 border-b border-zinc-800 pb-3 mb-4 print:border-gray-400 print:text-black">
                  <span>PROJECT REF: {activeBrief.id.toUpperCase()}-PM-2026</span>
                  <span>ROLE: {activeBrief.role}</span>
                  <span className="text-emerald-400 font-semibold print:text-black">STATUS: PRODUCTION APPROVED</span>
                </div>
                <h1 className="text-2xl sm:text-3xl font-editorial font-normal text-white print:text-black leading-tight">
                  {activeBrief.documentTitle}
                </h1>
                <p className="text-xs sm:text-sm text-zinc-400 print:text-zinc-700 mt-2">
                  Company: <strong className="text-white print:text-black">{activeBrief.company}</strong> — {activeBrief.tagline}
                </p>
              </div>

              {/* 1. Executive Summary */}
              <section className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold">
                  1. Executive Summary
                </h3>
                <p className="text-sm sm:text-base leading-relaxed text-zinc-300 print:text-black">
                  {activeBrief.executiveSummary}
                </p>
              </section>

              {/* 2. Problem Statement & Targets */}
              <section className="space-y-4">
                <h3 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold">
                  2. Problem Statement & Objectives
                </h3>
                <div className="bg-[#121216] border border-zinc-800 p-4 sm:p-5 rounded-xl print:bg-white print:border-black">
                  <p className="text-sm text-zinc-300 print:text-black leading-relaxed">
                    {activeBrief.problemStatement}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="bg-[#141418] border border-zinc-800 p-4 rounded-xl print:bg-white print:border-black">
                    <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-1">
                      Target Audience
                    </span>
                    <p className="text-zinc-200 print:text-black">{activeBrief.targetAudience}</p>
                  </div>
                  <div className="bg-[#141418] border border-zinc-800 p-4 rounded-xl print:bg-white print:border-black">
                    <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block mb-1">
                      North Star Metric (NSM)
                    </span>
                    <p className="text-zinc-200 print:text-black font-medium">{activeBrief.northStarMetric}</p>
                  </div>
                </div>
              </section>

              {/* 3. Funnel Analysis Table */}
              <section className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold">
                  3. Funnel Diagnostics & Drop-Off Mapping
                </h3>
                <div className="overflow-x-auto rounded-xl border border-zinc-800 print:border-black">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-[#16161c] text-zinc-400 print:bg-gray-200 print:text-black border-b border-zinc-800">
                      <tr>
                        <th className="py-3 px-4 font-semibold">Funnel Stage</th>
                        <th className="py-3 px-4 font-semibold">Conversion Rate</th>
                        <th className="py-3 px-4 font-semibold">Diagnostic Findings & Friction Points</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800 print:divide-gray-300">
                      {activeBrief.funnelAnalysis.map((item, i) => (
                        <tr key={`funnel-${i}`} className="hover:bg-white/[0.02]">
                          <td className="py-3 px-4 font-medium text-white print:text-black">{item.stage}</td>
                          <td className="py-3 px-4 text-emerald-400 font-mono font-semibold print:text-black">{item.rate}</td>
                          <td className="py-3 px-4 text-zinc-300 print:text-black">{item.dropOffReason}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 4. RICE Prioritization Matrix */}
              <section className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold">
                  4. RICE Prioritization Framework
                </h3>
                <div className="overflow-x-auto rounded-xl border border-zinc-800 print:border-black">
                  <table className="w-full text-left text-xs sm:text-sm">
                    <thead className="bg-[#16161c] text-zinc-400 print:bg-gray-200 print:text-black border-b border-zinc-800">
                      <tr>
                        <th className="py-3 px-4 font-semibold">Candidate Initiative</th>
                        <th className="py-3 px-3 font-semibold">Reach</th>
                        <th className="py-3 px-3 font-semibold">Impact</th>
                        <th className="py-3 px-3 font-semibold">Confidence</th>
                        <th className="py-3 px-3 font-semibold">Effort</th>
                        <th className="py-3 px-4 font-semibold">RICE Score</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800 print:divide-gray-300">
                      {activeBrief.riceMatrix.map((item, i) => (
                        <tr key={`rice-${i}`} className="hover:bg-white/[0.02]">
                          <td className="py-3 px-4 font-medium text-white print:text-black">{item.initiative}</td>
                          <td className="py-3 px-3 text-zinc-300 print:text-black font-mono">{item.reach}</td>
                          <td className="py-3 px-3 text-zinc-300 print:text-black">{item.impact}</td>
                          <td className="py-3 px-3 text-zinc-300 print:text-black font-mono">{item.confidence}</td>
                          <td className="py-3 px-3 text-zinc-300 print:text-black">{item.effort}</td>
                          <td className="py-3 px-4 text-purple-400 font-mono font-bold print:text-black">{item.score}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* 5. Solution Specifications */}
              <section className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold">
                  5. Solution Architecture & User Flows
                </h3>
                <div className="space-y-3">
                  {activeBrief.solutionDetails.map((detail, idx) => (
                    <div
                      key={`sol-${idx}`}
                      className="flex items-start gap-3 bg-[#121216] border border-zinc-800 p-4 rounded-xl print:bg-white print:border-black"
                    >
                      <span className="w-6 h-6 rounded-full bg-purple-900/60 text-purple-300 flex items-center justify-center font-mono text-xs shrink-0 mt-0.5 print:bg-gray-300 print:text-black">
                        {idx + 1}
                      </span>
                      <p className="text-sm text-zinc-200 print:text-black leading-relaxed">{detail}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 6. Post-Launch Metrics & Outcomes */}
              <section className="space-y-3">
                <h3 className="text-xs font-mono uppercase tracking-widest text-purple-400 font-semibold">
                  6. Measured Outcomes & Success Criteria
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeBrief.keyResults.map((result, idx) => (
                    <div
                      key={`kr-${idx}`}
                      className="bg-[#141418] border border-zinc-800 p-4 rounded-xl flex items-start gap-3 print:bg-white print:border-black"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 print:text-black" />
                      <p className="text-xs sm:text-sm text-zinc-200 print:text-black">{result}</p>
                    </div>
                  ))}
                </div>
              </section>

            </div>

            {/* Modal Footer */}
            <div className="border-t border-[#232328] px-6 sm:px-8 py-4 bg-[#0a0a0d] flex items-center justify-between text-xs text-zinc-500 print:hidden">
              <span>Airtribe Product Management Launchpad — Verified Portfolio Project Brief</span>
              <button
                onClick={() => setActiveBrief(null)}
                className="text-zinc-400 hover:text-white font-medium cursor-pointer"
              >
                Close Brief
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
