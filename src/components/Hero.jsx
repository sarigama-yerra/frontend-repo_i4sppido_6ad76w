import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-20%,rgba(250,204,21,0.18),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 pt-40 pb-24 flex flex-col items-start">
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-[0_0_80px_rgba(250,204,21,0.08)]">
          <p className="text-yellow-300/90 font-semibold tracking-widest text-xs uppercase">Graphic Design Agency</p>
          <h1 className="mt-3 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
            New Media
          </h1>
          <p className="mt-4 text-white/80 max-w-xl text-base md:text-lg">
            We craft visual identities, campaigns, and immersive brand worlds. Bold ideas, sharp execution, and a love for the details.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#work" className="px-6 py-3 rounded-full bg-yellow-400 text-black font-medium shadow-[0_10px_40px_rgba(250,204,21,0.35)] hover:shadow-[0_10px_55px_rgba(250,204,21,0.5)] transition-shadow">View Projects</a>
            <a href="#contact" className="px-6 py-3 rounded-full border border-white/20 text-white/90 hover:border-yellow-400/60 hover:text-yellow-300 transition-colors">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  )
}
