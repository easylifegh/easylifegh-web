"use client"

import { motion, useInView } from "framer-motion"
import { useRef, ReactNode } from "react"
import { useReducedMotion } from "@/hooks/useReducedMotion"

interface RevealOnScrollProps {
  children: ReactNode
  direction?: "up" | "down" | "left" | "right"
  delay?: number
  duration?: number
  distance?: number
  className?: string
}

const directionVariants = {
  up: { y: 50, opacity: 0 },
  down: { y: -50, opacity: 0 },
  left: { x: 50, opacity: 0 },
  right: { x: -50, opacity: 0 },
}

export default function RevealOnScroll({
  children,
  direction = "up",
  delay = 0,
  duration = 0.6,
  distance = 50,
  className = "",
}: RevealOnScrollProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const prefersReducedMotion = useReducedMotion()

  const customVariants = {
    hidden: prefersReducedMotion
      ? { opacity: 0 }
      : {
          ...directionVariants[direction],
          [direction === "up" || direction === "down" ? "y" : "x"]:
            direction === "up" || direction === "left" ? distance : -distance,
        },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={customVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration: prefersReducedMotion ? 0.01 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
