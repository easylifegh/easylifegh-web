"use client"

import React, { useState, Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { useTranslation } from "react-i18next"
import {
  useGoogleAuth,
  useFacebookAuth,
  useAppleAuth,
  useEmailAuth,
} from "../../lib/auth/hooks"
import LoadingSpinner from "@/components/ui/LoadingSpinner"
import ClientOnly from "@/components/ClientOnly"

function LoginContent() {
  const { signIn: signInGoogle } = useGoogleAuth()
  const { signIn: signInFacebook } = useFacebookAuth()
  const { signIn: signInApple } = useAppleAuth()
  const {
    sendMagicLink,
    loading: loadingEmail,
    error: errorEmail,
  } = useEmailAuth()
  const [email, setEmail] = useState("")
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
  const handleFacebook = async () => {
    await signInFacebook()
    window.location.href = "/dashboard"
  }
  const handleApple = async () => {
    await signInApple()
    window.location.href = "/dashboard"
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-white px-4">
      <div className="w-full max-w-[1200px] pt-14 md:pt-20 xl:pt-24">
        {/* Logo */}
        <div className="mb-10 flex w-full justify-center md:justify-start">
          <Link href="/" aria-label="Go to homepage" className="inline-block">
            <Image
              src="/logo.jpeg"
              alt="Logo"
              width={96}
              height={96}
              className="h-20 w-auto md:h-24"
            />
          </Link>
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#0D1623]">
            {t("pages.login.title")}
          </h1>
          <p className="mt-2 text-sm text-[#0D1623]">
            {isGetStarted
              ? t("pages.login.getStartedWelcome")
              : t("pages.login.welcomeBack")}
          </p>
        </div>

        <div className="mt-16 flex flex-col md:flex-row md:items-start md:justify-center gap-12 lg:gap-24">
          {/* LEFT COLUMN */}
          <div className="w-full md:flex-1 mx-auto md:mx-0">
            <form onSubmit={handleEmailSubmit} className="relative">
              <label className="block text-sm font-medium text-[#0D1623] mb-1">
                {t("pages.login.emailLabel")}
              </label>
              <div className="relative border-b border-[#D4D8DD] focus-within:border-[#0D1623]">
                <input
                  type="email"
                  autoComplete="email"
                  className="w-full bg-transparent px-0 py-2 outline-none border-none focus:outline-none focus:ring-0 appearance-none text-[15px] text-[#0D1623] placeholder:text-[#8A94A1]"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                disabled={loadingEmail}
                className="group inline-flex w-full items-center justify-center rounded-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-colors px-10 h-12 md:h-14 text-[15px] md:text-[16px] font-medium bg-white disabled:opacity-60 mt-6"
              >
                <span className="flex items-center">
                  <span>{t("pages.login.sendMagicLink")}</span>
                  {loadingEmail ? (
                    <LoadingSpinner className="ml-3 w-4 h-4" />
                  ) : (
                    <svg
                      className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-0.5"
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
                </span>
              </button>
              {errorEmail && (
                <p className="mt-3 text-xs text-red-500">{errorEmail}</p>
              )}
            </form>
          </div>
          {/* DIVIDER WITH 'or' (always immediately to right of form) */}
          <div className="hidden md:flex self-stretch flex-col items-center px-12">
            <div className="flex-1 w-px bg-[#E5E8EB]" />
            <ClientOnly
              fallback={
                <span className="text-[11px] uppercase tracking-wide text-[#5F6B7A] my-2">
                  or
                </span>
              }
            >
              <span className="text-[11px] uppercase tracking-wide text-[#5F6B7A] my-2">
                {t("common.or")}
              </span>
            </ClientOnly>
            <div className="flex-1 w-px bg-[#E5E8EB]" />
          </div>
          {/* RIGHT COLUMN */}
          <div className="w-full md:flex-1 mx-auto md:mx-0">
            <div className="space-y-4">
              <button
                onClick={handleGoogle}
                className="w-full flex items-stretch h-12 md:h-12 border border-[#1258F5] focus:outline-none group"
              >
                <span className="w-14 flex items-center justify-center border-r border-[#1258F5] bg-white">
                  <Image
                    width={20}
                    height={20}
                    className="h-5 w-5"
                    src="/logo-google.svg"
                    alt="Google"
                  />
                </span>
                <span className="flex-1 flex items-center pl-5 text-sm md:text-base font-medium text-white bg-[#1258F5] tracking-wide">
                  {t("pages.login.continueWithGoogle")}
                </span>
              </button>
              <button
                onClick={handleFacebook}
                className="w-full flex items-stretch h-12 md:h-12 border border-[#2F4A7D] focus:outline-none"
              >
                <span className="w-14 flex items-center justify-center border-r border-[#2F4A7D] bg-white">
                  <Image
                    width={20}
                    height={20}
                    className="h-5 w-5"
                    src="/logo-facebook.svg"
                    alt="Facebook"
                  />
                </span>
                <span className="flex-1 flex items-center pl-5 text-sm md:text-base font-medium text-white bg-[#2F4A7D] tracking-wide">
                  {t("pages.login.continueWithFacebook")}
                </span>
              </button>
              <button
                onClick={handleApple}
                className="w-full flex items-stretch h-12 md:h-12 border border-black focus:outline-none"
              >
                <span className="w-14 flex items-center justify-center border-r border-black bg-white">
                  <Image
                    width={20}
                    height={20}
                    className="h-5 w-5"
                    src="/logo-apple.svg"
                    alt="Apple"
                  />
                </span>
                <span className="flex-1 flex items-center pl-5 text-sm md:text-base font-medium text-[#0D1623] bg-white tracking-wide">
                  {t("pages.login.continueWithApple")}
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* LEGAL */}
        <div
          className="mt-40 text-center"
          style={{ fontSize: "10px", lineHeight: "1.2em" }}
        >
          <nav
            aria-label="Legal"
            className="flex items-center justify-center gap-6 font-medium text-[#0D1623] mb-2"
            style={{ fontSize: "10px" }}
          >
            <ClientOnly
              fallback={
                <Link
                  href="/terms"
                  className="transition-colors hover:text-green-700 underline"
                  style={{ fontSize: "10px" }}
                >
                  Terms of Use
                </Link>
              }
            >
              <Link
                href="/terms"
                className="transition-colors hover:text-green-700 underline"
                style={{ fontSize: "10px" }}
              >
                {t("pages.login.legal.termsOfUse")}
              </Link>
            </ClientOnly>
            <ClientOnly
              fallback={
                <Link
                  href="/privacy"
                  className="transition-colors hover:text-green-700 underline"
                  style={{ fontSize: "10px" }}
                >
                  Privacy Policy
                </Link>
              }
            >
              <Link
                href="/privacy"
                className="transition-colors hover:text-green-700 underline"
                style={{ fontSize: "10px" }}
              >
                {t("pages.login.legal.privacyPolicy")}
              </Link>
            </ClientOnly>
          </nav>

          <ClientOnly
            fallback={
              <p
                className="text-[#5F6B7A]"
                style={{ fontSize: "10px", lineHeight: "2.4em" }}
              >
                This site is protected by reCAPTCHA Enterprise.{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-green-700"
                  style={{ fontSize: "10px" }}
                >
                  Google&apos;s Privacy Policy
                </a>{" "}
                and{" "}
                <a
                  href="https://policies.google.com/terms"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-green-700"
                  style={{ fontSize: "10px" }}
                >
                  Terms of Service
                </a>{" "}
                apply.
              </p>
            }
          >
            <p
              className="text-[#5F6B7A]"
              style={{ fontSize: "10px", lineHeight: "2.4em" }}
            >
              {t("pages.login.legal.recaptchaNotice")}{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-green-700"
                style={{ fontSize: "10px" }}
              >
                {t("pages.login.legal.googlePrivacyPolicy")}
              </a>{" "}
              and{" "}
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-green-700"
                style={{ fontSize: "10px" }}
              >
                {t("pages.login.legal.googleTermsOfService")}
              </a>{" "}
              {t("pages.login.legal.recaptchaApply")}
            </p>
          </ClientOnly>
        </div>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginContent />
    </Suspense>
  )
}
