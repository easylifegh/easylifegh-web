"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import ClientOnly from "@/components/ClientOnly"

// Simple helper icon component (outline style)
const Icon: React.FC<{ path: string; className?: string }> = ({
  path,
  className,
}) => (
  <svg
    className={className || "w-6 h-6"}
    fill="none"
    stroke="currentColor"
    strokeWidth={1.8}
    strokeLinecap="round"
    strokeLinejoin="round"
    viewBox="0 0 24 24"
  >
    <path d={path} />
  </svg>
)

export default function WhyGhanaPage() {
  const { t } = useTranslation()

  // Add custom CSS for animations and scroll effects
  React.useEffect(() => {
    const style = document.createElement("style")
    style.textContent = `
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(30px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      @keyframes drawCircle {
        from {
          stroke-dasharray: 0 1000;
        }
        to {
          stroke-dasharray: 1000 0;
        }
      }
      
      .connectivity-section {
        opacity: 0;
        transform: scale(0.8);
        transition: all 1s ease-out;
      }
      
      .connectivity-section.visible {
        opacity: 1;
        transform: scale(1);
      }
      
      .section-1 { transition-delay: 0.2s; }
      .section-2 { transition-delay: 0.4s; }
      .section-3 { transition-delay: 0.6s; }
      .center-circle { transition-delay: 0.8s; }
    `
    document.head.appendChild(style)

    // Scroll animation observer
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sections = entry.target.querySelectorAll(
            ".connectivity-section"
          )
          sections.forEach((section, index) => {
            setTimeout(() => {
              section.classList.add("visible")
            }, index * 300)
          })
        }
      })
    }, observerOptions)

    const connectivityContainer = document.querySelector(
      ".connectivity-diagram"
    )
    if (connectivityContainer) {
      observer.observe(connectivityContainer)
    }

    return () => {
      document.head.removeChild(style)
      observer.disconnect()
    }
  }, [])

  // Data arrays pulling translation keys
  const businessItems = ["startups", "sectors", "partnerships"] as const
  const healthcareItems = ["facilities", "emergency", "insurance"] as const

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Decorative background elements */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-emerald-100/40 blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-[540px] h-[540px] rounded-full bg-emerald-50 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-emerald-200/50 to-transparent" />
      </div>
      {/* Hero */}
      <header className="relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-36 md:pt-28 md:pb-48">
          <div className="text-center max-w-4xl mx-auto">
            <ClientOnly fallback={<div className="h-20" />}>
              <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0D1623] after:content-[''] after:block after:h-1 after:w-24 after:mx-auto after:mt-6 after:rounded-full after:bg-gradient-to-r after:from-emerald-500 after:to-emerald-300">
                {t("pages.whyGhana.title")}
              </h1>
              <p className="mt-8 text-xl md:text-2xl text-[#5F6B7A] leading-relaxed">
                {t("pages.whyGhana.subtitle")}
              </p>
            </ClientOnly>

            {/* Stats row */}
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              {(
                ["language", "safety", "affordability", "universities"] as const
              ).map(k => (
                <div
                  key={k}
                  className="px-4 py-2 bg-emerald-50 text-emerald-700 text-sm font-medium rounded-md border border-emerald-100"
                >
                  {t(`pages.whyGhana.stats.${k}`)}
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Waves */}
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
      </header>

      <main className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-28">
        {/* Education & Opportunities (split) */}
        <section>
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-emerald-100 to-transparent rounded-full blur-xl" />
              <h2 className="text-3xl font-bold text-[#0D1623] mb-6">
                {t("pages.whyGhana.education.title")}
              </h2>
              <p className="text-[#425165] leading-relaxed mb-8">
                {t("pages.whyGhana.education.intro")}
              </p>
              <ul className="space-y-4">
                {(["accreditation", "programs", "support"] as const).map(k => (
                  <li key={k} className="flex items-start space-x-3">
                    <span className="mt-1 text-emerald-600">
                      <Icon path="M5 13l4 4L19 7" />
                    </span>
                    <span className="text-[#5F6B7A]">
                      {t(`pages.whyGhana.education.points.${k}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                <div className="absolute inset-0 opacity-[0.07] mix-blend-multiply bg-[radial-gradient(circle_at_30%_20%,#10b981,transparent_60%)]" />
                <div className="relative w-full h-72">
                  <Image
                    src="/why-ghana/campus.png"
                    alt="Ghana modern campus"
                    fill
                    priority={false}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-[#0D1623] mb-3 text-lg">
                    {t("pages.whyGhana.education.title")}
                  </h3>
                  <p className="text-sm text-[#5F6B7A] leading-relaxed">
                    {t("pages.whyGhana.education.intro")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Culture & Lifestyle - Alternating Layout Style */}
        <section className="relative py-20">
          <div className="mb-20 text-center max-w-4xl mx-auto">
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-5xl font-bold text-[#0D1623] mb-6">
                {t("pages.whyGhana.culture.title")}
              </h2>
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full animate-pulse" />
            </div>
            <p className="text-lg text-[#5F6B7A] leading-relaxed max-w-2xl mx-auto">
              {t("pages.whyGhana.culture.intro")}
            </p>
          </div>

          <div className="space-y-24">
            {/* Festivals Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="relative h-80 rounded-2xl overflow-hidden">
                  <Image
                    src="/why-ghana/culture-festivals.png"
                    alt="Ghanaian festivals and celebrations"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent" />

                  {/* Floating Elements */}
                  <div className="absolute top-6 left-6 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:animate-spin-slow transition-all duration-1000">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="text-center md:text-left mb-8">
                  <h3 className="text-3xl font-bold text-[#0D1623] mb-4">
                    {t("pages.whyGhana.culture.items.festivals")}
                  </h3>
                  <p className="text-[#5F6B7A] max-w-xl">
                    {t("pages.whyGhana.culture.descriptions.festivals", {
                      defaultValue:
                        "Experience vibrant celebrations throughout the year",
                    })}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                      <svg
                        className="w-6 h-6 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0D1623] mb-2">
                        Homowo Festival
                      </h4>
                      <p className="text-sm text-[#5F6B7A]">
                        Harvest celebration of the Ga people with traditional
                        food and dance
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                      <svg
                        className="w-6 h-6 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0D1623] mb-2">
                        Yam Festival
                      </h4>
                      <p className="text-sm text-[#5F6B7A]">
                        Annual thanksgiving celebration for successful harvest
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                      <svg
                        className="w-6 h-6 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 19c-5 0-9-3-9-7s4-7 9-7c.285 0 .567.012.845.037C10.33 3.513 11.14 2 12.331 2c1.647 0 2.982 1.51 2.982 3.375 0 .546-.13 1.062-.36 1.516.735.32 1.547.809 1.547 1.609 0 1.104-1.343 2-3 2s-3-.896-3-2c0-.8.812-1.289 1.547-1.609" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0D1623] mb-2">
                        Chale Wote Festival
                      </h4>
                      <p className="text-sm text-[#5F6B7A]">
                        Contemporary street art and performance festival
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cuisine Section - Reversed Layout */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 order-2 md:order-1">
                <div className="text-center md:text-left mb-8">
                  <h3 className="text-3xl font-bold text-[#0D1623] mb-4">
                    {t("pages.whyGhana.culture.items.cuisine")}
                  </h3>
                  <p className="text-[#5F6B7A] max-w-xl">
                    {t("pages.whyGhana.culture.descriptions.cuisine", {
                      defaultValue:
                        "Discover rich flavors and traditional cooking methods",
                    })}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                      <svg
                        className="w-6 h-6 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2l4 4-4 4M10 6L6 2l-4 4 4 4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0D1623] mb-2">
                        Jollof Rice
                      </h4>
                      <p className="text-sm text-[#5F6B7A]">
                        Ghana&apos;s signature spiced rice dish with vegetables
                        and meat
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                      <svg
                        className="w-6 h-6 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0D1623] mb-2">
                        Fufu & Soup
                      </h4>
                      <p className="text-sm text-[#5F6B7A]">
                        Traditional staple served with flavorful groundnut or
                        palm nut soup
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                      <svg
                        className="w-6 h-6 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 5v14M5 12l14 0" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0D1623] mb-2">
                        Kelewele
                      </h4>
                      <p className="text-sm text-[#5F6B7A]">
                        Spiced fried plantains - a popular street food snack
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group order-1 md:order-2">
                <div className="relative h-80 rounded-2xl overflow-hidden">
                  <Image
                    src="/why-ghana/culture-cuisine.png"
                    alt="Traditional Ghanaian cuisine"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent" />

                  <div className="absolute top-6 right-6 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:animate-spin-slow transition-all duration-1000">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2l4 4-4 4M10 6L6 2l-4 4 4 4M18 12v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Music Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="relative h-80 rounded-2xl overflow-hidden">
                  <Image
                    src="/why-ghana/culture-music.png"
                    alt="Ghanaian music and instruments"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent" />

                  <div className="absolute top-6 left-6 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:animate-spin-slow transition-all duration-1000">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 18V5l12-2v13M9 9l12-2M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM21 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="text-center md:text-left mb-8">
                  <h3 className="text-3xl font-bold text-[#0D1623] mb-4">
                    {t("pages.whyGhana.culture.items.music")}
                  </h3>
                  <p className="text-[#5F6B7A] max-w-xl">
                    {t("pages.whyGhana.culture.descriptions.music", {
                      defaultValue:
                        "From traditional rhythms to modern Afrobeats",
                    })}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                      <svg
                        className="w-6 h-6 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 18V5l12-2v13M9 9l12-2" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0D1623] mb-2">
                        Highlife Music
                      </h4>
                      <p className="text-sm text-[#5F6B7A]">
                        Ghana&apos;s signature genre blending traditional and
                        jazz influences
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                      <svg
                        className="w-6 h-6 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0D1623] mb-2">
                        Afrobeats
                      </h4>
                      <p className="text-sm text-[#5F6B7A]">
                        Contemporary fusion of African rhythms with global
                        sounds
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                      <svg
                        className="w-6 h-6 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 19c-5 0-9-3-9-7s4-7 9-7c.285 0 .567.012.845.037C10.33 3.513 11.14 2 12.331 2c1.647 0 2.982 1.51 2.982 3.375 0 .546-.13 1.062-.36 1.516" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0D1623] mb-2">
                        Traditional Drums
                      </h4>
                      <p className="text-sm text-[#5F6B7A]">
                        Djembe, talking drums, and other percussion instruments
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hospitality Section - Reversed Layout */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8 order-2 md:order-1">
                <div className="text-center md:text-left mb-8">
                  <h3 className="text-3xl font-bold text-[#0D1623] mb-4">
                    {t("pages.whyGhana.culture.items.hospitality")}
                  </h3>
                  <p className="text-[#5F6B7A] max-w-xl">
                    {t("pages.whyGhana.culture.descriptions.hospitality", {
                      defaultValue:
                        "Experience the warmth and friendliness of Ghanaian people",
                    })}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                      <svg
                        className="w-6 h-6 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0D1623] mb-2">
                        Akwaaba Welcome
                      </h4>
                      <p className="text-sm text-[#5F6B7A]">
                        The famous Ghanaian greeting meaning &quot;welcome&quot;
                        in Twi
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                      <svg
                        className="w-6 h-6 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                        <polyline points="9,22 9,12 15,12 15,22" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0D1623] mb-2">
                        Community Spirit
                      </h4>
                      <p className="text-sm text-[#5F6B7A]">
                        Strong sense of community and extended family bonds
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                      <svg
                        className="w-6 h-6 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0D1623] mb-2">
                        Ubuntu Philosophy
                      </h4>
                      <p className="text-sm text-[#5F6B7A]">
                        &quot;I am because we are&quot; - the spirit of mutual
                        support
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group order-1 md:order-2">
                <div className="relative h-80 rounded-2xl overflow-hidden">
                  <Image
                    src="/why-ghana/culture-hospitality.png"
                    alt="Ghanaian hospitality and community"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent" />

                  <div className="absolute top-6 right-6 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:animate-spin-slow transition-all duration-1000">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Traditional Dance & Arts Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative group">
                <div className="relative h-80 rounded-2xl overflow-hidden">
                  <Image
                    src="/why-ghana/culture-dance.png"
                    alt="Traditional Ghanaian dance"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent" />

                  <div className="absolute top-6 left-6 w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:animate-spin-slow transition-all duration-1000">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 19c-5 0-9-3-9-7s4-7 9-7c.285 0 .567.012.845.037C10.33 3.513 11.14 2 12.331 2c1.647 0 2.982 1.51 2.982 3.375 0 .546-.13 1.062-.36 1.516.735.32 1.547.809 1.547 1.609 0 1.104-1.343 2-3 2s-3-.896-3-2c0-.8.812-1.289 1.547-1.609" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="text-center md:text-left mb-8">
                  <h3 className="text-3xl font-bold text-[#0D1623] mb-4">
                    Traditional Dance & Arts
                  </h3>
                  <p className="text-[#5F6B7A] max-w-xl">
                    Experience the vibrant rhythms and colorful expressions of
                    Ghanaian culture
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                      <svg
                        className="w-6 h-6 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0D1623] mb-2">
                        Adowa Dance
                      </h4>
                      <p className="text-sm text-[#5F6B7A]">
                        Traditional ceremonial dance of the Akan people
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                      <svg
                        className="w-6 h-6 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 18V5l12-2v13M9 9l12-2M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM21 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0D1623] mb-2">
                        Drumming Traditions
                      </h4>
                      <p className="text-sm text-[#5F6B7A]">
                        Ancient rhythms that tell stories and connect
                        communities
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors duration-300">
                      <svg
                        className="w-6 h-6 text-emerald-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 14l9-5-9-5-9 5 9 5zm0 7l9-5-9-5-9 5 9 5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#0D1623] mb-2">
                        Kente Weaving
                      </h4>
                      <p className="text-sm text-[#5F6B7A]">
                        Sacred cloth patterns with deep cultural meaning
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Background Decorations */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-emerald-100/30 to-emerald-200/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-tr from-emerald-50/40 to-emerald-100/30 rounded-full blur-3xl" />
        </section>

        {/* (Removed sections: Advantages, Cost of Living, Student Life) */}

        {/* Connectivity & Access - Clean Circular Design */}
        <section className="relative py-20">
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0D1623] mb-6">
              {t("pages.whyGhana.connectivity.title")}
            </h2>
            <p className="text-lg text-[#5F6B7A] leading-relaxed max-w-2xl mx-auto">
              Stay seamlessly connected to the world while experiencing
              Ghana&apos;s rich culture
            </p>
          </div>

          {/* Clean Circular Connectivity Diagram */}
          <div className="flex justify-center connectivity-diagram">
            <div className="relative w-[600px] h-[600px] max-w-full">
              <svg viewBox="0 0 600 600" className="w-full h-full">
                <defs>
                  <linearGradient
                    id="airportGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#059669" />
                  </linearGradient>
                  <linearGradient
                    id="digitalGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#34d399" />
                    <stop offset="100%" stopColor="#10b981" />
                  </linearGradient>
                  <linearGradient
                    id="regionalGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#065f46" />
                    <stop offset="100%" stopColor="#047857" />
                  </linearGradient>
                </defs>

                {/* Airport Connectivity Section */}
                <path
                  d="M 300,50 A 250,250 0 0,1 516.51,216.51 L 300,300 Z"
                  fill="url(#airportGradient)"
                  className="connectivity-section section-1 hover:opacity-90 transition-all duration-500 cursor-pointer"
                />

                {/* Digital Infrastructure Section */}
                <path
                  d="M 516.51,216.51 A 250,250 0 0,1 516.51,383.49 L 300,300 Z"
                  fill="url(#digitalGradient)"
                  className="connectivity-section section-2 hover:opacity-90 transition-all duration-500 cursor-pointer"
                />

                {/* Regional Access Section */}
                <path
                  d="M 516.51,383.49 A 250,250 0 0,1 83.49,383.49 L 300,300 Z"
                  fill="url(#regionalGradient)"
                  className="connectivity-section section-3 hover:opacity-90 transition-all duration-500 cursor-pointer"
                />

                {/* Text directly on sections */}
                <text
                  x="400"
                  y="150"
                  textAnchor="middle"
                  className="text-xl font-bold fill-white"
                >
                  Airport Access
                </text>
                <text
                  x="400"
                  y="170"
                  textAnchor="middle"
                  className="text-sm fill-white/90"
                >
                  Global Gateway
                </text>

                <text
                  x="480"
                  y="300"
                  textAnchor="middle"
                  className="text-xl font-bold fill-white"
                >
                  Digital
                </text>
                <text
                  x="480"
                  y="320"
                  textAnchor="middle"
                  className="text-xl font-bold fill-white"
                >
                  Network
                </text>
                <text
                  x="480"
                  y="340"
                  textAnchor="middle"
                  className="text-sm fill-white/90"
                >
                  5G & Fiber
                </text>

                <text
                  x="300"
                  y="450"
                  textAnchor="middle"
                  className="text-xl font-bold fill-white"
                >
                  Regional Hub
                </text>
                <text
                  x="300"
                  y="470"
                  textAnchor="middle"
                  className="text-sm fill-white/90"
                >
                  West Africa Gateway
                </text>
              </svg>
            </div>
          </div>
        </section>

        {/* Business & Innovation + Healthcare (two-column stack) */}
        <section className="grid lg:grid-cols-2 gap-28 items-start">
          <div>
            <h2 className="text-3xl font-bold text-[#0D1623] mb-20">
              {t("pages.whyGhana.business.title")}
            </h2>
            <p className="text-[#425165] leading-relaxed mb-10 max-w-xl">
              {t("pages.whyGhana.business.intro")}
            </p>
            <ul className="space-y-5">
              {businessItems.map(k => (
                <li key={k} className="flex items-start space-x-3">
                  <span className="mt-1 text-emerald-600">
                    <Icon path="M12 3v18M3 12h18" />
                  </span>
                  <span className="text-sm text-[#5F6B7A]">
                    {t(`pages.whyGhana.business.items.${k}`)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#0D1623] mb-14">
              {t("pages.whyGhana.healthcare.title")}
            </h2>
            <div className="space-y-5">
              {healthcareItems.map(k => (
                <div key={k} className="flex items-start space-x-3">
                  <span className="mt-1 text-emerald-600">
                    <Icon path="M5 13l4 4L19 7" />
                  </span>
                  <p className="text-sm text-[#5F6B7A]">
                    {t(`pages.whyGhana.healthcare.items.${k}`)}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12 relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
              <div className="relative w-full h-56">
                <Image
                  src="/why-ghana/healthcare.png"
                  alt="Modern healthcare facility in Ghana"
                  fill
                  priority={false}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden rounded-2xl border border-emerald-200/70 bg-gradient-to-br from-emerald-50 to-white p-10 md:p-14">
          <div className="max-w-3xl relative">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D1623] mb-4">
              {t("pages.whyGhana.cta.title")}
            </h2>
            <p className="text-lg text-[#425165] mb-8">
              {t("pages.whyGhana.cta.subtitle")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/login"
                className="rounded-md bg-emerald-600 text-white px-6 py-3 text-sm font-semibold hover:bg-emerald-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60"
              >
                {t("pages.whyGhana.cta.applyButton")}
              </Link>
              <Link
                href="/guide"
                className="rounded-md border border-emerald-300 bg-white text-emerald-700 px-6 py-3 text-sm font-semibold hover:border-emerald-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50"
              >
                {t("pages.whyGhana.cta.guideButton")}
              </Link>
              <Link
                href="/contact"
                className="rounded-md border border-transparent text-emerald-700 px-6 py-3 text-sm font-semibold hover:text-emerald-900 focus:outline-none"
              >
                {t("pages.whyGhana.cta.contactButton")}
              </Link>
            </div>
          </div>
          <div className="pointer-events-none absolute -right-24 -bottom-24 w-96 h-96 bg-gradient-to-tr from-emerald-100 to-emerald-50 rounded-full opacity-60" />
        </section>
      </main>
    </div>
  )
}

// Circular culture visualization component (desktop only)
