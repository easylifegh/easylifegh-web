"use client"

import { useTranslation } from "react-i18next"
import RevealOnScroll from "@/components/motion/RevealOnScroll"
import InteractiveTimeline from "@/components/motion/InteractiveTimeline"
import Image from "next/image"
import { motion } from "framer-motion"
import { useRef } from "react"

export default function ApplicationProcess() {
  const { t } = useTranslation()
  const sectionRef = useRef(null)
  const timelineSteps = [
    {
      id: "consultation",
      title: t(`applicationProcess.steps.consultation.title`),
      description: "Get personalized guidance from our experts",
      color: "#3b82f6",
      icon: (
        <motion.svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          whileHover={{ rotate: 15, scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </motion.svg>
      ),
    },
    {
      id: "application",
      title: t(`applicationProcess.steps.application.title`),
      description: "Submit your complete application package",
      color: "#10b981",
      icon: (
        <motion.svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          whileHover={{ rotate: -10, scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </motion.svg>
      ),
    },
    {
      id: "visa",
      title: t(`applicationProcess.steps.visa.title`),
      description: "Secure your visa and documentation",
      color: "#f59e0b",
      icon: (
        <motion.svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          whileHover={{ rotateY: 180, scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
          />
        </motion.svg>
      ),
    },
    {
      id: "preparation",
      title: t(`applicationProcess.steps.preparation.title`),
      description: "Prepare for your journey to Ghana",
      color: "#8b5cf6",
      icon: (
        <motion.svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </motion.svg>
      ),
    },
    {
      id: "arrival",
      title: t(`applicationProcess.steps.arrival.title`),
      description: "Welcome to your new journey in Ghana",
      color: "#ef4444",
      icon: (
        <motion.svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          whileHover={{ y: -5, scale: 1.1 }}
          transition={{ duration: 0.2, type: "spring", stiffness: 300 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2.5}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </motion.svg>
      ),
    },
  ]

  return (
    <section
      id="how-to-apply"
      ref={sectionRef}
      className="py-20 lg:py-32 bg-white relative"
    >
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative">
        <div className="grid lg:grid-cols-2 gap-14 xl:gap-24 items-start">
          {/* Left Image Panel */}
          <div className="w-full order-2 lg:order-1">
            <Image
              src="/easylife.png"
              alt={t("applicationProcess.imageAlt", {
                defaultValue: "Travel inspiration",
              })}
              width={900}
              height={1200}
              className="w-full h-auto object-cover"
              priority={false}
            />
          </div>

          {/* Content + Timeline */}
          <div className="order-1 lg:order-2">
            <RevealOnScroll>
              <div className="mb-16 lg:mb-20">
                <motion.h2
                  className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {t("applicationProcess.title")}
                </motion.h2>
                <motion.p
                  className="text-lg text-gray-600 max-w-xl mb-8"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.35 }}
                  viewport={{ once: true }}
                >
                  {t("applicationProcess.subtitle")}
                </motion.p>
                <motion.div
                  className="w-32 h-1.5 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full"
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: 128, opacity: 1 }}
                  transition={{ duration: 1.1, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </div>
            </RevealOnScroll>

            <motion.div
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <InteractiveTimeline
                steps={timelineSteps}
                orientation="vertical"
                className="lg:pl-2"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
