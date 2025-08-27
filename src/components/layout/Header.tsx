"use client"

import { Globe } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"

export default function Header() {
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
      id: "study-ghana",
      label: "Study in Ghana",
      type: "dropdown",
      groups: [
        {
          heading: "Why Ghana",
          items: [
            {
              title: "Why Choose Ghana",
              description: "Discover the benefits of studying in Ghana.",
              path: "/why-ghana",
            },
            {
              title: "Universities & Schools",
              description: "Top institutions and academic programs.",
              path: "/universities",
            },
          ],
        },
        {
          heading: "Student Life",
          items: [
            {
              title: "Student Life",
              description: "Campus culture and student experiences.",
              path: "/student-life",
            },
            {
              title: "Cost of Living",
              description: "Affordable living costs and budgeting.",
              path: "/cost-living",
            },
          ],
        },
      ],
    },
    {
      id: "services",
      label: "Our Services",
      type: "dropdown",
      groups: [
        {
          heading: "Application Support",
          items: [
            {
              title: "English School Registration",
              description: "Register for English language courses.",
              path: "/services/english-school",
            },
            {
              title: "University Placement",
              description: "Get placed in your ideal university.",
              path: "/services/placement",
            },
            {
              title: "Visa Assistance",
              description: "Complete visa application support.",
              path: "/services/visa",
            },
          ],
        },
        {
          heading: "Student Support",
          items: [
            {
              title: "Accommodation Help",
              description: "Find the perfect place to stay.",
              path: "/services/accommodation",
            },
            {
              title: "Airport Pickup",
              description: "Safe arrival and transportation.",
              path: "/services/pickup",
            },
            {
              title: "Orientation Support",
              description: "Get settled into your new life.",
              path: "/services/orientation",
            },
          ],
        },
      ],
    },
    {
      id: "resources",
      label: "Resources",
      type: "dropdown",
      groups: [
        {
          heading: "Helpful Guides",
          items: [
            {
              title: "Application Guide",
              description: "Step-by-step application process.",
              path: "/guide",
            },
            {
              title: "Student Stories",
              description: "Real experiences from our students.",
              path: "/stories",
            },
            {
              title: "Blog & News",
              description: "Latest updates and insights.",
              path: "/blog",
            },
          ],
        },
        {
          heading: "Support",
          items: [
            {
              title: "FAQs",
              description: "Common questions answered.",
              path: "/faq",
            },
            {
              title: "Download Brochure",
              description: "Get our comprehensive guide.",
              path: "/brochure",
            },
          ],
        },
      ],
    },
    { id: "contact", label: "Contact", type: "link", path: "/contact" },
    { id: "apply", label: "Apply Now", type: "link", path: "/apply" },
  ]

  return (
    <>
      <style jsx global>{`
        body.has-fixed-header {
          padding-top: var(--header-current-height, 110px);
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
        {/* Top Mini Header */}
        <div className="bg-gray-800 text-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center justify-end h-8 text-sm">
              <div className="flex items-center gap-6">
                <Link
                  href="/news"
                  className="hover:text-gray-300 transition-colors"
                >
                  News and articles
                </Link>
                <Link
                  href="/events"
                  className="hover:text-gray-300 transition-colors"
                >
                  Events
                </Link>
                <div className="flex items-center gap-1 text-gray-300">
                  <Globe className="h-4 w-4" />
                  <span>English</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="border-b border-gray-200">
          <nav>
            <div className="container mx-auto px-4 lg:px-8">
              <div className="flex items-center justify-between h-[72px]">
                {/* Brand */}
                <div className="flex items-center flex-grow">
                  <Link
                    href="/"
                    className="flex items-center gap-3 h-[72px] pr-1"
                  >
                    <Image
                      src="/logo.jpeg"
                      alt="EasyLife Ghana"
                      width={42}
                      height={42}
                      className="rounded-[8px] object-cover"
                    />
                    <span className="text-[1.4rem] font-semibold tracking-[-0.5px] text-gray-900 leading-none">
                      EasyLife Ghana
                    </span>
                  </Link>

                  {/* Desktop Navigation */}
                  <ul className="hidden lg:flex items-center ml-12 gap-10">
                    {megaNav.map(item => {
                      const isActive =
                        typeof window !== "undefined" && item.path
                          ? window.location.pathname === item.path
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
                              className={`dropdown-trigger flex items-center h-[72px] px-1 text-[0.975rem] font-normal text-gray-900 relative transition-colors duration-250 hover:text-[#17a253] group ${opened ? "text-[#17a253] font-medium" : ""}`}
                              aria-haspopup="true"
                              aria-expanded={opened}
                              onMouseEnter={() => setOpenDropdown(item.id)}
                              onClick={() =>
                                setOpenDropdown(cur =>
                                  cur === item.id ? null : item.id
                                )
                              }
                            >
                              {item.label}
                              <span
                                className={`ml-1 text-[0.65rem] leading-none transition-transform duration-250 ease-[cubic-bezier(0.4,0,0.2,1)] ${opened ? "rotate-180" : ""}`}
                              >
                                ▾
                              </span>
                            </button>
                            {opened && (
                              <div className="mega-dropdown-panel absolute top-full left-0 w-[880px] max-w-[84vw] bg-white rounded-b-[4px] px-8 py-5 shadow-none z-[150]">
                                <div className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-y-9 gap-x-10">
                                  {item.groups?.map((g, gi) => (
                                    <div
                                      key={gi}
                                      className="min-w-[210px] relative"
                                    >
                                      {gi > 0 && (
                                        <div className="absolute left-[-1.15rem] top-1 bottom-1 w-px bg-gradient-to-b from-transparent via-black/8 to-transparent" />
                                      )}
                                      {g.heading && (
                                        <div className="text-[0.7rem] font-semibold text-gray-500 uppercase tracking-[0.75px] mb-2">
                                          {g.heading}
                                        </div>
                                      )}
                                      <ul className="space-y-0 list-none m-0 p-0">
                                        {g.items.map(link => (
                                          <li
                                            key={link.path}
                                            className="list-none m-0 p-0"
                                          >
                                            <Link
                                              href={link.path}
                                              className="block py-1.5 px-0 text-gray-900 no-underline transition-colors duration-250 hover:text-[#17a253] active:text-[#0f6f38] relative"
                                              onClick={() =>
                                                setOpenDropdown(null)
                                              }
                                            >
                                              <span className="block font-semibold text-[0.92rem] tracking-[0.2px] leading-tight">
                                                {link.title}
                                              </span>
                                              {link.description && (
                                                <span className="block text-[0.72rem] leading-[1.05rem] text-gray-600 mt-1 max-w-[240px]">
                                                  {link.description}
                                                </span>
                                              )}
                                            </Link>
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
                            className={`flex items-center h-[72px] px-1 text-[0.975rem] font-normal transition-colors duration-250 hover:text-[#17a253] relative ${
                              isActive
                                ? "text-[#17a253] font-medium"
                                : "text-gray-900"
                            }`}
                          >
                            {item.label}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-3">
                  <Link
                    href="/login"
                    className="hidden lg:inline-flex items-center bg-white border-[1.5px] border-black rounded-full px-6 py-[0.65rem] font-medium text-[0.95rem] text-black leading-none transition-all duration-250 hover:bg-gray-100 active:bg-gray-200"
                  >
                    Log In
                  </Link>

                  <Link
                    href="/get-started"
                    className="hidden lg:inline-flex items-center bg-[#17a253] border border-[#17a253] rounded-full px-7 py-[0.65rem] font-semibold text-base text-white leading-none tracking-[0.3px] transition-all duration-250 hover:bg-[#148947] active:bg-[#0f6f38] active:translate-y-px"
                  >
                    Get Started
                  </Link>

                  {/* Mobile Toggle */}
                  <button
                    className={`lg:hidden w-12 h-12 bg-transparent border-0 relative flex items-center justify-center ${isMenuOpen ? "active" : ""}`}
                    type="button"
                    onClick={toggleMobileMenu}
                    aria-controls="mobile-menu"
                    aria-expanded={isMenuOpen}
                    aria-label={
                      isMenuOpen ? "Close navigation" : "Open navigation"
                    }
                  >
                    <div className="relative w-6 h-6">
                      <span
                        className={`absolute w-[26px] h-0.5 bg-gray-900 rounded-[1px] left-1/2 -translate-x-1/2 transition-all duration-[0.4s] ease-[cubic-bezier(0.4,0,0.2,1)] ${isMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-[6px]"}`}
                      />
                      <span
                        className={`absolute w-[26px] h-0.5 bg-gray-900 rounded-[1px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
                      />
                      <span
                        className={`absolute w-[26px] h-0.5 bg-gray-900 rounded-[1px] left-1/2 -translate-x-1/2 transition-all duration-[0.4s] ease-[cubic-bezier(0.4,0,0.2,1)] ${isMenuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-[6px]"}`}
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
                  ? "top-[var(--header-current-height,110px)] h-[calc(100vh-var(--header-current-height,110px))] opacity-100 visible translate-y-0"
                  : "top-[var(--header-current-height,110px)] h-[calc(100vh-var(--header-current-height,110px))] opacity-0 invisible -translate-y-3"
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
                              className={`w-full flex items-center justify-between px-4 py-[1.05rem] text-left text-[1.05rem] text-gray-900 bg-none border-0 ${isOpen ? "font-semibold" : ""}`}
                              aria-expanded={isOpen}
                              onClick={() =>
                                setMobileOpen(cur =>
                                  cur === item.id ? null : item.id
                                )
                              }
                            >
                              <span>{item.label}</span>
                              <span
                                className={`text-[0.75rem] transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] ${isOpen ? "rotate-180" : ""}`}
                              >
                                ▾
                              </span>
                            </button>
                            {isOpen && (
                              <div className="bg-white px-4 py-2 pb-4">
                                {item.groups?.map((g, gi) => (
                                  <div
                                    key={gi}
                                    className={gi > 0 ? "mt-3" : ""}
                                  >
                                    {g.heading && (
                                      <div className="mb-1 text-[0.7rem] font-semibold text-gray-500 uppercase tracking-[0.5px]">
                                        {g.heading}
                                      </div>
                                    )}
                                    {g.items.map(link => (
                                      <Link
                                        key={link.path}
                                        href={link.path}
                                        className="block py-2.5 text-gray-900 no-underline text-[0.93rem] hover:text-[#17a253] transition-colors duration-250"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        <span className="block font-medium">
                                          {link.title}
                                        </span>
                                        {link.description && (
                                          <span className="block text-gray-500 text-sm mt-0.5">
                                            {link.description}
                                          </span>
                                        )}
                                      </Link>
                                    ))}
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
                            className="block px-4 py-[1.05rem] text-[1.05rem] text-gray-900 no-underline"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Mobile Actions */}
                <div className="sticky bottom-0 border-t border-gray-200 p-3 bg-gradient-to-b from-white to-gray-50 pb-[calc(env(safe-area-inset-bottom)+1rem)]">
                  <div className="flex flex-col gap-3">
                    <Link
                      href="/login"
                      className="w-full h-[52px] flex items-center justify-center bg-white border-[1.5px] border-black rounded-full font-medium text-black transition-all duration-250 active:bg-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Log In
                    </Link>
                    <Link
                      href="/get-started"
                      className="w-full h-[52px] flex items-center justify-center bg-[#17a253] rounded-full font-semibold text-white transition-all duration-250 active:bg-[#148947]"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Get Started
                    </Link>
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
