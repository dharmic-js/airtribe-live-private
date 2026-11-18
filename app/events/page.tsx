'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useApplyModal } from '@/components/ApplyModalContext';
import { Calendar, Clock, Video, Users, CheckCircle, ArrowRight } from 'lucide-react';

const events = [
  {
    title: 'Masterclass: Architecting Multi-Agent Workflows with LangGraph',
    speaker: 'Amanpreet Singh',
    speakerRole: 'Staff AI Engineer @ Global Tech Unicorn',
    date: 'Saturday, Dec 5, 2026',
    time: '6:00 PM - 7:30 PM IST',
    attendees: '1,420 Registered',
    category: 'Generative AI',
    status: 'Upcoming',
  },
  {
    title: 'System Design Teardown: How Uber Handles 1M Dispatches/Minute',
    speaker: 'Gaurav K.',
    speakerRole: 'Principal Architect @ Ex-Uber',
    date: 'Sunday, Dec 6, 2026',
    time: '11:00 AM - 12:30 PM IST',
    attendees: '2,150 Registered',
    category: 'System Design',
    status: 'Upcoming',
  },
  {
    title: 'Product Leadership: Crafting AI PRDs That Engineers Love',
    speaker: 'Sneha Roy',
    speakerRole: 'VP of Product @ FinTech Unicorn',
    date: 'Wednesday, Dec 9, 2026',
    time: '7:00 PM - 8:30 PM IST',
    attendees: '980 Registered',
    category: 'Product Management',
    status: 'Upcoming',
  },
];

export default function EventsPage() {
  const { openModal } = useApplyModal();
  const [rsvpDone, setRsvpDone] = useState<string | null>(null);

  const handleRsvp = (title: string) => {
    setRsvpDone(title);
    setTimeout(() => setRsvpDone(null), 3000);
  };

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-3 block">
          Live Community Masterclasses
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          The Airtribe Event Ecosystem
        </h1>
        <p className="text-base sm:text-lg text-gray-300">
          Learn directly from top industry practitioners in interactive weekend masterclasses, architecture teardowns, and AMA sessions.
        </p>
      </div>

      {rsvpDone && (
        <div className="max-w-md mx-auto mb-8 p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm text-center animate-in fade-in">
          🎉 RSVP confirmed for &quot;{rsvpDone}&quot;! A calendar invite has been sent.
        </div>
      )}

      {/* Events List */}
      <div className="space-y-6 max-w-4xl mx-auto mb-20">
        {events.map((event, idx) => (
          <div
            key={idx}
            className="glass-card p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-brand-500/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6"
          >
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-brand-500/10 text-brand-300 border border-brand-500/20">
                  {event.category}
                </span>
                <span className="text-xs text-gray-400 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5" />
                  {event.attendees}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white leading-snug">
                {event.title}
              </h3>

              <div className="text-xs text-gray-300">
                <span className="font-semibold text-white">{event.speaker}</span> • {event.speakerRole}
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 pt-1">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-brand-400" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-brand-400" />
                  <span>{event.time}</span>
                </div>
              </div>
            </div>

            <div className="shrink-0">
              <button
                onClick={() => handleRsvp(event.title)}
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-brand-500 hover:bg-brand-600 transition-all shadow-md shadow-brand-500/25 active:scale-95 flex items-center justify-center gap-2"
              >
                <Video className="w-4 h-4" />
                Register For Free
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cohort Banner */}
      <div className="glass-card p-8 sm:p-12 rounded-3xl max-w-4xl mx-auto text-center border border-brand-500/30 bg-gradient-to-b from-brand-500/10 to-transparent">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
          Want Continuous Mentorship Every Week?
        </h3>
        <p className="text-gray-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
          Masterclasses give you a taste. Our live cohorts give you 8 to 16 weeks of direct immersion with industry directors.
        </p>
        <button
          onClick={() => openModal()}
          className="px-8 py-4 rounded-xl font-bold text-white bg-brand-500 hover:bg-brand-600 transition-all shadow-xl shadow-brand-500/30 active:scale-95"
        >
          Explore All Cohorts
        </button>
      </div>

    </div>
  );
}
