'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

interface GenAIToolItem {
  id: string;
  name: string;
  top: string;
  left: string;
  image: string;
  startP: number;
  endP: number;
}

const genaiToolsData: GenAIToolItem[] = [
  // Wave 1: Top row (positioned safely below fixed navbar)
  {
    id: 'chatgpt',
    name: 'ChatGPT / OpenAI',
    top: '21%',
    left: '21%',
    image: '/tools/genai-stack/chatgpt.png',
    startP: 0.01,
    endP: 0.09,
  },
  {
    id: 'claude',
    name: 'Claude',
    top: '20%',
    left: '37%',
    image: '/tools/genai-stack/claude.png',
    startP: 0.02,
    endP: 0.10,
  },
  {
    id: 'gemini',
    name: 'Gemini',
    top: '20%',
    left: '55%',
    image: '/tools/genai-stack/gemini.png',
    startP: 0.03,
    endP: 0.11,
  },
  {
    id: 'replit',
    name: 'Replit',
    top: '21%',
    left: '76%',
    image: '/tools/genai-stack/replit.png',
    startP: 0.02,
    endP: 0.10,
  },

  // Wave 2: Mid-tier
  {
    id: 'mistral',
    name: 'Mistral AI',
    top: '32%',
    left: '31%',
    image: '/tools/genai-stack/mistral.png',
    startP: 0.04,
    endP: 0.12,
  },
  {
    id: 'bolt',
    name: 'Bolt / Workflow',
    top: '29%',
    left: '48%',
    image: '/tools/genai-stack/bolt.png',
    startP: 0.05,
    endP: 0.13,
  },
  {
    id: 'n8n',
    name: 'n8n Workflow Automation',
    top: '27%',
    left: '64%',
    image: '/tools/genai-stack/n8n.png',
    startP: 0.06,
    endP: 0.14,
  },
  {
    id: 'clay',
    name: 'Clay Data Enrichment',
    top: '37%',
    left: '76%',
    image: '/tools/genai-stack/clay.png',
    startP: 0.05,
    endP: 0.13,
  },

  // Wave 3: Mid-lower flanks
  {
    id: 'vercel',
    name: 'Vercel Deployment',
    top: '42%',
    left: '24%',
    image: '/tools/genai-stack/vercel.png',
    startP: 0.06,
    endP: 0.14,
  },
  {
    id: 'terminal',
    name: 'Cursor / Terminal',
    top: '58%',
    left: '80%',
    image: '/tools/genai-stack/terminal.png',
    startP: 0.07,
    endP: 0.15,
  },
  {
    id: 'invader',
    name: 'AI Agent',
    top: '68%',
    left: '19%',
    image: '/tools/genai-stack/invader.png',
    startP: 0.05,
    endP: 0.13,
  },
  {
    id: 'perplexity',
    name: 'Perplexity / Search',
    top: '66%',
    left: '44%',
    image: '/tools/genai-stack/perplexity.png',
    startP: 0.08,
    endP: 0.16,
  },
  {
    id: 'writer',
    name: 'Writer / Copilot',
    top: '66%',
    left: '63%',
    image: '/tools/genai-stack/writer.png',
    startP: 0.08,
    endP: 0.16,
  },

  // Wave 4: Bottom row (comfortably above sticky footer)
  {
    id: 'elevenlabs',
    name: 'ElevenLabs Voice AI',
    top: '76%',
    left: '32%',
    image: '/tools/genai-stack/elevenlabs.png',
    startP: 0.09,
    endP: 0.17,
  },
  {
    id: 'prism',
    name: 'Prism / Vector DB',
    top: '77%',
    left: '55%',
    image: '/tools/genai-stack/prism.png',
    startP: 0.10,
    endP: 0.18,
  },
  {
    id: 'snake',
    name: 'v0 / UI Generator',
    top: '76%',
    left: '73%',
    image: '/tools/genai-stack/snake.png',
    startP: 0.09,
    endP: 0.17,
  },
];

export function GenAIToolsConstellationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) {
            ticking = false;
            return;
          }
          const rect = containerRef.current.getBoundingClientRect();
          const totalDistance = containerRef.current.offsetHeight - window.innerHeight;
          if (totalDistance > 0) {
            const currentDistance = -rect.top;
            const p = Math.min(Math.max(currentDistance / totalDistance, 0), 1);
            setScrollProgress(p);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Heading 1: "Your GenAI toolstack"
  const heading1Opacity = scrollProgress < 0.60
    ? 1
    : Math.max(0, 1 - (scrollProgress - 0.60) / 0.14);

  const heading1TranslateY = scrollProgress < 0.60
    ? 0
    : -((scrollProgress - 0.60) / 0.14) * 20;

  // Heading 2: "and 30+ more tools"
  const heading2Opacity = scrollProgress < 0.70
    ? 0
    : Math.min(1, (scrollProgress - 0.70) / 0.14);

  const heading2TranslateY = scrollProgress < 0.70
    ? 20
    : Math.max(0, (1 - (scrollProgress - 0.70) / 0.14) * 20);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[280vh] bg-black text-white"
    >
      {/* Sticky Pinned Full-Screen Stage */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-black select-none">
        
        {/* Pixelated Background Texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-80"
          style={{
            backgroundImage: `url('/images/tools-pixelated-bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Digital Pixel Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-40 mix-blend-screen" />

        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[520px] bg-gradient-to-tr from-purple-900/10 via-indigo-900/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Constrained layout within the two site guide lines */}
        <div className="max-w-[1440px] mx-auto border-x border-[#232328] relative w-full h-full flex items-center justify-center">

          {/* 1. INITIAL HEADING: "Your GenAI toolstack" */}
          <div
            className="absolute inset-x-4 top-1/2 -translate-y-1/2 text-center pointer-events-none z-10 transition-opacity duration-300"
            style={{
              opacity: heading1Opacity,
              transform: `translateY(calc(-50% + ${heading1TranslateY}px))`,
              visibility: heading1Opacity <= 0 ? 'hidden' : 'visible',
            }}
          >
            <h2 className="text-[34px] sm:text-[48px] md:text-[56px] font-editorial text-white font-normal leading-tight tracking-tight">
              Your GenAI toolstack
            </h2>
            <p className="text-zinc-400 text-xs sm:text-[13px] md:text-sm font-light max-w-xl mx-auto mt-3 px-4 leading-relaxed">
              Get hands-on with AI tools: from your first prompt to your first real project.
            </p>
          </div>

          {/* 2. SECONDARY HEADING: "and 30+ more tools" */}
          <div
            className="absolute inset-x-4 top-1/2 -translate-y-1/2 text-center pointer-events-none z-10 transition-opacity duration-300"
            style={{
              opacity: heading2Opacity,
              transform: `translateY(calc(-50% + ${heading2TranslateY}px))`,
              visibility: heading2Opacity <= 0 ? 'hidden' : 'visible',
            }}
          >
            <h2 className="text-[36px] sm:text-[52px] md:text-[60px] font-editorial text-white font-normal leading-none tracking-tight">
              and 30+ more tools
            </h2>
            <p className="text-zinc-400 text-xs sm:text-[13px] md:text-sm font-light max-w-xl mx-auto mt-3 px-4 leading-relaxed">
              The applied AI ecosystem for modern builders, operators and founders.
            </p>
          </div>

          {/* 3. SCATTERED CONSTELLATION OF 16 AUTHENTIC TOOL ICONS FADING IN */}
          <div className="absolute inset-0 pointer-events-none w-full h-full">
            {genaiToolsData.map((tool) => {
              let itemProgress = 0;
              if (scrollProgress >= tool.endP) {
                itemProgress = 1;
              } else if (scrollProgress > tool.startP) {
                itemProgress = (scrollProgress - tool.startP) / (tool.endP - tool.startP);
              }

              const eased = Math.min(Math.max(itemProgress, 0), 1);
              const smoothEased = eased * eased * (3 - 2 * eased);
              const scale = 0.70 + 0.30 * smoothEased;
              const opacity = Math.min(smoothEased * 1.15, 1);

              return (
                <div
                  key={tool.id}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{
                    top: tool.top,
                    left: tool.left,
                    opacity: opacity,
                    transform: `translate(-50%, -50%) scale(${scale})`,
                    willChange: 'transform, opacity',
                  }}
                >
                  <div className="relative w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.85)] border border-white/10 hover:scale-110 hover:border-white/30 transition-transform duration-200 cursor-pointer bg-[#0e0e12] pointer-events-auto">
                    <Image
                      src={tool.image}
                      alt={tool.name}
                      fill
                      className="object-cover select-none"
                      sizes="64px"
                      priority
                    />
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
