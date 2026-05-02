'use client'
// components/Contact.tsx
import { useState } from 'react'
import { motion } from 'framer-motion'
import FadeIn from '@/components/FadeIn'

const ease = [0.22, 1, 0.36, 1] as const

const contactItems = [
  { type: 'phone', label: 'Phone', value: '301 526 2926', href: 'tel:3015262926', sub: 'Available 24/7 for emergencies', iconColor: 'var(--orange)' },
  { type: 'web', label: 'Website', value: 'polarhvacservicesllc.com', href: 'https://polarhvacservicesllc.com', sub: '', iconColor: 'var(--ice)' },
  { type: 'location', label: 'Service Area', value: 'Bowie, MD & DMV Region', href: '#contact', sub: 'Maryland · DC · Virginia', iconColor: 'var(--ice)' },
  { type: 'clock', label: 'Hours', value: 'Mon – Sat: 7am – 8pm', href: '#contact', sub: 'Emergency service: 24/7', iconColor: 'var(--ice)' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3500)
  }

  return (
    <section id="contact" style={{ position: 'relative', overflow: 'hidden', background: 'var(--navy)' }}>
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
            Get In Touch
          </div>
          <h2 style={{ fontFamily: 'var(--fh)', fontSize: 'clamp(36px,4vw,58px)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1 }}>
            Contact <span style={{ color: 'var(--ice)' }}>Us</span>
          </h2>
        </FadeIn>

        <div className="contact-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', marginTop: '56px', alignItems: 'start' }}>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease }} viewport={{ once: true, margin: '-80px' }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {contactItems.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '18px', padding: '22px', borderRadius: '8px', background: 'rgba(255,255,255,.02)', border: `1px solid ${item.type === 'phone' ? 'rgba(244,124,32,.25)' : 'rgba(255,255,255,.05)'}`, borderLeft: item.type === 'phone' ? '3px solid var(--orange)' : '1px solid rgba(255,255,255,.05)', transition: 'all 0.3s' }}>
                <div style={{ width: '46px', height: '46px', minWidth: '46px', borderRadius: '8px', background: item.type === 'phone' ? 'linear-gradient(135deg,rgba(244,124,32,.25),rgba(255,85,0,.08))' : 'linear-gradient(135deg,rgba(26,111,212,.25),rgba(0,212,255,.08))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={item.iconColor} strokeWidth="2">
                    {item.type === 'phone' && <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />}
                    {item.type === 'web' && <><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></>}
                    {item.type === 'location' && <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>}
                    {item.type === 'clock' && <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>}
                  </svg>
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--fh)', fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--dim)', marginBottom: '6px' }}>{item.label}</h4>
                  <a href={item.href} style={{ fontSize: '17px', color: 'var(--white)', fontWeight: 600, textDecoration: 'none' }}>{item.value}</a>
                  {item.sub && <p style={{ fontSize: '12px', color: 'var(--dim)', marginTop: '4px' }}>{item.sub}</p>}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, ease }} viewport={{ once: true, margin: '-80px' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                {[{ label: 'First Name', ph: 'John' }, { label: 'Last Name', ph: 'Smith' }].map(f => (
                  <div key={f.label} style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    <label style={{ fontFamily: 'var(--fh)', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--dim)' }}>{f.label}</label>
                    <input type="text" placeholder={f.ph} required style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.09)', borderRadius: '4px', padding: '13px 15px', color: 'var(--white)', fontFamily: 'var(--fb)', fontSize: '14px', outline: 'none' }} />
                  </div>
                ))}
              </div>

              {[
                { label: 'Phone Number', type: 'tel', ph: '(301) 000-0000' },
                { label: 'Email Address', type: 'email', ph: 'john@email.com' },
              ].map(f => (
                <div key={f.label} style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                  <label style={{ fontFamily: 'var(--fh)', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--dim)' }}>{f.label}</label>
                  <input type={f.type} placeholder={f.ph} style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.09)', borderRadius: '4px', padding: '13px 15px', color: 'var(--white)', fontFamily: 'var(--fb)', fontSize: '14px', outline: 'none' }} />
                </div>
              ))}

              <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                <label style={{ fontFamily: 'var(--fh)', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--dim)' }}>Service Needed</label>
                <select required style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.09)', borderRadius: '4px', padding: '13px 15px', color: 'var(--white)', fontFamily: 'var(--fb)', fontSize: '14px', outline: 'none', appearance: 'none' }}>
                  <option value="" disabled>Select a service...</option>
                  {['AC Installation','AC Repair','AC Maintenance','Ductless Mini-Split','Heating Installation','Heating Repair','Heating Maintenance','Duct Cleaning','Thermostat Installation','Emergency Service','Other'].map(o => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                <label style={{ fontFamily: 'var(--fh)', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--dim)' }}>Message</label>
                <textarea placeholder="Describe your issue or project..." style={{ background: 'rgba(255,255,255,.04)', border: '1px solid rgba(255,255,255,.09)', borderRadius: '4px', padding: '13px 15px', color: 'var(--white)', fontFamily: 'var(--fb)', fontSize: '14px', outline: 'none', minHeight: '110px', resize: 'vertical' }} />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 10px 32px rgba(244,124,32,.48)' }}
                whileTap={{ scale: 0.98 }}
                style={{
                  background: submitted ? 'linear-gradient(135deg,#2a9d50,#1e7a3e)' : 'linear-gradient(135deg,var(--orange),var(--fire))',
                  color: '#fff', padding: '15px 30px', border: 'none', borderRadius: '4px',
                  fontFamily: 'var(--fh)', fontSize: '15px', fontWeight: 700, letterSpacing: '2px',
                  textTransform: 'uppercase', cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(244,124,32,.28)',
                  transition: 'background 0.4s',
                }}
              >
                {submitted ? '✓ Message Sent!' : 'Send Message →'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
