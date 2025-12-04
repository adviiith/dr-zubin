import { Card } from "@/components/ui/card"
import { Activity, Stethoscope, Zap, Shield, ClipboardList, Heart, Pill, Scan } from "lucide-react"
import ImmigrationServiceDetail from "@/components/services/immigration-service-detail"
import Link from "next/link"

const services = [
  {
    icon: Activity,
    title: "Diagnostic Endoscopy",
    description:
      "Advanced upper GI endoscopy (Oesophagogastro-duodenoscopy) for diagnosis of food pipe, stomach, and small intestine conditions.",
    slug: "endoscopy-ercp",
    hasPage: true
  },
  {
    icon: ClipboardList,
    title: "Therapeutic ERCP",
    description:
      "Treatment of obstructive jaundice, stones, and pancreatic disorders with advanced therapeutic intervention.",
    slug: "endoscopy-ercp",
    hasPage: true
  },
  {
    icon: Zap,
    title: "Endoscopic Ultrasound",
    description: "Precise diagnostic imaging for cancers of food pipe, stomach, pancreas, and gallbladder.",
    slug: "eus-procedures",
    hasPage: true
  },
  {
    icon: Scan,
    title: "Lower GI Colonoscopy",
    description: "Comprehensive examination and treatment of large intestine conditions with advanced technology.",
    slug: "gastroenterology",
    hasPage: true
  },
  {
    icon: Heart,
    title: "Hepatology Services",
    description: "Expert treatment for Hepatitis B & C, liver diseases, and comprehensive hepatic care.",
    slug: "hepatology",
    hasPage: true
  },
  {
    icon: Shield,
    title: "Emergency Services",
    description: "24/7 emergency care for acute GI bleeds and critical gastroenterological conditions.",
    slug: "contact",
    hasPage: false
  },
  {
    icon: Pill,
    title: "Stenting Procedures",
    description: "Metallic stenting for malignant cases including biliary, enteral, and esophageal stenting.",
    slug: "endoscopy-ercp",
    hasPage: true
  },
  {
    icon: Stethoscope,
    title: "Consultation",
    description: "Expert medical consultation for all gastrointestinal, hepatic, and pancreatic disorders.",
    slug: "contact",
    hasPage: false
  },
]

export default function ServicesPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-32 px-4 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <p className="text-accent font-semibold mb-2">OUR SERVICES</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance text-foreground">Comprehensive Medical Solutions</h1>
          <p className="text-xl max-w-2xl mx-auto text-foreground">
            Advanced diagnostic and therapeutic services delivered by our expert team
          </p>
        </div>
      </section>

      <ImmigrationServiceDetail />

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon
              const linkHref = service.hasPage ? `/services/${service.slug}` : `/${service.slug}`
              const linkText = service.hasPage ? "Learn More →" : "Contact Us →"

              return (
                <Card
                  key={idx}
                  className="p-6 hover:shadow-lg transition-all hover:border-accent hover:-translate-y-1 bg-card"
                >
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                  <Link
                    href={linkHref}
                    className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all text-sm"
                  >
                    {linkText}
                  </Link>
                </Card>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  )
}
