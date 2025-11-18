export default function Projects() {
  const items = [
    {
      title: 'Aperture Brand System',
      tag: 'Identity',
      img: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Neon City Campaign',
      tag: 'Art Direction',
      img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Echo UI Kit',
      tag: 'Product Design',
      img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop',
    },
    {
      title: 'Pulse Social',
      tag: 'Campaign',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop',
    },
  ]

  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_10%_10%,rgba(250,204,21,0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Selected Work</h2>
            <p className="text-white/70 mt-2">A snapshot of our recent collaborations.</p>
          </div>
          <a href="#contact" className="hidden md:inline-block px-4 py-2 rounded-full bg-yellow-400 text-black font-medium">Start a Project</a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((card, i) => (
            <article key={i} className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={card.img} alt={card.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
                <div>
                  <p className="text-yellow-300 text-xs uppercase tracking-widest">{card.tag}</p>
                  <h3 className="text-white text-xl md:text-2xl font-semibold">{card.title}</h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/90 backdrop-blur">Case Study</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
