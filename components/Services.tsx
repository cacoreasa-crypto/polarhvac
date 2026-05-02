'use client'
// components/Services.tsx
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import FadeIn from '@/components/FadeIn'
import type { ServiceItem } from '@/lib/data'
import { ACServices, HeatingServices } from '@/lib/data'

const ease = [0.22, 1, 0.36, 1] as const

function ServiceIcon({ service, stroke }: { service: ServiceItem; stroke: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="2">
      {service.icon === 'monitor' && (
        <>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path d="M8 21h8M12 17v4M7 9h10M9 12h6" />
        </>
      )}
      {service.icon === 'wrench' && <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />}
      {service.icon === 'clock' && (
        <>
          <path d="M12 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z" />
          <path d="M12 6v6l4 2" />
        </>
      )}
      {service.icon === 'layers' && (
        <>
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
        </>
      )}
      {service.icon === 'home' && (
        <>
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </>
      )}
      {service.icon === 'sun' && (
        <>
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </>
      )}
      {service.icon === 'lock' && (
        <>
          <rect x="3" y="11" width="18" height="11" rx="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </>
      )}
    </svg>
  )
}

function ServiceCard({
  service,
  type,
  onSelect,
}: {
  service: ServiceItem
  type: 'cool' | 'heat'
  onSelect: (s: ServiceItem) => void
}) {
  const isCool = type === 'cool'
  const stroke = isCool ? 'var(--ice)' : 'var(--orange)'

  const open = () => onSelect(service)

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={open}
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          open()
        }
      }}
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '16px',
        padding: '18px',
        borderRadius: '8px',
        background: 'rgba(255,255,255,.02)',
        border: '1px solid rgba(255,255,255,.08)',
        marginBottom: '10px',
        transition: 'background 0.25s, border-color 0.25s, transform 0.25s',
        cursor: 'pointer',
        outline: 'none',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement
        el.style.background = isCool ? 'rgba(0,212,255,.07)' : 'rgba(244,124,32,.07)'
        el.style.borderColor = isCool ? 'rgba(0,212,255,.28)' : 'rgba(244,124,32,.28)'
        el.style.transform = 'translateX(4px)'
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement
        el.style.background = 'rgba(255,255,255,.02)'
        el.style.borderColor = 'rgba(255,255,255,.08)'
        el.style.transform = ''
      }}
      onFocus={e => {
        const el = e.currentTarget as HTMLElement
        el.style.boxShadow = `0 0 0 2px ${isCool ? 'rgba(0,212,255,.45)' : 'rgba(244,124,32,.45)'}`
      }}
      onBlur={e => {
        (e.currentTarget as HTMLElement).style.boxShadow = 'none'
      }}
    >
      <div
        style={{
          width: '46px',
          height: '46px',
          minWidth: '46px',
          borderRadius: '50%',
          background: isCool ? 'rgba(26,111,212,.2)' : 'rgba(244,124,32,.17)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <ServiceIcon service={service} stroke={stroke} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <h3
          style={{
            fontFamily: 'var(--fh)',
            fontSize: '15px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '.5px',
            color: 'var(--white)',
            marginBottom: '6px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            flexWrap: 'wrap',
          }}
        >
          {service.title}
          <span
            style={{
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: isCool ? 'var(--ice)' : 'var(--orange)',
              border: `1px solid ${isCool ? 'rgba(0,212,255,.35)' : 'rgba(244,124,32,.35)'}`,
              borderRadius: '999px',
              padding: '3px 8px',
            }}
          >
            Details
          </span>
        </h3>
        <p style={{ fontSize: '13px', color: 'var(--dim)', lineHeight: 1.6, marginBottom: '8px' }}>{service.description}</p>
        <p style={{ fontSize: '12px', color: 'rgba(168,184,216,0.95)', lineHeight: 1.55 }}>
          <span style={{ color: 'var(--ice)', fontWeight: 600 }}>Tip:</span> {service.hint}
        </p>
      </div>
    </div>
  )
}

function ServiceModal({ service, type, onClose }: { service: ServiceItem; type: 'cool' | 'heat'; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const accent = type === 'cool' ? 'var(--ice)' : 'var(--orange)'

  return (
    <motion.div
      role="presentation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        background: 'rgba(5,10,20,0.72)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="service-modal-title"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.28, ease }}
        onClick={e => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '560px',
          maxHeight: 'min(88vh, 720px)',
          overflow: 'auto',
          borderRadius: '12px',
          background: 'linear-gradient(165deg, #112347 0%, #0a1628 100%)',
          border: '1px solid rgba(255,255,255,.1)',
          boxShadow: '0 24px 80px rgba(0,0,0,.55)',
        }}
      >
        <div
          style={{
            padding: '22px 22px 16px',
            borderBottom: '1px solid rgba(255,255,255,.08)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '16px',
          }}
        >
          <div>
            <p style={{ fontFamily: 'var(--fh)', fontSize: '10px', fontWeight: 700, letterSpacing: '3px', color: accent, textTransform: 'uppercase', marginBottom: '6px' }}>
              {type === 'cool' ? 'Cooling service' : 'Heating & indoor air'}
            </p>
            <h2 id="service-modal-title" style={{ fontFamily: 'var(--fh)', fontSize: '22px', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1.15, color: 'var(--white)' }}>
              {service.title}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            style={{
              flexShrink: 0,
              width: '40px',
              height: '40px',
              borderRadius: '8px',
              border: '1px solid rgba(255,255,255,.12)',
              background: 'rgba(255,255,255,.04)',
              color: 'var(--white)',
              cursor: 'pointer',
              fontSize: '22px',
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>
        <div style={{ padding: '20px 22px 24px' }}>
          {service.paragraphs.map((p, i) => (
            <p key={i} style={{ fontSize: '14px', color: 'var(--dim)', lineHeight: 1.7, marginBottom: '14px' }}>
              {p}
            </p>
          ))}
          <p style={{ fontFamily: 'var(--fh)', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: accent, marginBottom: '10px' }}>
            What you can count on
          </p>
          <ul style={{ margin: 0, paddingLeft: '18px', color: 'rgba(240,244,255,0.9)', fontSize: '14px', lineHeight: 1.65 }}>
            {service.bullets.map((b, i) => (
              <li key={i} style={{ marginBottom: '8px' }}>
                {b}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={onClose}
            style={{
              display: 'inline-flex',
              marginTop: '22px',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              background: 'linear-gradient(135deg,var(--orange),var(--fire))',
              color: '#fff',
              padding: '12px 22px',
              borderRadius: '6px',
              fontFamily: 'var(--fh)',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              textDecoration: 'none',
            }}
          >
            Request this service
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

function AnimatedColumn({ children, direction }: { children: React.ReactNode; direction: 'left' | 'right' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction === 'left' ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.9, ease }}
    >
      {children}
    </motion.div>
  )
}

export default function Services() {
  const titleRef = useRef(null)
  const titleInView = useInView(titleRef, { once: true, margin: '-80px' })
  const [modal, setModal] = useState<{ service: ServiceItem; type: 'cool' | 'heat' } | null>(null)

  return (
    <section id="services" style={{ position: 'relative', overflow: 'hidden', background: 'var(--navy2)' }}>
      <div className="hex-bg" />
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '110px 48px' }}>
        <FadeIn>
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, x: -40 }}
            animate={titleInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease }}
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
            Our Services
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 32 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            style={{
              fontFamily: 'var(--fh)',
              fontSize: 'clamp(36px,4vw,58px)',
              fontWeight: 900,
              textTransform: 'uppercase',
              lineHeight: 1,
              letterSpacing: '-.5px',
            }}
          >
            Complete <span style={{ color: 'var(--ice)' }}>HVAC</span> <span style={{ color: 'var(--orange)' }}>Solutions</span>
          </motion.h2>
          <p
            style={{
              marginTop: '18px',
              maxWidth: '720px',
              fontSize: '15px',
              color: 'var(--dim)',
              lineHeight: 1.65,
            }}
          >
            Each service below includes a short summary on the card.{' '}
            <strong style={{ color: 'var(--white)', fontWeight: 600 }}>Click the card</strong> (or focus it and press{' '}
            <strong style={{ color: 'var(--ice)' }}>Enter</strong>) to open a full breakdown: typical scope, what we check, and how we work with you before we start.
          </p>
        </FadeIn>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '48px' }} className="services-two-col">
          <AnimatedColumn direction="left">
            <FadeIn delay={0.05}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontFamily: 'var(--fh)',
                  fontSize: '15px',
                  fontWeight: 700,
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  padding: '12px 20px',
                  borderRadius: '4px',
                  marginBottom: '18px',
                  background: 'rgba(26,111,212,.15)',
                  color: 'var(--ice)',
                  border: '1px solid rgba(0,212,255,.25)',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
                Air Conditioning Services
              </div>
            </FadeIn>
            {ACServices.map(s => (
              <ServiceCard key={s.title} service={s} type="cool" onSelect={() => setModal({ service: s, type: 'cool' })} />
            ))}
          </AnimatedColumn>

          <AnimatedColumn direction="right">
            <FadeIn delay={0.08}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontFamily: 'var(--fh)',
                  fontSize: '15px',
                  fontWeight: 700,
                  letterSpacing: '3px',
                  textTransform: 'uppercase',
                  padding: '12px 20px',
                  borderRadius: '4px',
                  marginBottom: '18px',
                  background: 'rgba(244,124,32,.12)',
                  color: 'var(--orange)',
                  border: '1px solid rgba(244,124,32,.25)',
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2c0 0-4 4-4 8s4 8 4 8 4-4 4-8-4-8-4-8z" opacity=".6" />
                  <path d="M12 6c0 0-2 2.5-2 5s2 5 2 5 2-2.5 2-5-2-5-2-5z" />
                </svg>
                Heating Services
              </div>
            </FadeIn>
            {HeatingServices.map(s => (
              <ServiceCard key={s.title} service={s} type="heat" onSelect={() => setModal({ service: s, type: 'heat' })} />
            ))}
          </AnimatedColumn>
        </div>

        <FadeIn delay={0.12}>
          <div style={{ display: 'flex', gap: '14px', marginTop: '44px', flexWrap: 'wrap' }}>
            {[
              { label: 'Licensed & Insured', sub: 'Fully certified in Maryland', col: 'var(--ice)', bg: 'rgba(255,255,255,.02)', border: 'rgba(255,255,255,.05)' },
              { label: 'Quality Service', sub: '5-star rated by customers', col: 'var(--ice)', bg: 'rgba(255,255,255,.02)', border: 'rgba(255,255,255,.05)' },
              { label: 'Residential & Commercial', sub: 'All property types served', col: 'var(--orange)', bg: 'rgba(244,124,32,.08)', border: 'rgba(244,124,32,.22)' },
            ].map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: i * 0.08, ease }}
                viewport={{ once: true, margin: '-60px' }}
                style={{
                  flex: 1,
                  minWidth: '170px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '18px 22px',
                  borderRadius: '6px',
                  background: b.bg,
                  border: `1px solid ${b.border}`,
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={b.col} strokeWidth="1.5">
                  {i === 0 && <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />}
                  {i === 1 && <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />}
                  {i === 2 && (
                    <>
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </>
                  )}
                </svg>
                <div>
                  <b style={{ fontFamily: 'var(--fh)', fontSize: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', display: 'block' }}>{b.label}</b>
                  <small style={{ fontSize: '12px', color: 'var(--dim)' }}>{b.sub}</small>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>

      <AnimatePresence>
        {modal && <ServiceModal service={modal.service} type={modal.type} onClose={() => setModal(null)} />}
      </AnimatePresence>
    </section>
  )
}
