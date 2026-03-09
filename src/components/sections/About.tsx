import { useState, useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { BlurText, TextType } from '@/components/animations'

const LOADING_DURATION = 1200

const TAG_KEYS = ['autonomy', 'teamwork', 'creativity', 'adaptability'] as const

const CHAT_ITEMS = [
  { q: 'about.chat.q1', a: 'about.chat.a1' },
  { q: 'about.chat.q2', a: 'about.chat.a2' },
  { q: 'about.chat.q3', a: 'about.chat.a3' }
] as const

type InteractionStatus = 'typing' | 'answered'

type Interaction = {
  questionIndex: number
  status: InteractionStatus
}

export default function About() {
  const { t, i18n } = useTranslation()
  const answerRef = useRef<HTMLDivElement | null>(null)
  const conversationRef = useRef<HTMLDivElement | null>(null)

  const rawAboutText = t('about.text')
  const paragraphs = rawAboutText
    .split(/\n\n+/)
    .map((p) => p.trim())
    .filter((p) => p.length > 0)
  const [currentParagraph, setCurrentParagraph] = useState(0)

  const introText = paragraphs[0] ?? ''

  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  )
  const [interactions, setInteractions] = useState<Interaction[]>([])
  const [availableQuestions, setAvailableQuestions] = useState<number[]>(
    CHAT_ITEMS.map((_, index) => index)
  )

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
    }, 20000)

    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    if (!conversationRef.current || interactions.length === 0) return

    conversationRef.current.scrollTo({
      top: conversationRef.current.scrollHeight,
      behavior: 'smooth'
    })
  }, [interactions.length])

  const handleQuestionClick = (questionIndex: number) => {
    if (!availableQuestions.includes(questionIndex)) return

    setAvailableQuestions((prev) => prev.filter((index) => index !== questionIndex))

    setInteractions((prev) => {
      const interactionPosition = prev.length
      const next: Interaction[] = [...prev, { questionIndex, status: 'typing' }]

      setTimeout(() => {
        setInteractions((current) =>
          current.map((interaction, index) =>
            index === interactionPosition ? { ...interaction, status: 'answered' } : interaction
          )
        )
      }, LOADING_DURATION)

      return next
    })
  }

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="about"
      className="scroll-mt-24 md:scroll-mt-32 py-16 md:py-20 px-4 md:px-10"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--fg)] flex justify-center md:justify-start mt-10 mb-8 md:mb-12">
          <BlurText
            text={t('about.sectionTitle')}
            delay={80}
            animateBy="words"
            direction="top"
            as="span"
            className="inline-block"
          />
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start md:items-stretch">
          {/* Left column: chat "phone" */}
          <div className="order-2 md:order-1 flex flex-col items-center gap-6">
            <div className="w-full max-w-[320px]">
              <div className="rounded-[40px] bg-black text-white row-span-4 overflow-hidden flex flex-col relative h-[70vh] md:h-[520px] max-h-[680px]">
                {/* Top bar */}
                <div className="bg-[#292929]/90 backdrop-blur-md h-[144px] w-full p-5 absolute z-20">
                    <div className="flex justify-between w-full text-xs text-white/80">
                      <div>{time}</div>
                      <div className="flex items-center justify-center">
                        <img
                          src={`${import.meta.env.BASE_URL}assets/resau_wifi_batterie.png`}
                          alt=""
                          className="h-5 w-auto opacity-90"
                        />
                      </div>
                    </div>
                  <div className="w-full flex justify-between items-center mt-4">
                    <div className="text-blue-500 text-2xl">{'<'}</div>
                    <div className="flex flex-col items-center text-white gap-1">
                      <img
                        className="size-16 rounded-full border border-white/10 object-cover"
                        src={`${import.meta.env.BASE_URL}assets/Memoji_Hedi.png`}
                        alt="Avatar Hédi"
                      />
                      <span className="text-xs font-medium">Hédi</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleContactClick}
                      className="flex items-center justify-center size-8 rounded-full bg-gray-500/20"
                    >
                      <span className="text-blue-500 text-xl">@</span>
                    </button>
                  </div>
                </div>

                {/* Chat content */}
                <div
                  ref={conversationRef}
                  className="flex-1 flex flex-col pt-32 pb-5 px-3 space-y-3 overflow-y-auto scrollbar-hide"
                >
                  {introText && (
                    <div className="mr-10 mt-8 flex flex-col">
                      <p className="bg-zinc-800 rounded-[30px] px-4 py-3 text-xs leading-relaxed text-white/90">
                        {introText}
                      </p>
                    </div>
                  )}

                  {interactions.map((interaction, index) => (
                    <div key={`${interaction.questionIndex}-${index}`} className="space-y-2">
                      <div className="ml-10 flex flex-col self-end items-end">
                        <div className="bg-[var(--accent)] rounded-[20px] px-3 py-2 text-xs text-white max-w-[80%]">
                          {t(CHAT_ITEMS[interaction.questionIndex].q)}
                        </div>
                      </div>
                      <div
                        ref={index === interactions.length - 1 ? answerRef : null}
                        className="mr-10 flex flex-col"
                      >
                        <p className="bg-zinc-800 rounded-[30px] px-4 py-3 text-xs leading-relaxed text-white/90 max-w-[85%]">
                          {interaction.status === 'typing' ? (
                            <span className="inline-flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce [animation-delay:0ms]" />
                              <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce [animation-delay:150ms]" />
                              <span className="w-1.5 h-1.5 rounded-full bg-white/70 animate-bounce [animation-delay:300ms]" />
                            </span>
                          ) : (
                            t(CHAT_ITEMS[interaction.questionIndex].a)
                          )}
                        </p>
                      </div>
                    </div>
                  ))}

                  {interactions.length === 0 && (
                    <p className="text-[10px] text-white/60 text-center mt-2 px-2">
                      {t('about.chat.tap')}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Chat buttons under phone */}
            <div className="relative w-full max-w-[320px]">
              <div className="flex flex-col md:flex-row w-full gap-2 py-1 px-1 text-xs">
                {availableQuestions.length > 0 ? (
                  CHAT_ITEMS.map((item, index) =>
                    availableQuestions.includes(index) ? (
                      <button
                        key={item.q}
                        type="button"
                        onClick={() => handleQuestionClick(index)}
                        className="relative w-full md:flex-1 rounded-full bg-[var(--accent)] hover:bg-[var(--accent)]/90 active:bg-[var(--accent)]/95 px-3 py-2 text-xs leading-snug text-white text-center font-semibold transition-colors"
                      >
                        {t(item.q)}
                      </button>
                    ) : null
                  )
                ) : (
                  <p className="flex-grow flex items-center justify-center gap-2 text-sm text-[var(--fg)] px-4">
                    <span>{t('about.chat.done')}</span>
                    <button
                      type="button"
                      onClick={handleContactClick}
                      className="text-[var(--accent)] underline font-semibold"
                    >
                      {t('about.chat.contact')}
                    </button>
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Right column: text */}
          <div className="hidden md:flex order-1 md:order-2 flex-col gap-4 w-full max-w-xl mx-auto md:mx-0 text-center md:text-left h-full min-h-0">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full flex-shrink-0">
              {TAG_KEYS.map((key) => (
                <span
                  key={key}
                  className="flex items-center justify-center min-h-[2.75rem] text-sm font-extrabold px-4 py-2 rounded-xl border border-[var(--accent)]/60 text-[var(--accent)] bg-[var(--accent)]/5 shadow-sm whitespace-nowrap transition-colors"
                >
                  {t(`about.tags.${key}`)}
                </span>
              ))}
            </div>
            <div className="flex-1 min-h-0 w-full max-w-prose flex flex-col gap-4 text-left mt-4 md:mt-6">
              {paragraphs.map((paragraph, index) => {
                if (index < currentParagraph) {
                  return (
                    <p
                      key={index}
                      className="text-base md:text-lg font-semibold text-[var(--fg)] leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  )
                }
                if (index === currentParagraph) {
                  return (
                    <TextType
                      key={`${index}-${i18n.language}`}
                      as="p"
                      text={paragraph}
                      typingSpeed={20}
                      pauseDuration={2000}
                      deletingSpeed={13}
                      loop={false}
                      showCursor
                      cursorCharacter="_"
                      startOnVisible={index === 0}
                      onSentenceComplete={() =>
                        setCurrentParagraph((prev) =>
                          prev < paragraphs.length - 1 ? prev + 1 : prev
                        )
                      }
                      className="text-base md:text-lg font-semibold text-[var(--fg)] leading-relaxed"
                    />
                  )
                }
                return null
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
