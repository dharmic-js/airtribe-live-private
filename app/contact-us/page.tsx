'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle,
  MessageSquare
} from 'lucide-react';

const faqs = [
  {
    q: 'How are Airtribe cohorts structured?',
    a: 'Each cohort runs for 8 to 16 weeks with live weekend interactive classes, mid-week mentor office hours, small-group project builds, and 1:1 code/portfolio reviews. There are zero passive pre-recorded lecture dumps.',
  },
  {
    q: 'Who are the mentors and instructors?',
    a: 'Our instructors are active practitioners — Senior Staff Engineers, Engineering Directors, and VPs of Product at companies like Google, Uber, Atlassian, Swiggy, and Razorpay.',
  },
  {
    q: 'What is the weekly time commitment?',
    a: 'Expect to dedicate approximately 8-10 hours per week: 4-5 hours of live interactive sessions on weekends, and 3-5 hours on hands-on assignments and capstone development.',
  },
  {
    q: 'What if I miss a live session?',
    a: 'Every live session is recorded in HD and uploaded to your cohort dashboard within 4 hours, complete with slides, code repositories, and transcript notes. You can also ask questions in our 24/7 cohort Slack/Discord.',
  },
  {
    q: 'Do you offer job placement support?',
    a: 'Yes. Airtribe maintains a partner network of 500+ tech companies and startups. We provide 1:1 resume teardowns, mock interviews, compensation negotiation coaching, and direct warm referrals for top performers.',
  },
  {
    q: 'Are there EMI or scholarship options?',
    a: 'Yes, we offer flexible 0% interest EMI plans spanning 3, 6, 9, or 12 months, as well as merit-based fee waivers for exceptional builders and open-source contributors.',
  },
];

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Cohort Admissions Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-3 block">
          Get in Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Contact Us & Frequently Asked Questions
        </h1>
        <p className="text-base sm:text-lg text-gray-300">
          Have questions about our cohorts, curriculum, or enterprise hiring? Our admissions team is here to assist you.
        </p>
      </div>

      {/* Contact Grid: Form + Direct Contact Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-24">
        
        {/* Left: Contact Info */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-dark-850 border border-white/5">
            <div className="flex items-center gap-3 mb-2">
              <Mail className="w-5 h-5 text-brand-400" />
              <h3 className="font-bold text-white text-base">Admissions & Support</h3>
            </div>
            <p className="text-xs text-gray-400 mb-3">General inquiries, syllabus requests, and fee assistance:</p>
            <a href="mailto:support@airtribe.live" className="text-sm font-semibold text-brand-300 hover:text-white transition-colors">
              support@airtribe.live
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-dark-850 border border-white/5">
            <div className="flex items-center gap-3 mb-2">
              <Phone className="w-5 h-5 text-emerald-400" />
              <h3 className="font-bold text-white text-base">Direct Phone & WhatsApp</h3>
            </div>
            <p className="text-xs text-gray-400 mb-3">Mon-Sat from 10:00 AM to 8:00 PM IST:</p>
            <a href="tel:+918031139097" className="text-sm font-semibold text-emerald-400 hover:underline">
              +91-8031139097
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-dark-850 border border-white/5">
            <div className="flex items-center gap-3 mb-2">
              <MapPin className="w-5 h-5 text-purple-400" />
              <h3 className="font-bold text-white text-base">Bengaluru Headquarters</h3>
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Airtribe Edtech Inc.<br />
              100 Feet Road, Indiranagar,<br />
              Bengaluru, Karnataka 560038, India
            </p>
          </div>
        </div>

        {/* Right: Message Form */}
        <div className="lg:col-span-2 glass-card p-8 rounded-3xl border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-2">Send Us a Message</h2>
          <p className="text-xs sm:text-sm text-gray-400 mb-6">
            Fill in the details below and an admissions counselor will respond within 24 hours.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="rahul@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">
                  Subject
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white text-sm focus:outline-none focus:border-brand-500"
                >
                  <option value="Cohort Admissions Inquiry">Cohort Admissions Inquiry</option>
                  <option value="Curriculum / Syllabus Question">Curriculum / Syllabus Question</option>
                  <option value="Enterprise / Team Training">Enterprise / Team Training</option>
                  <option value="Hiring Talent from Airtribe">Hiring Talent from Airtribe</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us what you are looking to learn or any questions you have..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-dark-800 border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-brand-500"
                />
              </div>

              <button
                type="submit"
                className="py-3 px-8 rounded-xl font-bold text-white bg-brand-500 hover:bg-brand-600 transition-all shadow-lg shadow-brand-500/25 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          ) : (
            <div className="py-12 text-center space-y-3">
              <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white">Message Sent Successfully!</h3>
              <p className="text-xs text-gray-400 max-w-sm mx-auto">
                Thank you, {formData.name}. Our admissions counselor will reply to <span className="text-white">{formData.email}</span> shortly.
              </p>
            </div>
          )}
        </div>

      </div>

      {/* Comprehensive FAQ Section */}
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-400 mb-2 block">
            Common Inquiries
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-white/10 bg-dark-850 overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02]"
              >
                <span className="font-semibold text-white text-sm sm:text-base">
                  {faq.q}
                </span>
                {openFaq === idx ? (
                  <ChevronUp className="w-5 h-5 text-brand-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />
                )}
              </button>

              {openFaq === idx && (
                <div className="px-5 pb-5 pt-1 text-sm text-gray-400 leading-relaxed border-t border-white/5">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

