"use client"

import { motion } from "framer-motion"

interface SectionDividerProps {
  variant?: "wave" | "angle" | "curve"
  className?: string
  color?: string
}

export default function SectionDivider({
  variant = "wave",
  className = "",
  color = "#f9fafb",
}: SectionDividerProps) {
  if (variant === "wave") {
    return (
      <div className={`relative h-16 overflow-hidden ${className}`}>
        <motion.svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <path
            d="M0,120 C150,0 300,120 600,60 C900,0 1050,120 1200,60 L1200,120 Z"
            fill={color}
            fillOpacity="0.8"
          />
          <path
            d="M0,120 C150,20 300,100 600,40 C900,20 1050,100 1200,40 L1200,120 Z"
            fill={color}
            fillOpacity="1"
          />
        </motion.svg>
      </div>
    )
  }

  if (variant === "angle") {
    return (
      <div className={`relative h-16 overflow-hidden ${className}`}>
        <motion.div
          className="absolute inset-0 bg-current transform origin-bottom-left"
          style={{ backgroundColor: color }}
          initial={{ rotate: 0, scaleY: 0 }}
          whileInView={{ rotate: 2, scaleY: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    )
  }

  return (
    <div className={`relative h-16 overflow-hidden ${className}`}>
      <motion.svg
        className="absolute bottom-0 w-full h-full"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <path d="M0,120 Q600,0 1200,120 L1200,120 Z" fill={color} />
      </motion.svg>
    </div>
  )
}
