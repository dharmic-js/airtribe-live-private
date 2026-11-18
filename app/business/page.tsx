'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Users, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Briefcase, 
  ShieldCheck, 
  Send 
} from 'lucide-react';

export default function BusinessPage() {
  const [submitted, setSubmitted] = useState(false);
  const [companyForm, setCompanyForm] = useState({
    companyName: '',
    contactName: '',
    workEmail: '',
    roles: 'Software Engineers',
    hiringTimeline: 'Immediate',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 text-brand-300 border border-brand-500/20 text-xs sm:text-sm font-semibold mb-6">
          <Building2 className="w-4 h-4 text-brand-400" />
          Airtribe for Business • Talent & Enterprise Solutions
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Hire Pre-Vetted, AI-Fluent Tech & Product Talent
        </h1>
        <p className="text-base sm:text-lg text-gray-300">
          Skip generic resume screening. Access top 5% engineers, product managers, and AI specialists who have built production software in rigorous live cohorts.
        </p>
      </div>

      {/* Main Grid: Benefits + Lead Form */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
        
        {/* Left: Value Proposition */}
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-white mb-3">
              Why 500+ Companies Hire from Airtribe
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Traditional candidates memorize LeetCode problems without understanding how distributed systems work. Airtribe graduates build real microservices, PRDs, and GenAI pipelines evaluated by senior industry directors.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-5 rounded-xl bg-dark-850 border border-white/5 flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-brand-500/10 text-brand-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Vetted Production Portfolios</h4>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  Every candidate showcases deployed capstone projects, clean GitHub repositories with tests, and well-structured PRDs.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-dark-850 border border-white/5 flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Day-One AI Fluency</h4>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  Candidates are trained in LLM orchestration, prompt engineering, vector search, and AI-accelerated workflows.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-dark-850 border border-white/5 flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400 shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Fast-Track Matchmaking</h4>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed">
                  Get curated candidate shortlists within 48 hours matched to your exact tech stack and seniority requirements.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Company Form */}
        <div className="glass-card p-8 rounded-3xl border border-white/10 relative">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white">Post Your Hiring Request</h3>
            <p className="text-xs text-gray-400 mt-1">
              Connect with our talent partnerships team to receive candidate profiles.
            </p>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">
                  Company Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Acme Tech Inc."
                  value={companyForm.companyName}
                  onChange={(e) => setCompanyForm({ ...companyForm, companyName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">
                  Your Name & Designation *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins (Head of Talent)"
                  value={companyForm.contactName}
                  onChange={(e) => setCompanyForm({ ...companyForm, contactName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="sarah@company.com"
                  value={companyForm.workEmail}
                  onChange={(e) => setCompanyForm({ ...companyForm, workEmail: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Roles Needed
                  </label>
                  <select
                    value={companyForm.roles}
                    onChange={(e) => setCompanyForm({ ...companyForm, roles: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-500"
                  >
                    <option value="Software Engineers">Software Engineers (Backend/Fullstack)</option>
                    <option value="GenAI Engineers">Generative AI / ML Engineers</option>
                    <option value="Product Managers">Product Managers (APM to Lead PM)</option>
                    <option value="Product Designers">UI/UX Product Designers</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Hiring Timeline
                  </label>
                  <select
                    value={companyForm.hiringTimeline}
                    onChange={(e) => setCompanyForm({ ...companyForm, hiringTimeline: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-500"
                  >
                    <option value="Immediate">Immediate (Within 15 days)</option>
                    <option value="1-2 months">Next 1 - 2 months</option>
                    <option value="Future pipeline">Building Talent Pipeline</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl font-bold text-white bg-brand-500 hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2 mt-4"
              >
                <Send className="w-4 h-4" />
                Submit Hiring Request
              </button>
            </form>
          ) : (
            <div className="py-12 text-center space-y-3">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-white">Thank you!</h4>
              <p className="text-xs text-gray-400 max-w-xs mx-auto">
                Our talent partnerships director will contact you at <span className="text-white">{companyForm.workEmail}</span> with shortlisted profiles within 24 hours.
              </p>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
