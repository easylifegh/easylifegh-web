"use client"

import { useEffect } from "react"
import "../i18n"

interface I18nProviderProps {
  children: React.ReactNode
}

export default function I18nProvider({ children }: I18nProviderProps) {
  useEffect(() => {
    // i18n is already initialized by the import
  }, [])

  return <>{children}</>
}
