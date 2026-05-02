'use client'
// components/Nav.tsx
import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#faq', label: 'FAQ' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <>
      <nav
        className={`nav-shell${scrolled ? ' nav-shell--scrolled' : ''}`}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '0 48px',
          paddingTop: 'max(0px, env(safe-area-inset-top))',
          height: scrolled ? '60px' : '72px',
          minHeight: scrolled ? '60px' : '72px',
          background: scrolled ? 'rgba(10,22,40,0.97)' : 'rgba(10,22,40,0.80)',
          backdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${scrolled ? 'rgba(0,212,255,0.35)' : 'rgba(26,111,212,0.25)'}`,
          transition: 'all 0.35s ease',
        }}
      >
        {/* Logo */}
        <Link href="#home" className="nav-brand" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', minWidth: 0 }}>
          <Image
            src="/LogoPolar.png"
            alt="Polar HVAC"
            width={64}
            height={64}
            className="nav-logo-img"
            priority
            style={{ width: 'auto', height: 'auto', transition: 'all 0.3s' }}
          />
          <div className="nav-brand-text" style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.12, minWidth: 0 }}>
            <b style={{ fontFamily: 'var(--fh)', fontSize: '20px', fontWeight: 800, color: 'var(--white)', letterSpacing: '2px', textTransform: 'uppercase' }}>
              Polar HVAC
            </b>
            <small style={{ fontFamily: 'var(--fh)', fontSize: '10px', fontWeight: 600, color: 'var(--ice)', letterSpacing: '3px', textTransform: 'uppercase' }}>
              Services LLC
            </small>
          </div>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="nav-desktop">
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              style={{ fontFamily: 'var(--fh)', fontSize: '13px', fontWeight: 600, color: 'var(--dim)', textDecoration: 'none', letterSpacing: '2px', textTransform: 'uppercase', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--ice)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--dim)')}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:3015262926"
            style={{
              background: 'linear-gradient(135deg,var(--orange),var(--fire))',
              color: '#fff', padding: '10px 22px', borderRadius: '4px',
              fontFamily: 'var(--fh)', fontSize: '13px', fontWeight: 700,
              letterSpacing: '2px', textTransform: 'uppercase', textDecoration: 'none',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(244,124,32,0.5)' }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ''; (e.currentTarget as HTMLElement).style.boxShadow = '' }}
          >
            301 526 2926
          </a>
        </div>

        {/* Burger */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          style={{ display: 'none', flexDirection: 'column', gap: '5px', cursor: 'pointer', background: 'none', border: 'none', padding: '4px' }}
          className="nav-burger"
          aria-label="Menu"
        >
          <span style={{ display: 'block', width: '24px', height: '2px', background: 'var(--white)', transition: 'all 0.3s' }} />
          <span style={{ display: 'block', width: '24px', height: '2px', background: 'var(--white)', transition: 'all 0.3s' }} />
          <span style={{ display: 'block', width: '24px', height: '2px', background: 'var(--white)', transition: 'all 0.3s' }} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className="nav-mobile-dropdown"
        style={{
          position: 'fixed', top: '72px', left: 0, right: 0, zIndex: 999,
          background: 'rgba(10,22,40,0.98)', backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(26,111,212,0.3)',
          display: 'flex', flexDirection: 'column', padding: '16px', gap: '4px',
          transform: menuOpen ? 'translateY(0)' : 'translateY(-110%)',
          transition: 'transform 0.35s ease',
        }}
      >
        {[...links, { href: 'tel:3015262926', label: 'Call 301 526 2926' }].map(l => (
          <Link
            key={l.href}
            href={l.href}
            onClick={() => setMenuOpen(false)}
            style={{ fontFamily: 'var(--fh)', fontSize: '18px', fontWeight: 700, color: 'var(--dim)', textDecoration: 'none', padding: '12px 16px', letterSpacing: '2px', textTransform: 'uppercase', borderRadius: '4px' }}
          >
            {l.label}
          </Link>
        ))}
      </div>

      <style>{`
        .nav-logo-img { width: 48px; height: 48px; object-fit: contain; flex-shrink: 0; }
        .nav-shell--scrolled .nav-logo-img { width: 40px; height: 40px; }
        .nav-mobile-dropdown { top: 72px; }
        .nav-shell--scrolled + .nav-mobile-dropdown { top: 60px; }
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: flex !important; }
          .nav-shell { padding-left: 16px !important; padding-right: 16px !important; }
          .nav-shell { height: 68px !important; min-height: 68px !important; }
          .nav-shell--scrolled { height: 60px !important; min-height: 60px !important; }
          .nav-logo-img { width: 56px !important; height: 56px !important; }
          .nav-shell--scrolled .nav-logo-img { width: 50px !important; height: 50px !important; }
          .nav-brand-text b { font-size: 17px !important; letter-spacing: 1.5px !important; }
          .nav-brand-text small { font-size: 11px !important; letter-spacing: 2.5px !important; }
          .nav-mobile-dropdown { top: 68px !important; }
          .nav-shell--scrolled + .nav-mobile-dropdown { top: 60px !important; }
        }
        @media (max-width: 380px) {
          .nav-brand-text b { font-size: 15px !important; }
          .nav-brand-text small { font-size: 10px !important; letter-spacing: 2px !important; }
        }
      `}</style>
    </>
  )
}
