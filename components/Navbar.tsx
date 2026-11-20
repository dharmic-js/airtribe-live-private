'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useApplyModal } from './ApplyModalContext';
import { AirtribeButton } from './AirtribeButton';
import { ChevronDown, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { openModal } = useApplyModal();
  const [programsOpen, setProgramsOpen] = useState(false);
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
                className="flex items-center gap-1.5 text-[15px] font-normal text-white hover:text-gray-300 transition-colors py-2"
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

            <Link href="/reviews" className="text-[15px] font-normal text-white hover:text-gray-300 transition-colors">
              Reviews
            </Link>

            <Link href="/business" className="text-[15px] font-normal text-white hover:text-gray-300 transition-colors">
              Business
            </Link>
          </div>

          {/* Right: Sign Up Button + Hamburger */}
          <div className="flex items-center gap-4 sm:gap-6">
            <AirtribeButton
              text="Sign up"
              onClick={() => openModal()}
            />

            <button
              type="button"
              onClick={() => setDrawerOpen(!drawerOpen)}
              aria-label="Toggle menu"
              className="flex items-center justify-center p-1 text-white hover:opacity-80 transition-opacity"
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
              <div className="flex items-center justify-between pb-6 border-b border-[#232328] mb-8">
                <span className="text-2xl font-light text-white tracking-tight">Menu</span>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="p-2 text-zinc-400 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </button>
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
                    <Link href="/reviews" onClick={() => setDrawerOpen(false)} className="block text-zinc-300 hover:text-white">
                      Wall of Love (Reviews)
                    </Link>
                    <Link href="/business" onClick={() => setDrawerOpen(false)} className="block text-zinc-300 hover:text-white">
                      For Business (Hire Talent)
                    </Link>
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
