"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import { useRef, ReactNode } from "react"
import { useReducedMotion } from "@/hooks/useReducedMotion"

interface ScrollRevealImageProps {
  children: ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right"
  offset?: number
  scale?: boolean
}

export default function ScrollRevealImage({
  children,
  className = "",
  direction = "up",
  offset = 100,
  scale = true,
}: ScrollRevealImageProps) {
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }

  const y = useSpring(
    useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      prefersReducedMotion
        ? [0, 0, 0]
        : direction === "up"
          ? [offset, 0, -offset / 2]
          : direction === "down"
            ? [-offset, 0, offset / 2]
            : [0, 0, 0]
    ),
    springConfig
  )

  const x = useSpring(
    useTransform(
      scrollYProgress,
      [0, 0.5, 1],
      prefersReducedMotion
        ? [0, 0, 0]
        : direction === "left"
          ? [offset, 0, -offset / 2]
          : direction === "right"
            ? [-offset, 0, offset / 2]
            : [0, 0, 0]
    ),
    springConfig
  )

  const scaleValue = useSpring(
    useTransform(
      scrollYProgress,
      [0, 0.3, 0.7, 1],
      prefersReducedMotion || !scale ? [1, 1, 1, 1] : [1.1, 1, 1, 1.05]
    ),
    springConfig
  )

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.3, 1, 1, 0.8]
  )

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      style={{
        y: direction === "up" || direction === "down" ? y : 0,
        x: direction === "left" || direction === "right" ? x : 0,
        scale: scaleValue,
        opacity,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
