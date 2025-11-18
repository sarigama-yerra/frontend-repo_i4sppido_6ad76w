export default function Reviews() {
  const quotes = [
    {
      body: 'They brought our brand to life beyond what we imagined — every detail felt intentional.',
      author: 'Maya Chen, Pulse Labs',
    },
    {
      body: 'A rare blend of strategic thinking and pristine craft. Results spoke for themselves.',
      author: 'Jonas Weber, Northbound',
    },
    {
      body: 'Fast, collaborative, and fearless with ideas. A true partner to our team.',
      author: 'Riya Kapoor, Lumina',
    },
  ]

  return (
    <section id="reviews" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(700px_360px_at_10%_80%,rgba(250,204,21,0.12),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-10">Clients, on the record</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <figure key={i} className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-6">
              <blockquote className="text-white/80">“{q.body}”</blockquote>
              <figcaption className="mt-4 text-yellow-300 text-sm">{q.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
