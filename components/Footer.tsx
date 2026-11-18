'use client'

import { useLang } from '@/context/LanguageContext'
import { BRAND, OWNER, PHONE_DISPLAY, PHONE_TEL, whatsappLink } from '@/lib/contact'

export default function Footer() {
  const { tr } = useLang()

  const open = () => {
    window.open(whatsappLink(tr.whatsapp.message), '_blank', 'noopener,noreferrer')
  }

  return (
    <footer id="footer" className="bg-dark-card border-t border-gold/15 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="text-gold text-[10px] tracking-[0.4em] uppercase font-inter mb-1">Signature Shawarma</p>
            <h3 className="text-cream font-playfair text-3xl mb-4">{BRAND}</h3>
            <p className="text-muted font-inter text-sm leading-relaxed">{tr.footer.delivery}</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-gold font-inter text-xs tracking-widest uppercase mb-5">Contact</h4>
            <div className="flex flex-col gap-3">
              <p className="text-muted font-inter text-sm flex gap-2">
                <span>👤</span><span>{OWNER} — Owner</span>
              </p>
              <a href={`tel:${PHONE_TEL}`} className="text-muted hover:text-gold font-inter text-sm flex gap-2 transition-colors">
                <span>📞</span><span>{PHONE_DISPLAY}</span>
              </a>
              <p className="text-muted font-inter text-sm flex gap-2">
                <span>🎉</span><span>Party orders at your place</span>
              </p>
              <p className="text-muted font-inter text-sm flex gap-2">
                <span>✅</span><span>100% Halal</span>
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="text-gold font-inter text-xs tracking-widest uppercase mb-5">Quick Order</h4>
              <p className="text-muted font-inter text-sm mb-6 leading-relaxed">
                Place your order directly on WhatsApp — fast, easy, no hassle.
              </p>
            </div>
            <button
              onClick={open}
              className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20b858] text-white font-inter text-sm tracking-wider uppercase px-6 py-3 rounded-sm transition-colors duration-200 w-fit"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Order on WhatsApp
            </button>
          </div>
        </div>

        {/* Gold divider */}
        <div className="h-[1px] bg-gold/15 mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-muted font-inter text-xs">© {new Date().getFullYear()} {BRAND} · {tr.footer.rights}</p>
          <p className="text-muted font-inter text-xs">Shawarma · Wraps · Platters · Halal</p>
        </div>
      </div>
    </footer>
  )
}
