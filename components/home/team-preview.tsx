import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const doctors = [
  {
    name: "Dr. Zubin Sharma",
    specialty: "GI Endoscopist & Hepatologist",
    credentials: "MD, MRCP (UK), FRCPI, FRCP, European Board of Gastroenterology & Hepatology",
    image: "https://images.unsplash.com/photo-1559839734335-3ec0a9b79a5e?w=300&h=300&fit=crop",
  },
  {
    name: "Dr. Kapil Jain",
    specialty: "Director & Gastroenterologist",
    credentials: "MBBS, MD (Medicine)",
    image: "https://images.unsplash.com/photo-1622879278866-9df17bef8e1a?w=300&h=300&fit=crop",
  },
  {
    name: "Dr. Pradeep Jain",
    specialty: "Psychiatry Specialist",
    credentials: "MD, MRCP, DM",
    image: "https://images.unsplash.com/photo-1612349317150-e16fa66d18a9?w=300&h=300&fit=crop",
  },
  {
    name: "Dr. Ankur Singh",
    specialty: "Orthopedic & Spine Surgeon",
    credentials: "MS, MCh (Orthopedics)",
    image: "https://images.unsplash.com/photo-1537368610025-700dbee93fe1?w=300&h=300&fit=crop",
  },
]

export default function TeamPreview() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-2">OUR TEAM</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Certified Healthcare Professionals
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our team of experienced doctors and specialists are dedicated to providing exceptional care.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {doctors.map((doctor, idx) => (
            <Card key={idx} className="overflow-hidden hover:shadow-lg transition-all group">
              <div className="relative h-64 overflow-hidden bg-muted">
                <img
                  src={doctor.image || "/placeholder.svg"}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-foreground">{doctor.name}</h3>
                <p className="text-accent font-semibold text-sm mb-1">{doctor.specialty}</p>
                <p className="text-muted-foreground text-xs">{doctor.credentials}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/about">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">View All Specialists</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
