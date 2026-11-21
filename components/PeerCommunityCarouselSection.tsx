'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

interface CarouselCard {
  id: string;
  type: 'yellow-quote' | 'blue-quote' | 'red-quote' | 'purple-quote' | 'photo';
  title?: string;
  image?: string;
  alt?: string;
}

const carouselCards: CarouselCard[] = [
  {
    id: 'yellow-1',
    type: 'yellow-quote',
    title: 'Promoted\nwithin the\nyear',
  },
  {
    id: 'photo-1',
    type: 'photo',
    image: '/images/perks/tribe-photo-1.jpg',
    alt: 'Cohort fellows collaborating in offline sprint',
  },
  {
    id: 'blue-1',
    type: 'blue-quote',
    title: 'I actually\nbuild now',
  },
  {
    id: 'photo-2',
    type: 'photo',
    image: '/images/perks/tribe-photo-2.jpg',
    alt: 'Product management cohort teardown workshop',
  },
  {
    id: 'red-1',
    type: 'red-quote',
    title: 'Promoted\nwithin the\nyear',
  },
  {
    id: 'photo-3',
    type: 'photo',
    image: '/images/perks/tribe-photo-3.jpg',
    alt: 'Product builders offline meetup session',
  },
  {
    id: 'purple-1',
    type: 'purple-quote',
    title: 'I actually\nbuild now',
  },
  {
    id: 'photo-4',
    type: 'photo',
    image: '/images/039_photo-1.40e9adf3.jpg',
    alt: 'Airtribe community immersion gathering',
  },
];

export function PeerCommunityCarouselSection() {
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartXRef = useRef<number>(0);
  const dragStartRotRef = useRef<number>(0);

  const animRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [radiusX, setRadiusX] = useState<number>(440);
  const [radiusZ, setRadiusZ] = useState<number>(180);

  // Responsive radius calculation based on container width
  const updateRadius = useCallback(() => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width < 640) {
        setRadiusX(170);
        setRadiusZ(90);
      } else if (width < 1024) {
        setRadiusX(300);
        setRadiusZ(140);
      } else {
        setRadiusX(440);
        setRadiusZ(180);
      }
    }
  }, []);

  useEffect(() => {
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, [updateRadius]);

  // Slower, smooth continuous rotational step around the central axis
  // Revolving left to right across the front (Z > 0)
  // ~5.5 degrees per second -> full revolution in ~65 seconds (gentle, luxurious pacing)
  useEffect(() => {
    const loop = (currentTime: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = currentTime;
      }
      const delta = (currentTime - lastTimeRef.current) / 1000;
      lastTimeRef.current = currentTime;

      if (!isHovered && !isDragging) {
        setRotation((prev) => (prev + delta * 5.5) % 360);
      }

      animRef.current = requestAnimationFrame(loop);
    };

    animRef.current = requestAnimationFrame(loop);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [isHovered, isDragging]);

  // Pointer drag event handlers for interactive scrubbing
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStartXRef.current = e.clientX;
    dragStartRotRef.current = rotation;
    if (containerRef.current) {
      containerRef.current.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartXRef.current;
    // Drag right rotates right (positive angle), drag left rotates left
    const newRot = (dragStartRotRef.current + deltaX * 0.25) % 360;
    setRotation(newRot < 0 ? newRot + 360 : newRot);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    setIsDragging(false);
    if (containerRef.current) {
      try {
        containerRef.current.releasePointerCapture(e.pointerId);
      } catch {
        // Ignore if already released
      }
    }
  };

  const numCards = carouselCards.length;

  return (
    <section className="bg-black text-white min-h-[580px] sm:min-h-[660px] lg:min-h-[720px] flex flex-col justify-center items-center py-14 sm:py-20 lg:py-24 relative overflow-hidden border-t border-[#232328]">
      {/* Container constrained strictly between the two guide lines */}
      <div className="max-w-[1440px] w-full mx-auto border-x border-[#232328] relative px-4 sm:px-8 flex flex-col items-center justify-center">
        
        {/* Section Header with balanced, centered spacing */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-zinc-400 font-semibold mb-3">
            A COMMUNITY FOR YOU TO THRIVE
          </p>
          <h2 className="font-editorial text-[36px] sm:text-[48px] text-white font-normal leading-tight tracking-tight">
            Building is better with peers
          </h2>
        </div>

        {/* 3D Cylindrical Orbit Carousel Stage - centered vertically and horizontally */}
        <div
          ref={containerRef}
          className="relative w-full h-[320px] sm:h-[370px] lg:h-[400px] flex items-center justify-center overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}
        >
          {carouselCards.map((card, i) => {
            // Angle around the central vertical axis
            const cardAngle = (rotation + (i * 360) / numCards) % 360;
            const rad = (cardAngle * Math.PI) / 180;

            // Coordinates on horizontal ellipse:
            // X: -radiusX (left) to +radiusX (right)
            // Z: -radiusZ (back) to +radiusZ (front)
            const x = Math.sin(rad) * radiusX;
            const zNorm = Math.cos(rad); // -1 (back) to +1 (front)
            const z = zNorm * radiusZ;

            // Scale: Front is full size (1.0), Back is smaller (~0.52)
            const normalizedZ = (zNorm + 1) / 2; // 0 to 1
            const scale = 0.55 + 0.45 * normalizedZ;

            // Z-Index: Front cards render in front of back cards
            const zIndex = Math.round(normalizedZ * 50);

            // Opacity: Front cards 1.0, Back cards recede with depth (~0.60)
            const opacity = 0.60 + 0.40 * normalizedZ;

            // OUTWARD CURVATURE (Convex Cylinder):
            // When card is on the right (x > 0, rad > 0), rotateY is POSITIVE so its right edge recedes away into the background
            // When card is on the left (x < 0, rad < 0), rotateY is NEGATIVE so its left edge recedes away
            // In the center (x = 0), rotateY is 0, bulging outward closest to the viewer!
            const rotateY = Math.sin(rad) * 34;

            return (
              <div
                key={card.id}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-75 select-none pointer-events-none"
                style={{
                  transform: `translate3d(${x}px, 0, ${z}px) scale(${scale}) rotateY(${rotateY}deg)`,
                  zIndex,
                  opacity,
                  width: '320px',
                  height: '220px',
                  transformOrigin: 'center center',
                }}
              >
                {/* Yellow Quote Card */}
                {card.type === 'yellow-quote' && (
                  <div className="relative w-full h-full bg-[#fde047] text-black p-7 flex flex-col justify-end border border-yellow-200 overflow-hidden shadow-lg">
                    <div
                      className="absolute inset-0 opacity-20 pointer-events-none bg-repeat"
                      style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '8px 8px' }}
                    />
                    <p className="font-editorial text-[28px] sm:text-[32px] leading-[1.08] font-normal text-zinc-950 whitespace-pre-line relative z-10">
                      {card.title}
                    </p>
                  </div>
                )}

                {/* Light Cyan/Blue Quote Card */}
                {card.type === 'blue-quote' && (
                  <div className="relative w-full h-full bg-[#7dd3fc] text-white p-7 flex flex-col justify-end border border-sky-300 overflow-hidden shadow-lg">
                    <div
                      className="absolute inset-0 opacity-15 pointer-events-none bg-repeat"
                      style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '8px 8px' }}
                    />
                    <p className="font-editorial text-[30px] sm:text-[34px] leading-[1.08] font-normal text-white whitespace-pre-line relative z-10">
                      {card.title}
                    </p>
                  </div>
                )}

                {/* Coral / Red Quote Card */}
                {card.type === 'red-quote' && (
                  <div className="relative w-full h-full bg-[#e11d48] text-white p-7 flex flex-col justify-end border border-rose-400 overflow-hidden shadow-lg">
                    <div
                      className="absolute inset-0 opacity-20 pointer-events-none bg-repeat"
                      style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '8px 8px' }}
                    />
                    <p className="font-editorial text-[28px] sm:text-[32px] leading-[1.08] font-normal text-white whitespace-pre-line relative z-10">
                      {card.title}
                    </p>
                  </div>
                )}

                {/* Purple / Violet Quote Card */}
                {card.type === 'purple-quote' && (
                  <div className="relative w-full h-full bg-[#7c3aed] text-white p-7 flex flex-col justify-end border border-purple-400 overflow-hidden shadow-lg">
                    <div
                      className="absolute inset-0 opacity-15 pointer-events-none bg-repeat"
                      style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '8px 8px' }}
                    />
                    <p className="font-editorial text-[30px] sm:text-[34px] leading-[1.08] font-normal text-white whitespace-pre-line relative z-10">
                      {card.title}
                    </p>
                  </div>
                )}

                {/* Immersion Photo Card */}
                {card.type === 'photo' && card.image && (
                  <div className="relative w-full h-full bg-zinc-900 border border-white/20 overflow-hidden shadow-lg">
                    <Image
                      src={card.image}
                      alt={card.alt || 'Airtribe cohort community'}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
