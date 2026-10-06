import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { gsap, ScrollTrigger } from '../lib/motion'
import { anchor, scrollToTop, startScroll, stopScroll } from '../lib/scroll'

const navLinks = [
  { label: 'CHI SONO', id: 'chi-sono' },
  { label: 'SERVIZI', id: 'servizi' },
  { label: 'RECENSIONI', id: 'recensioni' },
  { label: 'CONTATTI', id: 'contatti' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const barRef = useRef<HTMLDivElement>(null)

  // Barra di avanzamento + stato "scrolled"
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        barRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: document.documentElement,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.3,
          },
        },
      )
      ScrollTrigger.create({
        start: 80,
        end: 'max',
        onToggle: (self) => setScrolled(self.isActive),
      })
    })
    return () => ctx.revert()
  }, [])

  // Voce di menu attiva in base alla sezione visibile
  useEffect(() => {
    const els = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => !!el)
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (open) stopScroll()
    else startScroll()
    return () => startScroll()
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 px-5 md:px-10 flex justify-between items-center transition-all duration-500 ${
          scrolled ? 'py-4 bg-black/45 backdrop-blur-xl' : 'py-6 md:py-8'
        }`}
      >
        <div
          ref={barRef}
          className="absolute top-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-[var(--teal)] to-[var(--amber)]"
          style={{ transform: 'scaleX(0)' }}
        />

        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault()
            scrollToTop()
          }}
          className="text-[17px] font-semibold tracking-tight"
        >
          Nicole Nucci<sup>Psi.</sup>
        </a>

        <nav className="liquid-glass rounded-full px-2 py-2 hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={anchor(link.id)}
              className={`text-[11px] font-medium tracking-[0.12em] px-4 py-1.5 rounded-full transition-colors duration-300 ${
                active === link.id
                  ? 'bg-white/15 text-white'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contatti"
          onClick={anchor('contatti')}
          className="liquid-glass rounded-full px-5 py-2.5 text-[11px] font-medium tracking-[0.12em] text-white/90 hover:text-white hidden md:block"
        >
          PRENOTA ORA
        </a>

        <button
          type="button"
          aria-label={open ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden liquid-glass rounded-full p-3 text-white"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </header>

      {/* Menu mobile a tutto schermo */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-black/90 backdrop-blur-2xl flex flex-col justify-center px-8 transition-all duration-500 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <nav className="flex flex-col gap-2">
          {navLinks.map((link, i) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={anchor(link.id, close)}
              className="accent text-[44px] leading-tight text-white/90 transition-all duration-700"
              style={{
                transitionDelay: open ? `${120 + i * 70}ms` : '0ms',
                opacity: open ? 1 : 0,
                transform: open ? 'translateY(0)' : 'translateY(24px)',
              }}
            >
              {link.label.charAt(0) + link.label.slice(1).toLowerCase()}
            </a>
          ))}
        </nav>
        <a
          href="#contatti"
          onClick={anchor('contatti', close)}
          className="mt-10 self-start bg-white text-black text-[15px] font-medium rounded-full px-8 py-3.5"
        >
          Prenota un colloquio
        </a>
      </div>
    </>
  )
}
