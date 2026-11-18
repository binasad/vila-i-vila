'use client'

import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [hidden, setHidden] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const t1 = setTimeout(() => setFadeOut(true), 1400)
    const t2 = setTimeout(() => setHidden(true), 2000)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (hidden) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-dark-bg transition-opacity duration-600"
      style={{ opacity: fadeOut ? 0 : 1, pointerEvents: fadeOut ? 'none' : 'all', transition: 'opacity 0.6s ease' }}
    >
      <div className="flex flex-col items-center gap-6">
        <div className="text-center">
          <p className="text-gold text-sm tracking-[0.4em] uppercase mb-2 font-inter">Signature Shawarma</p>
          <h1 className="text-cream text-4xl md:text-6xl font-playfair font-bold tracking-tight">
            One Way Shawarma
          </h1>
        </div>
        <div className="w-48 h-[1px] bg-dark-card2 relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 bg-gold animate-[goldLine_1.2s_ease_forwards]" />
        </div>
        <p className="text-muted text-xs tracking-[0.3em] uppercase font-inter">Fresh · Hot · Halal</p>
      </div>
    </div>
  )
}
