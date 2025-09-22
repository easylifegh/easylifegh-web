import React from "react"
import Link from "next/link"
import { Hero } from "@/components/shared"

export default function TourismServicePage() {
  return (
    <section className="min-h-screen">
      <Hero
        title="Tourism Services"
        subtitle="Cultural tours, travel planning, and tourism experiences to help you discover the beauty and heritage of Ghana."
        backgroundImage="/services/tourism-hero.jpg"
      />

      <div className="container mx-auto px-6 lg:px-8 max-w-6xl py-20">
        <div className="text-center">
          <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl border border-green-100 p-12 mb-12">
            <div className="mb-8">
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-12 h-12 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-[#0D1623] mb-4">
              Coming Soon
            </h2>
            <p className="text-[#5F6B7A] mb-8 max-w-2xl mx-auto">
              We are crafting amazing tourism experiences including cultural
              tours, heritage site visits, and travel planning services.
              Adventure awaits!
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Get Notified
              </Link>
              <Link
                href="/services/academic"
                className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
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
