import { Users, Baby, PersonStanding, HeartHandshake, UsersRound, Heart } from 'lucide-react'

const patients = [
  { icon: Users, label: 'Adulti' },
  { icon: Baby, label: 'Bambini' },
  { icon: PersonStanding, label: 'Adolescenti' },
  { icon: Heart, label: 'Terza età' },
  { icon: HeartHandshake, label: 'Coppie' },
  { icon: UsersRound, label: 'Gruppi' },
]

export default function Services() {
  return (
    <section id="servizi" className="relative z-10 bg-black px-6 py-28 md:py-36 border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <p className="text-[11px] font-medium tracking-[0.14em] text-white/50 mb-4">SERVIZI</p>
        <h2
          className="text-white mb-6 max-w-xl"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(28px, 3.6vw, 44px)',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
          }}
        >
          Percorsi costruiti su misura
        </h2>
        <p className="text-[15px] leading-relaxed text-white/60 max-w-xl mb-16">
          Sostegno psicologico, colloqui clinici, valutazioni psicodiagnostiche e gestione delle
          emozioni, in presenza o online.
        </p>

        <p className="text-[11px] font-medium tracking-[0.14em] text-white/50 mb-6">
          A CHI MI RIVOLGO
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {patients.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="liquid-glass rounded-2xl px-6 py-8 flex flex-col items-center gap-3 text-center"
            >
              <Icon size={22} strokeWidth={1.5} className="text-white/80" />
              <span className="text-[13px] font-medium tracking-wide text-white/85">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
