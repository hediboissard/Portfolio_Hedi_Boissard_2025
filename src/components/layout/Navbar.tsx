import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const MENU_IDS = ['home', 'about', 'skills', 'experience', 'projects', 'contact'] as const

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [hovered, setHovered] = useState<string | null>(null)

  const base = import.meta.env.BASE_URL || '/'
  const frFlag = `${base}assets/flags/fr.svg`
  const ukFlag = `${base}assets/flags/uk.svg`
  const lang = i18n.language.startsWith('fr') ? 'fr' : 'en'

  const setLang = (next: 'fr' | 'en') => {
    if (lang === next) return
    void i18n.changeLanguage(next)
  }

  const scrollTo = (id: string) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (!el) return

    const header = document.querySelector('header')
    const headerHeight =
      header && header instanceof HTMLElement ? header.offsetHeight : 64

    const extraOffset = 16
    const rect = el.getBoundingClientRect()
    const targetY = rect.top + window.scrollY - headerHeight - extraOffset

    window.scrollTo({
      top: Math.max(targetY, 0),
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 16)
        for (const id of MENU_IDS) {
          const el = document.getElementById(id)
          if (el) {
            const { top } = el.getBoundingClientRect()
            if (top >= -80 && top <= 120) {
              setActive(id)
              break
            }
          }
        }
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const hasBackground = scrolled || open

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasBackground ? 'bg-[var(--bg)]/85 backdrop-blur-md border-b border-[var(--fg)]/5' : ''
      }`}
    >
      <nav className="w-full max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between gap-12">
        <button
          onClick={() => scrollTo('home')}
          className="text-2xl font-semibold tracking-tight text-[var(--fg)] hover:text-[var(--accent)] transition-colors"
        >
          HB
        </button>

        <div
          className="hidden md:flex items-center gap-8"
          onMouseLeave={() => setHovered(null)}
        >
          {MENU_IDS.map((id) => {
            const isActive = active === id && (hovered === null || hovered === id)
            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                onMouseEnter={() => setHovered(id)}
                className={`group relative py-2 text-sm tracking-wide transition-all duration-300 ${
                  isActive ? 'text-[var(--accent)]' : 'text-[var(--muted)] hover:text-[var(--fg)]'
                }`}
              >
                <span className="relative z-10 inline-block">
                  {t(`nav.${id}`)}
                </span>
                <span
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full transition-all duration-300 ease-out ${
                    isActive ? 'w-full bg-[var(--accent)]' : 'w-0 bg-[var(--accent)] group-hover:w-full'
                  }`}
                />
              </button>
            )
          })}
          <div className="flex items-center gap-1 pl-6 ml-2 border-l border-[var(--fg)]/10">
            <button
              type="button"
              onClick={() => setLang('fr')}
              className={`flex items-center justify-center w-8 h-8 rounded-full transition ring-offset-2 ring-offset-[var(--bg)] ${
                lang === 'fr'
                  ? 'ring-2 ring-[var(--accent)] opacity-100'
                  : 'opacity-60 hover:opacity-100'
              }`}
              aria-label="Afficher le site en français"
              aria-pressed={lang === 'fr'}
            >
              <img src={frFlag} alt="" className="w-5 h-5 object-contain" />
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`flex items-center justify-center w-8 h-8 rounded-full transition ring-offset-2 ring-offset-[var(--bg)] ${
                lang === 'en'
                  ? 'ring-2 ring-[var(--accent)] opacity-100'
                  : 'opacity-60 hover:opacity-100'
              }`}
              aria-label="Show site in English"
              aria-pressed={lang === 'en'}
            >
              <img src={ukFlag} alt="" className="w-5 h-5 object-contain" />
            </button>
          </div>
        </div>

        <button
          className="md:hidden p-2 text-[var(--fg)]"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {open && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-neutral-900/95 backdrop-blur-sm border-b border-[var(--fg)]/10 py-4 px-4 flex flex-col gap-3">
          {MENU_IDS.map((id) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`text-left text-sm py-2 px-2 rounded-md transition-colors ${active === id ? 'text-[var(--accent)]' : 'text-[var(--fg)]'}`}
            >
              {t(`nav.${id}`)}
            </button>
          ))}
          <div className="pt-3 mt-2 border-t border-[var(--fg)]/10 flex items-center gap-3">
            <button
              type="button"
              onClick={() => setLang('fr')}
              className={`inline-flex items-center gap-2 text-sm transition ${
                lang === 'fr' ? 'text-[var(--accent)]' : 'text-[var(--muted)] hover:text-[var(--fg)]'
              }`}
              aria-label="Afficher le site en français"
              aria-pressed={lang === 'fr'}
            >
              <img src={frFlag} alt="" className="w-5 h-5 object-contain" />
              <span>Français</span>
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`inline-flex items-center gap-2 text-sm transition ${
                lang === 'en' ? 'text-[var(--accent)]' : 'text-[var(--muted)] hover:text-[var(--fg)]'
              }`}
              aria-label="Show site in English"
              aria-pressed={lang === 'en'}
            >
              <img src={ukFlag} alt="" className="w-5 h-5 object-contain" />
              <span>English</span>
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
