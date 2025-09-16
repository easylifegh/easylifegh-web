import HeroSection from "@/components/homepage/HeroSection"
import WhyChooseGhana from "@/components/homepage/WhyChooseGhana"
import ApplicationProcess from "@/components/homepage/ApplicationProcess"
import PricingSection from "@/components/homepage/PricingSection"
import FAQ from "@/components/homepage/FAQ"
import CallToAction from "@/components/homepage/CallToAction"
import SectionDivider from "@/components/motion/SectionDivider"
import ParallaxSection from "@/components/motion/ParallaxSection"

export default function Home() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <HeroSection />

      <WhyChooseGhana />

      <ApplicationProcess />

      <ParallaxSection speed={0.2}>
        <PricingSection />
      </ParallaxSection>

      <SectionDivider variant="wave" color="#f9fafb" />

      <FAQ />

      <ParallaxSection speed={0.4}>
        <CallToAction />
      </ParallaxSection>
    </div>
  )
}
