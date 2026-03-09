import { useTranslation } from 'react-i18next'
import BlurText from './BlurText'
import GlareHover from './GlareHover'

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
        <div className="text-left mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--fg)]">
            <BlurText
              text={t('experience.title')}
              delay={80}
              animateBy="words"
              direction="top"
              as="span"
              className="inline-block"
            />
          </h2>
          <p className="mt-2 text-sm md:text-base text-[var(--muted)]">{t('experience.subtitle')}</p>
        </div>

        <div className="relative">
          <div className="absolute left-3 md:left-6 top-4 bottom-6 w-[3px] bg-[var(--accent)]/90 rounded-full" />

          <div className="space-y-8 md:space-y-10 pl-9 md:pl-14">
            {items.map((exp, i) => (
              <article key={i} className="relative">
                <div className="group absolute -left-7 md:-left-11 top-5 flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    <span className="timeline-pulse inline-flex h-3 w-3 rounded-full bg-[var(--accent)] shadow-[0_0_0_4px_rgba(56,189,248,0.4)]" />
                    <div className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                      <span className="rounded-md bg-black/80 border border-[var(--accent)]/40 px-2 py-1 text-[10px] font-medium text-[var(--fg)] shadow-lg whitespace-nowrap">
                        {exp.duration}
                      </span>
                    </div>
                  </div>
                </div>

                <GlareHover
                  width="100%"
                  height="100%"
                  background="transparent"
                  borderRadius="1.5rem"
                  borderColor="rgba(148,163,184,0.3)"
                  glareColor="#ffffff"
                  glareOpacity={0.15}
                  glareAngle={-35}
                  glareSize={260}
                  transitionDuration={800}
                  playOnce={false}
                  className="w-full border-white/5 bg-transparent"
                >
                  <div className="w-full rounded-3xl bg-black/60 backdrop-blur-sm px-5 py-4 md:px-7 md:py-6 shadow-[0_20px_45px_rgba(15,23,42,0.65)]">
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-base md:text-lg font-semibold text-[var(--fg)]">
                          {exp.job}
                        </h3>
                        <p className="text-sm text-[var(--muted)]">
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
                      <span className="inline-flex items-center rounded-full border border-[var(--accent)]/50 bg-[var(--accent)]/10 px-3 py-1 text-xs md:text-[11px] font-medium text-[var(--fg)] whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="mt-2 md:mt-3 text-sm md:text-[15px] text-[var(--muted)] space-y-1.5 list-disc list-inside md:pl-1">
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
