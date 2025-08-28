"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "https://www.ug.edu.gh/sites/default/files/2025-07/UG-main.jpg",
      title: "Study at Ghana's Top Universities",
      subtitle:
        "Join thousands of international students pursuing world-class degrees in medicine, engineering, business and more",
    },
    {
      image: "https://silcampusgh.com/img/class%20activities.jpg",
      title: "Master English in Ghana",
      subtitle:
        "Perfect your English skills in an immersive environment while experiencing African culture and hospitality",
    },
    {
      image:
        "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/fb/46/ghana.jpg?w=1200&h=700&s=1",
      title: "Discover Beautiful Ghana",
      subtitle:
        "Explore West Africa's gateway nation with rich history, stunning landscapes, and vibrant cultural heritage",
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
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      ))}

      <div className="relative z-10 flex items-center h-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl text-white">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 sm:mb-12 md:mb-16 lg:mb-24">
              {slides[currentSlide].title}
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-12 md:mb-16 lg:mb-32">
              {slides[currentSlide].subtitle}
            </p>

            <div className="flex flex-col gap-4 sm:gap-6 sm:flex-row">
              <Link
                href="/apply"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 inline-block text-center"
              >
                Apply Now
              </Link>
              <Link
                href="/guide"
                className="border-2 border-white hover:bg-white hover:text-black text-white px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 transform hover:-translate-y-1 inline-block text-center"
              >
                Download Guide
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
