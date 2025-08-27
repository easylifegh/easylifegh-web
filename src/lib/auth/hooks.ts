import { useState } from "react"
import {
  signInWithGoogle,
  signInWithFacebook,
  signInWithApple,
  sendSignInLinkToEmail,
  signInWithEmailLink,
  isSignInWithEmailLink,
} from "./services"

export function useGoogleAuth() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const signIn = async () => {
    setLoading(true)
    setError(null)
    try {
      const result = await signInWithGoogle()
      return result.user
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }
  return { signIn, loading, error }
}

export function useFacebookAuth() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const signIn = async () => {
    setLoading(true)
    setError(null)
    try {
      const result = await signInWithFacebook()
      return result.user
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }
  return { signIn, loading, error }
}

export function useAppleAuth() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const signIn = async () => {
    setLoading(true)
    setError(null)
    try {
      const result = await signInWithApple()
      return result.user
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "An error occurred")
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
      await sendSignInLinkToEmail(email)
      setLinkSent(true)
      // Store email in localStorage for later verification
      localStorage.setItem("emailForSignIn", email)
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  const signInWithMagicLink = async (emailLink: string, userEmail?: string) => {
    setLoading(true)
    setError(null)
    try {
      const emailToUse =
        userEmail || localStorage.getItem("emailForSignIn") || ""
      if (!emailToUse) {
        throw new Error("Email address required")
      }
      const result = await signInWithEmailLink(emailToUse, emailLink)
      localStorage.removeItem("emailForSignIn")
      return result.user
    } catch (e: unknown) {
      setError(e instanceof Error ? e.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  return {
    sendMagicLink,
    signInWithMagicLink,
    loading,
    error,
    linkSent,
    isSignInWithEmailLink,
  }
}
