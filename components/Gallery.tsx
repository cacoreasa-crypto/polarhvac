'use client'
// components/Gallery.tsx
import Image from 'next/image'
import { motion } from 'framer-motion'
import FadeIn from '@/components/FadeIn'
import { GalleryItems } from '@/lib/data'

const ease = [0.22, 1, 0.36, 1] as const

const galleryIcons = [
  <path key="h" d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />,
  <>
    <path key="l1" d="M12 2L2 7l10 5 10-5-10-5z" />
    <path key="l2" d="M2 17l10 5 10-5M2 12l10 5 10-5" />
  </>,
  <>
    <rect key="g" x="3" y="3" width="18" height="18" rx="2" />
    <path key="g2" d="M3 9h18M9 21V9" />
  </>,
  <path key="f" d="M12 22c-4.97 0-8-3.86-8-7 0-5 8-13 8-13s8 8 8 13c0 3.14-3.03 7-8 7z" />,
  <>
    <path key="a1" d="M5 12h14" />
    <path key="a2" d="M12 5l7 7-7 7" />
  </>,
  <>
    <rect key="lk" x="3" y="11" width="18" height="11" rx="2" />
    <path key="lk2" d="M7 11V7a5 5 0 0 1 10 0v4" />
  </>,
]

export default function Gallery() {
  return (
    <section id="gallery" style={{ position: 'relative', overflow: 'hidden', background: 'var(--navy)' }}>
      <div className="hex-bg" />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '110px 48px' }}>
        <FadeIn>
          <div
            style={{
              fontFamily: 'var(--fh)',
              fontSize: '11px',
              fontWeight: 700,
              color: 'var(--ice)',
              letterSpacing: '4px',
              textTransform: 'uppercase',
              marginBottom: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <span style={{ display: 'block', width: '30px', height: '2px', background: 'linear-gradient(90deg,var(--orange),var(--ice))' }} />
            Our Work
          </div>
          <h2 style={{ fontFamily: 'var(--fh)', fontSize: 'clamp(36px,4vw,58px)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1 }}>
            Project <span style={{ color: 'var(--ice)' }}>Gallery</span>
          </h2>
          <p style={{ marginTop: '16px', maxWidth: '640px', fontSize: '15px', color: 'var(--dim)', lineHeight: 1.65 }}>
            Real jobs from the Polar team across the DMV — rooftop work, startups, repairs, and equipment we stand behind.
          </p>
        </FadeIn>

        <div
          className="gallery-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            gridTemplateRows: 'repeat(2,230px)',
            gap: '14px',
            marginTop: '48px',
          }}
        >
          {GalleryItems.map((item, i) => (
            <motion.div
              key={item.image}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.72, delay: i * 0.07, ease }}
              viewport={{ once: true, margin: '-50px' }}
              whileHover={{ scale: 1.02 }}
              style={{
                borderRadius: '8px',
                overflow: 'hidden',
                position: 'relative',
                background: 'var(--navy3)',
                border: '1px solid rgba(255,255,255,.08)',
                cursor: 'default',
                ...(i === 0 ? { gridRow: 'span 2' } : {}),
                ...(i === 5 ? { gridRow: 'span 2' } : {}),
              }}
            >
              <Image
                src={item.image}
                alt={`${item.label} — ${item.location}`}
                fill
                sizes="(max-width: 900px) 100vw, 33vw"
                style={{ objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.15) 45%, transparent 70%)',
                  pointerEvents: 'none',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '14px',
                  right: '14px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(10,22,40,0.55)',
                  border: '1px solid rgba(255,255,255,.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={item.type === 'heat' ? 'var(--orange)' : 'var(--ice)'} strokeWidth="1.2">
                  {galleryIcons[i]}
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
