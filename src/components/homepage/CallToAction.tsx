"use client"

import Link from "next/link"
import Image from "next/image"
import { useTranslation } from "react-i18next"

export default function CallToAction() {
  const { t } = useTranslation()

  return (
    <section className="py-10 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Ghana Flag Background */}
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2 opacity-10 hidden lg:block">
          <Image
            src="/flag.png"
            alt="Ghana Flag"
            width={300}
            height={200}
            className="object-contain"
          />
        </div>

        <div className="max-w-4xl mx-auto p-8 lg:p-12 text-left">
          {/* Main Title */}
          <div className="mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {t("callToAction.title")}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {t("callToAction.description")}
            </p>
          </div>

          {/* CTA Button */}
          <div>
            <Link
              href="/login"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 text-lg w-full block text-center"
            >
              {t("callToAction.button")}
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-green-200 rounded-full opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-green-300 rounded-full opacity-40"></div>
        <div className="absolute bottom-20 left-20 w-2 h-2 bg-green-200 rounded-full opacity-50"></div>
        <div className="absolute bottom-40 right-10 w-1 h-1 bg-green-400 rounded-full opacity-70"></div>
      </div>
    </section>
  )
}
