'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { services } from '@/data/services'

export default function Services() {
  return (
    <section id="services" className="py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex items-end justify-between border-b-8 border-white pb-10">
          <div>
            <h2 className="text-industrial-orange text-heavy text-2xl mb-4">{"//"} CORE OPERATIONS</h2>
            <h3 className="text-6xl md:text-8xl text-heavy italic leading-none">STRUCTURAL<br />ASSETS.</h3>
          </div>
          <div className="hidden md:block text-right max-w-xs text-xs text-heavy text-slate-500">
            ALL OPERATIONS ARE CARRIED OUT UNDER ISO 9001:2015 STANDARDS WITH MAXIMUM SAFETY PROTOCOLS.
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              whileHover={{ 
                scale: 1.02, 
                backgroundColor: "rgba(245, 158, 11, 0.05)",
                borderColor: "#f59e0b"
              }}
              className="bg-black border-4 border-white p-10 flex flex-col md:flex-row gap-10 shadow-[15px_15px_0px_rgba(255,255,255,0.05)] transition-colors"
            >
              <div className="w-24 h-24 shrink-0 bg-industrial-orange flex items-center justify-center border-4 border-black group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <div className="space-y-4">
                <h4 className="text-3xl text-heavy italic underline decoration-industrial-orange underline-offset-8">{s.title}</h4>
                <p className="text-slate-400 font-medium leading-relaxed">{s.desc}</p>
                <button className="group flex items-center gap-4 text-heavy text-industrial-orange">
                  SPECIFICATIONS <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
