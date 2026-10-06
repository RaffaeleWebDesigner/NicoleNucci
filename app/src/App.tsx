import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap, ScrollTrigger } from './lib/motion'
import { setLenis } from './lib/scroll'
import Header from './components/Header'
import Hero from './components/Hero'
import Statement from './components/Statement'
import About from './components/About'
import Breathe from './components/Breathe'
import Services from './components/Services'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  // Scroll fluido (Lenis) sincronizzato con GSAP ScrollTrigger
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    document.fonts?.ready.then(refresh)

    let cleanup = () => {}
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      const lenis = new Lenis({ lerp: 0.085, smoothWheel: true })
      setLenis(lenis)
      lenis.on('scroll', ScrollTrigger.update)
      const tick = (t: number) => lenis.raf(t * 1000)
      gsap.ticker.add(tick)
      gsap.ticker.lagSmoothing(0)
      cleanup = () => {
        gsap.ticker.remove(tick)
        lenis.destroy()
        setLenis(null)
      }
    }

    return () => {
      window.removeEventListener('load', refresh)
      cleanup()
    }
  }, [])

  return (
    <div
      className="min-h-screen bg-black text-white overflow-x-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="grain" aria-hidden />
      <Header />
      <Hero />

      <main className="relative">
        <Statement />
        <About />
        <Breathe />
        <Services />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
