'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useApplyModal } from './ApplyModalContext';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Sparkles, 
  Code2, 
  Cpu, 
  Briefcase, 
  Layers, 
  BookOpen, 
  Award, 
  Building2, 
  Users 
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const { openModal } = useApplyModal();
  const [scrolled, setScrolled] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-dark-950/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/40 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-8 w-32 flex items-center">
              <Image
                src="/logo.svg"
                alt="Airtribe"
                width={140}
                height={32}
                className="h-7 w-auto object-contain transition-transform group-hover:scale-[1.02]"
                priority
              />
            </div>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold bg-brand-500/10 text-brand-400 border border-brand-500/20">
              LIVE COHORTS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            
            {/* Courses Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setCoursesOpen(true)}
              onMouseLeave={() => setCoursesOpen(false)}
            >
              <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors">
                <span>Cohorts</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${coursesOpen ? 'rotate-180 text-brand-400' : ''}`} />
              </button>

              {coursesOpen && (
                <div className="absolute top-full left-0 w-80 p-3 mt-1 bg-dark-900/95 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150">
                  <div className="text-xs font-semibold uppercase tracking-wider text-gray-500 px-3 py-1.5">
                    Flagship Programs
                  </div>
                  
                  <Link 
                    href="/courses/generative-ai-launchpad"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-brand-300 flex items-center gap-1.5">
                        GenAI Launchpad
                        <span className="text-[10px] bg-red-500/20 text-red-300 px-1.5 py-0.2 rounded font-medium">HOT</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">LLMs, LangChain, RAG & Agents</p>
                    </div>
                  </Link>

                  <Link 
                    href="/courses/backend-engineering-launchpad"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-brand-300">
                        AI-First Software Engg
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">Distributed backends & microservices</p>
                    </div>
                  </Link>

                  <Link 
                    href="/courses/product-management-launchpad"
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-brand-300">
                        AI-First Product Mgmt
                      </div>
                      <p className="text-xs text-gray-400 mt-0.5">Product strategy, AI PRDs & metrics</p>
                    </div>
                  </Link>

                  <div className="pt-2 border-t border-white/5 mt-1">
                    <Link 
                      href="/courses"
                      className="block text-center text-xs font-medium text-brand-400 hover:text-brand-300 py-1"
                    >
                      View All 8+ Cohorts & Tracks &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Free Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors">
                <span>Free Resources</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${resourcesOpen ? 'rotate-180 text-brand-400' : ''}`} />
              </button>

              {resourcesOpen && (
                <div className="absolute top-full left-0 w-72 p-3 mt-1 bg-dark-900/95 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link 
                    href="/upskill-for-free"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 text-sm text-gray-200 hover:text-white transition-colors"
                  >
                    <BookOpen className="w-4 h-4 text-brand-400" />
                    <span>DSA 450 Sheet & AI Prompts</span>
                  </Link>
                  <Link 
                    href="/project-showcase"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 text-sm text-gray-200 hover:text-white transition-colors"
                  >
                    <Layers className="w-4 h-4 text-emerald-400" />
                    <span>Cohort Projects Showcase</span>
                  </Link>
                  <Link 
                    href="/events"
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-white/5 text-sm text-gray-200 hover:text-white transition-colors"
                  >
                    <Users className="w-4 h-4 text-purple-400" />
                    <span>Live Masterclasses & AMAs</span>
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/reviews" 
              className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              Wall of Love
            </Link>

            <Link 
              href="/business" 
              className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              For Business
            </Link>

            <Link 
              href="/about-us" 
              className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            >
              About
            </Link>
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link 
              href="/contact-us"
              className="px-3.5 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
            
            <button
              onClick={() => openModal()}
              className="px-5 py-2 rounded-xl text-sm font-semibold text-white bg-brand-500 hover:bg-brand-600 transition-all duration-200 shadow-md shadow-brand-500/25 active:scale-95"
            >
              Apply for Cohort
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => openModal()}
              className="px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-brand-500"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-900 border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <div className="font-semibold text-xs text-gray-400 uppercase tracking-wider px-2">
            Cohorts
          </div>
          <Link 
            href="/courses/generative-ai-launchpad" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm rounded-lg hover:bg-white/5 text-gray-200"
          >
            ⚡ GenAI Launchpad
          </Link>
          <Link 
            href="/courses/backend-engineering-launchpad" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm rounded-lg hover:bg-white/5 text-gray-200"
          >
            💻 AI-First Software Engineering
          </Link>
          <Link 
            href="/courses/product-management-launchpad" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm rounded-lg hover:bg-white/5 text-gray-200"
          >
            📊 AI-First Product Management
          </Link>
          <Link 
            href="/courses" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm rounded-lg text-brand-400 font-medium"
          >
            View All Courses &rarr;
          </Link>

          <div className="border-t border-white/10 pt-3 space-y-1">
            <Link 
              href="/reviews" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm rounded-lg hover:bg-white/5 text-gray-200"
            >
              Wall of Love (Reviews)
            </Link>
            <Link 
              href="/business" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm rounded-lg hover:bg-white/5 text-gray-200"
            >
              For Business (Hire Talent)
            </Link>
            <Link 
              href="/upskill-for-free" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm rounded-lg hover:bg-white/5 text-gray-200"
            >
              Free Resources & DSA
            </Link>
            <Link 
              href="/project-showcase" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm rounded-lg hover:bg-white/5 text-gray-200"
            >
              Project Showcase
            </Link>
            <Link 
              href="/events" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm rounded-lg hover:bg-white/5 text-gray-200"
            >
              Live Events & AMAs
            </Link>
            <Link 
              href="/about-us" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm rounded-lg hover:bg-white/5 text-gray-200"
            >
              About Us
            </Link>
            <Link 
              href="/contact-us" 
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm rounded-lg hover:bg-white/5 text-gray-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
