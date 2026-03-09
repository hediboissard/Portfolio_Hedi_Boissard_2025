import { useTranslation } from 'react-i18next'
import { BlurText } from '@/components/animations'
import { GlareHover } from '@/components/effects'

export default function Experience() {
  const { t } = useTranslation()
  const items = t('experience.items', { returnObjects: true }) as Array<{
    job: string
    period: string
    company: string
    details: string[]
    duration?: string
  }>

  const companyLinks: Record<string, string> = {
    VoxTrend: 'https://www.voxtrend.fr/',
    DotScreen: 'https://dotscreen.com/',
    Webedia: 'https://fr.webedia-group.com/'
  }

  return (
    <section
      id="experience"
      className="scroll-mt-24 md:scroll-mt-32 py-20 md:py-28 px-4 md:px-10"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--fg)] flex justify-center md:justify-start">
            <BlurText
              text={t('experience.title')}
              delay={80}
              animateBy="words"
              direction="top"
              as="span"
              className="inline-block"
            />
          </h2>
          <p className="mt-2 text-sm md:text-base text-[var(--muted)] text-center md:text-left">{t('experience.subtitle')}</p>
        </div>

        <div className="relative">
          <div className="absolute left-2 md:left-6 top-3 bottom-4 md:bottom-6 w-[2px] md:w-[3px] bg-[var(--accent)]/90 rounded-full" />

          <div className="space-y-5 md:space-y-10 pl-6 md:pl-14">
            {items.map((exp, i) => (
              <article key={i} className="relative max-w-[280px] md:max-w-none mx-auto md:mx-0">
                <div className="absolute -left-5 md:-left-11 top-4 md:top-5 flex items-center justify-center">
                  <span className="timeline-pulse inline-flex h-2 w-2 md:h-3 md:w-3 rounded-full bg-[var(--accent)] shadow-[0_0_0_3px_rgba(56,189,248,0.4)] md:shadow-[0_0_0_4px_rgba(56,189,248,0.4)]" />
                </div>

                <GlareHover
                  width="100%"
                  height="100%"
                  background="transparent"
                  borderRadius="1rem"
                  borderColor="rgba(148,163,184,0.3)"
                  glareColor="#ffffff"
                  glareOpacity={0.15}
                  glareAngle={-35}
                  glareSize={260}
                  transitionDuration={800}
                  playOnce={false}
                  className="w-full border-white/5 bg-transparent"
                >
                  <div className="w-full rounded-2xl md:rounded-3xl bg-black/60 backdrop-blur-sm px-3 py-3 md:px-7 md:py-6 shadow-[0_20px_45px_rgba(15,23,42,0.65)]">
                    <div className="flex flex-wrap items-start justify-between gap-2 md:gap-3 mb-2 md:mb-3">
                      <div className="min-w-0 flex-1">
                        <h3 className="text-sm md:text-lg font-semibold text-[var(--fg)] leading-tight mb-1">
                          {exp.job}
                        </h3>
                        <p className="text-xs md:text-sm text-[var(--muted)]">
                          {companyLinks[exp.company] ? (
                            <a
                              href={companyLinks[exp.company]}
                              target="_blank"
                              rel="noreferrer"
                              className="underline decoration-[var(--accent)]/60 decoration-1 underline-offset-2 hover:text-[var(--accent)] transition-colors"
                            >
                              {exp.company}
                            </a>
                          ) : (
                            exp.company
                          )}
                        </p>
                      </div>
                      <span className="group/period relative inline-flex items-center rounded-full border border-[var(--accent)]/50 bg-[var(--accent)]/10 px-2 py-0.5 md:px-3 md:py-1 text-[10px] md:text-[11px] font-medium text-[var(--fg)] whitespace-nowrap shrink-0 cursor-default">
                        {exp.period}
                        <span className="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-2 opacity-0 group-hover/period:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                          <span className="rounded-md bg-black/80 border border-[var(--accent)]/40 px-1.5 py-0.5 text-[9px] md:text-[10px] font-medium text-[var(--fg)] shadow-lg">
                            {exp.duration}
                          </span>
                        </span>
                      </span>
                    </div>

                    <ul className="mt-3 md:mt-4 text-xs md:text-[15px] text-[var(--muted)] space-y-1 md:space-y-1.5 list-disc list-inside md:pl-1 leading-snug">
                      {exp.details?.map((d: string, j: number) => (
                        <li key={j}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </GlareHover>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
