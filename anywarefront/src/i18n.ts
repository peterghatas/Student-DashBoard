import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';
import translationAR from './locales/ar/translation.json';


const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
  ar: {
    translation: translationAR,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', 
    fallbackLng: 'es', 
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;