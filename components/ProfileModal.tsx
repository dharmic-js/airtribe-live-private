'use client';

import React from 'react';
import Link from 'next/link';
import { useUser } from './UserContext';
import { X, CheckCircle2, Mail, Phone, GraduationCap, Calendar, ArrowRight, ExternalLink } from 'lucide-react';

export const ProfileModal: React.FC = () => {
  const { user, isProfileModalOpen, closeProfileModal } = useUser();

  if (!isProfileModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-[#0d0d12] border border-[#232328] shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200">
        
        {/* Subtle Ambient Glow */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={closeProfileModal}
          className="absolute top-5 right-5 p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close Profile"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with Avatar & Details */}
        <div className="flex items-start gap-4 mb-6">
          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-xl font-bold text-white shadow-lg ring-2 ring-purple-500/30 shrink-0">
            {user.initials}
            <span className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-[#0d0d12] rounded-full" />
          </div>

          <div className="flex-1 min-w-0 pr-6">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <h3 className="text-xl sm:text-2xl font-editorial font-normal text-white truncate">
                {user.name}
              </h3>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shrink-0">
                <CheckCircle2 className="w-3 h-3" />
                Signed Up
              </span>
            </div>
            <p className="text-xs text-zinc-400 font-light truncate">
              {user.role} &bull; {user.institute}
            </p>
          </div>
        </div>

        {/* Contact Info Grid */}
        <div className="space-y-2.5 p-4 rounded-xl bg-black/50 border border-white/5 mb-6 text-xs sm:text-sm">
          <div className="flex items-center gap-3 text-zinc-300">
            <Mail className="w-4 h-4 text-purple-400 shrink-0" />
            <span className="font-mono text-zinc-300 break-all select-all">{user.email}</span>
          </div>
          <div className="flex items-center gap-3 text-zinc-300">
            <Phone className="w-4 h-4 text-purple-400 shrink-0" />
            <span className="font-mono text-zinc-300 select-all">{user.phone}</span>
          </div>
          <div className="flex items-center gap-3 text-zinc-400 text-xs">
            <GraduationCap className="w-4 h-4 text-purple-400 shrink-0" />
            <span>{user.institute}</span>
          </div>
          <div className="flex items-center gap-3 text-zinc-400 text-xs">
            <Calendar className="w-4 h-4 text-purple-400 shrink-0" />
            <span>Member since {user.memberSince}</span>
          </div>
        </div>

        {/* Enrolled Programs */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Enrolled Programs ({user.enrolledCourses.length})
            </span>
          </div>
          <div className="space-y-2">
            {user.enrolledCourses.map((course) => (
              <Link
                key={course.id}
                href={course.href}
                onClick={closeProfileModal}
                className="flex items-center justify-between p-3 rounded-xl bg-[#13131a] hover:bg-[#1a1a24] border border-white/5 hover:border-purple-500/40 transition-all group"
              >
                <div>
                  <h4 className="text-sm font-medium text-white group-hover:text-purple-300 transition-colors">
                    {course.title}
                  </h4>
                  <span className="text-[11px] text-zinc-400">Starts: {course.startDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">
                    {course.badge}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Action Button: View Full Profile Page */}
        <div className="pt-4 border-t border-[#232328] flex items-center justify-between gap-3">
          <Link
            href="/profile"
            onClick={closeProfileModal}
            className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white text-zinc-950 font-medium text-sm hover:bg-zinc-200 transition-colors"
          >
            <span>View Full Profile</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <button
            onClick={closeProfileModal}
            className="py-2.5 px-4 rounded-xl bg-zinc-900 text-zinc-300 hover:text-white hover:bg-zinc-800 text-sm font-medium transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
