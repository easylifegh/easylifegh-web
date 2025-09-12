"use client"

import { motion } from "framer-motion"

interface AnimatedBackgroundProps {
  className?: string
  variant?: "gradient" | "particles" | "waves"
}

export default function AnimatedBackground({
  className = "",
  variant = "gradient",
}: AnimatedBackgroundProps) {
  if (variant === "gradient") {
    return (
      <div className={`absolute inset-0 ${className}`}>
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 200%",
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 via-transparent to-green-400/20"
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    )
  }

  if (variant === "particles") {
    return (
      <div className={`absolute inset-0 overflow-hidden ${className}`}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
            }}
            animate={{
              x: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
              y: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    )
  }

  return (
    <div className={`absolute inset-0 ${className}`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent"
        animate={{
          x: ["-100%", "100%", "-100%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  )
}
