"use client"

import React from "react"
import { useTranslation } from "react-i18next"
import ClientOnly from "@/components/ClientOnly"

export default function AboutPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center">
            <ClientOnly fallback={<div className="h-12" />}>
              <h1 className="text-4xl md:text-5xl font-bold text-[#0D1623] mb-6">
                {t("pages.about.title")}
              </h1>
              <p className="text-xl text-[#5F6B7A] max-w-3xl mx-auto">
                {t("pages.about.subtitle")}
              </p>
            </ClientOnly>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission & Vision Section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div>
            <ClientOnly fallback={<div className="h-8" />}>
              <h2 className="text-3xl font-bold text-[#0D1623] mb-6">
                {t("pages.about.mission.title")}
              </h2>
            </ClientOnly>
            <p className="text-[#5F6B7A] text-lg leading-relaxed">
              <ClientOnly
                fallback={
                  <span>
                    Our mission is to make your transition to Ghana as smooth
                    and successful as possible.
                  </span>
                }
              >
                {t("pages.about.mission.description")}
              </ClientOnly>
            </p>
          </div>

          <div>
            <ClientOnly fallback={<div className="h-8" />}>
              <h2 className="text-3xl font-bold text-[#0D1623] mb-6">
                {t("pages.about.vision.title")}
              </h2>
            </ClientOnly>
            <p className="text-[#5F6B7A] text-lg leading-relaxed">
              <ClientOnly
                fallback={
                  <span>
                    To be West Africa&apos;s leading platform connecting
                    international students and professionals with opportunities
                    in Ghana.
                  </span>
                }
              >
                {t("pages.about.vision.description")}
              </ClientOnly>
            </p>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="mb-20">
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
            <div>
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
                    <ClientOnly
                      fallback={
                        <span>
                          Every student deserves world-class service. From our
                          initial consultation to your successful settlement in
                          Ghana, we maintain the highest standards in everything
                          we do. Our track record speaks for itself - we
                          don&apos;t just meet expectations, we exceed them.
                        </span>
                      }
                    >
                      {t("pages.about.values.excellence.description")}
                    </ClientOnly>
                  </p>
                </div>
              </div>
            </div>

            {/* Trust */}
            <div>
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
                    <ClientOnly
                      fallback={
                        <span>
                          Trust is the foundation of every successful journey.
                          We&apos;ve built our reputation on transparency,
                          honesty, and reliability. When you choose EasyLife
                          Ghana, you&apos;re choosing a partner who will be with
                          you every step of the way, with no hidden fees or
                          surprises.
                        </span>
                      }
                    >
                      {t("pages.about.values.trust.description")}
                    </ClientOnly>
                  </p>
                </div>
              </div>
            </div>

            {/* Innovation */}
            <div>
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
                    <ClientOnly
                      fallback={
                        <span>
                          The world is evolving, and so are we. We leverage
                          cutting-edge technology and innovative approaches to
                          streamline your experience. From digital applications
                          to AI-powered matching with universities, we&apos;re
                          always finding new ways to make your journey smoother
                          and more efficient.
                        </span>
                      }
                    >
                      {t("pages.about.values.innovation.description")}
                    </ClientOnly>
                  </p>
                </div>
              </div>
            </div>

            {/* Support */}
            <div>
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
                    <ClientOnly
                      fallback={
                        <span>
                          Your success is our mission. That&apos;s why we
                          provide comprehensive support that goes beyond just
                          paperwork. From pre-arrival guidance to post-arrival
                          integration, our dedicated team of experts is always
                          available to help you navigate any challenge and
                          celebrate every milestone.
                        </span>
                      }
                    >
                      {t("pages.about.values.support.description")}
                    </ClientOnly>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <ClientOnly fallback={<div className="h-8" />}>
              <h2 className="text-3xl font-bold text-[#0D1623] mb-8 text-center">
                {t("pages.about.story.title")}
              </h2>
            </ClientOnly>
            <div className="space-y-6 text-[#5F6B7A] text-lg leading-relaxed text-left">
              <p>
                <ClientOnly
                  fallback={
                    <span>
                      Founded with a passion for connecting people with
                      opportunities, EasyLife Ghana has been at the forefront of
                      international education and travel services. Our journey
                      began with a simple belief: that everyone deserves the
                      chance to pursue their dreams, regardless of borders.
                    </span>
                  }
                >
                  {t("pages.about.story.paragraph1")}
                </ClientOnly>
              </p>
              <p>
                <ClientOnly
                  fallback={
                    <span>
                      We understand the challenges of moving to a new country,
                      which is why we&apos;ve created comprehensive solutions
                      that address every aspect of your journey - from
                      university applications and visa assistance to
                      accommodation and cultural integration.
                    </span>
                  }
                >
                  {t("pages.about.story.paragraph2")}
                </ClientOnly>
              </p>
              <p>
                <ClientOnly
                  fallback={
                    <span>
                      Today, we continue to evolve our services to meet the
                      changing needs of our global community while maintaining
                      our commitment to excellence and personalized support.
                      Every success story motivates us to do more and reach
                      further.
                    </span>
                  }
                >
                  {t("pages.about.story.paragraph3")}
                </ClientOnly>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
