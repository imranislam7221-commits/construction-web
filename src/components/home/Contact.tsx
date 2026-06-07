'use client'

import { Phone, Mail } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, { message: "IDENTIFY YOURSELF" }),
  email: z.string().email({ message: "INVALID DISPATCH ADDRESS" }),
  details: z.string().min(10, { message: "PROVIDE MISSION DETAILS (MIN 10 CHARS)" }),
})

type ContactFormValues = z.infer<typeof contactSchema>

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API call
    console.log("Transmission received:", data)
    await new Promise(resolve => setTimeout(resolve, 2000))
    alert(`MISSION LOGGED: Thank you ${data.name}. Our operatives will contact you shortly. 🏗️`)
    reset()
  }

  return (
    <section id="contact" className="py-32 bg-industrial-orange px-4 relative">
      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="text-black space-y-10">
            <h2 className="text-7xl text-heavy leading-none italic">ESTABLISH<br />CONTACT.</h2>
            <p className="text-black/80 text-xl font-bold uppercase max-w-md">
              READY TO SCALE YOUR PROJECT? OUR LOGISTICS TEAM IS STANDING BY.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-black flex items-center justify-center border-2 border-white">
                  <Phone className="w-8 h-8 text-industrial-orange" />
                </div>
                <div>
                  <div className="text-xs text-heavy text-black/60">DIRECT LINE</div>
                  <div className="text-2xl text-heavy text-black">+880 1712 345 678</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-black flex items-center justify-center border-2 border-white">
                  <Mail className="w-8 h-8 text-industrial-orange" />
                </div>
                <div>
                  <div className="text-xs text-heavy text-black/60">DISPATCH ENVELOPE</div>
                  <div className="text-2xl text-heavy text-black">HQ@MOUCONSTRUCT.COM</div>
                </div>
              </div>
            </div>
          </div>

          <form 
            onSubmit={handleSubmit(onSubmit)}
            className="bg-black border-4 md:border-8 border-white p-6 md:p-16 shadow-[10px_10px_0px_rgba(0,0,0,0.5)] md:shadow-[30px_30px_0px_rgba(0,0,0,0.5)]"
          >
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="text-heavy text-sm text-industrial-orange">OPERATIVE NAME</label>
                  <input 
                    {...register('name')}
                    type="text" 
                    className={`w-full bg-white/10 border-b-4 ${errors.name ? 'border-red-500' : 'border-white'} p-4 focus:outline-none focus:border-industrial-orange text-white text-heavy uppercase`} 
                    placeholder="IDENTIFY..." 
                  />
                  {errors.name && <p className="text-red-500 text-xs text-heavy">{errors.name.message}</p>}
                </div>
                <div className="space-y-4">
                  <label className="text-heavy text-sm text-industrial-orange">CONTACT FREQUENCY</label>
                  <input 
                    {...register('email')}
                    type="email" 
                    className={`w-full bg-white/10 border-b-4 ${errors.email ? 'border-red-500' : 'border-white'} p-4 focus:outline-none focus:border-industrial-orange text-white text-heavy uppercase`} 
                    placeholder="EMAIL..." 
                  />
                  {errors.email && <p className="text-red-500 text-xs text-heavy">{errors.email.message}</p>}
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-heavy text-sm text-industrial-orange">MISSION DETAILS</label>
                <textarea 
                  {...register('details')}
                  className={`w-full bg-white/10 border-b-4 ${errors.details ? 'border-red-500' : 'border-white'} p-4 h-40 focus:outline-none focus:border-industrial-orange text-white text-heavy resize-none uppercase`} 
                  placeholder="DESCRIBE PROJECT SCOPE..."
                ></textarea>
                {errors.details && <p className="text-red-500 text-xs text-heavy">{errors.details.message}</p>}
              </div>
              <button 
                disabled={isSubmitting}
                type="submit"
                className="w-full py-6 bg-industrial-orange text-black text-heavy text-2xl hover:bg-white disabled:opacity-50 disabled:cursor-not-allowed transition-all border-4 border-black active:translate-y-1"
              >
                {isSubmitting ? "TRANSMITTING..." : "INITIATE PROTOCOL"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
