"use client"

import Image from "next/image"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export interface Provider {
  name: string
  location: string
  established: string
  tagline?: string
  description?: string
  specialties?: string[]
  programs?: string[]
  services?: string[]
  type?: string
  image: string
  rating?: number
  ranking?: string
  students?: string
  capacity?: string
  website?: string
  bgColor?: string
}

interface ProviderCardProps {
  providers: Provider[]
  title: string
  subtitle: string
  imageBasePath?: string
}

export default function ProviderCard({
  providers,
  title,
  subtitle,
  imageBasePath = "",
}: ProviderCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const next = () => {
    setCurrentIndex(prev => (prev + 1) % providers.length)
  }

  const prev = () => {
    setCurrentIndex(prev => (prev - 1 + providers.length) % providers.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      next()
    }
    if (isRightSwipe) {
      prev()
    }
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % providers.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [providers.length])

  return (
    <div className="mb-12">
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-[#0D1623] mb-4">{title}</h3>
        <p className="text-[#5F6B7A]">{subtitle}</p>
      </div>

      <div className="bg-white">
        <div
          className=""
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              className="rounded-3xl overflow-hidden min-h-[500px] flex flex-col lg:flex-row"
            >
              <div className="relative h-96 sm:h-[32rem] md:h-[36rem] lg:flex-1 lg:h-auto">
                <Image
                  src={`${imageBasePath}/${providers[currentIndex].image}`}
                  alt={`${providers[currentIndex].name} facility`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={currentIndex === 0}
                />
              </div>

              <div className="flex-1 bg-white p-8 lg:p-16 flex flex-col justify-center">
                <div className="mb-4">
                  <h4 className="text-3xl lg:text-4xl font-bold text-[#0D1623] leading-tight mb-3">
                    {providers[currentIndex].name}
                  </h4>
                  <p className="text-gray-600 text-lg font-medium mb-6">
                    {providers[currentIndex].tagline ||
                      providers[currentIndex].type ||
                      ""}
                  </p>
                </div>

                <div className="mb-8">
                  <p className="text-[#5F6B7A] leading-relaxed mb-6">
                    {providers[currentIndex].description ||
                      `Leading provider offering quality services with ${(providers[currentIndex].programs || providers[currentIndex].services || []).length} offerings including ${(providers[currentIndex].programs || providers[currentIndex].services || []).slice(0, 2).join(", ")} and more.`}
                  </p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {providers[currentIndex].location}
                    </div>
                    <div className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Est. {providers[currentIndex].established}
                    </div>
                    {(providers[currentIndex].students ||
                      providers[currentIndex].capacity) && (
                      <div className="flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        {providers[currentIndex].students ||
                          providers[currentIndex].capacity}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <a
                    href={
                      providers[currentIndex].website ||
                      `https://www.google.com/search?q=${encodeURIComponent(providers[currentIndex].name)} Ghana`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-between p-8">
          <button
            onClick={prev}
            className="p-3 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-all duration-300"
            aria-label="Previous provider"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="flex justify-center space-x-2">
            {providers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-gray-800 w-8" : "bg-gray-300 w-2"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="p-3 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-all duration-300"
            aria-label="Next provider"
          >
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
