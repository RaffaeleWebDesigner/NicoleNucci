import type { MouseEvent } from 'react'
import type Lenis from 'lenis'

let lenis: Lenis | null = null

export const setLenis = (instance: Lenis | null) => {
  lenis = instance
}

export const stopScroll = () => lenis?.stop()
export const startScroll = () => lenis?.start()

export function scrollToId(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  if (lenis) lenis.scrollTo(el, { offset: -64, duration: 1.6 })
  else el.scrollIntoView({ behavior: 'smooth' })
}

export const anchor = (id: string, after?: () => void) => (e: MouseEvent) => {
  e.preventDefault()
  after?.()
  scrollToId(id)
}

export function scrollToTop() {
  if (lenis) lenis.scrollTo(0, { duration: 1.8 })
  else window.scrollTo({ top: 0, behavior: 'smooth' })
}
