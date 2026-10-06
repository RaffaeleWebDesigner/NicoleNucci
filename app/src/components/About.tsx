import { useRef } from 'react'
import { BadgeCheck, Brain, GraduationCap, Sprout } from 'lucide-react'
import { useReveal } from '../lib/motion'
import { Eyebrow, SpotCard, Title } from './ui'

const credentials = [
  { icon: GraduationCap, title: 'Laurea in Psicologia Clinica', note: 'Conseguita con il massimo dei voti' },
  { icon: Brain, title: 'Master in Neuropsicologia Clinica', note: 'Formazione post-laurea' },
  { icon: Sprout, title: 'Psicoterapia Cognitivo Neuropsicologica', note: 'Specializzazione in corso' },
  { icon: BadgeCheck, title: 'Ordine degli Psicologi della Toscana', note: 'Sezione A · n. 10696' },
]

export default function About() {
  const ref = useRef<HTMLElement>(null)
  useReveal(ref)

  return (
    <section
      ref={ref}
      id="chi-sono"
      className="relative z-10 bg-black px-6 py-28 md:py-40 border-t border-white/10 overflow-hidden"
    >
      <div className="orb w-[500px] h-[500px] bg-[var(--amber)]/10 -right-40 top-20" />

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-16 lg:gap-24">
        <div className="lg:sticky lg:top-32 self-start">
          <Eyebrow>CHI SONO</Eyebrow>
          <Title>
            Dott.ssa Nicole Nucci,
            <br />
            <span className="accent text-white/60">psicologa clinica</span>
          </Title>

          <div className="mt-12 grid gap-3">
            {credentials.map(({ icon: Icon, title, note }, i) => (
              <div key={title} data-reveal data-delay={0.1 + i * 0.08}>
                <SpotCard className="rounded-2xl px-5 py-4 flex items-center gap-4">
                  <span className="grid place-items-center h-10 w-10 shrink-0 rounded-full bg-white/[0.06] text-[var(--teal)]">
                    <Icon size={18} strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="text-[14px] font-medium text-white">{title}</p>
                    <p className="text-[12px] text-white/50">{note}</p>
                  </div>
                </SpotCard>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6 text-[16px] leading-[1.75] text-white/65 lg:pt-14">
          <p data-reveal className="text-white text-[19px] leading-[1.6]">
            Sono la Dott.ssa Nicole Nucci, psicologa clinica ad Arezzo e San Giovanni Valdarno,
            iscritta all'Ordine degli Psicologi della Toscana – Sezione A (n. 10696).
          </p>
          <p data-reveal>
            Dopo essermi laureata con il massimo dei voti, ho conseguito un Master in
            Neuropsicologia Clinica; attualmente mi sto specializzando in Psicoterapia Cognitivo
            Neuropsicologica.
          </p>
          <p data-reveal>
            Nel mio lavoro offro sostegno psicologico, colloqui clinici, valutazioni
            psicodiagnostiche e percorsi di gestione delle emozioni, costruiti su misura in base ai
            bisogni della persona. L'obiettivo è creare uno spazio sicuro e accogliente in cui poter
            comprendere ciò che si sta vivendo e rafforzare le proprie risorse.
          </p>
          <p data-reveal>
            Mi rivolgo ad adulti, adolescenti, bambini, coppie e gruppi sia in presenza che online,
            accompagnandoli nei momenti di difficoltà emotiva, di cambiamento o di crescita
            personale.
          </p>
          <p data-reveal>
            Il mio lavoro nasce dal desiderio di aiutare le persone a stare meglio con sé stesse e
            con gli altri, promuovendo{' '}
            <span className="accent text-[var(--teal)] text-[20px]">consapevolezza, equilibrio e benessere psicologico</span>.
          </p>
        </div>
      </div>
    </section>
  )
}
