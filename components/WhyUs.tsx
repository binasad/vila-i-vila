'use client'

import { useEffect, useRef, useState } from 'react'
import { useLang } from '@/context/LanguageContext'
import { menuItems } from '@/data/menu'

function useCountUp(target: number, duration: number, trigger: boolean) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!trigger) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, 16)
    return () => clearInterval(timer)
  }, [target, duration, trigger])
  return count
}

export default function WhyUs() {
  const { tr } = useLang()
  const ref = useRef<HTMLElement>(null)
  const [triggered, setTriggered] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true)
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const wraps = useCountUp(menuItems.filter(i => i.category !== 'platters').length, 800, triggered)
  const platters = useCountUp(menuItems.filter(i => i.category === 'platters').length, 800, triggered)
  const startPrice = useCountUp(Math.min(...menuItems.map(i => i.price)), 1200, triggered)

  return (
    <section id="whyus" ref={ref} className="py-24 px-6 bg-dark-card border-y border-gold/10">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div
          className="text-center mb-16"
          style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.7s ease, transform 0.7s ease' }}
        >
          <p className="text-gold text-xs tracking-[0.5em] uppercase font-inter mb-4">✦ &nbsp;One Way Shawarma&nbsp; ✦</p>
          <h2 className="text-cream font-playfair text-4xl md:text-5xl">{tr.whyUs.title}</h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {[
            { value: `${wraps}`, label: 'Shawarma & Wraps' },
            { value: `${platters}`, label: 'Special Platters' },
            { value: '100%', label: 'Halal' },
            { value: `Rs ${startPrice}`, label: 'Starting From' },
          ].map(({ value, label }, i) => (
            <div
              key={i}
              className="text-center"
              style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(20px)', transition: `opacity 0.6s ease ${i * 0.1 + 0.3}s, transform 0.6s ease ${i * 0.1 + 0.3}s` }}
            >
              <div className="text-gold font-playfair text-4xl md:text-5xl font-bold mb-2">{value}</div>
              <div className="text-muted font-inter text-sm uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>

        {/* 3 pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: '🔥', ...tr.whyUs.items.fresh, delay: '0s' },
            { icon: '✅', ...tr.whyUs.items.halal, delay: '0.15s' },
            { icon: '🎉', ...tr.whyUs.items.party, delay: '0.3s' },
          ].map(({ icon, title, desc, delay }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center p-8 border border-white/5 hover:border-gold/30 transition-all duration-300 rounded-sm"
              style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(30px)', transition: `opacity 0.7s ease ${delay}, transform 0.7s ease ${delay}` }}
            >
              <div className="text-4xl mb-5">{icon}</div>
              <h3 className="text-cream font-playfair text-xl mb-3">{title}</h3>
              <p className="text-muted font-inter text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
