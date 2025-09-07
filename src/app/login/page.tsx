"use client"

import React, { useState, Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { useTranslation } from "react-i18next"
import { useGoogleAuth, useEmailAuth } from "../../lib/auth/hooks"
import LoadingSpinner from "@/components/ui/LoadingSpinner"
import ClientOnly from "@/components/ClientOnly"

function LoginContent() {
  const { signIn: signInGoogle } = useGoogleAuth()
  const {
    sendMagicLink,
    loading: loadingEmail,
    error: errorEmail,
  } = useEmailAuth()
  const [email, setEmail] = useState("")
  const [showEmailInput, setShowEmailInput] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const { t } = useTranslation()

  const intent = searchParams.get("intent")
  const isGetStarted = intent === "get-started"

  // Handle email submit (magic link flow)
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = email.trim()
    if (!trimmed) return
    await sendMagicLink(trimmed)
    router.push(`/login/check-email?email=${encodeURIComponent(trimmed)}`)
  }

  // Social login handlers
  const handleGoogle = async () => {
    await signInGoogle()
    window.location.href = "/dashboard"
  }

  return (
    <div className="min-h-screen w-full flex bg-white">
      {/* Left side - Branding (hidden on small screens) */}
      <div className="hidden lg:flex lg:flex-1 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Logo at top left */}
        <div className="absolute top-8 left-8 z-20">
          <Link href="/" aria-label="Go to homepage" className="inline-block">
            <Image
              src="/logo.png"
              alt={t("header.brand")}
              width={96}
              height={96}
              className="h-36 w-auto rounded-lg"
            />
          </Link>
        </div>

        {/* Main illustration area */}
        <div className="relative z-10 flex flex-col justify-center items-center p-12 w-full">
          <div className="mb-8">
            <Image
              src="/easylife.png"
              alt="EasyLife Ghana Illustration"
              width={400}
              height={300}
              className="w-full max-w-md h-auto"
            />
          </div>
          <div className="text-center max-w-md">
            <ClientOnly
              fallback={
                <>
                  <h2
                    className="text-2xl font-bold mb-4 text-gray-900"
                    suppressHydrationWarning
                  >
                    EasyLife Ghana
                  </h2>
                  <p
                    className="text-gray-600 leading-relaxed"
                    suppressHydrationWarning
                  >
                    {/* placeholder to avoid mismatch */}
                  </p>
                </>
              }
            >
              <h2
                className="text-2xl font-bold mb-4 text-gray-900"
                suppressHydrationWarning
              >
                {t("pages.login.leftPanel.heading")}
              </h2>
              <p
                className="text-gray-600 leading-relaxed"
                suppressHydrationWarning
              >
                {t("pages.login.leftPanel.description")}
              </p>
            </ClientOnly>
          </div>
        </div>

        {/* Subtle decorative elements */}
        <div className="absolute top-20 right-16 w-20 h-20 bg-blue-100/30 rounded-full blur-xl" />
        <div className="absolute bottom-32 left-16 w-16 h-16 bg-green-100/40 rounded-full blur-lg" />
        <div className="absolute top-1/2 right-8 w-12 h-12 bg-gray-100/50 rounded-full blur-md" />
      </div>

      {/* Right side - Login form */}
      <div className="flex-1 flex items-center justify-center px-4 lg:px-8">
        <div className="w-full max-w-md lg:max-w-lg">
          {/* Mobile logo */}
          <div className="lg:hidden mb-8 flex justify-center">
            <Link href="/" aria-label="Go to homepage" className="inline-block">
              <Image
                src="/logo.png"
                alt={t("header.brand")}
                width={96}
                height={96}
                className="h-24 w-auto rounded-xl"
              />
            </Link>
          </div>

          {/* Header (hydration-safe) */}
          <div className="text-center mb-8 lg:mb-12">
            <ClientOnly fallback={<div className="h-14" />}>
              <h1
                className="text-3xl lg:text-4xl font-bold text-[#0D1623] mb-3"
                suppressHydrationWarning
              >
                {t("pages.login.title")}
              </h1>
              <p
                className="text-base lg:text-lg text-[#5F6B7A]"
                suppressHydrationWarning
              >
                {isGetStarted
                  ? t("pages.login.getStartedWelcome")
                  : t("pages.login.welcomeBack")}
              </p>
            </ClientOnly>
          </div>

          {/* Login Methods */}
          <div className="space-y-4">
            {!showEmailInput ? (
              <>
                {/* Google Login - Clean style matching reference */}
                <button
                  onClick={handleGoogle}
                  className="w-full flex items-center justify-center gap-4 h-14 lg:h-16 bg-white border border-[#dadce0] text-[#3c4043] rounded-lg font-medium text-base lg:text-lg transition-colors duration-150 hover:border-[#bdc1c6] focus:outline-none"
                >
                  <Image
                    width={20}
                    height={20}
                    className="h-5 w-5"
                    src="/logo-google.svg"
                    alt="Google"
                  />
                  <span suppressHydrationWarning>
                    {t("pages.login.continueWithGoogle")}
                  </span>
                </button>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-[#E5E8EB]" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <ClientOnly
                      fallback={
                        <span className="bg-white px-4 text-[#5F6B7A] uppercase tracking-wide text-xs">
                          or
                        </span>
                      }
                    >
                      <span className="bg-white px-4 text-[#5F6B7A] uppercase tracking-wide text-xs">
                        {t("common.or")}
                      </span>
                    </ClientOnly>
                  </div>
                </div>

                {/* Continue with Email Button */}
                <button
                  onClick={() => setShowEmailInput(true)}
                  className="w-full flex items-center justify-center gap-4 h-14 lg:h-16 bg-[#17a253] text-white rounded-lg font-medium text-base lg:text-lg transition-colors duration-150 hover:bg-[#148947] focus:outline-none"
                >
                  <span suppressHydrationWarning>
                    {t("pages.login.continueWithEmail")}
                  </span>
                </button>
              </>
            ) : (
              <div className="space-y-6">
                {/* Back button */}
                <button
                  onClick={() => setShowEmailInput(false)}
                  className="flex items-center gap-2 text-[#5F6B7A] text-sm hover:text-[#0D1623] transition-colors"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  {t("pages.login.backToOptions")}
                </button>

                {/* Email Form */}
                <form onSubmit={handleEmailSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm lg:text-base font-medium text-[#0D1623] mb-3">
                      {t("pages.login.emailLabel")}
                    </label>
                    <div className="relative border-b-2 border-[#D4D8DD] focus-within:border-[#0D1623] transition-colors">
                      <input
                        type="email"
                        autoComplete="email"
                        className="w-full bg-transparent px-0 py-3 lg:py-4 outline-none border-none focus:outline-none focus:ring-0 appearance-none text-base lg:text-lg text-[#0D1623] placeholder:text-[#8A94A1]"
                        placeholder={t("pages.login.emailPlaceholder")}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                        autoFocus
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={loadingEmail}
                    className="w-full flex items-center justify-center gap-3 h-14 lg:h-16 bg-[#17a253] text-white rounded-lg font-semibold text-base lg:text-lg transition-colors duration-150 hover:bg-[#148947] focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <span suppressHydrationWarning>
                      {t("pages.login.sendMagicLink")}
                    </span>
                    {loadingEmail ? (
                      <LoadingSpinner className="w-5 h-5" />
                    ) : (
                      <svg
                        className="w-5 h-5 transition-transform group-hover:translate-x-0.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    )}
                  </button>
                  {errorEmail && (
                    <p className="text-sm text-red-500">{errorEmail}</p>
                  )}
                </form>
              </div>
            )}
          </div>

          {/* Legal Footer */}
          <div className="mt-12 text-center">
            <nav
              aria-label="Legal"
              className="flex items-center justify-center gap-6 font-medium text-[#5F6B7A] mb-3"
            >
              <ClientOnly
                fallback={
                  <span className="text-xs opacity-0">placeholder</span>
                }
              >
                <Link
                  href="/terms"
                  className="text-xs transition-colors hover:text-[#17a253] underline"
                >
                  {t("pages.login.legal.termsOfUse")}
                </Link>
              </ClientOnly>
              <ClientOnly
                fallback={
                  <span className="text-xs opacity-0">placeholder</span>
                }
              >
                <Link
                  href="/privacy"
                  className="text-xs transition-colors hover:text-[#17a253] underline"
                >
                  {t("pages.login.legal.privacyPolicy")}
                </Link>
              </ClientOnly>
            </nav>

            <ClientOnly
              fallback={
                <p className="text-xs text-[#8A94A1] leading-relaxed opacity-0">
                  placeholder
                </p>
              }
            >
              <p className="text-xs text-[#8A94A1] leading-relaxed">
                {t("pages.login.legal.recaptchaNotice")}{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#17a253]"
                >
                  {t("pages.login.legal.googlePrivacyPolicy")}
                </a>{" "}
                and{" "}
                <a
                  href="https://policies.google.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-[#17a253]"
                >
                  {t("pages.login.legal.googleTermsOfService")}
                </a>{" "}
                {t("pages.login.legal.recaptchaApply")}
              </p>
            </ClientOnly>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div>
          {/* Using translation key instead of raw text would require hook; simple static text is acceptable but removed for i18n purity */}
        </div>
      }
    >
      <LoginContent />
    </Suspense>
  )
}
