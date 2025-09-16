"use client"

import React, { useState } from "react"
import { useTranslation } from "react-i18next"
import ClientOnly from "@/components/ClientOnly"

export default function ContactPage() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  )

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission - replace with actual form handling
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus("success")
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
    } catch (error) {
      console.error("Contact form submission failed:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen w-full bg-white">
      {/* Wave Hero Header (aligned with About page style) */}
      <header className="relative">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-40 md:pt-28 md:pb-52">
          <div className="text-center">
            <ClientOnly fallback={<div className="h-20" />}>
              <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0D1623] after:content-[''] after:block after:h-1 after:w-24 after:mx-auto after:mt-6 after:rounded-full after:bg-gradient-to-r after:from-emerald-500 after:to-emerald-300">
                {t("pages.contact.title")}
              </h1>
              <p className="mt-8 text-xl md:text-2xl text-[#5F6B7A] max-w-3xl mx-auto leading-relaxed">
                {t("pages.contact.subtitle")}
              </p>
            </ClientOnly>
          </div>
        </div>
        {/* Layered Waves */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-0 w-full translate-y-[1px]"
        >
          <svg
            className="w-full h-20 md:h-24 text-emerald-50"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0 80c120 20 240-40 360-40s240 60 360 60 240-60 360-60 240 60 360 40v40H0z"
            />
          </svg>
          <svg
            className="w-full h-16 -mt-8 text-white mix-blend-multiply opacity-70"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path
              fill="currentColor"
              d="M0 90c160 10 240-50 400-50s240 70 360 70 240-70 360-70 240 70 320 50v30H0z"
            />
          </svg>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <ClientOnly fallback={<div className="h-8" />}>
                <h2 className="text-2xl font-bold text-[#0D1623] mb-6">
                  {t("pages.contact.getInTouch")}
                </h2>
              </ClientOnly>
              <p className="text-[#5F6B7A] text-lg leading-relaxed mb-8">
                <ClientOnly
                  fallback={
                    <span>
                      We&apos;re here to help you with your journey to Ghana.
                    </span>
                  }
                >
                  {t("pages.contact.description")}
                </ClientOnly>
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-8">
              {/* Email */}
              <div className="group">
                <div className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-xl transition-all duration-200">
                  <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center text-[#17a253]">
                    <svg
                      className="w-5 h-5"
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
                  <div>
                    <h3 className="text-base font-semibold text-[#0D1623] mb-1">
                      <ClientOnly fallback={<span>Email</span>}>
                        {t("pages.contact.email")}
                      </ClientOnly>
                    </h3>
                    <p className="text-[#5F6B7A] text-sm">
                      info@easylifeghana.com
                    </p>
                    <p className="text-[#5F6B7A] text-sm">
                      support@easylifeghana.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="group">
                <div className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-xl transition-all duration-200">
                  <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center text-[#17a253]">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#0D1623] mb-1">
                      <ClientOnly fallback={<span>Phone</span>}>
                        {t("pages.contact.phone")}
                      </ClientOnly>
                    </h3>
                    <p className="text-[#5F6B7A] text-sm">
                      +233 (0) 26 215 5555
                    </p>
                    <p className="text-[#5F6B7A] text-sm">
                      +233 (0) 53 825 4404
                    </p>
                  </div>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="group">
                <div className="flex items-center space-x-4 p-4 hover:bg-gray-50 rounded-xl transition-all duration-200">
                  <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center text-[#17a253]">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-[#0D1623] mb-1">
                      WhatsApp
                    </h3>
                    <p className="text-[#5F6B7A] text-sm mb-2">
                      +233 (0) 55 123 4567
                    </p>
                    <a
                      href="https://wa.me/233551234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#25D366] hover:text-[#128C7E] transition-all duration-200 text-sm font-medium hover:gap-3"
                    >
                      <ClientOnly fallback={<span>Chat with us</span>}>
                        {t("pages.contact.chatWithUs")}
                      </ClientOnly>
                      <svg
                        className="w-4 h-4 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <ClientOnly fallback={<div className="h-8" />}>
              <h2 className="text-2xl font-bold text-[#0D1623] mb-8">
                {t("pages.contact.sendMessage")}
              </h2>
            </ClientOnly>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800">
                  <ClientOnly
                    fallback={
                      <span>
                        Thank you! Your message has been sent successfully.
                      </span>
                    }
                  >
                    {t("pages.contact.messageSuccess")}
                  </ClientOnly>
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800">
                  <ClientOnly
                    fallback={
                      <span>
                        Sorry, there was an error sending your message. Please
                        try again.
                      </span>
                    }
                  >
                    {t("pages.contact.messageError")}
                  </ClientOnly>
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#0D1623] mb-3"
                  >
                    <ClientOnly fallback={<span>Full Name *</span>}>
                      {t("pages.contact.form.name")}
                    </ClientOnly>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 text-[#0D1623] placeholder-[#8A94A1] bg-white border border-[#E5E8EB] rounded-xl focus:border-[#17a253] focus:ring-1 focus:ring-[#17a253] focus:outline-none transition-all duration-200 hover:border-[#D4D8DD] group-hover:border-[#D4D8DD]"
                    placeholder={t("pages.contact.form.namePlaceholder")}
                  />
                </div>
                <div className="group">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#0D1623] mb-3"
                  >
                    <ClientOnly fallback={<span>Email Address *</span>}>
                      {t("pages.contact.form.email")}
                    </ClientOnly>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 text-[#0D1623] placeholder-[#8A94A1] bg-white border border-[#E5E8EB] rounded-xl focus:border-[#17a253] focus:ring-1 focus:ring-[#17a253] focus:outline-none transition-all duration-200 hover:border-[#D4D8DD] group-hover:border-[#D4D8DD]"
                    placeholder={t("pages.contact.form.emailPlaceholder")}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="group">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[#0D1623] mb-3"
                  >
                    <ClientOnly fallback={<span>Phone Number</span>}>
                      {t("pages.contact.form.phone")}
                    </ClientOnly>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 text-[#0D1623] placeholder-[#8A94A1] bg-white border border-[#E5E8EB] rounded-xl focus:border-[#17a253] focus:ring-1 focus:ring-[#17a253] focus:outline-none transition-all duration-200 hover:border-[#D4D8DD] group-hover:border-[#D4D8DD]"
                    placeholder={t("pages.contact.form.phonePlaceholder")}
                  />
                </div>
                <div className="group">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-[#0D1623] mb-3"
                  >
                    <ClientOnly fallback={<span>Subject *</span>}>
                      {t("pages.contact.form.subject")}
                    </ClientOnly>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-4 text-[#0D1623] bg-white border border-[#E5E8EB] rounded-xl focus:border-[#17a253] focus:ring-1 focus:ring-[#17a253] focus:outline-none transition-all duration-200 hover:border-[#D4D8DD] group-hover:border-[#D4D8DD] cursor-pointer"
                  >
                    <option value="">
                      {t(
                        "pages.contact.form.selectSubject",
                        "Select a subject"
                      )}
                    </option>
                    <option value="university-application">
                      {t(
                        "pages.contact.form.subjects.universityApplication",
                        "University Application"
                      )}
                    </option>
                    <option value="visa-assistance">
                      {t(
                        "pages.contact.form.subjects.visaAssistance",
                        "Visa Assistance"
                      )}
                    </option>
                    <option value="accommodation">
                      {t(
                        "pages.contact.form.subjects.accommodation",
                        "Accommodation"
                      )}
                    </option>
                    <option value="business-travel">
                      {t(
                        "pages.contact.form.subjects.businessTravel",
                        "Business Travel"
                      )}
                    </option>
                    <option value="medical-travel">
                      {t(
                        "pages.contact.form.subjects.medicalTravel",
                        "Medical Travel"
                      )}
                    </option>
                    <option value="tourism">
                      {t(
                        "pages.contact.form.subjects.tourism",
                        "Tourism & Cultural Tours"
                      )}
                    </option>
                    <option value="general">
                      {t(
                        "pages.contact.form.subjects.general",
                        "General Inquiry"
                      )}
                    </option>
                  </select>
                </div>
              </div>

              <div className="group">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#0D1623] mb-3"
                >
                  <ClientOnly fallback={<span>Message *</span>}>
                    {t("pages.contact.form.message")}
                  </ClientOnly>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 text-[#0D1623] placeholder-[#8A94A1] bg-white border border-[#E5E8EB] rounded-xl focus:border-[#17a253] focus:ring-1 focus:ring-[#17a253] focus:outline-none transition-all duration-200 hover:border-[#D4D8DD] group-hover:border-[#D4D8DD] resize-vertical"
                  placeholder={t("pages.contact.form.messagePlaceholder")}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#17a253] text-white py-4 px-6 rounded-xl font-medium text-lg hover:bg-[#148947] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <ClientOnly fallback={<span>Sending...</span>}>
                      {t("pages.contact.form.sending")}
                    </ClientOnly>
                  </>
                ) : (
                  <>
                    <ClientOnly fallback={<span>Send Message</span>}>
                      {t("pages.contact.form.send")}
                    </ClientOnly>
                    <svg
                      className="w-5 h-5 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Office Information - Centered */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* Office Address */}
          <div className="group">
            <div className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-xl transition-all duration-200">
              <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center text-[#17a253]">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-[#0D1623] mb-1">
                  <ClientOnly fallback={<span>Office</span>}>
                    {t("pages.contact.office")}
                  </ClientOnly>
                </h3>
                <p className="text-[#5F6B7A] text-sm leading-relaxed">
                  123 Liberation Road
                  <br />
                  Accra Central
                  <br />
                  Greater Accra Region, Ghana
                </p>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div className="bg-gradient-to-r from-[#F8F9FA] to-white rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-[#0D1623] mb-4">
              <ClientOnly fallback={<span>Office Hours</span>}>
                {t("pages.contact.officeHours")}
              </ClientOnly>
            </h3>
            <div className="space-y-3 text-[#5F6B7A]">
              <div className="flex justify-between items-center">
                <span className="font-medium">Monday - Friday</span>
                <span className="text-[#0D1623] font-medium">
                  8:00 AM - 6:00 PM
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Saturday</span>
                <span className="text-[#0D1623] font-medium">
                  9:00 AM - 4:00 PM
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium">Sunday</span>
                <span className="text-[#8A94A1]">Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
