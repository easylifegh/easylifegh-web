"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"

export default function WhyChooseGhana() {
  const { t } = useTranslation()

  const features = [
    {
      key: "language",
      icon: (
        <svg
          className="w-8 h-8 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
      ),
    },
    {
      key: "safety",
      icon: (
        <svg
          className="w-8 h-8 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      key: "affordable",
      icon: (
        <svg
          className="w-8 h-8 text-amber-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t("whyChooseGhana.title")}
          </h2>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-12 mb-12">
          {features.map(feature => (
            <div key={feature.key} className="text-center group">
              <div className="mb-6">
                <div className="w-16 h-16 mx-auto flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t(`whyChooseGhana.features.${feature.key}.title`)}
                </h3>
                <p className="text-gray-600">
                  {t(`whyChooseGhana.features.${feature.key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6 mb-12">
          {features.map(feature => (
            <div
              key={feature.key}
              className="bg-gray-50 rounded-xl p-6 text-center"
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {t(`whyChooseGhana.features.${feature.key}.title`)}
              </h3>
              <p className="text-gray-600 text-sm">
                {t(`whyChooseGhana.features.${feature.key}.description`)}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/why-ghana"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 transition-colors duration-200 gap-2"
          >
            {t("whyChooseGhana.cta.button")}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
