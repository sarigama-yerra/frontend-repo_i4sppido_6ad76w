export default function Footer() {
  return (
    <footer className="relative py-12">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_50%_0%,rgba(250,204,21,0.08),transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} New Media. All rights reserved.</p>
        <div className="flex items-center gap-3">
          <a href="#" className="text-white/70 hover:text-yellow-300 transition-colors text-sm">Instagram</a>
          <span className="text-white/30">•</span>
          <a href="#" className="text-white/70 hover:text-yellow-300 transition-colors text-sm">Behance</a>
          <span className="text-white/30">•</span>
          <a href="#" className="text-white/70 hover:text-yellow-300 transition-colors text-sm">Dribbble</a>
        </div>
      </div>
    </footer>
  )
}
