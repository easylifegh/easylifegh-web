"use client"

import React, { useEffect, Suspense } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { useTranslation } from "react-i18next"
import { useEmailAuth } from "../../../lib/auth/hooks"
import ClientOnly from "@/components/ClientOnly"

function CheckEmailContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const { t } = useTranslation()
  const email = searchParams.get("email") || ""
  const { signInWithMagicLink, isSignInWithEmailLink } = useEmailAuth()

  useEffect(() => {
    // Check if this page was loaded via magic link
    if (isSignInWithEmailLink(window.location.href)) {
      signInWithMagicLink(window.location.href, email)
        .then(() => {
          window.location.href = "/dashboard"
        })
        .catch(error => {
          console.error("Magic link sign-in error:", error)
          router.push("/login?error=invalid-link")
        })
    }
  }, [email, signInWithMagicLink, isSignInWithEmailLink, router])

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-white px-4">
      <div className="w-full max-w-[600px] pt-14 md:pt-20 xl:pt-24">
        {/* Logo */}
        <div className="mb-10 flex w-full justify-center">
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
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#0D1623] mb-4">
              {t("pages.login.checkEmail.title")}
            </h1>
            <p className="text-[#5F6B7A] text-lg mb-2">
              {t("pages.login.checkEmail.sentTo")}
            </p>
            <p className="text-[#0D1623] font-medium text-lg mb-6">{email}</p>
            <p className="text-[#5F6B7A] text-sm">
              {t("pages.login.checkEmail.instructions")}
            </p>
          </div>

          <div className="space-y-4">
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-colors px-8 h-12 text-[15px] font-medium bg-white"
            >
              {t("pages.login.checkEmail.backToLogin")}
            </Link>
          </div>

          <div className="mt-8 p-4 bg-gray-50 rounded-lg text-sm text-[#5F6B7A]">
            <p className="mb-2">
              <strong>{t("pages.login.checkEmail.troubleTitle")}</strong>
            </p>
            <p>• {t("pages.login.checkEmail.troubleSpam")}</p>
            <p>• {t("pages.login.checkEmail.troubleEmail")}</p>
            <p>• {t("pages.login.checkEmail.troubleExpiry")}</p>
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

export default function CheckEmailPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CheckEmailContent />
    </Suspense>
  )
}
