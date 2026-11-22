'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

interface BELToolItem {
  id: string;
  name: string;
  top: string;
  left: string;
  image: string;
  startP: number;
  endP: number;
}

const belToolsData: BELToolItem[] = [
  // Wave 1: Top row and bottom row (Outer perimeter, scrollProgress: 0.08 - 0.30)
  {
    id: 'claude',
    name: 'Claude',
    top: '12.5%',
    left: '23.2%',
    image: '/tools/bel/claude.webp',
    startP: 0.08,
    endP: 0.26,
  },
  {
    id: 'github',
    name: 'GitHub',
    top: '11.8%',
    left: '37.1%',
    image: '/tools/bel/github.webp',
    startP: 0.10,
    endP: 0.28,
  },
  {
    id: 'python',
    name: 'Python',
    top: '12.3%',
    left: '51.6%',
    image: '/tools/bel/python.webp',
    startP: 0.09,
    endP: 0.27,
  },
  {
    id: 'langchain',
    name: 'LangChain',
    top: '11.1%',
    left: '65.2%',
    image: '/tools/bel/langchain.webp',
    startP: 0.11,
    endP: 0.29,
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT / OpenAI',
    top: '12.5%',
    left: '79.2%',
    image: '/tools/bel/chatgpt.webp',
    startP: 0.08,
    endP: 0.26,
  },
  {
    id: 'aws',
    name: 'AWS',
    top: '82.9%',
    left: '24.2%',
    image: '/tools/bel/aws.webp',
    startP: 0.12,
    endP: 0.30,
  },
  {
    id: 'kafka',
    name: 'Apache Kafka',
    top: '82.1%',
    left: '39.9%',
    image: '/tools/bel/kafka.webp',
    startP: 0.10,
    endP: 0.28,
  },
  {
    id: 'docker',
    name: 'Docker',
    top: '80.7%',
    left: '53.7%',
    image: '/tools/bel/docker.webp',
    startP: 0.09,
    endP: 0.27,
  },
  {
    id: 'java',
    name: 'Java',
    top: '82.9%',
    left: '67.5%',
    image: '/tools/bel/java.webp',
    startP: 0.11,
    endP: 0.29,
  },

  // Wave 2: Upper and Lower mid-rings (scrollProgress: 0.18 - 0.42)
  {
    id: 'huggingface',
    name: 'Hugging Face',
    top: '30.4%',
    left: '18.3%',
    image: '/tools/bel/huggingface.webp',
    startP: 0.18,
    endP: 0.36,
  },
  {
    id: 'cursor',
    name: 'Cursor',
    top: '27.2%',
    left: '30.2%',
    image: '/tools/bel/cursor.webp',
    startP: 0.20,
    endP: 0.38,
  },
  {
    id: 'pinecone',
    name: 'Pinecone Vector DB',
    top: '26.2%',
    left: '43.9%',
    image: '/tools/bel/pinecone.webp',
    startP: 0.22,
    endP: 0.40,
  },
  {
    id: 'openrouter',
    name: 'OpenRouter / Models',
    top: '29.2%',
    left: '58.4%',
    image: '/tools/bel/openrouter.webp',
    startP: 0.19,
    endP: 0.37,
  },
  {
    id: 'hermes',
    name: 'Llama / Open Weights',
    top: '29.0%',
    left: '75.8%',
    image: '/tools/bel/hermes.webp',
    startP: 0.21,
    endP: 0.39,
  },
  {
    id: 'django',
    name: 'Django',
    top: '64.0%',
    left: '18.9%',
    image: '/tools/bel/django.webp',
    startP: 0.20,
    endP: 0.38,
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    top: '65.7%',
    left: '32.8%',
    image: '/tools/bel/postgresql.webp',
    startP: 0.23,
    endP: 0.41,
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    top: '67.0%',
    left: '47.4%',
    image: '/tools/bel/nodejs.webp',
    startP: 0.21,
    endP: 0.39,
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    top: '65.7%',
    left: '61.4%',
    image: '/tools/bel/mongodb.webp',
    startP: 0.22,
    endP: 0.40,
  },
  {
    id: 'express',
    name: 'Express.js',
    top: '76.5%',
    left: '77.3%',
    image: '/tools/bel/express.webp',
    startP: 0.24,
    endP: 0.42,
  },

  // Wave 3: Flanking Middle Icons (scrollProgress: 0.26 - 0.50)
  {
    id: 'spring-boot',
    name: 'Spring Boot',
    top: '45.7%',
    left: '25.5%',
    image: '/tools/bel/spring-boot.webp',
    startP: 0.26,
    endP: 0.46,
  },
  {
    id: 'redis',
    name: 'Redis',
    top: '50.0%',
    left: '71.5%',
    image: '/tools/bel/redis.webp',
    startP: 0.28,
    endP: 0.48,
  },
  {
    id: 'nginx',
    name: 'NGINX',
    top: '57.6%',
    left: '81.3%',
    image: '/tools/bel/nginx.webp',
    startP: 0.30,
    endP: 0.50,
  },
];

export function BELToolsSection() {
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
  // Heading 1 ("Learn the tools and technologies you'll build with"): visible until p=0.60, then fades out by p=0.74
  const heading1Opacity = scrollProgress < 0.60
    ? 1
    : Math.max(0, 1 - (scrollProgress - 0.60) / 0.14);

  const heading1TranslateY = scrollProgress < 0.60
    ? 0
    : -((scrollProgress - 0.60) / 0.14) * 20;

  // Heading 2 ("and many more"): fades in between p=0.70 and p=0.85
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
      {/* Pinned Sticky Viewport Screen */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden bg-black select-none">

        {/* Authentic Pixelated Background Texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-80"
          style={{
            backgroundImage: `url('/images/tools-pixelated-bg.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />

        {/* Crisp Digital Pixel Grid Overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none opacity-40 mix-blend-screen" />

        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[520px] bg-gradient-to-tr from-indigo-900/10 via-blue-900/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Constrained layout within the two site guide lines */}
        <div className="max-w-[1440px] mx-auto border-x border-[#232328] relative w-full h-full flex items-center justify-center">

          {/* 1. INITIAL HEADING: "Learn the tools and technologies you'll build with" */}
          <div
            className="absolute inset-x-4 top-1/2 -translate-y-1/2 text-center pointer-events-none z-10 transition-opacity duration-300"
            style={{
              opacity: heading1Opacity,
              transform: `translateY(calc(-50% + ${heading1TranslateY}px))`,
              visibility: heading1Opacity <= 0 ? 'hidden' : 'visible',
            }}
          >
            <h2 className="text-[34px] sm:text-[48px] md:text-[56px] font-editorial text-white font-normal leading-tight tracking-tight">
              Learn the tools and technologies you&apos;ll build with
            </h2>
            <p className="text-zinc-400 text-xs sm:text-[13px] md:text-sm font-light max-w-xl mx-auto mt-3 px-4 leading-relaxed">
              Hands-on with the tools used to build, deploy and scale real AI-powered backend systems.
            </p>
          </div>

          {/* 2. SECONDARY HEADING: "and many more" (appears on subsequent scroll) */}
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
            <p className="text-zinc-400 text-xs sm:text-[13px] md:text-sm font-light max-w-xl mx-auto mt-3 px-4 leading-relaxed">
              The modern infrastructure and applied AI ecosystem for high-scale backend engineers.
            </p>
          </div>

          {/* 3. SCATTERED CONSTELLATION OF 22 AUTHENTIC TOOL ICONS FADING IN */}
          <div className="absolute inset-0 pointer-events-none w-full h-full">
            {belToolsData.map((tool) => {
              // Compute individual emergence progress:
              let itemProgress = 0;
              if (scrollProgress >= tool.endP) {
                itemProgress = 1;
              } else if (scrollProgress > tool.startP) {
                itemProgress = (scrollProgress - tool.startP) / (tool.endP - tool.startP);
              }

              // Smoothstep ease function for organic materialization
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
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.85)] border border-white/10 hover:scale-110 hover:border-white/30 transition-transform duration-200 cursor-pointer bg-[#0e0e12] pointer-events-auto">
                    <Image
                      src={tool.image}
                      alt={tool.name}
                      fill
                      className="object-contain p-1 select-none"
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
