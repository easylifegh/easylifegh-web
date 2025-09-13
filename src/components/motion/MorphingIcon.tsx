"use client"

import { motion, useInView } from "framer-motion"
import { useRef, ReactNode } from "react"

interface MorphingIconProps {
  children: ReactNode
  hoverScale?: number
  delay?: number
  className?: string
  glowColor?: string
}

export default function MorphingIcon({
  children,
  hoverScale = 1.2,
  delay = 0,
  className = "",
  glowColor = "#10b981",
}: MorphingIconProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      className={`relative ${className}`}
      initial={{
        scale: 0,
        rotate: -180,
        opacity: 0,
      }}
      animate={
        isInView
          ? {
              scale: 1,
              rotate: 0,
              opacity: 1,
            }
          : {
              scale: 0,
              rotate: -180,
              opacity: 0,
            }
      }
      transition={{
        duration: 0.8,
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      whileHover={{
        scale: hoverScale,
        rotate: 5,
        transition: {
          duration: 0.3,
          type: "spring",
          stiffness: 300,
          damping: 10,
        },
      }}
      whileTap={{
        scale: 0.95,
        rotate: -5,
      }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full opacity-0"
        style={{
          background: `radial-gradient(circle, ${glowColor}20 0%, transparent 70%)`,
        }}
        whileHover={{
          opacity: 1,
          scale: 1.5,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Pulse rings */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 opacity-0"
        style={{ borderColor: glowColor }}
        animate={
          isInView
            ? {
                scale: [1, 1.5, 2],
                opacity: [0.8, 0.3, 0],
              }
            : {}
        }
        transition={{
          duration: 2,
          delay: delay + 0.5,
          repeat: Infinity,
          repeatDelay: 3,
        }}
      />

      {/* Icon container */}
      <motion.div
        className="relative z-10"
        whileHover={{
          filter: "drop-shadow(0 0 8px rgba(16, 185, 129, 0.4))",
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
