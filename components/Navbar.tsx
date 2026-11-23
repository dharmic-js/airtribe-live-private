'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useApplyModal } from './ApplyModalContext';
import { useUser } from './UserContext';
import { AirtribeButton } from './AirtribeButton';
import { ChevronDown, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { openModal } = useApplyModal();
  const { user, openProfileModal } = useUser();
  const [programsOpen, setProgramsOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-black border-b border-[#232328]">
        <nav className="mx-auto flex h-16 w-full max-w-[1440px] items-center justify-between px-4 sm:px-8 lg:px-12">
          
          {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="relative h-6 w-9 flex items-center justify-center">
              <Image
                src="/airtribe-icon.svg"
                alt="Airtribe Icon"
                width={36}
                height={22}
                className="h-5 w-auto object-contain"
                priority
              />
            </div>
            <div className="relative h-6 w-24 flex items-center">
              <Image
                src="/airtribe-wordmark.svg"
                alt="Airtribe"
                width={96}
                height={22}
                className="h-5 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Center: Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {/* Programs Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setProgramsOpen(true)}
              onMouseLeave={() => setProgramsOpen(false)}
            >
              <button 
                type="button"
                onClick={() => setProgramsOpen(!programsOpen)}
                className="flex items-center gap-1.5 text-[15px] font-normal text-white hover:text-gray-300 transition-colors py-2 cursor-pointer"
              >
                <span>Programs</span>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={`transition-transform duration-200 ${programsOpen ? 'rotate-180' : ''}`}>
                  <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {programsOpen && (
                <div className="absolute top-full left-0 w-[240px] py-2 mt-1 bg-black border border-[#232328] shadow-2xl z-50">
                  <Link 
                    href="/courses/product-management-launchpad"
                    onClick={() => setProgramsOpen(false)}
                    className="block px-4 py-2 text-[14px] text-zinc-300 hover:text-white hover:bg-zinc-900/60 transition-colors text-left"
                  >
                    AI-First Product Management
                  </Link>

                  <Link 
                    href="/courses/backend-engineering-launchpad"
                    onClick={() => setProgramsOpen(false)}
                    className="block px-4 py-2 text-[14px] text-zinc-300 hover:text-white hover:bg-zinc-900/60 transition-colors text-left"
                  >
                    AI-First Software Engineering
                  </Link>

                  <Link 
                    href="/courses/generative-ai-launchpad"
                    onClick={() => setProgramsOpen(false)}
                    className="block px-4 py-2 text-[14px] text-zinc-300 hover:text-white hover:bg-zinc-900/60 transition-colors text-left"
                  >
                    The GenAI Launchpad
                  </Link>
                </div>
              )}
            </div>

            {/* Direct External Reviews Link */}
            <a 
              href="https://www.airtribe.live/reviews" 
              target="_blank" 
              rel="noreferrer noopener"
              className="text-[15px] font-normal text-white hover:text-gray-300 transition-colors"
            >
              Reviews
            </a>

            {/* Direct External Business Link */}
            <a 
              href="https://www.airtribe.live/business" 
              target="_blank" 
              rel="noreferrer noopener"
              className="text-[15px] font-normal text-white hover:text-gray-300 transition-colors"
            >
              Business
            </a>
          </div>

          {/* Right: Dhruv Malhotra Profile Button + Apply + Hamburger */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Signed-Up Learner Profile Pill */}
            <div 
              className="relative"
              onMouseEnter={() => setProfileDropdownOpen(true)}
              onMouseLeave={() => setProfileDropdownOpen(false)}
            >
              <button
                type="button"
                onClick={openProfileModal}
                className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-700/80 hover:border-purple-500/70 transition-all text-left group cursor-pointer"
                aria-label="User Profile"
              >
                <div className="relative w-7 h-7 rounded-full bg-gradient-to-tr from-purple-600 via-indigo-600 to-blue-500 flex items-center justify-center text-[11px] font-bold text-white shadow-sm ring-1 ring-white/20 shrink-0">
                  {user.initials}
                  <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 bg-emerald-500 border-2 border-black rounded-full" />
                </div>
                <div className="hidden sm:flex flex-col">
                  <span className="text-xs font-medium text-white group-hover:text-purple-300 transition-colors leading-tight">
                    {user.name}
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono leading-tight">
                    Signed up
                  </span>
                </div>
                <ChevronDown className={`w-3.5 h-3.5 text-zinc-400 hidden sm:block transition-transform duration-200 ${profileDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Profile Dropdown Menu */}
              {profileDropdownOpen && (
                <div className="absolute top-full right-0 w-72 sm:w-80 py-3 mt-1.5 bg-[#0e0e14] border border-[#232328] rounded-2xl shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-150">
                  <div className="px-4 pb-3 border-b border-[#232328]">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-sm font-bold text-white shadow-sm ring-1 ring-white/20 shrink-0">
                        {user.initials}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="font-semibold text-sm text-white truncate">{user.name}</span>
                          <span className="px-1.5 py-0.5 rounded text-[9px] font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 shrink-0">
                            Signed Up
                          </span>
                        </div>
                        <span className="block text-[11px] text-zinc-400 font-mono truncate select-all">{user.email}</span>
                        <span className="block text-[11px] text-zinc-400 font-mono">{user.phone}</span>
                      </div>
                    </div>
                    <span className="block text-[10px] text-zinc-500">{user.institute}</span>
                  </div>

                  <div className="py-2 px-2">
                    <div className="text-[10px] uppercase tracking-wider text-zinc-500 font-semibold px-2 mb-1.5">
                      Enrolled Programs
                    </div>
                    {user.enrolledCourses.map((c) => (
                      <Link
                        key={c.id}
                        href={c.href}
                        onClick={() => setProfileDropdownOpen(false)}
                        className="flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs text-zinc-300 hover:text-white hover:bg-zinc-900 transition-colors"
                      >
                        <span className="truncate">{c.title}</span>
                        <span className="text-[10px] text-purple-400 font-mono">{c.badge}</span>
                      </Link>
                    ))}
                  </div>

                  <div className="pt-2 px-2 border-t border-[#232328] flex flex-col gap-1">
                    <Link
                      href="/profile"
                      onClick={() => setProfileDropdownOpen(false)}
                      className="flex items-center justify-between px-3 py-2 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 text-purple-300 hover:text-white text-xs font-semibold transition-colors"
                    >
                      <span>View Learner Dashboard</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <AirtribeButton
              text="Apply now"
              onClick={() => openModal()}
            />

            <button
              type="button"
              onClick={() => setDrawerOpen(!drawerOpen)}
              aria-label="Toggle menu"
              className="flex items-center justify-center p-1 text-white hover:opacity-80 transition-opacity cursor-pointer"
            >
              <Image
                src="/menu.svg"
                alt="Menu"
                width={26}
                height={20}
                className="h-5 w-auto"
              />
            </button>
          </div>

        </nav>
      </header>

      {/* Slide-over Drawer Menu */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
          <div className="w-full max-w-sm bg-black border-l border-[#232328] h-full p-6 sm:p-8 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-200">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#232328] mb-6">
                <span className="text-2xl font-light text-white tracking-tight">Menu</span>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-2 text-zinc-400 hover:text-white cursor-pointer"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Signed-Up Learner Profile Card in Mobile Drawer */}
              <div className="p-4 rounded-2xl bg-[#0e0e14] border border-[#232328] mb-6">
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-500 flex items-center justify-center text-sm font-bold text-white shadow-sm ring-1 ring-white/20 shrink-0">
                    {user.initials}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-semibold text-sm text-white truncate">{user.name}</span>
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-medium bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        Signed Up
                      </span>
                    </div>
                    <span className="block text-[11px] text-zinc-400 font-mono truncate select-all">{user.email}</span>
                    <span className="block text-[11px] text-zinc-400 font-mono select-all">{user.phone}</span>
                  </div>
                </div>
                <Link
                  href="/profile"
                  onClick={() => setDrawerOpen(false)}
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-purple-600 text-white text-xs font-semibold hover:bg-purple-500 transition-colors"
                >
                  <span>Open Learner Profile</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-3">
                    Programs
                  </div>
                  <div className="space-y-2.5 pl-2 text-sm">
                    <Link href="/courses/product-management-launchpad" onClick={() => setDrawerOpen(false)} className="block text-zinc-300 hover:text-white">
                      AI-First Product Management
                    </Link>
                    <Link href="/courses/backend-engineering-launchpad" onClick={() => setDrawerOpen(false)} className="block text-zinc-300 hover:text-white">
                      AI-First Software Engineering
                    </Link>
                    <Link href="/courses/generative-ai-launchpad" onClick={() => setDrawerOpen(false)} className="block text-zinc-300 hover:text-white">
                      The GenAI Launchpad
                    </Link>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#232328]">
                  <div className="text-xs uppercase tracking-wider text-zinc-500 font-semibold mb-3">
                    Resources & Company
                  </div>
                  <div className="space-y-2.5 pl-2 text-sm">
                    <a 
                      href="https://www.airtribe.live/reviews" 
                      target="_blank" 
                      rel="noreferrer noopener"
                      onClick={() => setDrawerOpen(false)} 
                      className="block text-zinc-300 hover:text-white"
                    >
                      Reviews (Wall of Love)
                    </a>
                    <a 
                      href="https://www.airtribe.live/business" 
                      target="_blank" 
                      rel="noreferrer noopener"
                      onClick={() => setDrawerOpen(false)} 
                      className="block text-zinc-300 hover:text-white"
                    >
                      Business (Hire Talent)
                    </a>
                    <Link href="/upskill-for-free" onClick={() => setDrawerOpen(false)} className="block text-zinc-300 hover:text-white">
                      Free Resources & DSA
                    </Link>
                    <Link href="/project-showcase" onClick={() => setDrawerOpen(false)} className="block text-zinc-300 hover:text-white">
                      Capstone Projects
                    </Link>
                    <Link href="/events" onClick={() => setDrawerOpen(false)} className="block text-zinc-300 hover:text-white">
                      Live Events & AMAs
                    </Link>
                    <Link href="/about-us" onClick={() => setDrawerOpen(false)} className="block text-zinc-300 hover:text-white">
                      About Us
                    </Link>
                    <Link href="/contact-us" onClick={() => setDrawerOpen(false)} className="block text-zinc-300 hover:text-white">
                      Contact & FAQ
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#232328]">
              <AirtribeButton
                text="Apply for Batch"
                onClick={() => {
                  setDrawerOpen(false);
                  openModal();
                }}
                className="w-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

