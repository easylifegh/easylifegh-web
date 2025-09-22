import React from "react"
import Link from "next/link"
import { Hero } from "@/components/shared"

export default function BusinessServicePage() {
  return (
    <section className="min-h-screen">
      <Hero
        title="Business Services"
        subtitle="Business setup, investment opportunities, and entrepreneurial support to help you establish and grow your business in Ghana."
        backgroundImage="/services/business-hero.jpg"
      />

      <div className="container mx-auto px-6 lg:px-8 max-w-6xl py-20">
        <div className="text-center">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl border border-blue-100 p-12 mb-12">
            <div className="mb-8">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-12 h-12 text-blue-600"
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
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#0D1623] mb-4">
              Coming Soon
            </h2>
            <p className="text-[#5F6B7A] mb-8 max-w-2xl mx-auto">
              We are developing comprehensive business services including
              company registration, investment advisory, and business
              development support. Check back soon!
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Get Notified
              </Link>
              <Link
                href="/services/academic"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Explore Academic Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
