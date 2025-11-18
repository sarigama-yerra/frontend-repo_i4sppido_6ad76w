import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#work', label: 'Projects' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all ${
      scrolled ? 'backdrop-blur-md bg-black/40 border-b border-white/10' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-yellow-400 text-black font-extrabold grid place-items-center shadow-[0_0_40px_rgba(250,204,21,0.35)]">NM</div>
          <span className="text-white tracking-tight font-semibold text-lg">New Media</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-white/80 hover:text-yellow-300 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="ml-4 px-4 py-2 rounded-full bg-yellow-400 text-black font-medium shadow-[0_8px_30px_rgba(250,204,21,0.3)] hover:shadow-[0_8px_40px_rgba(250,204,21,0.45)] transition-shadow">Start a Project</a>
        </nav>

        <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4">
            <div className="flex flex-col gap-3">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-white/90 py-2">
                  {l.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="px-4 py-2 rounded-xl bg-yellow-400 text-black font-medium text-center">Start a Project</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
