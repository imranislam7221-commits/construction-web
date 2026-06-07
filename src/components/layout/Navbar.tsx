'use client'

import { HardHat } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-2 md:top-4 w-full z-50 px-2 md:px-4">
      <div className="max-w-7xl mx-auto h-20 md:h-24 bg-black/90 backdrop-blur-xl border-2 md:border-4 border-white flex items-center justify-between px-4 md:px-8 shadow-[6px_6px_0px_rgba(245,158,11,1)] md:shadow-[12px_12px_0px_rgba(245,158,11,1)]">
        <Link href="/" className="flex items-center gap-2 md:gap-4 group">
          <div className="w-8 h-8 md:w-12 md:h-12 bg-industrial-orange flex items-center justify-center border-2 border-black group-hover:rotate-12 transition-transform">
            <HardHat className="w-5 h-5 md:w-8 md:h-8 text-black" />
          </div>
          <span className="text-xl md:text-3xl text-heavy tracking-tighter">MOU <span className="text-industrial-orange hidden xs:inline">CONSTRUCTION</span><span className="text-industrial-orange xs:hidden">CONS.</span></span>
        </Link>
        
        <div className="flex items-center gap-4 md:gap-10 text-[10px] md:text-sm text-heavy">
          <Link href="/projects" className="hover:text-industrial-orange transition-colors hidden sm:block">Project Hub</Link>
          <a href="#contact" className="px-4 py-2 md:px-8 md:py-3 bg-white text-black hover:bg-industrial-orange transition-all border-2 border-black">COMMAND CENTER</a>
        </div>
      </div>
    </nav>
  )
}
