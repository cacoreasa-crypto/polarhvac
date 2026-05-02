'use client'
// components/FAQ.tsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import FadeIn from '@/components/FadeIn'
import { FAQItems } from '@/lib/data'

const ease = [0.22, 1, 0.36, 1] as const

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" style={{ position: 'relative', overflow: 'hidden', background: 'var(--navy2)' }}>
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
            Questions
          </div>
          <h2 style={{ fontFamily: 'var(--fh)', fontSize: 'clamp(36px,4vw,58px)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1 }}>
            Frequently <span style={{ color: 'var(--ice)' }}>Asked</span>
          </h2>
        </FadeIn>

        <div style={{ marginTop: '56px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {FAQItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.07, ease }}
              viewport={{ once: true, margin: '-40px' }}
              style={{
                border: `1px solid ${open === i ? 'rgba(0,212,255,.28)' : 'rgba(255,255,255,.06)'}`,
                borderRadius: '6px', overflow: 'hidden',
                transition: 'border-color 0.3s',
              }}
            >
              {/* Question */}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '20px 26px', cursor: 'pointer', fontFamily: 'var(--fh)', fontSize: '17px',
                  fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.3px',
                  background: 'rgba(255,255,255,.018)', border: 'none', color: 'var(--white)',
                  textAlign: 'left', gap: '16px', transition: 'background 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,212,255,.045)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'rgba(255,255,255,.018)')}
              >
                <span>{item.question}</span>
                <div style={{
                  width: '26px', height: '26px', minWidth: '26px', borderRadius: '50%',
                  border: '2px solid rgba(0,212,255,.35)', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', background: open === i ? 'rgba(0,212,255,.12)' : 'transparent',
                  transition: 'all 0.3s', transform: open === i ? 'rotate(45deg)' : 'rotate(0)',
                }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--ice)" strokeWidth="2.5">
                    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{ padding: '0 26px 22px', fontSize: '15px', color: 'var(--dim)', lineHeight: 1.7 }}>
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
