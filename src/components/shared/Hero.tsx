"use client"

import Image from "next/image"
import ClientOnly from "@/components/ClientOnly"

interface HeroProps {
  title: string
  subtitle: string
  backgroundImage?: string
  className?: string
}

export default function Hero({
  title,
  subtitle,
  backgroundImage,
  className = "",
}: HeroProps) {
  return (
    <header className={`relative ${className}`}>
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      )}

      <div
        className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-40 md:pt-28 md:pb-52 ${backgroundImage ? "z-10" : ""}`}
      >
        <div className="text-center">
          <ClientOnly fallback={<div className="h-20" />}>
            <h1
              className={`relative text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight ${backgroundImage ? "text-white" : "text-[#0D1623]"} after:content-[''] after:block after:h-1 after:w-24 after:mx-auto after:mt-6 after:rounded-full after:bg-gradient-to-r after:from-emerald-500 after:to-emerald-300`}
            >
              {title}
            </h1>
            <p
              className={`mt-8 text-xl md:text-2xl ${backgroundImage ? "text-gray-200" : "text-[#5F6B7A]"} max-w-3xl mx-auto leading-relaxed`}
            >
              {subtitle}
            </p>
          </ClientOnly>
        </div>
      </div>

      {/* Layered Waves - only show if no background image */}
      {!backgroundImage && (
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 w-full translate-y-[1px]"
        >
          <svg
            className="w-full h-20 md:h-24 text-emerald-50"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0 80c120 20 240-40 360-40s240 60 360 60 240-60 360-60 240 60 360 40v40H0z"
            />
          </svg>
          <svg
            className="w-full h-16 -mt-8 text-white mix-blend-multiply opacity-70"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0 90c160 10 240-50 400-50s240 70 360 70 240-70 360-70 240 70 320 50v30H0z"
            />
          </svg>
        </div>
      )}
    </header>
  )
}
