'use client';

import React from 'react';
import Image from 'next/image';

interface CertificateSectionProps {
  certificateImage?: string;
  courseTitle?: string;
}

export function CertificateSection({
  certificateImage = '/images/certificate/certificate-pml.webp',
  courseTitle = 'AI-First Product Management'
}: CertificateSectionProps = {}) {
  return (
    <section className="bg-black text-white py-24 sm:py-32 relative overflow-hidden border-t border-[#232328]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-editorial text-[34px] sm:text-[48px] text-white font-normal leading-tight tracking-tight">
            A certificate you&apos;ll actually want to share
          </h2>
        </div>

        {/* Framed Certificate Canvas (Desktop) */}
        <div className="hidden md:block relative h-[520px] lg:h-[620px] w-full overflow-hidden rounded-2xl border border-[#232328] bg-black shadow-2xl">
          {/* 1. Background Cutting Mat Grid */}
          <div className="pointer-events-none absolute inset-0">
            <Image
              src="/images/certificate/cert-grid.webp"
              alt=""
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          {/* 2. Left Foreground: Laptop with GitHub sticker on cutting mat */}
          <div className="pointer-events-none absolute bottom-0 left-0 w-[42%] lg:w-[38%] h-full max-h-[500px]">
            <Image
              src="/images/certificate/cert-laptop.webp"
              alt="MacBook on cutting mat"
              fill
              className="object-contain object-left-bottom"
              unoptimized
            />
          </div>

          {/* 3. Right Foreground: Phone tilted */}
          <div className="pointer-events-none absolute top-[15%] right-0 w-[22%] lg:w-[20%] h-[70%]">
            <Image
              src="/images/certificate/cert-phone.webp"
              alt="Mobile device"
              fill
              className="object-contain object-right"
              unoptimized
            />
          </div>

          {/* 4. Center Main: Certificate of Completion */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[72%] max-w-[580px] lg:max-w-[640px] z-10 shadow-2xl rounded-lg overflow-hidden border border-white/10 group hover:scale-[1.01] transition-transform duration-300">
            <Image
              src={certificateImage}
              alt={`Airtribe Certificate of Completion — ${courseTitle}`}
              width={1371}
              height={970}
              className="w-full h-auto object-contain"
              unoptimized
              priority
            />
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden relative min-h-[460px] w-full overflow-hidden rounded-xl border border-[#232328] bg-black p-4 flex flex-col items-center justify-center">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <Image
              src="/images/certificate/cert-grid.webp"
              alt=""
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="relative z-10 w-full max-w-[340px] shadow-2xl rounded-lg overflow-hidden border border-white/10">
            <Image
              src={certificateImage}
              alt={`Airtribe Certificate of Completion — ${courseTitle}`}
              width={1371}
              height={970}
              className="w-full h-auto object-contain"
              unoptimized
            />
          </div>
        </div>

      </div>
    </section>
  );
}
