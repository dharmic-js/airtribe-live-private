'use client';

import React, { useRef, useState, useEffect } from 'react';

interface ToolItem {
  id: string;
  name: string;
  top: string;
  left: string;
  bg: string;
  icon: React.ReactNode;
  startP: number;
  endP: number;
}

const toolsData: ToolItem[] = [
  // Wave 1: First to emerge (p: 0.12 - 0.35)
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    top: '9%',
    left: '19%',
    bg: 'bg-[#7c3aed]',
    startP: 0.12,
    endP: 0.28,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
        <path d="M22.28 9.37a5.99 5.99 0 0 0-.52-4.94 6.08 6.08 0 0 0-6.42-2.88 6 6 0 0 0-4.66-2.19 6.06 6.06 0 0 0-5.8 4.24 6 6 0 0 0-3.92 2.85 6.08 6.08 0 0 0 .74 7 6 6 0 0 0 .52 4.94 6.08 6.08 0 0 0 6.42 2.88 6 6 0 0 0 4.66 2.19 6.06 6.06 0 0 0 5.8-4.24 6 6 0 0 0 3.92-2.85 6.08 6.08 0 0 0-.74-7.04zM13 20.89a4.53 4.53 0 0 1-2.92-1.07l.15-.08 4.83-2.79a.78.78 0 0 0 .39-.68v-6.82l2.05 1.18a.07.07 0 0 1 .04.05v5.69a4.55 4.55 0 0 1-4.54 4.52zm-8.8-4.48a4.52 4.52 0 0 1-.56-3.06l.15.09 4.83 2.79a.77.77 0 0 0 .78 0l5.91-3.41v2.37a.08.08 0 0 1-.03.06l-4.93 2.85a4.55 4.55 0 0 1-6.15-1.69zm-.88-9.45a4.5 4.5 0 0 1 2.36-2l-.15.09-4.83 2.79a.78.78 0 0 0-.39.68v6.82L3.25 14.2a.08.08 0 0 1-.04-.06V8.45a4.52 4.52 0 0 1 .83-1.49zm14.33 3.63l-5.91-3.41 4.93-2.85a4.54 4.54 0 0 1 6.15 1.69 4.52 4.52 0 0 1 .56 3.06l-.15-.09-4.83-2.79a.77.77 0 0 0-.75.39zm3.09 6.82l-.15-.09-4.83-2.79a.78.78 0 0 0-.78 0l-5.91 3.41V15.7a.08.08 0 0 1 .03-.06l4.93-2.85a4.54 4.54 0 0 1 6.71 4.75zm-9.74-2.87l-2.6-1.5 2.6-1.5 2.6 1.5z" />
      </svg>
    ),
  },
  {
    id: 'claude',
    name: 'Claude',
    top: '8%',
    left: '36%',
    bg: 'bg-[#d97706]',
    startP: 0.14,
    endP: 0.30,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
        {/* Anthropic / Claude 16-ray sunburst */}
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M12 5.5l1 2 2.5.5-2 1.5.5 2.5-2-1-2 1 .5-2.5-2-1.5 2.5-.5z" />
      </svg>
    ),
  },
  {
    id: 'postman',
    name: 'Postman',
    top: '8%',
    left: '54%',
    bg: 'bg-[#f97316]',
    startP: 0.16,
    endP: 0.32,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.8 6.8l-1.6 1.6c-.2.2-.5.3-.8.3h-1.4v2.6h1.2c.3 0 .6.1.8.3l1.8 1.8-1.4 1.4-1.6-1.6a.7.7 0 0 0-.5-.2h-2.5c-.4 0-.8-.4-.8-.8V8.8c0-.4.4-.8.8-.8h4.5c.3 0 .6.1.8.3l1.6 1.6-1.4 1.4z" />
        <circle cx="9" cy="6.5" r="1.5" />
        <path d="M14 6h4v2h-4zM6 14h3v2H6z" />
      </svg>
    ),
  },
  {
    id: 'n8n',
    name: 'n8n',
    top: '9%',
    left: '76%',
    bg: 'bg-[#ea4b71]',
    startP: 0.18,
    endP: 0.34,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
        <circle cx="5" cy="12" r="2.5" />
        <circle cx="12" cy="7" r="2.5" />
        <circle cx="12" cy="17" r="2.5" />
        <circle cx="19" cy="12" r="2.5" />
        <path d="M7.5 12h2M12 9.5v5M14.5 12h2M7.2 10.5l2.6-2M14.2 8.5l2.6 2M7.2 13.5l2.6 2M14.2 15.5l2.6-2" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },

  // Wave 2: Middle ring (p: 0.25 - 0.48)
  {
    id: 'linear',
    name: 'Linear',
    top: '21%',
    left: '48%',
    bg: 'bg-[#2563eb]',
    startP: 0.22,
    endP: 0.40,
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
        <path d="M3.2 17.5L17.5 3.2c.4-.4 1-.4 1.4 0l1.9 1.9c.4.4.4 1 0 1.4L6.5 20.8c-.4.4-1 .4-1.4 0l-1.9-1.9c-.4-.4-.4-1 0-1.4z" />
        <path d="M2.5 10.5L10.5 2.5c.3-.3.8-.3 1.1 0l.7.7c.3.3.3.8 0 1.1L4.3 12.3c-.3.3-.8.3-1.1 0l-.7-.7c-.3-.3-.3-.8 0-1.1z" opacity="0.6" />
      </svg>
    ),
  },
  {
    id: 'appstore',
    name: 'App Store',
    top: '24%',
    left: '31%',
    bg: 'bg-[#0284c7]',
    startP: 0.24,
    endP: 0.42,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
        <path d="M12 3L6.5 17.5h2.2l1.3-3.6h4l1.3 3.6h2.2L12 3zm0 4.2l1.4 4.1h-2.8L12 7.2zM4 19h16v2H4z" />
      </svg>
    ),
  },
  {
    id: 'figma',
    name: 'Figma',
    top: '19%',
    left: '64%',
    bg: 'bg-[#18181c]',
    startP: 0.26,
    endP: 0.44,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M8 2h4v5H8a2.5 2.5 0 0 1 0-5z" fill="#F24E1E" />
        <path d="M12 2h4a2.5 2.5 0 0 1 0 5h-4V2z" fill="#FF7262" />
        <path d="M12 7h4a2.5 2.5 0 0 1 0 5h-4V7z" fill="#1ABCFE" />
        <path d="M8 7h4v5H8a2.5 2.5 0 0 1 0-5z" fill="#A259FF" />
        <path d="M8 12h4v2.5a2.5 2.5 0 0 1-5 0A2.5 2.5 0 0 1 8 12z" fill="#0ACF83" />
      </svg>
    ),
  },
  {
    id: 'cursor-pen',
    name: 'Designer Pen',
    top: '38%',
    left: '23%',
    bg: 'bg-[#ea580c]',
    startP: 0.28,
    endP: 0.46,
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
        <path d="M3 21l3.5-1 12-12-2.5-2.5-12 12-1 3.5zm14-17l1.5-1.5a1.5 1.5 0 0 1 2.1 0l.9.9a1.5 1.5 0 0 1 0 2.1L20 7l-3-3z" />
      </svg>
    ),
  },
  {
    id: 'supabase-bolt',
    name: 'Supabase Bolt',
    top: '34%',
    left: '75%',
    bg: 'bg-[#18181c]',
    startP: 0.30,
    endP: 0.48,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#10b981]">
        <path d="M13 2L3 14h7v8l11-13h-8l3-7z" />
      </svg>
    ),
  },

  // Wave 3: Bottom constellation (p: 0.34 - 0.60)
  {
    id: 'opencode',
    name: 'OpenCode Mascot',
    top: '61%',
    left: '80%',
    bg: 'bg-[#18181c]',
    startP: 0.34,
    endP: 0.52,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
        <circle cx="12" cy="12" r="9" fill="#18181c" stroke="white" strokeWidth="1.8" />
        <circle cx="9" cy="10" r="1.5" />
        <circle cx="15" cy="10" r="1.5" />
        <path d="M8 15s1.5 2 4 2 4-2 4-2" stroke="white" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    id: 'replit',
    name: 'Replit',
    top: '70%',
    left: '68%',
    bg: 'bg-[#18181c]',
    startP: 0.36,
    endP: 0.54,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#a3e635]">
        <path d="M5 4h8v5H5zM11 9h8v5h-8zM5 14h8v5H5z" />
      </svg>
    ),
  },
  {
    id: 'vercel',
    name: 'Vercel',
    top: '78%',
    left: '56%',
    bg: 'bg-[#18181c]',
    startP: 0.38,
    endP: 0.56,
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
        <path d="M12 2L24 22H0L12 2Z" />
      </svg>
    ),
  },
  {
    id: 'langchain',
    name: 'LangChain',
    top: '67%',
    left: '44%',
    bg: 'bg-[#18181c]',
    startP: 0.40,
    endP: 0.58,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
        <path d="M8 6h3v2H8c-2.2 0-4 1.8-4 4s1.8 4 4 4h3v2H8c-3.3 0-6-2.7-6-6s2.7-6 6-6zm8 0h-3v2h3c2.2 0 4 1.8 4 4s-1.8 4-4 4h-3v2h3c3.3 0 6-2.7 6-6s-2.7-6-6-6zm-7 5h6v2H9z" />
      </svg>
    ),
  },
  {
    id: 'mixpanel',
    name: 'Mixpanel',
    top: '77%',
    left: '31%',
    bg: 'bg-[#9333ea]',
    startP: 0.42,
    endP: 0.60,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
        <rect x="4" y="10" width="3.5" height="10" rx="1.5" />
        <rect x="10.25" y="4" width="3.5" height="16" rx="1.5" />
        <rect x="16.5" y="8" width="3.5" height="12" rx="1.5" />
      </svg>
    ),
  },
  {
    id: 'github',
    name: 'GitHub',
    top: '68%',
    left: '19%',
    bg: 'bg-[#1f2428]',
    startP: 0.38,
    endP: 0.56,
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-white">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
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
        
        {/* Subtle Ambient Halftone & Radial Glow Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-purple-900/15 via-blue-900/10 to-transparent rounded-full blur-3xl pointer-events-none" />

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

        {/* 3. SCATTERED CONSTELLATION OF 15 TOOL ICONS EMERGING OUT OF THIN AIR */}
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
            const scale = 0.35 + 0.65 * smoothEased;
            const opacity = Math.min(smoothEased * 1.15, 1);
            const blur = (1 - smoothEased) * 8;

            return (
              <div
                key={tool.id}
                className="absolute -translate-x-1/2 -translate-y-1/2 transition-transform duration-200"
                style={{
                  top: tool.top,
                  left: tool.left,
                  opacity: opacity,
                  transform: `translate(-50%, -50%) scale(${scale})`,
                  filter: `blur(${blur}px)`,
                  visibility: opacity <= 0.02 ? 'hidden' : 'visible',
                }}
              >
                <div
                  className={`w-11 h-11 sm:w-13 sm:h-13 md:w-14 md:h-14 rounded-2xl ${tool.bg} border border-white/15 flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.6)] backdrop-blur-md`}
                >
                  {tool.icon}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
