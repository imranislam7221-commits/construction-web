import type { Metadata } from 'next'
import { ShieldCheck, Wrench, Factory } from 'lucide-react'
import FadeIn from '@/components/ui/FadeIn'

export const metadata: Metadata = {
  title: 'About',
  description:
    'MOU Construction — the iron backbone of modern infrastructure. 15+ years building national mega-structures across Bangladesh.',
}

const values = [
  {
    title: 'Unyielding Safety',
    desc: 'Zero compromise on human lives. Every site is fortified with maximum security protocols.',
    icon: <ShieldCheck className="w-12 h-12 text-industrial-orange" />,
  },
  {
    title: 'Precision Power',
    desc: "Using the world's most advanced heavy machinery to deliver pixel-perfect structural integrity.",
    icon: <Wrench className="w-12 h-12 text-industrial-orange" />,
  },
  {
    title: 'Industrial Scale',
    desc: 'Capable of managing multi-billion taka projects with automated logistics and supply chain.',
    icon: <Factory className="w-12 h-12 text-industrial-orange" />,
  },
]

export default function AboutPage() {
  return (
    <div className="pt-40 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-32 border-b-8 border-white pb-10">
          <h1 className="text-industrial-orange text-heavy text-2xl mb-4">{"//"} THE CORE</h1>
          <h2 className="text-6xl md:text-9xl text-heavy italic leading-[0.8]">ESTABLISHED<br />IN POWER.</h2>
        </header>

        <div className="grid lg:grid-cols-2 gap-24 items-center mb-40">
          <div className="space-y-12">
            <h3 className="text-4xl text-heavy italic leading-tight">
              MOU CONSTRUCTION IS THE <span className="text-industrial-orange">IRON BACKBONE</span> OF MODERN INFRASTRUCTURE.
            </h3>
            <div className="space-y-6 text-slate-400 text-lg font-medium leading-relaxed">
              <p>
                Founded on the principles of raw engineering and architectural precision, MOU Construction has scaled from local foundations to national mega-structures.
              </p>
              <p>
                We operate with a &quot;Heavy Duty&quot; mindset—ensuring that everything we build is designed to outlast centuries. From the concrete slabs to the steel reinforcements, every element is a testament to our dominance in the sector.
              </p>
            </div>
            <div className="flex gap-10">
              <div>
                <div className="text-5xl text-heavy text-white">15+</div>
                <div className="text-sm text-heavy text-industrial-orange uppercase">Years Active</div>
              </div>
              <div>
                <div className="text-5xl text-heavy text-white">500+</div>
                <div className="text-sm text-heavy text-industrial-orange uppercase">Operatives</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-caution -z-10 rotate-3 opacity-20" />
            <div className="brutalist-border overflow-hidden h-[600px] bg-slate-900">
              <img
                src="https://images.unsplash.com/photo-1541913080211-4712ca3c0480?auto=format&fit=crop&q=80"
                className="w-full h-full object-cover grayscale"
                alt="Modern high-rise architecture"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>

        <section className="grid md:grid-cols-3 gap-12">
          {values.map((v, i) => (
            <FadeIn
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-black border-4 border-white p-12 space-y-6 shadow-[10px_10px_0px_white]"
            >
              <div className="w-20 h-20 bg-white flex items-center justify-center border-4 border-black">
                {v.icon}
              </div>
              <h4 className="text-3xl text-heavy italic uppercase">{v.title}</h4>
              <p className="text-slate-500 font-medium">{v.desc}</p>
            </FadeIn>
          ))}
        </section>
      </div>
    </div>
  )
}
