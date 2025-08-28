"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"

export default function WhyChooseGhana() {
  const { t } = useTranslation()

  const features = [
    {
      key: "quality",
      icon: (
        <svg
          className="w-6 h-6 text-blue-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
        </svg>
      ),
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
    },
    {
      key: "affordable",
      icon: (
        <svg
          className="w-7 h-7 text-green-600"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z" />
        </svg>
      ),
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
    },
    {
      key: "culture",
      icon: (
        <svg
          className="w-6 h-6 text-purple-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      bgColor: "bg-purple-50",
      iconBg: "bg-purple-100",
    },
    {
      key: "language",
      icon: (
        <svg
          className="w-6 h-6 text-orange-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
          />
        </svg>
      ),
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
    },
  ]

  return (
    <section className="py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {t("whyChooseGhana.title")}
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mx-auto mb-6"></div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          {features.map(feature => (
            <div
              key={feature.key}
              className={`${feature.bgColor} rounded-lg p-6 hover:bg-opacity-80 transition-colors duration-200`}
            >
              <div
                className={`w-12 h-12 ${feature.iconBg} rounded-lg flex items-center justify-center mb-4`}
              >
                {feature.icon}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {t(`whyChooseGhana.features.${feature.key}.title`)}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {t(`whyChooseGhana.features.${feature.key}.description`)}
              </p>

              <Link
                href="/why-ghana"
                className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors inline-flex items-center gap-1"
              >
                {t("whyChooseGhana.learnMore")}
                <svg
                  className="w-4 h-4"
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
          ))}
        </div>

        {/* Mobile & Tablet Horizontal Scroll */}
        <div className="lg:hidden overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 pb-4 w-max snap-x snap-mandatory">
            {features.map(feature => (
              <div
                key={feature.key}
                className={`${feature.bgColor} rounded-lg p-6 hover:bg-opacity-80 transition-colors duration-200 w-[280px] flex-shrink-0 snap-start`}
              >
                <div
                  className={`w-12 h-12 ${feature.iconBg} rounded-lg flex items-center justify-center mb-4`}
                >
                  {feature.icon}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {t(`whyChooseGhana.features.${feature.key}.title`)}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {t(`whyChooseGhana.features.${feature.key}.description`)}
                </p>

                <Link
                  href="/why-ghana"
                  className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors inline-flex items-center gap-1"
                >
                  {t("whyChooseGhana.learnMore")}
                  <svg
                    className="w-4 h-4"
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
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <Link
            href="/why-ghana"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors inline-flex items-center gap-2"
          >
            {t("whyChooseGhana.cta.button")}
            <svg
              className="w-4 h-4"
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
