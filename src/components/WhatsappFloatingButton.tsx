"use client"
import Image from "next/image"
import { useTranslation } from "react-i18next"

const PHONE_NUMBER = "+24107417877" // sanitized for wa link

export default function WhatsappFloatingButton() {
  const { t } = useTranslation()
  const message = encodeURIComponent("Hello EasyLife Ghana")
  const href = `https://wa.me/${PHONE_NUMBER}?text=${message}`
  return (
    <div className="fixed z-50 bottom-6 right-6 flex flex-col items-end gap-2">
      <div className="px-3 py-2 rounded-md bg-white shadow-lg border border-gray-200 text-[11px] leading-tight text-gray-700 font-medium hidden sm:block">
        <span className="block">{t("whatsapp.needHelp")}</span>
        <span className="block text-[#17a253]">{t("whatsapp.contactUs")}</span>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t("whatsapp.contactUs") || "WhatsApp"}
        className="group relative w-14 h-14 rounded-full bg-[#25D366] shadow-xl shadow-[#25D366]/30 hover:shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <Image
          src="/logo-whatsapp.svg"
          alt="WhatsApp"
          width={40}
          height={40}
          className="w-8 h-8 group-hover:scale-110 transition-transform"
        />
      </a>
    </div>
  )
}
