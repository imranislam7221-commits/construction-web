'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative pt-64 pb-32 overflow-hidden px-4">
      <div className="absolute top-40 -right-20 w-[600px] h-[600px] bg-industrial-orange/20 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 md:space-y-10"
        >
          <div className="inline-block bg-black px-4 py-1 md:px-6 md:py-2 border-2 border-industrial-orange text-industrial-orange text-[10px] md:text-sm text-heavy">
            OPERATIONAL STATUS: READY
          </div>
          <h1 className="text-5xl md:text-9xl text-heavy leading-[0.85] italic">
            HEAVY <br />
            <span className="text-industrial-orange">DUTY</span> <br />
            ENGINEERING.
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-lg font-medium leading-tight uppercase">
            We don&apos;t just build. We forge infrastructure that defines the skyline. Built with raw power and precision.
          </p>

          <div className="flex flex-wrap gap-4 md:gap-6">
            <Link
              href="#contact"
              className="inline-block text-center px-6 py-3 md:px-10 md:py-5 bg-industrial-orange text-black text-heavy text-lg md:text-xl border-4 border-white shadow-[4px_4px_0px_white] md:shadow-[8px_8px_0px_white] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all"
            >
              DEPLOY RESOURCES
            </Link>
            <Link
              href="/projects"
              className="inline-block text-center px-6 py-3 md:px-10 md:py-5 bg-black text-white text-heavy text-lg md:text-xl border-4 border-industrial-orange hover:bg-white hover:text-black transition-all"
            >
              VIEW BLUEPRINTS
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative mt-12 lg:mt-0"
        >
          <div className="absolute -inset-4 bg-caution -z-10 rotate-2 opacity-30" />
          <div className="brutalist-border-orange overflow-hidden h-[300px] md:h-[500px] bg-slate-900">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 contrast-125"
              alt="Heavy construction site with tower cranes at dusk"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-black border-2 md:border-4 border-white p-4 md:p-8 shadow-[6px_6px_0px_#f59e0b] md:shadow-[12px_12px_0px_#f59e0b]">
            <div className="text-4xl md:text-6xl text-heavy text-industrial-orange">25+</div>
            <div className="text-[10px] md:text-sm text-heavy text-white">Mega Projects</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
