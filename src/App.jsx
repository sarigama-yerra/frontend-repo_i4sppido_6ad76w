import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Services from './components/Services'
import About from './components/About'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] relative">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_800px_at_-10%_-10%,rgba(250,204,21,0.06),transparent_60%)]" />
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'url("data:image/svg+xml;utf8,\
      <svg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'400\' viewBox=\'0 0 400 400\'>\
        <filter id=\'n\'>\
          <feTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/>\
          <feColorMatrix type=\'saturate\' values=\'0\'/>\
        </filter>\
        <rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\' opacity=\'0.4\'/>\
      </svg>\n")', backgroundSize: '600px 600px' }} />

      <Navbar />
      <Hero />
      <main>
        <Projects />
        <Services />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App