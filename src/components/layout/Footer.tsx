import { Construction } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black py-20 border-t-8 border-white px-4 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex items-center gap-6">
          <Construction className="w-12 h-12 text-industrial-orange" />
          <span className="text-4xl text-heavy tracking-[10px]">MOU</span>
        </div>
        <div className="flex gap-10 text-xs text-heavy text-slate-400">
          <a href="#" className="hover:text-white transition-colors">OSHA COMPLIANCE</a>
          <a href="#" className="hover:text-white transition-colors">ISO 9001</a>
          <a href="#" className="hover:text-white transition-colors">SITE MAP</a>
        </div>
        <div className="text-right text-[10px] text-heavy text-slate-400 tracking-[0.5em]">
          © 2026 // MOU INDUSTRIAL // BUILT TO LAST
        </div>
      </div>
    </footer>
  )
}
