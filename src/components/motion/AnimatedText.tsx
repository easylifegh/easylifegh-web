"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface AnimatedTextProps {
  children: string
  className?: string
  delay?: number
  duration?: number
  staggerChildren?: number
  animationType?: "fade" | "slide" | "scale"
}

export default function AnimatedText({
  children,
  className = "",
  delay = 0,
  duration = 0.5,
  staggerChildren = 0.05,
  animationType = "fade",
}: AnimatedTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay,
        staggerChildren,
        delayChildren: delay,
      },
    },
  }

  const childVariants = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration } },
    },
    slide: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration } },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration } },
    },
  }

  const words = children.split(" ")

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={childVariants[animationType]}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
