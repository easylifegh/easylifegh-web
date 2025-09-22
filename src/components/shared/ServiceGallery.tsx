"use client"

import React, { useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

export interface ServiceItem {
  id: string
  title: string
  duration?: string
  kicker?: string
  excerpt?: string
  description: string
  features?: string[]
  outcomes?: string[]
  fields?: string[]
  specializations?: string[]
  image?: string
  ideal?: string
  requirements?: string
  outcome?: string
}

interface ServiceGalleryProps {
  items: ServiceItem[]
  title: string
  subtitle: string
  imageBasePath?: string
  color?: "emerald" | "blue" | "purple"
  layout?: "side-by-side" | "card"
}

const getCustomSVG = (itemId: string, color: string) => {
  const colorMap = {
    emerald: "#10b981",
    blue: "#3b82f6",
    purple: "#8b5cf6",
  }
  const primaryColor = colorMap[color as keyof typeof colorMap] || "#10b981"
  const secondaryColor = `${primaryColor}40` // 25% opacity

  switch (itemId) {
    case "esl":
      return (
        <svg
          width="300"
          height="240"
          viewBox="0 0 300 240"
          className="w-full h-full p-8"
        >
          <defs>
            <linearGradient id="eslGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={primaryColor} />
              <stop offset="100%" stopColor={secondaryColor} />
            </linearGradient>
          </defs>
          {/* Speech bubbles for conversation */}
          <circle cx="80" cy="80" r="35" fill="url(#eslGrad)" opacity="0.8" />
          <path
            d="M65 100 L85 120 L105 100"
            fill="url(#eslGrad)"
            opacity="0.8"
          />
          <circle cx="220" cy="60" r="30" fill={primaryColor} opacity="0.6" />
          <path
            d="M210 85 L225 100 L240 85"
            fill={primaryColor}
            opacity="0.6"
          />
          {/* Book/learning element */}
          <rect
            x="120"
            y="140"
            width="60"
            height="8"
            rx="4"
            fill={primaryColor}
          />
          <rect
            x="120"
            y="155"
            width="45"
            height="6"
            rx="3"
            fill={primaryColor}
            opacity="0.7"
          />
          <rect
            x="120"
            y="167"
            width="50"
            height="6"
            rx="3"
            fill={primaryColor}
            opacity="0.5"
          />
          {/* Globe/international element */}
          <circle
            cx="200"
            cy="160"
            r="25"
            fill="none"
            stroke={primaryColor}
            strokeWidth="3"
          />
          <path
            d="M180 160 Q200 140 220 160 Q200 180 180 160"
            fill="none"
            stroke={primaryColor}
            strokeWidth="2"
          />
          <path d="M200 135 L200 185" stroke={primaryColor} strokeWidth="2" />
        </svg>
      )

    case "business-english":
      return (
        <svg
          width="300"
          height="240"
          viewBox="0 0 300 240"
          className="w-full h-full p-8"
        >
          <defs>
            <linearGradient
              id="businessGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor={primaryColor} />
              <stop offset="100%" stopColor={secondaryColor} />
            </linearGradient>
          </defs>
          {/* Briefcase */}
          <rect
            x="100"
            y="90"
            width="80"
            height="50"
            rx="8"
            fill="url(#businessGrad)"
          />
          <rect
            x="130"
            y="80"
            width="20"
            height="15"
            rx="3"
            fill={primaryColor}
          />
          <circle cx="120" cy="115" r="3" fill="white" />
          {/* Chart/presentation */}
          <rect
            x="60"
            y="160"
            width="8"
            height="30"
            fill={primaryColor}
            opacity="0.8"
          />
          <rect
            x="75"
            y="150"
            width="8"
            height="40"
            fill={primaryColor}
            opacity="0.6"
          />
          <rect
            x="90"
            y="140"
            width="8"
            height="50"
            fill={primaryColor}
            opacity="0.9"
          />
          {/* Communication elements */}
          <circle cx="220" cy="70" r="20" fill={primaryColor} opacity="0.3" />
          <rect x="210" y="75" width="20" height="2" fill={primaryColor} />
          <rect x="210" y="80" width="15" height="2" fill={primaryColor} />
          <rect x="210" y="85" width="18" height="2" fill={primaryColor} />
        </svg>
      )

    case "academic-english":
      return (
        <svg
          width="300"
          height="240"
          viewBox="0 0 300 240"
          className="w-full h-full p-8"
        >
          <defs>
            <linearGradient
              id="academicGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor={primaryColor} />
              <stop offset="100%" stopColor={secondaryColor} />
            </linearGradient>
          </defs>
          {/* Graduation cap */}
          <polygon points="150,50 120,70 180,70" fill="url(academicGrad)" />
          <rect x="147" y="45" width="6" height="15" fill={primaryColor} />
          <circle cx="153" cy="42" r="3" fill={primaryColor} />
          {/* Books stack */}
          <rect
            x="80"
            y="140"
            width="60"
            height="12"
            rx="2"
            fill={primaryColor}
            opacity="0.9"
          />
          <rect
            x="85"
            y="130"
            width="55"
            height="12"
            rx="2"
            fill={primaryColor}
            opacity="0.7"
          />
          <rect
            x="90"
            y="120"
            width="50"
            height="12"
            rx="2"
            fill={primaryColor}
            opacity="0.5"
          />
          {/* Research/magnifying glass */}
          <circle
            cx="200"
            cy="100"
            r="15"
            fill="none"
            stroke={primaryColor}
            strokeWidth="3"
          />
          <line
            x1="212"
            y1="112"
            x2="225"
            y2="125"
            stroke={primaryColor}
            strokeWidth="3"
          />
          {/* University building silhouette */}
          <rect
            x="180"
            y="160"
            width="8"
            height="25"
            fill={primaryColor}
            opacity="0.6"
          />
          <rect
            x="195"
            y="155"
            width="8"
            height="30"
            fill={primaryColor}
            opacity="0.8"
          />
          <rect
            x="210"
            y="160"
            width="8"
            height="25"
            fill={primaryColor}
            opacity="0.6"
          />
          <polygon
            points="180,160 195,145 210,160"
            fill={primaryColor}
            opacity="0.4"
          />
        </svg>
      )

    case "professional-english":
      return (
        <svg
          width="300"
          height="240"
          viewBox="0 0 300 240"
          className="w-full h-full p-8"
        >
          <defs>
            <linearGradient
              id="professionalGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor={primaryColor} />
              <stop offset="100%" stopColor={secondaryColor} />
            </linearGradient>
          </defs>
          {/* Professional figure */}
          <circle cx="150" cy="70" r="20" fill="url(#professionalGrad)" />
          <rect
            x="135"
            y="90"
            width="30"
            height="40"
            rx="5"
            fill={primaryColor}
            opacity="0.8"
          />
          {/* Tie */}
          <polygon points="150,95 145,120 155,120" fill={primaryColor} />
          {/* Industry symbols */}
          <rect
            x="80"
            y="50"
            width="25"
            height="25"
            rx="3"
            fill={primaryColor}
            opacity="0.4"
          />
          <circle cx="92" cy="62" r="8" fill="white" />
          <path
            d="M88 62 L92 66 L96 58"
            stroke={primaryColor}
            strokeWidth="2"
            fill="none"
          />
          {/* Technical elements */}
          <rect
            x="200"
            y="120"
            width="40"
            height="6"
            rx="3"
            fill={primaryColor}
            opacity="0.7"
          />
          <rect
            x="200"
            y="135"
            width="35"
            height="6"
            rx="3"
            fill={primaryColor}
            opacity="0.5"
          />
          <rect
            x="200"
            y="150"
            width="30"
            height="6"
            rx="3"
            fill={primaryColor}
            opacity="0.3"
          />
          {/* Growth arrow */}
          <line
            x1="70"
            y1="170"
            x2="120"
            y2="140"
            stroke={primaryColor}
            strokeWidth="3"
          />
          <polygon points="115,145 125,140 120,130" fill={primaryColor} />
        </svg>
      )

    case "ielts-prep":
      return (
        <svg
          width="300"
          height="240"
          viewBox="0 0 300 240"
          className="w-full h-full p-8"
        >
          <defs>
            <linearGradient id="ieltsGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={primaryColor} />
              <stop offset="100%" stopColor={secondaryColor} />
            </linearGradient>
          </defs>
          {/* Test paper */}
          <rect
            x="100"
            y="60"
            width="80"
            height="100"
            rx="8"
            fill="white"
            stroke={primaryColor}
            strokeWidth="2"
          />
          <rect
            x="110"
            y="80"
            width="60"
            height="4"
            fill={primaryColor}
            opacity="0.7"
          />
          <rect
            x="110"
            y="90"
            width="45"
            height="4"
            fill={primaryColor}
            opacity="0.5"
          />
          <rect
            x="110"
            y="100"
            width="55"
            height="4"
            fill={primaryColor}
            opacity="0.7"
          />
          {/* Checkmarks for success */}
          <circle cx="160" cy="120" r="8" fill={primaryColor} />
          <path
            d="M156 120 L159 123 L164 117"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
          {/* Score/rating stars */}
          <polygon
            points="70,40 73,50 83,50 75,57 78,67 70,60 62,67 65,57 57,50 67,50"
            fill="url(#ieltsGrad)"
          />
          <polygon
            points="210,45 213,55 223,55 215,62 218,72 210,65 202,72 205,62 197,55 207,55"
            fill={primaryColor}
            opacity="0.7"
          />
          {/* Speaking/listening elements */}
          <circle cx="80" cy="150" r="12" fill={primaryColor} opacity="0.5" />
          <polygon points="75,150 85,145 85,155" fill="white" />
          {/* Headphones for listening */}
          <path
            d="M200 120 Q210 115 220 120"
            stroke={primaryColor}
            strokeWidth="3"
            fill="none"
          />
          <circle cx="195" cy="125" r="6" fill={primaryColor} opacity="0.8" />
          <circle cx="225" cy="125" r="6" fill={primaryColor} opacity="0.8" />
        </svg>
      )

    case "communication-skills":
      return (
        <svg
          width="300"
          height="240"
          viewBox="0 0 300 240"
          className="w-full h-full p-8"
        >
          <defs>
            <linearGradient id="commGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={primaryColor} />
              <stop offset="100%" stopColor={secondaryColor} />
            </linearGradient>
          </defs>
          {/* Microphone */}
          <rect
            x="145"
            y="80"
            width="10"
            height="40"
            rx="5"
            fill="url(#commGrad)"
          />
          <circle cx="150" cy="65" r="12" fill={primaryColor} opacity="0.8" />
          <rect x="147" y="120" width="6" height="15" fill={primaryColor} />
          <rect
            x="140"
            y="135"
            width="20"
            height="8"
            rx="4"
            fill={primaryColor}
          />
          {/* Audience figures */}
          <circle cx="80" cy="120" r="8" fill={primaryColor} opacity="0.6" />
          <circle cx="100" cy="130" r="8" fill={primaryColor} opacity="0.6" />
          <circle cx="200" cy="125" r="8" fill={primaryColor} opacity="0.6" />
          <circle cx="220" cy="135" r="8" fill={primaryColor} opacity="0.6" />
          {/* Sound waves */}
          <path
            d="M170 80 Q190 80 190 100 Q190 120 170 120"
            stroke={primaryColor}
            strokeWidth="2"
            fill="none"
            opacity="0.5"
          />
          <path
            d="M175 85 Q185 85 185 100 Q185 115 175 115"
            stroke={primaryColor}
            strokeWidth="2"
            fill="none"
            opacity="0.7"
          />
          {/* Presentation screen */}
          <rect
            x="60"
            y="40"
            width="50"
            height="35"
            rx="3"
            fill="white"
            stroke={primaryColor}
            strokeWidth="2"
          />
          <rect
            x="65"
            y="50"
            width="20"
            height="3"
            fill={primaryColor}
            opacity="0.7"
          />
          <rect
            x="65"
            y="58"
            width="15"
            height="3"
            fill={primaryColor}
            opacity="0.5"
          />
          <rect
            x="65"
            y="66"
            width="18"
            height="3"
            fill={primaryColor}
            opacity="0.7"
          />
        </svg>
      )

    case "intensive-english":
      return (
        <svg
          width="300"
          height="240"
          viewBox="0 0 300 240"
          className="w-full h-full p-8"
        >
          <defs>
            <linearGradient
              id="intensiveGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor={primaryColor} />
              <stop offset="100%" stopColor={secondaryColor} />
            </linearGradient>
          </defs>
          {/* Clock showing intensity/speed */}
          <circle
            cx="150"
            cy="100"
            r="35"
            fill="white"
            stroke={primaryColor}
            strokeWidth="3"
          />
          <circle cx="150" cy="100" r="3" fill={primaryColor} />
          <line
            x1="150"
            y1="100"
            x2="150"
            y2="75"
            stroke={primaryColor}
            strokeWidth="3"
          />
          <line
            x1="150"
            y1="100"
            x2="170"
            y2="90"
            stroke={primaryColor}
            strokeWidth="2"
          />
          {/* Speed lines */}
          <line
            x1="200"
            y1="60"
            x2="220"
            y2="60"
            stroke={primaryColor}
            strokeWidth="3"
            opacity="0.7"
          />
          <line
            x1="205"
            y1="75"
            x2="225"
            y2="75"
            stroke={primaryColor}
            strokeWidth="3"
            opacity="0.5"
          />
          <line
            x1="200"
            y1="90"
            x2="220"
            y2="90"
            stroke={primaryColor}
            strokeWidth="3"
            opacity="0.7"
          />
          {/* Progress bars showing rapid improvement */}
          <rect
            x="80"
            y="160"
            width="40"
            height="8"
            rx="4"
            fill={primaryColor}
            opacity="0.3"
          />
          <rect
            x="80"
            y="160"
            width="30"
            height="8"
            rx="4"
            fill="url(#intensiveGrad)"
          />
          <rect
            x="130"
            y="175"
            width="40"
            height="8"
            rx="4"
            fill={primaryColor}
            opacity="0.3"
          />
          <rect
            x="130"
            y="175"
            width="35"
            height="8"
            rx="4"
            fill="url(#intensiveGrad)"
          />
          {/* Lightning bolt for speed */}
          <polygon
            points="70,80 65,110 75,105 70,130 85,95 75,100"
            fill="url(#intensiveGrad)"
          />
        </svg>
      )

    case "conversation-classes":
      return (
        <svg
          width="300"
          height="240"
          viewBox="0 0 300 240"
          className="w-full h-full p-8"
        >
          <defs>
            <linearGradient
              id="conversationGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor={primaryColor} />
              <stop offset="100%" stopColor={secondaryColor} />
            </linearGradient>
          </defs>
          {/* Group of people talking */}
          <circle cx="80" cy="80" r="15" fill="url(#conversationGrad)" />
          <circle cx="150" cy="75" r="15" fill={primaryColor} opacity="0.8" />
          <circle cx="220" cy="80" r="15" fill={primaryColor} opacity="0.6" />
          {/* Speech bubbles connecting them */}
          <ellipse
            cx="110"
            cy="60"
            rx="20"
            ry="12"
            fill="white"
            stroke={primaryColor}
            strokeWidth="2"
          />
          <path
            d="M95 70 L105 75 L100 80"
            fill="white"
            stroke={primaryColor}
            strokeWidth="1"
          />
          <ellipse
            cx="185"
            cy="55"
            rx="18"
            ry="10"
            fill="white"
            stroke={primaryColor}
            strokeWidth="2"
          />
          <path
            d="M175 65 L180 70 L170 75"
            fill="white"
            stroke={primaryColor}
            strokeWidth="1"
          />
          {/* Coffee/casual setting elements */}
          <ellipse
            cx="150"
            cy="140"
            rx="40"
            ry="8"
            fill={primaryColor}
            opacity="0.3"
          />
          <rect
            x="130"
            y="125"
            width="8"
            height="15"
            rx="2"
            fill={primaryColor}
            opacity="0.7"
          />
          <rect
            x="162"
            y="125"
            width="8"
            height="15"
            rx="2"
            fill={primaryColor}
            opacity="0.7"
          />
          {/* Friendship/connection lines */}
          <path
            d="M80 95 Q115 110 150 95"
            stroke={primaryColor}
            strokeWidth="2"
            fill="none"
            opacity="0.5"
          />
          <path
            d="M150 95 Q185 110 220 95"
            stroke={primaryColor}
            strokeWidth="2"
            fill="none"
            opacity="0.5"
          />
        </svg>
      )

    // University Programs
    case "bachelor":
      return (
        <svg
          width="300"
          height="240"
          viewBox="0 0 300 240"
          className="w-full h-full p-8"
        >
          <defs>
            <linearGradient
              id="bachelorGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor={primaryColor} />
              <stop offset="100%" stopColor={secondaryColor} />
            </linearGradient>
          </defs>
          {/* University building */}
          <rect
            x="100"
            y="120"
            width="100"
            height="60"
            fill="url(#bachelorGrad)"
          />
          <polygon points="90,120 150,80 210,120" fill={primaryColor} />
          {/* Columns */}
          <rect
            x="110"
            y="130"
            width="8"
            height="50"
            fill="white"
            opacity="0.8"
          />
          <rect
            x="130"
            y="130"
            width="8"
            height="50"
            fill="white"
            opacity="0.8"
          />
          <rect
            x="150"
            y="130"
            width="8"
            height="50"
            fill="white"
            opacity="0.8"
          />
          <rect
            x="170"
            y="130"
            width="8"
            height="50"
            fill="white"
            opacity="0.8"
          />
          <rect
            x="190"
            y="130"
            width="8"
            height="50"
            fill="white"
            opacity="0.8"
          />
          {/* Student figures */}
          <circle cx="70" cy="160" r="8" fill={primaryColor} opacity="0.7" />
          <circle cx="230" cy="165" r="8" fill={primaryColor} opacity="0.7" />
          {/* Books/knowledge */}
          <rect
            x="60"
            y="50"
            width="30"
            height="4"
            fill={primaryColor}
            opacity="0.8"
          />
          <rect
            x="65"
            y="40"
            width="25"
            height="4"
            fill={primaryColor}
            opacity="0.6"
          />
          <rect
            x="70"
            y="30"
            width="20"
            height="4"
            fill={primaryColor}
            opacity="0.4"
          />
        </svg>
      )

    case "master":
      return (
        <svg
          width="300"
          height="240"
          viewBox="0 0 300 240"
          className="w-full h-full p-8"
        >
          <defs>
            <linearGradient id="masterGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={primaryColor} />
              <stop offset="100%" stopColor={secondaryColor} />
            </linearGradient>
          </defs>
          {/* Advanced graduation cap */}
          <polygon points="150,60 110,85 190,85" fill="url(#masterGrad)" />
          <rect x="147" y="50" width="6" height="20" fill={primaryColor} />
          <circle cx="153" cy="45" r="4" fill={primaryColor} />
          {/* Thesis/research papers */}
          <rect
            x="80"
            y="110"
            width="50"
            height="60"
            rx="4"
            fill="white"
            stroke={primaryColor}
            strokeWidth="2"
          />
          <rect
            x="90"
            y="125"
            width="30"
            height="3"
            fill={primaryColor}
            opacity="0.7"
          />
          <rect
            x="90"
            y="135"
            width="25"
            height="3"
            fill={primaryColor}
            opacity="0.5"
          />
          <rect
            x="90"
            y="145"
            width="28"
            height="3"
            fill={primaryColor}
            opacity="0.7"
          />
          {/* Research magnifying glass */}
          <circle
            cx="200"
            cy="120"
            r="20"
            fill="none"
            stroke={primaryColor}
            strokeWidth="3"
          />
          <line
            x1="216"
            y1="136"
            x2="235"
            y2="155"
            stroke={primaryColor}
            strokeWidth="3"
          />
          {/* Excellence star */}
          <polygon
            points="220,70 223,80 233,80 225,87 228,97 220,90 212,97 215,87 207,80 217,80"
            fill="url(#masterGrad)"
          />
        </svg>
      )

    case "phd":
      return (
        <svg
          width="300"
          height="240"
          viewBox="0 0 300 240"
          className="w-full h-full p-8"
        >
          <defs>
            <linearGradient id="phdGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={primaryColor} />
              <stop offset="100%" stopColor={secondaryColor} />
            </linearGradient>
          </defs>
          {/* PhD cap with tassel */}
          <polygon points="150,50 100,80 200,80" fill="url(#phdGrad)" />
          <rect x="147" y="40" width="6" height="25" fill={primaryColor} />
          <circle cx="158" cy="35" r="5" fill={primaryColor} />
          <path
            d="M158 35 Q175 45 165 60"
            stroke={primaryColor}
            strokeWidth="2"
            fill="none"
          />
          {/* Research laboratory */}
          <rect
            x="70"
            y="120"
            width="80"
            height="50"
            rx="8"
            fill="white"
            stroke={primaryColor}
            strokeWidth="2"
          />
          {/* Beakers/test tubes */}
          <rect
            x="85"
            y="140"
            width="6"
            height="20"
            rx="3"
            fill={primaryColor}
            opacity="0.7"
          />
          <rect
            x="95"
            y="135"
            width="6"
            height="25"
            rx="3"
            fill={primaryColor}
            opacity="0.8"
          />
          <rect
            x="105"
            y="145"
            width="6"
            height="15"
            rx="3"
            fill={primaryColor}
            opacity="0.6"
          />
          <rect
            x="115"
            y="130"
            width="6"
            height="30"
            rx="3"
            fill={primaryColor}
            opacity="0.9"
          />
          {/* Innovation lightbulb */}
          <circle
            cx="200"
            cy="130"
            r="15"
            fill="none"
            stroke={primaryColor}
            strokeWidth="3"
          />
          <path d="M190 135 L210 135" stroke={primaryColor} strokeWidth="2" />
          <path d="M190 140 L210 140" stroke={primaryColor} strokeWidth="2" />
          <rect
            x="195"
            y="145"
            width="10"
            height="8"
            rx="2"
            fill={primaryColor}
          />
          {/* DNA helix for research */}
          <path
            d="M230 100 Q240 110 230 120 Q240 130 230 140"
            stroke={primaryColor}
            strokeWidth="2"
            fill="none"
          />
          <path
            d="M240 100 Q230 110 240 120 Q230 130 240 140"
            stroke={primaryColor}
            strokeWidth="2"
            fill="none"
          />
        </svg>
      )

    case "professional":
      return (
        <svg
          width="300"
          height="240"
          viewBox="0 0 300 240"
          className="w-full h-full p-8"
        >
          <defs>
            <linearGradient id="profGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={primaryColor} />
              <stop offset="100%" stopColor={secondaryColor} />
            </linearGradient>
          </defs>
          {/* Executive briefcase */}
          <rect
            x="120"
            y="100"
            width="60"
            height="40"
            rx="6"
            fill="url(#profGrad)"
          />
          <rect
            x="145"
            y="90"
            width="15"
            height="12"
            rx="2"
            fill={primaryColor}
          />
          <circle cx="140" cy="120" r="3" fill="white" />
          <circle cx="160" cy="120" r="3" fill="white" />
          {/* Leadership network */}
          <circle cx="80" cy="70" r="12" fill={primaryColor} opacity="0.6" />
          <circle cx="220" cy="80" r="12" fill={primaryColor} opacity="0.6" />
          <circle cx="150" cy="50" r="15" fill={primaryColor} opacity="0.8" />
          <line
            x1="92"
            y1="70"
            x2="135"
            y2="55"
            stroke={primaryColor}
            strokeWidth="2"
            opacity="0.5"
          />
          <line
            x1="165"
            y1="55"
            x2="208"
            y2="75"
            stroke={primaryColor}
            strokeWidth="2"
            opacity="0.5"
          />
          {/* Certificate/achievement */}
          <rect
            x="60"
            y="150"
            width="40"
            height="30"
            rx="3"
            fill="white"
            stroke={primaryColor}
            strokeWidth="2"
          />
          <circle cx="80" cy="165" r="8" fill={primaryColor} opacity="0.3" />
          <path
            d="M76 165 L79 168 L84 162"
            stroke={primaryColor}
            strokeWidth="2"
            fill="none"
          />
          {/* Growth chart */}
          <line
            x1="180"
            y1="170"
            x2="240"
            y2="150"
            stroke={primaryColor}
            strokeWidth="3"
          />
          <polygon points="235,155 245,150 240,145" fill={primaryColor} />
        </svg>
      )

    // Technical Programs
    case "engineering-tech":
      return (
        <svg
          width="300"
          height="240"
          viewBox="0 0 300 240"
          className="w-full h-full p-8"
        >
          <defs>
            <linearGradient
              id="engineeringGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor={primaryColor} />
              <stop offset="100%" stopColor={secondaryColor} />
            </linearGradient>
          </defs>
          {/* Gear system */}
          <circle
            cx="120"
            cy="100"
            r="25"
            fill="none"
            stroke={primaryColor}
            strokeWidth="4"
          />
          <circle cx="120" cy="100" r="15" fill="url(#engineeringGrad)" />
          <circle
            cx="180"
            cy="120"
            r="20"
            fill="none"
            stroke={primaryColor}
            strokeWidth="3"
          />
          <circle cx="180" cy="120" r="12" fill={primaryColor} opacity="0.8" />
          {/* Tools */}
          <rect
            x="70"
            y="50"
            width="4"
            height="40"
            fill={primaryColor}
            transform="rotate(45 72 70)"
          />
          <rect
            x="80"
            y="60"
            width="4"
            height="30"
            fill={primaryColor}
            transform="rotate(-45 82 75)"
          />
          {/* Circuit elements */}
          <rect
            x="200"
            y="60"
            width="15"
            height="8"
            rx="2"
            fill={primaryColor}
            opacity="0.7"
          />
          <line
            x1="190"
            y1="64"
            x2="200"
            y2="64"
            stroke={primaryColor}
            strokeWidth="2"
          />
          <line
            x1="215"
            y1="64"
            x2="225"
            y2="64"
            stroke={primaryColor}
            strokeWidth="2"
          />
          {/* Blueprint grid */}
          <rect
            x="60"
            y="150"
            width="60"
            height="40"
            fill="none"
            stroke={primaryColor}
            strokeWidth="1"
            opacity="0.5"
          />
          <line
            x1="70"
            y1="150"
            x2="70"
            y2="190"
            stroke={primaryColor}
            strokeWidth="1"
            opacity="0.3"
          />
          <line
            x1="80"
            y1="150"
            x2="80"
            y2="190"
            stroke={primaryColor}
            strokeWidth="1"
            opacity="0.3"
          />
          <line
            x1="90"
            y1="150"
            x2="90"
            y2="190"
            stroke={primaryColor}
            strokeWidth="1"
            opacity="0.3"
          />
          <line
            x1="60"
            y1="160"
            x2="120"
            y2="160"
            stroke={primaryColor}
            strokeWidth="1"
            opacity="0.3"
          />
          <line
            x1="60"
            y1="170"
            x2="120"
            y2="170"
            stroke={primaryColor}
            strokeWidth="1"
            opacity="0.3"
          />
        </svg>
      )

    case "information-tech":
      return (
        <svg
          width="300"
          height="240"
          viewBox="0 0 300 240"
          className="w-full h-full p-8"
        >
          <defs>
            <linearGradient id="itGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={primaryColor} />
              <stop offset="100%" stopColor={secondaryColor} />
            </linearGradient>
          </defs>
          {/* Computer/laptop */}
          <rect
            x="100"
            y="110"
            width="80"
            height="50"
            rx="4"
            fill="url(#itGrad)"
          />
          <rect x="105" y="115" width="70" height="35" rx="2" fill="white" />
          <rect x="135" y="160" width="10" height="8" fill={primaryColor} />
          {/* Code brackets */}
          <path
            d="M60 80 L50 100 L60 120"
            stroke={primaryColor}
            strokeWidth="3"
            fill="none"
          />
          <path
            d="M240 80 L250 100 L240 120"
            stroke={primaryColor}
            strokeWidth="3"
            fill="none"
          />
          {/* Network nodes */}
          <circle cx="80" cy="50" r="6" fill={primaryColor} opacity="0.8" />
          <circle cx="220" cy="60" r="6" fill={primaryColor} opacity="0.8" />
          <circle cx="150" cy="30" r="8" fill={primaryColor} />
          <line
            x1="86"
            y1="50"
            x2="142"
            y2="35"
            stroke={primaryColor}
            strokeWidth="2"
            opacity="0.6"
          />
          <line
            x1="158"
            y1="35"
            x2="214"
            y2="55"
            stroke={primaryColor}
            strokeWidth="2"
            opacity="0.6"
          />
          {/* Binary code */}
          <text x="110" y="130" className="text-xs" fill="url(#itGrad)">
            101010
          </text>
          <text x="140" y="140" className="text-xs" fill="url(#itGrad)">
            110011
          </text>
          {/* Security shield */}
          <path
            d="M200 140 L210 130 L220 140 L220 160 L210 170 L200 160 Z"
            fill={primaryColor}
            opacity="0.6"
          />
          <path
            d="M205 145 L208 148 L215 140"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      )

    case "applied-sciences":
      return (
        <svg
          width="300"
          height="240"
          viewBox="0 0 300 240"
          className="w-full h-full p-8"
        >
          <defs>
            <linearGradient
              id="scienceGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor={primaryColor} />
              <stop offset="100%" stopColor={secondaryColor} />
            </linearGradient>
          </defs>
          {/* Laboratory flask */}
          <polygon
            points="130,60 130,90 110,140 170,140 150,90 150,60"
            fill="url(#scienceGrad)"
          />
          <rect x="135" y="50" width="10" height="15" fill={primaryColor} />
          <ellipse
            cx="140"
            cy="120"
            rx="15"
            ry="8"
            fill="white"
            opacity="0.8"
          />
          {/* Microscope */}
          <rect x="200" y="120" width="8" height="40" fill={primaryColor} />
          <circle cx="204" cy="110" r="12" fill={primaryColor} opacity="0.8" />
          <rect x="195" y="160" width="18" height="6" fill={primaryColor} />
          <circle cx="204" cy="100" r="4" fill="white" />
          {/* Molecule structure */}
          <circle cx="80" cy="80" r="6" fill={primaryColor} />
          <circle cx="100" cy="100" r="6" fill={primaryColor} opacity="0.7" />
          <circle cx="60" cy="100" r="6" fill={primaryColor} opacity="0.7" />
          <line
            x1="86"
            y1="80"
            x2="94"
            y2="100"
            stroke={primaryColor}
            strokeWidth="2"
          />
          <line
            x1="74"
            y1="80"
            x2="66"
            y2="100"
            stroke={primaryColor}
            strokeWidth="2"
          />
          {/* Data chart */}
          <rect
            x="60"
            y="140"
            width="6"
            height="25"
            fill={primaryColor}
            opacity="0.8"
          />
          <rect
            x="70"
            y="150"
            width="6"
            height="15"
            fill={primaryColor}
            opacity="0.6"
          />
          <rect
            x="80"
            y="135"
            width="6"
            height="30"
            fill={primaryColor}
            opacity="0.9"
          />
        </svg>
      )

    case "business-tech":
      return (
        <svg
          width="300"
          height="240"
          viewBox="0 0 300 240"
          className="w-full h-full p-8"
        >
          <defs>
            <linearGradient
              id="bizTechGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor={primaryColor} />
              <stop offset="100%" stopColor={secondaryColor} />
            </linearGradient>
          </defs>
          {/* Digital tablet/screen */}
          <rect
            x="110"
            y="80"
            width="60"
            height="80"
            rx="8"
            fill="url(#bizTechGrad)"
          />
          <rect x="115" y="90" width="50" height="60" rx="4" fill="white" />
          {/* Analytics chart on screen */}
          <rect
            x="125"
            y="110"
            width="6"
            height="15"
            fill={primaryColor}
            opacity="0.8"
          />
          <rect
            x="135"
            y="105"
            width="6"
            height="20"
            fill={primaryColor}
            opacity="0.6"
          />
          <rect
            x="145"
            y="100"
            width="6"
            height="25"
            fill={primaryColor}
            opacity="0.9"
          />
          {/* E-commerce icons */}
          <circle cx="70" cy="60" r="15" fill={primaryColor} opacity="0.6" />
          <rect x="65" y="70" width="10" height="8" rx="2" fill="white" />
          <circle cx="230" cy="70" r="12" fill={primaryColor} opacity="0.5" />
          <path d="M225 70 L235 65 L235 75 Z" fill="white" />
          {/* Digital connection */}
          <line
            x1="85"
            y1="65"
            x2="110"
            y2="90"
            stroke={primaryColor}
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity="0.7"
          />
          <line
            x1="170"
            y1="90"
            x2="218"
            y2="70"
            stroke={primaryColor}
            strokeWidth="2"
            strokeDasharray="5,5"
            opacity="0.7"
          />
          {/* Money/profit symbol */}
          <text
            x="200"
            y="140"
            className="text-2xl font-bold"
            fill={primaryColor}
            opacity="0.8"
          >
            $
          </text>
          {/* Growth arrow */}
          <line
            x1="50"
            y1="170"
            x2="90"
            y2="150"
            stroke={primaryColor}
            strokeWidth="3"
          />
          <polygon points="85,155 95,150 90,145" fill={primaryColor} />
        </svg>
      )

    case "trades-crafts":
      return (
        <svg
          width="300"
          height="240"
          viewBox="0 0 300 240"
          className="w-full h-full p-8"
        >
          <defs>
            <linearGradient id="tradesGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={primaryColor} />
              <stop offset="100%" stopColor={secondaryColor} />
            </linearGradient>
          </defs>
          {/* Hammer */}
          <rect
            x="80"
            y="70"
            width="40"
            height="8"
            rx="4"
            fill="url(#tradesGrad)"
          />
          <rect
            x="75"
            y="65"
            width="8"
            height="18"
            rx="2"
            fill={primaryColor}
          />
          {/* Wrench */}
          <rect
            x="160"
            y="60"
            width="6"
            height="40"
            rx="3"
            fill={primaryColor}
            transform="rotate(30 163 80)"
          />
          <circle
            cx="163"
            cy="55"
            r="8"
            fill="none"
            stroke={primaryColor}
            strokeWidth="3"
            transform="rotate(30 163 80)"
          />
          {/* Screwdriver */}
          <rect x="200" y="100" width="3" height="30" fill={primaryColor} />
          <rect
            x="195"
            y="95"
            width="13"
            height="8"
            rx="2"
            fill="url(#tradesGrad)"
          />
          {/* Hard hat */}
          <path
            d="M120 120 Q150 100 180 120 Q180 140 150 140 Q120 140 120 120"
            fill="url(#tradesGrad)"
          />
          <rect x="115" y="120" width="70" height="5" fill={primaryColor} />
          {/* Building/construction */}
          <rect
            x="60"
            y="150"
            width="20"
            height="30"
            fill={primaryColor}
            opacity="0.7"
          />
          <rect
            x="90"
            y="140"
            width="20"
            height="40"
            fill={primaryColor}
            opacity="0.8"
          />
          <rect
            x="120"
            y="155"
            width="20"
            height="25"
            fill={primaryColor}
            opacity="0.6"
          />
          {/* Tools in toolbox */}
          <rect
            x="180"
            y="150"
            width="50"
            height="25"
            rx="4"
            fill={primaryColor}
            opacity="0.5"
          />
          <rect
            x="185"
            y="145"
            width="40"
            height="8"
            rx="2"
            fill={primaryColor}
          />
        </svg>
      )

    default:
      return (
        <svg
          width="300"
          height="240"
          viewBox="0 0 300 240"
          className="w-full h-full p-8"
        >
          <defs>
            <linearGradient
              id="defaultGrad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor={primaryColor} />
              <stop offset="100%" stopColor={secondaryColor} />
            </linearGradient>
          </defs>
          <circle cx="150" cy="120" r="40" fill="url(#defaultGrad)" />
          <rect
            x="130"
            y="100"
            width="40"
            height="40"
            rx="8"
            fill="white"
            opacity="0.8"
          />
          <circle cx="150" cy="120" r="8" fill={primaryColor} />
        </svg>
      )
  }
}

export default function ServiceGallery({
  items,
  title,
  subtitle,
  color = "emerald",
  layout = "side-by-side",
}: ServiceGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  const colorClasses = {
    emerald: {
      button: "bg-emerald-600 hover:bg-emerald-700",
      text: "text-emerald-600",
      border: "border-emerald-200",
      bg: "bg-emerald-50 hover:bg-emerald-50",
      indicator: "bg-emerald-600",
      indicatorInactive: "bg-emerald-200",
    },
    blue: {
      button: "bg-blue-600 hover:bg-blue-700",
      text: "text-blue-600",
      border: "border-blue-200",
      bg: "bg-blue-50 hover:bg-blue-50",
      indicator: "bg-blue-600",
      indicatorInactive: "bg-blue-200",
    },
    purple: {
      button: "bg-purple-600 hover:bg-purple-700",
      text: "text-purple-600",
      border: "border-purple-200",
      bg: "bg-purple-50 hover:bg-purple-50",
      indicator: "bg-purple-600",
      indicatorInactive: "bg-purple-200",
    },
  }

  const classes = colorClasses[color]

  const next = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % items.length)
  }, [items.length])

  const prev = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + items.length) % items.length)
  }, [items.length])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      next()
    }
    if (isRightSwipe) {
      prev()
    }
  }

  if (layout === "side-by-side") {
    return (
      <div className="" role="region" aria-label={`${title} Gallery`}>
        <div className="text-center mb-16 px-6">
          <h3 className="text-2xl lg:text-3xl font-bold text-[#0D1623] mb-4">
            {title}
          </h3>
          <p className="text-[#5F6B7A] text-lg">{subtitle}</p>
        </div>

        <div className="w-full">
          <div
            className="relative"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                className={`flex flex-col md:flex-row items-start gap-0 ${
                  currentIndex % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full md:w-1/2 flex items-start">
                  <div className="w-full relative md:-mt-8">
                    <div className="aspect-[4/3] relative bg-white rounded-2xl flex items-center justify-center">
                      {getCustomSVG(items[currentIndex].id, color)}
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 text-center md:text-left px-6 md:px-16 py-12 md:py-20">
                  <div className="relative max-w-xl mx-auto md:mx-0">
                    <h4 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0D1623] leading-tight mb-4">
                      {items[currentIndex].title}
                    </h4>

                    <p
                      className={`${classes.text} text-xl font-medium mb-6 italic`}
                    >
                      {items[currentIndex].ideal &&
                        `${items[currentIndex].ideal} • `}
                      {items[currentIndex].duration}
                      {items[currentIndex].requirements &&
                        ` • ${items[currentIndex].requirements}`}
                    </p>

                    <div className="mb-6">
                      <p className="text-[#5F6B7A] leading-relaxed mb-6">
                        {items[currentIndex].description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {items[currentIndex].outcomes
                        ?.slice(0, 3)
                        .map((outcome: string, outcomeIndex: number) => (
                          <div
                            key={outcomeIndex}
                            className="flex items-center justify-center md:justify-start"
                          >
                            <svg
                              className={`w-5 h-5 ${classes.text} mr-3 flex-shrink-0`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-sm text-[#5F6B7A]">
                              {outcome}
                            </span>
                          </div>
                        ))}
                      {items[currentIndex].fields
                        ?.slice(0, 3)
                        .map((field: string, fieldIndex: number) => (
                          <div
                            key={fieldIndex}
                            className="flex items-center justify-center md:justify-start"
                          >
                            <svg
                              className={`w-5 h-5 ${classes.text} mr-3 flex-shrink-0`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-sm text-[#5F6B7A]">
                              {field}
                            </span>
                          </div>
                        ))}
                      {items[currentIndex].specializations
                        ?.slice(0, 3)
                        .map((spec: string, specIndex: number) => (
                          <div
                            key={specIndex}
                            className="flex items-center justify-center md:justify-start"
                          >
                            <svg
                              className={`w-5 h-5 ${classes.text} mr-3 flex-shrink-0`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span className="text-sm text-[#5F6B7A]">
                              {spec}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center items-center gap-4 mt-16 mb-20">
              <button
                onClick={prev}
                className={`group flex items-center gap-3 px-6 py-3 ${classes.button} transition-all duration-300 text-white font-medium`}
                aria-label="Previous item"
              >
                <svg
                  className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 16l-4-4m0 0l4-4m-4 4h18"
                  />
                </svg>
                <span>Previous</span>
              </button>
              <button
                onClick={next}
                className={`group flex items-center gap-3 px-6 py-3 ${classes.button} transition-all duration-300 text-white font-medium`}
                aria-label="Next item"
              >
                <span>Next</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="sr-only" aria-live="polite" aria-atomic="true">
          Currently viewing {items[currentIndex].title}
        </div>
      </div>
    )
  }

  return (
    <div
      className={`bg-gradient-to-br from-${color}-50 to-white rounded-2xl border border-${color}-100 p-8 mb-12`}
    >
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold text-[#0D1623] mb-2">{title}</h3>
          <p className="text-[#5F6B7A]">{subtitle}</p>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={prev}
            className={`p-3 bg-white border ${classes.border} rounded-full ${classes.bg} transition-all duration-300`}
          >
            <svg
              className={`w-5 h-5 ${classes.text}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={next}
            className={`p-3 bg-white border ${classes.border} rounded-full ${classes.bg} transition-all duration-300`}
          >
            <svg
              className={`w-5 h-5 ${classes.text}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
            className="bg-white rounded-xl overflow-hidden border border-gray-100"
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-80 bg-white flex items-center justify-center">
                {getCustomSVG(items[currentIndex].id, color)}
                <div
                  className={`absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-${color}-700`}
                >
                  {items[currentIndex].duration}
                </div>
                {items[currentIndex].outcome && (
                  <div
                    className={`absolute bottom-4 left-4 bg-${color}-600/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-white`}
                  >
                    {items[currentIndex].outcome}
                  </div>
                )}
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-bold text-[#0D1623] mb-3">
                  {items[currentIndex].title}
                </h4>
                {items[currentIndex].requirements && (
                  <p className={`${classes.text} text-base font-medium mb-4`}>
                    {items[currentIndex].requirements}
                  </p>
                )}
                <p className="text-[#5F6B7A] mb-6">
                  {items[currentIndex].description}
                </p>

                <div>
                  <h5 className="text-sm font-semibold text-[#0D1623] mb-3">
                    {items[currentIndex].fields
                      ? "Fields of Study:"
                      : items[currentIndex].specializations
                        ? "Specializations:"
                        : "Features:"}
                  </h5>
                  <div className="grid grid-cols-1 gap-2">
                    {(
                      items[currentIndex].fields ||
                      items[currentIndex].specializations ||
                      items[currentIndex].features ||
                      []
                    ).map(item => (
                      <div
                        key={item}
                        className="text-sm text-[#5F6B7A] flex items-center"
                      >
                        <svg
                          className={`w-4 h-4 ${classes.text.replace("text-", "text-").replace("-600", "-500")} mr-2`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center space-x-2 mt-6">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? `${classes.indicator} w-8`
                  : classes.indicatorInactive
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
