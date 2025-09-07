"use client"

import { Check, X } from "lucide-react"
import { useTranslation } from "react-i18next"
import ClientOnly from "@/components/ClientOnly"

export default function PricingSection() {
  const { t } = useTranslation()

  const pricingPlans = [
    {
      id: "basic",
      price: 85,
      popular: false,
    },
    {
      id: "standard",
      price: 150,
      popular: true,
    },
    {
      id: "premium",
      price: 280,
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <ClientOnly
            fallback={
              <>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Choose Your Perfect Plan
                </h2>
              </>
            }
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {t("pricing.title")}
            </h2>
          </ClientOnly>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-10">
          {pricingPlans.map(plan => {
            const isPremium = plan.id === "premium"
            const isPopular = plan.popular
            // Card style variants (visual only, content unchanged)
            const base =
              "relative flex flex-col h-full rounded-[48px] overflow-hidden transition-all duration-300 border backdrop-blur-sm"
            const variant =
              plan.id === "basic"
                ? "bg-white/90 border-gray-200 hover:shadow-xl hover:border-gray-300"
                : plan.id === "standard"
                  ? "bg-gradient-to-b from-white via-indigo-50 to-white border-indigo-200 shadow-lg hover:shadow-xl"
                  : "bg-gradient-to-b from-teal-600 via-teal-600 to-teal-500 border-teal-500 shadow-xl hover:shadow-2xl"
            const ring = isPopular ? "ring-2 ring-offset-2 ring-[#17a253]" : ""

            return (
              <div key={plan.id} className={`${base} ${variant} ${ring} group`}>
                {/* Decorative shape for first card to mimic sample design */}
                {plan.id === "basic" && (
                  <div className="pointer-events-none absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-[56px] opacity-90 mix-blend-multiply" />
                )}

                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-[#17a253] text-white px-5 py-1.5 rounded-full text-xs font-semibold tracking-wide shadow-md">
                      {t("pricing.features.mostPopular")}
                    </div>
                  </div>
                )}

                <div className="relative flex flex-col flex-1 p-10 pt-16">
                  {/* Plan Header */}
                  <div className="text-center mb-10">
                    <h3
                      className={`text-2xl font-bold mb-2 ${
                        isPremium ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {t(`pricing.plans.${plan.id}.name`)}
                    </h3>
                    <p
                      className={`${
                        isPremium
                          ? "text-white/80"
                          : "text-[#17a253] font-semibold"
                      } mb-5`}
                    >
                      {t(`pricing.plans.${plan.id}.subtitle`)}
                    </p>
                    {/* Price */}
                    <div className="mb-2">
                      <div
                        className={`text-4xl font-bold mb-2 tracking-tight ${
                          isPremium ? "text-white" : "text-gray-900"
                        }`}
                      >
                        ${plan.price}
                      </div>
                      <div
                        className={`text-sm ${
                          isPremium ? "text-white/70" : "text-gray-500"
                        }`}
                      >
                        {t(`pricing.plans.${plan.id}.description`)} •{" "}
                        {t(`pricing.plans.${plan.id}.processingTime`)}
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-10 flex-1">
                    {/* Included Features */}
                    <div>
                      <h4
                        className={`font-semibold mb-5 tracking-wide text-sm uppercase ${
                          isPremium ? "text-white/80" : "text-gray-900"
                        }`}
                      >
                        {t("pricing.features.whatsIncluded")}
                      </h4>
                      <ul className="space-y-4">
                        {(
                          t(`pricing.plans.${plan.id}.included`, {
                            returnObjects: true,
                          }) as string[]
                        ).map((feature: string, index: number) => (
                          <li
                            key={index}
                            className={`flex items-start gap-3 text-sm leading-snug ${
                              isPremium ? "text-white/90" : "text-gray-700"
                            }`}
                          >
                            <Check
                              className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                                isPremium ? "text-white/90" : "text-[#17a253]"
                              }`}
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Not Included Features */}
                    <div>
                      <h4
                        className={`font-semibold mb-5 tracking-wide text-sm uppercase ${
                          isPremium ? "text-white/80" : "text-gray-900"
                        }`}
                      >
                        {t("pricing.features.notIncluded")}
                      </h4>
                      <ul className="space-y-4">
                        {(
                          t(`pricing.plans.${plan.id}.notIncluded`, {
                            returnObjects: true,
                          }) as string[]
                        ).map((feature: string, index: number) => (
                          <li
                            key={index}
                            className={`flex items-start gap-3 text-sm leading-snug ${
                              isPremium ? "text-white/60" : "text-gray-500"
                            }`}
                          >
                            <X
                              className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                                isPremium ? "text-white/50" : "text-gray-400"
                              }`}
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">{t("pricing.cta.helpText")}</p>
          <a
            href="/contact"
            className="inline-flex items-center bg-[#17a253] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#148947] transition-colors duration-200"
          >
            {t("pricing.cta.contactButton")}
          </a>
        </div>
      </div>
    </section>
  )
}
