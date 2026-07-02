import type { Metadata } from 'next'
import { Tractor, Truck, Construction, Settings } from 'lucide-react'
import Link from 'next/link'
import FadeIn from '@/components/ui/FadeIn'

export const metadata: Metadata = {
  title: 'Machinery',
  description:
    'Heavy assets and industrial machinery inventory powering MOU Construction mega-projects.',
}

const inventory = [
  {
    name: 'T-900 Heavy Excavator',
    specs: '50 Ton Capacity // Deep Reach Arm',
    category: 'Excavation',
    icon: <Tractor className="w-10 h-10" />,
  },
  {
    name: 'Iron-Max 500 Crane',
    specs: '200m Vertical Reach // 100 Ton Hook',
    category: 'Lifting',
    icon: <Construction className="w-10 h-10" />,
  },
  {
    name: 'Goliath Mixer',
    specs: 'Continuous Flow // High-Grade Concrete',
    category: 'Concreting',
    icon: <Settings className="w-10 h-10" />,
  },
  {
    name: 'Rapid-Haul Logistics',
    specs: '24/7 Supply Chain Integration',
    category: 'Transport',
    icon: <Truck className="w-10 h-10" />,
  },
]

export default function MachineryPage() {
  return (
    <div className="pt-40 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-20 border-b-8 border-white pb-10 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h1 className="text-industrial-orange text-heavy text-2xl mb-4">{"//"} ASSET LIST</h1>
            <h2 className="text-6xl md:text-9xl text-heavy italic leading-none">HEAVY<br />ASSETS.</h2>
          </div>
          <p className="max-w-md text-slate-400 font-medium uppercase leading-tight text-right">
            Our state-of-the-art inventory ensures unyielding performance on every site. We own the power we deploy.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {inventory.map((item, i) => (
            <FadeIn
              key={item.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-black border-4 border-industrial-orange p-8 flex flex-col gap-6 group hover:bg-industrial-orange transition-all duration-300"
            >
              <div className="w-20 h-20 bg-industrial-orange text-black flex items-center justify-center border-4 border-white group-hover:bg-black group-hover:text-industrial-orange transition-colors">
                {item.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl text-heavy italic group-hover:text-black transition-colors">{item.name}</h3>
                <p className="text-xs text-heavy text-slate-500 group-hover:text-black/60 transition-colors uppercase tracking-widest">{item.category}</p>
                <div className="pt-4 border-t-2 border-white/20 group-hover:border-black/20">
                  <p className="text-sm font-bold text-slate-400 group-hover:text-black/80 transition-colors">{item.specs}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <section className="mt-40 brutalist-border-orange bg-black p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-industrial-orange opacity-10 blur-[100px]" />
          <div className="relative z-10 space-y-8">
            <h3 className="text-5xl text-heavy italic">NEED SPECIFIC MACHINERY?</h3>
            <p className="text-slate-400 text-xl font-medium max-w-2xl">
              MOU Construction offers strategic equipment leasing for mega-projects. Contact our logistics hub for a direct requisition.
            </p>
            <Link
              href="/#contact"
              className="inline-block px-12 py-5 bg-white text-black text-heavy text-xl hover:bg-industrial-orange transition-all border-4 border-black"
            >
              MACHINERY REQUISITION
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
