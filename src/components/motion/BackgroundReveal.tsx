"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef, ReactNode } from "react"
import Image from "next/image"

interface BackgroundRevealProps {
  children: ReactNode
  imageSrc: string
  imageAlt: string
  overlay?: boolean
  className?: string
  parallaxSpeed?: number
}

export default function BackgroundReveal({
  children,
  imageSrc,
  imageAlt,
  overlay = true,
  className = "",
  parallaxSpeed = 0.5,
}: BackgroundRevealProps) {
  const containerRef = useRef(null)
  const imageRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-200px" })

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [100 * parallaxSpeed, -100 * parallaxSpeed]
  )
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      {/* Background Image with Parallax */}
      <motion.div
        ref={imageRef}
        className="absolute inset-0"
        style={{ y, scale }}
        initial={{ scale: 1.2, opacity: 0 }}
        animate={
          isInView ? { scale: 1.1, opacity: 1 } : { scale: 1.2, opacity: 0 }
        }
        transition={{ duration: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          quality={90}
          priority
        />
      </motion.div>

      {/* Animated Overlay */}
      {overlay && (
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/20 to-transparent" />

          {/* Animated shapes */}
          <motion.div
            className="absolute top-20 right-20 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl"
            animate={
              isInView
                ? {
                    x: [0, 30, 0],
                    y: [0, -20, 0],
                    scale: [1, 1.2, 1],
                  }
                : {}
            }
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute bottom-32 left-16 w-24 h-24 bg-green-400/15 rounded-full blur-xl"
            animate={
              isInView
                ? {
                    x: [0, -20, 0],
                    y: [0, 15, 0],
                    scale: [1, 0.8, 1],
                  }
                : {}
            }
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </motion.div>
      )}

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Scroll-based overlay fade */}
      <motion.div
        className="absolute inset-0 bg-white pointer-events-none"
        style={{ opacity }}
      />
    </div>
  )
}
