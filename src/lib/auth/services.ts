import { createClient } from "../supabase/client"
import { SupabaseAuthRepository } from "./repository"
import { mapSupabaseUserToUser } from "./mapper"
import type {
  AuthService,
  User,
  SignInWithOAuthOptions,
  SignInWithMagicLinkOptions,
} from "./types"

class AuthServiceImpl implements AuthService {
  private repository: SupabaseAuthRepository | null = null

  private getRepository() {
    if (!this.repository) {
      try {
        const supabase = createClient()
        this.repository = new SupabaseAuthRepository(supabase)
      } catch (error) {
        throw new Error(
          "Failed to initialize auth service: " +
            (error instanceof Error ? error.message : "Unknown error")
        )
      }
    }
    return this.repository
  }

  async signInWithGoogle(
    options?: SignInWithOAuthOptions
  ): Promise<{ error: string | null }> {
    try {
      await this.getRepository().signInWithOAuth("google", options)
      // OAuth redirects to another page, so we just return success
      return { error: null }
    } catch (error) {
      return {
        error:
          error instanceof Error
            ? error.message
            : "An error occurred during Google sign in",
      }
    }
  }

  async signInWithMagicLink(
    email: string,
    options?: SignInWithMagicLinkOptions
  ): Promise<{ error: string | null }> {
    try {
      await this.getRepository().signInWithOtp(email, options)
      return { error: null }
    } catch (error) {
      return {
        error:
          error instanceof Error
            ? error.message
            : "An error occurred sending magic link",
      }
    }
  }

  async signOut(): Promise<{ error: string | null }> {
    try {
      await this.getRepository().signOut()
      return { error: null }
    } catch (error) {
      return {
        error:
          error instanceof Error
            ? error.message
            : "An error occurred during sign out",
      }
    }
  }

  async getUser(): Promise<User | null> {
    try {
      const supabaseUser = await this.getRepository().getCurrentUser()
      return supabaseUser ? mapSupabaseUserToUser(supabaseUser) : null
    } catch (error) {
      // AuthSessionMissingError is expected when user is not logged in
      if (
        error instanceof Error &&
        (error.message === "Auth session missing!" ||
          error.name === "AuthSessionMissingError")
      ) {
        return null
      }
      console.error("Error getting user:", error)
      return null
    }
  }

  onAuthStateChange(callback: (user: User | null) => void): () => void {
    return this.getRepository().onAuthStateChange(supabaseUser => {
      const user = supabaseUser ? mapSupabaseUserToUser(supabaseUser) : null
      callback(user)
    })
  }
}

export const authService = new AuthServiceImpl()

// Legacy exports for backward compatibility (these will be removed after updating hooks)
export const signInWithGoogle = () => authService.signInWithGoogle()
export const sendSignInLinkToEmail = (email: string) =>
  authService.signInWithMagicLink(email)
export const signInWithFacebook = async () => {
  throw new Error("Facebook auth not implemented")
}
export const signInWithApple = async () => {
  throw new Error("Apple auth not implemented")
}
export const isSignInWithEmailLink = () => false // Not needed with Supabase
export const signInWithEmailLink = async () => {
  throw new Error("Use magic link flow instead")
}
