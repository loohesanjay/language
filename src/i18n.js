// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      description: "This is a multi-language website."
    }
  },
  ar: {
    translation: {
      welcome: "مرحبا",
      description: "هذا موقع ويب متعدد اللغات."
    }
  }
};

i18n
  .use(LanguageDetector) // Detects browser language
  .use(initReactI18next) // Passes i18n to React
  .init({
    resources,
    fallbackLng: 'en', // default language
    interpolation: {
      escapeValue: false // React already does escaping
    }
  });

export default i18n;
