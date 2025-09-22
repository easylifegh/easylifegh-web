"use client"

import Image from "next/image"
import React from "react"
import { motion } from "framer-motion"

export interface ProcessStepData {
  step: string
  title: string
  description: string
  icon: string
  features: string[]
  image: string
}

interface ProcessStepProps {
  process: ProcessStepData[]
  title: string
  imageBasePath: string
}

export default function ProcessStep({
  process,
  title,
  imageBasePath,
}: ProcessStepProps) {
  return (
    <div>
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-[#0D1623] text-center mb-24">
            {title}
          </h2>
        </div>
      </div>

      <div className="w-full">
        <div className="space-y-20 lg:space-y-28">
          {process.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-0 md:gap-0 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="aspect-video md:aspect-[4/3] w-full lg:w-2/3 xl:w-3/5">
                  <Image
                    src={`${imageBasePath}/${item.image}`}
                    alt={item.title}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>

              <div className="w-full md:w-1/2 text-center md:text-left px-6 md:px-16 py-12 md:py-20">
                <div className="relative max-w-xl mx-auto md:mx-0">
                  <div className="absolute -top-6 left-1/2 md:left-0 transform -translate-x-1/2 md:translate-x-0 -translate-y-1/2">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl font-bold">
                        {item.step}
                      </span>
                    </div>
                  </div>

                  <div className="pt-8">
                    <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-6 h-6 text-emerald-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d={item.icon}
                          />
                        </svg>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-[#0D1623]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[#5F6B7A] text-lg leading-relaxed mb-6">
                      {item.description}
                    </p>

                    <div className="space-y-2">
                      {item.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-center justify-center md:justify-start"
                        >
                          <svg
                            className="w-5 h-5 text-emerald-600 mr-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="text-sm text-[#5F6B7A]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {index < process.length - 1 && (
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-full mt-8">
                  <div className="w-px h-16 bg-gradient-to-b from-emerald-300 to-transparent"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
