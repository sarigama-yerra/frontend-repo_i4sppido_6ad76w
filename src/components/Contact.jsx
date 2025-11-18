import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    const form = new FormData(e.currentTarget)
    const data = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('Thanks — we will be in touch shortly!')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_90%_80%,rgba(250,204,21,0.1),transparent_60%)]" />
      <div className="relative max-w-4xl mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 md:p-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">Let’s build something bold</h2>
          <p className="text-white/70 mt-2">Tell us about your project and timeline.</p>

          <form onSubmit={submit} className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="sm:col-span-1">
              <label className="block text-sm text-white/70 mb-2">Name</label>
              <input name="name" required className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400/50" placeholder="Your name" />
            </div>
            <div className="sm:col-span-1">
              <label className="block text-sm text-white/70 mb-2">Email</label>
              <input name="email" type="email" required className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400/50" placeholder="you@company.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-white/70 mb-2">Company</label>
              <input name="company" className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400/50" placeholder="Brand or organization" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm text-white/70 mb-2">Project Details</label>
              <textarea name="message" rows="5" required className="w-full rounded-xl bg-white/10 border border-white/15 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-400/50" placeholder="Tell us what you have in mind" />
            </div>
            <div className="sm:col-span-2 flex items-center justify-between gap-4">
              <button className="px-6 py-3 rounded-full bg-yellow-400 text-black font-medium shadow-[0_10px_40px_rgba(250,204,21,0.35)] hover:shadow-[0_10px_55px_rgba(250,204,21,0.5)] transition-shadow">
                Send Message
              </button>
              {status && <p className="text-sm text-white/80">{status}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
