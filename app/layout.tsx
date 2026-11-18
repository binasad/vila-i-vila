import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'One Way Shawarma — Signature Shawarma, Wraps & Platters',
  description: 'Signature shawarma, loaded wraps and special platters. 100% Halal. Order on WhatsApp: 0300 2189122. Party orders available.',
  keywords: ['shawarma', 'wraps', 'platters', 'halal', 'party catering', 'one way shawarma'],
  openGraph: {
    title: 'One Way Shawarma',
    description: 'Fresh. Hot. Delicious. Signature shawarma, wraps & special platters.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
