import { useTranslation } from 'react-i18next'
import { useRef, useState, useEffect } from 'react'
import SplitText from './SplitText'
import GradientText from './GradientText'

export default function Home() {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLElement>(null)
  const [animationKey, setAnimationKey] = useState(0)
  const leftHomeRef = useRef(false)
  const avatarSrc = `${import.meta.env.BASE_URL}assets/pp_Hedi.png`

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (leftHomeRef.current) {
            setAnimationKey((k) => k + 1)
            leftHomeRef.current = false
          }
        } else {
          leftHomeRef.current = true
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="scroll-mt-24 md:scroll-mt-32 min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 md:gap-20 py-16 px-5 md:py-20 md:pt-24 md:pb-16 md:px-10 max-w-6xl mx-auto"
    >
      <div className="flex-1 w-full text-left max-w-2xl md:max-w-xl flex flex-col justify-between min-h-0 self-stretch">
        <p className="text-sm uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[var(--accent)] mb-4 md:mb-6 font-medium">
          Portfolio
        </p>
        <p className="text-base md:text-lg text-[var(--muted)] mb-3 md:mb-3">
          {t('home.greeting')}
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-4 md:mb-5 text-white">
          <SplitText
            key={animationKey}
            text="Hédi Boissard"
            tag="span"
            splitType="chars"
            className="block text-white"
            delay={120}
            duration={1.4}
          />
        </h1>
        <GradientText
          colors={['#5227FF', '#FF9FFC', '#B19EEF']}
          animationSpeed={8}
          showBorder={false}
          className="text-xl md:text-2xl font-medium mb-6 md:mb-8 text-left"
        >
          {t('home.role')}
        </GradientText>
        <p className="text-base md:text-lg text-[var(--muted)] max-w-lg mb-6 md:mb-10 leading-relaxed md:leading-loose">
          {t('home.description')}
        </p>
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 mb-8 md:mb-10">
          <a
            href="#projects"
            className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-5 sm:px-10 sm:py-5 text-xl sm:text-lg font-medium bg-[var(--accent)] text-white rounded-full hover:opacity-90 transition-colors"
          >
            {t('home.cta_projects')}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center w-full sm:w-auto px-10 py-5 sm:px-10 sm:py-5 text-xl sm:text-lg font-medium border-2 border-[var(--fg)]/30 rounded-full hover:border-[var(--fg)]/50 transition-colors"
          >
            {t('home.cta_contact')}
          </a>
        </div>
        <div className="flex gap-10 text-white">
          <a
            href="https://linkedin.com/in/hedi-boissard-a994ab25b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-80 transition-opacity p-3 -m-3"
            aria-label="LinkedIn"
          >
            <img src="/assets/Linkedin.svg" alt="" className="w-12 h-12 md:w-7 md:h-7 brightness-0 invert" />
          </a>
          <a
            href="https://github.com/hediboissard"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:opacity-80 transition-opacity p-3 -m-3"
            aria-label="GitHub"
          >
            <img src="/assets/GitHub.svg" alt="" className="w-12 h-12 md:w-7 md:h-7 brightness-0 invert" />
          </a>
        </div>
      </div>

      <div className="hidden md:flex flex-1 justify-center md:justify-end min-w-0">
        <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-[var(--fg)]/10 shadow-[0_0_60px_rgba(56,189,248,0.15)] ring-4 ring-purple-500/20 flex-shrink-0">
          <img src={avatarSrc} alt="Hédi Boissard" className="w-full h-full object-cover object-[52%_100%]" />
        </div>
      </div>
    </section>
  )
}
