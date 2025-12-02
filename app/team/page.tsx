import { Card } from "@/components/ui/card"

const doctors = [
  {
    name: "Dr. Zubin Sharma",
    specialty: "Senior Consultant, GI Endoscopist & Endosonologist",
    credentials: "MD, MRCP (UK), FRCPI (Ireland), FRCP (Edinburgh), ESEGH",
    bio: "Dr. Zubin Sharma is a senior consultant with extensive experience in GI endoscopy and endoscopic ultrasound. He completed his fellowship at Academic Medical Centre, Amsterdam and has trained under renowned endoscopists.",
    image: "https://images.unsplash.com/photo-1559839734335-3ec0a9b79a5e?w=400&h=500&fit=crop",
  },
  {
    name: "Dr. Kapil Jain",
    specialty: "Director & Gastroenterologist",
    credentials: "MBBS, MD (Medicine), DM (Gastroenterology)",
    bio: "Dr. Kapil Jain is the visionary director of Aditya Hospital. With a passion for gastroenterology and hepatology, he established this center to provide world-class medical care in the region.",
    image: "https://images.unsplash.com/photo-1622879278866-9df17bef8e1a?w=400&h=500&fit=crop",
  },
  {
    name: "Dr. Pradeep Jain",
    specialty: "Psychiatry Specialist",
    credentials: "MD, MRCP, DM",
    bio: "Dr. Pradeep Jain specializes in psychiatry and provides comprehensive mental health services alongside our medical offerings.",
    image: "https://images.unsplash.com/photo-1612349317150-e16fa66d18a9?w=400&h=500&fit=crop",
  },
  {
    name: "Dr. Ankur Singh",
    specialty: "Orthopedic & Spine Surgeon",
    credentials: "MS, MCh (Orthopedics)",
    bio: "Dr. Ankur Singh is an accomplished orthopedic and spine surgeon with expertise in complex orthopedic procedures.",
    image: "https://images.unsplash.com/photo-1537368610025-700dbee93fe1?w=400&h=500&fit=crop",
  },
  {
    name: "Dr. Bharathi Akula",
    specialty: "Surgical Gastroenterologist",
    credentials: "MBBS, MS, MRCS, ESOG, FAGES",
    bio: "Dr. Bharathi Akula specializes in surgical gastroenterology with a focus on minimally invasive techniques.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
  },
  {
    name: "Dr. Akash Nair",
    specialty: "General Surgery & Surgical Oncology",
    credentials: "MBBS, MS, FELLOWSHIP",
    bio: "Dr. Akash Nair brings expertise in general surgery and surgical oncology to our multidisciplinary team.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
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
