'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

function clamp(val: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, val));
}

function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

export const FoundersLetterSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const letterRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const animFrameRef = useRef<number | null>(null);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);

  // Scroll tracking with smooth lerp
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      const p = clamp(scrolled / Math.max(1, totalScrollable), 0, 1);
      targetProgressRef.current = p;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // 60fps lerp loop for silky smooth bidirectional responsiveness
    const loop = () => {
      const diff = targetProgressRef.current - currentProgressRef.current;
      if (Math.abs(diff) > 0.0005) {
        currentProgressRef.current += diff * 0.14;
        setProgress(currentProgressRef.current);
      } else {
        currentProgressRef.current = targetProgressRef.current;
        setProgress(currentProgressRef.current);
      }
      animFrameRef.current = requestAnimationFrame(loop);
    };
    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Pointer tilt when letter is unfolded
  const handlePointerMove = (e: React.PointerEvent) => {
    if (progress < 0.8) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const ny = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    setTilt({
      x: clamp(nx * 5, -6, 6),
      y: clamp(-ny * 5, -6, 6),
    });
  };

  const handlePointerLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // Phase Calculations:
  // 1. Envelope Entrance & Alignment: p in [0.0, 0.22]
  const envEntrance = smoothstep(0.0, 0.16, progress);
  const envTiltX = (1 - envEntrance) * 18;
  const envTiltY = -(1 - envEntrance) * 12;
  const envScale = 0.86 + envEntrance * 0.14;
  const envTranslateY = (1 - envEntrance) * 90;

  // 2. Flap Opening: p in [0.14, 0.34]
  const flapProgress = smoothstep(0.14, 0.34, progress);
  const flapAngle = flapProgress * 180; // 0deg (closed) to 180deg (open)

  // 3. Letter Sliding Out: p in [0.28, 0.58]
  const letterSlide = smoothstep(0.28, 0.56, progress);
  const letterY = 120 - letterSlide * 340; // slides up out of envelope

  // 4. Envelope Sinking & Fading: p in [0.42, 0.68]
  const envFade = smoothstep(0.42, 0.65, progress);
  const envSinkY = envFade * 140;
  const envOpacity = 1 - envFade;

  // 5. Letter Unfolding & Expansion: p in [0.55, 0.86]
  const unfoldProgress = smoothstep(0.55, 0.84, progress);
  const foldTopAngle = (1 - unfoldProgress) * -160;
  const foldBottomAngle = (1 - unfoldProgress) * 160;
  const finalScale = 0.84 + unfoldProgress * 0.16;

  // Interactive tilt only kicks in when unfolded
  const isUnfolded = progress >= 0.8;

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-black border-t border-[#232328]"
      style={{ height: '360vh' }}
    >
      {/* Sticky Viewport Frame */}
      <div
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden [perspective:1400px] select-none"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        {/* Subtle background ambient radial light */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-700"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(93, 30, 230, ${0.15 * (1 - envFade)}), transparent 70%)`,
          }}
        />

        {/* Outer 3D Transformation Anchor */}
        <div
          className="relative w-full flex items-center justify-center [transform-style:preserve-3d]"
          style={{
            transform: isUnfolded
              ? `perspective(1200px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(0.99)`
              : 'none',
            transition: isUnfolded ? 'transform 0.15s ease-out' : 'transform 0.4s ease-out',
          }}
        >
          {/* ============================================================ */}
          {/* 1. THE PURPLE ENVELOPE (Folds, Opens, Sinks Back)            */}
          {/* ============================================================ */}
          <div
            className="absolute w-[560px] sm:w-[620px] h-[360px] sm:h-[390px] [transform-style:preserve-3d] pointer-events-none"
            style={{
              transform: `translate3d(0, ${envTranslateY + envSinkY}px, 0) rotateX(${envTiltX}deg) rotateY(${envTiltY}deg) scale(${envScale})`,
              opacity: envOpacity,
              zIndex: 10,
              visibility: envOpacity <= 0.01 ? 'hidden' : 'visible',
            }}
          >
            {/* Envelope Back Face & Pocket Interior */}
            <div
              className="absolute inset-0 rounded-xl overflow-hidden shadow-2xl border border-[#7d4cf7]/60"
              style={{
                background: 'linear-gradient(135deg, #4615cc 0%, #6936f5 55%, #350da6 100%)',
              }}
            >
              {/* Paper fiber noise overlay */}
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                  backgroundSize: '12px 12px',
                }}
              />
              {/* Inner shadow representing pocket depth */}
              <div className="absolute inset-0 shadow-[inset_0_20px_40px_rgba(0,0,0,0.6)]" />
            </div>

            {/* Envelope Flap (Hinged at top, opens upwards in 3D) */}
            <div
              className="absolute top-0 left-0 right-0 h-[190px] [transform-origin:top] [transform-style:preserve-3d] z-30"
              style={{
                transform: `rotateX(${-flapAngle}deg)`,
                transition: 'none',
              }}
            >
              {/* Flap Outer Triangle */}
              <div
                className="absolute inset-0"
                style={{
                  clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
                  background: 'linear-gradient(180deg, #5820db 0%, #6e3af2 80%, #4615cc 100%)',
                  borderTop: '1px solid rgba(255,255,255,0.2)',
                  filter: 'drop-shadow(0 6px 14px rgba(0,0,0,0.45))',
                }}
              >
                {/* Subtle flap border line */}
                <div
                  className="absolute inset-0 opacity-25"
                  style={{
                    backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                    backgroundSize: '12px 12px',
                  }}
                />
              </div>

              {/* Airtribe Wax Seal at the tip of the flap */}
              <div
                className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-16 h-16 rounded-full flex items-center justify-center shadow-2xl z-40"
                style={{
                  background: 'radial-gradient(circle at 35% 35%, #2a0870 0%, #150242 75%, #0c0128 100%)',
                  border: '2px solid rgba(255,255,255,0.25)',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.8), inset 0 2px 4px rgba(255,255,255,0.25)',
                }}
              >
                {/* Embossed Airtribe Emblem */}
                <div className="w-8 h-8 relative opacity-90 filter drop-shadow">
                  <Image
                    src="/airtribe-icon.svg"
                    alt="Airtribe"
                    fill
                    className="object-contain filter invert opacity-90"
                  />
                </div>
              </div>
            </div>

            {/* Envelope Front Pocket Cover (Covers the lower half of sliding letter) */}
            <div
              className="absolute inset-0 rounded-xl overflow-hidden z-20 pointer-events-none"
              style={{
                clipPath: 'polygon(0% 28%, 50% 64%, 100% 28%, 100% 100%, 0% 100%)',
                background: 'linear-gradient(180deg, #531ecc 0%, #4010be 100%)',
                boxShadow: '0 -4px 18px rgba(0,0,0,0.3)',
              }}
            >
              {/* Return Address (top-left) */}
              <div className="absolute top-[38%] left-8 text-white/90 font-mono text-xs leading-snug">
                <span className="text-[10px] uppercase tracking-wider text-white/60 block mb-0.5">
                  FROM
                </span>
                <span className="font-bold block">Navneet &amp; Dhaval</span>
                <span className="text-white/70 text-[11px]">Airtribe, Bengaluru</span>
              </div>

              {/* Recipient Address (Center) */}
              <div className="absolute top-[48%] left-1/2 -translate-x-1/2 text-center text-white">
                <p className="font-editorial italic text-2xl sm:text-3xl text-white tracking-wide">
                  To every builder
                </p>
                <p className="font-editorial italic text-2xl sm:text-3xl text-white/90 -mt-1">
                  reading this
                </p>
                <p className="text-[11px] font-mono text-white/70 tracking-widest uppercase mt-2">
                  Wherever you&apos;re building from
                </p>
              </div>

              {/* Perforated Postage Stamp (Top-Right) */}
              <div className="absolute top-[34%] right-8 w-20 h-24 bg-white/95 rounded-sm p-2 flex flex-col justify-between items-center text-black shadow-md border border-dashed border-zinc-400">
                <div className="w-7 h-7 relative mt-1">
                  <Image src="/airtribe-icon.svg" alt="" fill className="object-contain" />
                </div>
                <div className="text-center font-mono text-[8px] leading-tight font-bold tracking-tight text-zinc-800">
                  <span>AIRTRIBE</span>
                  <span className="block text-[7px] text-zinc-500 font-medium">BUILDERS&apos; POST</span>
                </div>
              </div>

              {/* Circular Bengaluru Postmark Stamp with Sine Waves */}
              <div className="absolute top-[35%] right-24 pointer-events-none opacity-60">
                <svg className="w-24 h-16 text-white" viewBox="0 0 120 70" fill="none" stroke="currentColor">
                  <circle cx="35" cy="35" r="28" strokeWidth="1.5" />
                  <circle cx="35" cy="35" r="20" strokeWidth="1" strokeDasharray="3 2" />
                  <path d="M65 22 Q 80 14, 95 22 T 120 22" strokeWidth="1.5" />
                  <path d="M65 35 Q 80 27, 95 35 T 120 35" strokeWidth="1.5" />
                  <path d="M65 48 Q 80 40, 95 48 T 120 48" strokeWidth="1.5" />
                </svg>
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* 2. THE MANIFESTO LETTER PAPER (Slides Up & Unfolds Flat)    */}
          {/* ============================================================ */}
          <div
            ref={letterRef}
            className="w-[92vw] max-w-[760px] min-h-[580px] bg-[#fbfbfa] text-[#121214] rounded-lg p-8 sm:p-14 sm:py-16 shadow-[0_30px_100px_rgba(0,0,0,0.85)] border border-[#e4e4dc] relative overflow-hidden transition-all"
            style={{
              transform: `translate3d(0, ${isUnfolded ? 0 : letterY}px, ${isUnfolded ? 50 : 20}px) scale(${isUnfolded ? 1 : finalScale})`,
              zIndex: 25,
              opacity: progress < 0.2 ? 0 : clamp((progress - 0.2) / 0.15, 0, 1),
              boxShadow: isUnfolded
                ? '0 30px 100px rgba(0,0,0,0.9), 0 10px 30px rgba(0,0,0,0.5)'
                : '0 15px 40px rgba(0,0,0,0.6)',
            }}
          >
            {/* Subtle vintage paper grain texture */}
            <div
              className="absolute inset-0 opacity-[0.035] pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(#000000 1px, transparent 1px), radial-gradient(#000000 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 10px 10px',
              }}
            />

            {/* Fold Crease Shadow Lines (Smoothly fade away as paper unfolds) */}
            <div
              className="absolute inset-x-0 top-1/3 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent pointer-events-none transition-opacity duration-300"
              style={{
                opacity: 1 - unfoldProgress,
                transform: `scaleY(${1 + (1 - unfoldProgress) * 4})`,
              }}
            />
            <div
              className="absolute inset-x-0 top-2/3 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent pointer-events-none transition-opacity duration-300"
              style={{
                opacity: 1 - unfoldProgress,
                transform: `scaleY(${1 + (1 - unfoldProgress) * 4})`,
              }}
            />

            {/* Letter Header */}
            <div className="relative z-10 mb-8 sm:mb-10 pb-6 border-b border-[#e8e8df] flex items-center justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-zinc-500 block mb-2">
                  Founders&apos; Note
                </span>
                <h2 className="text-[34px] sm:text-[46px] lg:text-[52px] font-editorial italic text-[#111113] leading-[1.0] tracking-tight">
                  To every builder reading this
                </h2>
              </div>
              <div className="hidden sm:block opacity-70">
                <Image
                  src="/airtribe-icon.svg"
                  alt="Airtribe"
                  width={28}
                  height={28}
                  className="filter grayscale opacity-60"
                />
              </div>
            </div>

            {/* Letter Body Typography */}
            <div className="relative z-10 space-y-5 sm:space-y-6 text-[#232326] text-[16px] sm:text-[18px] lg:text-[19px] leading-[1.65] font-normal">
              <p>
                We&apos;ve both been the person wondering if it was already too late to start over.
              </p>
              <p>
                The ambition was never the problem. What we didn&apos;t have was a clear path, someone a few
                steps ahead to ask, and a room full of people building the same thing at the same time.
                We got there eventually, slower and lonelier than we needed to.
              </p>
              <p>
                Airtribe is the thing we wish we&apos;d had. Mentors who&apos;ve actually built what they teach.
                Work that ends in something you shipped. And a tribe that stays long after the cohort does.
              </p>
              <p className="font-semibold text-[#111113] pt-1">
                Careers are built, not handed out. Start with one project. We&apos;ll be right here.
              </p>
            </div>

            {/* Signatures & Seal */}
            <div className="relative z-10 mt-10 sm:mt-12 pt-8 border-t border-[#e8e8df] flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <p className="font-editorial italic text-2xl sm:text-3xl text-[#111113]">
                  Navneet Sharma &amp; Dhaval Trivedi
                </p>
                <p className="text-zinc-500 text-xs sm:text-sm font-mono mt-0.5">
                  Co-founders, Airtribe
                </p>
              </div>

              {/* Handcrafted Seal / Monogram */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-[#d6d6cb] bg-[#f0f0eb] flex items-center justify-center text-xs font-mono font-bold text-zinc-600 shadow-inner">
                  AT
                </div>
                <div className="text-[11px] font-mono text-zinc-500 leading-tight">
                  <span>Bengaluru, India</span>
                  <span className="block text-zinc-400">Official Manifesto</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Progress Indicator Bar at Bottom */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#232328] z-50">
          <span className="text-[11px] font-mono text-zinc-400">
            {progress < 0.25
              ? 'Scroll to open letter'
              : progress < 0.75
              ? 'Unfolding...'
              : 'Founders\' Note'}
          </span>
          <div className="w-20 h-1 bg-zinc-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#a78bfa] transition-all duration-75"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
