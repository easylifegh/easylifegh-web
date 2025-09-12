"use client"

import { motion, useInView } from "framer-motion"
import { useRef, ReactNode } from "react"

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  delay?: number
  staggerChildren?: number
}

export default function StaggerContainer({
  children,
  className = "",
  delay = 0,
  staggerChildren = 0.1,
}: StaggerContainerProps) {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  const childTransition = {
    duration: 0.5,
    ease: [0.25, 0.4, 0.25, 1] as const,
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div
            key={index}
            variants={childVariants}
            transition={childTransition}
          >
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={childVariants} transition={childTransition}>
          {children}
        </motion.div>
      )}
    </motion.div>
  )
}
