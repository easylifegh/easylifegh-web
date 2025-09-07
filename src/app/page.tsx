import HeroSection from "@/components/homepage/HeroSection"
import WhyChooseGhana from "@/components/homepage/WhyChooseGhana"
import ApplicationProcess from "@/components/homepage/ApplicationProcess"
import PricingSection from "@/components/homepage/PricingSection"
import FAQ from "@/components/homepage/FAQ"
import CallToAction from "@/components/homepage/CallToAction"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <WhyChooseGhana />
      <ApplicationProcess />
      <PricingSection />
      <FAQ />
      <CallToAction />
    </div>
  )
}
