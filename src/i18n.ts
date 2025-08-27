import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import translationEN from "./locales/en/translation.json"
import translationFR from "./locales/fr/translation.json"
import translationES from "./locales/es/translation.json"

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
  es: {
    translation: translationES,
  },
}

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "en",
  lng: "en", // Default to English, will be changed dynamically
  debug: false,

  interpolation: {
    escapeValue: false,
  },

  react: {
    useSuspense: false,
    bindI18n: "languageChanged loaded",
    bindI18nStore: false,
    transEmptyNodeValue: "",
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ["br", "strong", "i"],
  },
})

export default i18n
