'use client';

import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { StatsSection } from '@/components/StatsSection';
import { TracksSection } from '@/components/TracksSection';
import { AirtribeWaySection } from '@/components/AirtribeWaySection';
import { EventEcosystemSection } from '@/components/EventEcosystemSection';
import { MentorsSection } from '@/components/MentorsSection';
import { StoriesSection } from '@/components/StoriesSection';
import JourneysSection from '@/components/JourneysSection';
import FoundersSection from '@/components/FoundersSection';
import { AirtribeButton } from '@/components/AirtribeButton';
import { useApplyModal } from '@/components/ApplyModalContext';

export default function HomePage() {
  const { openModal } = useApplyModal();

  return (
    <div className="w-full bg-black text-white min-h-screen">
      {/* 0. HERO SECTION - With Macintosh 1984 ascii video, custom typography, mentors marquee */}
      <HeroSection />

      {/* 1. STATS SECTION - 100+ Expert mentors, 40,000+ Builders, 4.7/5 Rating with animated gradient glow */}
      <StatsSection />

      {/* 2. THREE TRACKS SECTION - AI PM, AI Software Engineering, GenAI Launchpad with countdown and preview */}
      <TracksSection />

      {/* 3. THE AIRTRIBE WAY - 01 Live, 02 Projects, 03 Tribe cards in Emerald, Coral, Electric Blue */}
      <AirtribeWaySection />

      {/* 4. EVENT ECOSYSTEM - Buildcon, Final Final, India Builder Tour, Hackathons, Auditorium */}
      <EventEcosystemSection />

      {/* 5. MENTORS SECTION - Infinite Marquee with 10+ tech practitioners from Swiggy, Uber, Microsoft, Google */}
      <MentorsSection />

      {/* 6. REAL STORIES - Kanupriya, Chinmay, Debayan, Deeksha career transformations and salary hikes */}
      <StoriesSection />

      {/* 7. FROM THE TRIBE - JOURNEYS WORTH READING - Verified alumni review cards with before/after companies */}
      <JourneysSection />

      {/* 8 & 9. FOUNDERS' NOTE & BEHIND AIRTRIBE - Personal letter, Dhaval & Navneet, Kunal Shah, Angel investors */}
      <FoundersSection />

      {/* 10. FINAL CALL TO ACTION BANNER */}
      <section className="w-full bg-black border-t border-[#232328]">
        <div className="max-w-[1440px] mx-auto border-x border-[#232328] py-24 sm:py-32 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                'radial-gradient(circle at center, #a78bfa 0%, transparent 70%)',
            }}
          />
          <div className="max-w-3xl mx-auto px-6 relative z-10">
          <span className="font-mono text-xs uppercase tracking-widest text-[#a78bfa] bg-[#1a1728] border border-[#3b355c] px-3 py-1 rounded-full mb-6 inline-block">
            Next Cohorts Starting Soon
          </span>
          <h2 className="text-4xl sm:text-6xl font-normal text-white tracking-tight mb-4">
            Every era gets its builders.{' '}
            <span className="font-serif italic font-normal flow-lavender block mt-1">
              Now is your turn.
            </span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base max-w-lg mx-auto mb-10 font-light leading-relaxed">
            Apply to join our curated cohort of ambitious engineers, designers, and product managers.
            Seats are limited to maintain exceptional peer-to-mentor ratios.
          </p>
          <div className="flex justify-center">
            <AirtribeButton
              text="Apply for Cohort"
              onClick={() => openModal()}
              className="!w-48 !h-12"
            />
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
