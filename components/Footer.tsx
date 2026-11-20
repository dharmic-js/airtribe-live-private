'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-black border-t border-[#232328]">
      <div className="mx-auto w-full max-w-[1440px] border-x border-[#232328]">
        
        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between">
          
          {/* Brand Left Column */}
          <div className="flex flex-col justify-between gap-10 py-12 px-6 sm:px-10 lg:w-[420px] shrink-0 border-b lg:border-b-0 lg:border-r border-[#232328]">
            <div className="flex flex-col gap-8">
              
              {/* Airtribe Logo */}
              <Link href="/" className="inline-flex items-center gap-2">
                <div className="relative w-7 h-7">
                  <Image
                    src="/airtribe-icon.svg"
                    alt="Airtribe"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="relative w-24 h-5">
                  <Image
                    src="/airtribe-wordmark.svg"
                    alt="Airtribe"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>

              {/* Social Icons (SVGs from source) */}
              <div className="flex items-center gap-6">
                <a
                  href="https://www.linkedin.com/company/airtribe/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn"
                  className="opacity-75 hover:opacity-100 transition-opacity"
                >
                  <div className="relative w-5 h-5">
                    <Image src="/social-linkedin.svg" alt="LinkedIn" fill className="object-contain" />
                  </div>
                </a>
                <a
                  href="https://www.youtube.com/@airtribe"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="YouTube"
                  className="opacity-75 hover:opacity-100 transition-opacity"
                >
                  <div className="relative w-7 h-5">
                    <Image src="/social-youtube.svg" alt="YouTube" fill className="object-contain" />
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/airtribe.live/"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Instagram"
                  className="opacity-75 hover:opacity-100 transition-opacity"
                >
                  <div className="relative w-5 h-5">
                    <Image src="/social-instagram.svg" alt="Instagram" fill className="object-contain" />
                  </div>
                </a>
                <a
                  href="https://twitter.com/Airtribe_live"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="X"
                  className="opacity-75 hover:opacity-100 transition-opacity"
                >
                  <div className="relative w-5 h-5">
                    <Image src="/social-x.svg" alt="X" fill className="object-contain" />
                  </div>
                </a>
              </div>

            </div>

            {/* Editorial Slogan */}
            <p className="font-editorial italic text-white text-[32px] sm:text-[38px] leading-[1.25] tracking-tight">
              Where builders are made.
            </p>
          </div>

          {/* Nav Right Columns (Programs, Resources, Company) */}
          <nav aria-label="Footer Navigation" className="flex-1 grid grid-cols-1 sm:grid-cols-3">
            
            {/* Column 1: Programs */}
            <div className="py-12 px-6 sm:px-8 border-b sm:border-b-0 sm:border-r border-[#232328] flex flex-col gap-6">
              <p className="text-zinc-400 text-[18px] sm:text-[20px] font-normal leading-none font-editorial">
                Programs
              </p>
              <div className="flex flex-col gap-3.5">
                <Link
                  href="/courses/product-management-launchpad"
                  className="text-zinc-400 hover:text-white text-[14px] font-medium transition-colors"
                >
                  AI-First product management
                </Link>
                <Link
                  href="/courses/backend-engineering-launchpad"
                  className="text-zinc-400 hover:text-white text-[14px] font-medium transition-colors"
                >
                  AI-First software engineering
                </Link>
                <Link
                  href="/courses/generative-ai-launchpad"
                  className="text-zinc-400 hover:text-white text-[14px] font-medium transition-colors"
                >
                  The GenAI launchpad
                </Link>
              </div>
            </div>

            {/* Column 2: Resources */}
            <div className="py-12 px-6 sm:px-8 border-b sm:border-b-0 sm:border-r border-[#232328] flex flex-col gap-6">
              <p className="text-zinc-400 text-[18px] sm:text-[20px] font-normal leading-none font-editorial">
                Resources
              </p>
              <div className="flex flex-col gap-3.5">
                <a
                  href="https://www.airtribe.live/jobs"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-zinc-400 hover:text-white text-[14px] font-medium transition-colors"
                >
                  Job board
                </a>
                <a
                  href="https://www.airtribe.live/resume/builder"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-zinc-400 hover:text-white text-[14px] font-medium transition-colors"
                >
                  Resume builder
                </a>
                <a
                  href="https://www.airtribe.live/resume/review"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-zinc-400 hover:text-white text-[14px] font-medium transition-colors"
                >
                  Free resume review
                </a>
                <a
                  href="https://www.airtribe.live/linkedin-review"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-zinc-400 hover:text-white text-[14px] font-medium transition-colors"
                >
                  LinkedIn profile review
                </a>
                <Link
                  href="/project-showcase"
                  className="text-zinc-400 hover:text-white text-[14px] font-medium transition-colors"
                >
                  Projects showcase
                </Link>
                <Link
                  href="/events"
                  className="text-zinc-400 hover:text-white text-[14px] font-medium transition-colors"
                >
                  Events
                </Link>
                <Link
                  href="/upskill-for-free"
                  className="text-zinc-400 hover:text-white text-[14px] font-medium transition-colors"
                >
                  Upskill for free
                </Link>
                <a
                  href="https://airtribe.substack.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-zinc-400 hover:text-white text-[14px] font-medium transition-colors"
                >
                  Newsletter
                </a>
                <a
                  href="https://www.airtribe.live/blog/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-zinc-400 hover:text-white text-[14px] font-medium transition-colors"
                >
                  Blog
                </a>
              </div>
            </div>

            {/* Column 3: Company */}
            <div className="py-12 px-6 sm:px-8 flex flex-col gap-6">
              <p className="text-zinc-400 text-[18px] sm:text-[20px] font-normal leading-none font-editorial">
                Company
              </p>
              <div className="flex flex-col gap-3.5">
                <Link
                  href="/reviews"
                  className="text-zinc-400 hover:text-white text-[14px] font-medium transition-colors"
                >
                  Reviews
                </Link>
                <a
                  href="https://lp.airtribe.live/community"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-zinc-400 hover:text-white text-[14px] font-medium transition-colors"
                >
                  Community
                </a>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSepnSomDp2GAccHeIxEuSpVDkAkY1qUCE-foiTfY-pPxEF5iA/viewform"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-zinc-400 hover:text-white text-[14px] font-medium transition-colors"
                >
                  Hire from us
                </a>
                <Link
                  href="/business"
                  className="text-zinc-400 hover:text-white text-[14px] font-medium transition-colors"
                >
                  Business
                </Link>
                <a
                  href="https://wellfound.com/company/airtribe"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-zinc-400 hover:text-white text-[14px] font-medium transition-colors"
                >
                  Careers at Airtribe
                </a>
                <Link
                  href="/about-us"
                  className="text-zinc-400 hover:text-white text-[14px] font-medium transition-colors"
                >
                  About us
                </Link>
                <Link
                  href="/contact-us"
                  className="text-zinc-400 hover:text-white text-[14px] font-medium transition-colors"
                >
                  Contact us
                </Link>
              </div>
            </div>

          </nav>

        </div>

        {/* Bottom Legal / Contact Bar */}
        <div className="border-t border-[#232328] px-6 sm:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] sm:text-[14px]">
          
          {/* Note: NO copyright mark per user instruction */}
          <div>
            <p className="text-zinc-500 font-medium">
              2026 Airtribe Private Limited
            </p>
          </div>

          {/* Legal Links & Contacts */}
          <div className="flex flex-wrap items-center justify-center gap-x-3.5 gap-y-1 text-zinc-400">
            <a
              href="https://www.airtribe.live/terms-conditions"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-white transition-colors"
            >
              Terms &amp; conditions
            </a>
            <span className="text-zinc-700">|</span>
            <a
              href="https://www.airtribe.live/privacy-policy"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-white transition-colors"
            >
              Privacy policy
            </a>
            <span className="text-zinc-700">|</span>
            <a
              href="https://www.airtribe.live/refund-policy"
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-white transition-colors"
            >
              Refund policy
            </a>
            <span className="text-zinc-700">|</span>
            <a
              href="mailto:support@airtribe.live"
              className="hover:text-white transition-colors"
            >
              support@airtribe.live
            </a>
            <span className="text-zinc-700">|</span>
            <a
              href="tel:+918031139097"
              className="hover:text-white transition-colors"
            >
              +91-8031139097
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};
