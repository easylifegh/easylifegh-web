"use client"

import { Facebook, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import ClientOnly from "@/components/ClientOnly"

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  // English fallback sections
  const fallbackSections = [
    {
      heading: "Study in Ghana",
      links: [
        { label: "Why Choose Ghana", to: "/why-ghana" },
        { label: "Universities & Schools", to: "/universities" },
        { label: "Student Life", to: "/student-life" },
        { label: "Cost of Living", to: "/cost-living" },
      ],
    },
    {
      heading: "Our Services",
      links: [
        {
          label: "Language School Registration",
          to: "/services/language-school",
        },
        { label: "University Placement", to: "/services/placement" },
        { label: "Visa Assistance", to: "/services/visa" },
        { label: "Accommodation Help", to: "/services/accommodation" },
        { label: "Airport Pickup", to: "/services/pickup" },
        { label: "Orientation Support", to: "/services/orientation" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { label: "Application Guide", to: "/guide" },
        { label: "Student Stories", to: "/stories" },
        { label: "Blog & News", to: "/blog" },
        { label: "FAQs", to: "/faq" },
        { label: "Download Brochure", to: "/brochure" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About Us", to: "/about" },
        { label: "Our Team", to: "/team" },
        { label: "Careers", to: "/careers" },
        { label: "Contact", to: "/contact" },
        { label: "Partner with Us", to: "/partners" },
      ],
    },
  ]

  const footerSections = [
    {
      heading: "studyGhana",
      links: [
        { label: t("navigation.whyGhana.title"), to: "/why-ghana" },
        { label: t("navigation.universities.title"), to: "/universities" },
        { label: t("navigation.studentLife.title"), to: "/student-life" },
        { label: t("navigation.costLiving.title"), to: "/cost-living" },
      ],
    },
    {
      heading: "ourServices",
      links: [
        {
          label: t("navigation.languageSchool.title"),
          to: "/services/language-school",
        },
        { label: t("navigation.placement.title"), to: "/services/placement" },
        { label: t("navigation.visa.title"), to: "/services/visa" },
        {
          label: t("navigation.accommodation.title"),
          to: "/services/accommodation",
        },
        { label: t("navigation.pickup.title"), to: "/services/pickup" },
        {
          label: t("navigation.orientation.title"),
          to: "/services/orientation",
        },
      ],
    },
    {
      heading: "resources",
      links: [
        { label: t("navigation.guide.title"), to: "/guide" },
        { label: t("navigation.stories.title"), to: "/stories" },
        { label: t("navigation.blog.title"), to: "/blog" },
        { label: t("navigation.faq.title"), to: "/faq" },
        { label: t("navigation.brochure.title"), to: "/brochure" },
      ],
    },
    {
      heading: "company",
      links: [
        { label: t("pages.about.title"), to: "/about" },
        { label: t("pages.team.title"), to: "/team" },
        { label: t("pages.careers.title"), to: "/careers" },
        { label: t("pages.contact.title"), to: "/contact" },
        { label: t("pages.partners.title"), to: "/partners" },
      ],
    },
  ]

  return (
    <footer
      className="bg-white mt-20 border-t border-gray-100"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          {/* Logo and Description Section */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.jpeg"
                alt="EasyLife Ghana"
                width={48}
                height={48}
                className="rounded-lg"
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
                <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                  Your trusted partner for studying in Ghana. We provide
                  comprehensive support from university applications to settling
                  into your new academic journey in West Africa&apos;s most
                  welcoming destination.
                </p>
              }
            >
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                {t("footer.description")}
              </p>
            </ClientOnly>
          </div>

          {/* Footer Links Grid */}
          <ClientOnly
            fallback={
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {fallbackSections.map(section => (
                  <div key={section.heading}>
                    <h3 className="font-semibold text-gray-900 mb-6 text-sm uppercase tracking-wider">
                      {section.heading}
                    </h3>
                    <ul className="space-y-3 mt-2">
                      {section.links.map(link => (
                        <li key={link.to}>
                          <Link
                            href={link.to}
                            className="text-gray-600 hover:text-[#17a253] transition-colors duration-200 text-sm"
                            onClick={() => window.scrollTo(0, 0)}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            }
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {footerSections.map(section => (
                <div key={section.heading}>
                  <h3 className="font-semibold text-gray-900 mb-6 text-sm uppercase tracking-wider">
                    {t(`footer.sections.${section.heading}`)}
                  </h3>
                  <ul className="space-y-3 mt-2">
                    {section.links.map(link => (
                      <li key={link.to}>
                        <Link
                          href={link.to}
                          className="text-gray-600 hover:text-[#17a253] transition-colors duration-200 text-sm"
                          onClick={() => window.scrollTo(0, 0)}
                        >
                          {link.label}
                        </Link>
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
      <div className="border-t border-gray-200">
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
