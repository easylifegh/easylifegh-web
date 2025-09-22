import React from "react"
import Link from "next/link"
import { Hero } from "@/components/shared"

export default function MedicalServicePage() {
  return (
    <section className="min-h-screen">
      <Hero
        title="Medical Services"
        subtitle="Professional medical consultations, health screenings, and wellness programs designed to support your health journey in Ghana."
        backgroundImage="/services/medical-hero.jpg"
      />

      <div className="container mx-auto px-6 lg:px-8 max-w-6xl py-20">
        <div className="text-center">
          <div className="bg-gradient-to-br from-red-50 to-white rounded-2xl border border-red-100 p-12 mb-12">
            <div className="mb-8">
              <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-12 h-12 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#0D1623] mb-4">
              Coming Soon
            </h2>
            <p className="text-[#5F6B7A] mb-8 max-w-2xl mx-auto">
              We are working on bringing you comprehensive medical services
              including health consultations, medical tourism support, and
              wellness programs. Stay tuned for updates!
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Get Notified
              </Link>
              <Link
                href="/services/academic"
                className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
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
