"use client"

import { Facebook, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import ClientOnly from "@/components/ClientOnly"
import { downloadGuide } from "@/utils/downloadGuide"

export default function Footer() {
  const { t, i18n } = useTranslation()
  const year = new Date().getFullYear()

  // English fallback sections
  const fallbackSections = [
    {
      heading: "Services",
      links: [
        { label: "Academic Services", to: "/services/academic" },
        { label: "Tourism & Cultural Tours", to: "/services/tourism" },
        { label: "Business Travel Support", to: "/services/business" },
        { label: "Medical Travel Assistance", to: "/services/medical" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { label: "Why Choose Ghana", to: "/why-ghana" },
        { label: "Download Guide", to: "/guide" },
        { label: "FAQs", to: "/faq" },
        // { label: "Blog & Updates", to: "/blog" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Us", to: "/about" },
        { label: "Contact", to: "/contact" },
        { label: "Pricing", to: "/#pricing" },
      ],
    },
  ]

  const footerSections = [
    {
      heading: "services",
      links: [
        { labelKey: "academicServices", to: "/services/academic" },
        { labelKey: "tourismCulturalTours", to: "/services/tourism" },
        { labelKey: "businessTravelSupport", to: "/services/business" },
        { labelKey: "medicalTravelAssistance", to: "/services/medical" },
      ],
    },
    {
      heading: "resources",
      links: [
        { labelKey: "whyChooseGhana", to: "/why-ghana" },
        { labelKey: "downloadGuide", to: "/guide" },
        { labelKey: "faqs", to: "/faq" },
        // { labelKey: "blogUpdates", to: "/blog" },
      ],
    },
    {
      heading: "company",
      links: [
        { labelKey: "aboutUs", to: "/about" },
        { labelKey: "contact", to: "/contact" },
        { labelKey: "pricing", to: "/#pricing" },
      ],
    },
  ]

  return (
    <footer
      className="bg-yellow-400 mt-20 border-t border-yellow-300"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* Logo and Description Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="EasyLife Ghana"
                width={96}
                height={96}
                className="h-20 w-auto md:h-24 rounded-lg"
                priority
              />
              <ClientOnly
                fallback={
                  <div className="font-bold text-2xl text-gray-900">
                    EasyLife Ghana
                  </div>
                }
              >
                <div className="font-bold text-2xl text-gray-900">
                  {t("header.brand")}
                </div>
              </ClientOnly>
            </div>
            <ClientOnly
              fallback={
                <p className="text-gray-700 text-lg leading-relaxed max-w-2xl">
                  Your trusted partner for studying in Ghana. We provide
                  comprehensive support from university applications to settling
                  into your new academic journey in West Africa&apos;s most
                  welcoming destination.
                </p>
              }
            >
              <p className="text-gray-700 text-lg leading-relaxed max-w-2xl">
                {t("footer.description")}
              </p>
            </ClientOnly>
          </div>

          {/* Footer Links Grid */}
          <ClientOnly
            fallback={
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {fallbackSections.map(section => (
                  <div key={section.heading}>
                    <h3 className="font-semibold text-gray-900 mb-6 text-sm uppercase tracking-wider">
                      {section.heading}
                    </h3>
                    <ul className="space-y-3 mt-2">
                      {section.links.map(link => (
                        <li key={link.to}>
                          {link.to === "/guide" ? (
                            <button
                              onClick={() => downloadGuide(i18n.language)}
                              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm text-left bg-transparent border-none cursor-pointer"
                            >
                              {link.label}
                            </button>
                          ) : (
                            <Link
                              href={link.to}
                              className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm"
                              onClick={() => window.scrollTo(0, 0)}
                            >
                              {link.label}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            }
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {footerSections.map(section => (
                <div key={section.heading}>
                  <h3 className="font-semibold text-gray-900 mb-6 text-sm uppercase tracking-wider">
                    {t(`footer.sections.${section.heading}`)}
                  </h3>
                  <ul className="space-y-3 mt-2">
                    {section.links.map(link => (
                      <li key={link.to}>
                        {link.to === "/guide" ? (
                          <button
                            onClick={() => downloadGuide(i18n.language)}
                            className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm text-left bg-transparent border-none cursor-pointer"
                          >
                            {t(`footer.links.${link.labelKey}`)}
                          </button>
                        ) : (
                          <Link
                            href={link.to}
                            className="text-gray-700 hover:text-gray-900 transition-colors duration-200 text-sm"
                            onClick={() => window.scrollTo(0, 0)}
                          >
                            {t(`footer.links.${link.labelKey}`)}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </ClientOnly>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="border-t border-yellow-300">
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Media */}
            <div className="flex items-center gap-6">
              <ClientOnly
                fallback={
                  <span className="text-sm font-medium text-gray-900">
                    Follow us:
                  </span>
                }
              >
                <span className="text-sm font-medium text-gray-900">
                  {t("footer.followUs")}
                </span>
              </ClientOnly>
              <div className="flex gap-3">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-10 h-10 bg-[#1877F2] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-10 h-10 bg-gradient-to-r from-[#833AB4] via-[#E4405F] to-[#FCAF45] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  aria-label="X"
                  className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Legal Links and Copyright */}
            <ClientOnly
              fallback={
                <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-500">
                  <div className="flex gap-6">
                    <Link
                      href="/privacy"
                      className="hover:text-gray-900 transition-colors"
                    >
                      Privacy Policy
                    </Link>
                    <Link
                      href="/terms"
                      className="hover:text-gray-900 transition-colors"
                    >
                      Terms of Service
                    </Link>
                  </div>
                  <div className="text-gray-400">
                    © {year} EasyLife Ghana. All rights reserved.
                  </div>
                </div>
              }
            >
              <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-500">
                <div className="flex gap-6">
                  <Link
                    href="/privacy"
                    className="hover:text-gray-900 transition-colors"
                  >
                    {t("pages.privacy.title")}
                  </Link>
                  <Link
                    href="/terms"
                    className="hover:text-gray-900 transition-colors"
                  >
                    {t("pages.terms.title")}
                  </Link>
                </div>
                <div className="text-gray-400">
                  {t("footer.copyright", { year })}
                </div>
              </div>
            </ClientOnly>
          </div>
        </div>
      </div>
    </footer>
  )
}
