"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "react-i18next"
import ClientOnly from "@/components/ClientOnly"

export default function AuthCodeError() {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen w-full flex flex-col items-center bg-white px-4">
      <div className="w-full max-w-[600px] pt-14 md:pt-20 xl:pt-24">
        {/* Logo */}
        <div className="mb-10 flex w-full justify-center">
          <Link href="/" aria-label="Go to homepage" className="inline-block">
            <Image
              src="/logo.png"
              alt="EasyLife Ghana"
              width={96}
              height={96}
              className="h-20 w-auto md:h-24"
              priority
            />
          </Link>
        </div>

        <div className="text-center">
          <div className="mb-8">
            {/* Error Icon */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <ClientOnly
              fallback={
                <>
                  <h1 className="text-3xl md:text-4xl font-bold text-[#0D1623] mb-4">
                    Authentication Error
                  </h1>
                  <p className="text-[#5F6B7A] text-lg mb-6">
                    Sorry, we couldn&apos;t authenticate you. This could be due
                    to an expired link or an invalid authentication code.
                  </p>
                </>
              }
            >
              <h1 className="text-3xl md:text-4xl font-bold text-[#0D1623] mb-4">
                {t("pages.auth.error.title", "Authentication Error")}
              </h1>
              <p className="text-[#5F6B7A] text-lg mb-6">
                {t("pages.auth.error.message")}
              </p>
            </ClientOnly>
          </div>

          <div className="space-y-4">
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-lg bg-[#17a253] text-white hover:bg-[#148947] transition-colors px-8 h-14 text-lg font-medium"
            >
              <ClientOnly fallback={<span>Return to Login</span>}>
                <span>{t("pages.auth.error.returnToLogin")}</span>
              </ClientOnly>
            </Link>
          </div>

          {/* Help Section */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg text-sm text-[#5F6B7A]">
            <ClientOnly
              fallback={
                <>
                  <p className="mb-2">
                    <strong>Need help?</strong>
                  </p>
                  <p>• Try requesting a new magic link</p>
                  <p>
                    • Make sure you&apos;re using the latest link from your
                    email
                  </p>
                  <p>• Contact support if the problem persists</p>
                </>
              }
            >
              <p className="mb-2">
                <strong>{t("pages.auth.error.helpTitle")}</strong>
              </p>
              <p>• {t("pages.auth.error.helpTip1")}</p>
              <p>• {t("pages.auth.error.helpTip2")}</p>
              <p>• {t("pages.auth.error.helpTip3")}</p>
            </ClientOnly>
          </div>
        </div>

        {/* Legal Footer */}
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
                <span
                  className="transition-colors underline"
                  style={{ fontSize: "10px" }}
                >
                  Terms of Use
                </span>
              }
            >
              <Link
                href="/terms"
                className="transition-colors hover:text-[#17a253] underline"
                style={{ fontSize: "10px" }}
              >
                {t("pages.login.legal.termsOfUse") || "Terms of Use"}
              </Link>
            </ClientOnly>
            <ClientOnly
              fallback={
                <span
                  className="transition-colors underline"
                  style={{ fontSize: "10px" }}
                >
                  Privacy Policy
                </span>
              }
            >
              <Link
                href="/privacy"
                className="transition-colors hover:text-[#17a253] underline"
                style={{ fontSize: "10px" }}
              >
                {t("pages.login.legal.privacyPolicy") || "Privacy Policy"}
              </Link>
            </ClientOnly>
          </nav>
        </div>
      </div>
    </div>
  )
}
