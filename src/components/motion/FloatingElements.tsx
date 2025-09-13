"use client"

import { motion } from "framer-motion"
import { useReducedMotion } from "@/hooks/useReducedMotion"
import { useState, useEffect } from "react"

interface FloatingElementsProps {
  className?: string
  density?: number
}

export default function FloatingElements({
  className = "",
  density = 5,
}: FloatingElementsProps) {
  const prefersReducedMotion = useReducedMotion()
  const [elements, setElements] = useState<
    Array<{
      id: number
      size: number
      initialX: number
      initialY: number
      duration: number
      delay: number
      opacity: number
    }>
  >([])

  useEffect(() => {
    // Generate elements on client side only to prevent SSR mismatch
    const generatedElements = Array.from({ length: density }, (_, i) => ({
      id: i,
      size: Math.random() * 100 + 50,
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.1 + 0.05,
    }))
    setElements(generatedElements)
  }, [density])

  if (prefersReducedMotion || elements.length === 0) {
    return null
  }

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {elements.map(element => (
        <motion.div
          key={element.id}
          className="absolute rounded-full bg-gradient-to-br from-yellow-400/20 to-green-400/20 blur-xl"
          style={{
            width: element.size,
            height: element.size,
            left: `${element.initialX}%`,
            top: `${element.initialY}%`,
            opacity: element.opacity,
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -30, 50, 0],
            scale: [1, 1.2, 0.8, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
