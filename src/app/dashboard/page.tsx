"use client"

import { useAuthContext } from "@/lib/auth/context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Dashboard() {
  const { user, loading, signOut } = useAuthContext()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login")
    }
  }, [user, loading, router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow px-6 py-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-gray-600 mt-2">Welcome back!</p>
            </div>
            <button
              onClick={signOut}
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
            >
              Sign Out
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                User Information
              </h2>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium text-gray-600">
                    Name:
                  </span>
                  <p className="text-gray-900">{user.name || "Not provided"}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-600">
                    Email:
                  </span>
                  <p className="text-gray-900">{user.email}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-600">
                    Provider:
                  </span>
                  <p className="text-gray-900 capitalize">{user.provider}</p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-600">
                    User ID:
                  </span>
                  <p className="text-gray-900 font-mono text-sm">{user.id}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Account
              </h2>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-medium text-gray-600">
                    Member since:
                  </span>
                  <p className="text-gray-900">
                    {user.createdAt.toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <span className="text-sm font-medium text-gray-600">
                    Last updated:
                  </span>
                  <p className="text-gray-900">
                    {user.updatedAt.toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
