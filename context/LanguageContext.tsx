'use client'

import { createContext, useContext, ReactNode } from 'react'

interface Translations {
  nav: { menu: string; about: string; catering: string; contact: string }
  hero: { est: string; tagline: string; cta: string }
  infoBar: { delivery: string; deliverySub: string }
  menu: {
    title: string; subtitle: string
    tabs: { all: string; shawarma: string; wraps: string; platters: string }
    order: string; includes: string; popular: string; spicy: string
  }
  catering: { eyebrow: string; title: string; desc: string; cta: string; message: string }
  whyUs: {
    title: string
    items: { fresh: { title: string; desc: string }; halal: { title: string; desc: string }; party: { title: string; desc: string } }
  }
  whatsapp: { tooltip: string; message: string }
  footer: { rights: string; delivery: string }
}

const tr: Translations = {
  nav: { menu: 'Menu', about: 'About', catering: 'Party Orders', contact: 'Contact' },
  hero: { est: 'Signature Shawarma', tagline: 'Fresh. Hot. Delicious.', cta: 'Explore Our Menu' },
  infoBar: { delivery: 'Order on WhatsApp', deliverySub: 'Quick & easy' },
  menu: {
    title: 'Our Menu', subtitle: 'Everything made fresh, served hot',
    tabs: { all: 'All', shawarma: 'Shawarma', wraps: 'Wraps', platters: 'Special Platters' },
    order: 'Order Now', includes: 'Includes', popular: 'Popular', spicy: 'Spicy',
  },
  catering: {
    eyebrow: 'Party Orders',
    title: 'Shawarma at Your Party',
    desc: 'Hosting a get-together? We can set up a live shawarma counter at your place — freshly carved and wrapped for your guests.',
    cta: 'Book for Your Party',
    message: 'Hi! I would like to arrange One Way Shawarma for a party. ',
  },
  whyUs: {
    title: 'Why Choose Us?',
    items: {
      fresh: { title: 'Fresh Daily', desc: 'Every wrap prepared fresh, every single day' },
      halal: { title: '100% Halal', desc: 'Only halal meat, always' },
      party: { title: 'Party Orders', desc: 'Live shawarma setup at your place for events' },
    },
  },
  whatsapp: { tooltip: 'Order on WhatsApp', message: 'Hi! I would like to order from One Way Shawarma. ' },
  footer: { rights: 'All rights reserved', delivery: 'Order directly on WhatsApp or give us a call.' },
}

interface LangCtx { tr: Translations }
const LangContext = createContext<LangCtx>({ tr })

export function LanguageProvider({ children }: { children: ReactNode }) {
  return <LangContext.Provider value={{ tr }}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)
