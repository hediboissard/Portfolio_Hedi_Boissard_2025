import { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'motion/react'
import { BlurText } from '@/components/animations'

const PROJECTS = [
  { key: 'moodify', title: 'Moodify', tech: ['Vue.js', 'Node.js', 'Express', 'Spotify API'], github: 'https://github.com/hediboissard/Moodify' },
  { key: 'fossiles', title: 'E-commerce Fossiles', tech: ['Vue.js', 'Tailwind'], github: 'https://github.com/hediboissard/Projet_Final_Vue_Js' },
  { key: 'devops', title: 'Projet DevOps Cars', tech: ['DevOps', 'CI/CD', 'Git'], github: 'https://github.com/hediboissard/Projet_Cars_DevOps' },
  { key: 'comptinou', title: 'Comptinou', tech: ['Android', 'Java', 'Kotlin'], github: 'https://github.com/hediboissard/Comptinou' }
]

export default function Projects() {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)

  const total = PROJECTS.length

  const paginate = (dir: 1 | -1) => {
    setDirection(dir)
    setCurrentIndex((prev) => (prev + dir + total) % total)
  }

  const handleNext = () => {
    paginate(1)
  }

  const handlePrev = () => {
    paginate(-1)
  }

  const currentProject = PROJECTS[currentIndex]

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0]
    touchStartX.current = touch.clientX
    touchStartY.current = touch.clientY
  }

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current == null || touchStartY.current == null) return
    const touch = e.changedTouches[0]
    const dx = touch.clientX - touchStartX.current
    const dy = touch.clientY - touchStartY.current

    const absDx = Math.abs(dx)
    const absDy = Math.abs(dy)

    if (absDx > 40 && absDx > absDy) {
      if (dx < 0) {
        handleNext()
      } else {
        handlePrev()
      }
    }

    touchStartX.current = null
    touchStartY.current = null
  }

  const variants = {
    enter: (dir: 1 | -1) => ({
      x: dir === 1 ? 40 : -40,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (dir: 1 | -1) => ({
      x: dir === 1 ? -40 : 40,
      opacity: 0
    })
  }

  return (
    <section
      id="projects"
      className="scroll-mt-24 md:scroll-mt-32 py-20 md:py-28 px-4 md:px-10"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center md:items-stretch">
        <h2 className="w-full flex justify-center md:justify-start text-2xl md:text-3xl font-semibold tracking-tight text-[var(--fg)] mb-10">
          <BlurText
            text={t('projects.title')}
            delay={80}
            animateBy="words"
            direction="top"
            as="span"
            className="inline-block"
          />
        </h2>

        <div
          className="w-full flex items-center justify-center gap-3 md:gap-8"
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') handlePrev()
            if (e.key === 'ArrowRight') handleNext()
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Projet précédent"
            className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 text-[var(--fg)] hover:bg-white/10 transition-colors"
          >
            <span className="text-lg">{'‹'}</span>
          </button>

          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.article
              key={currentProject.key}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                duration: 0.35,
                ease: 'easeOut'
              }}
              className="relative w-full max-w-[260px] sm:max-w-md md:max-w-3xl rounded-2xl sm:rounded-3xl bg-[#101320] border border-white/5 shadow-[0_20px_45px_rgba(15,23,42,0.9)] px-3 py-4 sm:px-6 md:px-10 sm:py-6 md:py-8"
            >
              <h3 className="text-base sm:text-xl md:text-2xl font-semibold text-[var(--fg)] mb-1 sm:mb-2">
                {currentProject.title}
              </h3>
              <p className="text-xs sm:text-base text-[var(--muted)] mb-2 sm:mb-4 md:mb-5 leading-snug">
                {t(`projects.items.${currentProject.key}`)}
              </p>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-5">
                {currentProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] sm:text-xs md:text-[13px] px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-[var(--accent)]/15 text-[var(--fg)] font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={currentProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-1 sm:mt-2 block w-full rounded-full bg-black/60 border border-black/60 hover:border-[var(--accent)]/60 px-3 py-2 sm:px-5 sm:py-3 text-xs sm:text-sm md:text-[15px] text-[var(--fg)] transition-colors"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-[var(--muted)]">
                      <path
                        fill="currentColor"
                        d="M12 .5C5.648.5.5 5.648.5 12c0 5.086 3.292 9.39 7.865 10.914.575.105.785-.25.785-.555 0-.274-.01-1.001-.015-1.965-3.199.695-3.875-1.542-3.875-1.542-.523-1.327-1.277-1.68-1.277-1.68-1.044-.714.079-.699.079-.699 1.155.081 1.763 1.187 1.763 1.187 1.026 1.758 2.691 1.25 3.347.956.104-.743.402-1.25.73-1.538-2.553-.29-5.235-1.276-5.235-5.68 0-1.255.45-2.282 1.187-3.087-.119-.29-.515-1.457.112-3.04 0 0 .966-.31 3.166 1.18a10.96 10.96 0 0 1 2.883-.388c.977.005 1.963.132 2.883.388 2.2-1.49 3.164-1.18 3.164-1.18.629 1.583.233 2.75.114 3.04.74.805 1.185 1.832 1.185 3.087 0 4.417-2.687 5.386-5.252 5.671.414.357.783 1.062.783 2.141 0 1.545-.014 2.79-.014 3.17 0 .308.208.666.79.553C20.713 21.385 24 17.083 24 12 24 5.648 18.352.5 12 .5Z"
                      />
                    </svg>
                    <span className="font-medium">GitHub</span>
                  </div>
                  <span className="text-[11px] md:text-xs text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors">
                    {t('projects.open_repo')} ↗
                  </span>
                </div>
              </a>
            </motion.article>
          </AnimatePresence>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Projet suivant"
            className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 border border-white/10 text-[var(--fg)] hover:bg-white/10 transition-colors"
          >
            <span className="text-lg">{'›'}</span>
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {PROJECTS.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => {
                if (index === currentIndex) return
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? 'w-5 bg-[var(--accent)]'
                  : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Aller au projet ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
