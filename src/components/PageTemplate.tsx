"use client"

import { useTranslation } from "react-i18next"

interface PageTemplateProps {
  titleKey: string
  subtitleKey: string
  children?: React.ReactNode
}

export default function PageTemplate({
  titleKey,
  subtitleKey,
  children,
}: PageTemplateProps) {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">{t(titleKey)}</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 leading-relaxed">
            {t(subtitleKey)}
          </p>
          {children}
        </div>
      </div>
    </div>
  )
}
