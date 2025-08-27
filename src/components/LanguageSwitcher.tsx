"use client"

import { useState } from "react"
import { useTranslation } from "react-i18next"
import { Globe, ChevronDown } from "lucide-react"

const languages = [
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
]

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  const currentLanguage =
    languages.find(lang => i18n.language === lang.code) || languages[0]

  const changeLanguage = async (code: string) => {
    setIsOpen(false)

    // Don't change if it's the same language
    if (code === i18n.language) {
      return
    }

    // Change the i18n language
    await i18n.changeLanguage(code)

    // Store preference in localStorage
    localStorage.setItem("i18nextLng", code)

    // For now, just refresh the page to ensure proper language loading
    // Later we can implement proper URL-based routing
    window.location.reload()
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
        aria-label="Change language"
      >
        <Globe className="h-4 w-4" />
        <span className="text-sm">{t("header.language")}</span>
        <ChevronDown className="h-3 w-3" />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 min-w-[160px]">
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                  currentLanguage.code === lang.code
                    ? "bg-green-50 text-[#17a253] font-medium"
                    : "text-gray-700"
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="text-sm">{lang.label}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
