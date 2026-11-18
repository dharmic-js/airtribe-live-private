'use client';

import React, { useState } from 'react';
import { useApplyModal } from './ApplyModalContext';
import { X, CheckCircle, Sparkles, Send } from 'lucide-react';

export const ApplyModal: React.FC = () => {
  const { isOpen, selectedCourse, closeModal } = useApplyModal();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: selectedCourse,
    experience: '1-3 years',
    goal: 'Career Transition',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 3s on success
      setTimeout(() => {
        setSubmitted(false);
        closeModal();
      }, 3000);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div 
        className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-dark-900 border border-white/10 shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Background glow */}
        <div className="absolute -top-24 -right-24 w-60 h-60 bg-brand-500/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-60 h-60 bg-electric/20 rounded-full blur-3xl pointer-events-none" />

        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-500/20 text-brand-300 border border-brand-500/30">
                <Sparkles className="w-3.5 h-3.5 text-brand-400" />
                Next Cohort Admissions Open
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight mb-1">
              Apply for Airtribe Cohort
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              Join live cohort sessions led by senior directors and tech architects.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">
                  Selected Track / Cohort
                </label>
                <select
                  value={formData.course || selectedCourse}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-500 transition-colors"
                >
                  <option value="Generative AI Launchpad">The GenAI Launchpad (8 Weeks)</option>
                  <option value="AI-First Software Engineering">AI-First Software Engineering (16 Weeks)</option>
                  <option value="AI-First Product Management">AI-First Product Management (12 Weeks)</option>
                  <option value="System Design & Cloud Architecture">System Design & Cloud Architecture (10 Weeks)</option>
                  <option value="UI/UX Product Design Masterclass">UI/UX Product Design Masterclass (8 Weeks)</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Rivera"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Experience Level
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-500 transition-colors"
                  >
                    <option value="College / Fresher">College / Recent Grad</option>
                    <option value="1-3 years">1 - 3 years experience</option>
                    <option value="3-6 years">3 - 6 years experience</option>
                    <option value="6+ years">6+ years (Senior / Lead)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">
                  Primary Goal for this Cohort
                </label>
                <select
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-500 transition-colors"
                >
                  <option value="Career Transition">Switching into AI / Tech Leadership</option>
                  <option value="Promotion & Hike">Upskilling for a Promotion & Salary Hike</option>
                  <option value="Hands-on Projects">Building Production-Grade Portfolio Projects</option>
                  <option value="Networking">Connecting with Senior Tech Mentors & Peers</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-white bg-brand-500 hover:bg-brand-600 transition-all duration-200 shadow-lg shadow-brand-500/25 active:scale-[0.98]"
                >
                  <Send className="w-4 h-4" />
                  Submit Application (Free Evaluation)
                </button>
              </div>

              <p className="text-center text-xs text-gray-500">
                🔒 We respect your privacy. No spam. A cohort advisor will reach out within 24 hours.
              </p>
            </form>
          </div>
        ) : (
          <div className="py-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-white">Application Received!</h4>
            <p className="text-gray-300 max-w-sm mx-auto text-sm">
              Thank you, <span className="text-brand-300 font-semibold">{formData.name}</span>. Your application for <span className="text-white font-medium">{formData.course || selectedCourse}</span> has been logged. Our admissions director will review your background and send your cohort prep kit.
            </p>
            <div className="p-3 bg-dark-800 rounded-xl border border-white/5 text-xs text-gray-400">
              Check your inbox at <span className="text-gray-200">{formData.email}</span> for syllabus details.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
