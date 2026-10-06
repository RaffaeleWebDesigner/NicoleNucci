import { useRef } from 'react'
import {
  Baby,
  ClipboardList,
  HeartHandshake,
  MapPin,
  MessageCircleHeart,
  PersonStanding,
  Sunset,
  User,
  Users,
  Video,
  Waves,
} from 'lucide-react'
import { useReveal } from '../lib/motion'
import { Eyebrow, SpotCard, Title } from './ui'

const services = [
  {
    icon: MessageCircleHeart,
    title: 'Sostegno psicologico',
    text: 'Uno spazio di ascolto in cui attraversare i momenti di difficoltà, di cambiamento o di crescita personale.',
  },
  {
    icon: Waves,
    title: 'Colloqui clinici',
    text: 'Incontri per comprendere ciò che si sta vivendo, costruiti su misura in base ai bisogni della persona.',
  },
  {
    icon: ClipboardList,
    title: 'Valutazioni psicodiagnostiche',
    text: 'Un inquadramento accurato per leggere con chiarezza il funzionamento e le risorse di chi si rivolge a me.',
  },
  {
    icon: HeartHandshake,
    title: 'Gestione delle emozioni',
    text: 'Percorsi per riconoscere, comprendere e regolare le emozioni, rafforzando le proprie risorse.',
  },
]

const patients = [
  { icon: User, label: 'Adulti' },
  { icon: PersonStanding, label: 'Adolescenti' },
  { icon: Baby, label: 'Bambini' },
  { icon: Sunset, label: 'Terza età' },
  { icon: HeartHandshake, label: 'Coppie' },
  { icon: Users, label: 'Gruppi' },
]

const steps = [
  { n: '01', title: 'Primo contatto', text: 'Mi chiami o mi scrivi: ci conosciamo e fissiamo insieme un primo appuntamento.' },
  { n: '02', title: 'Primo colloquio', text: 'Ascolto ciò che ti ha portato qui e definiamo insieme gli obiettivi del percorso.' },
  { n: '03', title: 'Il percorso', text: 'Incontri su misura, in presenza o online, al ritmo che serve a te.' },
]

export default function Services() {
  const ref = useRef<HTMLElement>(null)
  useReveal(ref)

  return (
    <section
      ref={ref}
      id="servizi"
      className="relative z-10 bg-black px-6 py-28 md:py-40 border-t border-white/10 overflow-hidden"
    >
      <div className="orb w-[560px] h-[560px] bg-[var(--teal)]/10 -left-48 top-40" />

      <div className="relative max-w-6xl mx-auto">
        <Eyebrow>SERVIZI</Eyebrow>
        <Title className="max-w-2xl">
          Percorsi costruiti <span className="accent text-[var(--teal)]">su misura</span>,
          <br className="hidden md:block" /> in presenza o online
        </Title>

        <div className="mt-14 grid md:grid-cols-2 gap-4">
          {services.map(({ icon: Icon, title, text }, i) => (
            <div key={title} data-reveal data-delay={(i % 2) * 0.1}>
              <SpotCard className="rounded-3xl p-8 h-full">
                <Icon size={26} strokeWidth={1.3} className="text-[var(--teal)] mb-8" />
                <h3 className="text-[22px] text-white tracking-tight mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {title}
                </h3>
                <p className="text-[15px] leading-relaxed text-white/60">{text}</p>
              </SpotCard>
            </div>
          ))}
        </div>

        {/* Modalità */}
        <div className="mt-4 grid sm:grid-cols-2 gap-4">
          <div data-reveal>
            <SpotCard className="rounded-3xl px-8 py-6 flex items-center gap-4">
              <MapPin size={20} strokeWidth={1.5} className="text-[var(--amber)] shrink-0" />
              <div>
                <p className="text-[15px] text-white">In presenza</p>
                <p className="text-[13px] text-white/50">Arezzo e San Giovanni Valdarno</p>
              </div>
            </SpotCard>
          </div>
          <div data-reveal data-delay="0.1">
            <SpotCard className="rounded-3xl px-8 py-6 flex items-center gap-4">
              <Video size={20} strokeWidth={1.5} className="text-[var(--amber)] shrink-0" />
              <div>
                <p className="text-[15px] text-white">Online</p>
                <p className="text-[13px] text-white/50">Ovunque tu sia, con la stessa cura</p>
              </div>
            </SpotCard>
          </div>
        </div>

        {/* A chi mi rivolgo */}
        <div className="mt-24">
          <p data-reveal className="text-[11px] font-medium tracking-[0.18em] text-white/50 mb-6">
            A CHI MI RIVOLGO
          </p>
          <div className="flex flex-wrap gap-3">
            {patients.map(({ icon: Icon, label }, i) => (
              <span
                key={label}
                data-reveal
                data-delay={i * 0.06}
                className="liquid-glass rounded-full pl-4 pr-6 py-3 inline-flex items-center gap-3 text-[14px] text-white/90"
              >
                <Icon size={16} strokeWidth={1.5} className="text-[var(--teal)]" />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Come funziona */}
        <div className="mt-24 grid md:grid-cols-3 gap-10 md:gap-8">
          {steps.map((s, i) => (
            <div key={s.n} data-reveal data-delay={i * 0.12} className="border-t border-white/15 pt-6">
              <span className="accent text-[34px] text-[var(--amber)]">{s.n}</span>
              <h3 className="mt-3 mb-2 text-[18px] text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                {s.title}
              </h3>
              <p className="text-[14px] leading-relaxed text-white/55">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
