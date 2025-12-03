import { Card } from "@/components/ui/card"
import { Microscope, Stethoscope, Activity, Zap, Ambulance, UserCheck } from "lucide-react"
import ImmigrationMarquee from "./immigration-marquee"

const services = [
  {
    icon: Microscope,
    title: "Endoscopy & ERCP",
    description: "Advanced diagnostic and therapeutic endoscopic procedures with latest technology.",
  },
  {
    icon: Stethoscope,
    title: "Gastroenterology",
    description: "Comprehensive care for digestive system disorders and gastrointestinal health.",
  },
  {
    icon: Activity,
    title: "Hepatology",
    description: "Specialized liver disease treatment and hepatitis management.",
  },
  {
    icon: Zap,
    title: "EUS Procedures",
    description: "Endoscopic ultrasound for precise diagnostic imaging and intervention.",
  },
  {
    icon: Ambulance,
    title: "Emergency Care",
    description: "24/7 emergency services for acute gastroenterological conditions.",
  },
  {
    icon: UserCheck,
    title: "Consultation",
    description: "Expert consultation in gastrointestinal and hepato-pancreatic conditions.",
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-20 px-0 bg-secondary/30 relative overflow-hidden">
      <div className="mb-16">
        <ImmigrationMarquee />
      </div>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-2">OUR SERVICES</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Comprehensive Medical Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We provide advanced medical services with state-of-the-art technology and expert specialists.
          </p>
        </div>

        {/* Grid - Increased gap and ensured proper min-height for cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <Card
                key={idx}
                className="group p-8 hover:shadow-2xl transition-all duration-300 hover:border-accent hover:-translate-y-2 bg-card min-h-64 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150" />
                <div className="w-14 h-14 bg-gradient-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:shadow-accent/30">
                  <Icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{service.description}</p>
                <a
                  href="/services"
                  className="inline-flex items-center gap-2 mt-6 text-accent font-semibold hover:gap-3 transition-all"
                >
                  Learn More →
                </a>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
