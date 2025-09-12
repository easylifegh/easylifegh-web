"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef, ReactNode } from "react"
import { useReducedMotion } from "@/hooks/useReducedMotion"

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down"
}

export default function ParallaxSection({
  children,
  className = "",
  speed = 0.5,
  direction = "up",
}: ParallaxSectionProps) {
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion
      ? [0, 0]
      : direction === "up"
        ? [0, -50 * speed]
        : [0, 50 * speed]
  )

  return (
    <motion.div
      ref={ref}
      style={{ y: prefersReducedMotion ? 0 : y }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
