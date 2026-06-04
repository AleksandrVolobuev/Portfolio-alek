import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Импорт переводов
import translationEN from './locales/en/translation.json';
import translationRU from './locales/ru/translation.json';
import translationUA from './locales/ua/translation.json';

const resources = {
  en: { translation: translationEN },
  ru: { translation: translationRU },
  ua: { translation: translationUA },
};

i18n
  .use(LanguageDetector) // Автоопределение языка браузера
  .use(initReactI18next) // Подключение к React
  .init({
    resources,
    fallbackLng: 'en', // Язык по умолчанию
    interpolation: { escapeValue: false }, // React уже экранирует значения
  });

export default i18n;
