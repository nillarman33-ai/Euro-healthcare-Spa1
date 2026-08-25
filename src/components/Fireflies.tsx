import { useMemo } from 'react';

type ParticleKind = 'spark' | 'glow' | 'halo';

type Particle = {
  kind: ParticleKind;
  left: string;
  top: string;
  size: number;
  duration: string;
  delay: string;
  driftX: string;
  driftY: string;
  baseOpacity: number;
  peakOpacity: number;
  warm: number;
};

const PARTICLES: Particle[] = [
  // Large illuminating halos — corners and outer edges, these light up the background
  { kind: 'halo', left: '2%',  top: '8%',  size: 320, duration: '24s', delay: '0s',  driftX: '12px', driftY: '-10px', baseOpacity: 0.25, peakOpacity: 0.55, warm: 1 },
  { kind: 'halo', left: '94%', top: '14%', size: 280, duration: '28s', delay: '4s',  driftX: '-10px', driftY: '8px',  baseOpacity: 0.22, peakOpacity: 0.48, warm: 1 },
  { kind: 'halo', left: '6%',  top: '88%', size: 300, duration: '26s', delay: '8s',  driftX: '10px',  driftY: '-8px', baseOpacity: 0.22, peakOpacity: 0.50, warm: 1 },
  { kind: 'halo', left: '90%', top: '92%', size: 340, duration: '30s', delay: '2s',  driftX: '-9px',  driftY: '-10px', baseOpacity: 0.25, peakOpacity: 0.58, warm: 1 },

  // Medium diffused glows — mid-edges, visible golden light spots
  { kind: 'glow', left: '12%', top: '40%', size: 120, duration: '20s', delay: '3s',  driftX: '6px',  driftY: '5px',  baseOpacity: 0.20, peakOpacity: 0.50, warm: 0 },
  { kind: 'glow', left: '84%', top: '50%', size: 130, duration: '22s', delay: '6s',  driftX: '-6px', driftY: '-5px', baseOpacity: 0.20, peakOpacity: 0.48, warm: 1 },
  { kind: 'glow', left: '25%', top: '72%', size: 100, duration: '21s', delay: '10s', driftX: '5px',  driftY: '-4px', baseOpacity: 0.16, peakOpacity: 0.40, warm: 0 },
  { kind: 'glow', left: '72%', top: '28%', size: 110, duration: '23s', delay: '7s',  driftX: '-5px', driftY: '6px',  baseOpacity: 0.18, peakOpacity: 0.42, warm: 0 },

  // Small bright accent points — scattered around edges
  { kind: 'spark', left: '8%',  top: '55%', size: 6, duration: '18s', delay: '1s',  driftX: '4px',  driftY: '3px',  baseOpacity: 0.20, peakOpacity: 0.70, warm: 1 },
  { kind: 'spark', left: '20%', top: '18%', size: 5, duration: '16s', delay: '5s',  driftX: '-4px', driftY: '4px',  baseOpacity: 0.18, peakOpacity: 0.60, warm: 0 },
  { kind: 'spark', left: '78%', top: '75%', size: 6, duration: '19s', delay: '9s',  driftX: '4px',  driftY: '-3px', baseOpacity: 0.20, peakOpacity: 0.65, warm: 1 },
  { kind: 'spark', left: '96%', top: '44%', size: 5, duration: '17s', delay: '12s', driftX: '-4px', driftY: '4px',  baseOpacity: 0.18, peakOpacity: 0.55, warm: 0 },
  { kind: 'spark', left: '42%', top: '94%', size: 5, duration: '20s', delay: '4s',  driftX: '3px',  driftY: '-4px', baseOpacity: 0.16, peakOpacity: 0.50, warm: 0 },
  { kind: 'spark', left: '52%', top: '6%',  size: 6, duration: '19s', delay: '11s', driftX: '-3px', driftY: '4px',  baseOpacity: 0.18, peakOpacity: 0.60, warm: 1 },
  { kind: 'spark', left: '35%', top: '52%', size: 4, duration: '15s', delay: '14s', driftX: '3px',  driftY: '-3px', baseOpacity: 0.15, peakOpacity: 0.45, warm: 0 },
  { kind: 'spark', left: '62%', top: '62%', size: 4, duration: '18s', delay: '6s',  driftX: '-3px', driftY: '3px',  baseOpacity: 0.15, peakOpacity: 0.42, warm: 0 },
];

type Dust = {
  left: string;
  top: string;
  size: number;
  duration: string;
  delay: string;
  driftX: string;
  driftY: string;
  baseOpacity: number;
  peakOpacity: number;
};

const DUST_COUNT = 32;

function rand(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function Fireflies() {
  const dust = useMemo<Dust[]>(
    () =>
      Array.from({ length: DUST_COUNT }, () => {
        const size = rand(2, 5);
        return {
          left: `${rand(2, 96)}%`,
          top: `${rand(3, 95)}%`,
          size,
          duration: `${rand(10, 22)}s`,
          delay: `${rand(0, 14)}s`,
          driftX: `${rand(-20, 20)}px`,
          driftY: `${rand(-16, 16)}px`,
          baseOpacity: rand(0.25, 0.45),
          peakOpacity: rand(0.65, 1),
        };
      }),
    [],
  );

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[2] overflow-hidden"
      aria-hidden="true"
      style={{ contain: 'strict' }}
    >
      {/* Warm tonal depth layer with visible golden light pools */}
      <div className="footer-tonal" />

      {/* Edge-focused botanical accents */}
      <div className="footer-botanical-edge footer-botanical-tl" />
      <div className="footer-botanical-edge footer-botanical-br" />

      {/* Ambient glow layers (halos, glows, sparks) */}
      {PARTICLES.map((p, i) => (
        <span
          key={`p-${i}`}
          className={`ambient-${p.kind}`}
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.baseOpacity,
            animationDuration: p.duration,
            animationDelay: p.delay,
            ['--drift-x' as string]: p.driftX,
            ['--drift-y' as string]: p.driftY,
            ['--peak' as string]: p.peakOpacity,
            ['--base' as string]: p.baseOpacity,
            ['--warm' as string]: p.warm ? '1' : '0',
          }}
        />
      ))}

      {/* Tiny floating champagne-gold dust particles */}
      {dust.map((d, i) => (
        <span
          key={`d-${i}`}
          className="ambient-dust"
          style={{
            left: d.left,
            top: d.top,
            width: `${d.size}px`,
            height: `${d.size}px`,
            opacity: d.baseOpacity,
            animationDuration: d.duration,
            animationDelay: d.delay,
            ['--drift-x' as string]: d.driftX,
            ['--drift-y' as string]: d.driftY,
            ['--peak' as string]: d.peakOpacity,
            ['--base' as string]: d.baseOpacity,
          }}
        />
      ))}
    </div>
  );
}
