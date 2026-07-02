import { Star } from 'lucide-react'

export default function Reviews() {
  return (
    <section id="recensioni" className="relative z-10 bg-black px-6 py-28 md:py-36 border-t border-white/10">
      <div className="max-w-3xl mx-auto">
        <p className="text-[11px] font-medium tracking-[0.14em] text-white/50 mb-4">
          RECENSIONI
        </p>
        <h2
          className="text-white mb-14"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(28px, 3.6vw, 44px)',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
          }}
        >
          Cosa dicono i miei pazienti
        </h2>

        <div className="liquid-glass rounded-2xl px-8 py-9">
          <div className="flex items-center gap-1 mb-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={14} className="fill-white text-white" />
            ))}
          </div>
          <p className="text-[15px] leading-relaxed text-white/80 mb-7">
            "Ho iniziato il mio percorso con la Dott.ssa Nicole Nucci in un momento di forte
            confusione e posso dire di aver trovato non solo una professionista estremamente
            competente, ma soprattutto una persona di rara empatia. Mi sono sentito accolto e
            ascoltato senza mai percepire il peso del giudizio. Grazie alla sua guida sto
            acquisendo strumenti preziosi per conoscermi meglio. La consiglio vivamente a
            chiunque cerchi un supporto concreto e umano."
          </p>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[14px] font-medium text-white">Michele</p>
              <p className="text-[12px] text-white/50">Paziente verificato</p>
            </div>
            <p className="text-[12px] text-white/50">20 Febbraio 2026</p>
          </div>
        </div>
      </div>
    </section>
  )
}
