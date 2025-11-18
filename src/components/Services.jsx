import { Palette, Layers, Sparkles, Camera } from 'lucide-react'

const services = [
  { icon: Palette, title: 'Brand Identity', desc: 'Logos, typography, and visual systems that set you apart.' },
  { icon: Layers, title: 'UI/UX Design', desc: 'Websites and products with clarity, motion, and craft.' },
  { icon: Sparkles, title: 'Art Direction', desc: 'Campaigns with concept, mood, and narrative cohesion.' },
  { icon: Camera, title: 'Content & Motion', desc: 'Photography, video, and 3D for modern storytelling.' },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(700px_360px_at_90%_10%,rgba(250,204,21,0.12),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-10">What We Do</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <div className="h-12 w-12 rounded-xl bg-yellow-400/20 border border-yellow-400/40 grid place-items-center mb-4">
                <Icon className="h-6 w-6 text-yellow-300" />
              </div>
              <h3 className="text-white font-semibold text-lg">{title}</h3>
              <p className="text-white/70 mt-2 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
