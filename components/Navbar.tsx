'use client'

import { useEffect, useState } from 'react'
import { useLang } from '@/context/LanguageContext'

export default function Navbar() {
  const { tr } = useLang()

  const links = [
    { label: tr.nav.menu, id: 'menu' },
    { label: tr.nav.catering, id: 'catering' },
    { label: tr.nav.about, id: 'whyus' },
    { label: tr.nav.contact, id: 'footer' },
  ]
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(13,13,13,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.15)' : 'none',
        padding: scrolled ? '12px 0' : '20px 0',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex flex-col items-start">
          <span className="text-gold text-[10px] tracking-[0.35em] uppercase font-inter">Signature Shawarma</span>
          <span className="text-cream font-playfair text-2xl font-bold leading-tight tracking-tight">One Way Shawarma</span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {links.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-cream/70 hover:text-gold text-sm tracking-widest uppercase font-inter transition-colors duration-200"
            >
              {label}
            </button>
          ))}
        </div>

        {/* Mobile right */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="flex flex-col gap-[5px] p-1"
            aria-label="Menu"
          >
            <span className={`block w-6 h-[1.5px] bg-cream transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-cream transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-[1.5px] bg-cream transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{ maxHeight: menuOpen ? '260px' : '0', background: 'rgba(13,13,13,0.98)' }}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="text-cream/80 text-sm tracking-widest uppercase font-inter text-left py-1 border-b border-white/5"
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
