import { useTranslation } from 'react-i18next'
import { BlurText } from '@/components/animations'

const PROJECTS = [
  {
    key: 'mijote',
    title: 'Mijoté',
    url: 'https://mijote-dj44.vercel.app/',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'NextAuth', 'Tailwind CSS', 'Supabase', 'Vercel'],
  },
  {
    key: 'taskOrbit',
    title: 'TaskOrbit',
    url: 'https://task-orbit-sooty.vercel.app/',
    tech: ['Nuxt 3', 'Vue.js', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Tailwind CSS', 'Railway', 'Vercel'],
  },
] as const

export default function Projects() {
  const { t } = useTranslation()

  return (
    <section
      id="projects"
      className="scroll-mt-24 md:scroll-mt-32 py-20 md:py-28 px-4 md:px-10"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
          {PROJECTS.map((project) => (
            <div
              key={project.key}
              className="flex flex-col rounded-2xl bg-[#101320] border border-white/5 shadow-[0_20px_45px_rgba(15,23,42,0.9)] overflow-hidden"
            >
              {/* Live preview — click redirects to the live site */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Voir ${project.title}`}
                className="relative block overflow-hidden bg-[#0a0e1a] cursor-pointer group"
                style={{ height: '200px' }}
              >
                <iframe
                  src={project.url}
                  title={project.title}
                  loading="lazy"
                  className="absolute top-0 left-0 border-0 pointer-events-none"
                  style={{
                    width: '1280px',
                    height: '900px',
                    transform: 'scale(0.38)',
                    transformOrigin: 'top left',
                  }}
                />
                {/* bottom fade so the card body blends in */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#101320] via-transparent to-transparent opacity-80 pointer-events-none" />
                {/* hover CTA */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/25">
                  <span className="bg-[var(--accent)] text-white text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                    {t('projects.visit')} ↗
                  </span>
                </div>
              </a>

              {/* Card body */}
              <div className="flex flex-col gap-3 px-5 py-5 md:px-6 md:py-6">
                <div>
                  <p className="text-[11px] md:text-xs text-[var(--accent)] font-semibold uppercase tracking-widest mb-1">
                    {t(`projects.labels.${project.key}`)}
                  </p>
                  <h3 className="text-xl md:text-2xl font-semibold text-[var(--fg)]">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm md:text-[15px] text-[var(--muted)] leading-relaxed">
                  {t(`projects.items.${project.key}`)}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-1">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] md:text-xs px-2.5 py-1 rounded-full bg-[var(--accent)]/15 text-[var(--fg)] font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
