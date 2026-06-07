import { 
  Construction, 
  Building2, 
  Factory, 
  Tractor 
} from 'lucide-react'

export const services = [
  {
    title: "Centering & Shuttering",
    desc: "Massive scale formwork solutions for high-rise infrastructure and heavy concrete slabs.",
    icon: <Construction className="w-10 h-10 text-industrial-orange" />
  },
  {
    title: "Iron & Steel Work",
    desc: "Structural steel reinforcement and heavy metal fabrication for industrial foundations.",
    icon: <Factory className="w-10 h-10 text-industrial-orange" />
  },
  {
    title: "Heavy Excavation",
    desc: "Large scale earthmoving and site preparation using heavy-duty industrial machinery.",
    icon: <Tractor className="w-10 h-10 text-industrial-orange" />
  },
  {
    title: "High-Rise Brickwork",
    desc: "Solid masonry for industrial complexes and residential towers built to withstand centuries.",
    icon: <Building2 className="w-10 h-10 text-industrial-orange" />
  }
]
