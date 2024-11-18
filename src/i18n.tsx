// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['ka', 'ar'], // ენების სია, რომლებსაც აპლიკაცია მხარს უჭერს
    fallbackLng: 'ka', // ნაგულისხმევი ენა, თუ არჩეული ენა არ მოიძებნება
    debug: true,

    interpolation: {
      escapeValue: false,
    },
    
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // თარგმანის ფაილების მისამართი
    },
  });

export default i18n;
