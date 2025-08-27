"use client"

import Link from "next/link"
import { useTranslation } from "react-i18next"

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <>
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        .float-animation {
          animation: float 3s ease-in-out infinite;
        }
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .pulse-animation {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-white to-white flex items-center justify-center px-4">
        <div className="text-center max-w-2xl w-full">
          {/* 404 Number with Animation */}
          <div className="mb-12">
            <div className="float-animation text-[12rem] sm:text-[16rem] font-black text-transparent bg-gradient-to-r from-[#17a253] to-[#0f6f38] bg-clip-text leading-none mb-4">
              404
            </div>
            <div className="pulse-animation absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#17a253]/10 rounded-full blur-3xl -z-10"></div>
          </div>

          {/* Content */}
          <div className="fade-in-up mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {t("notFound.title")}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-md mx-auto">
              {t("notFound.subtitle")}
            </p>
          </div>

          {/* Buttons */}
          <div className="fade-in-up flex justify-center items-center">
            <Link
              href="/"
              className="group inline-flex items-center justify-center rounded-full border-2 border-[#17a253] text-[#17a253] hover:bg-[#17a253] hover:text-white transition-all duration-300 px-8 h-12 md:h-14 text-[15px] md:text-[16px] font-medium bg-white shadow-sm hover:shadow-md active:scale-95"
            >
              <span className="flex items-center">
                <svg
                  className="mr-2 w-4 h-4 transition-transform group-hover:-translate-x-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <span>{t("notFound.goHome")}</span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
