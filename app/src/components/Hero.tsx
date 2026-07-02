import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { Lock } from 'lucide-react'

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260510_060007_60275ce7-030c-4668-a160-8f364ec537d3.mp4'

export default function Hero() {
  const videoBgRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const progress = Math.min(Math.max(window.scrollY / window.innerHeight, 0), 1)
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const videoBg = videoBgRef.current
    if (!videoBg) return

    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0
    let rafId: number

    const handleMouseMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      targetX = ((e.clientX - cx) / cx) * 20
      targetY = ((e.clientY - cy) / cy) * 20
    }

    const tick = () => {
      currentX += (targetX - currentX) * 0.06
      currentY += (targetY - currentY) * 0.06
      gsap.set(videoBg, { x: currentX, y: currentY })
      rafId = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', handleMouseMove)
    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  const heroOpacity = 1 - scrollProgress
  const heroStyle = {
    opacity: heroOpacity,
    pointerEvents: scrollProgress > 0.5 ? ('none' as const) : ('auto' as const),
  }

  return (
    <>
      <div className="fixed inset-0 z-0 overflow-hidden bg-black" style={heroStyle}>
        <div ref={videoBgRef} className="absolute inset-0 scale-[1.08] origin-center">
          <video
            className="w-full h-full object-cover"
            src={VIDEO_SRC}
            autoPlay
            muted
            loop
            playsInline
            onLoadedMetadata={(e) => {
              e.currentTarget.playbackRate = 1.25
            }}
          />
        </div>
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div
        className="fixed left-0 right-0 z-20 flex flex-col items-center px-6"
        style={{ top: '120px', ...heroStyle }}
      >
        <h1
          className={`text-center transition-all duration-1000 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(40px, 5.4vw, 72px)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          <span className="block text-white">Uno spazio sicuro per ascoltarti.</span>
          <span className="block" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Un percorso su misura per te.
          </span>
        </h1>
      </div>

      <div
        className={`fixed bottom-14 left-0 right-0 z-20 flex flex-col items-center gap-6 px-6 transition-all duration-1000 delay-300 ${
          mounted ? 'translate-y-0' : 'opacity-0 translate-y-6'
        }`}
        style={heroStyle}
      >
        <p className="max-w-[620px] text-[15px] leading-relaxed text-center">
          <span className="text-white">
            Sostegno psicologico, colloqui clinici e percorsi di gestione delle emozioni
            costruiti sulle tue esigenze.
          </span>
          <span className="text-white/55">
            {' '}
            Per adulti, adolescenti, bambini, coppie e gruppi, in presenza o online.
          </span>
        </p>

        <a
          href="#contatti"
          className="bg-white text-black text-[15px] font-medium rounded-full px-8 py-3.5 transition-all duration-200 hover:scale-[1.03] hover:shadow-[0_0_32px_4px_rgba(255,255,255,0.2)] active:scale-[0.97]"
        >
          Prenota un colloquio
        </a>

        <div className="flex items-center gap-2">
          <Lock size={13} strokeWidth={1.5} className="text-white/70" />
          <span className="text-[11px] font-medium tracking-[0.14em] text-white/70">
            ISCRITTA ALL'ORDINE DEGLI PSICOLOGI DELLA TOSCANA — N. 10696
          </span>
        </div>
      </div>
    </>
  )
}
