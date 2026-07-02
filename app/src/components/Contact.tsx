import { MapPin, Phone, Clock, ShieldCheck } from 'lucide-react'

const hours: [string, string][] = [
  ['Lunedì', '09–20'],
  ['Martedì', '09–20'],
  ['Mercoledì', '09–20'],
  ['Giovedì', '09–20'],
  ['Venerdì', '09–20'],
  ['Sabato', 'Chiuso'],
  ['Domenica', 'Chiuso'],
]

export default function Contact() {
  return (
    <section id="contatti" className="relative z-10 bg-black px-6 py-28 md:py-36 border-t border-white/10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-14">
        <div>
          <p className="text-[11px] font-medium tracking-[0.14em] text-white/50 mb-4">
            CONTATTI
          </p>
          <h2
            className="text-white mb-8"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(28px, 3.6vw, 44px)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
          >
            Prenota il tuo primo colloquio
          </h2>

          <div className="space-y-5 mb-8">
            <div className="flex items-start gap-3">
              <MapPin size={17} strokeWidth={1.5} className="text-white/60 mt-0.5" />
              <div>
                <p className="text-[14px] text-white">Via Milano, 112, 52027 San Giovanni Valdarno AR</p>
                <p className="text-[12px] text-white/45">HGCH+C5 San Giovanni Valdarno, Provincia di Arezzo</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={17} strokeWidth={1.5} className="text-white/60" />
              <a href="tel:+393791434420" className="text-[14px] text-white hover:text-white/70">
                379 143 4420
              </a>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck size={17} strokeWidth={1.5} className="text-white/60" />
              <span className="text-[14px] text-white">LGBTQ+ friendly</span>
            </div>
          </div>

          <a
            href="tel:+393791434420"
            className="inline-block bg-white text-black text-[15px] font-medium rounded-full px-8 py-3.5 transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_32px_4px_rgba(255,255,255,0.2)] active:scale-[0.97]"
          >
            Chiama per un appuntamento
          </a>
        </div>

        <div className="liquid-glass rounded-2xl px-8 py-8">
          <div className="flex items-center gap-2 mb-6">
            <Clock size={16} strokeWidth={1.5} className="text-white/60" />
            <p className="text-[11px] font-medium tracking-[0.14em] text-white/50">
              ORARI DI APERTURA
            </p>
          </div>
          <div className="space-y-3">
            {hours.map(([day, time]) => (
              <div key={day} className="flex items-center justify-between text-[14px]">
                <span className="text-white/75">{day}</span>
                <span className={time === 'Chiuso' ? 'text-white/40' : 'text-white'}>{time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
