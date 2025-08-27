"use client"

import { Facebook, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "react-i18next"

export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

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
              <div className="font-bold text-2xl text-gray-900">
                {t("header.brand")}
              </div>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
              {t("footer.description")}
            </p>
          </div>

          {/* Footer Links Grid */}
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
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="border-t border-gray-200">
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Media */}
            <div className="flex items-center gap-6">
              <span className="text-sm font-medium text-gray-900">
                {t("footer.followUs")}
              </span>
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
                  aria-label="LinkedIn"
                  className="w-10 h-10 bg-[#0A66C2] text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Legal Links and Copyright */}
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
          </div>
        </div>
      </div>
    </footer>
  )
}
