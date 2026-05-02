'use client'
// components/CtaStrip.tsx
import { motion } from 'framer-motion'

const ease = [0.22, 1, 0.36, 1] as const

export default function CtaStrip() {
  return (
    <div
      className="hex-bg"
      style={{
        background: 'linear-gradient(135deg,#ff9a1f 0%, #ff7a00 50%, #ff5a00 100%)',
        borderTop: '1px solid rgba(255,255,255,.25)',
        borderBottom: '1px solid rgba(121,39,0,.35)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="hex-bg" style={{ opacity: 0.16 }} />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap', position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease }}
        >
          <h2 style={{ fontFamily: 'var(--fh)', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.1, color: '#fff' }}>
            Need Emergency <span style={{ color: '#2a0f00' }}>HVAC Service?</span>
          </h2>
          <p style={{ marginTop: '10px', color: 'rgba(255,241,225,0.95)', fontSize: '16px' }}>
            We&apos;re available 24/7. Call now for fast response across the DMV area.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}
        >
          <a
            href="tel:3015262926"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              background: 'linear-gradient(135deg,#0d1e3a,#162a56)',
              color: '#fff',
              padding: '15px 30px',
              borderRadius: '4px',
              fontFamily: 'var(--fh)',
              fontSize: '15px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              textDecoration: 'none',
              boxShadow: '0 6px 22px rgba(8,17,32,.4)',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
            </svg>
            Call 301 526 2926
          </a>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              border: '2px solid rgba(255,255,255,.78)',
              color: '#fff',
              background: 'rgba(255,255,255,0.08)',
              padding: '13px 28px',
              borderRadius: '4px',
              fontFamily: 'var(--fh)',
              fontSize: '15px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Request Online
          </a>
        </motion.div>
      </div>
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg,rgba(255,255,255,.45),rgba(42,15,0,.45),rgba(255,255,255,.45))' }} />
    </div>
  )
}
