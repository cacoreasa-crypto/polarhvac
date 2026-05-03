// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const siteUrl = 'https://polarhvacservicesllc.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Polar HVAC Services | Heating & Cooling | DMV, DC, MD & VA',
  description: 'Professional HVAC installation, repair & maintenance for residential & commercial properties throughout the DMV — Washington DC, Maryland, and Virginia. Licensed & insured. Call 301 526 2926.',
  keywords: 'HVAC DMV, HVAC Washington DC, heating cooling Maryland, AC repair Virginia, furnace installation DMV, Polar HVAC Services',
  openGraph: {
    title: 'Polar HVAC Services LLC',
    description: 'Expert heating & cooling across the DMV — Washington DC, Maryland, and Virginia',
    url: siteUrl,
    siteName: 'Polar HVAC Services',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1024,
        height: 426,
        alt: 'Polar HVAC Services — Comfort you can count on, service you can trust',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Polar HVAC Services LLC',
    description: 'Expert heating & cooling across the DMV — Washington DC, Maryland, and Virginia',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
