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

export default function HomePage() {
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
    </div>
  );
}
