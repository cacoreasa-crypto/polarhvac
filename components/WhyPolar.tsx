'use client'
// components/WhyPolar.tsx
// Apple-style sticky scroll with sequential panel reveal + polar-themed parallax background
import { useRef, useState } from 'react'
import Image from 'next/image'
import { useMotionValueEvent, useScroll } from 'framer-motion'
import { WhyPanels } from '@/lib/data'

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value))
}

/** Half-ice / half-flame droplet for “rain” layer */
function FireIceDroplet({ size, gradId }: { size: number; gradId: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden style={{ display: 'block' }}>
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#00d4ff" />
          <stop offset="42%" stopColor="#7ee8ff" />
          <stop offset="58%" stopColor="#ffb04a" />
          <stop offset="100%" stopColor="#ff5500" />
        </linearGradient>
      </defs>
      {/* Left reads “ice”, right reads “ember / flame” */}
      <path
        fill={`url(#${gradId})`}
        d="M16 3c-1.2 2.2-6 9.2-6 15.2 0 4.6 2.7 7.8 6 7.8s6-3.2 6-7.8c0-6-4.8-13-6-15.2z"
      />
      <path fill="rgba(255,255,255,0.35)" d="M11 14h5v1.2h-5z" opacity="0.6" />
    </svg>
  )
}

const FIRE_ICE_RAIN_SPECS = Array.from({ length: 34 }, (_, i) => ({
  left: ((i * 41.7 + (i % 5) * 13.1) % 86) + 4,
  size: 11 + (i % 7) * 2.8,
  speed: 0.72 + (i % 11) * 0.065,
  phase: ((i * 17.3) % 100) / 100,
  wobbleAmp: 0.35 + (i % 6) * 0.12,
  rot: (i * 47) % 360,
}))

/** Decorative polar atmosphere + scroll-driven ice/flame “rain” (mountains stay calm) */
function PolarScrollBackdrop({ progress }: { progress: number }) {
  const drift = progress * 48
  const rise = progress * -32

  return (
    <div
      aria-hidden
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      {/* Cold radial glow + deep navy */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `
            radial-gradient(ellipse 90% 70% at 50% 0%, rgba(0, 212, 255, 0.12) 0%, transparent 55%),
            radial-gradient(ellipse 60% 50% at 85% 60%, rgba(244, 124, 32, 0.06) 0%, transparent 50%),
            linear-gradient(180deg, #0a1628 0%, #0d1e3a 40%, #0a1628 100%)
          `,
        }}
      />
      <div className="hex-bg" style={{ opacity: 0.85 }} />

      {/* Soft snow / ice particles */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.35,
          backgroundImage: `
            radial-gradient(circle at 12% 22%, rgba(255,255,255,0.14) 0, transparent 1.5px),
            radial-gradient(circle at 78% 18%, rgba(255,255,255,0.1) 0, transparent 1.2px),
            radial-gradient(circle at 44% 38%, rgba(0,212,255,0.12) 0, transparent 2px),
            radial-gradient(circle at 88% 55%, rgba(255,255,255,0.08) 0, transparent 1px),
            radial-gradient(circle at 22% 72%, rgba(255,255,255,0.06) 0, transparent 1.3px)
          `,
          backgroundSize: '280px 280px',
          transform: `translateY(${drift * 0.4}px)`,
        }}
      />

      {/* Polar bear silhouette — abstract, very subtle, parallax */}
      <svg
        viewBox="0 0 320 280"
        preserveAspectRatio="xMidYMax meet"
        style={{
          position: 'absolute',
          right: '-4%',
          bottom: '10%',
          width: 'min(48vw, 380px)',
          height: 'auto',
          opacity: 0.08,
          transform: `translateY(${rise * 0.35}px) translateX(${drift * 0.15}px)`,
        }}
      >
        <defs>
          <linearGradient id="whyPolarBearGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e8f4ff" />
            <stop offset="100%" stopColor="#1a6fd4" />
          </linearGradient>
        </defs>
        <ellipse cx="170" cy="200" rx="95" ry="72" fill="url(#whyPolarBearGrad)" />
        <circle cx="200" cy="130" r="48" fill="url(#whyPolarBearGrad)" />
        <ellipse cx="128" cy="185" rx="38" ry="28" fill="url(#whyPolarBearGrad)" />
      </svg>

      {/* Distant mountain ridge — static, no scroll pan */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          width: '100%',
          bottom: 0,
          height: '44%',
          opacity: 0.38,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <svg viewBox="0 0 1600 360" preserveAspectRatio="xMidYMax slice" style={{ width: '100%', height: '100%', display: 'block' }}>
          <defs>
            <linearGradient id="whyPolarMgFar" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1f3a6e" />
              <stop offset="100%" stopColor="#0a1628" />
            </linearGradient>
          </defs>
          <polygon points="0,360 220,120 420,220 620,80 820,260 1020,40 1220,200 1420,90 1600,160 1600,360" fill="url(#whyPolarMgFar)" />
          <polygon points="0,360 280,180 480,260 680,140 880,280 1080,120 1280,240 1480,150 1600,200 1600,360" fill="#050c18" opacity="0.88" />
        </svg>
      </div>

      {/* Foreground mountain range — static */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          width: '100%',
          bottom: 0,
          height: '40%',
          opacity: 0.62,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <svg viewBox="0 0 1440 320" preserveAspectRatio="xMidYMax slice" style={{ width: '100%', height: '100%', display: 'block' }}>
          <defs>
            <linearGradient id="whyPolarMg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a3060" />
              <stop offset="100%" stopColor="#0a1628" />
            </linearGradient>
            <linearGradient id="whyPolarSnow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(210,235,255,0.35)" />
              <stop offset="100%" stopColor="rgba(10,22,40,0)" />
            </linearGradient>
          </defs>
          <polygon points="0,320 180,40 360,160 540,20 720,200 900,0 1080,150 1260,60 1440,120 1440,320" fill="url(#whyPolarMg)" />
          <polygon points="0,320 240,140 420,220 600,80 780,240 960,100 1140,200 1320,110 1440,180 1440,320" fill="#071018" opacity="0.92" />
          <polygon points="540,20 512,88 568,88" fill="url(#whyPolarSnow)" />
          <polygon points="900,0 864,78 936,78" fill="url(#whyPolarSnow)" />
        </svg>
      </div>

      {/* Ice / flame droplets — fall as scroll progresses through this section */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
          zIndex: 1,
        }}
      >
        {FIRE_ICE_RAIN_SPECS.map((spec, i) => {
          const t = (progress * spec.speed * 1.25 + spec.phase) % 1
          const topPct = `${(-14 + t * 128).toFixed(3)}%`
          const leftPct = `${spec.left.toFixed(3)}%`
          const wobble = `${(Math.sin(progress * Math.PI * 2.4 + i * 0.55) * spec.wobbleAmp).toFixed(6)}vw`
          const rotation = `${(spec.rot + progress * 55).toFixed(3)}deg`
          const opacity = Number((0.18 + (i % 5) * 0.06).toFixed(2))
          const gradId = `whyPolarRainGrad-${i}`
          const glow = i % 3 === 0
            ? 'drop-shadow(rgba(0, 212, 255, 0.35) 0px 0px 6px)'
            : 'drop-shadow(rgba(255, 85, 0, 0.22) 0px 0px 5px)'
          return (
            <div
              key={i}
              suppressHydrationWarning
              style={{
                position: 'absolute',
                left: leftPct,
                top: topPct,
                transform: `translateX(${wobble}) rotate(${rotation})`,
                opacity,
                filter: glow,
              }}
            >
              <FireIceDroplet size={spec.size} gradId={gradId} />
            </div>
          )
        })}
      </div>

      {/* Ice rim accent */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '3px',
          background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.45), rgba(244,124,32,0.35), transparent)',
          opacity: 0.9,
        }}
      />
    </div>
  )
}

function Panel({ panel, progress, index, total }: {
  panel: typeof WhyPanels[0]
  progress: number
  index: number
  total: number
}) {
  const segment = 1 / total
  const center = (index + 0.5) * segment
  const distance = Math.abs(progress - center) / (segment * 0.7)
  const opacity = clamp(1 - distance, 0, 1)
  const y = (1 - opacity) * 36
  const scale = 0.95 + opacity * 0.05

  return (
    <div
      style={{
        position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
        opacity, pointerEvents: opacity > 0.45 ? 'auto' : 'none',
        transition: 'opacity 220ms linear',
        zIndex: 1,
      }}
    >
      <div
        className="why-polar-panel-grid"
        style={{
          maxWidth: '1200px', width: '100%', padding: '0 48px',
          display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center',
          transform: `translateY(${y}px) scale(${scale})`,
          transition: 'transform 220ms linear',
        }}
      >
        {/* Ghost number */}
        <div style={{
          position: 'absolute', top: '50%', left: '48px', transform: 'translateY(-50%)',
          fontFamily: 'var(--fh)', fontSize: '140px', fontWeight: 900, lineHeight: 1,
          color: 'rgba(0,212,255,0.05)', letterSpacing: '-4px', pointerEvents: 'none',
        }}>
          {panel.num}
        </div>

        {/* Text */}
        <div style={{ position: 'relative' }}>
          <div style={{ fontFamily: 'var(--fh)', fontSize: '11px', fontWeight: 700, color: 'var(--ice)', letterSpacing: '4px', textTransform: 'uppercase', marginBottom: '12px' }}>
            {panel.label}
          </div>
          <h2 style={{ fontFamily: 'var(--fh)', fontSize: 'clamp(36px,4vw,58px)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1, marginBottom: '20px' }}>
            {panel.title}<br />
            <span style={{ color: 'var(--orange)' }}>{panel.titleHighlight}</span>
          </h2>
          <p style={{ fontSize: '17px', color: 'var(--dim)', lineHeight: 1.7 }}>{panel.body}</p>
        </div>

        {/* Photo + caption */}
        <div
          className="polar-photo-order"
          style={{
            borderRadius: '12px',
            overflow: 'hidden',
            position: 'relative',
            aspectRatio: '4/3',
            background: 'var(--navy3)',
            border: '1px solid rgba(255,255,255,.1)',
            boxShadow: '0 24px 60px rgba(0,0,0,.35), 0 0 0 1px rgba(0,212,255,.08) inset',
          }}
        >
          <Image
            src={panel.imageSrc}
            alt={panel.visual}
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
            className="object-cover"
            style={{ objectFit: 'cover' }}
            priority={index === 0}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(10,22,40,0.88) 0%, rgba(10,22,40,0.2) 40%, transparent 65%)',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: '16px 18px',
              display: 'flex',
              alignItems: 'flex-end',
              gap: '12px',
              pointerEvents: 'none',
            }}
          >
            <div
              style={{
                flexShrink: 0,
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(0,212,255,0.12)',
                border: '1px solid rgba(0,212,255,0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--ice)" strokeWidth="1.2">
                {panel.iconType === 'clock' && <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>}
                {panel.iconType === 'shield' && <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />}
                {panel.iconType === 'sun' && <><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></>}
              </svg>
            </div>
            <p
              style={{
                margin: 0,
                fontFamily: 'var(--fb)',
                fontSize: '13px',
                color: 'rgba(240,244,255,0.92)',
                lineHeight: 1.45,
                letterSpacing: '0.02em',
              }}
            >
              {panel.visual}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function WhyPolar() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const [progress, setProgress] = useState(0)

  useMotionValueEvent(scrollYProgress, 'change', latest => {
    setProgress(clamp(latest, 0, 1))
  })

  return (
    <section
      ref={ref}
      id="why"
      style={{
        minHeight: '300vh',
        position: 'relative',
        background: 'var(--navy)',
      }}
    >
      <div
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <PolarScrollBackdrop progress={progress} />
          {WhyPanels.map((panel, i) => (
            <Panel key={i} panel={panel} progress={progress} index={i} total={WhyPanels.length} />
          ))}
        </div>
      </div>
    </section>
  )
}
