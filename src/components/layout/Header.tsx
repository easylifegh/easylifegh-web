"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslation } from "react-i18next"
import LanguageSwitcher from "@/components/LanguageSwitcher"
import ClientOnly from "@/components/ClientOnly"
import { downloadGuide } from "@/utils/downloadGuide"

// Mobile-optimized Language Switcher - Horizontal Toggle Style
function MobileLanguageSwitcher() {
  const { i18n } = useTranslation()

  const languages = [
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "fr", label: "Français", flag: "🇫🇷" },
    { code: "es", label: "Español", flag: "🇪🇸" },
  ]

  const currentLanguage =
    languages.find(lang => i18n.language === lang.code) || languages[0]

  const changeLanguage = async (code: string) => {
    // Don't change if it's the same language
    if (code === i18n.language) {
      return
    }

    // Change the i18n language
    await i18n.changeLanguage(code)

    // Store preference in localStorage
    localStorage.setItem("i18nextLng", code)

    // Refresh to ensure proper language loading
    window.location.reload()
  }

  const getLanguageTitle = () => {
    switch (currentLanguage.code) {
      case "fr":
        return "Langue"
      case "es":
        return "Idioma"
      default:
        return "Language"
    }
  }

  return (
    <div className="w-full max-w-[300px]">
      <div className="mb-3 text-center">
        <span className="text-sm text-gray-500 font-medium">
          {getLanguageTitle()}
        </span>
      </div>
      <div className="flex bg-gray-100 rounded-lg p-1">
        {languages.map(lang => (
          <button
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-2 rounded-md text-sm font-medium transition-all duration-200 ${
              currentLanguage.code === lang.code
                ? "bg-[#17a253] text-white shadow-sm"
                : "text-gray-700 hover:bg-white hover:shadow-sm"
            }`}
          >
            <span className="text-base">{lang.flag}</span>
            <span className="hidden sm:inline">{lang.label}</span>
            <span className="sm:hidden">{lang.code.toUpperCase()}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default function Header() {
  const pathname = usePathname()
  const { t, i18n } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState<string | null>(null)
  const headerRef = useRef<HTMLElement | null>(null)
  const scrollYRef = useRef<number>(0)

  const toggleMobileMenu = () => setIsMenuOpen(o => !o)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setIsMenuOpen(false)
    }
    const handleScroll = () => {
      setScrolled(window.scrollY > 12)
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          "--header-current-height",
          headerRef.current.offsetHeight + "px"
        )
      }
    }
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false)
        setOpenDropdown(null)
      }
    }
    const handleClickOutside = (ev: MouseEvent) => {
      if (!openDropdown) return
      const anyPanel = document.querySelector(".mega-dropdown-panel")
      const anyTrigger = document.querySelector(
        `.dropdown-trigger[data-id="${openDropdown}"]`
      )
      if (
        anyPanel &&
        !anyPanel.contains(ev.target as Node) &&
        anyTrigger &&
        !anyTrigger.contains(ev.target as Node)
      )
        setOpenDropdown(null)
    }
    window.addEventListener("resize", handleResize)
    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("keydown", handleKey)
    window.addEventListener("mousedown", handleClickOutside)
    requestAnimationFrame(() => {
      if (headerRef.current) {
        document.body.classList.add("has-fixed-header")
        document.documentElement.style.setProperty(
          "--header-current-height",
          headerRef.current.offsetHeight + "px"
        )
      }
      handleScroll()
    })
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("keydown", handleKey)
      window.removeEventListener("mousedown", handleClickOutside)
      document.body.classList.remove("has-fixed-header")
    }
  }, [openDropdown])

  useEffect(() => {
    const active = isMenuOpen
    if (active) {
      scrollYRef.current = window.scrollY
      const prevOverflow = document.body.style.overflow
      const prevPosition = document.body.style.position
      const prevTop = document.body.style.top
      document.body.style.overflow = "hidden"
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollYRef.current}px`
      return () => {
        document.body.style.overflow = prevOverflow
        document.body.style.position = prevPosition
        document.body.style.top = prevTop
        window.scrollTo(0, scrollYRef.current)
      }
    }
  }, [isMenuOpen])

  interface MegaItem {
    id: string
    label: string
    type: "dropdown" | "link"
    path?: string
    groups?: {
      heading?: string
      items: {
        title: string
        description?: string
        path: string
      }[]
    }[]
  }

  const megaNav: MegaItem[] = [
    {
      id: "services",
      label: t("header.services"),
      type: "dropdown",
      groups: [
        {
          items: [
            {
              title: t("navigation.academicServices.title"),
              description: t("navigation.academicServices.description"),
              path: "/services/academic",
            },
            {
              title: t("navigation.tourism.title"),
              description: t("navigation.tourism.description"),
              path: "/services/tourism",
            },
            {
              title: t("navigation.businessTravel.title"),
              description: t("navigation.businessTravel.description"),
              path: "/services/business",
            },
            {
              title: t("navigation.medicalTravel.title"),
              description: t("navigation.medicalTravel.description"),
              path: "/services/medical",
            },
          ],
        },
      ],
    },
    {
      id: "resources",
      label: t("header.resources"),
      type: "dropdown",
      groups: [
        {
          items: [
            {
              title: t("navigation.whyGhana.title"),
              description: t("navigation.whyGhana.description"),
              path: "/why-ghana",
            },
            {
              title: t("navigation.guide.title"),
              description: t("navigation.guide.description"),
              path: "/guide",
            },
            {
              title: t("navigation.faq.title"),
              description: t("navigation.faq.description"),
              path: "/faq",
            },
            // {
            //   title: t("navigation.blog.title"),
            //   description: t("navigation.blog.description"),
            //   path: "/blog",
            // },
          ],
        },
      ],
    },
    {
      id: "pricing",
      label: t("header.pricing"),
      type: "link",
      path: "/#pricing",
    },
    {
      id: "about",
      label: t("common.about"),
      type: "link",
      path: "/about",
    },
    {
      id: "contact",
      label: t("common.contact"),
      type: "link",
      path: "/contact",
    },
  ]

  return (
    <>
      <style jsx global>{`
        body.has-fixed-header {
          padding-top: var(--header-current-height, 88px);
        }
        .mega-dropdown-panel {
          animation: panelFade 0.14s cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes panelFade {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>

      <header
        ref={headerRef}
        className={`fixed top-0 w-full z-50 transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
          scrolled
            ? "bg-white/92 backdrop-blur-[12px] backdrop-saturate-[180%] shadow-[0_2px_4px_rgba(0,0,0,0.06)]"
            : "bg-white"
        } ${openDropdown ? "!bg-white !shadow-none !backdrop-blur-none" : ""}`}
      >
        {/* Top Mini Header - Hidden on mobile and tablet */}
        <div className="hidden xl:block bg-gray-800 text-white">
          <div className="container mx-auto px-4 xl:px-8">
            <div className="flex items-center justify-end h-8 text-sm">
              <div className="flex items-center gap-6">
                <ClientOnly
                  fallback={
                    <span className="hover:text-gray-300 transition-colors">
                      24/7 Support Available
                    </span>
                  }
                >
                  <span className="hover:text-gray-300 transition-colors">
                    24/7 Support Available
                  </span>
                </ClientOnly>
                <ClientOnly>
                  <LanguageSwitcher
                    onLanguageMenuOpen={() => setIsMenuOpen(false)}
                  />
                </ClientOnly>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="border-b border-gray-200">
          <nav>
            <div className="container mx-auto px-4 md:px-6 lg:px-8">
              <div className="flex items-center justify-between h-[64px] md:h-[72px] lg:h-[80px]">
                {/* Brand */}
                <div className="flex items-center flex-grow">
                  <Link
                    href="/"
                    className="flex items-center gap-3 md:gap-4 lg:gap-5 h-[64px] md:h-[72px] lg:h-[80px] pr-2"
                  >
                    <Image
                      src="/logo.png"
                      alt="EasyLife Ghana"
                      width={96}
                      height={96}
                      className="h-[48px] w-auto md:h-[54px] lg:h-[60px] rounded-[6px] object-cover"
                      priority
                    />
                    <ClientOnly
                      fallback={
                        <span className="text-[1.3rem] md:text-[1.45rem] lg:text-[1.65rem] font-semibold tracking-[-0.02em] text-gray-900 leading-none">
                          EasyLife Ghana
                        </span>
                      }
                    >
                      <span className="text-[1.3rem] md:text-[1.45rem] lg:text-[1.65rem] font-semibold tracking-[-0.02em] text-gray-900 leading-none">
                        {t("header.brand")}
                      </span>
                    </ClientOnly>
                  </Link>

                  {/* Desktop Navigation */}
                  <ul className="hidden lg:flex items-center ml-6 xl:ml-10 gap-4 xl:gap-8">
                    {megaNav.map(item => {
                      const isActive = item.path
                        ? pathname === item.path
                        : false
                      if (item.type === "dropdown") {
                        const opened = openDropdown === item.id
                        return (
                          <li
                            key={item.id}
                            className="relative flex items-center"
                            onMouseLeave={() =>
                              setOpenDropdown(cur =>
                                cur === item.id ? null : cur
                              )
                            }
                          >
                            <button
                              type="button"
                              data-id={item.id}
                              className={`dropdown-trigger flex items-center h-[64px] md:h-[72px] lg:h-[80px] px-1 xl:px-2 text-[0.95rem] lg:text-[1.05rem] font-medium text-gray-700 relative transition-colors duration-250 hover:text-[#17a253] group ${opened ? "text-[#17a253] font-semibold" : ""}`}
                              aria-haspopup="true"
                              aria-expanded={opened}
                              onMouseEnter={() => setOpenDropdown(item.id)}
                              onClick={() =>
                                setOpenDropdown(cur =>
                                  cur === item.id ? null : item.id
                                )
                              }
                            >
                              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#17a253] transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                              <ClientOnly
                                fallback={
                                  item.id === "why-ghana"
                                    ? "Why Ghana"
                                    : item.id === "services"
                                      ? "Services"
                                      : item.id === "pricing"
                                        ? "Pricing"
                                        : item.id === "resources"
                                          ? "Resources"
                                          : item.id === "about"
                                            ? "About"
                                            : item.id === "contact"
                                              ? "Contact"
                                              : item.label
                                }
                              >
                                {item.label}
                              </ClientOnly>
                              <span
                                className={`ml-1 text-[0.65rem] leading-none transition-transform duration-250 ease-[cubic-bezier(0.4,0,0.2,1)] ${opened ? "rotate-180" : ""}`}
                              >
                                ▾
                              </span>
                            </button>
                            {opened && (
                              <div
                                className={`mega-dropdown-panel absolute top-full left-0 ${item.groups && item.groups.length === 1 ? "w-[340px]" : "w-[900px]"} max-w-[84vw] bg-white rounded-b-[4px] px-8 py-6 shadow-none z-[150]`}
                              >
                                <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-y-10 gap-x-10">
                                  {item.groups?.map((g, gi) => (
                                    <div
                                      key={gi}
                                      className="min-w-[210px] relative"
                                    >
                                      {gi > 0 && (
                                        <div className="absolute left-[-1.15rem] top-1 bottom-1 w-px bg-gradient-to-b from-transparent via-black/8 to-transparent" />
                                      )}
                                      {g.heading && (
                                        <ClientOnly
                                          fallback={
                                            <div className="text-[0.7rem] font-semibold text-gray-500 uppercase tracking-[0.75px] mb-2">
                                              {g.heading}
                                            </div>
                                          }
                                        >
                                          <div className="text-[0.75rem] font-semibold text-gray-500 uppercase tracking-[0.75px] mb-3">
                                            {g.heading}
                                          </div>
                                        </ClientOnly>
                                      )}
                                      <ul className="space-y-0 list-none m-0 p-0">
                                        {g.items.map(link => (
                                          <li
                                            key={link.path}
                                            className="list-none m-0 p-0"
                                          >
                                            {link.path === "/guide" ? (
                                              <button
                                                onClick={() => {
                                                  downloadGuide(i18n.language)
                                                  setOpenDropdown(null)
                                                }}
                                                className="block py-2 px-0 text-gray-900 no-underline transition-colors duration-250 hover:text-[#17a253] active:text-[#0f6f38] relative text-left w-full bg-transparent border-none cursor-pointer"
                                              >
                                                <ClientOnly
                                                  fallback={
                                                    <>
                                                      <span className="block font-medium">
                                                        Download Guide
                                                      </span>
                                                      <span className="text-[0.8rem] text-gray-500 leading-tight">
                                                        Get our settlement guide
                                                      </span>
                                                    </>
                                                  }
                                                >
                                                  <span className="block font-medium text-[1rem]">
                                                    {link.title}
                                                  </span>
                                                  <span className="text-[0.85rem] text-gray-500 leading-tight">
                                                    {link.description}
                                                  </span>
                                                </ClientOnly>
                                              </button>
                                            ) : (
                                              <Link
                                                href={link.path}
                                                className="block py-2 px-0 text-gray-900 no-underline transition-colors duration-250 hover:text-[#17a253] active:text-[#0f6f38] relative"
                                                onClick={() =>
                                                  setOpenDropdown(null)
                                                }
                                              >
                                                <ClientOnly
                                                  fallback={
                                                    <>
                                                      <span className="block font-semibold text-[0.92rem] tracking-[0.2px] leading-tight">
                                                        {link.title}
                                                      </span>
                                                      {link.description && (
                                                        <span className="block text-[0.72rem] leading-[1.05rem] text-gray-600 mt-1 max-w-[240px]">
                                                          {link.description}
                                                        </span>
                                                      )}
                                                    </>
                                                  }
                                                >
                                                  <span className="block font-semibold text-[1rem] tracking-[0.2px] leading-tight">
                                                    {link.title}
                                                  </span>
                                                  {link.description && (
                                                    <span className="block text-[0.85rem] leading-[1.15rem] text-gray-600 mt-1 max-w-[260px]">
                                                      {link.description}
                                                    </span>
                                                  )}
                                                </ClientOnly>
                                              </Link>
                                            )}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </li>
                        )
                      }
                      return (
                        <li
                          key={item.id}
                          className="relative flex items-center"
                        >
                          <Link
                            href={item.path!}
                            className={`flex items-center h-[64px] md:h-[72px] lg:h-[80px] px-1 xl:px-2 text-[0.95rem] lg:text-[1.05rem] font-medium transition-colors duration-250 hover:text-[#17a253] relative group ${
                              isActive
                                ? "text-[#17a253] font-semibold"
                                : "text-gray-700"
                            }`}
                            onClick={e => {
                              if (item.path === "/#pricing") {
                                e.preventDefault()
                                const element =
                                  document.getElementById("pricing")
                                if (element) {
                                  element.scrollIntoView({ behavior: "smooth" })
                                } else {
                                  window.location.href = "/#pricing"
                                }
                              }
                            }}
                          >
                            <span
                              className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#17a253] transform transition-transform duration-300 origin-left ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                            ></span>
                            <ClientOnly
                              fallback={
                                item.id === "why-ghana"
                                  ? "Why Ghana"
                                  : item.id === "services"
                                    ? "Services"
                                    : item.id === "pricing"
                                      ? "Pricing"
                                      : item.id === "resources"
                                        ? "Resources"
                                        : item.id === "about"
                                          ? "About"
                                          : item.id === "contact"
                                            ? "Contact"
                                            : item.label
                              }
                            >
                              {item.label}
                            </ClientOnly>
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-2 md:gap-3">
                  {/* <Link
                    href="/login"
                    className="hidden lg:inline-flex items-center bg-white border-2 border-black text-black rounded-full px-5 xl:px-7 py-[0.6rem] xl:py-[0.65rem] font-semibold text-[0.95rem] xl:text-base leading-none tracking-[0.25px] xl:tracking-[0.3px] transition-all duration-250 hover:bg-gray-50 active:bg-gray-100 active:translate-y-px whitespace-nowrap"
                  >
                    {t("common.login")}
                  </Link>
                  <Link
                    href="/login"
                    className="hidden lg:inline-flex items-center bg-[#17a253] border border-[#17a253] rounded-full px-5 xl:px-7 py-[0.6rem] xl:py-[0.65rem] font-semibold text-[0.95rem] xl:text-base text-white leading-none tracking-[0.25px] xl:tracking-[0.3px] transition-all duration-250 hover:bg-[#148947] active:bg-[#0f6f38] active:translate-y-px whitespace-nowrap"
                  >
                    {t("common.getStarted")}
                  </Link> */}

                  {/* Mobile Toggle */}
                  <button
                    className={`lg:hidden w-10 h-10 md:w-12 md:h-12 bg-transparent border-0 relative flex items-center justify-center ${isMenuOpen ? "active" : ""}`}
                    type="button"
                    onClick={toggleMobileMenu}
                    aria-controls="mobile-menu"
                    aria-expanded={isMenuOpen}
                    aria-label={
                      isMenuOpen ? "Close navigation" : "Open navigation"
                    }
                  >
                    <div className="relative w-6 h-6 md:w-7 md:h-7">
                      <span
                        className={`absolute w-[24px] md:w-[28px] h-[2px] bg-gray-900 rounded-[1px] left-1/2 -translate-x-1/2 transition-all duration-[0.4s] ease-[cubic-bezier(0.4,0,0.2,1)] ${isMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-[5px] md:top-[6px]"}`}
                      />
                      <span
                        className={`absolute w-[24px] md:w-[28px] h-[2px] bg-gray-900 rounded-[1px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
                      />
                      <span
                        className={`absolute w-[24px] md:w-[28px] h-[2px] bg-gray-900 rounded-[1px] left-1/2 -translate-x-1/2 transition-all duration-[0.4s] ease-[cubic-bezier(0.4,0,0.2,1)] ${isMenuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-[5px] md:bottom-[6px]"}`}
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu */}
            <div
              className={`lg:hidden fixed left-0 right-0 bg-white border-t border-gray-200 z-[900] transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-y-auto ${
                isMenuOpen
                  ? "top-[var(--header-current-height,88px)] h-[calc(100vh-var(--header-current-height,88px))] opacity-100 visible translate-y-0"
                  : "top-[var(--header-current-height,88px)] h-[calc(100vh-var(--header-current-height,88px))] opacity-0 invisible -translate-y-3"
              }`}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Primary navigation"
            >
              <div className="flex flex-col h-full pb-[env(safe-area-inset-bottom)]">
                <div className="flex-1 overflow-auto">
                  <div className="px-0 py-0">
                    {megaNav.map(item => {
                      const isOpen = mobileOpen === item.id
                      if (item.type === "dropdown") {
                        return (
                          <div
                            key={item.id}
                            className="border-b border-gray-100"
                          >
                            <button
                              type="button"
                              className={`w-full flex items-center justify-between px-6 py-[1.25rem] text-left text-[1.15rem] text-gray-900 bg-none border-0 ${isOpen ? "font-semibold" : ""}`}
                              aria-expanded={isOpen}
                              onClick={() =>
                                setMobileOpen(cur =>
                                  cur === item.id ? null : item.id
                                )
                              }
                            >
                              <ClientOnly
                                fallback={
                                  <span>
                                    {item.id === "why-ghana"
                                      ? "Why Ghana"
                                      : item.id === "services"
                                        ? "Services"
                                        : item.id === "pricing"
                                          ? "Pricing"
                                          : item.id === "resources"
                                            ? "Resources"
                                            : item.id === "about"
                                              ? "About"
                                              : item.id === "contact"
                                                ? "Contact"
                                                : item.label}
                                  </span>
                                }
                              >
                                <span>{item.label}</span>
                              </ClientOnly>
                              <span
                                className={`text-[0.85rem] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? "rotate-180" : ""}`}
                              >
                                ▾
                              </span>
                            </button>
                            {isOpen && (
                              <div className="bg-white px-6 py-3 pb-5">
                                {item.groups?.map((g, gi) => (
                                  <div
                                    key={gi}
                                    className={gi > 0 ? "mt-3" : ""}
                                  >
                                    {g.heading && (
                                      <ClientOnly
                                        fallback={
                                          <div className="mb-2 text-[0.75rem] font-semibold text-gray-500 uppercase tracking-[0.5px]">
                                            {g.heading}
                                          </div>
                                        }
                                      >
                                        <div className="mb-1 text-[0.7rem] font-semibold text-gray-500 uppercase tracking-[0.5px]">
                                          {g.heading}
                                        </div>
                                      </ClientOnly>
                                    )}
                                    {g.items.map(link =>
                                      link.path === "/guide" ? (
                                        <button
                                          key={link.path}
                                          onClick={() => {
                                            downloadGuide(i18n.language)
                                            setIsMenuOpen(false)
                                          }}
                                          className="block py-3 text-gray-900 no-underline text-[1rem] hover:text-[#17a253] transition-colors duration-250 text-left w-full bg-transparent border-none"
                                        >
                                          <ClientOnly
                                            fallback={
                                              <>
                                                <span className="block font-medium text-[1rem]">
                                                  Download Guide
                                                </span>
                                                <span className="text-[0.85rem] text-gray-500 leading-tight">
                                                  Get our settlement guide
                                                </span>
                                              </>
                                            }
                                          >
                                            <span className="block font-medium text-[1rem]">
                                              {link.title}
                                            </span>
                                            <span className="text-[0.85rem] text-gray-500 leading-tight">
                                              {link.description}
                                            </span>
                                          </ClientOnly>
                                        </button>
                                      ) : (
                                        <Link
                                          key={link.path}
                                          href={link.path}
                                          className="block py-3 text-gray-900 no-underline text-[1rem] hover:text-[#17a253] transition-colors duration-250"
                                          onClick={() => setIsMenuOpen(false)}
                                        >
                                          <ClientOnly
                                            fallback={
                                              <>
                                                <span className="block font-medium text-[1rem]">
                                                  {link.title}
                                                </span>
                                                {link.description && (
                                                  <span className="block text-gray-500 text-[0.85rem] mt-0.5">
                                                    {link.description}
                                                  </span>
                                                )}
                                              </>
                                            }
                                          >
                                            <span className="block font-medium text-[1rem]">
                                              {link.title}
                                            </span>
                                            {link.description && (
                                              <span className="block text-gray-500 text-[0.85rem] mt-0.5">
                                                {link.description}
                                              </span>
                                            )}
                                          </ClientOnly>
                                        </Link>
                                      )
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )
                      }
                      return (
                        <div key={item.id} className="border-b border-gray-100">
                          <Link
                            href={item.path!}
                            className="block px-6 py-[1.25rem] text-[1.15rem] text-gray-900 no-underline"
                            onClick={e => {
                              setIsMenuOpen(false)
                              if (item.path === "/#pricing") {
                                e.preventDefault()
                                setTimeout(() => {
                                  const element =
                                    document.getElementById("pricing")
                                  if (element) {
                                    element.scrollIntoView({
                                      behavior: "smooth",
                                    })
                                  } else {
                                    window.location.href = "/#pricing"
                                  }
                                }, 100)
                              }
                            }}
                          >
                            <ClientOnly
                              fallback={
                                item.id === "why-ghana"
                                  ? "Why Ghana"
                                  : item.id === "services"
                                    ? "Services"
                                    : item.id === "pricing"
                                      ? "Pricing"
                                      : item.id === "resources"
                                        ? "Resources"
                                        : item.id === "about"
                                          ? "About"
                                          : item.id === "contact"
                                            ? "Contact"
                                            : item.label
                              }
                            >
                              {item.label}
                            </ClientOnly>
                          </Link>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Mobile Actions */}
                <div className="sticky bottom-0 border-t border-gray-200 p-3 bg-gradient-to-b from-white to-gray-50 pb-[calc(env(safe-area-inset-bottom)+1rem)]">
                  <div className="flex flex-col gap-3">
                    {/* Language Switcher - Mobile Optimized */}
                    <div className="flex items-center justify-center py-2">
                      <ClientOnly>
                        <MobileLanguageSwitcher />
                      </ClientOnly>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {/* Login Button */}
                      {/* <ClientOnly
                        fallback={
                          <Link
                            href="/login"
                            className="flex-1 h-[52px] flex items-center justify-center bg-white border-2 border-black text-black rounded-full font-semibold transition-all duration-250 active:bg-gray-100"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Log In
                          </Link>
                        }
                      >
                        <Link
                          href="/login"
                          className="flex-1 h-[52px] flex items-center justify-center bg-white border-2 border-black text-black rounded-full font-semibold transition-all duration-250 active:bg-gray-100"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {t("common.login")}
                        </Link>
                      </ClientOnly> */}

                      {/* Get Started Button */}
                      {/* <ClientOnly
                        fallback={
                          <Link
                            href="/login"
                            className="flex-1 h-[52px] flex items-center justify-center bg-[#17a253] rounded-full font-semibold text-white transition-all duration-250 active:bg-[#148947]"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            Get Started
                          </Link>
                        }
                      >
                        <Link
                          href="/login"
                          className="flex-1 h-[52px] flex items-center justify-center bg-[#17a253] rounded-full font-semibold text-white transition-all duration-250 active:bg-[#148947]"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {t("common.getStarted")}
                        </Link>
                      </ClientOnly> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}
