'use client';

import React, { useState } from 'react';
import { Plus, Minus, MessageCircle, PhoneCall } from 'lucide-react';
import { useApplyModal } from '@/components/ApplyModalContext';

interface FAQItem {
  q: string;
  a: string;
}

const generalFAQs: FAQItem[] = [
  {
    q: 'Is any prior programming experience required to enroll in this program?',
    a: 'Yes, prior experience with at least one programming language (such as Java, JavaScript/TypeScript, or Python) is required to participate in this program.',
  },
  {
    q: 'Do I need to know AI or ML before joining?',
    a: 'Not at all. This program is designed for engineers who are new to AI. You’ll start with the foundations of GenAI and learn how to build AI-native applications using tools like LangChain, Claude, and OpenAI — no prior AI/ML experience needed.',
  },
  {
    q: 'What if I’m already working as a developer — will this still help?',
    a: 'Absolutely. This program is designed to help working developers stay ahead by adopting AI-first practices and sharpening their backend and system design skills. Whether you want to transition into more senior roles or explore AI-native product engineering, this program will help you level up.',
  },
  {
    q: 'I have a full-time job. Will I get enough time to take this program?',
    a: 'Yes! This program is built keeping in mind the time constraints of full-time professionals. You will be committing 12–14 hours a week to this program.',
  },
  {
    q: 'Do I have to attend all of the live sessions in real-time?',
    a: 'We strongly recommend you make time for live sessions so you can ask questions directly and make the most out of it. But if you are unable to attend a live session due to unavoidable circumstances, you can always access the recording of the session that you missed.',
  },
  {
    q: 'How are the sessions conducted?',
    a: 'All program instruction will be online and the sessions will be conducted on Zoom with the help of the Airtribe platform. The community associated with the program will be managed on Slack. All you need is a good internet connection to attend the live sessions and other activities.',
  },
  {
    q: 'Why learn with a community for an online program?',
    a: 'Our best growth moments come from cohort environments where everyone shares the same ambitious goals. A strong peer community creates an environment where learning is more engaging, connections are more meaningful, and career opportunities naturally emerge.',
  },
  {
    q: 'Can I interact with mentors or instructors 1:1?',
    a: 'Yes, you’ll be able to interact with instructors during live sessions. You can also book 1:1 calls with mentors for project reviews and career guidance. In addition, we host group doubt-clearing sessions and ongoing discussions through our Slack channels.',
  },
  {
    q: 'What kind of projects will I be working on during the program?',
    a: 'You’ll work on multiple real-world systems simulating challenges in top tech companies — from building streaming conversation APIs with memory to distributed email queues with Kafka and high-concurrency festival flash-sale checkouts.',
  },
  {
    q: 'How deep does the AI part go — is it just tooling or model development too?',
    a: 'We focus on building production-ready AI-powered systems using existing LLMs and GenAI tooling. You’ll learn to design, integrate, and deploy AI-first features — not build models from scratch. The goal is to make you confident in working with AI as a core part of your engineering workflow.',
  },
  {
    q: 'What GenAI tools and technologies will I get to work with?',
    a: 'You’ll learn to work with cutting-edge tools like OpenAI, LangChain, Claude, Cursor, VectorDB, Ollama, and more, alongside modern backend tools like Java, Spring Boot, Node.js, Express, PostgreSQL, Redis, Docker, and AWS.',
  },
  {
    q: 'Will this program help me in landing a job?',
    a: 'Our main aim is to accelerate your career. We provide mock interviews, resume preparation, and system design defenses to enhance your readiness, plus profile optimization to make a lasting impression on hiring managers.',
  },
  {
    q: 'Is placement support provided after the program?',
    a: 'Yes, we provide dedicated career assistance including 1:1 mentorship, mock interviews, code reviews, and direct connections to hiring partners across top tier-1 tech companies.',
  },
  {
    q: 'Is there a certificate upon completion?',
    a: 'Yes! Upon successful completion of the coursework, projects, and assignments, you receive a verified Certificate of Completion with our Official GitHub Education Program Partner accreditation to showcase on LinkedIn and your resume.',
  },
  {
    q: 'How do I get this program reimbursed by my employer?',
    a: 'Many employers support professional development through learning stipends. We provide a detailed invoice upon enrollment and a certificate of completion at the end of the program to submit to your employer for reimbursement.',
  },
];

const paymentFAQs: FAQItem[] = [
  {
    q: 'Is this a paid program?',
    a: 'Yes, this is a premium cohort-based engineering program with live masterclasses, small cohorts, and 1:1 code reviews.',
  },
  {
    q: 'What are the payment options available?',
    a: 'We accept payments through various methods including credit and debit cards, UPI, net banking, and international credit cards via Razorpay.',
  },
  {
    q: 'Is there an EMI option available?',
    a: 'Yes, we offer 3-month, 6-month, 9-month, and 12-month zero-cost and low-cost credit card EMI options.',
  },
  {
    q: 'Do you offer scholarships to college students?',
    a: 'Yes! If you are a college student or early-career builder, mention that in your application form to be considered for our merit-based scholarships up to INR 15,000.',
  },
  {
    q: 'Can I defer my enrollment to a later cohort?',
    a: 'Yes, you can defer your enrollment to a future cohort if unexpected personal or work commitments arise. Reach out to our admissions team for the deferral process.',
  },
];

export function BELFAQSection() {
  const { openModal } = useApplyModal();
  const [activeTab, setActiveTab] = useState<'general' | 'payment'>('general');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const currentList = activeTab === 'general' ? generalFAQs : paymentFAQs;

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full bg-black py-20 sm:py-28 border-b border-[#232328]">
      <div className="max-w-[1440px] mx-auto border-x border-[#232328] px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#232328] bg-black">

          {/* Left Column: Heading & Contact Card */}
          <div className="lg:col-span-5 p-8 sm:p-12 border-b lg:border-b-0 lg:border-r border-[#232328] flex flex-col justify-between">
            <div>
              <h2 className="text-[38px] sm:text-[48px] font-editorial italic font-normal text-white leading-tight mb-8">
                Frequently asked questions
              </h2>
            </div>

            {/* Callback Card */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800/80 space-y-4">
              <h3 className="text-lg font-semibold text-white">
                Still got doubts about this program?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed">
                Book a call with an engineering counsellor. Bring your questions about the curriculum, schedule, or payment options.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => openModal('AI-First Software Engineering - Callback')}
                  className="px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white text-xs sm:text-sm font-medium border border-zinc-700 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-purple-400" />
                  <span>Talk to our counsellor</span>
                </button>
                <a
                  href="https://wa.me/917204235438?text=Hey!%20I%20have%20questions%20about%20the%20AI-First%20Software%20Engineering%20program."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Tab Selector & Accordion */}
          <div className="lg:col-span-7 flex flex-col">

            {/* Tab Header */}
            <div className="flex items-center gap-6 px-8 pt-8 pb-4 border-b border-[#232328] bg-black">
              <button
                onClick={() => {
                  setActiveTab('general');
                  setOpenIndex(0);
                }}
                className={`text-lg sm:text-xl font-editorial transition-colors cursor-pointer flex items-center gap-2 ${
                  activeTab === 'general' ? 'text-white font-normal' : 'text-zinc-600 hover:text-zinc-400'
                }`}
              >
                {activeTab === 'general' && <span className="w-1 h-5 bg-purple-500 rounded-full" />}
                <span>General</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab('payment');
                  setOpenIndex(0);
                }}
                className={`text-lg sm:text-xl font-editorial transition-colors cursor-pointer flex items-center gap-2 ${
                  activeTab === 'payment' ? 'text-white font-normal' : 'text-zinc-600 hover:text-zinc-400'
                }`}
              >
                {activeTab === 'payment' && <span className="w-1 h-5 bg-purple-500 rounded-full" />}
                <span>Payment</span>
              </button>
            </div>

            {/* Accordion List */}
            <div className="divide-y divide-[#232328]">
              {currentList.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div key={idx} className="transition-colors">
                    <button
                      onClick={() => toggleFAQ(idx)}
                      className="w-full p-6 sm:p-8 text-left flex items-start justify-between gap-4 hover:bg-white/[0.02] cursor-pointer transition-colors"
                    >
                      <span className="text-sm sm:text-base font-medium text-zinc-200 leading-snug">
                        {item.q}
                      </span>
                      <span className="p-1 rounded bg-zinc-900 border border-zinc-800 text-zinc-400 shrink-0 mt-0.5">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 text-xs sm:text-sm text-zinc-400 font-light leading-relaxed animate-fadeIn">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
