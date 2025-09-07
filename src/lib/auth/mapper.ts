import type { User as SupabaseUser } from "@supabase/supabase-js"
import type { User } from "./types"

export function mapSupabaseUserToUser(supabaseUser: SupabaseUser): User {
  return {
    id: supabaseUser.id,
    email: supabaseUser.email || null,
    name:
      supabaseUser.user_metadata?.full_name ||
      supabaseUser.user_metadata?.name ||
      supabaseUser.email?.split("@")[0] ||
      null,
    avatar:
      supabaseUser.user_metadata?.avatar_url ||
      supabaseUser.user_metadata?.picture ||
      null,
    provider: supabaseUser.app_metadata?.provider || "email",
    createdAt: new Date(supabaseUser.created_at),
    updatedAt: new Date(supabaseUser.updated_at || supabaseUser.created_at),
  }
}
