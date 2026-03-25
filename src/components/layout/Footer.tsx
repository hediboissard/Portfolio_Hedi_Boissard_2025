import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="footer-gradient border-t border-white/5 py-8 px-4 mt-10">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--muted)]">
        <p>
          {t('footer.made_with')}{' '}
          <span className="text-red-400 text-base leading-none align-middle" aria-label="love">&#9829;</span>{' '}
          {t('footer.by')}
        </p>
        <p>&copy; {year} Hédi Boissard. {t('footer.rights')}</p>
      </div>
    </footer>
  )
}
