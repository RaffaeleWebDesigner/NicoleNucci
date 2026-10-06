import { useRef, type MouseEvent, type ReactNode } from 'react'
import { gsap } from '../lib/motion'

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p
      data-reveal
      className="flex items-center gap-3 text-[11px] font-medium tracking-[0.18em] text-[var(--teal)] mb-5"
    >
      <span className="h-px w-8 bg-[var(--teal)]/60" />
      {children}
    </p>
  )
}

export function Title({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <h2
      data-reveal
      data-delay="0.08"
      className={`text-white ${className}`}
      style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 400,
        fontSize: 'clamp(30px, 4.2vw, 56px)',
        lineHeight: 1.1,
        letterSpacing: '-0.025em',
      }}
    >
      {children}
    </h2>
  )
}

/** Card con alone luminoso che segue il cursore. */
export function SpotCard({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }
  return (
    <div onMouseMove={onMove} className={`spot ${className}`}>
      {children}
    </div>
  )
}

/** Effetto magnetico leggero: l'elemento segue il cursore quando è vicino. */
export function Magnetic({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLSpanElement>(null)

  const move = (e: MouseEvent) => {
    const el = ref.current
    if (!el || window.matchMedia('(hover: none)').matches) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - (r.left + r.width / 2)) * 0.22
    const y = (e.clientY - (r.top + r.height / 2)) * 0.32
    gsap.to(el, { x, y, duration: 0.5, ease: 'power3.out' })
  }
  const leave = () => {
    if (ref.current) gsap.to(ref.current, { x: 0, y: 0, duration: 0.9, ease: 'elastic.out(1, 0.4)' })
  }

  return (
    <span ref={ref} onMouseMove={move} onMouseLeave={leave} className="inline-block">
      {children}
    </span>
  )
}

export const primaryBtn =
  'inline-flex items-center justify-center gap-2 bg-white text-black text-[15px] font-medium rounded-full px-8 py-3.5 transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_32px_4px_rgba(255,255,255,0.2)] active:scale-[0.97]'

export const ghostBtn =
  'liquid-glass inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-[15px] font-medium text-white/90 hover:text-white transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]'
