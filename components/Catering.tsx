'use client'

import { useEffect, useRef, useState } from 'react'
import { useLang } from '@/context/LanguageContext'
import { whatsappLink } from '@/lib/contact'

export default function Catering() {
  const { tr } = useLang()
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const reveal = (delay: number) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(30px)',
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  })

  return (
    <section id="catering" ref={ref} className="py-24 px-6 bg-dark-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10" style={reveal(0)}>
          <p className="text-gold text-xs tracking-[0.5em] uppercase font-inter mb-4">✦ &nbsp;{tr.catering.eyebrow}&nbsp; ✦</p>
          <h2 className="text-cream font-playfair text-4xl md:text-5xl">{tr.catering.title}</h2>
        </div>

        {/* Banner image — framed so the white artwork sits cleanly on the dark theme */}
        <div className="p-2 md:p-3 border border-gold/30 rounded-sm bg-dark-card" style={reveal(0.15)}>
          <div className="overflow-hidden rounded-sm bg-white">
            <img
              src="/media/party-catering.jpeg"
              alt="Shawarma wrap can be arranged for your party at your place"
              width={1067}
              height={453}
              loading="lazy"
              className="w-full h-auto block"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-10" style={reveal(0.3)}>
          <p className="text-muted font-inter text-base leading-relaxed max-w-2xl text-center md:text-left">
            {tr.catering.desc}
          </p>
          <a
            href={whatsappLink(tr.catering.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 border border-gold text-gold hover:bg-gold hover:text-dark-bg font-inter text-sm tracking-[0.25em] uppercase px-7 py-4 transition-all duration-300 whitespace-nowrap"
          >
            {tr.catering.cta}
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
