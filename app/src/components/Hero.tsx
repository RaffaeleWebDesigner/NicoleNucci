import { useEffect, useRef } from 'react'
import { Lock } from 'lucide-react'
import { gsap } from '../lib/motion'
import { anchor } from '../lib/scroll'
import { Magnetic, primaryBtn } from './ui'

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260510_060007_60275ce7-030c-4668-a160-8f364ec537d3.mp4'

const LINE_1 = ['Uno', 'spazio', 'sicuro', 'per', 'ascoltarti.']
const LINE_2 = ['Un', 'percorso', 'su', 'misura', 'per', 'te.']

function Words({ words, accentLast = false }: { words: string[]; accentLast?: boolean }) {
  return (
    <>
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.14em] -mb-[0.14em]">
          <span
            className={`hero-word inline-block will-change-transform ${
              accentLast && i === words.length - 1 ? 'accent' : ''
            }`}
          >
            {w}
          </span>
          {i < words.length - 1 && ' '}
        </span>
      ))}
    </>
  )
}

export default function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null)
  const videoBgRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const topRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const spacerRef = useRef<HTMLDivElement>(null)

  // Ingresso + dissolvenza allo scroll
  useEffect(() => {
    const mm = gsap.matchMedia()
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from(videoRef.current, { opacity: 0, duration: 2, ease: 'power2.out' })
      gsap.from('.hero-word', {
        yPercent: 115,
        opacity: 0,
        filter: 'blur(12px)',
        duration: 1.4,
        ease: 'power4.out',
        stagger: 0.07,
        delay: 0.25,
      })
      gsap.from('.hero-fade', {
        y: 28,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        stagger: 0.14,
        delay: 1.1,
      })

      gsap
        .timeline({
          scrollTrigger: {
            trigger: spacerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.6,
            onUpdate: (self) => {
              const v = videoRef.current
              if (!v) return
              if (self.progress > 0.98 && !v.paused) v.pause()
              else if (self.progress <= 0.98 && v.paused) v.play().catch(() => {})
            },
          },
        })
        .to(topRef.current, { opacity: 0, y: -90, ease: 'none' }, 0)
        .to(bottomRef.current, { opacity: 0, y: 60, ease: 'none' }, 0)
        .to(wrapRef.current, { opacity: 0, scale: 1.12, ease: 'none' }, 0.15)
    })
    return () => mm.revert()
  }, [])

  // Parallasse del video con il mouse (lerp 0.06)
  useEffect(() => {
    const videoBg = videoBgRef.current
    if (!videoBg) return

    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0
    let rafId: number

    const onMove = (e: MouseEvent) => {
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

    window.addEventListener('mousemove', onMove)
    rafId = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div ref={wrapRef} className="fixed inset-0 z-0 overflow-hidden bg-black">
        <div ref={videoBgRef} className="absolute inset-0 scale-[1.08] origin-center">
          <video
            ref={videoRef}
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
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/60 to-transparent" />
      </div>

      <div
        ref={topRef}
        id="top"
        className="fixed left-0 right-0 top-[120px] [@media(max-height:640px)]:top-24 z-20 flex flex-col items-center px-6"
      >
        <h1
          className="text-center"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(40px, 5.4vw, 72px)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          <span className="block text-white">
            <Words words={LINE_1} accentLast />
          </span>
          <span className="block" style={{ color: 'rgba(255,255,255,0.55)' }}>
            <Words words={LINE_2} />
          </span>
        </h1>
      </div>

      <div
        ref={bottomRef}
        className="fixed bottom-10 md:bottom-14 left-0 right-0 z-20 flex flex-col items-center gap-5 md:gap-6 px-6"
      >
        <p className="hero-fade max-w-[620px] text-[15px] leading-relaxed text-center [@media(max-height:640px)]:hidden">
          <span className="text-white">
            Sostegno psicologico, colloqui clinici e percorsi di gestione delle emozioni
            costruiti sulle tue esigenze.
          </span>
          <span className="text-white/55">
            {' '}
            Per adulti, adolescenti, bambini, coppie e gruppi, in presenza o online.
          </span>
        </p>

        <div className="hero-fade">
          <Magnetic>
            <a href="#contatti" onClick={anchor('contatti')} className={primaryBtn}>
              Prenota un colloquio
            </a>
          </Magnetic>
        </div>

        <div className="hero-fade flex items-center gap-2 text-center">
          <Lock size={13} strokeWidth={1.5} className="text-white/70 shrink-0" />
          <span className="text-[10px] md:text-[11px] font-medium tracking-[0.14em] text-white/70">
            ISCRITTA ALL'ORDINE DEGLI PSICOLOGI DELLA TOSCANA — N. 10696
          </span>
        </div>
      </div>

      <div ref={spacerRef} className="h-screen" aria-hidden />
    </>
  )
}
