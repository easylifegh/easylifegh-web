"use client"

import React from "react"
import { useTranslation } from "react-i18next"
import ClientOnly from "@/components/ClientOnly"

export default function TermsPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Wave Hero Header (aligned with About/Contact page style) */}
      <header className="relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-40 md:pt-28 md:pb-52">
          <div className="text-center">
            <ClientOnly fallback={<div className="h-20" />}>
              <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0D1623] after:content-[''] after:block after:h-1 after:w-24 after:mx-auto after:mt-6 after:rounded-full after:bg-gradient-to-r after:from-emerald-500 after:to-emerald-300">
                {t("pages.terms.title")}
              </h1>
              <p className="mt-8 text-xl md:text-2xl text-[#5F6B7A] max-w-3xl mx-auto leading-relaxed">
                {t("pages.terms.subtitle")}
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

      {/* Terms Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          {/* Last Updated */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <p className="text-sm text-[#5F6B7A] mb-2">
              <ClientOnly fallback={<span>Last updated:</span>}>
                {t("pages.terms.lastUpdated")}
              </ClientOnly>
            </p>
            <p className="text-lg font-medium text-[#0D1623]">
              January 7, 2025
            </p>
          </div>

          {/* Introduction */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0D1623] mb-4">
              <ClientOnly fallback={<span>1. Introduction</span>}>
                {t("pages.terms.sections.introduction.title")}
              </ClientOnly>
            </h2>
            <p className="text-[#5F6B7A] leading-relaxed mb-4">
              <ClientOnly
                fallback={
                  <span>
                    Welcome to EasyLife Ghana. These Terms of Service govern
                    your use of our website and services. By accessing or using
                    our services, you agree to be bound by these terms.
                  </span>
                }
              >
                {t("pages.terms.sections.introduction.content")}
              </ClientOnly>
            </p>
          </section>

          {/* Services */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0D1623] mb-4">
              <ClientOnly fallback={<span>2. Our Services</span>}>
                {t("pages.terms.sections.services.title")}
              </ClientOnly>
            </h2>
            <p className="text-[#5F6B7A] leading-relaxed mb-4">
              <ClientOnly
                fallback={
                  <span>
                    EasyLife Ghana provides comprehensive support services for
                    individuals traveling to Ghana, including:
                  </span>
                }
              >
                {t("pages.terms.sections.services.intro")}
              </ClientOnly>
            </p>
            <ul className="list-disc pl-6 text-[#5F6B7A] leading-relaxed space-y-2">
              <li>
                <ClientOnly
                  fallback={
                    <span>
                      University application assistance and academic consulting
                    </span>
                  }
                >
                  {t("pages.terms.sections.services.list.academic")}
                </ClientOnly>
              </li>
              <li>
                <ClientOnly
                  fallback={
                    <span>
                      Visa application support and documentation guidance
                    </span>
                  }
                >
                  {t("pages.terms.sections.services.list.visa")}
                </ClientOnly>
              </li>
              <li>
                <ClientOnly
                  fallback={
                    <span>Accommodation arrangement and housing support</span>
                  }
                >
                  {t("pages.terms.sections.services.list.accommodation")}
                </ClientOnly>
              </li>
              <li>
                <ClientOnly
                  fallback={<span>Tourism and cultural tour planning</span>}
                >
                  {t("pages.terms.sections.services.list.tourism")}
                </ClientOnly>
              </li>
              <li>
                <ClientOnly
                  fallback={
                    <span>
                      Business travel coordination and medical travel assistance
                    </span>
                  }
                >
                  {t("pages.terms.sections.services.list.business")}
                </ClientOnly>
              </li>
            </ul>
          </section>

          {/* User Responsibilities */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0D1623] mb-4">
              <ClientOnly fallback={<span>3. User Responsibilities</span>}>
                {t("pages.terms.sections.responsibilities.title")}
              </ClientOnly>
            </h2>
            <p className="text-[#5F6B7A] leading-relaxed mb-4">
              <ClientOnly
                fallback={<span>When using our services, you agree to:</span>}
              >
                {t("pages.terms.sections.responsibilities.intro")}
              </ClientOnly>
            </p>
            <ul className="list-disc pl-6 text-[#5F6B7A] leading-relaxed space-y-2">
              <li>
                <ClientOnly
                  fallback={
                    <span>Provide accurate and complete information</span>
                  }
                >
                  {t("pages.terms.sections.responsibilities.list.accurate")}
                </ClientOnly>
              </li>
              <li>
                <ClientOnly
                  fallback={
                    <span>Comply with all applicable laws and regulations</span>
                  }
                >
                  {t("pages.terms.sections.responsibilities.list.comply")}
                </ClientOnly>
              </li>
              <li>
                <ClientOnly
                  fallback={<span>Pay all fees and charges as agreed</span>}
                >
                  {t("pages.terms.sections.responsibilities.list.payment")}
                </ClientOnly>
              </li>
              <li>
                <ClientOnly
                  fallback={
                    <span>
                      Respect our staff and maintain professional communication
                    </span>
                  }
                >
                  {t("pages.terms.sections.responsibilities.list.respect")}
                </ClientOnly>
              </li>
            </ul>
          </section>

          {/* Payment Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0D1623] mb-4">
              <ClientOnly fallback={<span>4. Payment Terms</span>}>
                {t("pages.terms.sections.payment.title")}
              </ClientOnly>
            </h2>
            <p className="text-[#5F6B7A] leading-relaxed mb-4">
              <ClientOnly
                fallback={
                  <span>
                    All fees are due as specified in your service agreement. We
                    accept various payment methods and require payment before
                    service delivery. Refunds are subject to our refund policy.
                  </span>
                }
              >
                {t("pages.terms.sections.payment.content")}
              </ClientOnly>
            </p>
          </section>

          {/* Limitation of Liability */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0D1623] mb-4">
              <ClientOnly fallback={<span>5. Limitation of Liability</span>}>
                {t("pages.terms.sections.liability.title")}
              </ClientOnly>
            </h2>
            <p className="text-[#5F6B7A] leading-relaxed mb-4">
              <ClientOnly
                fallback={
                  <span>
                    While we strive to provide excellent service, we cannot
                    guarantee specific outcomes. Our liability is limited to the
                    fees paid for our services. We are not responsible for
                    decisions made by third parties such as universities or
                    government agencies.
                  </span>
                }
              >
                {t("pages.terms.sections.liability.content")}
              </ClientOnly>
            </p>
          </section>

          {/* Privacy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0D1623] mb-4">
              <ClientOnly fallback={<span>6. Privacy</span>}>
                {t("pages.terms.sections.privacy.title")}
              </ClientOnly>
            </h2>
            <p className="text-[#5F6B7A] leading-relaxed mb-4">
              <ClientOnly
                fallback={
                  <span>
                    Your privacy is important to us. Please review our Privacy
                    Policy to understand how we collect, use, and protect your
                    personal information.
                  </span>
                }
              >
                {t("pages.terms.sections.privacy.content")}
              </ClientOnly>
            </p>
          </section>

          {/* Changes to Terms */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0D1623] mb-4">
              <ClientOnly fallback={<span>7. Changes to Terms</span>}>
                {t("pages.terms.sections.changes.title")}
              </ClientOnly>
            </h2>
            <p className="text-[#5F6B7A] leading-relaxed mb-4">
              <ClientOnly
                fallback={
                  <span>
                    We may update these terms from time to time. We will notify
                    you of any significant changes and the updated terms will be
                    posted on our website with the revision date.
                  </span>
                }
              >
                {t("pages.terms.sections.changes.content")}
              </ClientOnly>
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0D1623] mb-4">
              <ClientOnly fallback={<span>8. Contact Us</span>}>
                {t("pages.terms.sections.contact.title")}
              </ClientOnly>
            </h2>
            <p className="text-[#5F6B7A] leading-relaxed mb-4">
              <ClientOnly
                fallback={
                  <span>
                    If you have questions about these Terms of Service, please
                    contact us at:
                  </span>
                }
              >
                {t("pages.terms.sections.contact.intro")}
              </ClientOnly>
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-[#0D1623] font-medium mb-2">EasyLife Ghana</p>
              <p className="text-[#5F6B7A] text-sm leading-relaxed">
                Email: info@easylifeghana.com
                <br />
                Phone: +233 (0) 24 123 4567
                <br />
                Address: 123 Liberation Road, Accra Central, Ghana
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
