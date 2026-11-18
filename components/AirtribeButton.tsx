'use client';

import React from 'react';
import Link from 'next/link';

interface AirtribeButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const AirtribeButton: React.FC<AirtribeButtonProps> = ({
  text,
  href,
  onClick,
  className = '',
}) => {
  const content = (
    <div className={`group relative block cursor-pointer h-11 sm:h-12 w-36 sm:w-40 shrink-0 border border-white/20 p-0.5 select-none ${className}`}>
      {/* 4 Corner Crosshair Ticks */}
      <span aria-hidden="true" className="absolute -left-px -top-px h-px w-1.5 bg-white pointer-events-none" />
      <span aria-hidden="true" className="absolute -left-px -top-px h-1.5 w-px bg-white pointer-events-none" />
      <span aria-hidden="true" className="absolute -right-px -top-px h-px w-1.5 bg-white pointer-events-none" />
      <span aria-hidden="true" className="absolute -right-px -top-px h-1.5 w-px bg-white pointer-events-none" />
      <span aria-hidden="true" className="absolute -bottom-px -left-px h-px w-1.5 bg-white pointer-events-none" />
      <span aria-hidden="true" className="absolute -bottom-px -left-px h-1.5 w-px bg-white pointer-events-none" />
      <span aria-hidden="true" className="absolute -bottom-px -right-px h-px w-1.5 bg-white pointer-events-none" />
      <span aria-hidden="true" className="absolute -bottom-px -right-px h-1.5 w-px bg-white pointer-events-none" />

      {/* Button Body */}
      <div className="relative flex size-full items-center overflow-hidden bg-white text-black transition-colors duration-300 ease-in group-hover:text-white">
        {/* Right square with lavender accent */}
        <span aria-hidden="true" className="absolute inset-y-0 right-0 z-0 aspect-square bg-[#818cf8]/25" />
        {/* Animated Purple slide background on hover */}
        <span aria-hidden="true" className="absolute inset-0 z-10 -translate-x-full bg-[#585DFF] transition-transform duration-300 ease-in group-hover:translate-x-0 motion-reduce:transition-none" />
        
        {/* Label */}
        <span className="relative z-20 flex-1 text-center whitespace-nowrap text-[15px] font-medium tracking-tight">
          {text}
        </span>
        
        {/* Arrow chevron */}
        <span className="relative z-20 flex aspect-square h-full items-center justify-center pr-0.5">
          <svg viewBox="0 0 12 12" aria-hidden="true" className="size-3 fill-current">
            <path fillRule="evenodd" clipRule="evenodd" d="M4.5 2.5L8 6L4.5 9.5L3.8 8.8L6.6 6L3.8 3.2L4.5 2.5Z" />
          </svg>
        </span>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick}>
      {content}
    </button>
  );
};
