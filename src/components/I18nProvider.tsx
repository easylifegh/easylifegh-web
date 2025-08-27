"use client"

import { useEffect, useState } from "react"
import { I18nextProvider } from "react-i18next"
import i18n from "../i18n"

interface I18nProviderProps {
  children: React.ReactNode
  locale?: string
}

export default function I18nProvider({ children, locale }: I18nProviderProps) {
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    // Determine target language
    let targetLang = "en"

    if (locale) {
      // If locale is provided via props, use it
      targetLang = locale
    } else if (typeof window !== "undefined") {
      // Check localStorage for saved preference
      const savedLang = localStorage.getItem("i18nextLng")
      if (savedLang && ["en", "fr", "es"].includes(savedLang)) {
        targetLang = savedLang
      } else {
        // Check browser language as fallback
        const browserLang = navigator.language.split("-")[0]
        if (["fr", "es"].includes(browserLang)) {
          targetLang = browserLang
        }
      }
    }

    // Always set the language and mark as initialized
    i18n.changeLanguage(targetLang).then(() => {
      setIsInitialized(true)
    })
  }, [locale])

  // Show loading state during initialization to prevent hydration mismatch
  if (!isInitialized) {
    return (
      <I18nextProvider i18n={i18n} defaultNS="translation">
        {children}
      </I18nextProvider>
    )
  }

  return (
    <I18nextProvider i18n={i18n} defaultNS="translation">
      {children}
    </I18nextProvider>
  )
}
