'use client';

import React from 'react';
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
}

// Column 1: Staggered reviews with regionally consistent, authentic Indian names
const col1Reviews: Testimonial[] = [
  {
    name: 'Kunal Tiwari',
    role: 'Senior Technical Lead @HCL Technologies',
    avatar: '/portraits/journey-kunal-tiwari.jpg',
    prevLogo: '/images/cgi_mono_944c0fb788.svg',
    prevAlt: 'CGI',
    nextLogo: '/images/hcltech_mono_2e3f8613ff.svg',
    nextAlt: 'HCLTech',
    quote: 'Joining Airtribe’s Backend Development course was a turning point for me. The structured curriculum combined theory with real-world projects, while the mentors provided clear guidance and feedback. What made the journey even more meaningful was the community learning alongside peers who were equally driven kept me inspired every step of the way. Today, I feel confident in building scalable backend systems and applying industry best practices.',
  },
  {
    name: 'Yashwanth Reddy',
    role: 'Tech Lead @Kognitive Networks',
    avatar: '/portraits/journey-yashwanth-reddy.jpg',
    prevLogo: '/images/ibm_mono_784a4c9801.svg',
    prevAlt: 'IBM',
    nextLogo: '/images/kognitive_networks_mono_73bad205d9.svg',
    nextAlt: 'Kognitive Networks',
    quote: 'I had a really good experience with Airtribe’s AI-First Software Engineer program. The program helped me improve my practical knowledge in Backend APIs, DSA, Databases, System Design, and AI/LLM technologies. The hands-on sessions and mentorship were especially helpful in understanding concepts better and applying them to real-world problems.',
  },
  {
    name: 'Ritik Deshmukh',
    role: 'Junior Software Developer @ Jhaveri Finserve',
    avatar: '/portraits/journey-ritik-deshmukh.jpg',
    prevLogo: '/images/onclick_innovations_mono_91154c51c7.svg',
    prevAlt: 'Onclick Innovations',
    nextLogo: '/images/jhaveri_mono_90e05f4125.svg',
    nextAlt: 'Jhaveri Finserve',
    quote: 'The Airtribe Backend Development course has been an excellent learning experience. The instructors explain every complex architectural concept with extraordinary clarity.',
  },
  {
    name: 'Divyasri Katiyar',
    role: 'SDE II (Frontend) @ LeViCh',
    avatar: '/portraits/journey-divyasri-katiyar.jpg',
    prevLogo: '/images/publicis_sapient_mono_b4f22fe8a7.svg',
    prevAlt: 'Publicis Sapient',
    nextLogo: '/images/levich_mono_47733f462a.svg',
    nextAlt: 'LeViCh',
    quote: 'Loved every single week of learning. The mentors are deeply invested in your progress and the community of fellow engineers stays connected forever.',
  },
];

// Column 2: Staggered reviews with regionally consistent, authentic Indian names
const col2Reviews: Testimonial[] = [
  {
    name: 'Ranadheer Sahoo',
    role: 'Backend Engineer @ JPMorgan Chase',
    avatar: '/portraits/journey-ranadheer-sahoo.jpg',
    prevLogo: '/images/microsoft_mono_a95566b9f5.svg',
    prevAlt: 'Microsoft',
    nextLogo: '/images/jpmorganchase_mono_93bf95023d.svg',
    nextAlt: 'JPMorgan Chase',
    quote: 'The Backend Engineering Launchpad helped me land a backend role at JPMorgan Chase. With a strong focus on Java, DSA, and real-world projects, the course built my confidence for technical interviews. The mentorship from top engineers and a motivating peer community made all the difference.',
  },
  {
    name: 'Anshuman Rawat',
    role: 'SDE II @Hero Vired',
    avatar: '/portraits/journey-anshuman-rawat.jpg',
    prevLogo: '/images/dozee_mono_d6f93d0ceb.svg',
    prevAlt: 'Dozee',
    nextLogo: '/images/hero_vired_mono_b4a1edc2d3.svg',
    nextAlt: 'Hero Vired',
    quote: 'I recently completed the Backend Engineering course at Airtribe, and it was a game-changer. The curriculum is deeply technical and focuses on high-level system design and scalability that you just don’t find in standard tutorials. Thanks to the preparation and the network here, I successfully landed a new role!',
  },
  {
    name: 'Shubham Ranjan',
    role: 'SDE 1 @Swageazy',
    avatar: '/portraits/journey-shubham-ranjan.jpg',
    prevLogo: '/images/blackbox_mono_9d22bb7bc1.svg',
    prevAlt: 'Black Box',
    nextLogo: '/images/swageazy_mono_c06c08488b.svg',
    nextAlt: 'Swageazy',
    quote: 'This program played a major role in my career growth. It strengthened my fundamentals in backend development and system design, and helped me better understand real-world production systems.',
  },
  {
    name: 'Arvind Venkataraman',
    role: 'Senior Backend Architect @ Leadrat',
    avatar: '/portraits/journey-arvind-venkataraman.jpg',
    prevLogo: '/images/cognizant_mono_e1ff23e298.svg',
    prevAlt: 'Cognizant',
    nextLogo: '/images/leadrat_mono_0591f7a857.svg',
    nextAlt: 'Leadrat',
    quote: 'The mentor connect anytime from the dashboard was a game changer. The curriculum covers real production edge cases that gave me an unfair advantage in interviews.',
  },
];

// Column 3: Staggered reviews with regionally consistent, authentic Indian names
const col3Reviews: Testimonial[] = [
  {
    name: 'Pranav Kulkarni',
    role: 'SDE @ Leadrat',
    avatar: '/portraits/journey-pranav-kulkarni.jpg',
    prevLogo: '/images/cognizant_mono_e1ff23e298.svg',
    prevAlt: 'Cognizant',
    nextLogo: '/images/leadrat_mono_0591f7a857.svg',
    nextAlt: 'Leadrat',
    quote: 'Hi Airtribe team I would like to heartily thank the mentors, instructors and program managers for helping me out in my fundamentals and core concepts at first I was under-confident whether I will be able to cope-up with the curriculum specially DSA and System Design but the trainers were extremely knowledgeable and very helpful. Whenever you need support, someone is always there.',
  },
  {
    name: 'Ananya Sen',
    role: 'AI Systems Engineer @ Gritworks',
    avatar: '/portraits/journey-ananya-sen.jpg',
    prevLogo: '/images/qolaba_mono_f91f62a310.svg',
    prevAlt: 'Qolaba',
    nextLogo: '/images/gritworks_mono_db805b4f04.svg',
    nextAlt: 'Gritworks',
    quote: 'I recently joined Airtribe’s Software Engineer AI First course, and I’m truly grateful for the experience so far. Within just two weeks, I received an offer from an AI startup, something I honestly didn’t expect this soon. One thing I deeply appreciate is that Airtribe keeps the curriculum fresh and aligned with what hiring teams look for.',
  },
  {
    name: 'Karthik Sundaram',
    role: 'SDE-1 @ Dentira',
    avatar: '/portraits/journey-karthik-sundaram.jpg',
    prevLogo: '/images/newton_school_mono_58548afb18.svg',
    prevAlt: 'Newton School',
    nextLogo: '/images/dentira_mono_7478618fca.svg',
    nextAlt: 'Dentira',
    quote: 'Airtribe accelerated my journey exponentially. The continuous feedback loops on code and real mock interviews simulate top tech companies like nothing else.',
  },
  {
    name: 'Tanvi Agarwal',
    role: 'Growth Product Manager @ Matiks',
    avatar: '/portraits/journey-tanvi-agarwal.jpg',
    prevLogo: '/images/endevis_mono_120bfeb334.svg',
    prevAlt: 'Endevis',
    nextLogo: '/images/matiks_mono_aae347cb1c.svg',
    nextAlt: 'Matiks',
    quote: 'Airtribe gave me structured exposure to product thinking through sessions, projects, and hands-on learning. The clarity around PM responsibilities helped me transition seamlessly.',
  },
];

export default function JourneysSection() {
  return (
    <section className="bg-black w-full border-b border-[#232328] overflow-hidden">
      <div className="max-w-[1440px] mx-auto border-x border-[#232328] py-20 sm:py-28 px-4 sm:px-8 relative flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-14 sm:mb-18">
          <h2 className="text-[40px] sm:text-[56px] lg:text-[64px] font-normal leading-[1.0] tracking-[-0.04em] text-white">
            From the tribe <br />
            <span className="flow-lavender font-editorial italic tracking-normal">
              journeys worth reading
            </span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base mt-4 max-w-lg mx-auto font-light">
            Real stories of engineers and product leaders who took charge of their growth.
          </p>
        </div>

        {/* Non-Parallel Vertical Belt Viewport (Bottom-to-Top Infinite Motion) */}
        <div className="relative w-full max-w-[1200px] h-[850px] sm:h-[950px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_70px,black_calc(100%-70px),transparent)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full h-full">

            {/* Column 1: Fast Vertical Belt (Bottom to Top) */}
            <div className="overflow-hidden relative h-full">
              <div className="animate-vertical-belt-fast flex flex-col space-y-6 pause-on-hover">
                {[...col1Reviews, ...col1Reviews].map((t, idx) => (
                  <ReviewCard key={idx} testimonial={t} />
                ))}
              </div>
            </div>

            {/* Column 2: Medium Vertical Belt (Staggered Bottom to Top) */}
            <div className="overflow-hidden relative h-full hidden md:block">
              <div className="animate-vertical-belt-medium flex flex-col space-y-6 pause-on-hover pt-12">
                {[...col2Reviews, ...col2Reviews].map((t, idx) => (
                  <ReviewCard key={idx} testimonial={t} />
                ))}
              </div>
            </div>

            {/* Column 3: Slow Vertical Belt (Staggered Bottom to Top) */}
            <div className="overflow-hidden relative h-full hidden lg:block">
              <div className="animate-vertical-belt-slow flex flex-col space-y-6 pause-on-hover pt-24">
                {[...col3Reviews, ...col3Reviews].map((t, idx) => (
                  <ReviewCard key={idx} testimonial={t} />
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

function ReviewCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-[#0b0b0e] border border-[#232328] p-6 sm:p-7 flex flex-col justify-between hover:border-zinc-500 transition-colors select-none relative group">
      <div>
        {/* User profile with AI portrait avatar */}
        <div className="flex items-center gap-4 mb-5">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#232328] bg-zinc-900 shrink-0">
            <Image
              src={testimonial.avatar}
              alt={testimonial.name}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div>
            <h3 className="text-white text-base sm:text-lg font-bold leading-tight">
              {testimonial.name}
            </h3>
            <p className="text-zinc-400 text-xs mt-0.5 leading-snug">
              {testimonial.role}
            </p>
          </div>
        </div>

        {/* Transition Bar */}
        <div className="flex items-center h-11 w-full border border-[#232328] bg-[#121216] mb-5 px-3">
          <div className="flex-1 flex items-center justify-center">
            {testimonial.prevLogo ? (
              <div className="relative w-16 h-5">
                <Image
                  src={testimonial.prevLogo}
                  alt={testimonial.prevAlt}
                  fill
                  className="object-contain filter grayscale opacity-75 group-hover:opacity-100 transition-opacity"
                  unoptimized
                />
              </div>
            ) : (
              <span className="text-zinc-500 text-xs font-mono">{testimonial.prevAlt}</span>
            )}
          </div>
          <div className="w-8 flex items-center justify-center shrink-0">
            <span className="text-zinc-500 text-sm font-bold">&raquo;</span>
          </div>
          <div className="flex-1 flex items-center justify-center">
            {testimonial.nextLogo ? (
              <div className="relative w-16 h-5">
                <Image
                  src={testimonial.nextLogo}
                  alt={testimonial.nextAlt}
                  fill
                  className="object-contain filter grayscale opacity-90 group-hover:opacity-100 transition-opacity"
                  unoptimized
                />
              </div>
            ) : (
              <span className="text-white text-xs font-mono font-medium">{testimonial.nextAlt}</span>
            )}
          </div>
        </div>

        {/* Quote */}
        <p className="text-zinc-300 text-xs sm:text-sm leading-relaxed">
          {testimonial.quote}
        </p>
      </div>

      <div className="pt-4 mt-5 border-t border-[#1c1c22] flex items-center justify-between text-[11px] text-zinc-500 font-mono">
        <span>Verified Alumni</span>
        <span className="text-[#a78bfa]">Airtribe Graduate</span>
      </div>
    </div>
  );
}
