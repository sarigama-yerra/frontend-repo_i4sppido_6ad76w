export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(900px_420px_at_50%_0%,rgba(250,204,21,0.10),transparent_60%)]" />
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-12">
          <p className="text-yellow-300/90 font-semibold tracking-widest text-xs uppercase">About Us</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mt-3">Design for the next era of brands</h2>
          <p className="text-white/75 mt-4 leading-relaxed">
            We are a team of designers, directors, and technologists pushing visuals forward. From early-stage startups to global companies, we partner closely to craft timeless systems and experimental moments that feel alive.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            <Stat kpi="120+" label="Projects" />
            <Stat kpi="32" label="Awards" />
            <Stat kpi="14" label="Team" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Stat({ kpi, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-center">
      <div className="text-3xl font-extrabold text-yellow-300">{kpi}</div>
      <div className="text-white/70 text-sm mt-1">{label}</div>
    </div>
  )
}
