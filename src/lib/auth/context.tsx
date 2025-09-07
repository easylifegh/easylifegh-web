"use client"

import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react"
import { useAuth } from "./hooks"
import type { User } from "./types"

interface AuthContextType {
  user: User | null
  loading: boolean
  error: string | null
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const auth = useAuth()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Show loading state during hydration
  if (!mounted) {
    return (
      <AuthContext.Provider
        value={{
          user: null,
          loading: true,
          error: null,
          signOut: async () => {},
        }}
      >
        {children}
      </AuthContext.Provider>
    )
  }

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

export function useAuthContext() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider")
  }
  return context
}
