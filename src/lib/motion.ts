export const easing = {
  smooth: [0.25, 0.4, 0.25, 1],
  spring: [0.6, -0.05, 0.01, 0.99],
  bounce: [0.68, -0.6, 0.32, 1.6],
} as const

export const durations = {
  fast: 0.3,
  medium: 0.6,
  slow: 1.0,
} as const

export const transitions = {
  default: {
    duration: durations.medium,
    ease: easing.smooth,
  },
  spring: {
    type: "spring",
    stiffness: 100,
    damping: 15,
  },
  bounce: {
    duration: durations.medium,
    ease: easing.bounce,
  },
} as const

export const variants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: transitions.default,
    },
  },
  fadeInScale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: transitions.spring,
    },
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: transitions.default,
    },
  },
  slideInRight: {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: transitions.default,
    },
  },
  stagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  },
} as const

export const hoverEffects = {
  lift: {
    y: -5,
    transition: transitions.spring,
  },
  scale: {
    scale: 1.05,
    transition: transitions.spring,
  },
  glow: {
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    transition: transitions.default,
  },
} as const
