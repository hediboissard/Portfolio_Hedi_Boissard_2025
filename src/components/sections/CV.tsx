import { useState } from 'react'
import { useTranslation } from 'react-i18next'

type ConfettiPiece = {
  id: number
  x: number
  y: number
  color: string
}

const CONFETTI_COLORS = ['#38bdf8', '#a855f7', '#f97316', '#22c55e', '#facc15']

export default function CV() {
  const { t } = useTranslation()
  const [confetti, setConfetti] = useState<ConfettiPiece[]>([])

  const cvHref = `${import.meta.env.BASE_URL}assets/CV_Hedi_Boissard.pdf`

  const triggerConfetti = () => {
    const pieces: ConfettiPiece[] = Array.from({ length: 26 }).map((_, index) => {
      const angle = Math.random() * Math.PI * 2
      const radius = 60 + Math.random() * 60
      return {
        id: Date.now() + index,
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius * -1,
        color: CONFETTI_COLORS[index % CONFETTI_COLORS.length]
      }
    })
    setConfetti(pieces)
    window.setTimeout(() => setConfetti([]), 900)
  }

  return (
    <section className="px-4">
      <div className="max-w-3xl mx-auto flex justify-center">
        <div className="relative inline-flex">
          {confetti.map((piece) => (
            <span
              key={piece.id}
              className="confetti-piece"
              style={
                {
                  '--confetti-x': `${piece.x}px`,
                  '--confetti-y': `${piece.y}px`,
                  backgroundColor: piece.color,
                  left: '50%',
                  top: '50%'
                } as React.CSSProperties
              }
            />
          ))}
          <a
            href={cvHref}
            download
            onClick={triggerConfetti}
            className="inline-flex items-center gap-2 px-8 py-3.5 text-base md:text-lg font-semibold border border-[var(--fg)]/25 rounded-full hover:border-[var(--accent)]/60 hover:text-[var(--accent)] bg-black/40 backdrop-blur-sm shadow-[0_18px_35px_rgba(15,23,42,0.75)] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4-4 4m0 0-4-4m4 4V4"
              />
            </svg>
            {t('cv.download')}
          </a>
        </div>
      </div>
    </section>
  )
}
