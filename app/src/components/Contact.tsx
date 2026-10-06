import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Clock, Heart, MapPin, Navigation, Phone } from 'lucide-react'
import { useReveal } from '../lib/motion'
import { Eyebrow, Magnetic, Title, ghostBtn, primaryBtn } from './ui'

const ADDRESS = 'Via Milano, 112, 52027 San Giovanni Valdarno AR'
const MAPS_QUERY = encodeURIComponent(ADDRESS)

// day = indice JS (0 = domenica)
const hours = [
  { day: 1, label: 'Lunedì', time: '09–20' },
  { day: 2, label: 'Martedì', time: '09–20' },
  { day: 3, label: 'Mercoledì', time: '09–20' },
  { day: 4, label: 'Giovedì', time: '09–20' },
  { day: 5, label: 'Venerdì', time: '09–20' },
  { day: 6, label: 'Sabato', time: 'Chiuso' },
  { day: 0, label: 'Domenica', time: 'Chiuso' },
]

const WEEKDAYS: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }

function romeNow() {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Rome',
    weekday: 'short',
    hour: 'numeric',
    hour12: false,
  }).formatToParts(new Date())
  const weekday = parts.find((p) => p.type === 'weekday')?.value ?? 'Mon'
  const hour = Number(parts.find((p) => p.type === 'hour')?.value ?? 0) % 24
  return { day: WEEKDAYS[weekday] ?? 1, hour }
}

export default function Contact() {
  const ref = useRef<HTMLElement>(null)
  const [now, setNow] = useState(romeNow)
  useReveal(ref)

  useEffect(() => {
    const id = setInterval(() => setNow(romeNow()), 60_000)
    return () => clearInterval(id)
  }, [])

  const isOpen = now.day >= 1 && now.day <= 5 && now.hour >= 9 && now.hour < 20

  return (
    <section
      ref={ref}
      id="contatti"
      className="relative z-10 bg-black px-6 py-28 md:py-40 border-t border-white/10 overflow-hidden"
    >
      <div className="orb w-[600px] h-[600px] bg-[var(--teal)]/10 -right-48 top-10" />

      <div className="relative max-w-6xl mx-auto">
        <Eyebrow>CONTATTI</Eyebrow>
        <Title className="max-w-2xl">
          Il primo passo è{' '}
          <span className="accent text-[var(--teal)]">il più importante</span>
        </Title>
        <p data-reveal data-delay="0.14" className="mt-6 max-w-lg text-[15px] leading-relaxed text-white/60">
          Chiamami per fissare un primo colloquio: ti ascolto, senza impegno e senza giudizio.
        </p>

        <div className="mt-14 grid lg:grid-cols-[1.1fr_1fr] gap-6">
          <div data-reveal className="liquid-glass rounded-[2rem] p-8 md:p-10 flex flex-col justify-between gap-10">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin size={20} strokeWidth={1.5} className="text-[var(--teal)] mt-1 shrink-0" />
                <div>
                  <p className="text-[16px] text-white">{ADDRESS}</p>
                  <p className="text-[12px] text-white/45 mt-1">HGCH+C5 San Giovanni Valdarno, Provincia di Arezzo</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={20} strokeWidth={1.5} className="text-[var(--teal)] shrink-0" />
                <a href="tel:+393791434420" className="text-[22px] tracking-tight text-white hover:text-[var(--teal)] transition-colors">
                  379 143 4420
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Heart size={20} strokeWidth={1.5} className="text-[var(--amber)] shrink-0" />
                <span className="text-[15px] text-white">LGBTQ+ friendly</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Magnetic>
                <a href="tel:+393791434420" className={primaryBtn}>
                  <Phone size={16} /> Chiama ora
                </a>
              </Magnetic>
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`}
                target="_blank"
                rel="noopener noreferrer"
                className={ghostBtn}
              >
                <Navigation size={16} /> Indicazioni <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          <div data-reveal data-delay="0.1" className="liquid-glass rounded-[2rem] p-8 md:p-10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2 text-white/60">
                <Clock size={16} strokeWidth={1.5} />
                <span className="text-[11px] font-medium tracking-[0.18em]">ORARI</span>
              </div>
              <span className="flex items-center gap-2.5 text-[12px] text-white/80">
                <span
                  className={`pulse-dot relative h-2 w-2 rounded-full ${isOpen ? 'bg-emerald-400' : 'bg-white/30'}`}
                />
                {isOpen ? 'Aperto ora' : 'Chiuso ora'}
              </span>
            </div>
            <ul className="divide-y divide-white/10">
              {hours.map(({ day, label, time }) => {
                const today = day === now.day
                return (
                  <li
                    key={day}
                    className={`flex items-center justify-between py-3 text-[15px] ${today ? 'text-white' : 'text-white/55'}`}
                  >
                    <span className="flex items-center gap-3">
                      {label}
                      {today && (
                        <span className="rounded-full bg-[var(--teal)]/20 px-2 py-0.5 text-[10px] tracking-[0.12em] text-[var(--teal)]">
                          OGGI
                        </span>
                      )}
                    </span>
                    <span className={time === 'Chiuso' ? 'text-white/35' : ''}>{time}</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div
          data-reveal
          className="mt-6 overflow-hidden rounded-[2rem] border border-white/10 h-[320px] md:h-[400px]"
        >
          <iframe
            title="Mappa dello studio"
            src={`https://maps.google.com/maps?q=${MAPS_QUERY}&z=15&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-0 opacity-80"
            style={{ filter: 'grayscale(1) invert(0.92) contrast(0.9)' }}
          />
        </div>
      </div>
    </section>
  )
}
