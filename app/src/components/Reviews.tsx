import { useRef } from 'react'
import { BadgeCheck, Star } from 'lucide-react'
import { useReveal } from '../lib/motion'
import { Eyebrow, Title } from './ui'

export default function Reviews() {
  const ref = useRef<HTMLElement>(null)
  useReveal(ref)

  return (
    <section
      ref={ref}
      id="recensioni"
      className="relative z-10 bg-black px-6 py-28 md:py-40 border-t border-white/10 overflow-hidden"
    >
      <div className="orb w-[520px] h-[520px] bg-[var(--amber)]/10 left-1/2 -translate-x-1/2 top-24" />

      <div className="relative max-w-4xl mx-auto">
        <Eyebrow>RECENSIONI</Eyebrow>
        <Title>
          Le parole di chi ha <span className="accent text-[var(--teal)]">già iniziato</span>
        </Title>

        <figure data-reveal className="mt-14 liquid-glass rounded-[2rem] px-7 py-10 md:px-14 md:py-14">
          <div className="flex items-center gap-1 mb-8" aria-label="5 stelle su 5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={15} className="fill-[var(--amber)] text-[var(--amber)]" />
            ))}
          </div>

          <blockquote
            className="accent text-white/90"
            style={{ fontSize: 'clamp(22px, 2.6vw, 32px)', lineHeight: 1.4 }}
          >
            “Ho iniziato il mio percorso con la Dott.ssa Nicole Nucci in un momento di forte
            confusione e posso dire di aver trovato non solo una professionista estremamente
            competente, ma soprattutto una persona di rara empatia. Mi sono sentito accolto e
            ascoltato senza mai percepire il peso del giudizio. Grazie alla sua guida sto
            acquisendo strumenti preziosi per conoscermi meglio. La consiglio vivamente a chiunque
            cerchi un supporto concreto e umano.”
          </blockquote>

          <figcaption className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
            <div className="flex items-center gap-4">
              <span className="grid place-items-center h-11 w-11 rounded-full bg-white/10 text-[15px] font-medium">
                M
              </span>
              <div>
                <p className="text-[15px] font-medium text-white">Michele</p>
                <p className="flex items-center gap-1.5 text-[12px] text-[var(--teal)]">
                  <BadgeCheck size={14} /> Paziente verificato
                </p>
              </div>
            </div>
            <p className="text-[12px] text-white/50">20 Febbraio 2026</p>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
