'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import { MapPin, Construction } from 'lucide-react'

export default function ProjectsPage() {
  return (
    <div className="pt-40 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 border-b-8 border-white pb-10 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h1 className="text-industrial-orange text-heavy text-2xl mb-4">{"//"} PROJECT HUB</h1>
            <h2 className="text-6xl md:text-9xl text-heavy italic leading-none">MEGA<br />INFRA.</h2>
          </div>
          <p className="max-w-md text-slate-400 font-medium uppercase leading-tight">
            Our portfolio of industrial and residential achievements. Engineering the future of Bangladesh.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((p, i) => (
            <motion.div 
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-black border-4 border-white shadow-[15px_15px_0px_rgba(255,255,255,0.05)] overflow-hidden"
            >
              <div className="relative h-[400px]">
                <img 
                  src={p.image} 
                  alt={p.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
                />
                <div className="absolute top-6 left-6 bg-industrial-orange text-black px-4 py-1 text-heavy text-sm border-2 border-black">
                  {p.status}
                </div>
              </div>
              <div className="p-10 space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-4xl text-heavy italic group-hover:text-industrial-orange transition-colors">{p.title}</h3>
                    <p className="text-industrial-orange text-heavy text-sm mt-2">{p.category}</p>
                  </div>
                  <Construction className="w-8 h-8 text-slate-700" />
                </div>
                
                <div className="flex items-center gap-3 text-slate-400">
                  <MapPin className="w-5 h-5 text-industrial-orange" />
                  <span className="text-heavy text-sm tracking-widest">{p.location}</span>
                </div>

                <button className="w-full py-4 border-2 border-white text-heavy hover:bg-white hover:text-black transition-all">
                  VIEW FULL BLUEPRINT
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
