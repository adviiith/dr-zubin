import { Card } from "@/components/ui/card"

const doctors = [
  {
    name: "Dr. Zubin Sharma",
    specialty: "Senior Consultant, GI Endoscopist & Endosonologist",
    credentials: "MD, MRCP (UK), FRCPI (Ireland), FRCP (Edinburgh), FASGE, European Board of Gastroenterology & Hepatology",
    bio: "Dr. Zubin Sharma is a senior consultant with extensive experience in GI endoscopy and endoscopic ultrasound. He has passed the European Board of Gastroenterology & Hepatology and holds a Speciality Certificate in Gastroenterology from the U.K. He completed his fellowship at Academic Medical Centre, Amsterdam, trained in Hepatology at Kings College Hospital, London, and underwent advanced training in Third Space Endoscopy from Japan.",
    image: "https://images.unsplash.com/photo-1559839734335-3ec0a9b79a5e?w=400&h=500&fit=crop",
  },
]

export default function TeamPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative py-32 px-4 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto text-center">
          <p className="text-accent font-semibold mb-2">OUR TEAM</p>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Expert Medical Professionals
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet our team of highly qualified specialists dedicated to your health
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-xl transition-all group">
                <div className="relative h-80 overflow-hidden bg-muted">
                  <img
                    src={doctor.image || "/placeholder.svg"}
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-foreground mb-1">{doctor.name}</h3>
                  <p className="text-accent font-semibold text-sm mb-3">{doctor.specialty}</p>
                  <p className="text-muted-foreground text-xs mb-4 font-medium">{doctor.credentials}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{doctor.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
