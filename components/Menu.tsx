'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useLang } from '@/context/LanguageContext'
import { menuItems, Category } from '@/data/menu'
import MenuCard from './MenuCard'

type Tab = 'all' | Category

export default function Menu() {
  const { tr } = useLang()
  const [activeTab, setActiveTab] = useState<Tab>('all')
  const [visible, setVisible] = useState(true)
  const [animating, setAnimating] = useState(false)
  const [displayedItems, setDisplayedItems] = useState(menuItems)
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)

  // Section title is always visible — cards animate on scroll

  // Intersection observer for cards
  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll('.menu-card-wrap')
    if (!cards) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            ;(entry.target as HTMLElement).style.opacity = '1'
            ;(entry.target as HTMLElement).style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.1 }
    )
    cards.forEach(card => obs.observe(card))
    return () => obs.disconnect()
  }, [displayedItems])

  const switchTab = useCallback((tab: Tab) => {
    if (tab === activeTab || animating) return
    setAnimating(true)

    // Fade out
    if (gridRef.current) {
      gridRef.current.style.opacity = '0'
      gridRef.current.style.transform = 'translateY(16px)'
    }

    setTimeout(() => {
      setActiveTab(tab)
      setDisplayedItems(tab === 'all' ? menuItems : menuItems.filter(i => i.category === tab))

      setTimeout(() => {
        if (gridRef.current) {
          gridRef.current.style.opacity = '1'
          gridRef.current.style.transform = 'translateY(0)'
        }
        setAnimating(false)
      }, 50)
    }, 250)
  }, [activeTab, animating])

  const tabs: { key: Tab; label: string }[] = [
    { key: 'all', label: tr.menu.tabs.all },
    { key: 'shawarma', label: tr.menu.tabs.shawarma },
    { key: 'wraps', label: tr.menu.tabs.wraps },
    { key: 'platters', label: tr.menu.tabs.platters },
  ]

  return (
    <section id="menu" ref={sectionRef} className="pt-12 pb-24 px-6 bg-dark-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div
          className="text-center mb-10"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.7s ease, transform 0.7s ease',
          }}
        >
          <p className="text-gold text-xs tracking-[0.5em] uppercase font-inter mb-4">✦ &nbsp;One Way Shawarma&nbsp; ✦</p>
          <h2 className="text-cream font-playfair text-5xl md:text-6xl mb-4">{tr.menu.title}</h2>
          <p className="text-muted font-inter text-base">{tr.menu.subtitle}</p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-[1px] w-12 bg-gold/40" />
            <div className="w-1 h-1 rounded-full bg-gold" />
            <div className="h-[1px] w-12 bg-gold/40" />
          </div>
        </div>

        {/* Tabs */}
        <div
          className="flex flex-wrap justify-center gap-2 mb-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
          }}
        >
          {tabs.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => switchTab(key)}
              className="font-inter text-xs tracking-widest uppercase px-5 py-2.5 rounded-sm transition-all duration-200 border"
              style={{
                background: activeTab === key ? '#C9A84C' : 'transparent',
                color: activeTab === key ? '#0D0D0D' : '#8A8A7A',
                borderColor: activeTab === key ? '#C9A84C' : 'rgba(255,255,255,0.1)',
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          ref={gridRef}
          style={{ transition: 'opacity 0.25s ease, transform 0.25s ease' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {displayedItems.map((item, i) => (
            <div
              key={item.id}
              className="menu-card-wrap"
              style={{
                opacity: 0,
                transform: 'translateY(40px)',
                transition: `opacity 0.5s ease ${i * 0.06}s, transform 0.5s ease ${i * 0.06}s`,
              }}
            >
              <MenuCard item={item} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
