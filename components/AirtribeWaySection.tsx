'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';

interface CardStage {
  num: string;
  body: string;
  title1: string;
  title2: string;
  bgColor: string;
  texture: string;
}

const stages: CardStage[] = [
  {
    num: '01',
    body: "Learn live from practitioners who've spent years building (and unlearning) at the companies you know.",
    title1: 'Live interactive',
    title2: 'sessions',
    bgColor: '#00764a',
    texture: '/card-texture.5f0cab6b.webp',
  },
  {
    num: '02',
    body: 'Every module ends with a project. You learn it, then you build it, before you move on.',
    title1: 'Hands-on',
    title2: 'projects',
    bgColor: '#ff725a',
    texture: '/card-texture-coral.87c40aa7.webp',
  },
  {
    num: '03',
    body: 'Join 40,000+ builders who ship. Peer reviews, in-person meetups, and a network that outlasts the program.',
    title1: 'Active community to',
    title2: 'help you grow',
    bgColor: '#3580f9',
    texture: '/card-texture.5f0cab6b.webp',
  },
];

// Easing and clamp helpers
const easeOutCubic = (x: number): number => 1 - Math.pow(1 - x, 3);
const clamp = (val: number, min: number, max: number): number => Math.min(Math.max(val, min), max);
const smoothstepEase = (e: number): number => e * e * (3 - 2 * e);

// Video keyframe milestones (starts at 2.8s to omit raw warmup finger wiggles)
const videoKeyframes = [
  [0.0, 2.8],
  [0.22, 2.8],
  [0.44, 6.4],
  [0.62, 9.6],
  [0.82, 13.3],
  [1.0, 14.0],
];

function getTargetVideoTime(p: number): number {
  for (let i = 1; i < videoKeyframes.length; i++) {
    const [p0, t0] = videoKeyframes[i - 1];
    const [p1, t1] = videoKeyframes[i];
    if (p <= p1) {
      const frac = (p - p0) / (p1 - p0);
      const ease = frac * frac * (3 - 2 * frac);
      return t0 + (t1 - t0) * ease;
    }
  }
  return 14.0;
}

// WebGL2 Shaders
const VERTEX_SHADER = `#version 300 es
in vec2 a;
void main() {
  gl_Position = vec4(a, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = `#version 300 es
precision highp float;
uniform sampler2D uInk;
uniform vec2 uRes;
uniform float uDpr;
uniform vec4 uSlot;
uniform vec2 uFeather;
uniform vec3 uPaper, uBand, uAccA, uAccB;
uniform float uWipe, uHasInk;
uniform float uCell;
uniform float uPattern;
uniform float uMix, uGamma, uFill, uEdge;
uniform vec4 uDot;
uniform vec2 uField;
uniform vec4 uReach;
uniform vec3 uArm;
uniform float uStageFade;
uniform vec4 uAppear;
uniform vec3 uOrigin;
uniform float uSweep;
out vec4 o;

const float INK_LO = 0.035;
const float GAP = 16.0;
const float TOP_BLEND = 160.0;
const vec3 SPLIT = vec3(0.7826, 0.6225, 928.4);
const vec2 ARM = vec2(0.629, 0.777), PERP = vec2(-0.777, 0.629);
const float ARM_BAND = 545.0, ARM_REP = 50.0, ARM_MID = 323.0, ARM_SPREAD = 0.0007;
const float ARM_BLUR = 30.0;
const vec2 TAPS[6] = vec2[6](vec2(0.289, 0.0), vec2(-0.369, 0.338), vec2(0.056, -0.643), vec2(0.465, 0.606), vec2(-0.854, -0.151), vec2(0.808, -0.514));

float bayer2(vec2 a){ a = floor(a); return fract(dot(a, vec2(0.5, a.y * 0.75))); }
float bayer4(vec2 a){ return bayer2(0.5 * a) * 0.25 + bayer2(a); }
float bayer8(vec2 a){ return bayer4(0.5 * a) * 0.25 + bayer2(a); }
const float B4[16] = float[16](0.0, 8.0, 2.0, 10.0, 12.0, 4.0, 14.0, 6.0, 3.0, 11.0, 1.0, 9.0, 15.0, 7.0, 13.0, 5.0);
float thr4(vec2 c){ ivec2 i = ivec2(mod(c, 4.0)); return (B4[i.y * 4 + i.x] + 0.5) / 16.0; }
float thr8(vec2 c){ return bayer8(mod(c, 8.0)) + 0.5 / 64.0; }

float screen3(vec2 c){
  int x = int(mod(c.x, 3.0)), y = int(mod(c.y, 3.0));
  const float T[9] = float[9](0.0, 1.0, 3.0, 2.0, 5.0, 7.0, 4.0, 8.0, 6.0);
  return (T[y * 3 + x] + 0.5) / 9.0;
}

vec2 take(vec2 q, vec2 ts, float pw){
  if (q.x < 0.0 || q.y < 0.0 || q.x > pw || q.y > ts.y) return vec2(0.0);
  float u = clamp(q.x, 0.5, pw - 0.5);
  float v = q.y / ts.y;
  return vec2(texture(uInk, vec2(u / ts.x, v)).r, texture(uInk, vec2((u + pw + GAP) / ts.x, v)).r);
}

float tone(vec2 k){
  return max(pow(clamp((k.x - INK_LO) / (1.0 - INK_LO), 0.0, 1.0), uGamma), uFill * k.y);
}

float hash12(vec2 p){
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float vnoise(vec2 x){
  vec2 i = floor(x), f = fract(x), u = f * f * (3.0 - 2.0 * f);
  float a = hash12(i), b = hash12(i + vec2(1, 0)), c = hash12(i + vec2(0, 1)), d = hash12(i + vec2(1, 1));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
float fbm(vec2 x){
  return 0.45 * vnoise(x) + 0.27 * vnoise(x * 2.03 + 7.1) + 0.18 * vnoise(x * 4.1 + 1.7) + 0.1 * vnoise(x * 8.3 + 4.4);
}

void main(){
  vec2 f = vec2(gl_FragCoord.x, uRes.y - gl_FragCoord.y);
  vec2 q = f / uDpr;
  vec2 S = uRes / uDpr;
  float H = S.y;

  float thr = (1.0 - uEdge) * (1.0 - q.y / H) + uEdge * bayer8(mod(f, 8.0));
  vec3 acc = uWipe > thr ? uAccB : uAccA;

  float rev = 1.0, cell = uCell;
  vec2 qs = q;
  bool entering = uAppear.x > -0.5;
  float spark = uOrigin.z > 0.0 ? smoothstep(uOrigin.z, 0.0, distance(q, uOrigin.xy)) : 0.0;
  if (entering) {
    float d = (uSweep < 0.5 ? distance(q, uOrigin.xy) : H - q.y) + (fbm(q / 46.0) - 0.5) * 90.0;
    rev = clamp((uAppear.x - d) / uAppear.y, 0.0, 1.0);
    if (spark <= 0.0) {
      cell = uCell * exp2(floor((1.0 - rev) * 3.999));
      qs = (floor(f / cell) + 0.5) * cell / uDpr;
    }
  }

  float ink = 0.0;
  vec2 uv = (qs - uSlot.xy) / uSlot.zw;
  if (uHasInk > 0.5) {
    vec2 ts = vec2(1776.0, 1604.0);
    float pw = (ts.x - GAP) * 0.5;
    vec2 tq = uv * vec2(pw, ts.y);
    float slot = uv.x >= 0.0 && uv.x <= 1.0 && uv.y >= 0.0 && uv.y <= 1.0 ? 1.0 : 0.0;
    if (uFeather.x > 0.5) slot *= smoothstep(0.0, uFeather.x, qs.x - uSlot.x);
    if (uFeather.y > 0.5) slot *= smoothstep(0.0, uFeather.y, uSlot.x + uSlot.z - qs.x);
    if (uReach == vec4(0.0) && uArm.x <= 0.0) {
      ink = tone(take(tq, ts, pw)) * slot;
    } else {
      vec2 qa = tq - uReach.xy, qb = tq - uReach.zw;
      float ma = smoothstep(4.0, -4.0, dot(qa, SPLIT.xy) - SPLIT.z);
      float a = tone(take(qa, ts, pw) * ma) * slot;
      if (uArm.x > 0.0) {
        float s = dot(qa, ARM), d = max(ARM_BAND - s, 0.0), t = dot(qa, PERP) - ARM_MID;
        vec2 qe = qa + (d + ARM_REP - abs(mod(d, 2.0 * ARM_REP) - ARM_REP)) * ARM + (t / (1.0 + ARM_SPREAD * d) - t) * PERP;
        float u = clamp((s - uArm.y + (fbm(qa / 34.0) - 0.5) * uArm.z * 0.8) / uArm.z, 0.0, 1.0);
        vec2 k = take(qe, ts, pw);
        float r = ARM_BLUR * (1.0 - u);
        if (r > 1.0) {
          for (int i = 0; i < 6; i++) k += take(qe + r * TAPS[i], ts, pw);
          k /= 7.0;
        }
        a = mix(a, tone(k * ma) * u * u * (3.0 - 2.0 * u), uArm.x);
      }
      ink = min(1.0, a + tone(take(qb, ts, pw) * smoothstep(-4.0, 4.0, dot(qb, SPLIT.xy) - SPLIT.z)) * slot);
    }
  }

  if (uStageFade > 0.5) {
    ink *= smoothstep(0.0, uStageFade, qs.x) * smoothstep(0.0, uStageFade, S.x - qs.x) * smoothstep(0.0, uStageFade, H - qs.y);
    ink *= smoothstep(0.0, mix(uStageFade * 0.5, TOP_BLEND, uArm.x), qs.y);
  }
  ink = max(ink * rev, spark);
  vec2 c = floor(f / cell);
  float bin = step(uPattern < 0.5 ? thr4(c) : uPattern < 1.5 ? thr8(c) : screen3(c), ink);
  vec3 col = mix(mix(uBand, uPaper, smoothstep(0.0, TOP_BLEND, q.y)), acc, mix(ink, bin, uMix));
  if (uDot.x <= 0.0 && !(entering && uAppear.w > 0.0)) {
    o = vec4(col, 1.0);
    return;
  }

  vec2 PITCH = vec2(uDot.z, uDot.z * 0.54);
  float best = 1e9;
  vec2 bc = vec2(0.0);
  float j0 = floor(q.y / PITCH.y + 0.5);
  for (int dj = -1; dj <= 1; dj++) {
    float j = j0 + float(dj);
    float off = mod(j, 2.0) > 0.5 ? PITCH.x * 0.5 : 0.0;
    float i0 = floor((q.x - off) / PITCH.x + 0.5);
    for (int di = -1; di <= 1; di++) {
      vec2 cand = vec2((i0 + float(di)) * PITCH.x + off, j * PITCH.y);
      float d = distance(q, cand);
      if (d < best) { best = d; bc = cand; }
    }
  }

  float core = smoothstep(uDot.y, 0.0, best);
  float mask = 1.0 - smoothstep(0.0, 0.05, ink);
  float noiseVal = fbm(bc / uField.x);
  float a = uDot.x * core * mask * smoothstep(uDot.w, 1.0, noiseVal) * smoothstep(0.0, TOP_BLEND, bc.y);
  float ring = 0.0;
  if (entering && uAppear.w > 0.0) {
    float dr = uSweep < 0.5 ? distance(bc, uOrigin.xy) : H - bc.y;
    a *= smoothstep(uAppear.z + 4.0, uAppear.z - 4.0, dr);
    float big = max(uDot.y, 0.5) * 2.4;
    ring = uAppear.w * exp(-pow((dr - uAppear.z) / 18.0, 2.0)) * smoothstep(big + 0.4, big - 0.35, best) * smoothstep(0.0, TOP_BLEND, bc.y);
  }
  col *= mix(vec3(1.0), mix(acc, acc * 0.2, 0.5 + 0.45 * core), a);
  col = mix(col, acc, ring);

  o = vec4(col, 1.0);
}
`;

export const AirtribeWaySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const [headerInView, setHeaderInView] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // WebGL State Refs
  const glRef = useRef<WebGL2RenderingContext | null>(null);
  const texRef = useRef<WebGLTexture | null>(null);
  const locsRef = useRef<Record<string, WebGLUniformLocation>>({});
  const videoUploadedRef = useRef(false);

  // Scrubbing & seeking state
  const targetTimeRef = useRef(2.8);
  const isSeekingRef = useRef(false);
  const animationFrameRef = useRef<number | null>(null);

  // Initialize WebGL2 Pipeline
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl2', {
      antialias: false,
      alpha: false,
      preserveDrawingBuffer: false,
    });
    if (!gl) {
      console.warn('WebGL2 not available');
      return;
    }
    glRef.current = gl;

    // Compile Vertex & Fragment shaders
    const createShader = (type: number, src: string) => {
      const s = gl.createShader(type);
      if (!s) throw new Error('Failed to create shader');
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        throw new Error(gl.getShaderInfoLog(s) || 'Shader error');
      }
      return s;
    };

    let prog: WebGLProgram;
    try {
      const vs = createShader(gl.VERTEX_SHADER, VERTEX_SHADER);
      const fs = createShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
      prog = gl.createProgram()!;
      gl.attachShader(prog, vs);
      gl.attachShader(prog, fs);
      gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
        throw new Error(gl.getProgramInfoLog(prog) || 'Link error');
      }
      gl.useProgram(prog);
    } catch (err) {
      console.error('[AirtribeWay WebGL]', err);
      return;
    }

    // Geometry quad
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const aLoc = gl.getAttribLocation(prog, 'a');
    gl.enableVertexAttribArray(aLoc);
    gl.vertexAttribPointer(aLoc, 2, gl.FLOAT, false, 0, 0);

    // Ink texture
    const tex = gl.createTexture();
    texRef.current = tex;
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    // Uniform locations
    const uniformNames = [
      'uInk', 'uRes', 'uDpr', 'uSlot', 'uFeather', 'uPaper', 'uBand', 'uAccA', 'uAccB', 'uWipe',
      'uHasInk', 'uCell', 'uPattern', 'uMix', 'uGamma', 'uFill', 'uEdge', 'uDot', 'uField',
      'uReach', 'uArm', 'uStageFade', 'uAppear', 'uOrigin', 'uSweep',
    ];
    locsRef.current = Object.fromEntries(
      uniformNames.map((name) => [name, gl.getUniformLocation(prog, name)!])
    );
    gl.uniform1i(locsRef.current.uInk, 0);

    return () => {
      gl.deleteTexture(tex);
      gl.deleteBuffer(buf);
      gl.deleteProgram(prog);
    };
  }, []);

  // WebGL Render Call
  const renderWebGL = useCallback(() => {
    const gl = glRef.current;
    const canvas = canvasRef.current;
    const locs = locsRef.current;
    if (!gl || !canvas) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const stageW = cw / dpr;
    const stageH = ch / dpr;

    gl.viewport(0, 0, cw, ch);
    gl.uniform2f(locs.uRes, cw, ch);
    gl.uniform1f(locs.uDpr, dpr);

    const p = scrollProgress;

    // Slot computation:
    // Sized so that hand spans across the whole container!
    // Arm originates top-left (passing behind the card) and lower hand is at bottom-right
    const A = 880 / 1604;
    const fh = stageH * 1.36;
    const fw = fh * A;
    const slotX = (stageW - fw) * 0.35; // Positioned behind left card & extending right
    const slotY = -stageH * 0.08;

    gl.uniform4f(locs.uSlot, slotX, slotY, fw, fh);
    gl.uniform2f(locs.uFeather, 150, 0);

    // Paper & Band background colors
    gl.uniform3f(locs.uPaper, 1.0, 1.0, 1.0);
    gl.uniform3f(locs.uBand, 0.98, 0.98, 0.98);

    // Stage Accent colors:
    // Stage 1: Emerald Green (#00764a -> [0.0, 0.463, 0.290])
    // Stage 2: Coral Orange (#ff725a -> [1.0, 0.447, 0.353])
    // Stage 3: Electric Blue (#3580f9 -> [0.208, 0.502, 0.976])
    const green = [0.0, 0.463, 0.290];
    const orange = [1.0, 0.447, 0.353];
    const blue = [0.208, 0.502, 0.976];

    let accA = green;
    let accB = orange;
    let wipe = 0.0;

    if (p < 0.26) {
      accA = green;
      accB = orange;
      wipe = 0.0;
    } else if (p < 0.44) {
      accA = green;
      accB = orange;
      wipe = smoothstepEase(clamp((p - 0.26) / 0.18, 0, 1));
    } else if (p < 0.62) {
      accA = orange;
      accB = blue;
      wipe = 0.0;
    } else if (p < 0.80) {
      accA = orange;
      accB = blue;
      wipe = smoothstepEase(clamp((p - 0.62) / 0.18, 0, 1));
    } else {
      accA = blue;
      accB = blue;
      wipe = 1.0;
    }

    gl.uniform3f(locs.uAccA, accA[0], accA[1], accA[2]);
    gl.uniform3f(locs.uAccB, accB[0], accB[1], accB[2]);
    gl.uniform1f(locs.uWipe, wipe);
    gl.uniform1f(locs.uHasInk, videoUploadedRef.current ? 1.0 : 0.0);

    // Dither & Outline Silhouette parameters:
    // Cell size: 1.5 device pixels
    // Pattern 0: Bayer 4x4 dither
    // Mix 0.85: 85% dither quantization -> crisp pixelated outlined look!
    // Fill 0.45: Silhouette outline
    gl.uniform1f(locs.uCell, Math.max(1, Math.round(1.5 * dpr)));
    gl.uniform1f(locs.uPattern, 0.0);
    gl.uniform1f(locs.uMix, 0.85);
    gl.uniform1f(locs.uGamma, 0.65);
    gl.uniform1f(locs.uFill, 0.45);
    gl.uniform1f(locs.uEdge, 0.5);

    // Minimalistic 45° background pixel dot lattice
    gl.uniform4f(locs.uDot, 0.42, 0.75, 7.0, 0.42);
    gl.uniform2f(locs.uField, 55.0, 0.0);
    gl.uniform1f(locs.uStageFade, 40.0);

    // CORNER-TO-CORNER REACHING MOVEMENT:
    // Upper hand starts deep in top-left corner (-X, -Y)
    // Lower hand starts deep in bottom-right corner (+X, +Y)
    // As progress goes from 0 to 0.22, l drops from 340px to 0, gliding hands to center!
    const reachProgress = clamp(p / 0.22, 0, 1);
    const l = (1 - smoothstepEase(reachProgress)) * 340.0;
    gl.uniform4f(locs.uReach, -0.629 * l, -0.777 * l, 0.992 * l, 0.124 * l);

    // Upper arm dissolution along its length
    const armProgress = clamp((p - 0.2) / 0.06, 0, 1);
    const armWhole = 1 - smoothstepEase(armProgress);
    gl.uniform3f(locs.uArm, armWhole, 760 - 580, 460);

    gl.uniform4f(locs.uAppear, -1, 1, 0, 0);
    gl.uniform3f(locs.uOrigin, 0, 0, 0);
    gl.uniform1f(locs.uSweep, 0.0);

    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }, [scrollProgress]);

  // Upload video frame to WebGL texture
  const uploadVideoTexture = useCallback(() => {
    const gl = glRef.current;
    const video = videoRef.current;
    const tex = texRef.current;
    if (!gl || !video || !tex || video.readyState < 2) return;

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, video);
    videoUploadedRef.current = true;
    renderWebGL();
  }, [renderWebGL]);

  // Canvas size sync on resize
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.max(1, Math.round(rect.width * dpr));
    canvas.height = Math.max(1, Math.round(rect.height * dpr));
    renderWebGL();
  }, [renderWebGL]);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  // Header entrance intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHeaderInView(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Video scrub loop (with seek-locking to prevent decode thrashing / stutter loops)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleSeeked = () => {
      isSeekingRef.current = false;
      uploadVideoTexture();
    };

    video.addEventListener('seeked', handleSeeked);

    const updateLoop = () => {
      if (video && video.readyState >= 2) {
        const target = targetTimeRef.current;
        const diff = Math.abs(video.currentTime - target);

        if (!isSeekingRef.current && diff > 0.035) {
          isSeekingRef.current = true;
          video.currentTime = target;
        }
      }
      animationFrameRef.current = requestAnimationFrame(updateLoop);
    };

    animationFrameRef.current = requestAnimationFrame(updateLoop);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      video.removeEventListener('seeked', handleSeeked);
    };
  }, [uploadVideoTexture]);

  // Scroll handler: computes progress and maps to video timestamps
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollableDist = rect.height - window.innerHeight;

      if (scrollableDist <= 0) return;

      const currentScroll = -rect.top;
      const progress = clamp(currentScroll / scrollableDist, 0, 1);
      setScrollProgress(progress);

      // Map to video time (starts at 2.8s)
      targetTimeRef.current = getTargetVideoTime(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Re-render WebGL when progress updates
  useEffect(() => {
    renderWebGL();
  }, [scrollProgress, renderWebGL]);

  // Active stage determination (for indicator dots)
  let activeIdx = 0;
  if (scrollProgress >= 0.70) {
    activeIdx = 2;
  } else if (scrollProgress >= 0.35) {
    activeIdx = 1;
  }

  // Cards Float-In from Below Completely Out of Frame:
  // Card 1: Settled at start; tucks upward as Card 2 arrives
  let card1Y = 0;
  let card1Scale = 1;
  let card1Opacity = 1;
  let card1Z = 30;

  if (scrollProgress >= 0.26 && scrollProgress < 0.44) {
    const t = (scrollProgress - 0.26) / 0.18;
    card1Y = -t * 26;
    card1Scale = 1 - t * 0.05;
    card1Opacity = 1 - t * 0.08;
    card1Z = 20;
  } else if (scrollProgress >= 0.44 && scrollProgress < 0.62) {
    card1Y = -26;
    card1Scale = 0.95;
    card1Opacity = 0.92;
    card1Z = 20;
  } else if (scrollProgress >= 0.62) {
    const t = clamp((scrollProgress - 0.62) / 0.18, 0, 1);
    card1Y = -26 - t * 24;
    card1Scale = 0.95 - t * 0.05;
    card1Opacity = 0.92 - t * 0.12;
    card1Z = 10;
  }

  // Card 2: Starts completely out of frame below (+100vh / 650px); floats up in parallel as color shifts to Orange
  let card2Y = 650;
  let card2Scale = 1;
  let card2Opacity = 0;
  let card2Z = 30;

  if (scrollProgress < 0.26) {
    card2Y = 650;
    card2Opacity = 0;
  } else if (scrollProgress >= 0.26 && scrollProgress < 0.44) {
    const t = clamp((scrollProgress - 0.26) / 0.18, 0, 1);
    card2Y = (1 - easeOutCubic(t)) * 650;
    card2Opacity = clamp(t * 2.2, 0, 1);
    card2Z = 30;
  } else if (scrollProgress >= 0.44 && scrollProgress < 0.62) {
    card2Y = 0;
    card2Opacity = 1;
    card2Scale = 1;
    card2Z = 30;
  } else if (scrollProgress >= 0.62) {
    const t = clamp((scrollProgress - 0.62) / 0.18, 0, 1);
    card2Y = -t * 26;
    card2Scale = 1 - t * 0.05;
    card2Opacity = 1 - t * 0.08;
    card2Z = 25;
  }

  // Card 3: Starts completely out of frame below (+100vh / 650px); floats up in parallel as color shifts to Blue
  let card3Y = 650;
  let card3Scale = 1;
  let card3Opacity = 0;
  let card3Z = 40;

  if (scrollProgress < 0.62) {
    card3Y = 650;
    card3Opacity = 0;
  } else if (scrollProgress >= 0.62 && scrollProgress < 0.80) {
    const t = clamp((scrollProgress - 0.62) / 0.18, 0, 1);
    card3Y = (1 - easeOutCubic(t)) * 650;
    card3Opacity = clamp(t * 2.2, 0, 1);
    card3Z = 40;
  } else {
    card3Y = 0;
    card3Opacity = 1;
    card3Scale = 1;
    card3Z = 40;
  }

  const cardTransforms = [
    { y: card1Y, scale: card1Scale, opacity: card1Opacity, z: card1Z },
    { y: card2Y, scale: card2Scale, opacity: card2Opacity, z: card2Z },
    { y: card3Y, scale: card3Scale, opacity: card3Opacity, z: card3Z },
  ];

  return (
    <section className="w-full bg-[#ffffff] text-black relative">
      {/* Hidden Video element decoding in the background */}
      <video
        ref={videoRef}
        playsInline
        muted
        preload="auto"
        src="/hands-ink.mp4"
        className="hidden"
      />

      {/* Pinned Scroll Track */}
      <div
        ref={containerRef}
        className="relative w-full"
        style={{ height: '380vh' }}
      >
        {/* Sticky Viewport Frame with continuous left & right vertical border: max-w-[1440px] mx-auto border-x border-[#232328] */}
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#ffffff] border-b border-[#d8d8dc]">
          
          <div className="max-w-[1440px] mx-auto w-full h-full border-x border-[#232328] relative flex flex-col justify-between overflow-hidden">
            
            {/* FULL-BLEED WEBGL2 DITHER CANVAS:
                - Renders authentic pixelated outlined hands with dither stipple patterns
                - Hands move corner-to-corner (Top-Left to Bottom-Right) without distortion
                - Minimalistic 45° pixelated dot lattice background that changes color with each stage
                - Abstract wavy lines background completely removed!
            */}
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full pointer-events-none z-10"
            />

            {/* "The Airtribe way" Heading:
                Placed lower down closer to the cards
            */}
            <div
              ref={headerRef}
              className="w-full pt-14 sm:pt-18 pb-2 px-6 sm:px-12 text-center relative z-20 pointer-events-none"
            >
              <h2 className="text-[38px] sm:text-[52px] lg:text-[66px] font-normal leading-[1.0] tracking-[-0.04em] text-black flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
                {/* 'The' */}
                <span
                  className={`inline-block transition-all duration-700 ease-out transform ${
                    headerInView
                      ? 'opacity-100 translate-x-0 blur-0'
                      : 'opacity-0 -translate-x-12 blur-sm'
                  }`}
                >
                  The
                </span>

                {/* 'Airtribe' */}
                <span
                  className={`inline-block transition-all duration-700 ease-out transform font-editorial italic text-zinc-900 ${
                    headerInView
                      ? 'opacity-100 translate-x-0 blur-0'
                      : 'opacity-0 -translate-x-12 blur-sm'
                  }`}
                  style={{ transitionDelay: '140ms' }}
                >
                  Airtribe
                </span>

                {/* 'way' */}
                <span
                  className={`inline-block transition-all duration-700 ease-out transform ${
                    headerInView
                      ? 'opacity-100 translate-x-0 blur-0'
                      : 'opacity-0 -translate-x-12 blur-sm'
                  }`}
                  style={{ transitionDelay: '280ms' }}
                >
                  way
                </span>
              </h2>
            </div>

            {/* Card Stack Container:
                Cards sit on z-20 on top of the hands canvas.
                Upper arm passes behind the card cleanly into the top-left corner.
                Each card floats up in parallel from out of frame below as colors transition!
            */}
            <div className="relative z-20 w-full flex-1 px-6 sm:px-10 lg:px-16 flex items-center justify-start pb-8">
              
              <div className="w-full max-w-[440px] sm:max-w-[480px] relative">
                <div className="relative w-full h-[400px] sm:h-[430px]">
                  {stages.map((stage, idx) => {
                    const { y, scale, opacity, z } = cardTransforms[idx];

                    return (
                      <div
                        key={stage.num}
                        className="absolute inset-0 shadow-2xl p-7 sm:p-9 flex flex-col justify-between text-white overflow-hidden will-change-transform"
                        style={{
                          backgroundColor: stage.bgColor,
                          transform: `translate3d(0, ${y.toFixed(2)}px, 0) scale(${scale.toFixed(4)})`,
                          zIndex: z,
                          opacity: opacity,
                          pointerEvents: opacity > 0.5 ? 'auto' : 'none',
                          transition: 'opacity 0.2s ease-out, transform 0.08s linear',
                        }}
                      >
                        {/* Card Surface Dither Texture */}
                        <div className="absolute inset-0 pointer-events-none opacity-25 mix-blend-luminosity">
                          <Image
                            src={stage.texture}
                            alt=""
                            fill
                            className="object-cover"
                            unoptimized
                          />
                        </div>

                        {/* Top Content: Number + Body */}
                        <div className="relative z-10">
                          <span className="text-[32px] sm:text-[36px] font-bold block mb-4 tracking-wider leading-none">
                            {stage.num}
                          </span>
                          <p className="text-white/95 text-sm sm:text-base leading-relaxed max-w-sm font-normal">
                            {stage.body}
                          </p>
                        </div>

                        {/* Bottom Title: Dual Typography */}
                        <div className="relative z-10 pt-10">
                          <h3 className="text-[32px] sm:text-[40px] font-medium leading-[1.08] tracking-tight">
                            {stage.title1}{' '}
                            <span className="font-editorial italic font-normal block mt-1">
                              {stage.title2}
                            </span>
                          </h3>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Progress Indicators */}
                <div className="flex items-center gap-2 mt-6 justify-center sm:justify-start">
                  {stages.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeIdx
                          ? 'w-8 bg-zinc-800'
                          : 'w-2 bg-zinc-300'
                      }`}
                    />
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
