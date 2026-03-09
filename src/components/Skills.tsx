import { useTranslation } from 'react-i18next'
import BlurText from './BlurText'
import LogoLoop, { type LogoItem } from './LogoLoop'

const LOGOS: LogoItem[] = [
  { src: '/assets/skills/vue.svg', alt: 'Vue.js', title: 'Vue.js' },
  { src: '/assets/skills/react.svg', alt: 'React', title: 'React' },
  { src: '/assets/skills/nextjs.svg', alt: 'Next.js', title: 'Next.js' },
  { src: '/assets/skills/tailwind.svg', alt: 'Tailwind', title: 'Tailwind CSS' },
  { src: '/assets/skills/typescript.svg', alt: 'TypeScript', title: 'TypeScript' },
  { src: '/assets/skills/html.svg', alt: 'HTML', title: 'HTML' },
  { src: '/assets/skills/css.svg', alt: 'CSS', title: 'CSS' },
  { src: '/assets/skills/node.svg', alt: 'Node.js', title: 'Node.js' },
  { src: '/assets/skills/nestjs.svg', alt: 'NestJS', title: 'NestJS' },
  { src: '/assets/skills/symfony.svg', alt: 'Symfony', title: 'Symfony' },
  { src: '/assets/skills/java.svg', alt: 'Java', title: 'Java' },
  { src: '/assets/skills/python.svg', alt: 'Python', title: 'Python' },
  { src: '/assets/skills/php.svg', alt: 'PHP', title: 'PHP' },
  { src: '/assets/skills/git.svg', alt: 'Git', title: 'Git' },
  { src: '/assets/skills/jira.svg', alt: 'JIRA', title: 'JIRA' },
  { src: '/assets/skills/docker.svg', alt: 'Docker', title: 'Docker' },
  { src: '/assets/skills/devops.svg', alt: 'DevOps', title: 'DevOps' }
]

export default function Skills() {
  const { t } = useTranslation()

  return (
    <section
      id="skills"
      className="scroll-mt-24 md:scroll-mt-32 py-20 md:py-24 px-4 md:px-10"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--fg)] mb-14 md:mb-20">
          <BlurText
            text={t('skills.title')}
            delay={80}
            animateBy="words"
            direction="top"
            as="span"
            className="inline-block"
          />
        </h2>

        <div className="relative h-44 md:h-52">
          <LogoLoop
            logos={LOGOS}
            speed={100}
            direction="left"
            logoHeight={78}
            gap={78}
            pauseOnHover={false}
            fadeOut
            fadeOutColor="var(--bg)"
            scaleOnHover={false}
            ariaLabel="Technologies que j'utilise"
          />
        </div>
      </div>
    </section>
  )
}
