import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files (create these JSON files in your project)
import translationEN from './locales/en/translation.json';


const resources = {
  en: {
    translation: translationEN,
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n;