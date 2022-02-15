import { render } from 'react-dom'
import { Suspense } from 'react'
import './index.css'

import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
import { ThemeProvider } from './contexts/theme'
import App from './App'
import translationEN from './locales/en/translation.json'
import translationHE from './locales/he/translation.json'

i18next
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'he'],
    fallbackLng: 'en',
    debug: true,
    // Options for language detector
    detection: {
      order: ['cookie', 'path', 'htmlTag'],
      caches: ['cookie'],
    },
    returnObjects:true,
    react: { wait: true },
    resources: {
      en: {
        translation: translationEN,
      },
      he: {
        translation: translationHE,
      },
    },
  })

const loadingMarkup = (
  <div className='py-4 text-center'>
    <h3>Loading..</h3>
  </div>
)
render(
  <Suspense fallback={loadingMarkup}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Suspense>,
  document.getElementById('root')
)
