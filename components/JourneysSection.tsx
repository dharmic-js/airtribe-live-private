'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  prevLogo: string;
  prevAlt: string;
  nextLogo: string;
  nextAlt: string;
  quote: string;
  badge?: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Yashwanth sai',
    role: 'Tech Lead @Kognitive Networks',
    avatar: '/images/1770563545368_58aa1b77ae.png',
    prevLogo: '/images/ibm_mono_784a4c9801.svg',
    prevAlt: 'IBM',
    nextLogo: '/images/kognitive_networks_mono_73bad205d9.svg',
    nextAlt: 'Kognitive Networks',
    quote: 'I had a really good experience with Airtribe’s AI-First Software Engineer program. The program helped me improve my practical knowledge in Backend APIs, DSA, Databases, System Design, and AI/LLM technologies. The hands-on sessions and mentorship were especially helpful.',
  },
  {
    name: 'Shubham Rawat',
    role: 'SDE 1 @Swageazy',
    avatar: '/images/1739899700485_8996d28dd5.jpeg',
    prevLogo: '/images/blackbox_mono_9d22bb7bc1.svg',
    prevAlt: 'Black Box',
    nextLogo: '/images/swageazy_mono_c06c08488b.svg',
    nextAlt: 'Swageazy',
    quote: 'This program played a major role in my career growth. It strengthened my fundamentals in backend development and system design, and helped me better understand real-world production systems. The structured, hands-on learning boosted my confidence as an engineer.',
  },
  {
    name: 'Ritik Kumar',
    role: 'Junior Software Developer @ Jahavir Fingrowth',
    avatar: '/images/1737283065036_ba9382529d.jpeg',
    prevLogo: '/images/onclick_innovations_mono_91154c51c7.svg',
    prevAlt: 'Onclick Innovations',
    nextLogo: '/images/jhaveri_mono_90e05f4125.svg',
    nextAlt: 'Jhaveri Finserve',
    quote: 'The Airtribe Backend Development course has been an excellent learning experience for me. The instructors are highly knowledgeable and explain every concept with great clarity. I especially found the DSA sessions extremely helpful.',
  },
  {
    name: 'Kunal Ranjan',
    role: 'Senior Technical Lead @HCL Technologies',
    avatar: '/images/1688154626975_ff3c929a78.jpeg',
    prevLogo: '/images/cgi_mono_944c0fb788.svg',
    prevAlt: 'CGI',
    nextLogo: '/images/hcltech_mono_2e3f8613ff.svg',
    nextAlt: 'HCLTech',
    quote: 'Joining Airtribe’s Backend Development course was a turning point for me. The structured curriculum combined theory with real-world projects, while the mentors provided clear guidance and feedback. What made the journey even more meaningful was the community.',
  },
  {
    name: 'Anshuman Tiwari',
    role: 'SDE II @Hero Vired',
    avatar: '/images/1701599876811_cb22833c7b.jpg',
    prevLogo: '/images/dozee_mono_d6f93d0ceb.svg',
    prevAlt: 'Dozee',
    nextLogo: '/images/hero_vired_mono_b4a1edc2d3.svg',
    nextAlt: 'Hero Vired',
    quote: 'The practical approach, system architecture teardowns, and high-quality peer reviews gave me the edge I needed to transition and handle large-scale distributed systems with ease.',
  },
  {
    name: 'Kartik Katiyar',
    role: 'SDE-1 @ Dentira',
    avatar: '/images/1739899700485_8996d28dd5.jpeg',
    prevLogo: '/images/newton_school_mono_58548afb18.svg',
    prevAlt: 'Newton School',
    nextLogo: '/images/dentira_mono_7478618fca.svg',
    nextAlt: 'Dentira',
    quote: 'Airtribe accelerated my journey exponentially. The continuous feedback loops on code and real mock interviews simulate top tech companies like nothing else.',
  },
  {
    name: 'Divyasri Manda',
    role: 'SDE II (Frontend) @ Levich',
    avatar: '/images/1770563545368_58aa1b77ae.png',
    prevLogo: '/images/publicis_sapient_mono_b4f22fe8a7.svg',
    prevAlt: 'Publicis Sapient',
    nextLogo: '/images/levich_mono_47733f462a.svg',
    nextAlt: 'LeViCh',
    quote: 'Loved every single week of learning. The mentors are deeply invested in your progress and the community of fellow engineers stays connected forever.',
  },
  {
    name: 'Ranadheer',
    role: 'Backend Engineer @ JPMorgan Chase',
    avatar: '/images/1737283065036_ba9382529d.jpeg',
    prevLogo: '/images/microsoft_mono_a95566b9f5.svg',
    prevAlt: 'Microsoft',
    nextLogo: '/images/jpmorganchase_mono_93bf95023d.svg',
    nextAlt: 'JPMorgan Chase',
    quote: 'The Backend Engineering Launchpad helped me land a backend role at JPMorgan Chase. With a strong focus on Java, DSA, and real-world projects, the course built my confidence for technical interviews.',
  },
  {
    name: 'Aditya Deshmukh',
    role: 'SDE @ Leadrat',
    avatar: '/images/1751171466769_03bd175ee3.png',
    prevLogo: '/images/cognizant_mono_e1ff23e298.svg',
    prevAlt: 'Cognizant',
    nextLogo: '/images/leadrat_mono_0591f7a857.svg',
    nextAlt: 'Leadrat',
    quote: 'I would like to heartily thank the mentors, instructors and program managers for helping me out in my fundamentals and core concepts. The mentor connect anytime from the dashboard was a game changer.',
  },
  {
    name: 'Yash Tomar',
    role: 'SDE 2 @ Gritworks',
    avatar: '/images/1707079278597_dfc55ff8d0.jpeg',
    prevLogo: '/images/qolaba_mono_f91f62a310.svg',
    prevAlt: 'Qolaba',
    nextLogo: '/images/gritworks_mono_db805b4f04.svg',
    nextAlt: 'Gritworks',
    quote: 'Within just two weeks of joining Airtribe’s Software Engineer AI First course, I received an offer from an AI startup. The curriculum is cutting-edge and prepares you for what companies actually need today.',
  },
  {
    name: 'Swastik Sahoo',
    role: 'Senior Member Technical @ D.E. Shaw',
    avatar: '/images/1701599876811_cb22833c7b.jpg',
    prevLogo: '/images/deshaw_mono_b6029780b7.svg',
    prevAlt: 'D. E. Shaw',
    nextLogo: '/images/microsoft_mono_a95566b9f5.svg',
    nextAlt: 'Microsoft',
    quote: 'I was part of their early cohort and got a great job offer. The instructors and mentors are from top product companies and their approach of teaching with live system architecture teardowns is unparalleled.',
  },
  {
    name: 'Kanupriya Bhatt',
    role: 'Growth Product Manager @ Matiks',
    avatar: '/images/Frame_2147236758_compressed_db730eff64.png',
    prevLogo: '/images/endevis_mono_120bfeb334.svg',
    prevAlt: 'Endevis',
    nextLogo: '/images/matiks_mono_aae347cb1c.svg',
    nextAlt: 'Matiks',
    quote: 'Airtribe gave me structured exposure to product thinking through sessions, projects, and hands-on learning. The clarity around PM responsibilities and strong placement support helped me transition from market research.',
  },
];

export default function JourneysSection() {
  const [filter, setFilter] = useState<'all' | 'engineering' | 'product'>('all');

  return (
    <section className="bg-black w-full border-t border-[#232328]">
      <div className="max-w-[1440px] mx-auto border-x border-[#232328] py-20 sm:py-28 px-4 sm:px-8 relative overflow-hidden flex flex-col items-center">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-[36px] md:text-[52px] font-bold tracking-tight text-white leading-tight">
            From the tribe
            <span className="block font-serif italic font-normal flow-lavender mt-1">
              journeys worth reading
            </span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base mt-3 max-w-lg mx-auto">
            Real stories of engineers and product leaders who took charge of their growth.
          </p>
        </div>

        {/* 3-Column Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#0c0c0e] border border-[#232328] rounded-2xl p-6 flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 relative group"
            >
              {/* Corner crosshairs on hover */}
              <div className="absolute top-2 right-2 text-zinc-600 font-mono text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                +0{idx + 1}
              </div>

              <div>
                {/* User profile */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border border-[#232328] bg-zinc-900 shrink-0">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div>
                    <h3 className="text-white text-lg font-bold leading-snug">{t.name}</h3>
                    <p className="text-zinc-400 text-xs mt-0.5 leading-tight">{t.role}</p>
                  </div>
                </div>

                {/* Transition Bar */}
                <div className="flex items-center h-12 w-full border border-[#232328] bg-[#141418] rounded-lg mb-5 px-3">
                  <div className="flex-1 flex items-center justify-center">
                    {t.prevLogo ? (
                      <div className="relative w-20 h-6">
                        <Image
                          src={t.prevLogo}
                          alt={t.prevAlt}
                          fill
                          className="object-contain filter grayscale opacity-70 group-hover:opacity-100 transition-opacity"
                          unoptimized
                        />
                      </div>
                    ) : (
                      <span className="text-zinc-500 text-xs font-mono">{t.prevAlt}</span>
                    )}
                  </div>
                  <div className="w-8 flex items-center justify-center shrink-0">
                    <Image
                      src="/images/switch.png"
                      alt="transition"
                      width={18}
                      height={18}
                      className="opacity-60"
                      unoptimized
                    />
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    {t.nextLogo ? (
                      <div className="relative w-20 h-6">
                        <Image
                          src={t.nextLogo}
                          alt={t.nextAlt}
                          fill
                          className="object-contain filter grayscale opacity-90 group-hover:opacity-100 transition-opacity"
                          unoptimized
                        />
                      </div>
                    ) : (
                      <span className="text-white text-xs font-mono font-medium">{t.nextAlt}</span>
                    )}
                  </div>
                </div>

                {/* Quote */}
                <p className="text-zinc-300 text-sm leading-relaxed mb-4">
                  “{t.quote}”
                </p>
              </div>

              {/* Bottom tag */}
              <div className="pt-4 border-t border-[#1c1c22] flex items-center justify-between text-xs text-zinc-500 font-mono">
                <span>Verified Alumni</span>
                <span className="text-[#a78bfa]">Airtribe Graduate</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
