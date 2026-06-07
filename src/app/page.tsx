'use client'

import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import IndustrialMarquee from '@/components/home/IndustrialMarquee'
import Contact from '@/components/home/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <IndustrialMarquee />
      <Services />
      <Contact />
      
      {/* Marquee Animation Support - Still global but scoped here for now if needed */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </>
  )
}
