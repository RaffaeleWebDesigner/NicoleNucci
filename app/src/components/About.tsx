export default function About() {
  return (
    <section id="chi-sono" className="relative z-10 bg-black px-6 py-28 md:py-36">
      <div className="max-w-3xl mx-auto">
        <p className="text-[11px] font-medium tracking-[0.14em] text-white/50 mb-4">
          CHI SONO
        </p>
        <h2
          className="text-white mb-10"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(28px, 3.6vw, 44px)',
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
          }}
        >
          Dott.ssa Nicole Nucci, psicologa clinica
        </h2>

        <div className="space-y-5 text-[15px] leading-relaxed text-white/70">
          <p>
            Sono la Dott.ssa Nicole Nucci, psicologa clinica ad Arezzo e San Giovanni Valdarno,
            iscritta all'Ordine degli Psicologi della Toscana – Sezione A (n. 10696).
          </p>
          <p>
            Dopo essermi laureata con il massimo dei voti, ho conseguito un Master in
            Neuropsicologia Clinica; attualmente mi sto specializzando in Psicoterapia
            Cognitivo Neuropsicologica.
          </p>
          <p>
            Nel mio lavoro offro sostegno psicologico, colloqui clinici, valutazioni
            psicodiagnostiche e percorsi di gestione delle emozioni, costruiti su misura in
            base ai bisogni della persona. L'obiettivo è creare uno spazio sicuro e accogliente
            in cui poter comprendere ciò che si sta vivendo e rafforzare le proprie risorse.
          </p>
          <p>
            Mi rivolgo ad adulti, adolescenti, bambini, coppie e gruppi sia in presenza che
            online, accompagnandoli nei momenti di difficoltà emotiva, di cambiamento o di
            crescita personale.
          </p>
          <p>
            Credo profondamente che prendersi cura della propria salute mentale sia importante
            quanto prendersi cura della salute fisica: per questo il mio lavoro nasce dal
            desiderio di aiutare le persone a stare meglio con sé stesse e con gli altri,
            promuovendo consapevolezza, equilibrio e benessere psicologico.
          </p>
        </div>

        <div className="mt-12 liquid-glass rounded-2xl px-7 py-6 inline-block">
          <p className="text-[11px] font-medium tracking-[0.14em] text-white/50 mb-1">
            TITOLO DI STUDIO
          </p>
          <p className="text-[15px] text-white">Laurea in Psicologia Clinica</p>
        </div>
      </div>
    </section>
  )
}
