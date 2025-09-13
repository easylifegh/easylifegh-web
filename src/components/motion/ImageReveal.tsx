"use client"

import { motion, useScroll, useTransform, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

interface ImageRevealProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  revealDirection?: "left" | "right" | "up" | "down"
  maskShape?: "rectangle" | "circle" | "wave"
}

export default function ImageReveal({
  src,
  alt,
  width,
  height,
  className = "",
  revealDirection = "up",
  maskShape = "rectangle",
}: ImageRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [50, -50])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1])

  const getMaskClipPath = () => {
    if (!isInView) {
      switch (revealDirection) {
        case "left":
          return "inset(0 100% 0 0)"
        case "right":
          return "inset(0 0 0 100%)"
        case "up":
          return "inset(100% 0 0 0)"
        case "down":
          return "inset(0 0 100% 0)"
        default:
          return "inset(100% 0 0 0)"
      }
    }

    switch (maskShape) {
      case "circle":
        return "circle(50% at 50% 50%)"
      case "wave":
        return "polygon(0 0, 100% 0, 100% 85%, 0 100%)"
      default:
        return "inset(0 0 0 0)"
    }
  }

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{ y }}
    >
      {/* Image with reveal animation */}
      <motion.div
        className="relative"
        initial={{ scale: 1.2 }}
        animate={isInView ? { scale: 1 } : { scale: 1.2 }}
        transition={{ duration: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
        style={{
          clipPath: getMaskClipPath(),
          scale,
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-full object-cover"
          quality={90}
        />

        {/* Overlay effects */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-transparent to-green-400/20"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        />
      </motion.div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-4 right-4 w-16 h-16 bg-yellow-400/30 rounded-full blur-sm"
        animate={
          isInView
            ? {
                x: [0, 20, 0],
                y: [0, -10, 0],
                scale: [1, 1.2, 1],
              }
            : {}
        }
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-8 left-8 w-12 h-12 bg-green-400/20 rounded-full blur-sm"
        animate={
          isInView
            ? {
                x: [0, -15, 0],
                y: [0, 10, 0],
                scale: [1, 0.8, 1],
              }
            : {}
        }
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
        initial={{ x: "-100%" }}
        animate={isInView ? { x: "200%" } : { x: "-100%" }}
        transition={{
          duration: 1.5,
          delay: 0.8,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  )
}
