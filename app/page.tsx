// app/page.tsx
import Hero from '@/components/Hero'
import WhyPolar from '@/components/WhyPolar'
import Services from '@/components/Services'
import CtaStrip from '@/components/CtaStrip'
import Gallery from '@/components/Gallery'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import MobileCallButton from '@/components/MobileCallButton'

export default function Home() {
  return (
    <>
      <Hero />
      <WhyPolar />
      <Services />
      <CtaStrip />
      <Gallery />
      <FAQ />
      <Contact />
      <MobileCallButton />
    </>
  )
}
