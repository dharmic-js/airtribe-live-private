'use client';

import React, { useState } from 'react';
import { useApplyModal } from './ApplyModalContext';
import { MessageCircle, Plus, Minus } from 'lucide-react';

interface FAQItem {
  id: string;
  category: 'General' | 'Payment';
  question: string;
  answerHtml: string;
}

const faqs: FAQItem[] = [
  // --- GENERAL FAQS ---
  {
    id: 'gen-1',
    category: 'General',
    question: 'Why does this program emphasise learning with a community?',
    answerHtml: `<p class="mb-3">Haven't all our schools and colleges been a community? Our best friends, closest mentors, and biggest growth moments often come from the schools and colleges we attended. We all start with the same purpose (a degree), in the same group (a cohort), and move forward together.</p><p class="mb-3">Online cohort-based programs <strong>mirror this experience</strong>—they bring together a group of <strong>like-minded professionals</strong>, creating an environment where <strong>learning is more engaging, connections are more meaningful, and opportunities naturally emerge</strong>.</p><p>A strong community makes the journey <strong>more fun, more impactful, and sometimes even life-changing</strong>.</p>`,
  },
  {
    id: 'gen-2',
    category: 'General',
    question: 'Will this program help me in landing a PM job?',
    answerHtml: `<p class="mb-3">Our goal is to help you develop <strong>strong product thinking and real-world skills</strong> needed for a PM role. While we don’t guarantee jobs, we provide <strong>comprehensive career support</strong>, including <strong>mock interviews, resume reviews, and mentorship</strong> to improve your chances.</p><p>You'll also build a <strong>portfolio of hands-on projects</strong>, making you stand out to potential employers.</p>`,
  },
  {
    id: 'gen-3',
    category: 'General',
    question: 'How does this program prepare me for AI-powered product management?',
    answerHtml: `<p class="mb-3">AI is transforming product management, and this program ensures you're <strong>AI-ready from day one</strong>. You'll learn <strong>how to leverage AI tools for user research, product ideation, prioritization, data analytics, and experimentation</strong>—skills that are becoming essential for modern PMs.</p><p class="mb-3">Through <strong>hands-on projects, industry use cases, and expert-led sessions</strong>, you’ll gain practical experience in using <strong>AI-driven insights to build, launch, and scale products</strong> effectively.</p><p>By the end of the program, you'll not only understand <strong>AI’s role in product management</strong> but also know <strong>how to integrate AI into your daily workflows to make smarter, faster product decisions</strong>.</p>`,
  },
  {
    id: 'gen-4',
    category: 'General',
    question: 'How do I get this program reimbursed by my employer?',
    answerHtml: `<p class="mb-3">Many employers support professional development through learning reimbursements. We provide a <strong>detailed invoice</strong> upon enrollment and a <strong>certificate of completion</strong> at the end of the program. You can submit these to your employer for reimbursement as part of their learning and development policy.</p><p>If your company requires additional documentation or has specific approval processes, we’re happy to assist.</p>`,
  },
  {
    id: 'gen-5',
    category: 'General',
    question: 'What AI tools and software will I learn and get access in this program?',
    answerHtml: `<p class="mb-3">You’ll get hands-on experience with your ₹50,000+ stack of industry-leading AI tools and software.</p><p class="mb-3">The same category of tools used by modern product teams to build, automate and scale AI products.</p><p class="mb-2 font-medium text-white">Here’s what you’ll work with:</p><ul class="list-disc pl-5 space-y-1 text-zinc-300 mb-3"><li>Replit (3 months)</li><li>n8n (6 months)</li><li>Claude Pro / ChatGPT Plus - 1 month</li><li>Lyzr (12 months)</li><li>Wispr Flow (3 months)</li><li>Make (6 months)</li></ul><p>By the end of the program, you won’t just be familiar with these tools - you’ll have built, shipped and automated real AI products using your ₹50K+ AI toolkit included with your course enrollment.</p>`,
  },
  {
    id: 'gen-6',
    category: 'General',
    question: 'I am from a non-tech background. Can I still become a Product Manager?',
    answerHtml: `<p class="mb-3">Yes! Many successful Product Managers come from non-tech backgrounds. While coding isn’t required, having a basic understanding of technology helps in collaborating with engineers and making informed decisions.</p><p>This program includes a dedicated <strong>Tech 101 & System Design module</strong>, where you'll learn the fundamentals of <strong>APIs, databases, system architecture, and AI-driven workflows</strong>—ensuring you're well-equipped for a PM role, regardless of your background.</p>`,
  },
  {
    id: 'gen-7',
    category: 'General',
    question: 'Is having an MBA necessary to break into Product Management?',
    answerHtml: `<p class="mb-3">No, an MBA is <strong>not required</strong> to become a Product Manager. While an MBA can provide a strong foundation in business and strategy, <strong>many successful PMs transition into the role without one</strong>. In fact, product management is <strong>rarely taught formally in business schools</strong>.</p><p>This program is designed to <strong>equip you with real-world product skills</strong>, mentorship, and hands-on experience—helping you break into PM without needing an MBA.</p>`,
  },
  {
    id: 'gen-8',
    category: 'General',
    question: 'I am a student, will this program help me in cracking a PM role?',
    answerHtml: `<p class="mb-3">Yes! If you actively participate in the sessions and complete all assignments, you'll build the <strong>skills and portfolio needed to stand out to recruiters</strong>.</p><p>By the end of the program, you’ll have a <strong>strong product portfolio</strong> showcasing real-world projects—giving you an edge when applying for <strong>APM (Associate Product Manager) roles</strong> and entry-level PM positions.</p>`,
  },
  {
    id: 'gen-9',
    category: 'General',
    question: 'I have a full-time job. Will I get enough time to take this program?',
    answerHtml: `<p>Yes! This program is designed for <strong>working professionals</strong> and can be managed alongside a full-time job. You’ll need to <strong>commit around 10-12 hours per week</strong>, with live sessions scheduled at convenient times.</p>`,
  },
  {
    id: 'gen-10',
    category: 'General',
    question: 'Do I have to attend all of the live sessions in real-time?',
    answerHtml: `<p>We highly recommend attending live sessions to <strong>interact with instructors, ask questions, and engage with peers</strong>. However, if you miss a session, you’ll have <strong>access to recordings</strong> so you can catch up at your convenience.</p>`,
  },
  {
    id: 'gen-11',
    category: 'General',
    question: 'How are the sessions conducted?',
    answerHtml: `<p class="mb-3">All sessions are <strong>100% online</strong> and conducted live via <strong>Zoom</strong> through the Airtribe platform. You’ll also be part of an <strong>exclusive Slack community</strong> for discussions, networking, and support.</p><p>All you need is a <strong>good internet connection</strong> to join the live sessions and fully engage in the program.</p>`,
  },

  // --- PAYMENT FAQS ---
  {
    id: 'pay-1',
    category: 'Payment',
    question: 'Is this a paid program?',
    answerHtml: `<p>Yes. Once your application is accepted, you will need to pay the program fee.</p>`,
  },
  {
    id: 'pay-2',
    category: 'Payment',
    question: 'What are the payment options available?',
    answerHtml: `<p>We accept payments through various methods, including credit and debit cards, UPI, e-wallets and net banking.</p>`,
  },
  {
    id: 'pay-3',
    category: 'Payment',
    question: 'Is there an EMI option available?',
    answerHtml: `<p>Yes, we offer 3, 6, 9 and 12 months no-cost EMI options through our finance partners and credit cards.</p>`,
  },
  {
    id: 'pay-4',
    category: 'Payment',
    question: 'Do you offer scholarships to college students?',
    answerHtml: `<p class="mb-3">Yes.</p><p>If you are a college student, please mention that in the application form. You will get an exclusive scholarship up to INR 10,000 based on your application.</p>`,
  },
  {
    id: 'pay-5',
    category: 'Payment',
    question: 'Can I defer my enrollment to a later cohort?',
    answerHtml: `<p>Yes, you can defer your enrollment to a future cohort by paying a small deferral fee. Please contact our support team for details.</p>`,
  },
];

export function FAQSection() {
  const [activeTab, setActiveTab] = useState<'General' | 'Payment'>('General');
  const [openId, setOpenId] = useState<string | null>(null);
  const { openModal } = useApplyModal();

  const filteredFaqs = faqs.filter((faq) => faq.category === activeTab);

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-black text-white py-20 sm:py-28 relative border-t border-[#232328]">
      {/* Constrained layout strictly within the two guide lines */}
      <div className="max-w-[1440px] mx-auto border-x border-[#232328] relative px-4 sm:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px] border border-[#232328]">
          
          {/* Left Column: Heading and Pinned Counsellor Doubt Card */}
          <div className="lg:col-span-4 p-8 sm:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#232328]">
            <div>
              <h2 className="font-editorial text-[38px] sm:text-[48px] text-white font-normal leading-[1.08] tracking-tight">
                Frequently asked questions
              </h2>
            </div>

            {/* Bottom Doubts Card */}
            <div className="mt-12 lg:mt-auto pt-8 border-t border-[#232328]">
              <h3 className="text-white text-sm sm:text-base font-medium mb-2">
                Still got doubts about this program?
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                Book a call with a counsellor. Bring your questions about the curriculum, schedule or payment.
              </p>
              
              <div className="flex items-center gap-3">
                <button
                  onClick={() => openModal('AI-First Product Management')}
                  className="flex-1 text-center border border-white/20 text-white text-xs sm:text-sm px-4 py-2.5 rounded-sm hover:border-white hover:bg-white/5 transition-all cursor-pointer"
                >
                  Talk to our counsellor
                </button>
                <a
                  href="https://wa.me/918073574581?text=Hi%2C%20I%20have%20doubts%20about%20the%20AI-First%20Product%20Management%20program"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white/20 p-2.5 rounded-sm text-white hover:border-[#25D366] hover:text-[#25D366] hover:bg-[#25D366]/10 transition-all flex items-center justify-center shrink-0"
                  aria-label="Chat on WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Tab Selector and Accordion List */}
          <div className="lg:col-span-8 flex flex-col">
            
            {/* Tab Selector Header */}
            <div className="flex items-center gap-6 px-8 sm:px-12 py-7 border-b border-[#232328]">
              <button
                onClick={() => {
                  setActiveTab('General');
                  setOpenId(null);
                }}
                className={`text-sm sm:text-base font-medium transition-colors flex items-center gap-2 cursor-pointer ${
                  activeTab === 'General'
                    ? 'text-white'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {activeTab === 'General' && <span className="text-white font-light">|</span>}
                <span>General</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab('Payment');
                  setOpenId(null);
                }}
                className={`text-sm sm:text-base font-medium transition-colors flex items-center gap-2 cursor-pointer ${
                  activeTab === 'Payment'
                    ? 'text-white'
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {activeTab === 'Payment' && <span className="text-white font-light">|</span>}
                <span>Payment</span>
              </button>
            </div>

            {/* Accordion Questions List */}
            <div className="divide-y divide-[#232328]">
              {filteredFaqs.map((faq) => {
                const isOpen = openId === faq.id;
                return (
                  <div key={faq.id} className="transition-colors hover:bg-zinc-950/40">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full px-8 sm:px-12 py-6 text-left flex items-start justify-between gap-6 cursor-pointer group"
                      aria-expanded={isOpen}
                    >
                      <span className="font-editorial text-[20px] sm:text-[22px] font-normal text-zinc-200 group-hover:text-white transition-colors leading-snug">
                        {faq.question}
                      </span>
                      <span className="shrink-0 mt-1 text-zinc-400 group-hover:text-white transition-colors">
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-8 sm:px-12 pb-7 text-zinc-300 text-xs sm:text-sm leading-relaxed animate-fadeIn">
                        <div
                          dangerouslySetInnerHTML={{ __html: faq.answerHtml }}
                          className="prose prose-invert max-w-none text-zinc-300 text-xs sm:text-sm leading-relaxed"
                        />
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
