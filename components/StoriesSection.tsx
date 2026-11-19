'use client';

import React from 'react';
import Image from 'next/image';

const stories = [
  {
    name: 'Kanupriya Bhatt',
    before: 'Associate Product Manager',
    after: 'Senior Product Manager',
    company: 'Swiggy',
    hike: '115% Hike',
    image: '/video-kanupriya-bhatt.806d9d03.webp',
    quote: 'Airtribe completely reshaped how I structure PRDs and metrics. The direct teardowns with directors helped me clear the Swiggy interview seamlessly.',
  },
  {
    name: 'Chinmay Pathak',
    before: 'Software Engineer (2 YOE)',
    after: 'Lead Systems Architect',
    company: 'Razorpay',
    hike: '140% Hike',
    image: '/video-chinmay-pathak.68d360c0.webp',
    quote: 'The distributed systems teardown on Kafka and Redis gave me the exact architectural intuition needed to pass staff engineering rounds.',
  },
  {
    name: 'Debayan Mukherjee',
    before: 'Backend Developer',
    after: 'Staff AI Engineer',
    company: 'Global AI Lab',
    hike: '110% Hike',
    image: '/card-debayan-bg.7c8f6041.webp',
    quote: 'Going from standard CRUD backends to architecting multi-agent loops and production RAG pipelines was the highest leverage upskilling move.',
  },
  {
    name: 'Deeksha Aashri',
    before: 'Junior Designer',
    after: 'Product Designer',
    company: 'Tech9logy',
    hike: '95% Hike',
    image: '/deeksha-aashri.0bb58d60.webp',
    quote: 'The live studio critiques with design directors taught me how real design systems work at scale.',
  },
];

export const StoriesSection: React.FC = () => {
  return (
    <section className="w-full bg-black border-b border-[#232328] py-20 sm:py-28">
      <div className="max-w-[1440px] mx-auto border-x border-[#232328]">
        
        {/* Section Header */}
        <div className="text-center px-4 sm:px-8 mb-16 sm:mb-20">
          <h2 className="text-[40px] sm:text-[56px] lg:text-[64px] font-normal leading-[1.0] tracking-[-0.04em] text-white mb-3">
            Real stories from <span className="flow-lavender font-editorial italic">the tribe</span>
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base font-light">
            Career switches, promotions, and a new way of working
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-[#232328]">
          {stories.map((s, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 border-b lg:border-b-0 border-r border-[#232328] last:border-r-0 flex flex-col justify-between bg-black hover:bg-zinc-950/40 transition-colors"
            >
              <div>
                {/* Photo / Video Card */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900 border border-[#232328] mb-6">
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-black/80 border border-white/10 px-2 py-0.5 rounded text-[11px] font-mono text-emerald-400 font-bold">
                    {s.hike}
                  </div>
                </div>

                <h3 className="text-xl font-medium text-white mb-1">{s.name}</h3>
                <div className="text-xs text-zinc-400 mb-3 flex items-center gap-1.5">
                  <span>{s.before}</span>
                  <span className="text-zinc-600">&rarr;</span>
                  <span className="text-white font-medium">{s.after}</span>
                </div>

                <div className="text-xs text-zinc-500 font-mono mb-4">
                  Placed @{s.company}
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light italic">
                  &quot;{s.quote}&quot;
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
