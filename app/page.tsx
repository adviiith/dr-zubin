import HeroCarousel from "@/components/home/hero-carousel"
import ServicesGrid from "@/components/home/services-grid"
import StatsSection from "@/components/home/stats-section"
import DrZubinSection from "@/components/home/dr-zubin-section"
import AccreditationSection from "@/components/home/accreditation-section"
import CTASection from "@/components/home/cta-section"
import Testimonials from "@/components/home/testimonials"
import MapSection from "@/components/home/map-section"

export default function Home() {
  return (
    <main>
      <HeroCarousel />
      <ServicesGrid />
      <StatsSection />
      <DrZubinSection />
      <AccreditationSection />
      <CTASection />
      <Testimonials />
      <MapSection />
    </main>
  )
}
