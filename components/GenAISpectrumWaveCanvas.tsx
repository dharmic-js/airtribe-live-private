'use client';

import React, { useEffect, useRef } from 'react';

export function GenAISpectrumWaveCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    let animationFrameId: number;
    let isDestroyed = false;

    // Load authentic spectrum wave asset
    const img = new Image();
    img.src = '/images/genai-hero-wave.webp';

    const resizeCanvas = () => {
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(rect.width * dpr);
      canvas.height = Math.round(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };

    // Initial sizing
    resizeCanvas();

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });
    resizeObserver.observe(container);

    const render = (timeMs: number) => {
      if (isDestroyed) return;

      const ctx = canvas.getContext('2d');
      if (ctx && img.complete && img.naturalWidth > 0 && canvas.width > 0 && canvas.height > 0) {
        const width = canvas.width;
        const height = canvas.height;
        ctx.clearRect(0, 0, width, height);

        // Number of vertical fin slices across the full canvas width
        const numSlices = Math.min(180, Math.max(90, Math.floor(width / 8)));
        const sliceW = width / numSlices;
        const srcSliceW = img.naturalWidth / numSlices;

        const t = timeMs * 0.001;
        const dprScale = canvas.height / 280;

        for (let i = 0; i < numSlices; i++) {
          const x = i * sliceW;
          const sx = i * srcSliceW;

          // Traveling wave phase across fins (smooth, gentle ambient pace)
          const progress = i / numSlices;
          const wavePhase = progress * Math.PI * 3.5 - t * 0.85;

          // Gentle undulating wave displacement (up and down)
          const wave = (Math.sin(wavePhase) * 13.0 + Math.cos(wavePhase * 0.65 + t * 0.35) * 4.5) * dprScale;

          // Height of this fin slice anchored at the bottom baseline
          const baseH = height * 0.90;
          const curH = Math.max(20, baseH + wave);
          const dy = height - curH;

          ctx.drawImage(
            img,
            sx,
            0,
            srcSliceW,
            img.naturalHeight,
            x,
            dy,
            sliceW + 0.6,
            curH
          );
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    img.onload = () => {
      animationFrameId = requestAnimationFrame(render);
    };

    if (img.complete) {
      animationFrameId = requestAnimationFrame(render);
    }

    return () => {
      isDestroyed = true;
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[180px] sm:h-[240px] md:h-[290px] lg:h-[340px] xl:h-[380px] flex items-end justify-center overflow-hidden pointer-events-none select-none"
    >
      <canvas
        ref={canvasRef}
        className="block w-full h-full object-contain pointer-events-none select-none"
      />
    </div>
  );
}
