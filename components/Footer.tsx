'use client'
// components/Footer.tsx
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from '@/components/FadeIn'

const services = ['AC Installation', 'AC Repair', 'Heating Installation', 'Heating Repair', 'Duct Cleaning', 'Mini-Split Systems']
const navLinks = ['Home', 'Services', 'Gallery', 'FAQ', 'Contact']

export default function Footer() {
  return (
    <footer style={{ background: '#050e1e', borderTop: '1px solid rgba(26,111,212,.18)', position: 'relative', overflow: 'hidden' }}>
      <div className="hex-bg" />

      <FadeIn y={20}>
        <>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 48px 56px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '44px', position: 'relative', zIndex: 1 }} className="footer-grid">

        {/* Brand */}
        <div>
          <Image src="/logo.svg" alt="Polar HVAC Services" width={88} height={88} style={{ marginBottom: '18px', display: 'block' }} />
          <p style={{ fontSize: '13px', color: 'var(--dim)', lineHeight: 1.7, maxWidth: '270px' }}>
            Polar HVAC Services LLC is your trusted heating and cooling partner in Bowie, Maryland and across the DMV area. Licensed, insured, and committed to your comfort year-round.
          </p>
          {/* Socials */}
          <div style={{ display: 'flex', gap: '10px', marginTop: '22px' }}>
            {['Facebook', 'Instagram', 'Google', 'Yelp'].map(name => (
              <a key={name} href="#" title={name}
                style={{ width: '36px', height: '36px', borderRadius: '6px', background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.07)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--dim)', textDecoration: 'none', transition: 'all 0.2s', fontSize: '12px', fontFamily: 'var(--fh)', fontWeight: 700 }}>
                {name[0]}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h5 style={{ fontFamily: 'var(--fh)', fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--ice)', marginBottom: '18px', paddingBottom: '10px', borderBottom: '1px solid rgba(0,212,255,.12)' }}>Services</h5>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px' }}>
            {services.map(s => (
              <li key={s}>
                <Link href="#services" style={{ fontSize: '13px', color: 'var(--dim)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '7px', transition: 'color 0.2s' }}>
                  <span style={{ color: 'var(--orange)', fontSize: '16px', fontWeight: 700 }}>›</span>{s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navigation */}
        <div>
          <h5 style={{ fontFamily: 'var(--fh)', fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--ice)', marginBottom: '18px', paddingBottom: '10px', borderBottom: '1px solid rgba(0,212,255,.12)' }}>Navigate</h5>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px' }}>
            {navLinks.map(n => (
              <li key={n}>
                <Link href={`#${n.toLowerCase()}`} style={{ fontSize: '13px', color: 'var(--dim)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <span style={{ color: 'var(--orange)', fontSize: '16px', fontWeight: 700 }}>›</span>{n}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h5 style={{ fontFamily: 'var(--fh)', fontSize: '12px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--ice)', marginBottom: '18px', paddingBottom: '10px', borderBottom: '1px solid rgba(0,212,255,.12)' }}>Contact</h5>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '9px' }}>
            {[
              { label: '301 526 2926', href: 'tel:3015262926' },
              { label: 'polarhvacservicesllc.com', href: 'https://polarhvacservicesllc.com' },
              { label: 'Bowie, MD 20715', href: '#contact' },
              { label: 'Free Estimate', href: '#contact' },
            ].map(item => (
              <li key={item.label}>
                <a href={item.href} style={{ fontSize: '13px', color: 'var(--dim)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '7px' }}>
                  <span style={{ color: 'var(--orange)', fontSize: '16px', fontWeight: 700 }}>›</span>{item.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Emergency box */}
          <div style={{ marginTop: '22px', padding: '14px 18px', background: 'rgba(244,124,32,.08)', border: '1px solid rgba(244,124,32,.22)', borderRadius: '6px' }}>
            <small style={{ fontFamily: 'var(--fh)', fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--orange)', display: 'block', marginBottom: '4px' }}>Emergency Line</small>
            <a href="tel:3015262926" style={{ fontFamily: 'var(--fh)', fontSize: '22px', fontWeight: 800, color: 'var(--white)', textDecoration: 'none', display: 'block' }}>301 526 2926</a>
            <span style={{ fontSize: '11px', color: 'var(--dim)' }}>Available 24/7</span>
          </div>
        </div>
      </div>

      {/* Gradient stripe */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg,var(--blue),var(--ice),var(--orange),var(--fire))', margin: '0 48px' }} />

      {/* Bottom bar */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '22px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '12px', color: 'rgba(168,184,216,.45)' }}>
        <div>© 2026 <strong style={{ color: 'var(--ice)' }}>Polar HVAC Services LLC</strong> — Bowie, Maryland</div>
        <div style={{ display: 'flex', gap: '20px' }}>
          <Link href="#" style={{ color: 'rgba(168,184,216,.45)', textDecoration: 'none' }}>Privacy Policy</Link>
          <Link href="#" style={{ color: 'rgba(168,184,216,.45)', textDecoration: 'none' }}>Terms of Service</Link>
        </div>
      </div>
        </>
      </FadeIn>
    </footer>
  )
}
