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

const toolsData: ToolItem[] = [
  // Wave 1: First to emerge out of thin air (scrollProgress: 0.10 - 0.32)
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    top: '10.9%',
    left: '9.3%',
    image: 'chatgpt.png',
    startP: 0.10,
    endP: 0.28,
  },
  {
    id: 'claude',
    name: 'Claude',
    top: '10.1%',
    left: '32.0%',
    image: 'claude.png',
    startP: 0.12,
    endP: 0.30,
  },
  {
    id: 'bot_mascot',
    name: 'AI Agent Bot',
    top: '9.6%',
    left: '57.9%',
    image: 'bot_mascot.png',
    startP: 0.14,
    endP: 0.32,
  },
  {
    id: 'n8n',
    name: 'n8n Workflow',
    top: '11.4%',
    left: '87.9%',
    image: 'n8n.png',
    startP: 0.16,
    endP: 0.34,
  },
  {
    id: 'github',
    name: 'GitHub',
    top: '73.7%',
    left: '6.7%',
    image: 'github.png',
    startP: 0.15,
    endP: 0.33,
  },
  {
    id: 'mixpanel',
    name: 'Mixpanel',
    top: '82.8%',
    left: '24.0%',
    image: 'mixpanel.png',
    startP: 0.18,
    endP: 0.36,
  },
  {
    id: 'vercel',
    name: 'Vercel',
    top: '83.4%',
    left: '57.9%',
    image: 'vercel.png',
    startP: 0.17,
    endP: 0.35,
  },

  // Wave 2: Middle ring emerging (scrollProgress: 0.22 - 0.44)
  {
    id: 'figma',
    name: 'Figma',
    top: '20.7%',
    left: '70.1%',
    image: 'figma.png',
    startP: 0.22,
    endP: 0.40,
  },
  {
    id: 'linear',
    name: 'Linear',
    top: '23.4%',
    left: '47.1%',
    image: 'linear.png',
    startP: 0.24,
    endP: 0.42,
  },
  {
    id: 'appstore',
    name: 'App Store',
    top: '26.7%',
    left: '24.2%',
    image: 'appstore.png',
    startP: 0.26,
    endP: 0.44,
  },
  {
    id: 'supabase',
    name: 'Supabase',
    top: '36.6%',
    left: '86.2%',
    image: 'supabase.png',
    startP: 0.28,
    endP: 0.46,
  },
  {
    id: 'postman_astronaut',
    name: 'Postman',
    top: '42.5%',
    left: '13.2%',
    image: 'postman_astronaut.png',
    startP: 0.25,
    endP: 0.43,
  },

  // Wave 3: Settle & Inner constellation (scrollProgress: 0.30 - 0.52)
  {
    id: 'opencode_anime',
    name: 'OpenCode Agent',
    top: '65.3%',
    left: '93.2%',
    image: 'opencode_anime.png',
    startP: 0.30,
    endP: 0.48,
  },
  {
    id: 'langchain',
    name: 'LangChain',
    top: '72.4%',
    left: '41.3%',
    image: 'langchain.png',
    startP: 0.32,
    endP: 0.50,
  },
  {
    id: 'replit',
    name: 'Replit Agent',
    top: '75.5%',
    left: '75.9%',
    image: 'replit.png',
    startP: 0.34,
    endP: 0.52,
  },
];

export function ToolsSection() {
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

  // Compute heading transitions:
  // Heading 1 ("The tools you'll build with"): visible until p=0.58, then fades out by p=0.72
  const heading1Opacity = scrollProgress < 0.58
    ? 1
    : Math.max(0, 1 - (scrollProgress - 0.58) / 0.14);

  const heading1TranslateY = scrollProgress < 0.58
    ? 0
    : -((scrollProgress - 0.58) / 0.14) * 20;

  // Heading 2 ("and many more"): fades in between p=0.68 and p=0.82
  const heading2Opacity = scrollProgress < 0.68
    ? 0
    : Math.min(1, (scrollProgress - 0.68) / 0.14);

  const heading2TranslateY = scrollProgress < 0.68
    ? 20
    : Math.max(0, (1 - (scrollProgress - 0.68) / 0.14) * 20);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[280vh] bg-black text-white"
    >
      {/* Pinned Sticky Viewport Screen */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-black select-none">
        
        {/* Authentic Pixelated Background Texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-85"
          style={{
            backgroundImage: `url('/images/tools-pixelated-bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Crisp Digital Pixel Grid Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-40 mix-blend-screen" />

        {/* Subtle Ambient Radial Lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-purple-900/10 via-blue-900/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* 1. INITIAL HEADING: "The tools you'll build with" */}
        <div
          className="absolute inset-x-4 top-1/2 -translate-y-1/2 text-center pointer-events-none z-10 transition-opacity duration-300"
          style={{
            opacity: heading1Opacity,
            transform: `translateY(calc(-50% + ${heading1TranslateY}px))`,
            visibility: heading1Opacity <= 0 ? 'hidden' : 'visible',
          }}
        >
          <h2 className="text-[34px] sm:text-[48px] md:text-[56px] font-editorial text-white font-normal leading-tight tracking-tight">
            The tools you'll build with
          </h2>
          <p className="text-zinc-400 text-xs sm:text-[13px] md:text-sm font-light max-w-xl mx-auto mt-3 px-4 leading-relaxed">
            Hands-on with the tools product teams use to plan, design, analyse and ship AI products.
          </p>
        </div>

        {/* 2. NEXT HEADING: "and many more" (appears on subsequent scroll after settling) */}
        <div
          className="absolute inset-x-4 top-1/2 -translate-y-1/2 text-center pointer-events-none z-10 transition-opacity duration-300"
          style={{
            opacity: heading2Opacity,
            transform: `translateY(calc(-50% + ${heading2TranslateY}px))`,
            visibility: heading2Opacity <= 0 ? 'hidden' : 'visible',
          }}
        >
          <h2 className="text-[36px] sm:text-[52px] md:text-[60px] font-editorial text-white font-normal leading-none tracking-tight">
            and many more
          </h2>
        </div>

        {/* 3. SCATTERED CONSTELLATION OF 15 AUTHENTIC TOOL ICONS EMERGING OUT OF THIN AIR */}
        <div className="absolute inset-0 pointer-events-none max-w-[1440px] mx-auto">
          {toolsData.map((tool) => {
            // Compute item individual emergence progress:
            // 0 before startP, transitions to 1 by endP, stays 1 thereafter
            let itemProgress = 0;
            if (scrollProgress >= tool.endP) {
              itemProgress = 1;
            } else if (scrollProgress > tool.startP) {
              itemProgress = (scrollProgress - tool.startP) / (tool.endP - tool.startP);
            }

            // Smoothstep ease function for organic materialization from thin air
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
                    src={`/images/tools/${tool.image}`}
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
    </section>
  );
}
