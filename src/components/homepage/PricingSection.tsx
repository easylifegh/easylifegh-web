"use client"

import { Check, X, Crown } from "lucide-react"
import { useTranslation } from "react-i18next"
import ClientOnly from "@/components/ClientOnly"
import RevealOnScroll from "@/components/motion/RevealOnScroll"
import StaggerContainer from "@/components/motion/StaggerContainer"

export default function PricingSection() {
  const { t } = useTranslation()

  const pricingPlans = [
    {
      id: "basic",
      popular: false,
    },
    {
      id: "standard",
      popular: true,
    },
    {
      id: "premium",
      popular: false,
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <RevealOnScroll>
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
        </RevealOnScroll>

        {/* Pricing Cards */}
        <StaggerContainer
          className="grid lg:grid-cols-3 gap-10"
          staggerChildren={0.15}
        >
          {pricingPlans.map(plan => {
            const isPremium = plan.id === "premium"
            const isPopular = plan.popular
            const inverted = plan.id === "basic" || plan.id === "premium" // dark backgrounds now basic (teal) & premium (indigo)
            // Card style variants
            const base =
              "relative flex flex-col h-full rounded-[48px] transition-all duration-300 border backdrop-blur-sm"
            const variant =
              plan.id === "basic"
                ? "bg-gradient-to-b from-teal-600 via-teal-600 to-teal-500 border-teal-500 shadow-xl"
                : plan.id === "standard"
                  ? "bg-gradient-to-b from-white via-indigo-50 to-white border-indigo-200 shadow-lg"
                  : "bg-gradient-to-b from-indigo-600 via-indigo-600 to-indigo-500 border-indigo-500 shadow-xl"
            const ring = isPopular
              ? "ring-2 ring-offset-2 ring-[#17a253]"
              : isPremium
                ? "ring-4 ring-offset-2 ring-yellow-400/70"
                : ""
            const overflow = isPremium ? "overflow-visible" : "overflow-hidden"

            return (
              <div
                key={plan.id}
                className={`${base} ${variant} ${ring} ${overflow} group`}
              >
                {/* Premium Crown & Glow */}
                {isPremium && (
                  <>
                    <div className="pointer-events-none absolute inset-0 before:absolute before:inset-px before:rounded-[48px] before:bg-[linear-gradient(140deg,rgba(255,255,255,0.15),rgba(255,255,255,0)_40%),radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),rgba(255,255,255,0)_60%)]" />
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                      <div className="flex items-center gap-2 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 text-[#4b3200] px-5 py-2 rounded-full shadow-xl border border-amber-300/60 backdrop-blur-sm">
                        <Crown className="h-4 w-4 drop-shadow-sm" />
                        <span className="text-xs font-bold tracking-wide">
                          PREMIUM
                        </span>
                      </div>
                    </div>
                  </>
                )}

                {/* Decorative shape now for premium instead of basic */}
                {isPremium && (
                  <div className="pointer-events-none absolute -bottom-12 -right-12 w-56 h-56 bg-gradient-to-br from-amber-400/50 via-amber-500/40 to-yellow-300/30 rounded-full blur-2xl opacity-70" />
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
                        inverted ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {t(`pricing.plans.${plan.id}.name`)}
                    </h3>
                    <p
                      className={`${
                        inverted
                          ? "text-white/80"
                          : "text-[#17a253] font-semibold"
                      } mb-5`}
                    >
                      {t(`pricing.plans.${plan.id}.subtitle`)}
                    </p>
                    <div className="mb-2">
                      <div
                        className={`text-4xl font-bold mb-2 tracking-tight ${
                          inverted ? "text-white" : "text-gray-900"
                        }`}
                      ></div>
                      <div
                        className={`text-sm ${
                          inverted ? "text-white/70" : "text-gray-500"
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
                          inverted ? "text-white/80" : "text-gray-900"
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
                              inverted ? "text-white/90" : "text-gray-700"
                            }`}
                          >
                            <Check
                              className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                                inverted ? "text-white/90" : "text-[#17a253]"
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
                          inverted ? "text-white/80" : "text-gray-900"
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
                              inverted ? "text-white/60" : "text-gray-500"
                            }`}
                          >
                            <X
                              className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                                inverted ? "text-white/50" : "text-gray-400"
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
        </StaggerContainer>

        {/* Bottom CTA */}
        <RevealOnScroll delay={0.3}>
          <div className="text-center mt-16">
            <p className="text-gray-600 mb-6">{t("pricing.cta.helpText")}</p>
            <a
              href="/contact"
              className="inline-flex items-center bg-[#17a253] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#148947] transition-colors duration-200"
            >
              {t("pricing.cta.contactButton")}
            </a>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}
