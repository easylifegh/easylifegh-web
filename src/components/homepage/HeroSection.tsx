"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTranslation } from "react-i18next"

export default function HeroSection() {
  const { t } = useTranslation()
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "https://www.ug.edu.gh/sites/default/files/2025-07/UG-main.jpg",
      titleKey: "hero.slides.university.title",
      subtitleKey: "hero.slides.university.subtitle",
    },
    {
      image: "https://silcampusgh.com/img/class%20activities.jpg",
      titleKey: "hero.slides.english.title",
      subtitleKey: "hero.slides.english.subtitle",
    },
    {
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fb/46/ghana.jpg?w=1200&h=700&s=1",
      titleKey: "hero.slides.discover.title",
      subtitleKey: "hero.slides.discover.subtitle",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative h-[70vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={t(slide.titleKey)}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ))}

      <div className="relative z-10 flex items-start h-full">
        <div className="container mx-auto px-6 sm:px-6 lg:px-8 pt-18 sm:pt-16 md:pt-20">
          <div className="max-w-2xl text-white">
            <div className="-mt-2 sm:-mt-6 md:-mt-8 lg:-mt-12">
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8 lg:mb-12">
                {t(slides[currentSlide].titleKey)}
              </h1>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-10 md:mb-16 lg:mb-24">
                {t(slides[currentSlide].subtitleKey)}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:gap-6 sm:flex-row mt-10 sm:mt-0 md:mt-16 lg:mt-24">
              <Link
                href="/apply"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 inline-block text-center"
              >
                {t("hero.buttons.applyNow")}
              </Link>
              <Link
                href="/guide"
                className="border-2 border-white hover:bg-white hover:text-black text-white px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 transform hover:-translate-y-1 inline-block text-center"
              >
                {t("hero.buttons.downloadGuide")}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-yellow-400 scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
