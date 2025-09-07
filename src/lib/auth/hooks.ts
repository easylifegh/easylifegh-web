import { useState, useEffect } from "react"
import { authService } from "./services"
import type { User } from "./types"

export function useGoogleAuth() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const signIn = async () => {
    setLoading(true)
    setError(null)
    try {
      const result = await authService.signInWithGoogle()
      if (result.error) {
        setError(result.error)
        return null
      }
      // For OAuth flows, the user will be redirected
      // The actual user data will be available after redirect
      return null
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "An error occurred")
      return null
    } finally {
      setLoading(false)
    }
  }

  return { signIn, loading, error }
}

export function useEmailAuth() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [linkSent, setLinkSent] = useState(false)

  const sendMagicLink = async (email: string) => {
    setLoading(true)
    setError(null)
    try {
      const result = await authService.signInWithMagicLink(email)
      if (result.error) {
        setError(result.error)
      } else {
        setLinkSent(true)
      }
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  return {
    sendMagicLink,
    loading,
    error,
    linkSent,
  }
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Only run in client environment
    if (typeof window === "undefined") return

    // Get initial user
    const getInitialUser = async () => {
      try {
        const currentUser = await authService.getUser()
        setUser(currentUser)
      } catch (e) {
        // Don't show AuthSessionMissingError as an error to the user
        if (
          e instanceof Error &&
          (e.message === "Auth session missing!" ||
            e.name === "AuthSessionMissingError")
        ) {
          setUser(null)
        } else {
          setError(e instanceof Error ? e.message : "An error occurred")
          console.error("Auth initialization error:", e)
        }
      } finally {
        setLoading(false)
      }
    }

    getInitialUser()

    // Listen for auth state changes
    let unsubscribe: (() => void) | undefined
    try {
      unsubscribe = authService.onAuthStateChange(user => {
        setUser(user)
        setLoading(false)
      })
    } catch (e) {
      console.error("Auth state change listener error:", e)
      setLoading(false)
    }

    return () => {
      if (unsubscribe) {
        unsubscribe()
      }
    }
  }, [])

  const signOut = async () => {
    setLoading(true)
    setError(null)
    try {
      const result = await authService.signOut()
      if (result.error) {
        setError(result.error)
      } else {
        setUser(null)
      }
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  return {
    user,
    loading,
    error,
    signOut,
  }
}
