import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { fr, en } from './locales/messages'

i18n.use(initReactI18next).init({
  resources: { fr: { translation: fr }, en: { translation: en } },
  lng: typeof window !== 'undefined' ? localStorage.getItem('locale') || 'fr' : 'fr',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
})

export default i18n
