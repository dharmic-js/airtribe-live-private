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
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Subtle interactive parallax tilt when letter is fully unfolded
  const handlePointerMove = (e: React.PointerEvent) => {
    if (progress < 0.85) return;
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
  // 1. Initial State: Envelope shows Address Face (Stamp, "To every builder reading this")
  // 2. Stage 1 (0.05 -> 0.25): Envelope rotates 180° around Y to reveal opening side with flap
  // 3. Stage 2 (0.25 -> 0.45): Flap unfolds & rotates 180° upwards around top hinge
  // 4. Stage 3 (0.45 -> 0.65): Folded letter paper emerges and slides upwards out of pocket
  // 5. Stage 4 (0.65 -> 0.85): Envelope sinks & fades, letter unfolds top & bottom flat
  // 6. Stage 5 (0.85 -> 1.00): Full letter displayed with complete manifesto text & interactive tilt
  // =========================================================================

  // Rotation of Envelope (Address side -> Flap side)
  const rotProgress = smoothstep(0.04, 0.24, progress);
  // Initial slight natural 3D tilt: rotateX: 6deg, rotateY: -8deg, rotateZ: 1.5deg
  const envelopeRotY = -8 + rotProgress * 188; // from -8deg to 180deg
  const envelopeRotX = (1 - rotProgress) * 6;
  const envelopeRotZ = (1 - rotProgress) * 1.5;

  // Flap opening (0deg closed down -> -180deg open up)
  const flapProgress = smoothstep(0.24, 0.44, progress);
  const flapAngle = flapProgress * 180; // 0 to 180 deg (flips up)

  // Folded letter sliding up out of the envelope
  const slideProgress = smoothstep(0.42, 0.62, progress);
  const letterSlideY = slideProgress * -260; // slides up out of pocket

  // Envelope sinking and fading as letter takes over
  const envFadeProgress = smoothstep(0.55, 0.72, progress);
  const envOpacity = 1 - envFadeProgress;
  const envSinkY = envFadeProgress * 120;

  // Letter unfolding (Top flap hinges up, bottom flap hinges down)
  const unfoldProgress = smoothstep(0.66, 0.86, progress);
  const isFullyUnfolded = progress >= 0.86;

  // Scale of the letter
  const letterScale = 0.88 + unfoldProgress * 0.12;

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-black border-t border-[#232328]"
      style={{ height: '400vh' }}
    >
      {/* Sticky Viewport Stage */}
      <div
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden [perspective:1400px] select-none"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        {/* Subtle Ambient Radial Glow */}
        <div
          className="absolute inset-0 pointer-events-none transition-opacity duration-700"
          style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, rgba(125, 85, 255, ${0.18 * (1 - envFadeProgress * 0.7)}), transparent 70%)`,
          }}
        />

        {/* Global 3D Transformation Anchor */}
        <div
          className="relative w-full flex items-center justify-center [transform-style:preserve-3d]"
          style={{
            transform: isFullyUnfolded
              ? `perspective(1200px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(0.995)`
              : 'none',
            transition: isFullyUnfolded ? 'transform 0.15s ease-out' : 'none',
          }}
        >
          {/* ============================================================ */}
          {/* 1. THE 3D ROTATING ENVELOPE (Face A: Stamp / Face B: Flap)   */}
          {/* ============================================================ */}
          <div
            className="absolute w-[92vw] max-w-[660px] h-[400px] sm:h-[430px] [transform-style:preserve-3d] pointer-events-none"
            style={{
              transform: `translate3d(0, ${envSinkY}px, 0) rotateX(${envelopeRotX}deg) rotateY(${envelopeRotY}deg) rotateZ(${envelopeRotZ}deg)`,
              opacity: envOpacity,
              zIndex: 10,
              visibility: envOpacity <= 0.005 ? 'hidden' : 'visible',
            }}
          >
            {/* ---------------------------------------------------------- */}
            {/* FACE A: ADDRESS / STAMP SIDE (Matching Uploaded Image)     */}
            {/* ---------------------------------------------------------- */}
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl [backface-visibility:hidden] z-20"
              style={{
                transform: 'rotateY(0deg)',
                background: 'linear-gradient(135deg, #7d55ff 8%, #4615cc 52%, #9a77ec 100%)',
                boxShadow: '0 25px 60px rgba(0,0,0,0.85), inset 0 1px 2px rgba(255,255,255,0.3)',
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

              {/* Top-Right: Perforated Postage Stamp & Bengaluru Postmark */}
              <div className="absolute top-7 sm:top-9 right-7 sm:right-9 flex items-center gap-3 z-10">
                
                {/* Circular Postmark Stamp with Sinusoidal Wavy Lines */}
                <div className="relative pointer-events-none opacity-85">
                  <svg className="w-28 sm:w-36 h-16 sm:h-20 text-white/90" viewBox="0 0 160 80" fill="none" stroke="currentColor">
                    {/* Concentric Cancellation Rings */}
                    <circle cx="115" cy="40" r="34" strokeWidth="1.8" />
                    <circle cx="115" cy="40" r="23" strokeWidth="1.2" strokeDasharray="3 2" />
                    
                    {/* Curved Text Path */}
                    <path id="postmarkCircle" d="M 87,40 A 28,28 0 1,1 143,40 A 28,28 0 1,1 87,40" fill="none" stroke="none" />
                    <text fontSize="7.5" fontWeight="bold" fill="currentColor" letterSpacing="1.8" fontFamily="monospace">
                      <textPath href="#postmarkCircle" startOffset="50%" textAnchor="middle">
                        AIRTRIBE &bull; BENGALURU &bull;
                      </textPath>
                    </text>

                    {/* 5 Sinusoidal Postmark Waves stretching to the left */}
                    <path d="M 78 18 Q 62 10, 46 18 T 14 18" strokeWidth="1.6" />
                    <path d="M 78 29 Q 62 21, 46 29 T 14 29" strokeWidth="1.6" />
                    <path d="M 78 40 Q 62 32, 46 40 T 14 40" strokeWidth="1.6" />
                    <path d="M 78 51 Q 62 43, 46 51 T 14 51" strokeWidth="1.6" />
                    <path d="M 78 62 Q 62 54, 46 62 T 14 62" strokeWidth="1.6" />
                  </svg>
                </div>

                {/* Perforated Postage Stamp Card */}
                <div className="relative w-18 sm:w-22 h-24 sm:h-28 bg-white rounded-[2px] p-2 flex flex-col items-center justify-between shadow-xl text-black select-none">
                  {/* Scalloped / Perforated Outer Border Effect */}
                  <div className="absolute -inset-[3px] pointer-events-none border-[3px] border-dotted border-white/60 rounded-[2px]" />
                  
                  {/* Inner Thin Purple Border */}
                  <div className="w-full h-full border border-[#4615cc]/40 rounded-[2px] p-1.5 flex flex-col items-center justify-between">
                    {/* Official Airtribe Chevron Wings Vector Logo */}
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
            {/* FACE B: OPENING / FLAP SIDE (Faces user after 180° rot)   */}
            {/* ---------------------------------------------------------- */}
            <div
              className="absolute inset-0 rounded-2xl overflow-visible shadow-2xl [backface-visibility:hidden] z-10"
              style={{
                transform: 'rotateY(180deg)',
                background: 'linear-gradient(135deg, #4615cc 0%, #5820db 55%, #350da6 100%)',
                boxShadow: '0 25px 60px rgba(0,0,0,0.85)',
              }}
            >
              {/* Dark Interior Pocket Lining (Visible when flap opens) */}
              <div
                className="absolute inset-0 rounded-2xl overflow-hidden"
                style={{
                  background: 'linear-gradient(180deg, #18095c 0%, #100445 100%)',
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

              {/* Triangular Flap (Hinged at top: 0, flips up by flapAngle) */}
              <div
                className="absolute top-0 left-0 right-0 h-[210px] [transform-origin:top_center] [transform-style:preserve-3d] z-30 transition-none"
                style={{
                  transform: `rotateX(${-flapAngle}deg)`,
                }}
              >
                {/* Flap Outer Purple Face */}
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

                {/* Airtribe Wax Seal at the apex tip of the flap */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-15 h-15 rounded-full flex items-center justify-center shadow-2xl z-40"
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

              {/* Lower Pocket Cover (Folded seams forming the envelope back) */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none z-20 overflow-hidden"
                style={{
                  clipPath: 'polygon(0% 32%, 50% 64%, 100% 32%, 100% 100%, 0% 100%)',
                  background: 'linear-gradient(180deg, #531ecc 0%, #3e12b3 100%)',
                  boxShadow: '0 -6px 20px rgba(0,0,0,0.4)',
                }}
              >
                {/* Diagonal fold crease highlights */}
                <div className="absolute inset-0 border-t border-white/20" />
              </div>

            </div>

          </div>

          {/* ============================================================ */}
          {/* 2. THE LETTER (Slides Out Folded, Then Unfolds Flat)         */}
          {/* ============================================================ */}
          <div
            className="w-[92vw] max-w-[760px] bg-[#fbfbfa] text-[#121214] rounded-lg shadow-[0_30px_100px_rgba(0,0,0,0.9)] border border-[#e4e4dc] relative overflow-hidden transition-all duration-75"
            style={{
              transform: `translate3d(0, ${isFullyUnfolded ? 0 : letterSlideY}px, ${isFullyUnfolded ? 40 : 15}px) scale(${letterScale})`,
              zIndex: 25,
              opacity: progress < 0.38 ? 0 : clamp((progress - 0.38) / 0.12, 0, 1),
              boxShadow: isFullyUnfolded
                ? '0 30px 100px rgba(0,0,0,0.9), 0 10px 30px rgba(0,0,0,0.5)'
                : '0 15px 40px rgba(0,0,0,0.6)',
              minHeight: isFullyUnfolded ? '580px' : '220px',
            }}
          >
            {/* Vintage Paper Texture Overlay */}
            <div
              className="absolute inset-0 opacity-[0.035] pointer-events-none"
              style={{
                backgroundImage:
                  'radial-gradient(#000000 1px, transparent 1px), radial-gradient(#000000 1px, transparent 1px)',
                backgroundSize: '20px 20px',
                backgroundPosition: '0 0, 10px 10px',
              }}
            />

            {/* Trifold Paper Fold Crease Lines (Fade out as paper flattens) */}
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

            {/* Letter Content (Becomes fully visible as it unfolds) */}
            <div className={`p-8 sm:p-14 sm:py-16 transition-opacity duration-300 ${unfoldProgress > 0.4 ? 'opacity-100' : 'opacity-80'}`}>
              
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

              {/* Letter Body: 4 Canonical Paragraphs */}
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

        </div>

        {/* Scroll Progress Bar at Bottom */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-black/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#232328] z-50">
          <span className="text-[11px] font-mono text-zinc-400">
            {progress < 0.22
              ? 'Scroll to rotate envelope'
              : progress < 0.44
              ? 'Opening flap...'
              : progress < 0.65
              ? 'Sliding letter...'
              : progress < 0.86
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
