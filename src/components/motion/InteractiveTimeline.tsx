"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState, ReactNode } from "react"

interface TimelineStep {
  id: string
  icon: ReactNode
  title: string
  description?: string
  color: string
}

interface InteractiveTimelineProps {
  steps: TimelineStep[]
  className?: string
  orientation?: "vertical" | "horizontal"
}

export default function InteractiveTimeline({
  steps,
  className = "",
  orientation = "vertical",
}: InteractiveTimelineProps) {
  const [activeStep, setActiveStep] = useState<string | null>(null)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  const handleStepHover = (stepId: string) => {
    setActiveStep(stepId)
  }

  const handleStepLeave = () => {
    setActiveStep(null)
  }

  if (orientation === "horizontal") {
    return (
      <div ref={containerRef} className={`relative ${className}`}>
        {/* Timeline line */}
        <motion.div
          className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 via-green-400 to-yellow-400 rounded-full"
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 2, ease: [0.25, 0.4, 0.25, 1] }}
        />

        <div className="flex justify-between items-center relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="flex flex-col items-center cursor-pointer group"
              onMouseEnter={() => handleStepHover(step.id)}
              onMouseLeave={handleStepLeave}
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
            >
              {/* Step circle */}
              <motion.div
                className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg mb-4 relative`}
                style={{ backgroundColor: step.color }}
                whileHover={{ scale: 1.2, y: -5 }}
                animate={activeStep === step.id ? { scale: 1.1 } : { scale: 1 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              >
                {/* Ripple effect */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ backgroundColor: step.color }}
                  animate={
                    activeStep === step.id
                      ? {
                          scale: [1, 1.5, 2],
                          opacity: [0.5, 0.2, 0],
                        }
                      : {}
                  }
                  transition={{
                    duration: 1.5,
                    repeat: activeStep === step.id ? Infinity : 0,
                  }}
                />

                <div className="text-white z-10 relative">{step.icon}</div>
              </motion.div>

              {/* Step label */}
              <motion.div
                className="text-center max-w-32"
                animate={activeStep === step.id ? { y: -5 } : { y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">
                  {step.title}
                </h4>
                {step.description && (
                  <motion.p
                    className="text-xs text-gray-600"
                    initial={{ opacity: 0, height: 0 }}
                    animate={
                      activeStep === step.id
                        ? { opacity: 1, height: "auto" }
                        : { opacity: 0, height: 0 }
                    }
                    transition={{ duration: 0.3 }}
                  >
                    {step.description}
                  </motion.p>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  // Vertical timeline
  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="space-y-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className="flex items-start gap-6 cursor-pointer group"
            onMouseEnter={() => handleStepHover(step.id)}
            onMouseLeave={handleStepLeave}
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            whileHover={{ x: 10 }}
          >
            {/* Timeline line and circle */}
            <div className="flex flex-col items-center relative">
              <motion.div
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-xl relative z-10`}
                style={{ backgroundColor: step.color }}
                whileHover={{ scale: 1.15, rotate: 5 }}
                animate={activeStep === step.id ? { scale: 1.1 } : { scale: 1 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 300 }}
              >
                {/* Pulse rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2"
                  style={{ borderColor: step.color }}
                  animate={
                    activeStep === step.id
                      ? {
                          scale: [1, 1.8, 2.5],
                          opacity: [0.8, 0.3, 0],
                        }
                      : {}
                  }
                  transition={{
                    duration: 2,
                    repeat: activeStep === step.id ? Infinity : 0,
                  }}
                />

                <div className="text-white relative z-10">{step.icon}</div>
              </motion.div>

              {/* Connecting line */}
              {index < steps.length - 1 && (
                <motion.div
                  className="w-0.5 h-16 bg-gradient-to-b from-gray-300 to-transparent mt-2"
                  initial={{ scaleY: 0 }}
                  animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.3 + 0.8 }}
                />
              )}
            </div>

            {/* Content */}
            <motion.div
              className="flex-1 min-h-14 flex flex-col justify-center"
              animate={activeStep === step.id ? { x: 5 } : { x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="font-bold text-lg text-gray-900 mb-1">
                {step.title}
              </h4>
              {step.description && (
                <motion.p
                  className="text-gray-600 text-sm"
                  initial={{ opacity: 0.8 }}
                  animate={
                    activeStep === step.id
                      ? { opacity: 1, y: -2 }
                      : { opacity: 0.8, y: 0 }
                  }
                  transition={{ duration: 0.3 }}
                >
                  {step.description}
                </motion.p>
              )}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
