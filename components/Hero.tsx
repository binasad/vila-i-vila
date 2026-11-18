'use client'

import { useEffect, useRef } from 'react'
import { useLang } from '@/context/LanguageContext'

export default function Hero() {
  const { tr } = useLang()
  const titleRef = useRef<HTMLHeadingElement>(null)
  const tagRef = useRef<HTMLParagraphElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)
  const estRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const els = [estRef.current, titleRef.current, tagRef.current, btnRef.current]
    els.forEach((el, i) => {
      if (!el) return
      el.style.opacity = '0'
      el.style.transform = 'translateY(28px)'
      setTimeout(() => {
        if (!el) return
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 2100 + i * 180)
    })
  }, [])

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Ken Burns */}
      <div className="absolute inset-0 animate-ken-burns">
        <img
          src="/media/hero.jpeg"
          alt="Shawarma roasting on the grill"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/60 to-dark-bg/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/40 via-transparent to-dark-bg/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p
          ref={estRef}
          className="text-gold text-xs md:text-sm tracking-[0.5em] uppercase font-inter mb-6"
        >
          ✦ &nbsp;{tr.hero.est}&nbsp; ✦
        </p>

        <h1
          ref={titleRef}
          className="font-playfair text-cream leading-none tracking-tight mb-6"
          style={{ fontSize: 'clamp(3rem, 9vw, 7rem)' }}
        >
          One Way<br />Shawarma
        </h1>

        {/* Gold divider */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="h-[1px] w-16 bg-gold/50" />
          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
          <div className="h-[1px] w-16 bg-gold/50" />
        </div>

        <p
          ref={tagRef}
          className="text-cream/80 font-inter text-lg md:text-2xl tracking-widest uppercase mb-10"
        >
          {tr.hero.tagline}
        </p>

        <button
          ref={btnRef}
          onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          className="group inline-flex items-center gap-3 border border-gold text-gold hover:bg-gold hover:text-dark-bg font-inter text-sm tracking-[0.3em] uppercase px-8 py-4 transition-all duration-300"
        >
          {tr.hero.cta}
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
        <div className="w-[1px] h-12 bg-gold/50 animate-[float_2s_ease-in-out_infinite]" />
        <span className="text-gold text-[10px] tracking-[0.3em] uppercase font-inter">Scroll</span>
      </div>
    </section>
  )
}
