"use client"

import { useState } from "react"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import RevealOnScroll from "@/components/motion/RevealOnScroll"
import StaggerContainer from "@/components/motion/StaggerContainer"
import { motion, AnimatePresence } from "framer-motion"
import { hoverEffects } from "@/lib/motion"

export default function FAQ() {
  const { t } = useTranslation()
  const [openQuestion, setOpenQuestion] = useState<string | null>(null)

  const questions = ["services", "cost", "visa", "settlement"]

  const toggleQuestion = (questionKey: string) => {
    setOpenQuestion(openQuestion === questionKey ? null : questionKey)
  }

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8 max-w-3xl">
        {/* Title */}
        <RevealOnScroll>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("faq.title")}
            </h2>
            <motion.div
              className="w-16 h-1 bg-yellow-400 mx-auto"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            />
          </div>
        </RevealOnScroll>

        {/* FAQ Items */}
        <StaggerContainer className="space-y-2 mb-12" staggerChildren={0.1}>
          {questions.map(questionKey => (
            <motion.div
              key={questionKey}
              className="bg-white rounded-lg overflow-hidden"
              whileHover={hoverEffects.lift}
              transition={{ duration: 0.2 }}
            >
              <motion.button
                onClick={() => toggleQuestion(questionKey)}
                className="w-full px-8 py-6 text-left hover:bg-gray-50 transition-colors duration-200 focus:outline-none"
                whileTap={{ scale: 0.995 }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900 pr-4">
                    {t(`faq.questions.${questionKey}.question`)}
                  </h3>
                  <div className="flex-shrink-0">
                    <motion.div
                      className={`w-6 h-6 rounded-full border-2 border-gray-300 flex items-center justify-center transition-all duration-200 ${
                        openQuestion === questionKey
                          ? "border-green-500 bg-green-500"
                          : "hover:border-green-400"
                      }`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <motion.svg
                        className={`w-3 h-3 transition-all duration-200 ${
                          openQuestion === questionKey
                            ? "text-white"
                            : "text-gray-400"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{
                          rotate: openQuestion === questionKey ? 45 : 0,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M12 6v12m6-6H6"
                        />
                      </motion.svg>
                    </motion.div>
                  </div>
                </div>
              </motion.button>

              <AnimatePresence>
                {openQuestion === questionKey && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <div className="pt-2 border-t border-gray-100">
                        <motion.p
                          className="text-gray-600 leading-relaxed mt-4"
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          {t(`faq.questions.${questionKey}.answer`)}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* View All Link */}
        <RevealOnScroll delay={0.2}>
          <div className="text-center">
            <motion.div whileHover={hoverEffects.scale}>
              <Link
                href="/faq"
                className="text-green-600 font-medium hover:text-green-700 transition-colors duration-200 underline underline-offset-4"
              >
                {t("faq.viewAll")}
              </Link>
            </motion.div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
