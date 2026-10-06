import { ArrowUp } from 'lucide-react'
import { scrollToTop } from '../lib/scroll'

export default function Footer() {
  return (
    <footer className="relative z-10 bg-black px-6 pt-20 pb-10 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <p className="accent text-[clamp(40px,7vw,96px)] leading-none text-white/90">
              Nicole Nucci
            </p>
            <p className="mt-4 text-[13px] tracking-[0.14em] text-white/50">
              PSICOLOGA CLINICA · AREZZO E SAN GIOVANNI VALDARNO
            </p>
          </div>
          <button
            type="button"
            onClick={scrollToTop}
            className="liquid-glass self-start md:self-end rounded-full px-5 py-3 text-[11px] font-medium tracking-[0.12em] text-white/80 hover:text-white inline-flex items-center gap-2"
          >
            TORNA SU <ArrowUp size={14} />
          </button>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 sm:justify-between text-[12px] text-white/40">
          <p>Iscritta all'Ordine degli Psicologi della Toscana – Sez. A · n. 10696</p>
          <p>P.IVA 02505020517</p>
        </div>
      </div>
    </footer>
  )
}
