const navLinks = [
  { label: 'CHI SONO', href: '#chi-sono' },
  { label: 'SERVIZI', href: '#servizi' },
  { label: 'RECENSIONI', href: '#recensioni' },
  { label: 'CONTATTI', href: '#contatti' },
]

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-10 py-8 flex justify-between items-center">
      <div className="text-[17px] font-semibold tracking-tight">
        Nicole Nucci<sup>Psi.</sup>
      </div>

      <nav className="liquid-glass rounded-full px-2 py-2 hidden md:flex items-center gap-1">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[11px] font-medium tracking-[0.12em] text-white/90 hover:text-white px-4 py-1.5 rounded-full transition-colors duration-200"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href="#contatti"
        className="liquid-glass rounded-full px-5 py-2.5 text-[11px] font-medium tracking-[0.12em] text-white/90 hover:text-white"
      >
        PRENOTA ORA
      </a>
    </header>
  )
}
