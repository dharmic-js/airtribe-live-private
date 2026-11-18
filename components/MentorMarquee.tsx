'use client';

import React from 'react';
import Image from 'next/image';

const companies = [
  { name: 'Google', domain: 'google.com', logo: '/images/023_logo-atlassian.a3bf8b87.webp' },
  { name: 'Atlassian', domain: 'atlassian.com', logo: '/images/023_logo-atlassian.a3bf8b87.webp' },
  { name: 'Flipkart', domain: 'flipkart.com', logo: '/images/016_logo-flipkart.aa786343.webp' },
  { name: 'Groww', domain: 'groww.in', logo: '/images/003_groww-a.1adebd1b.svg' },
  { name: 'Adobe', domain: 'adobe.com', logo: '/images/012_adobe.bed3d518.svg' },
  { name: 'Paytm', domain: 'paytm.com', logo: '/images/018_paytm.83ecf65f.svg' },
  { name: 'Docker', domain: 'docker.com', logo: '/images/010_docker.0d7a93ba.webp' },
  { name: 'Uber', domain: 'uber.com' },
  { name: 'Microsoft', domain: 'microsoft.com' },
  { name: 'Amazon', domain: 'amazon.com' },
  { name: 'Razorpay', domain: 'razorpay.com' },
  { name: 'Swiggy', domain: 'swiggy.com' },
];

export const MentorMarquee: React.FC = () => {
  return (
    <div className="py-10 border-y border-white/5 bg-dark-900/50 backdrop-blur-md overflow-hidden relative">
      {/* Gradient fade on edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-dark-900 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-dark-900 to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold flex items-center justify-center gap-2">
          <span className="w-8 h-px bg-brand-500/50" />
          Learn directly from directors & staff architects at
          <span className="w-8 h-px bg-brand-500/50" />
        </p>
      </div>

      <div className="flex w-max animate-marquee space-x-12 items-center">
        {[...companies, ...companies].map((c, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-6 py-2.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-brand-500/30 hover:bg-white/[0.04] transition-all group shrink-0"
          >
            {c.logo ? (
              <div className="relative h-6 w-20 flex items-center justify-center filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                <Image
                  src={c.logo}
                  alt={c.name}
                  width={80}
                  height={24}
                  className="max-h-6 max-w-full object-contain"
                />
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-400 opacity-60 group-hover:opacity-100" />
                <span className="text-base font-bold text-gray-400 group-hover:text-white transition-colors tracking-tight">
                  {c.name}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

