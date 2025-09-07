"use client"

import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import ClientOnly from "@/components/ClientOnly"

export default function FAQPage() {
  const { t } = useTranslation()
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string>("general")

  const toggleQuestion = (questionKey: string) => {
    setOpenQuestion(openQuestion === questionKey ? null : questionKey)
  }

  const categories = [
    {
      key: "general",
      icon: (
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
            d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      key: "academic",
      icon: (
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
    },
    {
      key: "visa",
      icon: (
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
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
    {
      key: "accommodation",
      icon: (
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
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
    },
    {
      key: "business",
      icon: (
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
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"
          />
        </svg>
      ),
    },
    {
      key: "medical",
      icon: (
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
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4"
          />
        </svg>
      ),
    },
    {
      key: "tourism",
      icon: (
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
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
  ]

  const faqData = {
    general: [
      "whatIsEasyLife",
      "servicePackages",
      "howItWorks",
      "whyChooseUs",
      "paymentMethods",
      "customerSupport",
    ],
    academic: [
      "universityApplication",
      "academicRequirements",
      "applicationTimeline",
      "scholarships",
      "courseSelection",
      "academicSupport",
    ],
    visa: [
      "visaTypes",
      "requiredDocuments",
      "processingTime",
      "visaRejection",
      "visaExtension",
      "studentPermit",
    ],
    accommodation: [
      "accommodationTypes",
      "housingCosts",
      "campusHousing",
      "privateHousing",
      "safetyAndSecurity",
      "utilities",
    ],
    business: [
      "businessTravel",
      "investmentOpportunities",
      "businessVisa",
      "networkingEvents",
      "businessSetup",
      "legalSupport",
    ],
    medical: [
      "medicalFacilities",
      "healthInsurance",
      "medicalTourism",
      "emergencyServices",
      "prescriptionMeds",
      "specializedCare",
    ],
    tourism: [
      "tourPackages",
      "culturalSites",
      "travelSafety",
      "localCurrency",
      "transportation",
      "customTours",
    ],
  }

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Wave Hero Header */}
      <header className="relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-40 md:pt-28 md:pb-52">
          <div className="text-center">
            <ClientOnly fallback={<div className="h-20" />}>
              <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0D1623] after:content-[''] after:block after:h-1 after:w-24 after:mx-auto after:mt-6 after:rounded-full after:bg-gradient-to-r after:from-emerald-500 after:to-emerald-300">
                {t("pages.faq.title")}
              </h1>
              <p className="mt-8 text-xl md:text-2xl text-[#5F6B7A] max-w-3xl mx-auto leading-relaxed">
                {t("pages.faq.subtitle")}
              </p>
            </ClientOnly>
          </div>
        </div>
        {/* Layered Waves */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 w-full translate-y-[1px]"
        >
          <svg
            className="w-full h-20 md:h-24 text-emerald-50"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0 80c120 20 240-40 360-40s240 60 360 60 240-60 360-60 240 60 360 40v40H0z"
            />
          </svg>
          <svg
            className="w-full h-16 -mt-8 text-white mix-blend-multiply opacity-70"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0 90c160 10 240-50 400-50s240 70 360 70 240-70 360-70 240 70 320 50v30H0z"
            />
          </svg>
        </div>
      </header>

      {/* FAQ Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map(category => {
            const active = activeCategory === category.key
            return (
              <button
                key={category.key}
                onClick={() => {
                  setActiveCategory(category.key)
                  setOpenQuestion(null)
                }}
                className={`inline-flex items-center gap-2 px-4 py-2 md:px-5 md:py-2.5 rounded-lg text-sm md:text-base font-medium border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-emerald-500 ${
                  active
                    ? "bg-[#17a253] border-[#17a253] text-white"
                    : "bg-white border-gray-200 text-gray-600 hover:border-[#17a253] hover:text-[#17a253]"
                }`}
              >
                <span
                  className={`flex items-center ${active ? "text-white" : "text-gray-500"} group-hover:text-[#17a253]`}
                >
                  {category.icon}
                </span>
                <ClientOnly
                  fallback={<span className="capitalize">{category.key}</span>}
                >
                  {t(`pages.faq.categories.${category.key}`)}
                </ClientOnly>
              </button>
            )
          })}
        </div>

        {/* FAQ Questions */}
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#0D1623] mb-2 flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">
                {categories.find(c => c.key === activeCategory)?.icon}
              </span>
              <ClientOnly
                fallback={
                  <span className="capitalize">{activeCategory} Questions</span>
                }
              >
                {t(`pages.faq.categories.${activeCategory}`)}
              </ClientOnly>
            </h2>
            <p className="text-[#5F6B7A] text-lg">
              <ClientOnly
                fallback={
                  <span>
                    Find answers to common questions about our services.
                  </span>
                }
              >
                {t(`pages.faq.categoryDescriptions.${activeCategory}`)}
              </ClientOnly>
            </p>
          </div>

          <div className="space-y-3">
            {faqData[activeCategory as keyof typeof faqData]?.map(
              questionKey => {
                const open = openQuestion === questionKey
                return (
                  <div
                    key={questionKey}
                    className="bg-white rounded-lg overflow-hidden border border-gray-200"
                  >
                    <button
                      onClick={() => toggleQuestion(questionKey)}
                      className="w-full px-6 py-5 text-left focus:outline-none hover:bg-gray-50 transition-colors duration-150"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-[15px] md:text-base font-medium text-gray-900 pr-2">
                          <ClientOnly fallback={<span>{questionKey}</span>}>
                            {t(
                              `pages.faq.questions.${activeCategory}.${questionKey}.question`
                            )}
                          </ClientOnly>
                        </h3>
                        <div
                          className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${open ? "border-green-500 bg-green-500" : "border-gray-300 hover:border-green-400"}`}
                        >
                          <svg
                            className={`w-3 h-3 transition-all duration-200 ${open ? "text-white rotate-45" : "text-gray-400"}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M12 6v12m6-6H6"
                            />
                          </svg>
                        </div>
                      </div>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${open ? "max-h-80" : "max-h-0"}`}
                    >
                      <div className="px-6 pb-5">
                        <div className="pt-2 border-t border-gray-100">
                          <div className="mt-3 text-gray-600 leading-relaxed text-sm md:text-[15px]">
                            <ClientOnly
                              fallback={<p>Answer for {questionKey}</p>}
                            >
                              {t(
                                `pages.faq.questions.${activeCategory}.${questionKey}.answer`
                              )}
                            </ClientOnly>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              }
            )}
          </div>
        </div>
      </main>
    </div>
  )
}
