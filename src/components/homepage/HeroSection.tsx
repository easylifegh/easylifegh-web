"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "react-i18next"
import { motion, AnimatePresence } from "framer-motion"
import AnimatedText from "@/components/motion/AnimatedText"
import AnimatedBackground from "@/components/motion/AnimatedBackground"
import { hoverEffects } from "@/lib/motion"

export default function HeroSection() {
  const { t } = useTranslation()
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/hero/university.png",
      titleKey: "hero.slides.university.title",
      subtitleKey: "hero.slides.university.subtitle",
    },
    {
      image: "/hero/class-activities.png",
      titleKey: "hero.slides.english.title",
      subtitleKey: "hero.slides.english.subtitle",
    },
    {
      image: "/hero/discover.png",
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
      <AnimatePresence mode="wait">
        {slides.map(
          (slide, index) =>
            index === currentSlide && (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
                className="absolute inset-0"
              >
                <div className="w-full h-full">
                  <Image
                    src={slide.image}
                    alt={t(slide.titleKey)}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="100vw"
                  />
                </div>
                <div className="absolute inset-0 bg-black/50"></div>
                <AnimatedBackground variant="gradient" className="opacity-20" />
              </motion.div>
            )
        )}
      </AnimatePresence>

      <div className="relative z-10 flex items-start h-full">
        <div className="container mx-auto px-6 sm:px-6 lg:px-8 pt-18 sm:pt-16 md:pt-20">
          <div className="max-w-2xl text-white">
            <motion.div
              className="-mt-2 sm:-mt-6 md:-mt-8 lg:-mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              <AnimatedText
                key={currentSlide}
                className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8 lg:mb-12"
                delay={0.8}
                staggerChildren={0.08}
                animationType="slide"
              >
                {t(slides[currentSlide].titleKey)}
              </AnimatedText>

              <motion.p
                key={`subtitle-${currentSlide}`}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-10 md:mb-16 lg:mb-24"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1.2,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
              >
                {t(slides[currentSlide].subtitleKey)}
              </motion.p>
            </motion.div>

            <motion.div
              className="flex flex-col gap-4 sm:gap-6 sm:flex-row mt-10 sm:mt-0 md:mt-16 lg:mt-24"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.6,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              <motion.div whileHover={hoverEffects.lift}>
                <Link
                  href="/login"
                  className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl inline-block text-center"
                >
                  {t("hero.buttons.applyNow")}
                </Link>
              </motion.div>
              <motion.div whileHover={hoverEffects.lift}>
                <Link
                  href="/guide"
                  className="border-2 border-white hover:bg-white hover:text-black text-white px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-4 rounded-full font-bold text-base sm:text-lg transition-all duration-300 inline-block text-center"
                >
                  {t("hero.buttons.downloadGuide")}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 flex space-x-3 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2 }}
      >
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-yellow-400 scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </motion.div>
    </section>
  )
}
