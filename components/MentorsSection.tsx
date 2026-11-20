'use client';

import React from 'react';
import Image from 'next/image';

interface Mentor {
  firstName: string;
  lastName: string;
  role: string;
  company: string;
  photo: string;
  companyLogo: string;
}

// Mixed surnames and distinct ethnicity-matched AI portraits
const mentorsList: Mentor[] = [
  {
    firstName: 'Kumar',
    lastName: 'George',
    role: 'Product manager',
    company: 'Meta',
    photo: '/portraits/mentor-kumar-george.jpg',
    companyLogo: '/logos/meta.da990ff0.svg',
  },
  {
    firstName: 'Ben',
    lastName: 'Jain',
    role: 'Staff designer',
    company: 'Shopify',
    photo: '/portraits/mentor-ben-jain.jpg',
    companyLogo: '/logos/shopify.d0cf7ff1.svg',
  },
  {
    firstName: 'Prasun',
    lastName: 'Tak',
    role: 'Sr. director of product',
    company: 'Razorpay',
    photo: '/portraits/mentor-prasun-tak.jpg',
    companyLogo: '/logos/cred.a4cd9d0e.svg',
  },
  {
    firstName: 'Abhimanyu',
    lastName: 'Utsav',
    role: 'SDE-III',
    company: 'Microsoft',
    photo: '/portraits/mentor-abhimanyu-utsav.jpg',
    companyLogo: '/logos/microsoft.e3fe3bf3.svg',
  },
  {
    firstName: 'Pawan',
    lastName: 'Deshmukh',
    role: 'Staff software engineer',
    company: 'Uber',
    photo: '/portraits/mentor-pawan-deshmukh.jpg',
    companyLogo: '/logos/uber.48b48a45.svg',
  },
  {
    firstName: 'Abhishek',
    lastName: 'Rawat',
    role: 'Principal product manager',
    company: 'Apple',
    photo: '/portraits/mentor-abhishek-rawat.jpg',
    companyLogo: '/logos/apple.61f872c0.svg',
  },
  {
    firstName: 'Nagappan',
    lastName: 'Tiwari',
    role: 'AVP of product',
    company: 'Paytm',
    photo: '/portraits/mentor-nagappan-tiwari.jpg',
    companyLogo: '/logos/paytm.83ecf65f.svg',
  },
  {
    firstName: 'Rishabh',
    lastName: 'Tomar',
    role: 'Head of Engineering',
    company: 'Groww',
    photo: '/portraits/mentor-rishabh-tomar.jpg',
    companyLogo: '/logos/groww-a.1adebd1b.svg',
  },
];

export const MentorsSection: React.FC = () => {
  return (
    <section className="w-full bg-black border-b border-[#232328] overflow-hidden">
      <div className="max-w-[1440px] mx-auto border-x border-[#232328] py-20 sm:py-28">
        
        {/* Section Header */}
        <div className="text-center px-4 sm:px-8 mb-16 sm:mb-20">
          <h2 className="text-[40px] sm:text-[56px] lg:text-[64px] font-normal leading-[1.04] tracking-[-0.04em] text-white">
            People you’d normally <br />
            never get to{' '}
            <span className="flow-lavender font-editorial italic tracking-normal">
              ask
            </span>
          </h2>
        </div>

        {/* Singular Looping Belt Track */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_60px,black_calc(100%-60px),transparent)]">
          <div className="animate-belt-rtl flex items-center space-x-6 w-max pause-on-hover py-4">
            {[...mentorsList, ...mentorsList].map((m, idx) => (
              <div
                key={idx}
                className="w-[285px] sm:w-[320px] h-[450px] sm:h-[480px] bg-[#0c0c0f] border border-[#232328] p-6 flex flex-col justify-between shrink-0 hover:border-zinc-500 transition-colors relative group overflow-hidden select-none"
              >
                {/* Subtle dither dot pattern on background */}
                <div
                  className="absolute inset-0 opacity-[0.06] pointer-events-none"
                  style={{
                    backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                    backgroundSize: '12px 12px',
                  }}
                />

                {/* Top: Name & LinkedIn */}
                <div className="relative z-10 flex items-start justify-between w-full">
                  <div className="font-editorial text-[26px] sm:text-[30px] leading-[1.08] text-white">
                    <div>{m.firstName}</div>
                    <div className="italic text-zinc-300">{m.lastName}</div>
                  </div>
                  
                  {/* LinkedIn Icon */}
                  <div className="text-zinc-500 group-hover:text-zinc-300 transition-colors pt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z" />
                    </svg>
                  </div>
                </div>

                {/* Center: AI Studio Portrait Photo */}
                <div className="relative z-10 w-full h-[250px] sm:h-[270px] overflow-hidden bg-black border-y border-[#232328]">
                  <Image
                    src={m.photo}
                    alt={`${m.firstName} ${m.lastName}`}
                    fill
                    className="object-cover object-top grayscale contrast-115 group-hover:scale-105 transition-transform duration-500"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Bottom: Role & Company Logo */}
                <div className="relative z-10 flex items-center justify-between w-full pt-3">
                  <span className="text-zinc-400 text-xs sm:text-[14px] font-medium max-w-[150px] leading-snug">
                    {m.role}
                  </span>
                  <div className="shrink-0 flex items-center">
                    {m.companyLogo && (
                      <img
                        src={m.companyLogo}
                        alt={m.company}
                        className="h-5 max-w-[75px] object-contain opacity-80 group-hover:opacity-100 transition-opacity filter grayscale group-hover:grayscale-0"
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
