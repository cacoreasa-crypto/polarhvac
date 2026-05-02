// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Polar HVAC Services | Heating & Cooling | Bowie, MD',
  description: 'Professional HVAC installation, repair & maintenance for residential & commercial properties in Bowie, Maryland and the DMV area. Licensed & insured. Call 301 526 2926.',
  keywords: 'HVAC Bowie MD, heating cooling Maryland, AC repair Bowie, furnace installation DMV, Polar HVAC Services',
  openGraph: {
    title: 'Polar HVAC Services LLC',
    description: 'Expert Heating & Cooling in Bowie, MD and the DMV area',
    url: 'https://polarhvacservicesllc.com',
    siteName: 'Polar HVAC Services',
    locale: 'en_US',
    type: 'website',
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
