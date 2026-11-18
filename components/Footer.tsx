import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-950 border-t border-white/10 text-gray-400 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
      <div className="absolute -top-32 left-1/3 w-96 h-96 bg-brand-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.svg"
                alt="Airtribe"
                width={140}
                height={32}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              Airtribe is a 360° cohort-based learning community that empowers builders to master AI-first product management, engineering, and next-gen tech systems.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <a href="mailto:support@airtribe.live" className="hover:text-white transition-colors">
                  support@airtribe.live
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <a href="tel:+918031139097" className="hover:text-white transition-colors">
                  +91-8031139097
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0" />
                <span>Indiranagar, Bengaluru, Karnataka, India</span>
              </div>
            </div>

            {/* Social Icons (SVGs) */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://linkedin.com/company/airtribe" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-dark-800 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-500/20 hover:border-brand-500/30 transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="https://youtube.com/@airtribe" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-dark-800 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-500/20 hover:border-red-500/30 transition-all"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a 
                href="https://twitter.com/airtribelive" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-dark-800 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-sky-500/20 hover:border-sky-500/30 transition-all"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com/airtribe.live" 
                target="_blank" 
                rel="noreferrer"
                className="w-9 h-9 rounded-lg bg-dark-800 border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-pink-500/20 hover:border-pink-500/30 transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Cohorts & Programs */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Flagship Cohorts
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/courses/generative-ai-launchpad" className="hover:text-brand-300 transition-colors flex items-center gap-1 group">
                  <span>GenAI Launchpad</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/courses/backend-engineering-launchpad" className="hover:text-brand-300 transition-colors flex items-center gap-1 group">
                  <span>AI-First Software Engg</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/courses/product-management-launchpad" className="hover:text-brand-300 transition-colors flex items-center gap-1 group">
                  <span>AI-First Product Mgmt</span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-brand-300 transition-colors">
                  System Design & Scale
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-brand-300 transition-colors">
                  Full Stack Engineering
                </Link>
              </li>
              <li>
                <Link href="/courses" className="hover:text-brand-300 transition-colors">
                  UI/UX Product Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Free Upskilling Tools */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Free Resources
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/upskill-for-free" className="hover:text-brand-300 transition-colors">
                  DSA 450 Sheet
                </Link>
              </li>
              <li>
                <Link href="/upskill-for-free" className="hover:text-brand-300 transition-colors">
                  AI Practice Sandbox
                </Link>
              </li>
              <li>
                <Link href="/upskill-for-free" className="hover:text-brand-300 transition-colors">
                  Resume Builder & Review
                </Link>
              </li>
              <li>
                <Link href="/project-showcase" className="hover:text-brand-300 transition-colors">
                  Alumni Capstone Projects
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-brand-300 transition-colors">
                  Live Masterclasses
                </Link>
              </li>
              <li>
                <a href="https://airtribe.substack.com" target="_blank" rel="noreferrer" className="hover:text-brand-300 transition-colors">
                  Builder Newsletter
                </a>
              </li>
            </ul>
          </div>

          {/* Company & Opportunities */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about-us" className="hover:text-brand-300 transition-colors">
                  About Us & Team
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="hover:text-brand-300 transition-colors">
                  Wall of Love (Reviews)
                </Link>
              </li>
              <li>
                <Link href="/business" className="hover:text-brand-300 transition-colors">
                  For Business (Hire Talent)
                </Link>
              </li>
              <li>
                <a href="https://wellfound.com/company/airtribe" target="_blank" rel="noreferrer" className="hover:text-brand-300 transition-colors flex items-center gap-1">
                  <span>Careers</span>
                  <span className="text-[10px] bg-brand-500/20 text-brand-300 px-1.5 py-0.5 rounded">HIRING</span>
                </a>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-brand-300 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            &copy; {new Date().getFullYear()} Airtribe Edtech Inc. All rights reserved. Private sandbox preview.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/contact-us" className="hover:text-gray-300 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact-us" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact-us" className="hover:text-gray-300 transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
