"use client"

import React from "react"
import { useTranslation } from "react-i18next"
import ClientOnly from "@/components/ClientOnly"

export default function PrivacyPage() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Wave Hero Header (aligned with About/Contact page style) */}
      <header className="relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-40 md:pt-28 md:pb-52">
          <div className="text-center">
            <ClientOnly fallback={<div className="h-20" />}>
              <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0D1623] after:content-[''] after:block after:h-1 after:w-24 after:mx-auto after:mt-6 after:rounded-full after:bg-gradient-to-r after:from-emerald-500 after:to-emerald-300">
                {t("pages.privacy.title")}
              </h1>
              <p className="mt-8 text-xl md:text-2xl text-[#5F6B7A] max-w-3xl mx-auto leading-relaxed">
                {t("pages.privacy.subtitle")}
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

      {/* Privacy Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          {/* Last Updated */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <p className="text-sm text-[#5F6B7A] mb-2">
              <ClientOnly fallback={<span>Last updated:</span>}>
                {t("pages.privacy.lastUpdated")}
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
                {t("pages.privacy.sections.introduction.title")}
              </ClientOnly>
            </h2>
            <p className="text-[#5F6B7A] leading-relaxed mb-4">
              <ClientOnly
                fallback={
                  <span>
                    At EasyLife Ghana, we are committed to protecting your
                    privacy and personal information. This Privacy Policy
                    explains how we collect, use, disclose, and safeguard your
                    information when you use our services.
                  </span>
                }
              >
                {t("pages.privacy.sections.introduction.content")}
              </ClientOnly>
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0D1623] mb-4">
              <ClientOnly fallback={<span>2. Information We Collect</span>}>
                {t("pages.privacy.sections.collection.title")}
              </ClientOnly>
            </h2>
            <p className="text-[#5F6B7A] leading-relaxed mb-4">
              <ClientOnly
                fallback={
                  <span>
                    We may collect the following types of information:
                  </span>
                }
              >
                {t("pages.privacy.sections.collection.intro")}
              </ClientOnly>
            </p>

            <h3 className="text-xl font-semibold text-[#0D1623] mb-3 mt-6">
              <ClientOnly fallback={<span>Personal Information</span>}>
                {t("pages.privacy.sections.collection.personal.title")}
              </ClientOnly>
            </h3>
            <ul className="list-disc pl-6 text-[#5F6B7A] leading-relaxed space-y-2 mb-4">
              <li>
                <ClientOnly
                  fallback={
                    <span>Full name, email address, and phone number</span>
                  }
                >
                  {t("pages.privacy.sections.collection.personal.contact")}
                </ClientOnly>
              </li>
              <li>
                <ClientOnly
                  fallback={
                    <span>Passport information and travel documents</span>
                  }
                >
                  {t("pages.privacy.sections.collection.personal.documents")}
                </ClientOnly>
              </li>
              <li>
                <ClientOnly
                  fallback={
                    <span>Educational background and academic records</span>
                  }
                >
                  {t("pages.privacy.sections.collection.personal.education")}
                </ClientOnly>
              </li>
              <li>
                <ClientOnly
                  fallback={
                    <span>Financial information for payment processing</span>
                  }
                >
                  {t("pages.privacy.sections.collection.personal.financial")}
                </ClientOnly>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-[#0D1623] mb-3 mt-6">
              <ClientOnly fallback={<span>Usage Information</span>}>
                {t("pages.privacy.sections.collection.usage.title")}
              </ClientOnly>
            </h3>
            <ul className="list-disc pl-6 text-[#5F6B7A] leading-relaxed space-y-2">
              <li>
                <ClientOnly
                  fallback={<span>Website usage data and analytics</span>}
                >
                  {t("pages.privacy.sections.collection.usage.analytics")}
                </ClientOnly>
              </li>
              <li>
                <ClientOnly
                  fallback={<span>Device information and IP addresses</span>}
                >
                  {t("pages.privacy.sections.collection.usage.device")}
                </ClientOnly>
              </li>
              <li>
                <ClientOnly
                  fallback={<span>Communication preferences and history</span>}
                >
                  {t("pages.privacy.sections.collection.usage.communication")}
                </ClientOnly>
              </li>
            </ul>
          </section>

          {/* How We Use Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0D1623] mb-4">
              <ClientOnly
                fallback={<span>3. How We Use Your Information</span>}
              >
                {t("pages.privacy.sections.usage.title")}
              </ClientOnly>
            </h2>
            <p className="text-[#5F6B7A] leading-relaxed mb-4">
              <ClientOnly fallback={<span>We use your information to:</span>}>
                {t("pages.privacy.sections.usage.intro")}
              </ClientOnly>
            </p>
            <ul className="list-disc pl-6 text-[#5F6B7A] leading-relaxed space-y-2">
              <li>
                <ClientOnly
                  fallback={<span>Provide and deliver our services</span>}
                >
                  {t("pages.privacy.sections.usage.list.provide")}
                </ClientOnly>
              </li>
              <li>
                <ClientOnly
                  fallback={
                    <span>Process applications and handle communications</span>
                  }
                >
                  {t("pages.privacy.sections.usage.list.process")}
                </ClientOnly>
              </li>
              <li>
                <ClientOnly
                  fallback={
                    <span>Improve our services and user experience</span>
                  }
                >
                  {t("pages.privacy.sections.usage.list.improve")}
                </ClientOnly>
              </li>
              <li>
                <ClientOnly
                  fallback={
                    <span>
                      Send important updates and service notifications
                    </span>
                  }
                >
                  {t("pages.privacy.sections.usage.list.notify")}
                </ClientOnly>
              </li>
              <li>
                <ClientOnly
                  fallback={
                    <span>Comply with legal requirements and regulations</span>
                  }
                >
                  {t("pages.privacy.sections.usage.list.comply")}
                </ClientOnly>
              </li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0D1623] mb-4">
              <ClientOnly fallback={<span>4. Information Sharing</span>}>
                {t("pages.privacy.sections.sharing.title")}
              </ClientOnly>
            </h2>
            <p className="text-[#5F6B7A] leading-relaxed mb-4">
              <ClientOnly
                fallback={
                  <span>
                    We may share your information with trusted partners and
                    service providers who assist us in delivering our services,
                    including universities, visa processing agencies, and
                    accommodation providers. We only share information necessary
                    for these services and ensure all partners maintain
                    appropriate privacy standards.
                  </span>
                }
              >
                {t("pages.privacy.sections.sharing.content")}
              </ClientOnly>
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0D1623] mb-4">
              <ClientOnly fallback={<span>5. Data Security</span>}>
                {t("pages.privacy.sections.security.title")}
              </ClientOnly>
            </h2>
            <p className="text-[#5F6B7A] leading-relaxed mb-4">
              <ClientOnly
                fallback={
                  <span>
                    We implement appropriate technical and organizational
                    measures to protect your personal information against
                    unauthorized access, alteration, disclosure, or destruction.
                    This includes encryption, secure data storage, and regular
                    security assessments.
                  </span>
                }
              >
                {t("pages.privacy.sections.security.content")}
              </ClientOnly>
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0D1623] mb-4">
              <ClientOnly fallback={<span>6. Your Rights</span>}>
                {t("pages.privacy.sections.rights.title")}
              </ClientOnly>
            </h2>
            <p className="text-[#5F6B7A] leading-relaxed mb-4">
              <ClientOnly fallback={<span>You have the right to:</span>}>
                {t("pages.privacy.sections.rights.intro")}
              </ClientOnly>
            </p>
            <ul className="list-disc pl-6 text-[#5F6B7A] leading-relaxed space-y-2">
              <li>
                <ClientOnly
                  fallback={
                    <span>Access and review your personal information</span>
                  }
                >
                  {t("pages.privacy.sections.rights.list.access")}
                </ClientOnly>
              </li>
              <li>
                <ClientOnly
                  fallback={
                    <span>Request corrections to inaccurate information</span>
                  }
                >
                  {t("pages.privacy.sections.rights.list.correct")}
                </ClientOnly>
              </li>
              <li>
                <ClientOnly
                  fallback={<span>Request deletion of your personal data</span>}
                >
                  {t("pages.privacy.sections.rights.list.delete")}
                </ClientOnly>
              </li>
              <li>
                <ClientOnly
                  fallback={<span>Opt out of marketing communications</span>}
                >
                  {t("pages.privacy.sections.rights.list.optout")}
                </ClientOnly>
              </li>
              <li>
                <ClientOnly
                  fallback={<span>Data portability and transfer rights</span>}
                >
                  {t("pages.privacy.sections.rights.list.portability")}
                </ClientOnly>
              </li>
            </ul>
          </section>

          {/* Cookies and Tracking */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0D1623] mb-4">
              <ClientOnly fallback={<span>7. Cookies and Tracking</span>}>
                {t("pages.privacy.sections.cookies.title")}
              </ClientOnly>
            </h2>
            <p className="text-[#5F6B7A] leading-relaxed mb-4">
              <ClientOnly
                fallback={
                  <span>
                    We use cookies and similar tracking technologies to improve
                    your browsing experience, analyze website traffic, and
                    provide personalized content. You can control cookie
                    preferences through your browser settings.
                  </span>
                }
              >
                {t("pages.privacy.sections.cookies.content")}
              </ClientOnly>
            </p>
          </section>

          {/* Third-Party Services */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0D1623] mb-4">
              <ClientOnly fallback={<span>8. Third-Party Services</span>}>
                {t("pages.privacy.sections.thirdparty.title")}
              </ClientOnly>
            </h2>
            <p className="text-[#5F6B7A] leading-relaxed mb-4">
              <ClientOnly
                fallback={
                  <span>
                    Our website may contain links to third-party websites and
                    services. We are not responsible for the privacy practices
                    of these third parties. We encourage you to review their
                    privacy policies before providing any personal information.
                  </span>
                }
              >
                {t("pages.privacy.sections.thirdparty.content")}
              </ClientOnly>
            </p>
          </section>

          {/* Changes to Privacy Policy */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0D1623] mb-4">
              <ClientOnly fallback={<span>9. Changes to This Policy</span>}>
                {t("pages.privacy.sections.changes.title")}
              </ClientOnly>
            </h2>
            <p className="text-[#5F6B7A] leading-relaxed mb-4">
              <ClientOnly
                fallback={
                  <span>
                    We may update this Privacy Policy from time to time. We will
                    notify you of any significant changes by posting the updated
                    policy on our website and updating the &quot;Last
                    Updated&quot; date above.
                  </span>
                }
              >
                {t("pages.privacy.sections.changes.content")}
              </ClientOnly>
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-[#0D1623] mb-4">
              <ClientOnly fallback={<span>10. Contact Us</span>}>
                {t("pages.privacy.sections.contact.title")}
              </ClientOnly>
            </h2>
            <p className="text-[#5F6B7A] leading-relaxed mb-4">
              <ClientOnly
                fallback={
                  <span>
                    If you have questions about this Privacy Policy or our data
                    practices, please contact us at:
                  </span>
                }
              >
                {t("pages.privacy.sections.contact.intro")}
              </ClientOnly>
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-[#0D1623] font-medium mb-2">
                EasyLife Ghana - Privacy Officer
              </p>
              <p className="text-[#5F6B7A] text-sm leading-relaxed">
                Email: privacy@easylifeghana.com
                <br />
                Phone: +233 (0) 26 215 5555
                <br />
                Phone: +233 (0) 53 825 4404
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
