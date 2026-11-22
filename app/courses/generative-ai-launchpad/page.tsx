'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useApplyModal } from '@/components/ApplyModalContext';
import { GenAIHeroSection } from '@/components/GenAIHeroSection';
import { GenAIStatsPartnerSection } from '@/components/GenAIStatsPartnerSection';
import { GenAIWorkChangesSection } from '@/components/GenAIWorkChangesSection';
import { GenAIExpertsCarouselSection } from '@/components/GenAIExpertsCarouselSection';
import { BonusPerksSection } from '@/components/BonusPerksSection';
import { TrustedCompaniesSection } from '@/components/TrustedCompaniesSection';
import { CareerSupportSection } from '@/components/CareerSupportSection';
import { ComeAsYouAreSection } from '@/components/ComeAsYouAreSection';
import { YourCommitmentSection } from '@/components/YourCommitmentSection';
import { CertificateSection } from '@/components/CertificateSection';
import { PeerCommunityCarouselSection } from '@/components/PeerCommunityCarouselSection';
import { ScholarshipsSection } from '@/components/ScholarshipsSection';
import { PricingSection } from '@/components/PricingSection';
import { FAQSection } from '@/components/FAQSection';
import { AirtribeButton } from '@/components/AirtribeButton';
import { X, CheckCircle2 } from 'lucide-react';

export default function GenAILaunchpadPage() {
  const router = useRouter();
  const { openModal } = useApplyModal();

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

  const handleCurriculumSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setCurriculumModalOpen(false);
      setFormSubmitted(false);
      window.open('/curriculum-genai.pdf', '_blank');
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-black text-white relative font-sans selection:bg-purple-900 selection:text-white">
      
      {/* 1. HERO SECTION */}
      <GenAIHeroSection onApplyClick={() => openModal('The GenAI Launchpad')} />

      {/* 2. STATS & PARTNERS SECTION */}
      <GenAIStatsPartnerSection
        onApplyClick={() => openModal('The GenAI Launchpad')}
        onOpenCurriculumModal={() => setCurriculumModalOpen(true)}
      />

      {/* 3. HOW YOUR WORK CHANGES SECTION */}
      <GenAIWorkChangesSection />

      {/* 4. LEARN FROM EXPERTS WHO BUILD WITH AI */}
      <GenAIExpertsCarouselSection />

      {/* 5. BONUS PERKS & TOOLSTACK (₹50,000+ INCLUDED TOOLS) */}
      <BonusPerksSection />

      {/* 6. TRUSTED BY BUILDERS FROM LEADING COMPANIES */}
      <TrustedCompaniesSection />

      {/* 7. CAREER SUPPORT BUILT INTO THE PROGRAM */}
      <CareerSupportSection />

      {/* 8. COME AS YOU ARE (DIVERSE PEER COHORTS) */}
      <ComeAsYouAreSection />

      {/* 9. YOUR COMMITMENT */}
      <YourCommitmentSection />

      {/* 10. CERTIFICATE OF COMPLETION */}
      <CertificateSection courseTitle="Generative AI Launchpad" />

      {/* 11. REVOLVING PEER COMMUNITY CAROUSEL */}
      <PeerCommunityCarouselSection />

      {/* 12. SCHOLARSHIPS */}
      <ScholarshipsSection />

      {/* 13. PRICING & ENROLLMENT */}
      <PricingSection
        courseTitle="The GenAI Launchpad"
        originalPrice="₹1,25,000"
        discountPrice="₹94,999"
        specialNote="Special cohort pricing available for the upcoming round."
        courseId="The GenAI Launchpad"
        includedItems={[
          {
            title: 'Live sessions with GenAI leaders',
            desc: '30+ live interactive masterclasses and architecture workshops with staff AI practitioners.',
          },
          {
            title: 'Production portfolio you can showcase',
            desc: 'Multi-agent orchestration, enterprise RAG pipelines, fine-tuned models, and a showcase capstone.',
          },
          {
            title: '₹50,000+ worth of AI tools & credits',
            desc: 'Direct access to n8n, Claude Pro / OpenAI API credits, Pinecone vector DB, and cloud GPU infra.',
          },
          {
            title: 'Career acceleration & placement assistance',
            desc: 'AI engineering portfolio reviews, technical mock interviews, and hiring network introductions.',
          },
          {
            title: '1 year of continuous access',
            desc: 'All recordings, complete architecture templates, repositories, and private cohort community access.',
          },
        ]}
      />

      {/* 14. FREQUENTLY ASKED QUESTIONS */}
      <FAQSection />

      {/* PADDING FOR FIXED FOOTER BAR */}
      <div className="h-20" />

      {/* 15. FIXED STICKY ENROLLMENT FOOTER BAR */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-black/95 backdrop-blur-md border-t border-[#232328] py-2.5 px-4 sm:px-8">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4">
          
          {/* Metadata Ticker on Left */}
          <div className="flex items-center gap-6 sm:gap-10 text-xs sm:text-[13px] text-zinc-400">
            <div>
              <span className="block text-[10px] uppercase tracking-wider text-zinc-400">Enrolment ended on</span>
              <span className="font-semibold text-white">21 November</span>
            </div>

            <div className="hidden sm:block">
              <span className="block text-[10px] uppercase tracking-wider text-zinc-400">Course starting on</span>
              <span className="font-semibold text-white">22 November</span>
            </div>

            <div className="hidden md:block">
              <span className="block text-[10px] uppercase tracking-wider text-zinc-400">Your commitment</span>
              <span className="font-semibold text-white">10-12 hrs/week</span>
            </div>
          </div>

          {/* CTA on Right */}
          <div className="flex items-center gap-3">
            <span className="hidden lg:inline text-xs text-zinc-400 font-light">Limited seats available</span>
            <AirtribeButton
              text="Apply now"
              onClick={() => openModal('The GenAI Launchpad')}
              className="!w-32 sm:!w-36 !h-9 sm:!h-10 text-xs sm:text-sm"
            />
          </div>

        </div>
      </div>

      {/* 16. GET FULL CURRICULUM LEAD MODAL */}
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
              Enter your details to receive the comprehensive 16-week syllabus, multi-agent modules, and architecture breakdowns.
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

                <div className="pt-2">
                  <AirtribeButton
                    text="Download full syllabus"
                    onClick={() => {}}
                    className="!w-full !h-11"
                  />
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
