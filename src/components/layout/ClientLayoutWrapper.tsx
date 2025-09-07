"use client"
import { usePathname } from "next/navigation"
import Header from "./Header"
import Footer from "./Footer"
import React from "react"
import dynamic from "next/dynamic"

const WhatsappFloatingButton = dynamic(
  () => import("@/components/WhatsappFloatingButton"),
  { ssr: false }
)

/**
 * ClientLayoutWrapper conditionally renders global chrome (Header/Footer)
 * We hide them on auth related pages like /login
 */
export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const hideChrome = pathname?.startsWith("/login")
  return (
    <>
      {!hideChrome && <Header />}
      <main>{children}</main>
      {!hideChrome && <Footer />}
      {!hideChrome && <WhatsappFloatingButton />}
    </>
  )
}
