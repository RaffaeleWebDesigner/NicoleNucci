import { useEffect, useRef, useState } from 'react'
import { gsap, ScrollTrigger, useReveal } from '../lib/motion'
import { Eyebrow, Title } from './ui'

type Phase = 'Inspira' | 'Trattieni' | 'Espira'

export default function Breathe() {
  const sectionRef = useRef<HTMLElement>(null)
  const circleRef = useRef<HTMLDivElement>(null)
  const [phase, setPhase] = useState<Phase>('Inspira')

  useReveal(sectionRef)

  useEffect(() => {
    const circle = circleRef.current
    if (!circle) return
    const ctx = gsap.context(() => {
      gsap.set(circle, { scale: 0.55 })
      const tl = gsap.timeline({ repeat: -1, paused: true })
      tl.call(() => setPhase('Inspira'))
        .to(circle, { scale: 1, duration: 4, ease: 'sine.inOut' })
        .call(() => setPhase('Trattieni'))
        .to({}, { duration: 2 })
        .call(() => setPhase('Espira'))
        .to(circle, { scale: 0.55, duration: 6, ease: 'sine.inOut' })

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 65%',
        end: 'bottom 35%',
        onToggle: (self) => (self.isActive ? tl.play() : tl.pause()),
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative z-10 bg-black px-6 py-28 md:py-40 overflow-hidden border-t border-white/10"
    >
      <div className="orb w-[640px] h-[640px] bg-[var(--teal)]/10 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />

      <div className="relative max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <Eyebrow>UN MOMENTO PER TE</Eyebrow>
          <Title>
            Respira <span className="accent text-[var(--teal)]">con me.</span>
          </Title>
          <p data-reveal data-delay="0.16" className="mt-6 text-[15px] leading-relaxed text-white/60 max-w-md">
            A volte, prima di qualsiasi percorso, basta fermarsi un istante. Segui il ritmo del
            cerchio: inspira, trattieni, espira.
          </p>
        </div>

        <div data-reveal className="relative mx-auto w-[260px] h-[260px] sm:w-[340px] sm:h-[340px]" aria-label="Esercizio di respirazione guidata">
          <div ref={circleRef} className="absolute inset-0">
            <div className="absolute inset-0 rounded-full border border-white/15" />
            <div className="absolute inset-[9%] rounded-full border border-white/10" />
            <div
              className="absolute inset-[18%] rounded-full"
              style={{
                background:
                  'radial-gradient(circle at 35% 30%, rgba(127,200,196,0.75), rgba(127,200,196,0.18) 55%, rgba(240,184,110,0.25) 100%)',
                boxShadow: '0 0 90px 10px rgba(127,200,196,0.28)',
              }}
            />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="accent text-[34px] text-white">{phase}</span>
            <span className="mt-1 text-[10px] tracking-[0.2em] text-white/60">4 · 2 · 6 SECONDI</span>
          </div>
        </div>
      </div>
    </section>
  )
}
