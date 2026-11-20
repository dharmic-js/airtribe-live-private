'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

function clamp(val: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, val));
}

// Smooth cubic easing for organic transitions
function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = clamp((x - edge0) / (edge1 - edge0), 0, 1);
  return t * t * (3 - 2 * t);
}

export const FoundersLetterSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const animFrameRef = useRef<number | null>(null);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);

  // Scroll tracking with smooth 60fps lerp
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
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    const loop = () => {
      const diff = targetProgressRef.current - currentProgressRef.current;
      if (Math.abs(diff) > 0.0005) {
        currentProgressRef.current += diff * 0.12;
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
      window.removeEventListener('resize', handleScroll);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Subtle interactive parallax tilt when letter is fully unfolded
  const handlePointerMove = (e: React.PointerEvent) => {
    if (progress < 0.88) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const ny = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    setTilt({
      x: clamp(nx * 4.5, -6, 6),
      y: clamp(-ny * 4.5, -6, 6),
    });
  };

  const handlePointerLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // =========================================================================
  // ANIMATION STAGES TIMELINE (0.0 -> 1.0)
  // =========================================================================
  // 1. Initial State (0.00 -> 0.06): Envelope shows Address Face (Stamp & Title)
  // 2. Stage 1 (0.06 -> 0.22): Envelope rotates 180° around Y to reveal opening side
  // 3. Stage 2 (0.22 -> 0.38): Triangular flap flips open 180° upwards
  // 4. Stage 3 (0.36 -> 0.52): Compact folded letter slides up out of envelope pocket
  // 5. Stage 4 (0.50 -> 0.66): Envelope sinks & dissolves; folded letter moves to center
  // 6. Stage 5 (0.66 -> 0.88): Folded letter opens up flat into the full manifesto
  // 7. Stage 6 (0.88 -> 1.00): Pristine fully unfolded letter with interactive 3D tilt
  // =========================================================================

  // 1. Rotation of Envelope (Address Face -> Flap Face)
  const rotProgress = smoothstep(0.04, 0.22, progress);
  const envelopeRotY = rotProgress * 180; // 0deg to 180deg
  const envelopeRotX = (1 - rotProgress) * 4;

  // 2. Flap opening (0deg closed -> 180deg flipped open)
  const flapProgress = smoothstep(0.22, 0.38, progress);
  const flapAngle = flapProgress * 180;

  // 3. Folded letter sliding up out of the pocket
  const slideProgress = smoothstep(0.36, 0.52, progress);
  const slideY = 45 - slideProgress * 185; // from +45px (inside pocket) to -140px (clearing mouth)

  // 4. Envelope sinking and dissolving
  const envFadeProgress = smoothstep(0.50, 0.66, progress);
  const envOpacity = 1 - envFadeProgress;
  const envSinkY = envFadeProgress * 140;

  // Letter smoothly glides to exact viewport center (Y = 0)
  const centerProgress = smoothstep(0.52, 0.68, progress);
  const letterY = slideY * (1 - centerProgress);

  // 5. Letter unfolding from compact folded strip to full document
  const unfoldProgress = smoothstep(0.66, 0.88, progress);
  const isFullyUnfolded = progress >= 0.88;

  // Sizing: Folded height is 175px, full height is 540px
  const foldedHeight = 175;
  const fullHeight = 540;
  const currentHeight = Math.round(foldedHeight + unfoldProgress * (fullHeight - foldedHeight));

  // Width expands slightly as it unfolds for expansive editorial presence
  const currentMaxWidth = Math.round(620 + unfoldProgress * 120); // 620px -> 740px

  // Subtle 3D tilt for top and bottom flaps while unfolding
  const topFoldRotateX = (1 - unfoldProgress) * -18;
  const bottomFoldRotateX = (1 - unfoldProgress) * 18;

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-black border-t border-[#232328]"
      style={{ height: '380vh' }}
    >
      {/* Sticky Viewport Stage - Perfectly Centered in Viewport */}
      <div
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden [perspective:1400px] select-none"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        {/* Subtle Ambient Radial Glow */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-700"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(125, 85, 255, ${0.16 * (1 - envFadeProgress * 0.6)}), transparent 70%)`,
          }}
        />

        {/* Global 3D Anchor */}
        <div
          className="relative w-full flex items-center justify-center [transform-style:preserve-3d]"
          style={{
            transform: isFullyUnfolded
              ? `perspective(1200px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`
              : 'none',
            transition: isFullyUnfolded ? 'transform 0.15s ease-out' : 'none',
          }}
        >
          {/* ============================================================ */}
          {/* 1. THE 3D ROTATING ENVELOPE CONTAINER                        */}
          {/* ============================================================ */}
          <div
            className="relative w-[92vw] max-w-[640px] h-[390px] [transform-style:preserve-3d] pointer-events-none"
            style={{
              transform: `rotateX(${envelopeRotX}deg) rotateY(${envelopeRotY}deg)`,
            }}
          >
            {/* ---------------------------------------------------------- */}
            {/* FACE A: ADDRESS / STAMP SIDE (0deg, visible initially)     */}
            {/* ---------------------------------------------------------- */}
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl [backface-visibility:hidden] z-10"
              style={{
                transform: 'rotateY(0deg)',
                background: 'linear-gradient(135deg, #7d55ff 8%, #4615cc 52%, #9a77ec 100%)',
                boxShadow: '0 25px 60px rgba(0,0,0,0.85), inset 0 1px 2px rgba(255,255,255,0.3)',
                opacity: envOpacity,
                visibility: envOpacity <= 0.005 ? 'hidden' : 'visible',
              }}
            >
              {/* Halftone / Dot Stipple Texture Overlay */}
              <div
                className="absolute inset-0 opacity-[0.14] pointer-events-none"
                style={{
                  backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                  backgroundSize: '11px 11px',
                }}
              />

              {/* Inset White Margin Border Line */}
              <div className="absolute inset-4 sm:inset-6 border border-white/80 rounded-sm pointer-events-none" />

              {/* Top-Left: FROM Information */}
              <div className="absolute top-8 sm:top-10 left-8 sm:left-10 text-white font-mono leading-tight z-10">
                <span className="text-[11px] sm:text-xs font-bold tracking-widest text-white/80 block uppercase mb-1">
                  FROM
                </span>
                <span className="text-sm sm:text-base font-semibold block text-white">
                  Navneet &amp; Dhaval
                </span>
                <span className="text-xs sm:text-sm font-normal text-white/90 block">
                  Airtribe
                </span>
              </div>

              {/* Top-Right: Perforated Postage Stamp & Postmark */}
              <div className="absolute top-7 sm:top-9 right-7 sm:right-9 flex items-center gap-3 z-10">
                
                {/* Circular Postmark Stamp with Sinusoidal Waves */}
                <div className="relative pointer-events-none opacity-85">
                  <svg className="w-28 sm:w-36 h-16 sm:h-20 text-white/90" viewBox="0 0 160 80" fill="none" stroke="currentColor">
                    <circle cx="115" cy="40" r="34" strokeWidth="1.8" />
                    <circle cx="115" cy="40" r="23" strokeWidth="1.2" strokeDasharray="3 2" />
                    <path id="postmarkCircle" d="M 87,40 A 28,28 0 1,1 143,40 A 28,28 0 1,1 87,40" fill="none" stroke="none" />
                    <text fontSize="7.5" fontWeight="bold" fill="currentColor" letterSpacing="1.8" fontFamily="monospace">
                      <textPath href="#postmarkCircle" startOffset="50%" textAnchor="middle">
                        AIRTRIBE &bull; BENGALURU &bull;
                      </textPath>
                    </text>
                    <path d="M 78 18 Q 62 10, 46 18 T 14 18" strokeWidth="1.6" />
                    <path d="M 78 29 Q 62 21, 46 29 T 14 29" strokeWidth="1.6" />
                    <path d="M 78 40 Q 62 32, 46 40 T 14 40" strokeWidth="1.6" />
                    <path d="M 78 51 Q 62 43, 46 51 T 14 51" strokeWidth="1.6" />
                    <path d="M 78 62 Q 62 54, 46 62 T 14 62" strokeWidth="1.6" />
                  </svg>
                </div>

                {/* Perforated Postage Stamp Card */}
                <div className="relative w-18 sm:w-22 h-24 sm:h-28 bg-white rounded-[2px] p-2 flex flex-col items-center justify-between shadow-xl text-black select-none">
                  <div className="absolute -inset-[3px] pointer-events-none border-[3px] border-dotted border-white/60 rounded-[2px]" />
                  <div className="w-full h-full border border-[#4615cc]/40 rounded-[2px] p-1.5 flex flex-col items-center justify-between">
                    <div className="w-8 sm:w-10 h-6 sm:h-7 text-[#4615cc] mt-1">
                      <svg viewBox="-1 -1 41 26.4" className="w-full h-full fill-current">
                        <path d="M31.2726 23.7354C31.2726 23.7354 31.2346 23.7606 31.2135 23.769C31.1712 23.79 31.1247 23.811 31.0825 23.8236C30.8416 23.9245 30.5838 23.975 30.3218 23.975H23.6995L11.7988 0.288086H19.4945L31.2726 23.7312V23.7354Z" />
                        <path d="M0 23.975L7.6957 23.9792L19.7865 0.288086L12.0908 0.296493L0 23.975Z" />
                      </svg>
                    </div>
                    <div className="text-center font-sans tracking-tight">
                      <span className="block text-[9px] sm:text-[10px] font-extrabold text-[#1a0868] leading-none">
                        AIRTRIBE
                      </span>
                      <span className="block text-[7px] sm:text-[7.5px] font-semibold text-[#4615cc] tracking-wider uppercase mt-0.5">
                        BUILDERS&apos; POST
                      </span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Center / Lower-Left: Main Heading & Subtitle */}
              <div className="absolute bottom-10 sm:bottom-12 left-8 sm:left-12 z-10 max-w-lg">
                <h2 className="text-[34px] sm:text-[50px] lg:text-[54px] font-editorial italic text-white leading-[1.0] tracking-tight">
                  To every builder
                  <span className="block mt-1">reading this</span>
                </h2>
                <p className="text-white/85 text-xs sm:text-sm font-sans mt-2.5 tracking-wide">
                  Wherever you&apos;re building from
                </p>
              </div>

            </div>

            {/* ---------------------------------------------------------- */}
            {/* FACE B: FLAP / OPENING SIDE (180deg, faces user on rotate) */}
            {/* ---------------------------------------------------------- */}
            <div
              className="absolute inset-0 rounded-2xl overflow-visible shadow-2xl [backface-visibility:hidden] z-20"
              style={{
                transform: 'rotateY(180deg)',
              }}
            >
              {/* Back Wall & Pocket Lining (Sinks and fades with envelope) */}
              <div
                className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none transition-transform duration-75"
                style={{
                  background: 'linear-gradient(180deg, #18095c 0%, #100445 100%)',
                  transform: `translateY(${envSinkY}px)`,
                  opacity: envOpacity,
                  visibility: envOpacity <= 0.005 ? 'hidden' : 'visible',
                  zIndex: 5,
                }}
              >
                {/* Diagonal Pinstripe Lining */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.2) 0px, rgba(255,255,255,0.2) 2px, transparent 2px, transparent 12px)',
                  }}
                />
              </div>

              {/* ======================================================== */}
              {/* THE LETTER (Tucked inside pocket -> Slides out -> Unfolds) */}
              {/* ======================================================== */}
              <div
                className="absolute left-1/2 -translate-x-1/2 pointer-events-auto bg-[#fbfbfa] text-[#121214] rounded-lg border border-[#e4e4dc] transition-all duration-75"
                style={{
                  width: '92vw',
                  maxWidth: `${currentMaxWidth}px`,
                  height: `${currentHeight}px`,
                  maxHeight: 'calc(100vh - 140px)',
                  top: '50%',
                  transform: `translate(-50%, calc(-50% + ${letterY}px))`,
                  zIndex: 20,
                  overflow: isFullyUnfolded ? 'visible' : 'hidden',
                  boxShadow: isFullyUnfolded
                    ? '0 30px 90px rgba(0,0,0,0.85), 0 10px 30px rgba(0,0,0,0.45)'
                    : '0 15px 40px rgba(0,0,0,0.6)',
                }}
              >
                {/* Vintage Stationery Paper Texture */}
                <div
                  className="absolute inset-0 opacity-[0.035] pointer-events-none"
                  style={{
                    backgroundImage:
                      'radial-gradient(#000000 1px, transparent 1px), radial-gradient(#000000 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                    backgroundPosition: '0 0, 10px 10px',
                  }}
                />

                {/* Horizontal Paper Crease Lines (Fade away as letter unfolds) */}
                <div
                  className="absolute inset-x-0 top-[33.3%] h-px bg-gradient-to-r from-transparent via-black/25 to-transparent pointer-events-none transition-opacity duration-300"
                  style={{
                    opacity: (1 - unfoldProgress) * 0.85,
                    boxShadow: unfoldProgress < 0.9 ? '0 1px 3px rgba(0,0,0,0.15)' : 'none',
                  }}
                />
                <div
                  className="absolute inset-x-0 top-[66.7%] h-px bg-gradient-to-r from-transparent via-black/25 to-transparent pointer-events-none transition-opacity duration-300"
                  style={{
                    opacity: (1 - unfoldProgress) * 0.85,
                    boxShadow: unfoldProgress < 0.9 ? '0 1px 3px rgba(0,0,0,0.15)' : 'none',
                  }}
                />

                {/* Letter Content */}
                <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-10 lg:p-12 overflow-hidden">
                  
                  {/* Top Section: Header */}
                  <div
                    className="relative z-10 pb-4 sm:pb-6 border-b border-[#e8e8df] flex items-center justify-between"
                    style={{
                      transform: unfoldProgress < 1 ? `rotateX(${topFoldRotateX}deg)` : 'none',
                      transformOrigin: 'top center',
                    }}
                  >
                    <div>
                      <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-zinc-500 block mb-1">
                        Founders&apos; Note
                      </span>
                      <h2 className="text-[26px] sm:text-[38px] lg:text-[46px] font-editorial italic text-[#111113] leading-[1.05] tracking-tight">
                        To every builder reading this
                      </h2>
                    </div>
                    <div className="hidden sm:block opacity-65 shrink-0 ml-4">
                      <Image
                        src="/airtribe-icon.svg"
                        alt="Airtribe"
                        width={28}
                        height={28}
                        className="filter grayscale opacity-60"
                      />
                    </div>
                  </div>

                  {/* Middle Section: 4 Canonical Paragraphs */}
                  <div
                    className="relative z-10 my-auto py-3 sm:py-4 space-y-3 sm:space-y-4 text-[#232326] text-[13.5px] sm:text-[15.5px] lg:text-[17px] leading-[1.58] font-normal transition-opacity duration-200"
                    style={{
                      opacity: unfoldProgress < 0.25 ? 0.2 : clamp((unfoldProgress - 0.25) / 0.55, 0.2, 1),
                    }}
                  >
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
                    <p className="font-semibold text-[#111113]">
                      Careers are built, not handed out. Start with one project. We&apos;ll be right here.
                    </p>
                  </div>

                  {/* Bottom Section: Signatures & Seal */}
                  <div
                    className="relative z-10 pt-4 sm:pt-6 border-t border-[#e8e8df] flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-opacity duration-200"
                    style={{
                      transform: unfoldProgress < 1 ? `rotateX(${bottomFoldRotateX}deg)` : 'none',
                      transformOrigin: 'bottom center',
                      opacity: unfoldProgress < 0.4 ? 0 : clamp((unfoldProgress - 0.4) / 0.5, 0, 1),
                    }}
                  >
                    <div>
                      <p className="font-editorial italic text-xl sm:text-2xl lg:text-[26px] text-[#111113] leading-tight">
                        Navneet Sharma &amp; Dhaval Trivedi
                      </p>
                      <p className="text-zinc-500 text-[11px] sm:text-xs font-mono mt-0.5">
                        Co-founders, Airtribe
                      </p>
                    </div>

                    {/* Monogram Seal */}
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full border border-[#d6d6cb] bg-[#f0f0eb] flex items-center justify-center text-xs font-mono font-bold text-zinc-600 shadow-inner">
                        AT
                      </div>
                      <div className="text-[10px] sm:text-[11px] font-mono text-zinc-500 leading-tight">
                        <span>Bengaluru, India</span>
                        <span className="block text-zinc-400">Official Manifesto</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Front Pocket Cover (Covers the bottom 64% of envelope) */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none transition-transform duration-75"
                style={{
                  clipPath: 'polygon(0% 36%, 50% 68%, 100% 36%, 100% 100%, 0% 100%)',
                  background: 'linear-gradient(180deg, #531ecc 0%, #3e12b3 100%)',
                  boxShadow: '0 -6px 20px rgba(0,0,0,0.4)',
                  transform: `translateY(${envSinkY}px)`,
                  opacity: envOpacity,
                  visibility: envOpacity <= 0.005 ? 'hidden' : 'visible',
                  zIndex: 30,
                }}
              >
                <div className="absolute inset-0 border-t border-white/20" />
              </div>

              {/* Triangular Top Flap (Hinged at top: 0, flips open -180deg) */}
              <div
                className="absolute top-0 left-0 right-0 h-[195px] [transform-origin:top_center] [transform-style:preserve-3d] transition-transform duration-75"
                style={{
                  transform: `translateY(${envSinkY}px) rotateX(${-flapAngle}deg)`,
                  opacity: envOpacity,
                  visibility: envOpacity <= 0.005 ? 'hidden' : 'visible',
                  zIndex: 40,
                }}
              >
                {/* Flap Outer Face */}
                <div
                  className="absolute inset-0"
                  style={{
                    clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
                    background: 'linear-gradient(180deg, #642be2 0%, #4615cc 80%, #3a0eb8 100%)',
                    filter: 'drop-shadow(0 8px 18px rgba(0,0,0,0.5))',
                    borderTop: '1px solid rgba(255,255,255,0.25)',
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-15"
                    style={{
                      backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                      backgroundSize: '11px 11px',
                    }}
                  />
                </div>

                {/* Airtribe Wax Seal at Apex of Flap */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl z-50"
                  style={{
                    background: 'radial-gradient(circle at 35% 35%, #2a0870 0%, #150242 75%, #0c0128 100%)',
                    border: '2px solid rgba(255,255,255,0.3)',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.85), inset 0 2px 5px rgba(255,255,255,0.3)',
                  }}
                >
                  <div className="w-7 h-5 text-white/90">
                    <svg viewBox="-1 -1 41 26.4" className="w-full h-full fill-current">
                      <path d="M31.2726 23.7354C31.2726 23.7354 31.2346 23.7606 31.2135 23.769C31.1712 23.79 31.1247 23.811 31.0825 23.8236C30.8416 23.9245 30.5838 23.975 30.3218 23.975H23.6995L11.7988 0.288086H19.4945L31.2726 23.7312V23.7354Z" />
                      <path d="M0 23.975L7.6957 23.9792L19.7865 0.288086L12.0908 0.296493L0 23.975Z" />
                    </svg>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
