import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BlurText } from '@/components/animations'

const LINKS = [
  { name: 'Mail', url: 'https://mail.google.com/mail/?view=cm&fs=1&to=boissardhedi@gmail.com', img: '/assets/Mail.svg' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/h%C3%A9di-boissard-a994ab25b/', img: '/assets/Linkedin.svg' },
  { name: 'GitHub', url: 'https://github.com/hediboissard', img: '/assets/GitHub.svg' }
]

export default function Contact() {
  const { t } = useTranslation()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [apiMsg, setApiMsg] = useState<{ text: string; ok: boolean } | null>(null)

  const validate = (field: 'name' | 'email' | 'message') => {
    const e: Record<string, string> = {}

    if (field === 'name') {
      if (form.name.length === 0) e.name = ''
      else if (form.name.length < 2) e.name = t('contact.validation.name_short')
    }

    if (field === 'email') {
      if (form.email.length === 0) e.email = ''
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t('contact.validation.email_invalid')
    }

    if (field === 'message') {
      if (form.message.length === 0) e.message = ''
      else if (form.message.length < 10) e.message = t('contact.validation.message_short')
    }

    setErrors((prev) => ({ ...prev, ...e }))
  }

  const getAllErrors = () => {
    const e: Record<string, string> = {}
    if (form.name.length < 2) e.name = t('contact.validation.name_short')
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = t('contact.validation.email_invalid')
    if (form.message.length < 10) e.message = t('contact.validation.message_short')
    return e
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setApiMsg({ text: t('contact.messages.validation_error'), ok: false })
      return
    }
    const newErrors = getAllErrors()
    setErrors(newErrors)
    if (Object.keys(newErrors).length > 0) return
    setLoading(true)
    setApiMsg(null)
    try {
      const res = await fetch('https://server-three-pi-90.vercel.app/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message)
      setApiMsg({ text: t('contact.messages.success'), ok: true })
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setApiMsg(null), 4000)
    } catch {
      setApiMsg({ text: t('contact.messages.error'), ok: false })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 md:scroll-mt-32 py-20 md:py-28 px-4 md:px-10"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        <h2 className="flex justify-center md:justify-start text-2xl md:text-3xl font-semibold tracking-tight text-[var(--fg)] mb-0">
          <BlurText
            text={t('contact.title')}
            delay={80}
            animateBy="words"
            direction="top"
            as="span"
            className="inline-block"
          />
        </h2>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-10">
          {LINKS.map((l) => {
            const isMailto = l.url.startsWith('mailto:')
            return (
            <a
              key={l.name}
              href={l.url}
              {...(isMailto ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
              className="flex flex-col items-center gap-2 text-white transition-colors"
            >
              <div className="w-12 h-12 rounded-full bg-white/10 border border-white/30 hover:border-[var(--accent)] hover:bg-[var(--accent)]/10 flex items-center justify-center transition-all duration-300">
                <img src={`${import.meta.env.BASE_URL}${l.img.replace(/^\//, '')}`} alt="" className="w-5 h-5 invert brightness-0 opacity-100" />
              </div>
              <span className="text-xs text-white">{l.name}</span>
            </a>
          )})}
        </div>

        <div className="w-full max-w-3xl mx-auto rounded-3xl bg-[#020617]/90 border border-white/5 shadow-[0_20px_45px_rgba(15,23,42,0.85)] px-5 py-6 md:px-8 md:py-7">
          <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-xs font-medium text-[var(--muted)] mb-1.5">
                {t('contact.labels.name')}
              </label>
              <input
                id="name"
                value={form.name}
                onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                onBlur={() => validate('name')}
                placeholder={t('contact.placeholders.name')}
                className="w-full px-4 py-2.5 text-sm bg-white/[0.07] border border-white/[0.12] rounded-lg focus:outline-none focus:border-[var(--accent)] text-[var(--fg)] placeholder:text-[var(--muted)]/50 transition-colors"
              />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-xs font-medium text-[var(--muted)] mb-1.5">
                {t('contact.labels.email')}
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                onBlur={() => validate('email')}
                placeholder={t('contact.placeholders.email')}
                className="w-full px-4 py-2.5 text-sm bg-white/[0.07] border border-white/[0.12] rounded-lg focus:outline-none focus:border-[var(--accent)] text-[var(--fg)] placeholder:text-[var(--muted)]/50 transition-colors"
              />
              {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-xs font-medium text-[var(--muted)] mb-1.5">
              {t('contact.labels.message')}
            </label>
            <textarea
              id="message"
              value={form.message}
              onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
              onBlur={() => validate('message')}
              rows={4}
              placeholder={t('contact.placeholders.message')}
              className="w-full px-4 py-2.5 text-sm bg-white/[0.07] border border-white/[0.12] rounded-lg focus:outline-none focus:border-[var(--accent)] resize-none text-[var(--fg)] placeholder:text-[var(--muted)]/50 transition-colors"
            />
            {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
          </div>
            {apiMsg && (
              <p className={`text-sm ${apiMsg.ok ? 'text-green-500' : 'text-red-500'}`}>{apiMsg.text}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 text-sm md:text-base font-semibold rounded-xl bg-gradient-to-r from-sky-500/80 to-sky-400/80 text-white shadow-[0_10px_22px_rgba(56,189,248,0.3)] hover:shadow-[0_10px_28px_rgba(56,189,248,0.5)] hover:brightness-110 disabled:opacity-60 transition-all duration-300"
            >
              {loading ? t('contact.buttons.sending') : t('contact.buttons.send')}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
