import { createBrowserClient } from "@supabase/ssr"

export function createClient() {
  // Only create client if we're in a browser environment and have the required env vars
  if (typeof window === "undefined") {
    throw new Error(
      "Supabase client can only be created in browser environment"
    )
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing Supabase environment variables")
  }

  return createBrowserClient(supabaseUrl, supabaseAnonKey)
}
