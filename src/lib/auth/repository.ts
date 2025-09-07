import type {
  SupabaseClient,
  User as SupabaseUser,
} from "@supabase/supabase-js"
import type {
  AuthRepository,
  SignInWithOAuthOptions,
  SignInWithMagicLinkOptions,
} from "./types"

export class SupabaseAuthRepository implements AuthRepository {
  constructor(private supabase: SupabaseClient) {}

  async getCurrentUser(): Promise<SupabaseUser | null> {
    try {
      const {
        data: { user },
        error,
      } = await this.supabase.auth.getUser()
      if (error) {
        // AuthSessionMissingError is expected when user is not logged in
        if (
          error.message === "Auth session missing!" ||
          error.name === "AuthSessionMissingError"
        ) {
          return null
        }
        console.error("Error getting current user:", error)
        return null
      }
      return user
    } catch (error) {
      // Handle any other errors gracefully
      if (
        error instanceof Error &&
        (error.message === "Auth session missing!" ||
          error.name === "AuthSessionMissingError")
      ) {
        return null
      }
      console.error("Error getting current user:", error)
      return null
    }
  }

  async signInWithOAuth(
    provider: "google",
    options?: SignInWithOAuthOptions
  ): Promise<void> {
    const { error } = await this.supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo:
          options?.redirectTo || `${window.location.origin}/auth/callback`,
      },
    })

    if (error) {
      throw new Error(error.message)
    }
  }

  async signInWithOtp(
    email: string,
    options?: SignInWithMagicLinkOptions
  ): Promise<void> {
    try {
      const { error } = await this.supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo:
            options?.redirectTo || `${window.location.origin}/auth/callback`,
        },
      })

      if (error) {
        console.error("Supabase OTP error:", error)
        throw new Error(error.message)
      }
    } catch (error) {
      console.error("SignInWithOtp error:", error)
      throw error
    }
  }

  async signOut(): Promise<void> {
    const { error } = await this.supabase.auth.signOut()
    if (error) {
      throw new Error(error.message)
    }
  }

  onAuthStateChange(callback: (user: SupabaseUser | null) => void): () => void {
    const {
      data: { subscription },
    } = this.supabase.auth.onAuthStateChange((event, session) => {
      try {
        callback(session?.user || null)
      } catch (error) {
        console.error("Error in auth state change callback:", error)
      }
    })

    return () => subscription.unsubscribe()
  }
}
