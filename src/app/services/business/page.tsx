"use client"

import Link from "next/link"
import React, { useMemo } from "react"
import RevealOnScroll from "@/components/motion/RevealOnScroll"
import ServiceGallery from "@/components/shared/ServiceGallery"
import ProviderCard from "@/components/shared/ProviderCard"
import ProcessStep from "@/components/shared/ProcessStep"
import { Hero } from "@/components/shared"

export default function BusinessServicePage() {
  const businessFormationServices = useMemo(
    () => [
      {
        id: "company-registration",
        title: "Company Registration",
        duration: "2-4 weeks",
        description:
          "Complete business registration and incorporation services to establish your company legally in Ghana with all required documentation.",
        outcomes: [
          "Certificate of Incorporation",
          "Business Operating Permit",
          "Tax Identification Number",
          "Social Security Registration",
          "Bank Account Setup Assistance",
        ],
        ideal: "Entrepreneurs & Startups",
      },
      {
        id: "business-licensing",
        title: "Business Licensing",
        duration: "1-3 weeks",
        description:
          "Comprehensive licensing support for various business sectors including trade, manufacturing, and service industries.",
        outcomes: [
          "Sector-specific Licenses",
          "Import/Export Permits",
          "Environmental Compliance",
          "Industry Certifications",
          "Regulatory Approvals",
        ],
        ideal: "All Business Types",
      },
      {
        id: "investment-advisory",
        title: "Investment Advisory",
        duration: "Ongoing",
        description:
          "Strategic investment guidance and advisory services to help you make informed business decisions in the Ghanaian market.",
        outcomes: [
          "Market Analysis Reports",
          "Investment Opportunities",
          "Risk Assessment",
          "Financial Planning",
          "Due Diligence Support",
        ],
        ideal: "Investors & Corporations",
      },
      {
        id: "business-consulting",
        title: "Business Consulting",
        duration: "Project-based",
        description:
          "Professional consulting services covering strategy, operations, marketing, and growth planning for businesses of all sizes.",
        outcomes: [
          "Business Strategy Development",
          "Operational Efficiency",
          "Market Entry Strategy",
          "Growth Planning",
          "Performance Optimization",
        ],
        ideal: "Growing Businesses",
      },
    ],
    []
  )

  const investmentOpportunities = useMemo(
    () => [
      {
        id: "real-estate",
        title: "Real Estate Investment",
        duration: "Long-term",
        description:
          "Residential and commercial real estate investment opportunities in Ghana's growing property market.",
        fields: [
          "Residential Properties",
          "Commercial Real Estate",
          "Land Development",
          "Property Management",
          "Real Estate Funds",
        ],
        requirements: "Investment opportunities available",
      },
      {
        id: "agriculture",
        title: "Agriculture & Agribusiness",
        duration: "Seasonal/Annual",
        description:
          "Investment opportunities in Ghana's agricultural sector including farming, processing, and export operations.",
        fields: [
          "Cash Crop Farming",
          "Livestock & Poultry",
          "Food Processing",
          "Agricultural Technology",
          "Export Operations",
        ],
        requirements: "Investment opportunities available",
      },
      {
        id: "technology",
        title: "Technology Startups",
        duration: "Growth-focused",
        description:
          "Invest in Ghana's emerging tech ecosystem including fintech, e-commerce, and digital solutions.",
        fields: [
          "Fintech Solutions",
          "E-commerce Platforms",
          "Mobile Applications",
          "Digital Services",
          "Tech Infrastructure",
        ],
        requirements: "Investment opportunities available",
      },
      {
        id: "manufacturing",
        title: "Manufacturing",
        duration: "Long-term",
        description:
          "Industrial manufacturing opportunities in textiles, food processing, and consumer goods production.",
        fields: [
          "Textile Manufacturing",
          "Food & Beverage",
          "Consumer Goods",
          "Industrial Equipment",
          "Export Manufacturing",
        ],
        requirements: "Investment opportunities available",
      },
    ],
    []
  )

  const businessSupportProviders = [
    {
      name: "Ghana Investment Promotion Centre (GIPC)",
      location: "Accra, Ghana",
      established: "1994",
      tagline: "Your Gateway to Investment in Ghana",
      description:
        "The official government agency responsible for promoting and facilitating investments in Ghana, providing comprehensive support for foreign and local investors.",
      specialties: [
        "Investment Promotion",
        "Business Registration",
        "Investor Services",
        "Policy Advocacy",
        "Investment Facilitation",
      ],
      image: "gipc-building.jpg",
      website: "https://gipcghana.com",
    },
    {
      name: "Registrar General's Department",
      location: "Accra, Ghana",
      established: "1956",
      tagline: "Facilitating Business Registration",
      description:
        "Government agency responsible for business registration, company incorporation, and maintaining the registry of businesses in Ghana.",
      specialties: [
        "Company Registration",
        "Business Name Registration",
        "Annual Returns Filing",
        "Corporate Documentation",
        "Legal Entity Formation",
      ],
      image: "rgd-office.jpg",
      website: "https://rgd.gov.gh",
    },
    {
      name: "Association of Ghana Industries (AGI)",
      location: "Accra, Ghana",
      established: "1957",
      tagline: "Voice of Ghanaian Industry",
      description:
        "Premier private sector organization representing manufacturing and allied industries in Ghana, providing advocacy and business support services.",
      specialties: [
        "Industry Advocacy",
        "Business Networking",
        "Policy Development",
        "Export Promotion",
        "Industrial Development",
      ],
      image: "agi-headquarters.jpg",
      website: "https://agighana.org",
    },
    {
      name: "Ghana Free Zones Authority",
      location: "Accra, Ghana",
      established: "1995",
      tagline: "Creating Investment Opportunities",
      description:
        "Government agency promoting export-oriented investments through free zone incentives and streamlined business setup processes.",
      specialties: [
        "Free Zone Licensing",
        "Export Promotion",
        "Investment Incentives",
        "Industrial Parks",
        "Trade Facilitation",
      ],
      image: "gfza-complex.jpg",
      website: "https://gfzb.gov.gh",
    },
    {
      name: "National Board for Small Scale Industries (NBSSI)",
      location: "Accra, Ghana",
      established: "1981",
      tagline: "Empowering Small Businesses",
      description:
        "Government agency focused on developing and supporting small and medium enterprises (SMEs) through various programs and initiatives.",
      specialties: [
        "SME Development",
        "Business Training",
        "Credit Facilitation",
        "Technology Transfer",
        "Entrepreneurship Support",
      ],
      image: "nbssi-office.jpg",
      website: "https://nbssi.gov.gh",
    },
    {
      name: "Ghana Chamber of Commerce & Industry",
      location: "Accra, Ghana",
      established: "1961",
      tagline: "Promoting Trade and Industry",
      description:
        "Leading private sector organization facilitating trade, commerce, and industrial development while providing business advocacy and networking opportunities.",
      specialties: [
        "Trade Promotion",
        "Business Advocacy",
        "Commercial Mediation",
        "Export Development",
        "Business Intelligence",
      ],
      image: "gcci-building.jpg",
      website: "https://ghanachamber.org",
    },
  ]

  const process = [
    {
      step: "1",
      title: "Business Consultation",
      description:
        "Initial consultation to understand your business goals, assess market opportunities, and develop a customized business strategy for Ghana.",
      icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
      features: [
        "Market opportunity analysis",
        "Business model development",
        "Investment requirement assessment",
        "Regulatory landscape overview",
        "Timeline and milestone planning",
      ],
      image: "business-consultation.jpg",
    },
    {
      step: "2",
      title: "Legal Structure & Registration",
      description:
        "Complete business registration and legal structure setup including company incorporation, licensing, and regulatory compliance.",
      icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
      features: [
        "Company incorporation process",
        "Business name registration",
        "Operating license acquisition",
        "Tax registration and compliance",
        "Regulatory permits and approvals",
      ],
      image: "legal-registration.jpg",
    },
    {
      step: "3",
      title: "Business Setup & Operations",
      description:
        "Operational setup including banking, accounting systems, staff recruitment, and establishing business operations infrastructure.",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      features: [
        "Corporate banking setup",
        "Accounting and bookkeeping systems",
        "Office space and facilities",
        "Staff recruitment and HR setup",
        "IT infrastructure and systems",
      ],
      image: "business-operations.jpg",
    },
    {
      step: "4",
      title: "Growth & Expansion Support",
      description:
        "Ongoing support for business growth including marketing, expansion planning, additional funding, and strategic partnerships.",
      icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6",
      features: [
        "Marketing and branding support",
        "Business expansion planning",
        "Additional funding assistance",
        "Strategic partnership facilitation",
        "Performance monitoring and optimization",
      ],
      image: "business-growth.jpg",
    },
  ]

  return (
    <section id="business" className="scroll-mt-32">
      <Hero
        title="Business Services"
        subtitle="Comprehensive business setup, investment opportunities, and entrepreneurial support to establish and grow your business in Ghana."
      />

      {/* Our Business Support Process */}
      <ProcessStep
        process={process}
        title="Business in Ghana"
        imageBasePath="/business/process"
      />

      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        {/* Business Formation Services */}
        <RevealOnScroll delay={0.4}>
          <div className="mb-20"></div>
        </RevealOnScroll>
        <ServiceGallery
          items={businessFormationServices}
          title="Business Formation Services"
          subtitle="Complete business setup and registration services to get your company operational in Ghana"
          color="blue"
          layout="side-by-side"
        />

        {/* Business Support Organizations */}
        <RevealOnScroll delay={0.4}>
          <div className="mb-20 mt-16">
            <ProviderCard
              providers={businessSupportProviders}
              title="Business Support Organizations"
              subtitle="Government agencies and industry associations providing business support and advocacy"
              imageBasePath="/business/organizations"
            />
          </div>
        </RevealOnScroll>

        {/* Investment Opportunities */}
        <RevealOnScroll delay={0.5}>
          <div className="mb-20">
            <ServiceGallery
              items={investmentOpportunities}
              title="Investment Opportunities"
              subtitle="Explore lucrative investment sectors and opportunities in Ghana's growing economy"
              color="purple"
              layout="side-by-side"
            />
          </div>
        </RevealOnScroll>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl py-20">
        <RevealOnScroll delay={0.8}>
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 p-8 text-center">
            <h3 className="text-2xl font-bold text-[#0D1623] mb-4">
              Ready to Start Your Business in Ghana?
            </h3>
            <p className="text-[#5F6B7A] mb-8 max-w-2xl mx-auto">
              Let us help you navigate the business landscape in Ghana. From
              company registration to growth strategies, we provide end-to-end
              business support services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Schedule Business Consultation
              </Link>
              <Link
                href="/#how-to-apply"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Learn About Our Process
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}
