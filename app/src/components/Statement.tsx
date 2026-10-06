import { useEffect, useRef } from 'react'
import { gsap } from '../lib/motion'

const TEXT =
  'Credo profondamente che prendersi cura della propria salute mentale sia importante quanto prendersi cura della salute fisica.'
const ACCENT = new Set(['mentale', 'fisica.'])

export default function Statement() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo(
        '.stmt-word',
        { opacity: 0.14 },
        {
          opacity: 1,
          ease: 'none',
          stagger: 0.12,
          scrollTrigger: { trigger: ref.current, start: 'top 78%', end: 'bottom 55%', scrub: 0.5 },
        },
      )
    })
    return () => mm.revert()
  }, [])

  return (
    <section className="relative z-10 bg-black px-6 py-32 md:py-48 overflow-hidden">
      <div className="orb w-[520px] h-[520px] bg-[var(--teal)]/10 -left-40 top-10" />
      <div className="orb w-[420px] h-[420px] bg-[var(--amber)]/10 -right-32 bottom-0" />

      <div ref={ref} className="relative max-w-5xl mx-auto">
        <p
          className="text-white"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(28px, 4.6vw, 62px)',
            lineHeight: 1.18,
            letterSpacing: '-0.025em',
          }}
        >
          {TEXT.split(' ').map((w, i) => (
            <span key={i} className={`stmt-word ${ACCENT.has(w) ? 'accent text-[var(--teal)]' : ''}`}>
              {w}{' '}
            </span>
          ))}
        </p>
        <p className="mt-10 text-[12px] font-medium tracking-[0.18em] text-white/50">
          — DOTT.SSA NICOLE NUCCI
        </p>
      </div>
    </section>
  )
}
