'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

interface CarouselCard {
  id: string;
  type: 'yellow-quote' | 'blue-quote' | 'red-quote' | 'purple-quote' | 'violet-quote' | 'photo';
  title?: string;
  align?: 'bottom' | 'top';
  image?: string;
  alt?: string;
}

const carouselCards: CarouselCard[] = [
  {
    id: 'yellow-1',
    type: 'yellow-quote',
    title: 'Promoted\nwithin the\nyear',
    align: 'bottom',
  },
  {
    id: 'photo-1',
    type: 'photo',
    image: '/images/perks/tribe-photo-1.jpg',
    alt: 'Cohort fellows collaborating in offline sprint',
  },
  {
    id: 'red-1',
    type: 'red-quote',
    title: 'Promoted\nwithin the\nyear',
    align: 'bottom',
  },
  {
    id: 'photo-2',
    type: 'photo',
    image: '/images/perks/tribe-photo-2.jpg',
    alt: 'Product management cohort teardown workshop',
  },
  {
    id: 'purple-1',
    type: 'purple-quote',
    title: 'I actually\nbuild now',
    align: 'top',
  },
  {
    id: 'photo-3',
    type: 'photo',
    image: '/images/perks/tribe-photo-3.jpg',
    alt: 'Product builders offline meetup session',
  },
  {
    id: 'yellow-2',
    type: 'yellow-quote',
    title: 'Promoted\nwithin the\nyear',
    align: 'bottom',
  },
  {
    id: 'photo-4',
    type: 'photo',
    image: '/images/039_photo-1.40e9adf3.jpg',
    alt: 'Airtribe community immersion gathering',
  },
  {
    id: 'violet-1',
    type: 'violet-quote',
    title: 'I actually\nbuild now',
    align: 'top',
  },
  {
    id: 'photo-5',
    type: 'photo',
    image: '/buildcon.e33afc6a.webp',
    alt: 'Cohort builders conference and meetup',
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

  // Responsive dimensions for orbital ring and enlarged cards
  const [dimensions, setDimensions] = useState({
    radiusX: 560,
    radiusZ: 230,
    cardWidth: 305,
    cardHeight: 355,
    centerXOffset: -34, // Positioned slightly to the left of the page per user instruction
  });

  const updateDimensions = useCallback(() => {
    if (typeof window !== 'undefined') {
      const width = window.innerWidth;
      if (width < 640) {
        setDimensions({
          radiusX: 190,
          radiusZ: 90,
          cardWidth: 200,
          cardHeight: 250,
          centerXOffset: -12,
        });
      } else if (width < 1024) {
        setDimensions({
          radiusX: 360,
          radiusZ: 150,
          cardWidth: 250,
          cardHeight: 300,
          centerXOffset: -20,
        });
      } else if (width < 1280) {
        setDimensions({
          radiusX: 500,
          radiusZ: 210,
          cardWidth: 285,
          cardHeight: 335,
          centerXOffset: -28,
        });
      } else {
        setDimensions({
          radiusX: 560,
          radiusZ: 230,
          cardWidth: 305,
          cardHeight: 355,
          centerXOffset: -34,
        });
      }
    }
  }, []);

  useEffect(() => {
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [updateDimensions]);

  // Gentle, slow continuous rotation around central vertical axis (left to right across front)
  useEffect(() => {
    const loop = (currentTime: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = currentTime;
      }
      const delta = (currentTime - lastTimeRef.current) / 1000;
      lastTimeRef.current = currentTime;

      if (!isHovered && !isDragging) {
        // Smooth drift (~4.2 degrees per second)
        setRotation((prev) => (prev + delta * 4.2) % 360);
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
    const newRot = (dragStartRotRef.current + deltaX * 0.22) % 360;
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
    <section className="bg-black text-white pt-16 sm:pt-24 pb-20 sm:pb-28 relative overflow-hidden border-t border-[#232328]">
      {/* Container constrained strictly between the two guide lines */}
      <div className="max-w-[1440px] w-full mx-auto border-x border-[#232328] relative px-4 sm:px-8 flex flex-col items-center justify-center">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-zinc-400 font-semibold mb-3">
            A COMMUNITY FOR YOU TO THRIVE
          </p>
          <h2 className="font-editorial text-[36px] sm:text-[48px] md:text-[54px] text-white font-normal leading-tight tracking-tight">
            Building is better with peers
          </h2>
        </div>

        {/* 3D Cylindrical Orbit Carousel Stage - Pure Layered Stacking without 3D polygon clipping */}
        <div
          ref={containerRef}
          className="relative w-full h-[420px] sm:h-[480px] lg:h-[520px] flex items-center justify-center cursor-grab active:cursor-grabbing select-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerUp}
          style={{ isolation: 'isolate' }}
        >
          {carouselCards.map((card, i) => {
            // Angle around central vertical axis
            const cardAngle = (rotation + (i * 360) / numCards) % 360;
            const rad = (cardAngle * Math.PI) / 180;

            // Coordinates on horizontal ellipse / cylinder:
            // Shifted slightly to the left per user instruction
            const x = Math.sin(rad) * dimensions.radiusX + dimensions.centerXOffset;
            const zNorm = Math.cos(rad); // -1 (back) to +1 (front)

            // Scale: Front is full size (1.02), Back is smaller (~0.52)
            const normalizedZ = (zNorm + 1) / 2; // 0 (back) to 1 (front)
            const scale = 0.52 + 0.50 * normalizedZ;

            // High-resolution Z-Index (0 to 1000):
            // In a flat composite context, CSS zIndex strictly determines painting order.
            // Cards in front are ALWAYS painted completely on top of cards behind them,
            // with 0% polygon intersection, 0% z-fighting, and no cutting into one another.
            const zIndex = Math.round((zNorm + 1) * 500);

            // Opacity: Front cards 1.0, Back cards recede with depth (~0.55)
            const opacity = 0.55 + 0.45 * normalizedZ;

            // Convex outward curvature:
            // Handled via local card perspective so each card curves outward naturally
            // without intersecting into adjacent planes in a shared 3D depth buffer.
            const rotateY = Math.sin(rad) * 28;

            return (
              <div
                key={card.id}
                className="absolute left-1/2 top-1/2 rounded-2xl overflow-hidden shadow-2xl transition-transform duration-75 select-none pointer-events-none"
                style={{
                  width: `${dimensions.cardWidth}px`,
                  height: `${dimensions.cardHeight}px`,
                  transform: `translate(calc(-50% + ${x}px), -50%) scale(${scale}) perspective(1000px) rotateY(${rotateY}deg)`,
                  zIndex,
                  opacity,
                  transformOrigin: 'center center',
                  willChange: 'transform, opacity',
                }}
              >
                {/* Yellow Quote Card */}
                {card.type === 'yellow-quote' && (
                  <div className="relative w-full h-full bg-[#fde047] text-black p-6 sm:p-7 flex flex-col justify-end border border-yellow-200 overflow-hidden shadow-lg rounded-2xl">
                    <div
                      className="absolute inset-0 opacity-20 pointer-events-none bg-repeat rounded-2xl"
                      style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '7px 7px' }}
                    />
                    <p className="font-editorial text-[30px] sm:text-[34px] leading-[1.06] font-normal text-zinc-950 whitespace-pre-line relative z-10">
                      {card.title}
                    </p>
                  </div>
                )}

                {/* Coral / Red Quote Card */}
                {card.type === 'red-quote' && (
                  <div className="relative w-full h-full bg-[#f43f5e] text-white p-6 sm:p-7 flex flex-col justify-end border border-rose-400 overflow-hidden shadow-lg rounded-2xl">
                    <div
                      className="absolute inset-0 opacity-20 pointer-events-none bg-repeat rounded-2xl"
                      style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '7px 7px' }}
                    />
                    <p className="font-editorial text-[30px] sm:text-[34px] leading-[1.06] font-normal text-white whitespace-pre-line relative z-10">
                      {card.title}
                    </p>
                  </div>
                )}

                {/* Purple / Violet Quote Card (Middle) */}
                {card.type === 'purple-quote' && (
                  <div className="relative w-full h-full bg-[#7c3aed] text-white p-6 sm:p-7 flex flex-col justify-start pt-8 sm:pt-10 border border-purple-400 overflow-hidden shadow-lg rounded-2xl">
                    <div
                      className="absolute inset-0 opacity-15 pointer-events-none bg-repeat rounded-2xl"
                      style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '7px 7px' }}
                    />
                    <p className="font-editorial text-[32px] sm:text-[36px] leading-[1.06] font-normal text-white whitespace-pre-line relative z-10">
                      {card.title}
                    </p>
                  </div>
                )}

                {/* Violet Quote Card */}
                {card.type === 'violet-quote' && (
                  <div className="relative w-full h-full bg-[#8b5cf6] text-white p-6 sm:p-7 flex flex-col justify-start pt-8 sm:pt-10 border border-purple-300 overflow-hidden shadow-lg rounded-2xl">
                    <div
                      className="absolute inset-0 opacity-15 pointer-events-none bg-repeat rounded-2xl"
                      style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '7px 7px' }}
                    />
                    <p className="font-editorial text-[32px] sm:text-[36px] leading-[1.06] font-normal text-white whitespace-pre-line relative z-10">
                      {card.title}
                    </p>
                  </div>
                )}

                {/* Photo Immersion Card */}
                {card.type === 'photo' && card.image && (
                  <div className="relative w-full h-full bg-zinc-900 border border-white/20 overflow-hidden shadow-lg rounded-2xl">
                    <Image
                      src={card.image}
                      alt={card.alt || 'Airtribe cohort community'}
                      fill
                      className="object-cover rounded-2xl"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none rounded-2xl" />
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
