"use client"

import { Facebook, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  const year = new Date().getFullYear()

  const footerSections = [
    {
      heading: "Study in Ghana",
      links: [
        { label: "Universities & Schools", to: "/universities" },
        { label: "English Language Schools", to: "/english-schools" },
        { label: "Programs Available", to: "/programs" },
        { label: "Student Life", to: "/student-life" },
        { label: "Cost of Living", to: "/cost-living" },
      ],
    },
    {
      heading: "Our Services",
      links: [
        {
          label: "English School Registration",
          to: "/services/english-school",
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
        { label: "Contact Us", to: "/contact" },
        { label: "Partner with Us", to: "/partners" },
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
                EasyLife Ghana
              </div>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
              Your trusted partner for studying in Ghana. We provide
              comprehensive support from university applications to settling
              into your new academic journey in West Africa&apos;s most
              welcoming destination.
            </p>
          </div>

          {/* Footer Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map(section => (
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
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="border-t border-gray-200">
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Media */}
            <div className="flex items-center gap-6">
              <span className="text-sm font-medium text-gray-900">
                Follow us:
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
          </div>
        </div>
      </div>
    </footer>
  )
}
