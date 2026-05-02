'use client'
// components/Hero.tsx
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Stats } from '@/lib/data'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
})

const scaleIn = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.82 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 1, delay, ease: [0.22, 1, 0.36, 1] as const },
})

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const sfRef = useRef<HTMLDivElement>(null)

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize()
    window.addEventListener('resize', resize, { passive: true })

    type Particle = { x: number; y: number; vx: number; vy: number; r: number; a: number; col: string }
    const pts: Particle[] = Array.from({ length: 70 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.4,
      a: Math.random() * 0.35 + 0.08,
      col: Math.random() > 0.7 ? '244,124,32' : '0,212,255',
    }))

    let raf: number
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
          p.x = Math.random() * canvas.width; p.y = Math.random() * canvas.height
        }
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.col},${p.a})`; ctx.fill()
      })
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y, d = Math.sqrt(dx * dx + dy * dy)
        if (d < 100) {
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y)
          ctx.strokeStyle = `rgba(0,212,255,${0.055 * (1 - d / 100)})`; ctx.lineWidth = 0.5; ctx.stroke()
        }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  // Snowflakes
  useEffect(() => {
    const container = sfRef.current
    if (!container) return
    const syms = ['❄', '❅', '❆', '·']
    for (let i = 0; i < 24; i++) {
      const f = document.createElement('div')
      f.className = 'sf-flake'
      const s = Math.random() * 10 + 7
      f.textContent = syms[Math.floor(Math.random() * syms.length)]
      f.style.cssText = `left:${Math.random() * 100}%;font-size:${s}px;opacity:${Math.random() * 0.35 + 0.08};animation-duration:${Math.random() * 13 + 8}s;animation-delay:${Math.random() * 10}s`
      container.appendChild(f)
    }
  }, [])

  return (
    <section id="home" style={{ minHeight: '100vh', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      {/* Backgrounds */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 80% 80% at 30% 40%,#162a56 0%,#0a1628 65%)' }} />
      <div className="hex-bg" />
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }} />
      <div ref={sfRef} style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 1 }} />
      <div className="pulse-glow" style={{ position: 'absolute', top: '10%', right: 0, width: '700px', height: '700px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(244,124,32,.07) 0%,rgba(0,212,255,.04) 50%,transparent 70%)', pointerEvents: 'none' }} />

      {/* Mountains */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%', pointerEvents: 'none' }}>
        <svg viewBox="0 0 1440 400" preserveAspectRatio="xMidYMax slice" style={{ width: '100%', height: '100%' }}>
          <defs>
            <linearGradient id="mg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#1a3060" />
              <stop offset="100%" stopColor="#0a1628" />
            </linearGradient>
          </defs>
          <polygon points="0,400 160,70 340,190 510,30 700,210 860,5 1030,170 1210,55 1390,150 1440,110 1440,400" fill="url(#mg)" opacity=".55" />
          <polygon points="0,400 220,190 420,280 590,115 770,260 930,95 1110,220 1290,135 1440,195 1440,400" fill="#0a1628" opacity=".9" />
          <polygon points="510,30 482,95 538,95" fill="rgba(210,235,255,.18)" />
          <polygon points="860,5 824,76 896,76" fill="rgba(210,235,255,.22)" />
          <polygon points="1210,55 1177,118 1243,118" fill="rgba(210,235,255,.14)" />
        </svg>
      </div>

      {/* Main content */}
      <div style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '40px', maxWidth: '1200px', width: '100%', padding: '110px 48px 140px' }}>

        {/* Text */}
        <div>
          <motion.div {...fadeUp(0)} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(26,111,212,.12)', border: '1px solid rgba(0,212,255,.25)', borderRadius: '100px', padding: '6px 16px', fontFamily: 'var(--fh)', fontSize: '12px', fontWeight: 600, color: 'var(--ice)', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px' }}>
            <span className="dot-blink" style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--ice)', display: 'block' }} />
            Serving Bowie, MD &amp; DMV Area
          </motion.div>

          <motion.h1 {...fadeUp(0.1)} style={{ fontFamily: 'var(--fh)', fontSize: 'clamp(52px,6.5vw,92px)', fontWeight: 900, lineHeight: 0.95, textTransform: 'uppercase', letterSpacing: '-1px' }}>
            Expert<br />
            <span style={{ color: 'var(--ice)' }}>Heating &amp;</span><br />
            <span style={{ color: 'var(--orange)' }}>Cooling</span><br />
            Solutions
          </motion.h1>

          <motion.p {...fadeUp(0.2)} style={{ marginTop: '18px', fontSize: '17px', color: 'var(--dim)', lineHeight: 1.65, maxWidth: '480px' }}>
            Professional HVAC installation, repair &amp; maintenance for residential &amp; commercial properties. Licensed, insured &amp; trusted across Maryland, Virginia &amp; DC.
          </motion.p>

          <motion.div {...fadeUp(0.3)} style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '32px', flexWrap: 'wrap' }}>
            <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'linear-gradient(135deg,var(--orange),var(--fire))', color: '#fff', padding: '15px 30px', borderRadius: '4px', fontFamily: 'var(--fh)', fontSize: '15px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none', boxShadow: '0 4px 20px rgba(244,124,32,.35)' }}>
              Get Free Estimate
            </a>
            <a href="#services" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', border: '2px solid rgba(0,212,255,.4)', color: 'var(--ice)', padding: '13px 28px', borderRadius: '4px', fontFamily: 'var(--fh)', fontSize: '15px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none' }}>
              Our Services →
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.4)} style={{ display: 'flex', alignItems: 'center', gap: '14px', marginTop: '24px' }}>
            <div className="phone-ring" style={{ width: '44px', height: '44px', minWidth: '44px', borderRadius: '50%', background: 'linear-gradient(135deg,var(--orange),var(--fire))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" /></svg>
            </div>
            <div>
              <small style={{ display: 'block', fontSize: '10px', color: 'var(--dim)', letterSpacing: '2px', textTransform: 'uppercase', fontFamily: 'var(--fh)' }}>Call us 24/7</small>
              <a href="tel:3015262926" style={{ fontFamily: 'var(--fh)', fontSize: '28px', fontWeight: 800, color: 'var(--white)', textDecoration: 'none', letterSpacing: '1px' }}>301 526 2926</a>
            </div>
          </motion.div>
        </div>

        {/* Logo side */}
        <motion.div {...scaleIn(0.2)} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
          <div className="ring-spin" style={{ position: 'absolute', width: '440px', height: '440px', borderRadius: '50%', border: '1px solid rgba(0,212,255,.12)' }} />
          <Image
            src="/LogoPolar.png"
            alt="Polar HVAC Services"
            width={370}
            height={370}
            className="logo-float"
            style={{ filter: 'drop-shadow(0 20px 60px rgba(0,212,255,.28)) drop-shadow(0 0 80px rgba(244,124,32,.18))', maxWidth: '85vw' }}
            priority
          />
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div {...fadeUp(0.6)} style={{ position: 'absolute', bottom: '36px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '44px', zIndex: 2 }}>
        {Stats.map((s, i) => (
          <div key={i} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--fh)', fontSize: '34px', fontWeight: 900, color: 'var(--ice)', lineHeight: 1 }}>
              {s.value}{s.suffix}
            </div>
            <div style={{ fontSize: '10px', color: 'var(--dim)', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '4px' }}>{s.label}</div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
