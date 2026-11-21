'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface PMStoryCard {
  id: string;
  type: 'quote' | 'hike' | 'video';
  name: string;
  role: string;
  avatar: string;
  quote?: string;
  fromRole?: string;
  toRole?: string;
  hike?: string;
  fromCompany?: string;
  fromCompanyLogo?: string;
  toCompany?: string;
  videoThumb?: string;
  videoTitle?: string;
}

const pmStoryCards: PMStoryCard[] = [
  // Card 1: Gowthaam Kumarasamy (Authentic from screenshot)
  {
    id: 'gowthaam',
    type: 'quote',
    name: 'Gowthaam Kumarasamy',
    role: 'APM @ Cyces',
    avatar: '/portraits/story-gowthaam-kumarasamy.png',
    quote: 'PM Launchpad helped start my journey in product. With no experience in PM, I gained a lot of valuable skills from Airtribe, which resulted in landing a PM role in a high-growth startup.',
  },

  // Card 2: Saransh Dimri (Authentic 100% hike transition from screenshot)
  {
    id: 'saransh',
    type: 'hike',
    name: 'Saransh Dimri',
    role: 'Product Manager @ Smart Codes',
    avatar: '/saransh-dimri.641f8beb.webp',
    fromRole: 'Automation Developer',
    toRole: 'PM',
    hike: '100% hike',
    fromCompany: 'CONGRUEX',
    fromCompanyLogo: '/congruex.576db91c.webp',
    toCompany: 'Smart Codes',
  },

  // Card 3: Suman Sahu (Authentic from screenshot)
  {
    id: 'suman',
    type: 'quote',
    name: 'Suman Sahu',
    role: 'APM @ Droom',
    avatar: '/portraits/story-suman-sahu.png',
    quote: 'The course paved the way, bridging the gap between my non-technical background and the dynamic realm of product management.',
  },

  // Card 4: Ritesh Deshpande (Authentic Video card from screenshot)
  {
    id: 'ritesh',
    type: 'video',
    name: 'Ritesh Deshpande',
    role: 'Associate Product Manager @ Juno',
    avatar: '/portraits/story-ritesh-deshpande.png',
    videoThumb: '/images/pm-story-video-ritesh-clean.png',
    videoTitle: 'I Finally Became a Product Manager Thanks to Airtribe',
  },

  // Card 5: Deeksha Sharma (Hike card)
  {
    id: 'deeksha',
    type: 'hike',
    name: 'Deeksha Sharma',
    role: 'PM @ Marmin Tech',
    avatar: '/portraits/story-deeksha-sharma.jpg',
    fromRole: 'Web Developer',
    toRole: 'PM',
    hike: '90% hike',
    fromCompany: 'Agency Dev',
    toCompany: 'Marmin Tech',
  },

  // Card 6: Anoop Pillai (Career Transformation)
  {
    id: 'anoop',
    type: 'quote',
    name: 'Anoop Pillai',
    role: 'PM @ Incubyte',
    avatar: '/portraits/journey-arvind-venkataraman.jpg',
    quote: 'After 7 years in traditional banking, transitioning into modern AI product management felt daunting. Airtribe\'s capstone and mentor guidance made the pivot seamless.',
  },

  // Card 7: Kanupriya Rawat (AI PM Value Card)
  {
    id: 'kanupriya',
    type: 'hike',
    name: 'Kanupriya Rawat',
    role: 'Senior Product Manager @ RelevantZ',
    avatar: '/portraits/story-kanupriya-rawat.jpg',
    fromRole: 'Senior Consultant',
    toRole: 'Lead AI PM',
    hike: '10x PM Craft',
    fromCompany: 'RelevantZ',
    toCompany: 'AI Products',
  },

  // Card 8: Yashwanth Reddy (Portfolio Transformation)
  {
    id: 'yashwanth',
    type: 'quote',
    name: 'Yashwanth Reddy',
    role: 'APM @ Leap Club',
    avatar: '/portraits/journey-yashwanth-reddy.jpg',
    quote: 'The AI prototyping and PRD teardown modules were eye-opening. Being able to ship working prototypes instead of just slides changed how interviewers looked at my portfolio.',
  },
];

const pmCareerOutcomes = [
  {
    person: 'Samuel',
    from: 'Key Account Manager',
    to: 'PM at Leadrat',
    detail: ', after a 3-year career gap',
  },
  {
    person: 'Saransh',
    from: 'Automation Developer',
    to: 'PM at Smart Codes',
    detail: ', with a 100% hike',
  },
  {
    person: 'Anoop',
    from: 'Senior Manager at Standard Chartered',
    to: 'PM at Incubyte',
    detail: '',
  },
  {
    person: 'Deeksha',
    from: 'Web Developer',
    to: 'PM at Marmin Tech',
    detail: ', with a 90% hike',
  },
  {
    person: 'Suman',
    from: 'Operations Analyst',
    to: 'APM at Droom',
    detail: ', after 4 months in Launchpad',
  },
  {
    person: 'Gowthaam',
    from: 'Fresher',
    to: 'APM at Cyces',
    detail: ', with no prior PM background',
  },
];

const pmCommunityLogos = [
  { name: 'Flipkart', src: '/flipkart.600cc75b.webp', width: 88, height: 28 },
  { name: 'PhonePe', src: '/phonepe.a21c03c3.webp', width: 78, height: 26 },
  { name: 'CRED', src: '/logos/cred.a4cd9d0e.svg', width: 72, height: 26 },
  { name: 'Zepto', src: '/zepto.a70f9f38.webp', width: 78, height: 24 },
  { name: 'Meesho', src: '/meesho.25371ed5.webp', width: 76, height: 26 },
  { name: 'Paytm', src: '/logos/paytm.83ecf65f.svg', width: 78, height: 22 },
  { name: 'Uber', src: '/logos/uber.48b48a45.svg', width: 72, height: 22 },
  { name: 'Adobe', src: '/logos/adobe.bed3d518.svg', width: 78, height: 26 },
  { name: 'Shopify', src: '/logos/shopify.d0cf7ff1.svg', width: 78, height: 26 },
  { name: 'Google', src: '/google.afd4bc44.webp', width: 76, height: 24 },
  { name: 'Microsoft', src: '/logos/microsoft.e3fe3bf3.svg', width: 82, height: 24 },
  { name: 'Razorpay', src: '/razorpay.18b0c32f.webp', width: 84, height: 22 },
  { name: 'OYO', src: '/oyo.bf15604e.webp', width: 68, height: 22 },
  { name: 'Rapido', src: '/rapido.01bff05a.svg', width: 74, height: 22 },
];

export function PMStoriesSection() {
  const [currentOutcome, setCurrentOutcome] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Rotate Career Outcomes slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentOutcome((prev) => (prev + 1) % pmCareerOutcomes.length);
        setIsFading(false);
      }, 350);
    }, 4200);

    return () => clearInterval(timer);
  }, []);

  const activeOutcome = pmCareerOutcomes[currentOutcome];

  return (
    <section className="w-full bg-black border-b border-[#232328] overflow-hidden py-20 sm:py-28 relative">
      <div className="max-w-[1440px] mx-auto border-x border-[#232328]">
        
        {/* Section Header */}
        <div className="text-center px-4 sm:px-8 mb-12 sm:mb-16">
          <h2 className="text-[36px] sm:text-[48px] md:text-[54px] font-editorial text-white font-normal leading-tight tracking-tight mb-3">
            Real stories from the tribe
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm font-light">
            Career switches, promotions, and a new way of working
          </p>
        </div>

        {/* 1. UPPER BELT: Moving from LEFT TO RIGHT with bigger cards */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_40px,black_calc(100%-40px),transparent)] mb-8 sm:mb-10">
          <div className="animate-belt-ltr flex items-stretch space-x-5 sm:space-x-6 w-max hover:[animation-play-state:paused] py-2">
            {[...pmStoryCards, ...pmStoryCards].map((card, idx) => (
              <div
                key={`${card.id}-${idx}`}
                className="w-[320px] sm:w-[360px] h-[340px] sm:h-[360px] bg-[#0c0c0f] border border-[#232328] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shrink-0 relative overflow-hidden select-none hover:border-zinc-500 transition-colors shadow-xl"
              >
                {/* Subtle Stippled Texture */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                {/* CARD CONTENT VARIANT 1: QUOTE CARD */}
                {card.type === 'quote' && (
                  <>
                    <p className="text-zinc-200 text-[17px] sm:text-[19px] leading-[1.38] font-normal tracking-tight relative z-10">
                      &ldquo;{card.quote}&rdquo;
                    </p>
                    <div className="flex items-center gap-3.5 pt-4 border-t border-[#232328]/80 relative z-10">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-zinc-700 bg-zinc-800">
                        <Image
                          src={card.avatar}
                          alt={card.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <div>
                        <h4 className="text-white text-sm font-semibold leading-tight">{card.name}</h4>
                        <p className="text-zinc-400 text-xs mt-0.5">{card.role}</p>
                      </div>
                    </div>
                  </>
                )}

                {/* CARD CONTENT VARIANT 2: HIKE & TRANSITION CARD */}
                {card.type === 'hike' && (
                  <>
                    <div className="relative z-10">
                      {/* Top Header Transition Pill */}
                      <div className="w-full bg-[#18181c] border border-white/10 rounded-lg px-3 py-1.5 flex items-center justify-between text-xs font-mono text-zinc-300 mb-4">
                        <span>{card.fromRole}</span>
                        <span className="text-zinc-500">⟶</span>
                        <span className="text-white font-semibold">{card.toRole}</span>
                      </div>

                      {/* Middle Big Bold Metric */}
                      <div className="py-2">
                        <span className="text-[44px] sm:text-[50px] font-normal leading-[1.0] text-white tracking-tight font-sans">
                          {card.hike}
                        </span>
                      </div>

                      {/* Company Transition Ribbon */}
                      <div className="bg-[#121216] border border-white/5 rounded-lg px-3 py-2 flex items-center justify-between mt-3">
                        <div className="flex items-center">
                          {card.fromCompanyLogo ? (
                            <Image
                              src={card.fromCompanyLogo}
                              alt={card.fromCompany || ''}
                              width={90}
                              height={18}
                              className="h-4 w-auto object-contain brightness-95"
                              unoptimized
                            />
                          ) : (
                            <span className="text-red-400 font-bold text-xs tracking-wider">
                              {card.fromCompany}
                            </span>
                          )}
                        </div>
                        <span className="text-zinc-500 text-xs font-bold">»</span>
                        <span className="text-white font-medium text-xs">{card.toCompany}</span>
                      </div>
                    </div>

                    {/* Author Bottom */}
                    <div className="flex items-center gap-3.5 pt-3 border-t border-[#232328]/80 relative z-10">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-zinc-700 bg-zinc-800">
                        <Image
                          src={card.avatar}
                          alt={card.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <div>
                        <h4 className="text-white text-sm font-semibold leading-tight">{card.name}</h4>
                        <p className="text-zinc-400 text-xs mt-0.5">{card.role}</p>
                      </div>
                    </div>
                  </>
                )}

                {/* CARD CONTENT VARIANT 3: VIDEO CARD */}
                {card.type === 'video' && (
                  <>
                    <div className="relative z-10">
                      {/* Video Thumbnail Box */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-tr from-purple-900/60 via-indigo-950/80 to-zinc-900 border border-[#232328] rounded-lg group/video cursor-pointer">
                        {card.videoThumb && (
                          <Image
                            src={card.videoThumb}
                            alt={card.videoTitle || ''}
                            fill
                            className="object-cover group-hover/video:scale-105 transition-transform duration-500"
                            unoptimized
                          />
                        )}
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
                          <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center group-hover/video:scale-110 group-hover/video:bg-white/40 transition-all shadow-lg">
                            <svg className="w-5 h-5 text-white ml-0.5 fill-current" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Author Bottom */}
                    <div className="flex items-center gap-3.5 pt-3 border-t border-[#232328]/80 relative z-10">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-zinc-700 bg-zinc-800">
                        <Image
                          src={card.avatar}
                          alt={card.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <div>
                        <h4 className="text-white text-sm font-semibold leading-tight">{card.name}</h4>
                        <p className="text-zinc-400 text-xs mt-0.5">{card.role}</p>
                      </div>
                    </div>
                  </>
                )}

              </div>
            ))}
          </div>
        </div>

        {/* 2. LOWER SECTION: Career Outcomes (Left) & Where our community works (Right) */}
        <div className="px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
            
            {/* LEFT BOX: Career outcomes */}
            <div className="lg:col-span-5 bg-[#0c0c0f] border border-[#232328] rounded-2xl p-6 sm:p-7 flex flex-col justify-between min-h-[145px] relative overflow-hidden group hover:border-zinc-600 transition-colors">
              {/* Background Accent */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: `url('/career-outcomes-bg.32d30265.webp')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />

              <div className="relative z-10">
                <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-mono font-medium block mb-2">
                  Career outcomes
                </span>
                <div
                  className={`text-zinc-300 text-sm sm:text-base font-normal leading-snug transition-all duration-300 ${
                    isFading ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0'
                  }`}
                >
                  <span className="text-white font-medium">{activeOutcome.person}</span> moved from{' '}
                  <span className="text-white font-semibold">{activeOutcome.from}</span> to{' '}
                  <span className="text-white font-semibold">{activeOutcome.to}</span>
                  {activeOutcome.detail}
                </div>
              </div>

              {/* Progress Indicator Dots */}
              <div className="flex items-center gap-1.5 mt-4 relative z-10">
                {pmCareerOutcomes.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1 rounded-full transition-all duration-300 ${
                      i === currentOutcome ? 'w-5 bg-white' : 'w-1.5 bg-zinc-700'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* RIGHT BOX: Where our community works with Belt moving RIGHT TO LEFT */}
            <div className="lg:col-span-7 bg-[#0c0c0f] border border-[#232328] rounded-2xl p-6 sm:p-7 flex flex-col justify-between min-h-[145px] relative overflow-hidden group hover:border-zinc-600 transition-colors">
              <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-mono font-medium block mb-2">
                Where our community works
              </span>

              {/* Animated Company Logos Belt (Moving from Right to Left) */}
              <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_25px,black_calc(100%-25px),transparent)] my-auto pt-2">
                <div className="animate-belt-rtl flex items-center space-x-7 sm:space-x-9 w-max hover:[animation-play-state:paused]">
                  {[...pmCommunityLogos, ...pmCommunityLogos].map((logo, idx) => (
                    <div
                      key={`${logo.name}-${idx}`}
                      className="shrink-0 flex items-center justify-center opacity-85 hover:opacity-100 transition-opacity"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        width={logo.width}
                        height={logo.height}
                        className="h-6 sm:h-7 w-auto object-contain brightness-95"
                        unoptimized
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
