'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

interface ToolItem {
  id: string;
  name: string;
  top: string;
  left: string;
  image: string;
  startP: number;
  endP: number;
}

const backendTools: ToolItem[] = [
  { id: 'docker', name: 'Docker', top: '12%', left: '10%', image: '/tools/docker.webp', startP: 0.1, endP: 0.28 },
  { id: 'kafka', name: 'Apache Kafka', top: '10%', left: '34%', image: '/tools/kafka.webp', startP: 0.12, endP: 0.3 },
  { id: 'claude-code', name: 'Claude Code', top: '9%', left: '60%', image: '/tools/claude-code.webp', startP: 0.14, endP: 0.32 },
  { id: 'postgresql', name: 'PostgreSQL', top: '11%', left: '85%', image: '/tools/postgresql.webp', startP: 0.16, endP: 0.34 },
  { id: 'nodejs', name: 'Node.js', top: '74%', left: '8%', image: '/tools/nodejs.webp', startP: 0.15, endP: 0.33 },
  { id: 'nginx', name: 'NGINX', top: '82%', left: '26%', image: '/tools/nginx.webp', startP: 0.18, endP: 0.36 },
  { id: 'postman', name: 'Postman', top: '83%', left: '58%', image: '/tools/postman.webp', startP: 0.17, endP: 0.35 },
  { id: 'github', name: 'GitHub', top: '76%', left: '88%', image: '/tools/github.webp', startP: 0.2, endP: 0.38 },
];

export function BELToolsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalDist = windowHeight + rect.height;
      const current = windowHeight - rect.top;
      const p = Math.min(Math.max(current / totalDist, 0), 1);
      setScrollProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-black py-28 sm:py-36 border-b border-[#232328] overflow-hidden select-none"
    >
      {/* Background Starfield / Constellation Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(99,102,241,0.08),transparent_70%)] pointer-events-none" />

      {/* Floating Constellation Tool Nodes */}
      <div className="absolute inset-0 max-w-[1440px] mx-auto pointer-events-none z-10">
        {backendTools.map((tool) => {
          const ratio = Math.min(Math.max((scrollProgress - tool.startP) / (tool.endP - tool.startP), 0), 1);
          const opacity = Math.min(ratio * 1.4, 1);
          const scale = 0.5 + ratio * 0.5;
          const translateY = (1 - ratio) * 20;

          return (
            <div
              key={tool.id}
              style={{
                top: tool.top,
                left: tool.left,
                opacity,
                transform: `scale(${scale}) translateY(${translateY}px)`,
                transition: 'opacity 0.2s ease-out, transform 0.2s ease-out',
              }}
              className="absolute pointer-events-auto group cursor-pointer"
            >
              <div className="relative p-3.5 sm:p-4 rounded-2xl bg-zinc-950/80 border border-zinc-700/60 hover:border-purple-500/80 backdrop-blur-md shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 relative flex items-center justify-center">
                  <Image
                    src={tool.image}
                    alt={tool.name}
                    width={44}
                    height={44}
                    className="object-contain"
                  />
                </div>
                {/* Tooltip */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded bg-black/90 border border-white/10 text-[11px] font-mono text-zinc-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {tool.name}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Center Hero Heading */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-20 text-center flex flex-col items-center">
        <h2 className="text-[38px] sm:text-[54px] lg:text-[64px] font-editorial italic font-normal text-white max-w-3xl leading-[1.1] mb-6">
          Learn the tools and technologies you&apos;ll build with
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base font-light max-w-xl leading-relaxed">
          From high-throughput distributed message queues to autonomous AI coding agents, master the modern tech stack that high-scale tech companies run on.
        </p>

        {/* Categories Bar */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-medium">
          {['Distributed Systems', 'Applied AI & Agents', 'High-Scale Databases', 'Cloud Infrastructure & DevOps'].map((cat, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full bg-zinc-900/90 border border-zinc-700/80 text-zinc-300 shadow-sm"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
