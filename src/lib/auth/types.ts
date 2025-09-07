import type { User as SupabaseUser } from "@supabase/supabase-js"

export interface User {
  id: string
  email: string | null
  name: string | null
  avatar: string | null
  provider: string
  createdAt: Date
  updatedAt: Date
}

export interface AuthState {
  user: User | null
  loading: boolean
  error: string | null
}

export interface AuthService {
  signInWithGoogle(): Promise<{ error: string | null }>
  signInWithMagicLink(email: string): Promise<{ error: string | null }>
  signOut(): Promise<{ error: string | null }>
  getUser(): Promise<User | null>
}

export interface AuthRepository {
  getCurrentUser(): Promise<SupabaseUser | null>
  signInWithOAuth(provider: "google"): Promise<void>
  signInWithOtp(email: string): Promise<void>
  signOut(): Promise<void>
  onAuthStateChange(callback: (user: SupabaseUser | null) => void): () => void
}

export type AuthProvider = "google" | "magic-link"

export interface SignInWithOAuthOptions {
  redirectTo?: string
}

export interface SignInWithMagicLinkOptions {
  redirectTo?: string
}
