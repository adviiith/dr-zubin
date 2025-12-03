import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Left Content - Improved spacing and text visibility */}
          <div>
            <p className="text-accent font-semibold mb-3 sm:mb-4 text-sm sm:text-base">WHY CHOOSE US</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-balance text-foreground">
              Experience Excellence in Healthcare
            </h2>
            <p className="text-base sm:text-lg mb-8 sm:mb-10 leading-relaxed text-black">
              At Aditya Hospital, we combine cutting-edge technology with compassionate care to deliver exceptional
              medical services for gastrointestinal and hepatological conditions.
            </p>

            <ul className="space-y-4 sm:space-y-5 mb-8 sm:mb-12">
              {[
                "24/7 Emergency Services Available",
                "Advanced Diagnostic & Therapeutic Equipment",
                "Internationally Trained Specialists",
                "State-of-the-Art Endoscopy Suites",
                "Patient-Centric Care Approach",
              ].map((point, idx) => (
                <li key={idx} className="flex items-start gap-3 sm:gap-4">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base font-medium bg-muted text-foreground">{point}</span>
                </li>
              ))}
            </ul>

            <Link href="/contact">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground text-base px-6 sm:px-8 py-3 w-full sm:w-auto">
                Schedule Your Appointment
              </Button>
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative h-64 sm:h-80 md:h-full rounded-xl overflow-hidden shadow-lg">
            <img
              src="/facility.jpg"
              alt="Hospital care"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
