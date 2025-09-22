"use client"

import React from "react"
import { useTranslation } from "react-i18next"
import ClientOnly from "@/components/ClientOnly"
import { Hero } from "@/components/shared"

// Keep story paragraph keys for timeline
const STORY_PARAGRAPHS = ["paragraph1", "paragraph2", "paragraph3"] as const

export default function AboutPage() {
  const { t } = useTranslation()

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      <Hero
        title={t("pages.about.title")}
        subtitle={t("pages.about.subtitle")}
      />

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Mission & Vision (flat cards) */}
        <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-20 mb-24">
          {/* Vertical divider for large screens */}
          <div
            aria-hidden
            className="hidden lg:block absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-emerald-200 to-transparent"
          />
          <div className="relative rounded-xl bg-white p-2 sm:p-4 lg:p-2 xl:p-4">
            <ClientOnly fallback={<div className="h-8" />}>
              <h2 className="text-3xl font-bold text-[#0D1623] mb-6 tracking-tight">
                {t("pages.about.mission.title")}
              </h2>
            </ClientOnly>
            <p className="text-[#5F6B7A] text-lg leading-relaxed">
              <ClientOnly fallback={<span />}>
                {t("pages.about.mission.description")}
              </ClientOnly>
            </p>
          </div>
          {/* Horizontal divider on mobile/tablet */}
          <div
            aria-hidden
            className="lg:hidden h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent"
          />
          <div className="relative rounded-xl bg-white p-2 sm:p-4 lg:p-2 xl:p-4">
            <ClientOnly fallback={<div className="h-8" />}>
              <h2 className="text-3xl font-bold text-[#0D1623] mb-6 tracking-tight">
                {t("pages.about.vision.title")}
              </h2>
            </ClientOnly>
            <p className="text-[#5F6B7A] text-lg leading-relaxed">
              <ClientOnly fallback={<span />}>
                {t("pages.about.vision.description")}
              </ClientOnly>
            </p>
          </div>
        </div>

        {/* Values (accent line hover) */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <ClientOnly fallback={<div className="h-8" />}>
              <h2 className="text-3xl font-bold text-[#0D1623] mb-4">
                {t("pages.about.values.title")}
              </h2>
              <p className="text-[#5F6B7A] text-lg max-w-2xl mx-auto">
                {t("pages.about.values.subtitle")}
              </p>
            </ClientOnly>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Excellence */}
            <div className="group relative pl-4">
              <span className="pointer-events-none absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-gradient-to-b from-emerald-500 to-emerald-300 transition-transform duration-300 group-hover:scale-y-100" />
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-[#17a253]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#0D1623] mb-4">
                    <ClientOnly fallback={<span>Excellence</span>}>
                      {t("pages.about.values.excellence.title")}
                    </ClientOnly>
                  </h3>
                  <p className="text-[#5F6B7A] leading-relaxed">
                    <ClientOnly fallback={<span />}>
                      {t("pages.about.values.excellence.description")}
                    </ClientOnly>
                  </p>
                </div>
              </div>
            </div>

            {/* Trust */}
            <div className="group relative pl-4">
              <span className="pointer-events-none absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-gradient-to-b from-emerald-500 to-emerald-300 transition-transform duration-300 group-hover:scale-y-100" />
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-[#17a253]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5-6a9 9 0 11-10 9.001A9 9 0 0121 6z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#0D1623] mb-4">
                    <ClientOnly fallback={<span>Trust</span>}>
                      {t("pages.about.values.trust.title")}
                    </ClientOnly>
                  </h3>
                  <p className="text-[#5F6B7A] leading-relaxed">
                    <ClientOnly fallback={<span />}>
                      {t("pages.about.values.trust.description")}
                    </ClientOnly>
                  </p>
                </div>
              </div>
            </div>

            {/* Innovation */}
            <div className="group relative pl-4">
              <span className="pointer-events-none absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-gradient-to-b from-emerald-500 to-emerald-300 transition-transform duration-300 group-hover:scale-y-100" />
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-[#17a253]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#0D1623] mb-4">
                    <ClientOnly fallback={<span>Innovation</span>}>
                      {t("pages.about.values.innovation.title")}
                    </ClientOnly>
                  </h3>
                  <p className="text-[#5F6B7A] leading-relaxed">
                    <ClientOnly fallback={<span />}>
                      {t("pages.about.values.innovation.description")}
                    </ClientOnly>
                  </p>
                </div>
              </div>
            </div>

            {/* Support */}
            <div className="group relative pl-4">
              <span className="pointer-events-none absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-gradient-to-b from-emerald-500 to-emerald-300 transition-transform duration-300 group-hover:scale-y-100" />
              <div className="flex items-start space-x-5">
                <div className="flex-shrink-0">
                  <svg
                    className="w-8 h-8 text-[#17a253]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#0D1623] mb-4">
                    <ClientOnly fallback={<span>Support</span>}>
                      {t("pages.about.values.support.title")}
                    </ClientOnly>
                  </h3>
                  <p className="text-[#5F6B7A] leading-relaxed">
                    <ClientOnly fallback={<span />}>
                      {t("pages.about.values.support.description")}
                    </ClientOnly>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story / Timeline */}
        <section className="mb-14">
          <div className="max-w-4xl mx-auto">
            <ClientOnly fallback={<div className="h-8" />}>
              <h2 className="text-3xl md:text-4xl font-bold text-center text-[#0D1623] mb-14">
                {t("pages.about.story.title")}
              </h2>
            </ClientOnly>
            <div className="relative pl-6 md:pl-8">
              <div className="absolute left-2 md:left-3 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-300 via-emerald-200 to-transparent" />
              <ul className="space-y-10">
                {STORY_PARAGRAPHS.map(pKey => (
                  <li key={pKey} className="relative">
                    <div className="absolute -left-[26px] md:-left-[30px] mt-1 flex h-5 w-5 items-center justify-center">
                      <span className="h-3.5 w-3.5 rounded-full bg-white ring-2 ring-emerald-300 shadow" />
                    </div>
                    <p className="text-[#425165] text-lg leading-relaxed">
                      <ClientOnly fallback={<span />}>
                        {t(`pages.about.story.${pKey}`)}
                      </ClientOnly>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      {/* Local styles for subtle fade in (no external deps) */}
      <style jsx>{`
        @media (prefers-reduced-motion: no-preference) {
          .reveal {
            opacity: 0;
            transform: translateY(12px);
            transition:
              opacity 0.7s ease,
              transform 0.7s ease;
          }
          .reveal.in-view {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
